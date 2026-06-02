import { readUserMemory } from '../../../../../lib/tech-academia/chat-memory';
import { buildChatSystemMessages } from '../../../../../lib/tech-academia/chat-prompts';
import { adminAuth } from '../../../../../lib/tech-academia/firebase-admin';
import {
  createGeminiChatCompletionStream,
  GeminiError,
  type GeminiMessage,
} from '../../../../../lib/tech-academia/gemini';
import { checkAndIncrementChatQuota, QuotaError } from '../../../../../lib/tech-academia/quotas';
import { CHAT_MODES, type ChatApiHistoryMessage, type ChatApiRequestBody, type ChatMode } from '../../../../../types/chat';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 4000;
const MAX_HISTORY_MESSAGES = 20;

function getBearerToken(request: Request) {
  const authorization = request.headers.get('authorization');
  const [scheme, token] = authorization?.split(' ') ?? [];

  if (scheme !== 'Bearer' || !token) {
    return null;
  }

  return token;
}

function isChatMode(mode: unknown): mode is ChatMode {
  return typeof mode === 'string' && CHAT_MODES.includes(mode as ChatMode);
}

function getChatHistory(history: unknown): ChatApiHistoryMessage[] {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .flatMap((message): ChatApiHistoryMessage[] => {
      if (
        !message ||
        typeof message !== 'object' ||
        !('role' in message) ||
        !('content' in message)
      ) {
        return [];
      }

      const role = message.role;
      const content = message.content;

      if ((role !== 'assistant' && role !== 'user') || typeof content !== 'string') {
        return [];
      }

      const trimmedContent = content.trim();
      if (!trimmedContent) return [];

      return [
        {
          role,
          content: trimmedContent.slice(0, MAX_MESSAGE_LENGTH),
        },
      ];
    });
}

function jsonError(code: string, error: string, status: number) {
  return Response.json({ code, error }, { status });
}

function encodeSse(event: string, data: unknown) {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

function getSafeStreamError(error: unknown) {
  if (error instanceof GeminiError) {
    return {
      code: error.code,
      message:
        error.code === 'AI_CONFIG_MISSING'
          ? 'AI service is not configured.'
          : 'AI response failed. Please try again.',
    };
  }

  return {
    code: 'STREAM_INTERRUPTED',
    message: 'Connection was interrupted. Please retry.',
  };
}

async function pumpGeminiStream(
  stream: Awaited<ReturnType<typeof createGeminiChatCompletionStream>>['stream'],
  controller: ReadableStreamDefaultController<Uint8Array>,
  encoder: TextEncoder,
) {
  for await (const chunk of stream) {
    const token = chunk.text;

    if (token) {
      controller.enqueue(encoder.encode(encodeSse('token', { content: token })));
    }
  }
}

export async function POST(request: Request) {
  try {
    const token = getBearerToken(request);

    if (!token) {
      return jsonError('AUTH_REQUIRED', 'Authentication required.', 401);
    }

    const decodedToken = await adminAuth.verifyIdToken(token);
    const body = (await request.json()) as ChatApiRequestBody;

    if (!isChatMode(body.mode)) {
      return jsonError('INVALID_CHAT_MODE', 'Invalid chat mode.', 400);
    }

    if (typeof body.message !== 'string') {
      return jsonError('MESSAGE_REQUIRED', 'Message is required.', 400);
    }

    const message = body.message.trim();

    if (!message) {
      return jsonError('MESSAGE_REQUIRED', 'Message is required.', 400);
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return jsonError(
        'MESSAGE_TOO_LONG',
        `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
        400,
      );
    }

    const history = getChatHistory(body.history);
    await checkAndIncrementChatQuota(decodedToken.uid);
    const memory = await readUserMemory(decodedToken.uid);

    const messages: GeminiMessage[] = [
      ...buildChatSystemMessages(body.mode, memory),
      ...history,
      {
        role: 'user',
        content: message,
      },
    ];
    const completion = await createGeminiChatCompletionStream({ messages });
    const encoder = new TextEncoder();

    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          controller.enqueue(
            encoder.encode(
              encodeSse('meta', {
                mode: body.mode,
                model: completion.model,
                uid: decodedToken.uid,
              }),
            ),
          );
          await pumpGeminiStream(completion.stream, controller, encoder);
          controller.enqueue(
            encoder.encode(
              encodeSse('done', {
                mode: body.mode,
                model: completion.model,
                uid: decodedToken.uid,
              }),
            ),
          );
          controller.close();
        } catch (streamError) {
          controller.enqueue(encoder.encode(encodeSse('error', getSafeStreamError(streamError))));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream; charset=utf-8',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (error) {
    if (error instanceof QuotaError) {
      return jsonError(error.code, error.message, error.status);
    }

    if (error instanceof GeminiError) {
      const status = error.code === 'AI_CONFIG_MISSING' ? 500 : 502;
      const message =
        error.code === 'AI_CONFIG_MISSING'
          ? 'AI service is not configured.'
          : 'AI response failed. Please try again.';

      return jsonError(error.code, message, status);
    }

    const message = error instanceof Error ? error.message : '';

    if (message.includes('Firebase ID token')) {
      return jsonError('AUTH_INVALID', 'Please sign in again.', 401);
    }

    return jsonError('UNKNOWN_ERROR', 'Unable to create chat response.', 500);
  }
}

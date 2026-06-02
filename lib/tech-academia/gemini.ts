import { GoogleGenAI, type Content } from '@google/genai';

export type GeminiMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type GeminiChatRequest = {
  messages: GeminiMessage[];
};

const GEMINI_MODEL = 'gemini-2.5-flash';

export class GeminiError extends Error {
  code: 'AI_CONFIG_MISSING' | 'AI_PROVIDER_ERROR' | 'AI_EMPTY_RESPONSE';

  constructor(code: GeminiError['code'], message: string) {
    super(message);
    this.name = 'GeminiError';
    this.code = code;
  }
}

function getGeminiClient() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;

  if (!apiKey) {
    throw new GeminiError(
      'AI_CONFIG_MISSING',
      'AI service is not configured.',
    );
  }

  return new GoogleGenAI({ apiKey });
}

function toGeminiRequest(messages: GeminiMessage[]) {
  const systemInstruction = messages
    .filter((message) => message.role === 'system')
    .map((message) => message.content)
    .join('\n\n');
  const contents: Content[] = messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }],
    }));

  return {
    config: {
      ...(systemInstruction ? { systemInstruction } : {}),
      temperature: 0.4,
    },
    contents,
    model: GEMINI_MODEL,
  };
}

function getSafeError(error: unknown) {
  if (error instanceof GeminiError) return error;

  const message = error instanceof Error ? error.message : 'AI provider request failed.';
  return new GeminiError('AI_PROVIDER_ERROR', message);
}

export async function createGeminiChatCompletion({ messages }: GeminiChatRequest) {
  try {
    const ai = getGeminiClient();
    const response = await ai.models.generateContent(toGeminiRequest(messages));
    const content = response.text?.trim();

    if (!content) {
      throw new GeminiError(
        'AI_EMPTY_RESPONSE',
        'AI provider returned an empty response.',
      );
    }

    return {
      content,
      model: GEMINI_MODEL,
    };
  } catch (error) {
    throw getSafeError(error);
  }
}

export async function createGeminiChatCompletionStream({ messages }: GeminiChatRequest) {
  try {
    const ai = getGeminiClient();
    const stream = await ai.models.generateContentStream(toGeminiRequest(messages));

    return {
      model: GEMINI_MODEL,
      stream,
    };
  } catch (error) {
    throw getSafeError(error);
  }
}

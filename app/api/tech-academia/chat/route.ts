import { NextResponse } from 'next/server';
import { adminAuth } from '../../../../lib/tech-academia/firebase-admin';
import { createOpenRouterChatCompletion } from '../../../../lib/tech-academia/openrouter';

export const runtime = 'nodejs';

const CHAT_MODES = ['teacher', 'engineerMentor', 'coach', 'quiz'] as const;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_HISTORY_MESSAGES = 12;
const GLOBAL_SYSTEM_PROMPT = `You are Tech Academia AI.
Always respond in the same language as the user.
If the user writes Burmese, reply in Burmese.
If the user writes Japanese, reply in Japanese.
If the user writes English, reply in English.`;

type ChatMode = (typeof CHAT_MODES)[number];

type ChatRequestBody = {
  history?: unknown;
  message?: unknown;
  mode?: unknown;
};

type ChatHistoryMessage = {
  role: 'assistant' | 'user';
  content: string;
};

const modePrompts: Record<ChatMode, string> = {
  teacher:
    'You are Tech Academia Teacher Mode. Explain clearly, step by step, and help the learner understand the reasoning.',
  engineerMentor:
    'You are Tech Academia Engineer Mentor Mode. Prioritize correctness, practical constraints, assumptions, and senior engineering judgment.',
  coach:
    'You are Tech Academia Coach Mode. Keep the learner moving with concise next steps, planning, and accountability.',
  quiz:
    'You are Tech Academia Quiz Mode. Create multiple choice questions for Programming, Architecture, Engineering, Japanese Language, Math, and Physics. Ask one question at a time with four options labeled A, B, C, and D. Do not reveal the correct answer until after the user responds. When the user answers a previous question, evaluate it, explain briefly, state the correct answer in your explanation, then ask the next multiple choice question. Keep the same language as the user. Prefix every quiz response with exactly one hidden marker on its own first line: [[QUIZ_RESULT:none;ANSWER:]] for a new question, [[QUIZ_RESULT:correct;ANSWER:B]] after a correct answer, or [[QUIZ_RESULT:incorrect;ANSWER:B]] after an incorrect answer. Replace B with the actual correct option A, B, C, or D.',
};

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

function getChatHistory(history: unknown): ChatHistoryMessage[] {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .flatMap((message): ChatHistoryMessage[] => {
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

function parseQuizResult(content: string) {
  const match = content.match(/^\s*\[\[QUIZ_RESULT:(none|correct|incorrect)(?:;ANSWER:([A-D]?))?\]\]\s*/i);
  const visibleCorrectAnswer = content.match(/correct answer\s*:?\s*([A-D])/i)?.[1]?.toUpperCase();

  if (!match) {
    return {
      correctAnswer: visibleCorrectAnswer,
      content,
      quizResult: 'none' as const,
    };
  }

  return {
    correctAnswer: match[2]?.toUpperCase() || visibleCorrectAnswer,
    content: content.slice(match[0].length).trim(),
    quizResult: match[1].toLowerCase() as 'none' | 'correct' | 'incorrect',
  };
}

function getSafeAssistantContent(content: string, fallback: string) {
  const trimmedContent = content.trim();
  return trimmedContent || fallback.trim() || 'Unable to generate a response. Please try again.';
}

export async function POST(request: Request) {
  try {
    const token = getBearerToken(request);

    if (!token) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    }

    const decodedToken = await adminAuth.verifyIdToken(token);
    const body = (await request.json()) as ChatRequestBody;

    if (!isChatMode(body.mode)) {
      return NextResponse.json({ error: 'Invalid chat mode.' }, { status: 400 });
    }

    if (typeof body.message !== 'string') {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const message = body.message.trim();
    const history = getChatHistory(body.history);

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 },
      );
    }

    const completion = await createOpenRouterChatCompletion({
      messages: [
        {
          role: 'system',
          content: GLOBAL_SYSTEM_PROMPT,
        },
        {
          role: 'system',
          content: modePrompts[body.mode],
        },
        ...history,
        {
          role: 'user',
          content: message,
        },
      ],
    });
    const parsedQuizResponse = body.mode === 'quiz' ? parseQuizResult(completion.content) : null;
    const assistantContent = getSafeAssistantContent(
      parsedQuizResponse?.content ?? completion.content,
      completion.content,
    );
    const responseBody = {
      uid: decodedToken.uid,
      mode: body.mode,
      correctAnswer: parsedQuizResponse?.correctAnswer,
      quizResult: parsedQuizResponse?.quizResult,
      message: {
        role: 'assistant',
        content: assistantContent,
        model: completion.model,
      },
    };

    return NextResponse.json(responseBody);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to create chat response.';
    const status = message.includes('Firebase ID token') ? 401 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}

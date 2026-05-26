type OpenRouterMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type OpenRouterChatRequest = {
  messages: OpenRouterMessage[];
};

type OpenRouterChatResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function createOpenRouterChatCompletion({ messages }: OpenRouterChatRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL ?? 'openai/gpt-4o-mini';

  if (!apiKey) {
    throw new Error('Missing OPENROUTER_API_KEY.');
  }

  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as OpenRouterChatResponse;
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error('OpenRouter returned an empty response.');
  }

  return {
    content,
    model,
  };
}

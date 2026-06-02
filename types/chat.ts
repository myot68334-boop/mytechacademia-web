export const CHAT_MODES = ["teacher", "engineerMentor", "coach", "quiz", "courseGenerator"] as const;

export type ChatMode = (typeof CHAT_MODES)[number];

export type ChatApiHistoryMessage = {
  role: "assistant" | "user";
  content: string;
};

export type ChatApiRequestBody = {
  history?: unknown;
  message?: unknown;
  mode?: unknown;
};

export type ChatApiResponse = {
  correctAnswer?: string;
  message: {
    content: string;
    model: string;
    role: "assistant";
  };
  mode: ChatMode;
  quizResult?: "none" | "correct" | "incorrect";
  uid: string;
};

export type ChatApiErrorResponse = {
  code:
    | "AUTH_REQUIRED"
    | "INVALID_CHAT_MODE"
    | "MESSAGE_REQUIRED"
    | "MESSAGE_TOO_LONG"
    | "AI_CONFIG_MISSING"
    | "AI_PROVIDER_ERROR"
    | "AI_EMPTY_RESPONSE"
    | "RATE_LIMITED"
    | "DAILY_QUOTA_EXCEEDED"
    | "AUTH_INVALID"
    | "UNKNOWN_ERROR";
  error: string;
};

export type CourseProgressMap = Record<string, number>;

export type TechAcademiaProfile = {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role?: string;
  progress?: CourseProgressMap;
  plan?: "free" | "premium" | "enterprise";
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type ChatMessage = {
  sender: "assistant" | "user";
  content: string;
  timestamp: string;
  correctAnswer?: string;
  quizResult?: "none" | "correct" | "incorrect";
};

export type QuizScore = {
  correct: number;
  total: number;
  endedAt?: unknown;
};

export type ChatSession = {
  id: string;
  title: string;
  summary?: string;
  createdAt: number;
  updatedAt: number;
  messages: ChatMessage[];
  quizScore?: QuizScore;
};

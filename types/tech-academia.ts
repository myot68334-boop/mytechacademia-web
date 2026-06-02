export type CourseProgressMap = Record<string, number>;

export type TechAcademiaPlan = "free" | "premium" | "enterprise";

export type TechAcademiaProfile = {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role?: string;
  progress?: CourseProgressMap;
  plan?: TechAcademiaPlan;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type ChatUsageCounter = {
  limit: number;
  periodKey: string;
  plan: TechAcademiaPlan;
  requestsUsed: number;
  resetAt?: unknown;
  updatedAt?: unknown;
  userId: string;
};

export type ChatRateLimitCounter = {
  limit: number;
  plan: TechAcademiaPlan;
  requestsUsed: number;
  resetAt?: unknown;
  updatedAt?: unknown;
  userId: string;
  windowKey: string;
};

export type UserMemory = {
  preferredLanguage?: string;
  primaryInterest?: string;
  skillLevel?: string;
  learningGoal?: string;
  locationJapan?: boolean;
  knownWeaknesses?: string[];
  preferredExplanationStyle?: string;
  updatedAt?: unknown;
};

export type ChatMessage = {
  conversationId?: string;
  sender: "assistant" | "user";
  role?: "assistant" | "user";
  content: string;
  createdAt?: string | unknown;
  timestamp: string;
  correctAnswer?: string;
  quizResult?: "none" | "correct" | "incorrect";
  userId?: string;
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

export type GeneratedCourseLesson = {
  id: string;
  title: string;
  objectives: string[];
  duration: string;
  explanation: string;
  examples: string[];
  exercises: string[];
};

export type GeneratedCourseChapter = {
  id: string;
  title: string;
  lessons: GeneratedCourseLesson[];
};

export type GeneratedCourseProgress = {
  completedLessonIds: string[];
  completedLessons: number;
  currentLessonId?: string;
  percent: number;
  totalLessons: number;
  updatedAt?: unknown;
};

export type GeneratedCourse = {
  id: string;
  title: string;
  level: string;
  prompt: string;
  objectives: string[];
  duration: string;
  suggestedExercises: string[];
  chapters: GeneratedCourseChapter[];
  progress?: GeneratedCourseProgress;
  createdAt?: number | unknown;
  updatedAt?: number | unknown;
  userId?: string;
};

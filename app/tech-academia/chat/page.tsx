"use client";

import { useEffect, useRef, useState } from "react";
import { ChatInterface } from "../../../components/tech-academia/chat/chat-interface";
import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";
import { useTechAcademia } from "../../../components/tech-academia/use-tech-academia";
import { useStreamingChat } from "../../../hooks/tech-academia/use-streaming-chat";
import type { ChatMode } from "../../../types/chat";
import type {
  ChatMessage,
  ChatSession,
  GeneratedCourse,
  GeneratedCourseChapter,
  GeneratedCourseLesson,
  GeneratedCourseProgress,
  QuizScore,
} from "../../../types/tech-academia";

type Message = {
  correctAnswer?: string;
  createdAt: string;
  id: string;
  quizResult?: "none" | "correct" | "incorrect";
  role: "assistant" | "user";
  content: string;
  timestamp: string;
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

const chatModes: Array<{ value: ChatMode; label: string; description: string }> = [
  {
    value: "teacher",
    label: "Teacher",
    description: "Step-by-step explanations for learning.",
  },
  {
    value: "engineerMentor",
    label: "Engineer Mentor",
    description: "Practical review with technical judgment.",
  },
  {
    value: "coach",
    label: "Coach",
    description: "Concise planning and accountability.",
  },
  {
    value: "quiz",
    label: "Quiz",
    description: "Multiple choice practice with session scoring.",
  },
  {
    value: "courseGenerator",
    label: "Course Generator",
    description: "Build a structured AI Teacher course.",
  },
];

const initialMessages: Message[] = [
  {
    createdAt: new Date(0).toISOString(),
    id: "welcome",
    role: "assistant",
    content: "Welcome to Tech Academia AI Studio. Choose a mode, ask a question, and I’ll help you move the work forward.",
    timestamp: "Ready",
  },
];

const MAX_MEMORY_MESSAGES = 20;

function getTimestamp() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getChatTitle(messages: Message[]) {
  const firstUserMessage = messages.find((message) => message.role === "user");
  return firstUserMessage?.content.slice(0, 48) || "Untitled session";
}

function getQuizTitle(score: QuizScore) {
  return `Quiz score ${score.correct}/${score.total}`;
}

function toSavedMessages(messages: Message[]): ChatMessage[] {
  return messages
    .filter((message) => message.id !== "welcome")
    .map((message) => ({
      correctAnswer: message.correctAnswer,
      createdAt: message.createdAt,
      quizResult: message.quizResult,
      sender: message.role,
      content: message.content,
      timestamp: message.timestamp,
    }));
}

function toApiHistory(messages: Message[]) {
  return messages
    .filter((message) => message.id !== "welcome")
    .slice(-MAX_MEMORY_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));
}

function fromSavedMessages(chat: ChatSession): Message[] {
  if (!chat.messages.length) return initialMessages;

  return chat.messages.map((message, index) => ({
    correctAnswer: message.correctAnswer,
    createdAt: typeof message.createdAt === "string" ? message.createdAt : new Date().toISOString(),
    id: `${chat.id}-${index}`,
    quizResult: message.quizResult,
    role: message.sender,
    content: message.content,
    timestamp: message.timestamp,
  }));
}

function formatSavedTime(value: number) {
  return new Date(value).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
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

function slugify(value: string, fallback: string) {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || fallback;
}

function getStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0) : [];
}

function extractJsonPayload(content: string) {
  const fenced = content.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1];
  const raw = fenced ?? content;
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("The generated course was not valid JSON. Please try Generate Course again.");
  }

  return raw.slice(start, end + 1);
}

function parseGeneratedCourse(content: string, prompt: string): Omit<GeneratedCourse, "id" | "createdAt" | "updatedAt" | "userId"> {
  const parsed = JSON.parse(extractJsonPayload(content)) as Record<string, unknown>;
  const rawChapters = Array.isArray(parsed.chapters) ? parsed.chapters : [];
  const chapters: GeneratedCourseChapter[] = rawChapters.map((chapter, chapterIndex) => {
    const chapterData = chapter && typeof chapter === "object" ? (chapter as Record<string, unknown>) : {};
    const chapterTitle = typeof chapterData.title === "string" ? chapterData.title : `Chapter ${chapterIndex + 1}`;
    const rawLessons = Array.isArray(chapterData.lessons) ? chapterData.lessons : [];
    const lessons: GeneratedCourseLesson[] = rawLessons.map((lesson, lessonIndex) => {
      const lessonData = lesson && typeof lesson === "object" ? (lesson as Record<string, unknown>) : {};
      const lessonTitle = typeof lessonData.title === "string" ? lessonData.title : `Lesson ${lessonIndex + 1}`;

      return {
        id: `${slugify(chapterTitle, `chapter-${chapterIndex + 1}`)}-${slugify(lessonTitle, `lesson-${lessonIndex + 1}`)}`,
        title: lessonTitle,
        objectives: getStringArray(lessonData.objectives),
        duration: typeof lessonData.duration === "string" ? lessonData.duration : "Self-paced",
        explanation: typeof lessonData.explanation === "string" ? lessonData.explanation : "",
        examples: getStringArray(lessonData.examples),
        exercises: getStringArray(lessonData.exercises),
      };
    });

    return {
      id: slugify(chapterTitle, `chapter-${chapterIndex + 1}`),
      title: chapterTitle,
      lessons,
    };
  });

  return {
    title: typeof parsed.title === "string" ? parsed.title : "Generated course",
    level: typeof parsed.level === "string" ? parsed.level : "Beginner to advanced",
    prompt,
    objectives: getStringArray(parsed.objectives),
    duration: typeof parsed.duration === "string" ? parsed.duration : "Self-paced",
    suggestedExercises: getStringArray(parsed.suggestedExercises),
    chapters,
  };
}

function summarizeGeneratedCourse(course: Omit<GeneratedCourse, "id" | "createdAt" | "updatedAt" | "userId">) {
  const totalLessons = course.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
  return [
    `Generated course: ${course.title}`,
    `Level: ${course.level}`,
    `Duration: ${course.duration}`,
    `Chapters: ${course.chapters.length}`,
    `Lessons: ${totalLessons}`,
    "",
    "Open the course panel to start the first lesson, move between lessons, and mark lessons complete.",
  ].join("\n");
}

function getCourseLessons(course: GeneratedCourse | null) {
  return course?.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ chapter, lesson }))) ?? [];
}

export default function TechAcademiaChatPage() {
  const {
    user,
    chats,
    generatedCourses,
    activeChatId,
    setActiveChatId,
    saveChat,
    saveGeneratedCourse,
    updateGeneratedCourseProgress,
    loadChat,
    deleteChat,
  } = useTechAcademia();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [activeMode, setActiveMode] = useState<ChatMode>("teacher");
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [quizScore, setQuizScore] = useState<QuizScore>({ correct: 0, total: 0 });
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [courseSaveStatus, setCourseSaveStatus] = useState<SaveStatus>("idle");
  const [submitting, setSubmitting] = useState(false);
  const { streamChat, streaming } = useStreamingChat();
  const loadedInitialChatRef = useRef(false);
  const activeModeLabel = chatModes.find((chatMode) => chatMode.value === activeMode)?.label ?? "Teacher";
  const modeStateMismatch = !chatModes.some((chatMode) => chatMode.value === activeMode);
  const activeCourse = generatedCourses.find((course) => course.id === activeCourseId) ?? generatedCourses[0] ?? null;
  const courseLessons = getCourseLessons(activeCourse);
  const currentLessonIndex = activeCourse?.progress?.currentLessonId
    ? Math.max(
        0,
        courseLessons.findIndex(({ lesson }) => lesson.id === activeCourse.progress?.currentLessonId),
      )
    : 0;
  const currentLesson = courseLessons[currentLessonIndex]?.lesson ?? null;
  const completedLessonIds = activeCourse?.progress?.completedLessonIds ?? [];
  const completedLessons = completedLessonIds.length;
  const totalLessons = courseLessons.length;
  const progressPercentage = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

  useEffect(() => {
    if (!user) {
      loadedInitialChatRef.current = false;
      setMessages(initialMessages);
      setSaveStatus("idle");
      setCourseSaveStatus("idle");
      setQuizScore({ correct: 0, total: 0 });
      setActiveCourseId(null);
      return;
    }

    if (loadedInitialChatRef.current || !chats.length) return;

    loadedInitialChatRef.current = true;
    const [latestChat] = chats;
    void (async () => {
      const loadedChat = await loadChat(latestChat.id);
      if (!loadedChat) return;
      setMessages(fromSavedMessages(loadedChat));
      setSaveStatus("saved");
    })();
  }, [chats, loadChat, user]);

  useEffect(() => {
    if (!activeCourseId && generatedCourses.length) {
      setActiveCourseId(generatedCourses[0].id);
    }
  }, [activeCourseId, generatedCourses]);

  const persistMessages = async (nextMessages: Message[], chatId?: string | null, finalScore?: QuizScore) => {
    const savedMessages = toSavedMessages(nextMessages);

    if (!savedMessages.length) {
      return chatId ?? null;
    }

    setSaveStatus("saving");

    try {
      const savedChatId = await saveChat({
        id: chatId ?? undefined,
        title: finalScore ? getQuizTitle(finalScore) : getChatTitle(nextMessages),
        messages: savedMessages,
        quizScore: finalScore,
      });
      setSaveStatus("saved");
      return savedChatId;
    } catch (saveError) {
      setSaveStatus("error");
      setError(saveError instanceof Error ? saveError.message : "Unable to save chat history.");
      return chatId ?? null;
    }
  };

  const handleSelectChat = async (chatId: string) => {
    if (submitting || streaming) return;

    setError(null);

    const selectedChat = await loadChat(chatId);

    if (!selectedChat) {
      setError("Unable to load that saved chat.");
      return;
    }

    setMessages(fromSavedMessages(selectedChat));
    setSaveStatus("saved");
    setQuizScore({
      correct: selectedChat.quizScore?.correct ?? 0,
      total: selectedChat.quizScore?.total ?? 0,
      endedAt: selectedChat.quizScore?.endedAt,
    });
  };

  const handleDeleteChat = async (chatId: string) => {
    if (submitting || streaming) return;

    setError(null);

    try {
      await deleteChat(chatId);

      if (activeChatId === chatId) {
        setMessages(initialMessages);
        setSaveStatus("idle");
        setQuizScore({ correct: 0, total: 0 });
      }
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Unable to delete chat history.");
    }
  };

  const handleModeChange = (nextMode: ChatMode) => {
    if (submitting || streaming) return;

    setActiveMode(nextMode);
    setError(null);
  };

  const handleRestartQuiz = () => {
    if (submitting || streaming) return;

    setActiveChatId(null);
    setMessages(initialMessages);
    setQuizScore({ correct: 0, total: 0 });
    setSaveStatus("idle");
    setError(null);
  };

  const handleClearConversation = () => {
    if (submitting || streaming) return;

    setActiveChatId(null);
    loadedInitialChatRef.current = true;
    setMessages(initialMessages);
    setQuizScore({ correct: 0, total: 0 });
    setSaveStatus("idle");
    setError(null);
  };

  const saveCourseProgress = async (course: GeneratedCourse, currentLessonId: string | undefined, completedIds: string[]) => {
    const uniqueCompletedIds = Array.from(new Set(completedIds));
    const lessonCount = getCourseLessons(course).length;
    const progress: GeneratedCourseProgress = {
      completedLessonIds: uniqueCompletedIds,
      completedLessons: uniqueCompletedIds.length,
      currentLessonId,
      percent: lessonCount ? Math.round((uniqueCompletedIds.length / lessonCount) * 100) : 0,
      totalLessons: lessonCount,
    };

    await updateGeneratedCourseProgress(course.id, progress);
  };

  const handleStartLesson = async () => {
    if (!activeCourse || !courseLessons.length || submitting || streaming) return;
    await saveCourseProgress(activeCourse, courseLessons[0].lesson.id, completedLessonIds);
  };

  const handlePreviousLesson = async () => {
    if (!activeCourse || !courseLessons.length || submitting || streaming) return;
    const previousLesson = courseLessons[Math.max(0, currentLessonIndex - 1)]?.lesson;
    await saveCourseProgress(activeCourse, previousLesson?.id, completedLessonIds);
  };

  const handleNextLesson = async () => {
    if (!activeCourse || !courseLessons.length || submitting || streaming) return;
    const nextLesson = courseLessons[Math.min(courseLessons.length - 1, currentLessonIndex + 1)]?.lesson;
    await saveCourseProgress(activeCourse, nextLesson?.id, completedLessonIds);
  };

  const handleMarkLessonComplete = async () => {
    if (!activeCourse || !currentLesson || submitting || streaming) return;
    await saveCourseProgress(activeCourse, currentLesson.id, [...completedLessonIds, currentLesson.id]);
  };

  const handleEndQuiz = async () => {
    if (submitting || streaming) return;

    const finalScore = {
      correct: quizScore.correct,
      total: quizScore.total,
      endedAt: new Date().toISOString(),
    };

    const finalMessage: Message = {
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID(),
      role: "assistant",
      content: `Quiz ended. Final score: ${finalScore.correct}/${finalScore.total}.`,
      timestamp: getTimestamp(),
    };
    const finalMessages = [...messages, finalMessage];

    setMessages(finalMessages);
    setQuizScore(finalScore);
    await persistMessages(finalMessages, activeChatId, finalScore);
  };

  const handleGenerateCourse = async (coursePrompt?: string) => {
    const nextMessage = (coursePrompt ?? input).trim();
    if (!nextMessage || submitting || streaming || modeStateMismatch) return;

    setError(null);
    setCourseSaveStatus("saving");
    setSubmitting(true);
    setInput("");

    const userMessage: Message = {
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID(),
      role: "user",
      content: nextMessage,
      timestamp: getTimestamp(),
    };

    const messagesWithUser = [...messages, userMessage];
    setMessages(messagesWithUser);

    const assistantMessageId = crypto.randomUUID();
    let streamedAssistantContent = "";
    const streamingAssistantMessage: Message = {
      createdAt: new Date().toISOString(),
      id: assistantMessageId,
      role: "assistant",
      content: "",
      timestamp: getTimestamp(),
    };

    setMessages([...messagesWithUser, streamingAssistantMessage]);

    try {
      const token = await user?.getIdToken();

      if (!token) {
        throw new Error("Please sign in again before generating a course.");
      }

      await streamChat(
        {
          mode: "courseGenerator",
          message: nextMessage,
          history: toApiHistory(messages),
        },
        {
          token,
          onToken: (tokenChunk) => {
            streamedAssistantContent += tokenChunk;
            setMessages((currentMessages) =>
              currentMessages.map((message) =>
                message.id === assistantMessageId
                  ? { ...message, content: streamedAssistantContent }
                  : message,
              ),
            );
          },
        },
      );

      const generatedCourse = parseGeneratedCourse(streamedAssistantContent.trim(), nextMessage);
      const savedCourseId = await saveGeneratedCourse(generatedCourse);
      const assistantMessage: Message = {
        createdAt: streamingAssistantMessage.createdAt,
        id: assistantMessageId,
        role: "assistant",
        content: summarizeGeneratedCourse(generatedCourse),
        timestamp: getTimestamp(),
      };
      const messagesWithAssistant = [...messagesWithUser, assistantMessage];

      setMessages(messagesWithAssistant);
      setCourseSaveStatus("saved");
      if (savedCourseId) setActiveCourseId(savedCourseId);
      void persistMessages(messagesWithAssistant, activeChatId);
    } catch (generateError) {
      setMessages((currentMessages) => currentMessages.filter((message) => message.id !== assistantMessageId));
      setCourseSaveStatus("error");
      const message = isAbortError(generateError)
        ? "The AI response took too long. Please try generating the course again."
        : generateError instanceof Error
          ? generateError.message
          : "Unable to generate course.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextMessage = input.trim();
    if (!nextMessage || submitting || streaming || modeStateMismatch) return;

    if (activeMode === "courseGenerator") {
      await handleGenerateCourse(nextMessage);
      return;
    }

    setError(null);
    setSubmitting(true);
    setInput("");
    const modeAtSend = activeMode;

    const userMessage: Message = {
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID(),
      role: "user",
      content: nextMessage,
      timestamp: getTimestamp(),
    };

    const messagesWithUser = [...messages, userMessage];
    setMessages(messagesWithUser);

    let pendingAssistantMessageId: string | null = null;

    try {
      const token = await user?.getIdToken();

      if (!token) {
        throw new Error("Please sign in again before sending a message.");
      }

      const requestPayload = {
        mode: modeAtSend,
        message: nextMessage,
        history: toApiHistory(messages),
      };
      const assistantMessageId = crypto.randomUUID();
      pendingAssistantMessageId = assistantMessageId;
      let streamedAssistantContent = "";
      const streamingAssistantMessage: Message = {
        createdAt: new Date().toISOString(),
        id: assistantMessageId,
        role: "assistant",
        content: "",
        timestamp: getTimestamp(),
      };

      setMessages([...messagesWithUser, streamingAssistantMessage]);

      await streamChat(requestPayload, {
        token,
        onToken: (tokenChunk) => {
          streamedAssistantContent += tokenChunk;
          setMessages((currentMessages) =>
            currentMessages.map((message) =>
              message.id === assistantMessageId
                ? { ...message, content: streamedAssistantContent }
                : message,
            ),
          );
        },
      });

      const assistantContent = streamedAssistantContent.trim();

      if (!assistantContent) {
        throw new Error("The AI response was empty.");
      }

      const parsedQuizResponse = modeAtSend === "quiz" ? parseQuizResult(assistantContent) : null;
      const assistantMessage: Message = {
        correctAnswer: parsedQuizResponse?.correctAnswer,
        createdAt: streamingAssistantMessage.createdAt,
        id: assistantMessageId,
        quizResult: parsedQuizResponse?.quizResult,
        role: "assistant",
        content: parsedQuizResponse?.content ?? assistantContent,
        timestamp: getTimestamp(),
      };

      const messagesWithAssistant = [...messagesWithUser, assistantMessage];
      setMessages(messagesWithAssistant);

      if (modeAtSend === "quiz" && (assistantMessage.quizResult === "correct" || assistantMessage.quizResult === "incorrect")) {
        setQuizScore((currentScore) => ({
          correct: currentScore.correct + (assistantMessage.quizResult === "correct" ? 1 : 0),
          total: currentScore.total + 1,
        }));
      }

      void persistMessages(messagesWithAssistant, activeChatId);
    } catch (sendError) {
      if (pendingAssistantMessageId) {
        setMessages((currentMessages) =>
          currentMessages.filter((message) => message.id !== pendingAssistantMessageId),
        );
      }
      const message = isAbortError(sendError)
        ? "The AI response took too long. Please try again."
        : sendError instanceof Error
          ? sendError.message
          : "Unable to send message.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35" />

      <SectionShell className="border-t-0">
        <div className="space-y-12">
          <PageHeader
            eyebrow="AI Studio Chat"
            title="Ask Tech Academia AI"
            description="Choose a learning mode, send a question, and get a focused response from the AI mentor."
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ChatInterface
              activeMode={activeMode}
              activeModeLabel={activeModeLabel}
              disabled={modeStateMismatch}
              error={error}
              input={input}
              messages={messages}
              onInputChange={setInput}
              onSubmit={handleSend}
              quizScore={quizScore}
              submitting={submitting || streaming}
            />

            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur">
                <h3 className="text-base font-semibold uppercase tracking-[0.28em] text-aurora-200">Mode selector</h3>
                <div className="mt-5 grid gap-3">
                  {chatModes.map((chatMode) => {
                    const selected = activeMode === chatMode.value;
                    return (
                      <button
                        key={chatMode.value}
                        className={`rounded-2xl border px-4 py-4 text-left transition ${
                          selected
                            ? "border-aurora-300/70 bg-aurora-500/15 text-white"
                            : "border-white/15 bg-midnight-900/60 text-slate-200 hover:border-aurora-300/60 hover:bg-white/10"
                        }`}
                        type="button"
                        onClick={() => handleModeChange(chatMode.value)}
                        disabled={submitting || streaming}
                      >
                        <span className="block text-sm font-semibold">{chatMode.label}</span>
                        <span className="mt-1 block text-sm text-slate-300">{chatMode.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur">
                <h3 className="text-base font-semibold uppercase tracking-[0.28em] text-aurora-200">Session status</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-midnight-900/60 px-4 py-3">
                    <span>Messages</span>
                    <span className="text-aurora-200">{messages.length}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-midnight-900/60 px-4 py-3">
                    <span>History</span>
                    <span className={saveStatus === "error" ? "text-red-200" : "text-slate-300"}>
                      {saveStatus === "saving"
                        ? "Saving"
                        : saveStatus === "saved"
                          ? "Saved"
                          : saveStatus === "error"
                            ? "Save failed"
                            : "No saved chat"}
                    </span>
                  </div>
                  <button
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                    type="button"
                    onClick={handleClearConversation}
                    disabled={submitting || streaming}
                  >
                    Clear Conversation
                  </button>

                  {activeMode === "courseGenerator" ? (
                    <div className="rounded-2xl border border-aurora-300/30 bg-aurora-500/10 px-4 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <span>Course generator</span>
                        <span className={courseSaveStatus === "error" ? "text-red-200" : "text-aurora-200"}>
                          {courseSaveStatus === "saving"
                            ? "Saving"
                            : courseSaveStatus === "saved"
                              ? "Saved"
                              : courseSaveStatus === "error"
                                ? "Save failed"
                                : "Ready"}
                        </span>
                      </div>
                      <button
                        className="mt-3 w-full rounded-2xl bg-aurora-500 px-4 py-3 text-sm font-semibold text-midnight-950 transition hover:bg-aurora-400 disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                        onClick={() => void handleGenerateCourse()}
                        disabled={!input.trim() || submitting || streaming}
                      >
                        Generate Course
                      </button>
                    </div>
                  ) : null}

                  <div className="rounded-2xl border border-white/10 bg-midnight-900/60 px-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <span>Saved chats</span>
                      <span className="text-aurora-200">{chats.length}</span>
                    </div>

                    {activeMode === "quiz" ? (
                      <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                        <div className="flex items-center justify-between">
                          <span>Quiz score</span>
                          <span className="text-aurora-200">
                            {quizScore.correct}/{quizScore.total}
                          </span>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          <button
                            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                            type="button"
                            onClick={handleRestartQuiz}
                            disabled={submitting || streaming}
                          >
                            Restart Quiz
                          </button>
                          <button
                            className="rounded-2xl bg-aurora-500 px-4 py-2 text-sm font-semibold text-midnight-950 transition hover:bg-aurora-400 disabled:cursor-not-allowed disabled:opacity-60"
                            type="button"
                            onClick={() => void handleEndQuiz()}
                            disabled={submitting || streaming}
                          >
                            End Quiz
                          </button>
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-4 space-y-2">
                      {chats.length ? (
                        chats.map((chat) => {
                          const selected = activeChatId === chat.id;

                          return (
                            <div
                              key={chat.id}
                              className={`rounded-2xl border p-3 transition ${
                                selected
                                  ? "border-aurora-300/70 bg-aurora-500/15"
                                  : "border-white/10 bg-white/5"
                              }`}
                            >
                              <button
                                className="block w-full text-left"
                                type="button"
                                onClick={() => void handleSelectChat(chat.id)}
                                disabled={submitting || streaming}
                              >
                                <span className="block truncate text-sm font-semibold text-white">{chat.title}</span>
                                <span className="mt-1 block text-xs text-slate-400">
                                  {formatSavedTime(chat.updatedAt)}
                                </span>
                              </button>
                              <button
                                className="mt-3 text-xs font-semibold text-red-200 transition hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                                type="button"
                                onClick={() => void handleDeleteChat(chat.id)}
                                disabled={submitting || streaming}
                              >
                                Delete
                              </button>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-sm text-slate-400">No saved chats yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold uppercase tracking-[0.28em] text-aurora-200">Course progress</h3>
                  <span className="text-sm font-semibold text-aurora-100">{generatedCourses.length}</span>
                </div>

                {activeCourse ? (
                  <div className="mt-5 space-y-4">
                    <label className="block text-sm text-slate-300">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Generated courses</span>
                      <select
                        className="w-full rounded-2xl border border-white/15 bg-midnight-900 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-300"
                        value={activeCourse.id}
                        onChange={(event) => setActiveCourseId(event.target.value)}
                        disabled={submitting || streaming}
                      >
                        {generatedCourses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </label>

                    <div className="rounded-2xl border border-white/10 bg-midnight-900/60 p-4">
                      <p className="text-sm font-semibold text-white">{activeCourse.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {activeCourse.level} · {activeCourse.duration}
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                          <span className="block text-lg font-semibold text-white">{completedLessons}</span>
                          <span className="text-slate-400">Completed</span>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                          <span className="block text-lg font-semibold text-white">{totalLessons}</span>
                          <span className="text-slate-400">Total</span>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                          <span className="block text-lg font-semibold text-white">{progressPercentage}%</span>
                          <span className="text-slate-400">Progress</span>
                        </div>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-aurora-400" style={{ width: `${progressPercentage}%` }} />
                      </div>
                    </div>

                    {currentLesson ? (
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          Lesson {currentLessonIndex + 1} of {totalLessons}
                        </p>
                        <h4 className="mt-2 text-base font-semibold text-white">{currentLesson.title}</h4>
                        <p className="mt-2 text-sm text-slate-300">{currentLesson.explanation}</p>

                        {currentLesson.objectives.length ? (
                          <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aurora-200">Objectives</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {currentLesson.objectives.slice(0, 3).map((objective) => (
                                <li key={objective}>- {objective}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {currentLesson.exercises.length ? (
                          <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aurora-200">Exercises</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {currentLesson.exercises.slice(0, 3).map((exercise) => (
                                <li key={exercise}>- {exercise}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="grid gap-2 sm:grid-cols-2">
                      <button
                        className="rounded-2xl bg-aurora-500 px-4 py-3 text-sm font-semibold text-midnight-950 transition hover:bg-aurora-400 disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                        onClick={() => void handleStartLesson()}
                        disabled={!totalLessons || submitting || streaming}
                      >
                        Start Lesson
                      </button>
                      <button
                        className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                        onClick={() => void handleMarkLessonComplete()}
                        disabled={!currentLesson || completedLessonIds.includes(currentLesson.id) || submitting || streaming}
                      >
                        Mark Lesson Complete
                      </button>
                      <button
                        className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                        onClick={() => void handlePreviousLesson()}
                        disabled={currentLessonIndex <= 0 || submitting || streaming}
                      >
                        Previous Lesson
                      </button>
                      <button
                        className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                        onClick={() => void handleNextLesson()}
                        disabled={currentLessonIndex >= totalLessons - 1 || submitting || streaming}
                      >
                        Next Lesson
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-slate-400">
                    Switch to Course Generator, describe what you want to learn, then generate a course.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

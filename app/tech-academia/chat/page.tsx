"use client";

import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";
import { useTechAcademia } from "../../../components/tech-academia/use-tech-academia";
import type { ChatMessage, ChatSession, QuizScore } from "../../../types/tech-academia";

type ChatMode = "teacher" | "engineerMentor" | "coach" | "quiz";

type Message = {
  correctAnswer?: string;
  id: string;
  quizResult?: "none" | "correct" | "incorrect";
  role: "assistant" | "user";
  content: string;
  timestamp: string;
};

type ChatResponse = {
  correctAnswer?: string;
  message?: {
    content?: string;
  };
  quizResult?: "none" | "correct" | "incorrect";
  error?: string;
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
];

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "Welcome to Tech Academia AI Studio. Choose a mode, ask a question, and I’ll help you move the work forward.",
    timestamp: "Ready",
  },
];

const CHAT_REQUEST_TIMEOUT_MS = 30000;

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
      quizResult: message.quizResult,
      sender: message.role,
      content: message.content,
      timestamp: message.timestamp,
    }));
}

function toApiHistory(messages: Message[]) {
  return messages
    .filter((message) => message.id !== "welcome")
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));
}

function fromSavedMessages(chat: ChatSession): Message[] {
  if (!chat.messages.length) return initialMessages;

  return chat.messages.map((message, index) => ({
    correctAnswer: message.correctAnswer,
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

function getAssistantBubbleClass(message: Message) {
  if (message.quizResult === "correct") {
    return "border-emerald-400/50 bg-emerald-500/15 text-emerald-50";
  }

  if (message.quizResult === "incorrect") {
    return "border-red-400/50 bg-red-500/15 text-red-50";
  }

  return "border-white/15 bg-midnight-900/70 text-slate-200";
}

export default function TechAcademiaChatPage() {
  const {
    user,
    chats,
    activeChatId,
    setActiveChatId,
    saveChat,
    loadChat,
    deleteChat,
  } = useTechAcademia();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [activeMode, setActiveMode] = useState<ChatMode>("teacher");
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [quizScore, setQuizScore] = useState<QuizScore>({ correct: 0, total: 0 });
  const [submitting, setSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const loadedInitialChatRef = useRef(false);
  const activeModeLabel = chatModes.find((chatMode) => chatMode.value === activeMode)?.label ?? "Teacher";
  const modeStateMismatch = !chatModes.some((chatMode) => chatMode.value === activeMode);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, submitting]);

  useEffect(() => {
    if (!user) {
      loadedInitialChatRef.current = false;
      setMessages(initialMessages);
      setSaveStatus("idle");
      setQuizScore({ correct: 0, total: 0 });
      return;
    }

    if (loadedInitialChatRef.current || !chats.length) return;

    loadedInitialChatRef.current = true;
    const [latestChat] = chats;
    setActiveChatId(latestChat.id);
    setMessages(fromSavedMessages(latestChat));
    setSaveStatus("saved");
  }, [chats, setActiveChatId, user]);

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
    if (submitting) return;

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
    if (submitting) return;

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
    if (submitting) return;

    setActiveMode(nextMode);
    setError(null);
  };

  const handleRestartQuiz = () => {
    if (submitting) return;

    setActiveChatId(null);
    setMessages(initialMessages);
    setQuizScore({ correct: 0, total: 0 });
    setSaveStatus("idle");
    setError(null);
  };

  const handleEndQuiz = async () => {
    if (submitting) return;

    const finalScore = {
      correct: quizScore.correct,
      total: quizScore.total,
      endedAt: new Date().toISOString(),
    };

    const finalMessage: Message = {
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

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextMessage = input.trim();
    if (!nextMessage || submitting || modeStateMismatch) return;

    setError(null);
    setSubmitting(true);
    setInput("");
    const modeAtSend = activeMode;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: nextMessage,
      timestamp: getTimestamp(),
    };

    const messagesWithUser = [...messages, userMessage];
    setMessages(messagesWithUser);

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
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), CHAT_REQUEST_TIMEOUT_MS);

      let data: ChatResponse;

      try {
        const response = await fetch("/api/tech-academia/chat", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestPayload),
          signal: controller.signal,
        });

        data = (await response.json()) as ChatResponse;

        if (!response.ok) {
          throw new Error(data.error ?? "Unable to get an AI response.");
        }
      } finally {
        window.clearTimeout(timeoutId);
      }

      const assistantContent = data.message?.content?.trim();

      if (!assistantContent) {
        throw new Error("The AI response was empty.");
      }

      const assistantMessage: Message = {
        correctAnswer: data.correctAnswer,
        id: crypto.randomUUID(),
        quizResult: data.quizResult,
        role: "assistant",
        content: assistantContent,
        timestamp: getTimestamp(),
      };

      const messagesWithAssistant = [...messagesWithUser, assistantMessage];
      setMessages(messagesWithAssistant);

      if (modeAtSend === "quiz" && (data.quizResult === "correct" || data.quizResult === "incorrect")) {
        setQuizScore((currentScore) => ({
          correct: currentScore.correct + (data.quizResult === "correct" ? 1 : 0),
          total: currentScore.total + 1,
        }));
      }

      void persistMessages(messagesWithAssistant, activeChatId);
    } catch (sendError) {
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
            <div className="flex h-[640px] flex-col rounded-3xl border border-white/12 bg-white/5 shadow-glow backdrop-blur">
              <div className="border-b border-white/10 px-6 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-aurora-200">Active mode</p>
                    <h2 className="text-lg font-semibold text-white">
                      {activeModeLabel}
                    </h2>
                    <p className="mt-1 text-xs text-slate-400">Current mode: {activeMode}</p>
                  </div>
                  {activeMode === "quiz" ? (
                    <div className="rounded-2xl border border-aurora-300/40 bg-aurora-500/15 px-4 py-2 text-sm font-semibold text-aurora-100">
                      Score: {quizScore.correct}/{quizScore.total}
                    </div>
                  ) : null}
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-aurora-100">
                    <span className={`h-2 w-2 rounded-full ${submitting ? "bg-amber-300" : "bg-emerald-400"}`} />
                    {submitting ? "Thinking" : "Ready"}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xl whitespace-pre-wrap rounded-3xl border px-5 py-4 text-sm leading-relaxed shadow-inner-glow sm:text-base ${
                        message.role === "user"
                          ? "border-aurora-400/40 bg-aurora-500/15 text-aurora-100"
                          : getAssistantBubbleClass(message)
                      }`}
                    >
                      <p>{message.content}</p>
                      {message.role === "assistant" && message.correctAnswer ? (
                        <p className="mt-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                          Correct Answer: {message.correctAnswer}
                        </p>
                      ) : null}
                      <span className="mt-3 block text-xs uppercase tracking-[0.28em] text-white/50">{message.timestamp}</span>
                    </div>
                  </div>
                ))}

                {submitting ? (
                  <div className="flex justify-start">
                    <div className="rounded-3xl border border-white/15 bg-midnight-900/70 px-5 py-4 text-sm text-slate-200 shadow-inner-glow">
                      AI is writing...
                    </div>
                  </div>
                ) : null}

                <div ref={messagesEndRef} />
              </div>

              <form className="border-t border-white/10 p-5" onSubmit={handleSend}>
                {error ? (
                  <p className="mb-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </p>
                ) : null}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <textarea
                    className="h-24 flex-1 rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-sm text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40 disabled:cursor-not-allowed disabled:opacity-60"
                    placeholder="Ask for an explanation, technical review, or study plan."
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    disabled={submitting || modeStateMismatch}
                  />
                  <button
                    className="inline-flex min-w-28 items-center justify-center rounded-2xl bg-aurora-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
                    type="submit"
                    disabled={submitting || modeStateMismatch || !input.trim()}
                  >
                    {submitting ? "Sending" : "Send"}
                  </button>
                </div>
              </form>
            </div>

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
                        disabled={submitting}
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
                            disabled={submitting}
                          >
                            Restart Quiz
                          </button>
                          <button
                            className="rounded-2xl bg-aurora-500 px-4 py-2 text-sm font-semibold text-midnight-950 transition hover:bg-aurora-400 disabled:cursor-not-allowed disabled:opacity-60"
                            type="button"
                            onClick={() => void handleEndQuiz()}
                            disabled={submitting}
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
                                disabled={submitting}
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
                                disabled={submitting}
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
            </aside>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

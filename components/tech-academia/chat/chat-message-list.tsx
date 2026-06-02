"use client";

import { useEffect, useRef } from "react";

export type ChatUiMessage = {
  correctAnswer?: string;
  content: string;
  id: string;
  quizResult?: "none" | "correct" | "incorrect";
  role: "assistant" | "user";
  timestamp: string;
};

type ChatMessageListProps = {
  loading?: boolean;
  messages: ChatUiMessage[];
};

function getAssistantBubbleClass(message: ChatUiMessage) {
  if (message.quizResult === "correct") {
    return "border-emerald-400/50 bg-emerald-500/15 text-emerald-50";
  }

  if (message.quizResult === "incorrect") {
    return "border-red-400/50 bg-red-500/15 text-red-50";
  }

  return "border-white/15 bg-midnight-900/70 text-slate-200";
}

export function ChatMessageList({ loading = false, messages }: ChatMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
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
            <span className="mt-3 block text-xs uppercase tracking-[0.28em] text-white/50">
              {message.timestamp}
            </span>
          </div>
        </div>
      ))}

      {loading ? (
        <div className="flex justify-start">
          <div className="rounded-3xl border border-white/15 bg-midnight-900/70 px-5 py-4 text-sm text-slate-200 shadow-inner-glow">
            AI is writing...
          </div>
        </div>
      ) : null}

      <div ref={messagesEndRef} />
    </div>
  );
}

"use client";

import { ChatInput } from "./chat-input";
import { ChatMessageList, type ChatUiMessage } from "./chat-message-list";

type ChatInterfaceProps = {
  activeMode: string;
  activeModeLabel: string;
  disabled?: boolean;
  error?: string | null;
  input: string;
  messages: ChatUiMessage[];
  onInputChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  quizScore?: {
    correct: number;
    total: number;
  };
  submitting?: boolean;
};

export function ChatInterface({
  activeMode,
  activeModeLabel,
  disabled = false,
  error,
  input,
  messages,
  onInputChange,
  onSubmit,
  quizScore,
  submitting = false,
}: ChatInterfaceProps) {
  return (
    <div className="flex h-[640px] flex-col rounded-3xl border border-white/12 bg-white/5 shadow-glow backdrop-blur">
      <div className="border-b border-white/10 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-aurora-200">
              Active mode
            </p>
            <h2 className="text-lg font-semibold text-white">{activeModeLabel}</h2>
            <p className="mt-1 text-xs text-slate-400">Current mode: {activeMode}</p>
          </div>
          {activeMode === "quiz" && quizScore ? (
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

      <ChatMessageList loading={submitting} messages={messages} />
      <ChatInput
        disabled={disabled}
        error={error}
        onChange={onInputChange}
        onSubmit={onSubmit}
        submitting={submitting}
        value={input}
      />
    </div>
  );
}

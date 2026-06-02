"use client";

type ChatInputProps = {
  disabled?: boolean;
  error?: string | null;
  onChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitting?: boolean;
  value: string;
};

export function ChatInput({
  disabled = false,
  error,
  onChange,
  onSubmit,
  submitting = false,
  value,
}: ChatInputProps) {
  const inputDisabled = disabled || submitting;

  return (
    <form className="border-t border-white/10 p-5" onSubmit={onSubmit}>
      {error ? (
        <p className="mb-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <textarea
          className="h-24 flex-1 rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-sm text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40 disabled:cursor-not-allowed disabled:opacity-60"
          placeholder="Ask for an explanation, technical review, or study plan."
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={inputDisabled}
        />
        <button
          className="inline-flex min-w-28 items-center justify-center rounded-2xl bg-aurora-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={inputDisabled || !value.trim()}
        >
          {submitting ? "Sending" : "Send"}
        </button>
      </div>
    </form>
  );
}

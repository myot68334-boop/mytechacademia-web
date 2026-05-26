import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-center lg:text-left">
      <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-aurora-200">
        {eyebrow ? <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] text-aurora-100">{eyebrow}</span> : null}
        {eyebrow ? <span className="hidden text-aurora-100/80 sm:inline">•</span> : null}
        <span className="hidden text-aurora-100/80 sm:inline">Tech Academia</span>
      </div>
      <div className="space-y-4">
        <h1 className="font-display text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {description ? <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap justify-center gap-3 lg:justify-start">{actions}</div> : null}
    </header>
  );
}

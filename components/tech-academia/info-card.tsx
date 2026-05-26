import type { ReactNode } from "react";

export function InfoCard({
  title,
  body,
  icon,
  footer,
}: {
  title: string;
  body: string;
  icon?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-7 shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-aurora-300/50 hover:bg-white/10">
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 right-4 h-40 w-40 rounded-full bg-aurora-500/15 blur-[110px]" />
      <div className="relative space-y-4">
        {icon ? <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora-500/20 text-aurora-100 ring-1 ring-aurora-400/40">{icon}</div> : null}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-base leading-relaxed text-slate-200">{body}</p>
        {footer ? <div className="pt-2 text-sm text-aurora-200">{footer}</div> : null}
      </div>
    </article>
  );
}

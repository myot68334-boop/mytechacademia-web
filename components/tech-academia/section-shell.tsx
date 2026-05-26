import type { ReactNode } from "react";

export function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-t border-white/10 ${className}`}>
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

import Link from "next/link";

import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";

export default function TechAcademiaDashboardPage() {
  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <SectionShell className="border-t-0">
        <div className="space-y-12">
          <PageHeader
            eyebrow="Dashboard"
            title="Tech Academia workspace"
            description="Continue learning, open the AI studio, or review available technical tracks."
            actions={
              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-aurora-500 px-5 py-2 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href="/tech-academia/chat"
                >
                  Open AI studio
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20"
                  href="/tech-academia/courses"
                >
                  View courses
                </Link>
              </div>
            }
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              className="rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur transition hover:border-aurora-300/60 hover:bg-white/10"
              href="/tech-academia/chat"
            >
              <h2 className="text-xl font-semibold text-white">AI studio</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Draft lessons, prepare bilingual explanations, and continue guided tutoring sessions.
              </p>
            </Link>
            <Link
              className="rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur transition hover:border-aurora-300/60 hover:bg-white/10"
              href="/tech-academia/courses"
            >
              <h2 className="text-xl font-semibold text-white">Course tracks</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Review architecture, engineering, BIM, and technical learning paths.
              </p>
            </Link>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

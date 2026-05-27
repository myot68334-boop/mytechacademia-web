import Link from "next/link";
import { PageHeader } from "../../../../components/tech-academia/page-header";
import { SectionShell } from "../../../../components/tech-academia/section-shell";

const lessons = [
  {
    title: "Python setup and first program",
    description: "Install the tools, understand the Python interpreter, and write your first small script.",
  },
  {
    title: "Variables and data types",
    description: "Learn strings, numbers, booleans, and how Python stores simple information.",
  },
  {
    title: "Conditions and decisions",
    description: "Use if statements to make programs react to different inputs and situations.",
  },
  {
    title: "Loops and repetition",
    description: "Practice for loops and while loops for repeated tasks and simple automation.",
  },
  {
    title: "Functions for reusable code",
    description: "Break programs into clear functions with parameters, return values, and readable names.",
  },
  {
    title: "Beginner project",
    description: "Build a small command-line study helper that combines input, logic, loops, and functions.",
  },
];

export default function PythonCoursePage() {
  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35" />

      <SectionShell className="border-t-0">
        <div className="space-y-12">
          <PageHeader
            eyebrow="AI-taught course"
            title="Python Beginner Course"
            description="Start from zero and learn Python with guided lessons, practice ideas, and direct help from the Tech Academia AI Teacher."
            actions={
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20"
                href="/courses"
              >
                Back to courses
              </Link>
            }
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson, index) => (
              <article key={lesson.title} className="flex min-h-64 flex-col rounded-3xl border border-white/12 bg-white/5 p-7 shadow-glow backdrop-blur">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">
                  Lesson {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-white">{lesson.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-200">{lesson.description}</p>
                <Link
                  className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full bg-aurora-500 px-5 py-2 text-center text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href="/tech-academia/chat?mode=teacher&topic=python"
                >
                  Ask AI Teacher
                </Link>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

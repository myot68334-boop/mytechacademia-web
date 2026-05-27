import Link from "next/link";
import { InfoCard } from "../../../components/tech-academia/info-card";
import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";

const aiCourses = [
  {
    title: "Python Beginner Course",
    description: "Learn Python fundamentals with AI-guided explanations, practice prompts, and beginner-friendly project steps.",
    level: "Beginner",
    lessonCount: 6,
    href: "/courses/python",
  },
  {
    title: "Architecture Beginner Course",
    description: "Build a practical architecture foundation with AI-taught lessons on space, drawings, structure, and presentation.",
    level: "Beginner",
    lessonCount: 6,
    href: "/courses/architecture",
  },
];

const courseGroups = [
  {
    title: "Architecture & Design",
    description: "Studio-ready drills combining narrative development, passive strategy modelling, and bilingual presentation practice.",
    items: [
      {
        title: "Kyoto townhouse retrofit",
        body: "Guided project exploring passive cooling retrofits with bilingual critique sessions.",
        duration: "4 weeks",
      },
      {
        title: "Concept narrative lab",
        body: "AI-drafted concept statements refined with human review for client-ready decks.",
        duration: "2 weeks",
      },
    ],
  },
  {
    title: "Engineering & BIM",
    description: "Hands-on technical walkthroughs with AI-generated drafts and supervised approvals for accuracy.",
    items: [
      {
        title: "Structural load path clinic",
        body: "Explore real-world case studies with bilingual explanations and calculation templates.",
        duration: "3 weeks",
      },
      {
        title: "BIM coordination sprint",
        body: "Revit family management, shared parameter workflows, and AI QA checklists.",
        duration: "3 weeks",
      },
      {
        title: "Quantity survey lab",
        body: "Generate AI take-off sheets, validate them with experts, and rehearse voice explanations.",
        duration: "2 weeks",
      },
    ],
  },
  {
    title: "Digital tools & Voice",
    description: "Skill accelerators for AutoCAD, voice-first tutoring, and productivity workflows across EN / JA / MY.",
    items: [
      {
        title: "AutoCAD layer mastery",
        body: "AI-guided exercises for layer standards, annotation, and bilingual instruction.",
        duration: "10 sessions",
      },
      {
        title: "Voice rehearsal studio",
        body: "Realtime whisper prompts with transcript exports plus human pronunciation feedback.",
        duration: "Ongoing",
      },
    ],
  },
];

export default function TechAcademiaCoursesPage() {
  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35" />

      <SectionShell className="border-t-0">
        <div className="space-y-16">
          <PageHeader
            eyebrow="Course catalogue"
            title="Tech Academia learning tracks"
            description="Combine AI-guided drafting with human-reviewed delivery. Each course blends bilingual content, voice rehearsal, and technical depth tailored for serious learners."
            actions={
              <Link
                className="inline-flex items-center justify-center rounded-full bg-aurora-500 px-5 py-2 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="/pricing"
              >
                View pricing & seats
              </Link>
            }
          />

          <div className="space-y-6 rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur">
            <div>
              <h2 className="text-2xl font-semibold text-white">AI-taught starter courses</h2>
              <p className="mt-2 text-base leading-relaxed text-slate-200">
                Start a guided learning path and ask the AI Teacher for help at every lesson.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {aiCourses.map((course) => (
                <article
                  key={course.title}
                  className="relative overflow-hidden rounded-3xl border border-white/12 bg-midnight-900/60 p-7 shadow-inner-glow transition hover:-translate-y-1 hover:border-aurora-300/50 hover:bg-white/10"
                >
                  <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-aurora-500/20 blur-[90px]" />
                  <div className="relative flex h-full flex-col gap-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-aurora-200">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">{course.level}</span>
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">{course.lessonCount} lessons</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
                      <p className="text-base leading-relaxed text-slate-200">{course.description}</p>
                    </div>
                    <Link
                      className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-aurora-500 px-5 py-3 text-center text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      href={course.href}
                    >
                      Start Learning
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {courseGroups.map((group) => (
              <div key={group.title} className="space-y-6 rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-200">{group.description}</p>
                  </div>
                  <Link className="text-sm font-semibold text-aurora-200 transition hover:text-white" href="#">
                    Request syllabus
                  </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <InfoCard
                      key={item.title}
                      title={item.title}
                      body={item.body}
                      footer={<span className="text-xs uppercase tracking-[0.3em] text-aurora-200">{item.duration}</span>}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

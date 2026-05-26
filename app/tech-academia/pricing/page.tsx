import Link from "next/link";
import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";

const plans = [
  {
    name: "Studio Starter",
    price: "¥45,000",
    cadence: "per month",
    description: "Ideal for small studios or academic cohorts starting bilingual AI tutoring.",
    features: [
      "Up to 8 active learners",
      "AI drafting in EN / JA / MY with human approvals",
      "Weekly voice rehearsal blocks",
      "Dashboard analytics and notifications",
    ],
    cta: "Start Starter",
  },
  {
    name: "Professional",
    price: "¥85,000",
    cadence: "per month",
    description: "Extend to multi-discipline teams with structured workflows and voice pilots.",
    features: [
      "Up to 20 active learners",
      "Discipline-specific knowledge vault",
      "Realtime voice tutoring transcripts",
      "Priority human QA scheduling",
      "API access for LMS integration",
    ],
    cta: "Choose Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual partnership",
    description: "Tailored programs for universities or enterprise teams needing compliance and localisation.",
    features: [
      "Unlimited cohorts & disciplines",
      "Dedicated bilingual AI operations team",
      "On-premise alignment workshops",
      "Compliance and security support",
      "Custom integrations & SSO",
    ],
    cta: "Book enterprise consult",
  },
];

const faqs = [
  {
    question: "How does human approval scale?",
    answer: "Every plan includes human reviewers who sign off on AI drafts before learners receive them. Professional and Enterprise tiers add priority scheduling and dedicated reviewers.",
  },
  {
    question: "Can we switch plans later?",
    answer: "Yes. You can upgrade or downgrade at the end of your billing cycle and your workspace content, chat history, and transcripts stay intact.",
  },
  {
    question: "Do you offer localisation for other languages?",
    answer: "Enterprise partnerships can add Korean, Thai, or additional European languages with custom rollout timelines.",
  },
];

export default function TechAcademiaPricingPage() {
  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35" />

      <SectionShell className="border-t-0">
        <div className="space-y-16">
          <PageHeader
            eyebrow="Pricing"
            title="Choose the right Tech Academia seat"
            description="All plans include supervised AI drafting, bilingual support, and dashboard access. Upgrade when your cohorts expand or voice pilots need dedicated coverage."
            actions={
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20"
                href="/tech-academia/register"
              >
                Create organisation account
              </Link>
            }
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col gap-6 rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-aurora-300/60 hover:bg-white/10 ${
                  plan.featured ? "ring-2 ring-aurora-300/60" : ""
                }`}
              >
                {plan.featured ? (
                  <span className="absolute right-6 top-6 rounded-full border border-white/20 bg-aurora-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                    Popular
                  </span>
                ) : null}
                <header className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                  <p className="text-base leading-relaxed text-slate-200">{plan.description}</p>
                </header>
                <div className="text-4xl font-semibold text-white">
                  {plan.price}
                  <span className="ml-2 text-base font-normal text-slate-300">{plan.cadence}</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-aurora-500/20 text-[10px] font-semibold text-aurora-100">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    plan.featured
                      ? "bg-aurora-500 text-midnight-950 shadow-glow hover:bg-aurora-400"
                      : "border border-white/20 bg-white/10 text-white hover:border-aurora-300/60 hover:bg-white/20"
                  }`}
                  href="/tech-academia/register"
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="space-y-6 rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur">
            <h2 className="text-2xl font-semibold text-white">Billing & support</h2>
            <p className="text-base leading-relaxed text-slate-200">
              Pricing is billed in JPY. We provide invoices for enterprise teams and accept card billing for Starter and Professional plans. Each subscription includes onboarding support and weekly workspace reviews.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-white/10 bg-midnight-900/70 p-6">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-200">
              <span>Need a custom procurement flow?</span>
              <Link className="text-aurora-200 transition hover:text-white" href="/contact">
                Talk to our partnerships team
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

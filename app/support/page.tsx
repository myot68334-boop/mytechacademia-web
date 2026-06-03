import { CopyEmail } from "../../components/CopyEmail";
import { getLang } from "../../lib/i18n";

export default async function SupportPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string | string[] }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const lang = getLang(params?.lang);

  return (
    <main>
      <section className="project-hero">
        <div className="container">
          <div className={`mx-auto max-w-3xl rounded-[24px] border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur md:p-10 ${lang === "my" ? "page-hero-copy--my" : ""}`}>
            <div className="eyebrow">Support</div>
            <h1 className="section-title">Need Help?</h1>
            <p>
              If you need help with your account, course access, payment, technical issues, or general support, please contact our support team.
            </p>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Support email</span>
              </div>
              <CopyEmail email="support@mytechacademia.com" label="Copy Email" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

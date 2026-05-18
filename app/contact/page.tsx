import Link from "next/link";
import { getLang, withLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Let us talk about product, growth, or collaboration",
    body: "Reach out for product questions, collaboration ideas, freelance support, or future opportunities related to My Tech Academia, WorkJapaneseGO, ZayCho, or Tech Academia.",
    primary: "Primary Contact",
    best: "Best way to start",
    note: "Email is the best starting point for formal inquiries, project introductions, and collaboration discussions. If you want more context first, feel free to review the individual product pages.",
    general: "General inquiries",
    generalBody: "Brand questions, collaboration requests, speaking opportunities, and product introductions.",
    support: "Product support",
    supportBody: "Support questions, product feedback, and follow-up requests related to ZayCho, WorkJapaneseGO, or Tech Academia.",
    freelance: "Freelance and build work",
    freelanceBody: "UI polish, product strategy, automation support, and ecosystem build conversations.",
  },
  ja: {
    eyebrow: "お問い合わせ",
    title: "プロダクト、成長、コラボレーションについてご相談ください",
    body: "My Tech Academia、WorkJapaneseGO、ZayCho、Tech Academia に関するご質問、協業、受託相談、今後の取り組みについて、どうぞお気軽にご連絡ください。",
    primary: "主な連絡先",
    best: "最初のご連絡方法",
    note: "正式なお問い合わせやプロジェクトのご相談には、メールでのご連絡が最適です。各プロダクトの詳細を先に確認したい場合は、サイト内リンクからご覧ください。",
    general: "一般的なお問い合わせ",
    generalBody: "ブランドに関するご質問、協業のご相談、登壇依頼、プロダクト紹介など。",
    support: "プロダクトサポート",
    supportBody: "ZayCho、WorkJapaneseGO、Tech Academia に関するサポート、フィードバック、ご不明点のご相談。",
    freelance: "受託・制作のご相談",
    freelanceBody: "UI改善、プロダクト戦略、自動化支援、エコシステム構築に関するご相談を承っています。",
  },
  my: {
    eyebrow: "ဆက်သွယ်ရန်",
    title: "ထုတ်ကုန် ၊ တိုးတက်မှု၊ ပူးပေါင်းဆောင်ရွက်မှုတို့အကြောင်း ဆွေးနွေးနိုင်ပါသည်။",
    body: "My Tech Academia၊ WorkJapaneseGO၊ ZayCho နှင့် Tech Academia တို့နှင့်သက်ဆိုင်သော မေးမြန်းချက်များ၊ ပူးပေါင်းဆောင်ရွက်မှုဆိုင်ရာ ဆွေးနွေးမှုများ၊ freelance အထောက်အပံ့လိုအပ်ချက်များ သို့မဟုတ် အနာဂတ်အခွင့်အလမ်းများအတွက် ဆက်သွယ်နိုင်ပါသည်။",
    primary: "အဓိကဆက်သွယ်ရန်လိပ်စာ",
    best: "စတင်ဆက်သွယ်ရန် အကောင်းဆုံးနည်းလမ်း",
    note: "တရားဝင်မေးမြန်းချက်များ၊ ပရောဂျက်မိတ်ဆက်ချက်များ သို့မဟုတ် လုပ်ငန်းဆိုင်ရာဆွေးနွေးမှုများအတွက် အီးမေးလ်ကို အသုံးပြုရန် အကြံပြုပါသည်။ ထုတ်ကုန်တစ်ခုချင်းစီ၏ အသေးစိတ်အချက်အလက်များကို ဦးစွာကြည့်ရှုလိုပါက project links များမှတစ်ဆင့် ဝင်ရောက်ကြည့်ရှုနိုင်ပါသည်။",
    general: "ယေဘုယျမေးမြန်းချက်များ",
    generalBody: "အမှတ်တံဆိပ်နှင့်သက်ဆိုင်သော မေးမြန်းချက်များ၊ ပူးပေါင်းဆောင်ရွက်မှုအဆိုပြုချက်များ၊ စကားပြောဖိတ်ကြားမှုများနှင့် ထုတ်ကုန်မိတ်ဆက်မှုများ။",
    support: "ထုတ်ကုန်အကူအညီ",
    supportBody: "ZayCho၊ WorkJapaneseGO နှင့် Tech Academia တို့နှင့်သက်ဆိုင်သော အကူအညီတောင်းခံမှုများ သို့မဟုတ် feedback ဆိုင်ရာ ဆက်သွယ်မှုများ။",
    freelance: "Freelance နှင့် တည်ဆောက်မှုဆိုင်ရာ ဆွေးနွေးမှုများ",
    freelanceBody: "UI polish၊ product strategy၊ automation support သို့မဟုတ် ချိတ်ဆက်ထုတ်ကုန်စနစ် တည်ဆောက်မှုဆိုင်ရာ ဆွေးနွေးမှုများ။",
  },
} as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string | string[] }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const lang = getLang(params?.lang);
  const t = copy[lang];
  return (
    <main>
      <section className="project-hero">
        <div className="container page-grid">
          <div className="copy-block page-hero-copy page-hero-copy--primary">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="section-title">{t.title}</h1>
            <p>{t.body}</p>
          </div>
          <div className="copy-block page-hero-copy page-hero-copy--secondary">
            <span className="project-tag">{t.primary}</span>
            <h3>{t.best}</h3>
            <p className="contact-note">{t.note}</p>
            <div className="project-actions">
              <Link href="mailto:hello@mytechacademia.com" className="cta-chip cta-chip--solid">
                hello@mytechacademia.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <article className="feature-card">
            <h3>{t.general}</h3>
            <p>{t.generalBody}</p>
          </article>
          <article className="feature-card">
            <h3>{t.support}</h3>
            <p>{t.supportBody}</p>
          </article>
          <article className="feature-card">
            <h3>{t.freelance}</h3>
            <p>{t.freelanceBody}</p>
          </article>
        </div>
      </section>
    </main>
  );
}

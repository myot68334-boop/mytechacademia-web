import Link from "next/link";
import { ScreenshotShowcase } from "../../components/screenshot-showcase";
import { getProjectGallery } from "../../data/screenshots";
import { getLang, withLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "Language Learning App",
    title: "WorkJapaneseGO",
    body: "WorkJapaneseGO is designed for people who need practical Japanese for real life and real work. It brings together useful phrases, simple explanations, voice-friendly flows, and a learning rhythm that is easier to keep going.",
    bullets: [
      "Practical phrases for work and daily life",
      "Beginner-friendly lesson flow with guided repetition",
      "Voice, speaking confidence, and real-use conversation support",
    ],
    tryApp: "Try the App",
    explore: "Explore Ecosystem",
    bestFor: "Best For",
    bestTitle: "Useful for people learning under real pressure",
    bestBody: "Ideal for learners in Japan, beginners, part-time workers, and users who want confidence with practical phrases instead of textbook-heavy content.",
    screens: "Screenshots",
    screensTitle: "Current product visuals and app branding",
    screensLead: "The page now shows current WorkJapaneseGO brand visuals directly on the site, with structure ready for future in-app screenshots and lesson captures.",
    features: [
      ["Proof of usefulness", "Built around phrases people can use immediately in jobs, shops, and everyday life."],
      ["Voice-first direction", "Designed to grow into speaking practice, pronunciation support, and confidence-building loops."],
      ["Beginner clarity", "Simple lesson structure, low-friction UI, and clear practical outcomes for new learners."],
      ["Scalable product path", "Ready for deeper quiz mode, coaching mode, and future AI tutor expansion."],
    ],
    ctaTitle: "Want to launch, test, or collaborate on WorkJapaneseGO?",
    ctaBody: "Reach out if you want to shape the app direction, explore distribution, or prepare a stronger launch around the Japanese learning experience.",
    cta: "Start a Conversation",
  },
  ja: {
    eyebrow: "日本語学習アプリ",
    title: "WorkJapaneseGO",
    body: "WorkJapaneseGO は、生活や仕事の現場でそのまま使える日本語を身につけたい人のためのアプリです。役立つフレーズ、分かりやすい説明、音声に向いた導線、続けやすい学習体験をひとつにつないでいます。",
    bullets: [
      "仕事と日常生活ですぐ使える実用フレーズ",
      "反復しやすい初心者向けのレッスン構成",
      "音声学習、話す自信、実践会話を意識したサポート",
    ],
    tryApp: "アプリを見る",
    explore: "エコシステムを見る",
    bestFor: "おすすめ対象",
    bestTitle: "現場で必要な日本語を身につけたい人向け",
    bestBody: "日本在住の学習者、初心者、アルバイトや仕事で日本語が必要な人に向いています。教科書的な内容よりも、そのまま使える表現を重視する人に適しています。",
    screens: "スクリーンショット",
    screensTitle: "現在のブランドビジュアルとアプリ表現",
    screensLead: "現時点の WorkJapaneseGO のブランドビジュアルをページに直接掲載し、今後はアプリ画面や学習シーンのキャプチャへ自然に広げられる構成にしています。",
    features: [
      ["すぐ使える実用性", "仕事、店舗、日常生活の場面ですぐ使える表現を中心に構成しています。"],
      ["音声中心の方向性", "発話練習、発音支援、自信を育てる学習サイクルへ発展しやすい設計です。"],
      ["初心者にやさしい明快さ", "負担の少ないUIと分かりやすい学習構造で、初学者でも始めやすくしています。"],
      ["拡張しやすいプロダクト", "クイズ、コーチング、将来のAIチューター機能へも広げやすい土台があります。"],
    ],
    ctaTitle: "WorkJapaneseGO の次の成長を一緒に考えませんか？",
    ctaBody: "アプリの方向性整理、配信戦略、日本語学習体験の強化について相談したい方はぜひご連絡ください。",
    cta: "相談を始める",
  },
  my: {
    eyebrow: "ဂျပန်ဘာသာသင်ယူရေးအက်ပ်",
    title: "WorkJapaneseGO",
    body: "WorkJapaneseGO သည် ဂျပန်နိုင်ငံတွင် နေထိုင်မှုနှင့် အလုပ်ခွင်အသုံးပြုမှုအတွက် လက်တွေ့အသုံးချနိုင်သော ဂျပန်ဘာသာကို သင်ယူလိုသူများအတွက် ရည်ရွယ်တည်ဆောက်ထားသော အက်ပ်ဖြစ်ပါသည်။ အဓိကအားဖြင့် အသုံးချနိုင်သော phrase များ၊ နားလည်ရလွယ်သော ရှင်းလင်းချက်များ၊ voice-friendly flow နှင့် ဆက်လက်သင်ယူချင်စေသော learning momentum ကို အလေးထားထားပါသည်။",
    bullets: [
      "အလုပ်နှင့် နေ့စဉ်ဘဝတွင် ချက်ချင်းအသုံးပြုနိုင်သော practical phrases",
      "စတင်သင်ယူသူများအတွက် guided repetition ပါဝင်သော lesson flow",
      "ပြောဆိုနိုင်မှု ယုံကြည်ချက်၊ voice practice နှင့် real-use conversation support",
    ],
    tryApp: "အက်ပ်အကြောင်း ဆွေးနွေးရန်",
    explore: "ထုတ်ကုန်စနစ်ကြည့်ရန်",
    bestFor: "အသုံးပြုရန် သင့်တော်သူများ",
    bestTitle: "လက်တွေ့လိုအပ်ချက်အောက်တွင် သင်ယူနေသူများအတွက် အထူးအသုံးဝင်ပါသည်",
    bestBody: "ဂျပန်နိုင်ငံတွင် သင်ယူနေသူများ၊ စတင်သင်ယူသူများ၊ part-time အလုပ်လုပ်သူများနှင့် စာအုပ်ပုံစံထက် လက်တွေ့အသုံးဝင်သော phrase များကို အဓိကလိုအပ်သူများအတွက် အသင့်တော်ဆုံးဖြစ်ပါသည်။",
    screens: "မြင်ကွင်းများ",
    screensTitle: "လက်ရှိ အမှတ်တံဆိပ်မြင်ကွင်းများနှင့် အက်ပ်ခွဲခြားမှုစနစ်",
    screensLead: "WorkJapaneseGO ၏ လက်ရှိ အမှတ်တံဆိပ်မြင်ကွင်းများကို page ပေါ်တွင် တိုက်ရိုက်ပြသထားပြီး၊ နောင်တွင် in-app lesson captures နှင့် feature screenshots များဖြင့် ဆက်လက်တိုးချဲ့နိုင်ရန် structure ကို ပြင်ဆင်ထားပါသည်။",
    features: [
      ["အသုံးချနိုင်မှုအပေါ် အခြေခံထားသော design", "အလုပ်ခွင်၊ ဆိုင်ခန်းနှင့် နေ့စဉ်အသုံးပြုမှုအတွက် ချက်ချင်းသုံးနိုင်သော expression များကို အခြေခံတည်ဆောက်ထားပါသည်။"],
      ["Voice-centered product direction", "Speaking practice၊ pronunciation support နှင့် confidence-building flow များသို့ ဆက်လက်တိုးချဲ့နိုင်ရန် မူလကတည်းက စဉ်းစားထားပါသည်။"],
      ["Beginner clarity", "စတင်အသုံးပြုရာတွင် မရှုပ်ထွေးဘဲ lesson structure နားလည်ရလွယ်စေရန် low-friction UX ကို အသုံးပြုထားပါသည်။"],
      ["Scalable learning path", "Quiz mode၊ coaching support နှင့် future AI tutor direction များသို့ တိုးချဲ့နိုင်သော learning foundation ရှိပါသည်။"],
    ],
    ctaTitle: "WorkJapaneseGO ၏ ဖွံ့ဖြိုးတိုးတက်မှုဦးတည်ချက်အကြောင်း ဆွေးနွေးလိုပါသလား",
    ctaBody: "app direction၊ distribution plan သို့မဟုတ် Japanese learning experience ကို ပိုမိုအားကောင်းအောင် ဖော်ဆောင်လိုသူများအတွက် ဆက်သွယ်ဆွေးနွေးနိုင်ပါသည်။",
    cta: "ဆက်သွယ်ဆွေးနွေးရန်",
  },
} as const;

export default async function WorkJapaneseGoPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string | string[] }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const lang = getLang(params?.lang);
  const t = copy[lang];
  const gallery = getProjectGallery(lang);
  return (
    <main>
      <section className="project-hero">
        <div className="container page-grid">
          <section className="copy-block page-hero-copy page-hero-copy--primary">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p>{t.body}</p>
            <ul className="clean-list">
              {t.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--solid">
                {t.tryApp}
              </Link>
              <Link href={withLang("/projects", lang)} className="cta-chip cta-chip--ghost">
                {t.explore}
              </Link>
            </div>
          </section>
          <aside className="copy-block page-hero-copy page-hero-copy--secondary">
            <span className="project-tag">{t.bestFor}</span>
            <h3>{t.bestTitle}</h3>
            <p>{t.bestBody}</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.screens}</div>
              <h2 className="section-title">{t.screensTitle}</h2>
            </div>
            <p className="section-lead">{t.screensLead}</p>
          </div>
          <ScreenshotShowcase items={gallery.workJapaneseGo} compact />
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          {t.features.map(([title, body]) => (
            <article key={title} className="feature-card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-band reveal-band reveal-band--secondary">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaBody}</p>
            <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--ghost">
              {t.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

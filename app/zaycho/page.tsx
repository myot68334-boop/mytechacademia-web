import Link from "next/link";
import { ScreenshotShowcase } from "../../components/screenshot-showcase";
import { getProjectGallery } from "../../data/screenshots";
import { getLang, withLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "Guided Ecommerce",
    body: "ZayCho is built as a guided grocery and ecommerce experience where users can move from uncertainty to purchase faster. The core idea is assistance-first shopping: category, budget, and need-based guidance instead of endless browsing.",
    bullets: [
      "Budget-based shopping guidance",
      "Recommendation-first purchase flow",
      "Storefront and chat-assisted shopping experience",
    ],
    open: "Open Store",
    explore: "Explore Ecosystem",
    bestFor: "Best For",
    bestTitle: "Fast decisions for everyday shoppers",
    bestBody: "Useful for busy shoppers, families, and anyone who wants helpful product suggestions and quicker decisions instead of scrolling through long catalogs.",
    screens: "Screenshots",
    screensTitle: "Current brand and grocery visuals on the page",
    screensLead: "ZayCho's live brand and grocery imagery are embedded directly into the page, with the layout ready for future storefront and mobile captures.",
    features: [
      ["Guided shopping logic", "The strongest path is still category, budget, and need flowing into useful recommendations."],
      ["Cross-channel support", "Designed to work across storefronts, Telegram-style flows, and mobile shopping behavior."],
      ["Commerce clarity", "Helps reduce decision fatigue and makes grocery shopping feel simpler and more assisted."],
      ["Scalable retail layer", "Ready for richer product cards, loyalty flows, notifications, and future cart sync improvements."],
    ],
    ctaTitle: "Want to shape ZayCho into a smarter commerce experience?",
    ctaBody: "Reach out if you want to work on storefront direction, mobile flows, recommendation design, or conversion-focused ecommerce improvements around ZayCho.",
    cta: "Talk About ZayCho",
  },
  ja: {
    eyebrow: "ガイド付きEC",
    body: "ZayCho は、迷いから購入までをよりスムーズに進められる食料品・EC体験として設計されています。商品を並べるだけではなく、カテゴリ・予算・必要性に応じて選びやすく案内することを軸に、日々の買い物をもっと進めやすく整えていくサービスです。",
    bullets: [
      "予算ベースの買い物ガイド",
      "おすすめ中心の購入導線",
      "ストア画面とチャット支援を組み合わせた体験",
    ],
    open: "ストアを見る",
    explore: "エコシステムを見る",
    bestFor: "おすすめ対象",
    bestTitle: "毎日の買い物を効率よく済ませたい人向け",
    bestBody: "忙しい利用者や家族向けの買い物客、長い一覧を眺め続けるよりも、提案を受けながら効率よく選びたい人に向いています。",
    screens: "スクリーンショット",
    screensTitle: "現在のブランドと食料品ビジュアル",
    screensLead: "ZayCho のブランド画像と食料品ビジュアルをページ上で直接確認できるようにし、将来はストア画面やモバイル画面の実例にも広げられる構成にしています。",
    features: [
      ["ガイド付きショッピングロジック", "カテゴリ、予算、必要性から役立つおすすめへつなぐ導線を、中心となる買い物体験として設計しています。"],
      ["複数チャネル対応", "ストア画面、対話型の案内導線、モバイル上の買い物行動をまたいでも、一貫した体験を保てるよう設計しています。"],
      ["買い物の分かりやすさ", "迷いを減らし、食料品購入をより簡単で安心感のある体験へ整えていきます。"],
      ["拡張可能な小売基盤", "商品カードの拡充、通知、カート同期など、今後の改善にも柔軟に対応できる基盤を備えています。"],
    ],
    ctaTitle: "ZayCho を、より選びやすいEC体験へ育てたいですか？",
    ctaBody: "ストア設計、モバイル体験、おすすめ導線、購買率向上を意識したEC改善について一緒に考えたい方は、ぜひご連絡ください。",
    cta: "ZayCho について相談する",
  },
  my: {
    eyebrow: "လမ်းညွှန်ပါဝင်သော အီလက်ထရောနစ်ကုန်သွယ်မှု",
    body: "ZayCho သည် ကုန်စုံနှင့် အွန်လိုင်းဝယ်ယူမှုအတွေ့အကြုံကို ပိုမိုလွယ်ကူစေရန် လမ်းညွှန်ပါဝင်သော ဝယ်ယူမှုအတွေ့အကြုံအဖြစ် တည်ဆောက်ထားသော ထုတ်ကုန်တစ်ခုဖြစ်ပါသည်။ ရှာဖွေရန်ခက်ခဲသော ထုတ်ကုန်စာရင်းများကို အဆုံးမရှိ ကြည့်ရှုနေရခြင်းအစား အမျိုးအစား၊ ဘတ်ဂျက်နှင့် လိုအပ်ချက်တို့ကို အခြေခံ၍ အကြံပြုပေးသည့် ဝယ်ယူမှုလမ်းကြောင်းကို အဓိကထားပါသည်။",
    bullets: [
      "ဘတ်ဂျက်အခြေခံ ဝယ်ယူမှုလမ်းညွှန်မှု",
      "အကြံပြုချက်ကို ဦးစားပေးသည့် ဝယ်ယူမှုလမ်းကြောင်း",
      "စတိုးမြင်ကွင်းနှင့် စကားပြောအကူအညီပါဝင်သော ဝယ်ယူမှုအတွေ့အကြုံကို ချိတ်ဆက်ထားသော ဖွဲ့စည်းမှု",
    ],
    open: "ZayCho အကြောင်း ဆွေးနွေးရန်",
    explore: "ထုတ်ကုန်စနစ်ကြည့်ရန်",
    bestFor: "အသုံးပြုရန် သင့်တော်သူများ",
    bestTitle: "နေ့စဉ်ဝယ်ယူမှုတွင် ဆုံးဖြတ်ချက်ကို မြန်ဆန်စေလိုသူများအတွက်",
    bestBody: "အလုပ်များသော ဝယ်ယူသူများ၊ မိသားစုအတွက် တစ်ကြိမ်တည်း ပြည့်စုံစွာ ဝယ်ယူလိုသူများနှင့် ရှည်လျားသော ထုတ်ကုန်စာရင်းကို ကြည့်ရှုရင်း မဆုံးဖြတ်ချင်ဘဲ အကြံပြုချက်အခြေခံ၍ ဝယ်ယူလိုသူများအတွက် အထူးအသုံးဝင်ပါသည်။",
    screens: "မြင်ကွင်းများ",
    screensTitle: "လက်ရှိ အမှတ်တံဆိပ်မြင်ကွင်းများနှင့် ကုန်စုံဝယ်ယူမှုဆိုင်ရာ တင်ပြမှုများ",
    screensLead: "ZayCho ၏ အမှတ်တံဆိပ်မြင်ကွင်းများနှင့် ကုန်စုံဝယ်ယူမှုဆိုင်ရာ ရုပ်ပုံများကို စာမျက်နှာပေါ်တွင် တိုက်ရိုက်ပြသထားပြီး နောင်တွင် စတိုးမြင်ကွင်းများနှင့် မိုဘိုင်းအသုံးပြုမှုမြင်ကွင်းများဖြင့် ဆက်လက်တိုးချဲ့နိုင်ရန် ပြင်ဆင်ထားပါသည်။",
    features: [
      ["လမ်းညွှန်ပါဝင်သော ဝယ်ယူမှုစနစ်", "အမျိုးအစား၊ ဘတ်ဂျက်နှင့် လိုအပ်ချက်တို့မှ အကြံပြုချက်သို့ ဆက်သွယ်ပေးသော ဝယ်ယူမှုလမ်းကြောင်းကို အဓိကထုတ်ကုန်လမ်းကြောင်းအဖြစ် ထားရှိထားပါသည်။"],
      ["ချန်နယ်အနှံ့ ဆက်စပ်အသုံးပြုနိုင်မှု", "စတိုးမြင်ကွင်း၊ Telegram ပုံစံ အကူအညီလမ်းကြောင်းနှင့် မိုဘိုင်းဝယ်ယူမှုအပြုအမူတို့အကြား တစ်ပြေးညီ အသုံးပြုသူအတွေ့အကြုံ ရရှိစေရန် စီစဉ်ထားပါသည်။"],
      ["ဝယ်ယူမှုရှင်းလင်းလွယ်ကူမှု", "ဆုံးဖြတ်ရန်ခက်ခဲမှုကို လျော့နည်းစေပြီး ကုန်စုံဝယ်ယူမှုကို ပိုမိုရှင်းလင်းလွယ်ကူသော အတွေ့အကြုံအဖြစ် ပြောင်းလဲပေးပါသည်။"],
      ["ချဲ့ထွင်နိုင်သော လက်လီရောင်းချမှုအခြေခံစနစ်", "အနာဂတ်တွင် စျေးဝယ်လှည်းချိတ်ဆက်မှု၊ ပိုမိုပြည့်စုံသော ထုတ်ကုန်ကတ်များ၊ အသိပေးချက်များနှင့် သစ္စာရှိအသုံးပြုသူစနစ်များသို့ တိုးချဲ့နိုင်သော အခြေခံစနစ်ရှိပါသည်။"],
    ],
    ctaTitle: "ZayCho ကို ပိုမိုအားကောင်းသော ဝယ်ယူမှုအတွေ့အကြုံအဖြစ် ဖွံ့ဖြိုးတိုးတက်စေလိုပါသလား",
    ctaBody: "စတိုးဖွဲ့စည်းပုံ၊ မိုဘိုင်းဝယ်ယူမှုလမ်းကြောင်း၊ အကြံပြုချက်စနစ် သို့မဟုတ် ဝယ်ယူမှုအောင်မြင်မှုကို ဦးတည်သည့် အီလက်ထရောနစ်ကုန်သွယ်မှုတိုးတက်မှုများအတွက် ZayCho နှင့် ပတ်သက်၍ ဆွေးနွေးနိုင်ပါသည်။",
    cta: "ZayCho အကြောင်း ဆွေးနွေးရန်",
  },
} as const;

export default async function ZayChoPage({
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
          <section className={`copy-block page-hero-copy page-hero-copy--primary ${lang === "my" ? "page-hero-copy--my" : ""}`}>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>ZayCho</h1>
            <p>{t.body}</p>
            <ul className="clean-list">
              {t.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--solid">
                {t.open}
              </Link>
              <Link href={withLang("/projects", lang)} className="cta-chip cta-chip--ghost">
                {t.explore}
              </Link>
            </div>
          </section>
          <aside className={`copy-block page-hero-copy page-hero-copy--secondary ${lang === "my" ? "page-hero-copy--my" : ""}`}>
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
          <ScreenshotShowcase items={gallery.zaycho} compact />
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

import { getLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "About",
    title: "A brand built around useful products, not empty launches",
    body: "My Tech Academia is an umbrella brand for products designed to be practical, focused, and human-centered from day one. The goal is to grow a small ecosystem in which each app solves a real problem clearly and usefully.",
    principles: "Brand Principles",
    bullets: [
      "Build products people can understand quickly",
      "Use AI to improve clarity, speed, and usefulness",
      "Design systems that can scale across apps and platforms",
    ],
    features: [
      ["Product-first thinking", "Every project starts with a clear user problem and a practical path to delivery."],
      ["Elegant but useful UX", "Visual polish matters when it improves clarity, trust, and real action."],
      ["AI with purpose", "AI is treated as a helper for learning, decisions, and speed rather than extra noise."],
      ["Scalable foundation", "The structure is designed so new products can join the ecosystem cleanly over time."],
    ],
  },
  ja: {
    eyebrow: "紹介",
    title: "見せかけの公開ではなく、役に立つプロダクトを育てるためのブランド",
    body: "My Tech Academia は、実用性、分かりやすさ、人に寄り添う体験を重視したプロダクトを束ねるブランドです。各アプリが現実の課題を明確に解決しながら、ひとつの小さなエコシステムとして育っていくことを目指しています。",
    principles: "ブランド原則",
    bullets: [
      "使う人がすぐに理解できるプロダクトをつくる",
      "AI を分かりやすさ、スピード、有用性の向上に活かす",
      "アプリやプラットフォームをまたいで拡張できる設計を整える",
    ],
    features: [
      ["プロダクト起点の発想", "すべてのプロジェクトは、利用者が直面する明確な課題と、実用的な実装ルートから出発します。"],
      ["美しさと実用性の両立", "見た目の磨き込みは、分かりやすさと行動のしやすさを支えるときにこそ意味があると考えています。"],
      ["目的のあるAI活用", "AI はノイズを増やす存在ではなく、学び、判断、スピードを支える補助として位置づけています。"],
      ["拡張できる土台", "今後新しいプロダクトが無理なく加わっていけるような構造を、あらかじめ整えています。"],
    ],
  },
  my: {
    eyebrow: "မိတ်ဆက်",
    title: "ပေါ်ပင်မဟုတ်ဘဲ လက်တွေ့အသုံးဝင်သော ထုတ်ကုန်များကို တည်ဆောက်ရန် ရည်ရွယ်ထားသော အမှတ်တံဆိပ်",
    body: "My Tech Academia သည် လက်တွေ့အသုံးဝင်မှု၊ ရှင်းလင်းပြတ်သားမှုနှင့် လူအပေါ်အလေးထားသော အသုံးပြုမှုအတွေ့အကြုံတို့ကို အခြေခံ၍ ထုတ်ကုန်များကို စုစည်းဖော်ဆောင်ထားသည့် umbrella brand တစ်ခုဖြစ်ပါသည်။ ပရောဂျက်တစ်ခုချင်းစီသည် အမှန်တကယ်ရှိသော ပြဿနာတစ်ရပ်ကို ရှင်းလင်းစွာ ဖြေရှင်းပေးနိုင်ရမည်ဖြစ်ပြီး၊ အားလုံးပေါင်းစည်းသည့်အခါ သေးငယ်သော်လည်း အဓိပ္ပာယ်ရှိသော ချိတ်ဆက်ထုတ်ကုန်စနစ်တစ်ခုအဖြစ် ဖွံ့ဖြိုးလာရန် ရည်ရွယ်ထားပါသည်။",
    principles: "အမှတ်တံဆိပ်အခြေခံသဘောတရားများ",
    bullets: [
      "အသုံးပြုသူက လျင်မြန်စွာ နားလည်နိုင်သော ထုတ်ကုန်များကို တည်ဆောက်ခြင်း",
      "AI ကို ရှင်းလင်းမှု၊ မြန်ဆန်မှုနှင့် အသုံးဝင်မှု တိုးတက်စေရန် ရည်ရွယ်ချက်ရှိစွာ အသုံးချခြင်း",
      "အက်ပ်များနှင့် ပလက်ဖောင်းများအကြား ချဲ့ထွင်နိုင်သော စနစ်တကျဖွဲ့စည်းမှုကို တည်ဆောက်ခြင်း",
    ],
    features: [
      ["ထုတ်ကုန်အခြေပြု စဉ်းစားပုံ", "ပရောဂျက်တိုင်းသည် အသုံးပြုသူ၏ အမှန်တကယ်လိုအပ်ချက်နှင့် လက်တွေ့အကောင်အထည်ဖော်နိုင်မည့် လမ်းကြောင်းတစ်ခုမှ စတင်ပါသည်။"],
      ["လှပမှုနှင့် အသုံးဝင်မှုကို တပြိုင်တည်းထားခြင်း", "မြင်ကွင်းပိုင်း polish သည် အရေးကြီးသော်လည်း၊ ၎င်းသည် ရှင်းလင်းမှုနှင့် လက်တွေ့အသုံးချနိုင်မှုကို ပံ့ပိုးပေးသောအခါတွင်သာ အဓိပ္ပာယ်ရှိသည်ဟု ယုံကြည်ပါသည်။"],
      ["ရည်ရွယ်ချက်ရှိသော AI အသုံးချမှု", "AI ကို အသံကျယ်သောအင်္ဂါရပ်တစ်ခုအဖြစ် မဟုတ်ဘဲ သင်ယူမှု၊ ဆုံးဖြတ်ချက်ချမှုနှင့် လုပ်ဆောင်မှုမြန်ဆန်မှုတို့ကို ကူညီပံ့ပိုးပေးသည့် လက်တွေ့ကိရိယာအဖြစ် အသုံးပြုပါသည်။"],
      ["ချဲ့ထွင်နိုင်သော အခြေခံတည်ဆောက်မှု", "နောင်တွင် အသစ်ထပ်မံဖော်ဆောင်မည့် ထုတ်ကုန်များကို သန့်ရှင်းစွာ ပေါင်းစည်းနိုင်ရန် စနစ်တကျသော အခြေခံဖွဲ့စည်းမှုကို ကြိုတင်စီမံထားပါသည်။"],
    ],
  },
} as const;

export default async function AboutPage({
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
            <span className="project-tag">{t.principles}</span>
            <ul className="clean-list">
              {t.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-grid">
            {t.features.map(([title, body]) => (
              <article key={title} className="feature-card">
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

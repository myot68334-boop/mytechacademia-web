import { CopyEmail } from "@/components/CopyEmail";
import { BookingForm } from "../../components/booking-form";
import { getLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Book small-group online support for Python, AI tools, and websites",
    body: "Start with a practical Google Meet session for 2 to 5 learners. My Tech Academia helps Burmese beginners in Japan understand school programming, AI tools, website basics, and digital work in clear English, Japanese, and Burmese.",
    primary: "Primary Contact",
    best: "Best way to start",
    note: "Fill in the booking request, copy the message, and send it through your preferred email or chat app. After confirming the topic and time, payment details for bank transfer will be shared before the session.",
    general: "Python and school programming",
    generalBody: "Beginner-friendly explanation for assignments, errors, basic logic, and programming concepts students are currently stuck on.",
    support: "AI tools starter support",
    supportBody: "Practical help with ChatGPT, Codex-style workflows, study support, content ideas, and safe beginner habits for using AI.",
    freelance: "Website and online business basics",
    freelanceBody: "Support for HTML/CSS basics, simple portfolio pages, website planning, content structure, and first online business steps.",
    bookingEyebrow: "Booking Request",
    bookingTitle: "Request a Google Meet support session",
    bookingLead: "Sessions are designed for 2 to 5 learners. The first goal is simple: solve one clear study or tech problem and leave with next steps.",
    packages: [
      ["Starter Group", "¥3,000 / learner", "60 minutes for Python, AI tools, or website questions."],
      ["Focused Workshop", "¥5,000 / learner", "90 minutes with examples, practice, and follow-up notes."],
      ["First Month Goal", "¥10,000+", "Two to four small sessions are enough to validate the first offer."],
    ],
    form: {
      name: "Name",
      email: "Email",
      contact: "Preferred contact",
      topic: "Support topic",
      topicOptions: ["Python", "AI tools", "Website / HTML / CSS", "Online business basics", "Other"],
      level: "Current level",
      message: "What do you want help with?",
      submit: "Copy Request Message",
      note: "This copies your request message. Please send it through your preferred email or chat app.",
      mailSubject: "Google Meet support booking request",
    },
  },
  ja: {
    eyebrow: "お問い合わせ",
    title: "Python・AIツール・Web制作の少人数オンラインサポート",
    body: "My Tech Academia は、日本で学ぶミャンマー人初心者向けに、学校のプログラミング、AIツール、Webサイト基礎、デジタル仕事の始め方を、英語・日本語・ビルマ語で分かりやすくサポートします。",
    primary: "主な連絡先",
    best: "最初のご連絡方法",
    note: "フォームを入力してメッセージをコピーし、希望するメールまたはチャットアプリで送信してください。内容と日時を確認した後、Google Meet と銀行振込の詳細をご案内します。",
    general: "Python・学校課題サポート",
    generalBody: "課題、エラー、基本ロジック、授業で分かりにくいプログラミング内容を初心者向けに整理して説明します。",
    support: "AIツール入門サポート",
    supportBody: "ChatGPT、Codex型の作業、学習サポート、コンテンツ作成、AI活用の基本習慣を実用的に支援します。",
    freelance: "Webサイト・オンラインビジネス基礎",
    freelanceBody: "HTML/CSS、ポートフォリオ、サイト設計、発信内容の整理、オンラインで仕事を始める基本をサポートします。",
    bookingEyebrow: "予約リクエスト",
    bookingTitle: "Google Meet サポートを相談する",
    bookingLead: "2〜5名の少人数で進めます。最初の目的は、ひとつの学習・技術課題を解決し、次の行動を明確にすることです。",
    packages: [
      ["Starter Group", "¥3,000 / 人", "60分で Python、AIツール、Webの質問に対応。"],
      ["Focused Workshop", "¥5,000 / 人", "90分で例題、練習、フォローアップメモまで対応。"],
      ["First Month Goal", "¥10,000+", "少人数セッション2〜4回で最初の売上検証を目指します。"],
    ],
    form: {
      name: "お名前",
      email: "メール",
      contact: "希望連絡先",
      topic: "相談内容",
      topicOptions: ["Python", "AIツール", "Webサイト / HTML / CSS", "オンラインビジネス基礎", "その他"],
      level: "現在のレベル",
      message: "相談したい内容",
      submit: "メッセージをコピーする",
      note: "相談内容をコピーします。希望するメールまたはチャットアプリで送信してください。",
      mailSubject: "Google Meet サポート予約リクエスト",
    },
  },
  my: {
    eyebrow: "ဆက်သွယ်ရန်",
    title: "Python၊ AI Tools နှင့် Website အတွက် အဖွဲ့သေးသေး Online Support",
    body: "ဂျပန်နိုင်ငံရှိ မြန်မာ beginner များအတွက် ကျောင်း programming၊ AI tools၊ website basic နှင့် online business စတင်ခြင်းကို Google Meet ဖြင့် ၂ ယောက်မှ ၅ ယောက်အထိ နားလည်လွယ်အောင် ကူညီပေးပါသည်။",
    primary: "အဓိကဆက်သွယ်ရန်လိပ်စာ",
    best: "စတင်ဆက်သွယ်ရန် အကောင်းဆုံးနည်းလမ်း",
    note: "Booking request ဖြည့်ပြီး message ကို copy လုပ်ကာ မိမိနှစ်သက်သော email သို့မဟုတ် chat app မှတဆင့် ပေးပို့ပါ။ အကြောင်းအရာနှင့်အချိန်ကို အတည်ပြုပြီးနောက် Google Meet link နှင့် bank transfer အချက်အလက်ကို ပေးပို့ပါမည်။",
    general: "Python နှင့် ကျောင်း programming",
    generalBody: "Assignment၊ error၊ basic logic နှင့် class မှာနားမလည်သေးသော programming အကြောင်းအရာများကို beginner-friendly ဖြင့်ရှင်းပြပေးပါသည်။",
    support: "AI Tools စတင်အသုံးပြုနည်း",
    supportBody: "ChatGPT၊ Codex-style workflow၊ study support၊ content idea နှင့် AI ကိုလုံခြုံပြီးလက်တွေ့ကျကျ အသုံးချနည်းကို ကူညီပေးပါသည်။",
    freelance: "Website နှင့် Online Business Basic",
    freelanceBody: "HTML/CSS basic၊ portfolio page၊ website planning၊ content structure နှင့် online business စတင်ရာတွင်လိုအပ်သော အခြေခံများကို ကူညီပေးပါသည်။",
    bookingEyebrow: "Booking Request",
    bookingTitle: "Google Meet Support အတွက် မေးမြန်းရန်",
    bookingLead: "၂ ယောက်မှ ၅ ယောက်အထိ အဖွဲ့သေးသေးဖြင့် စတင်ပါမည်။ ပထမဆုံးရည်ရွယ်ချက်က problem တစ်ခုကိုရှင်းပြီး နောက်ထပ်လုပ်ရမည့် step ကိုသိသွားရန်ဖြစ်ပါသည်။",
    packages: [
      ["Starter Group", "¥3,000 / ယောက်", "60 minutes အတွင်း Python၊ AI tools သို့မဟုတ် website မေးခွန်းများကိုဖြေရှင်းပေးပါမည်။"],
      ["Focused Workshop", "¥5,000 / ယောက်", "90 minutes အတွင်း example၊ practice နှင့် follow-up note ပါဝင်ပါမည်။"],
      ["First Month Goal", "¥10,000+", "အဖွဲ့သေးသေး session ၂ မှ ၄ ကြိမ်ဖြင့် ပထမဆုံးဝင်ငွေကိုစမ်းသပ်နိုင်ပါသည်။"],
    ],
    form: {
      name: "နာမည်",
      email: "Email",
      contact: "ဆက်သွယ်ရန်နည်းလမ်း",
      topic: "အကူအညီလိုသောအကြောင်းအရာ",
      topicOptions: ["Python", "AI tools", "Website / HTML / CSS", "Online business basic", "အခြား"],
      level: "လက်ရှိ level",
      message: "ဘာကိုကူညီပေးစေချင်ပါသလဲ",
      submit: "Message Copy လုပ်ရန်",
      note: "Request message ကို copy လုပ်ပါမည်။ မိမိနှစ်သက်သော email သို့မဟုတ် chat app မှတဆင့် ပေးပို့ပါ။",
      mailSubject: "Google Meet support booking request",
    },
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
          <div className={`copy-block page-hero-copy page-hero-copy--primary ${lang === "my" ? "page-hero-copy--my" : ""}`}>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="section-title">{t.title}</h1>
            <p>{t.body}</p>
          </div>
          <div className={`copy-block page-hero-copy page-hero-copy--secondary ${lang === "my" ? "page-hero-copy--my" : ""}`}>
            <span className="project-tag">{t.primary}</span>
            <h3>{t.best}</h3>
            <p className="contact-note">{t.note}</p>
            <div className="project-actions">
              <div className="flex items-center gap-3">
                <span>hello@mytechacademia.com</span>
                <CopyEmail email="hello@mytechacademia.com" label="hello@mytechacademia.com" />
              </div>
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

      <section className="section">
        <div className="container booking-layout">
          <div className="copy-block booking-copy">
            <div className="eyebrow">{t.bookingEyebrow}</div>
            <h2 className="section-title">{t.bookingTitle}</h2>
            <p>{t.bookingLead}</p>
            <div className="booking-package-grid">
              {t.packages.map(([name, price, body]) => (
                <article key={name} className="booking-package">
                  <strong>{name}</strong>
                  <span>{price}</span>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
          <BookingForm copy={t.form} />
        </div>
      </section>
    </main>
  );
}

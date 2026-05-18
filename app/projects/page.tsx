import { ProjectCard } from "../../components/project-card";
import { ScreenshotShowcase } from "../../components/screenshot-showcase";
import { projects } from "../../data/projects";
import { getProjectGallery } from "../../data/screenshots";
import { getLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "Projects",
    title: "A connected product ecosystem under one parent brand",
    body: "My Tech Academia is growing as an umbrella brand for practical apps that solve different real-world problems across language learning, guided commerce, and AI-first education.",
    system: "System Overview",
    systemTitle: "Three products, one consistent direction",
    bullets: [
      "Focused product identities with shared brand logic",
      "Mobile-first thinking with web-ready structure",
      "Scalable routing for future launches and subprojects",
    ],
    directory: "Project Directory",
    pillars: "Current live product pillars",
    visuals: "Project Visuals",
    visualsTitle: "Current product visuals across the ecosystem",
    visualsLead: "Real brand captures and current product visuals are now connected into the project directory, with future-ready space for richer screenshots as each app matures.",
    routing: "Routing Plan",
    routingTitle: "One domain, clear project separation",
    routingBody: "Keep the umbrella brand on the homepage while guiding product-specific users into dedicated sections such as WorkJapaneseGO, ZayCho, and Tech Academia.",
  },
  ja: {
    eyebrow: "プロジェクト",
    title: "ひとつの親ブランドの下につながるプロダクト群",
    body: "My Tech Academia は、語学学習、ガイド付きEC、AI活用の教育支援など、異なる課題に応える実用プロダクトを束ね、ひとつのブランドとして展開しています。",
    system: "システム全体像",
    systemTitle: "3つのプロダクトが、ひとつの方向性でつながる",
    bullets: [
      "共通のブランドロジックを土台にしながら、役割ごとに明確に設計されたプロダクト構成",
      "モバイル起点で考えつつ、Web 展開にも広げやすい情報設計",
      "今後の新規公開や派生プロジェクトにも対応しやすい拡張型ルーティング",
    ],
    directory: "プロジェクト一覧",
    pillars: "現在の主要プロダクト",
    visuals: "ビジュアル",
    visualsTitle: "エコシステム全体の現在のビジュアル",
    visualsLead: "実際のブランド画像と現在のプロダクトビジュアルを一覧で確認できるようにし、今後はより充実したスクリーンショットへ発展できる構成にしています。",
    routing: "ルーティング設計",
    routingTitle: "ひとつのドメインで、各プロジェクトを明確に分離",
    routingBody: "ホームでは傘ブランド全体の価値を伝えつつ、各プロダクトに関心を持つ利用者を WorkJapaneseGO、ZayCho、Tech Academia の専用ページへ自然に導く構成です。",
  },
  my: {
    eyebrow: "ထုတ်ကုန်ပစ္စည်းများ",
    title: "အမှတ်တံဆိပ်တစ်ခုအောက်တွင် ချိတ်ဆက်တည်ဆောက်ထားသော ထုတ်ကုန်စနစ်",
    body: "My Tech Academia သည် ဘာသာစကားသင်ယူမှု၊ လမ်းညွှန်ပါဝင်သော အီလက်ထရောနစ်ကုန်သွယ်မှုနှင့် AI အခြေပြု ပညာရေးအတွေ့အကြုံတို့ကဲ့သို့ မတူညီသော လက်တွေ့လိုအပ်ချက်များကို ဖြေရှင်းပေးနိုင်ရန် ထုတ်ကုန်များကို စုစည်းဖော်ဆောင်ထားသော အမှတ်တံဆိပ်တစ်ခုဖြစ်ပါသည်။",
    system: "စနစ်အမြင်",
    systemTitle: "ထုတ်ကုန်သုံးခု၊ ဦးတည်ချက်တစ်ခု",
    bullets: [
      "တူညီသော အမှတ်တံဆိပ်စနစ်ကို မျှဝေသော်လည်း ထုတ်ကုန်အလိုက် ရည်ရွယ်ချက်ရှင်းလင်းသော ဖွဲ့စည်းပုံ",
      "မိုဘိုင်းအတွေ့အကြုံကို အခြေခံထားပြီး ဝဘ်တိုးချဲ့မှုအတွက် အဆင်သင့်ဖြစ်သည့် ဖွဲ့စည်းတည်ဆောက်ပုံ",
      "နောင်တွင် ထပ်မံမိတ်ဆက်မည့် ထုတ်ကုန်များအတွက် ချဲ့ထွင်အသုံးပြုနိုင်သော လမ်းကြောင်းဖွဲ့စည်းမှု",
    ],
    directory: "ထုတ်ကုန်စာရင်း",
    pillars: "လက်ရှိ အဓိကထုတ်ကုန်များ",
    visuals: "မြင်ကွင်းများ",
    visualsTitle: "ချိတ်ဆက်ထုတ်ကုန်စနစ်တစ်ခုလုံး၏ လက်ရှိထုတ်ကုန်မြင်ကွင်းများ",
    visualsLead: "လက်ရှိအသုံးပြုနေသော အမှတ်တံဆိပ်မြင်ကွင်းများနှင့် ထုတ်ကုန်ဆိုင်ရာ ဖန်သားပြင်ပုံများကို ထုတ်ကုန်စာရင်းအတွင်း ချိတ်ဆက်ပြသထားပြီး နောင်တွင် ပိုမိုအသေးစိတ်သော မြင်ကွင်းများဖြင့် တိုးချဲ့နိုင်ရန် ဖွဲ့စည်းပုံကို အဆင်သင့်ထားရှိထားပါသည်။",
    routing: "လမ်းကြောင်းဖွဲ့စည်းမှု",
    routingTitle: "ဒိုမိန်းတစ်ခုအောက်တွင် ထုတ်ကုန်တစ်ခုချင်းစီကို ရှင်းလင်းစွာ ခွဲထားသော ဖွဲ့စည်းမှု",
    routingBody: "ပင်မစာမျက်နှာတွင် အမှတ်တံဆိပ်တစ်ခုလုံး၏ ဦးတည်ချက်ကို တင်ပြထားပြီး WorkJapaneseGO၊ ZayCho နှင့် Tech Academia တို့၏ သီးသန့်လိုအပ်ချက်ရှိသော အသုံးပြုသူများကို ထုတ်ကုန်ဆိုင်ရာ စာမျက်နှာများသို့ သဘာဝကျစွာ ပို့ဆောင်နိုင်ရန် စီစဉ်ထားပါသည်။",
  },
} as const;

export default async function ProjectsPage({
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
          <div className={`copy-block page-hero-copy page-hero-copy--primary ${lang === "my" ? "page-hero-copy--my" : ""}`}>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="section-title">{t.title}</h1>
            <p>{t.body}</p>
          </div>
          <div className={`copy-block page-hero-copy page-hero-copy--secondary ${lang === "my" ? "page-hero-copy--my" : ""}`}>
            <span className="project-tag">{t.system}</span>
            <h3>{t.systemTitle}</h3>
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
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.directory}</div>
              <h2 className="section-title">{t.pillars}</h2>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} lang={lang} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.visuals}</div>
              <h2 className="section-title">{t.visualsTitle}</h2>
            </div>
            <p className="section-lead">{t.visualsLead}</p>
          </div>
          <ScreenshotShowcase
            compact
            items={[
              ...gallery.workJapaneseGo,
              ...gallery.zaycho,
              ...gallery.techAcademia,
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="deploy-strip reveal-band reveal-band--primary">
            <div>
              <div className="eyebrow">{t.routing}</div>
              <h2>{t.routingTitle}</h2>
              <p>{t.routingBody}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

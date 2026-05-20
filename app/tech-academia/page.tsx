import Link from "next/link";
import type { CSSProperties } from "react";
import { ScreenshotShowcase } from "../../components/screenshot-showcase";
import { getProjectGallery } from "../../data/screenshots";
import { getLang, withLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "AI Learning Platform",
    body: "Tech Academia is the long-term AI learning platform vision inside the ecosystem. It is shaped around technical study, engineering learning, productivity support, and future voice-first tutoring experiences for serious learners.",
    bullets: [
      "Technical tutoring and AI assistance",
      "Future-ready voice learning direction",
      "Scalable platform vision for serious learners",
    ],
    roadmap: "See the Roadmap",
    explore: "Explore Ecosystem",
    bestFor: "Best For",
    bestTitle: "One future platform for deep learning support",
    bestBody: "Built for students, technical learners, engineers, and users who want a structured AI-powered study environment that can grow with them over time.",
    screens: "Screenshots",
    screensTitle: "Dashboard and session concept visuals",
    screensLead: "Tech Academia is still at the platform-vision stage, so these polished concept visuals map the dashboard and study-session direction until full product captures are available.",
    features: [
      ["Technical learning core", "Architecture, engineering, BIM, quantity survey, math, and physics can sit inside one AI support layer."],
      ["Mode-based experience", "Teacher mode, coach mode, quiz mode, and deep explanation mode fit naturally into the roadmap."],
      ["Voice-ready future", "The product direction already expects real-time voice, multilingual response, and session-based help."],
      ["Platform-level ambition", "Built as a future umbrella product that can support mobile, web, and bot channels together."],
    ],
    teamEyebrow: "AI Assistant Team",
    teamTitle: "A practical AI assistant team for My Tech Academia",
    teamLead:
      "This AI team is structured as a supervised workflow: a coordinator routes each request, specialist agents draft and review the work, and a human approval step protects anything that changes the live product.",
    coordinator: {
      label: "Coordinator Agent",
      body: "Reads the request, assigns the right specialist, checks for missing context, and prepares the final handoff.",
    },
    roles: [
      ["Content Agent", "Drafts Burmese, Japanese, and English copy for pages, product notes, support text, and launch messages."],
      ["SEO Agent", "Prepares titles, descriptions, sitemap updates, keywords, and practical search visibility checks."],
      ["QA Agent", "Checks links, mobile layout, UX clarity, accessibility basics, and release readiness."],
      ["Marketing Agent", "Creates social posts, campaign angles, email snippets, and product messaging."],
      ["Ops Agent", "Tracks deployment checklists, Vercel status, Git activity, and post-launch monitoring work."],
    ],
    flow: ["Idea / task", "Coordinator routes work", "Specialists draft + check", "Human review", "Approve", "Publish / deploy", "Monitor results"],
    checklistTitle: "Human approval checklist",
    checklist: [
      "Brand voice and language quality are correct",
      "Links, mobile layout, and images are checked",
      "SEO metadata and social preview are ready",
      "Deploy notes and rollback path are clear",
    ],
    ctaTitle: "Want to shape the future of Tech Academia?",
    ctaBody: "Reach out if you want to discuss platform scope, MVP strategy, product narrative, or the long-term AI learning direction under the My Tech Academia brand.",
    cta: "Discuss the Platform",
  },
  ja: {
    eyebrow: "AI学習プラットフォーム",
    body: "Tech Academia は、このエコシステムの中で長期的に育てていく AI 学習プラットフォーム構想です。技術学習、エンジニアリング支援、生産性向上、将来の音声中心チュータリング体験をひとつの流れで支えられるよう設計されています。",
    bullets: [
      "技術チュータリングと AI 支援",
      "音声学習へ広がる将来設計",
      "本格的な学習者に向けた拡張性の高い基盤",
    ],
    roadmap: "ロードマップを見る",
    explore: "エコシステムを見る",
    bestFor: "おすすめ対象",
    bestTitle: "深い学びを支える、将来の統合型プラットフォーム",
    bestBody: "学生、技術学習者、エンジニア、そして長く使える AI 学習環境を求める人のために設計されています。",
    screens: "スクリーンショット",
    screensTitle: "ダッシュボードと学習セッションの構想ビジュアル",
    screensLead: "Tech Academia はまだ構想段階のため、ここでは将来のダッシュボードや学習セッションの方向性を伝えるコンセプトビジュアルを掲載しています。",
    features: [
      ["技術学習の核", "建築、工学、BIM、積算、数学、物理を、ひとつの AI 支援レイヤーで支える構想です。"],
      ["モード別の学習体験", "講師モード、伴走モード、クイズモード、詳解モードなどを自然に組み込める設計です。"],
      ["音声対応の未来", "リアルタイム音声、多言語応答、セッション型支援へ広げていける方向性を見据えています。"],
      ["プラットフォームとしての拡張性", "モバイル、Web、ボットを横断しながら成長できる将来の中核プロダクトを目指しています。"],
    ],
    teamEyebrow: "AIアシスタントチーム",
    teamTitle: "My Tech Academia を支える実務型 AI アシスタントチーム",
    teamLead:
      "AI チームは、人の確認を前提とした運用フローとして設計しています。コーディネーターが依頼を振り分け、専門エージェントが作成と確認を担当し、公開前には必ず人が最終承認を行います。",
    coordinator: {
      label: "Coordinator Agent",
      body: "依頼内容を読み取り、適切な担当エージェントを選び、不足している前提情報を確認したうえで、最終ハンドオフを整えます。",
    },
    roles: [
      ["Content Agent", "ビルマ語・日本語・英語で、ページ本文、プロダクト説明、サポート文、公開メッセージを作成します。"],
      ["SEO Agent", "タイトル、説明文、サイトマップ関連の更新、キーワード、検索表示の確認を担当します。"],
      ["QA Agent", "リンク、モバイル表示、使いやすさ、基本的なアクセシビリティ、公開前の確認を行います。"],
      ["Marketing Agent", "SNS投稿、キャンペーンの切り口、メール文面、プロダクトメッセージを作成します。"],
      ["Ops Agent", "デプロイの確認項目、Vercel の状態、Git の更新履歴、公開後の確認作業を整理します。"],
    ],
    flow: ["アイデア / 依頼", "Coordinator が振り分け", "専門担当が作成・確認", "人による確認", "承認", "公開 / デプロイ", "結果を確認"],
    checklistTitle: "人が承認するチェック項目",
    checklist: [
      "ブランドの言葉づかいと言語品質が合っている",
      "リンク、モバイル表示、画像を確認済み",
      "SEOメタデータとSNSプレビューが準備済み",
      "デプロイメモと戻し方が明確",
    ],
    ctaTitle: "Tech Academia の将来像を一緒に形にしませんか？",
    ctaBody: "プラットフォームの範囲、MVP戦略、プロダクトストーリー、長期的な AI 学習の方向性について話したい方はぜひご連絡ください。",
    cta: "プラットフォームについて相談する",
  },
  my: {
    eyebrow: "AI သင်ယူမှုပလက်ဖောင်း",
    body: "Tech Academia သည် ထုတ်ကုန်စနစ်အတွင်း ရေရှည်တည်ဆောက်ဖော်ဆောင်သွားမည့် AI သင်ယူမှုပလက်ဖောင်း အမြင်ဖြစ်ပါသည်။ နည်းပညာဆိုင်ရာသင်ယူမှု၊ အင်ဂျင်နီယာဆိုင်ရာလေ့လာမှု၊ productivity အထောက်အပံ့နှင့် နောင်တွင် voice-first tutoring experience အထိ ချဲ့ထွင်နိုင်သော ပလက်ဖောင်းဦးတည်ချက်ကို အခြေခံထားပါသည်။",
    bullets: [
      "Technical tutoring နှင့် AI-assisted learning support",
      "Voice-based learning experience သို့ ချဲ့ထွင်နိုင်သော ရေရှည်ဦးတည်ချက်",
      "အလေးထားသင်ယူသူများအတွက် ချဲ့ထွင်နိုင်သော ပလက်ဖောင်းအမြင်",
    ],
    roadmap: "လမ်းပြမြေပုံအကြောင်း ဆွေးနွေးရန်",
    explore: "ထုတ်ကုန်စနစ်ကြည့်ရန်",
    bestFor: "အသုံးပြုရန် သင့်တော်သူများ",
    bestTitle: "အနက်ရှိုင်းသင်ယူမှုကို ရေရှည်ပံ့ပိုးပေးနိုင်မည့် ပလက်ဖောင်း",
    bestBody: "ကျောင်းသားများ၊ နည်းပညာလေ့လာသူများ၊ အင်ဂျင်နီယာများနှင့် စနစ်တကျတည်ဆောက်ထားသော AI-assisted study environment ကို ရေရှည်အသုံးပြုလိုသူများအတွက် ရည်ရွယ်ထားပါသည်။",
    screens: "မြင်ကွင်းများ",
    screensTitle: "Dashboard နှင့် learning session concept visuals",
    screensLead: "Tech Academia သည် လက်ရှိတွင် platform vision stage တွင် ရှိနေသေးသောကြောင့်၊ full product captures မရှိသေးချိန်အတွက် dashboard direction နှင့် study-session structure ကို ပြသသော concept visuals များကို အသုံးပြုထားပါသည်။",
    features: [
      ["Technical learning core", "Architecture၊ engineering၊ BIM၊ quantity survey၊ math နှင့် physics တို့ကို AI support layer တစ်ခုအောက်တွင် ပံ့ပိုးပေးနိုင်ရန် ရည်ရွယ်ထားပါသည်။"],
      ["Mode-based experience", "Teacher mode၊ coach mode၊ quiz mode နှင့် deep explanation mode တို့ကို coherent learning flow အတွင်း ထည့်သွင်းအသုံးပြုနိုင်ရန် စီစဉ်ထားပါသည်။"],
      ["Voice-ready future", "Real-time voice၊ multilingual response နှင့် session-based help experience များကို ရေရှည်ဦးတည်ချက်အဖြစ် စဉ်းစားထားပါသည်။"],
      ["Platform-scale ambition", "mobile၊ web နှင့် bot channels များကို umbrella product structure တစ်ခုအောက်တွင် ချိတ်ဆက်နိုင်ရန် တည်ဆောက်ထားပါသည်။"],
    ],
    teamEyebrow: "AI Assistant Team",
    teamTitle: "My Tech Academia အတွက် လက်တွေ့အသုံးဝင်သော AI assistant team",
    teamLead:
      "AI Team ကို လူကနောက်ဆုံးအတည်ပြုသည့် workflow အဖြစ် တည်ဆောက်ထားပါသည်။ Coordinator က task ကိုခွဲဝေပေးပြီး specialist agents များက draft ပြုလုပ်ကာ စစ်ဆေးပါမည်။ Live product ကိုပြောင်းလဲမည့် အလုပ်တိုင်းတွင် human review gate ပါဝင်ပါသည်။",
    coordinator: {
      label: "Coordinator Agent",
      body: "Request ကိုဖတ်ရှုပြီး သင့်တော်သော specialist ကိုရွေးချယ်ခြင်း၊ မပြည့်စုံသေးသော context ကိုစစ်ဆေးခြင်းနှင့် final handoff ကိုပြင်ဆင်ခြင်းကို တာဝန်ယူပါသည်။",
    },
    roles: [
      ["Content Agent", "Burmese၊ Japanese နှင့် English copy များ၊ page content၊ product note၊ support text နှင့် launch message များကို draft လုပ်ပါသည်။"],
      ["SEO Agent", "title၊ description၊ sitemap update၊ keyword နှင့် search visibility check များကို ပြင်ဆင်ပါသည်။"],
      ["QA Agent", "link၊ mobile layout၊ UX clarity၊ accessibility basics နှင့် release readiness ကို စစ်ဆေးပါသည်။"],
      ["Marketing Agent", "social post၊ campaign angle၊ email snippet နှင့် product messaging များကို ပြင်ဆင်ပါသည်။"],
      ["Ops Agent", "deploy checklist၊ Vercel status၊ Git update note နှင့် post-launch monitoring task များကို စီမံပါသည်။"],
    ],
    flow: ["Idea / Task", "Coordinator က route လုပ်", "Specialists draft + check", "Human review", "Approve", "Publish / Deploy", "Monitor results"],
    checklistTitle: "Human approval checklist",
    checklist: [
      "Brand voice နှင့် language quality မှန်ကန်ရမည်",
      "Links၊ mobile layout နှင့် images များစစ်ပြီးရမည်",
      "SEO metadata နှင့် social preview အဆင်သင့်ဖြစ်ရမည်",
      "Deploy notes နှင့် rollback path ရှင်းလင်းရမည်",
    ],
    ctaTitle: "Tech Academia ၏ အနာဂတ် platform direction ကို အတူတကွ ပုံဖော်လိုပါသလား",
    ctaBody: "platform scope၊ MVP strategy၊ product narrative နှင့် ရေရှည် AI learning direction များအကြောင်း My Tech Academia brand အောက်တွင် ဆွေးနွေးနိုင်ပါသည်။",
    cta: "ပလက်ဖောင်းအကြောင်း ဆွေးနွေးရန်",
  },
} as const;

export default async function TechAcademiaPage({
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
            <h1>Tech Academia</h1>
            <p>{t.body}</p>
            <ul className="clean-list">
              {t.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--solid">
                {t.roadmap}
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
          <ScreenshotShowcase items={gallery.techAcademia} compact />
        </div>
      </section>

      <section className="section">
        <div className="container ai-team">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.teamEyebrow}</div>
              <h2 className="section-title">{t.teamTitle}</h2>
            </div>
            <p className="section-lead">{t.teamLead}</p>
          </div>

          <div className="ai-team-board">
            <div className="ai-team-coordinator">
              <span className="ai-team-node-label">01</span>
              <h3>{t.coordinator.label}</h3>
              <p>{t.coordinator.body}</p>
            </div>

            <div className="ai-agent-grid">
              {t.roles.map(([title, body], index) => (
                <article key={title} className="ai-agent-card" style={{ "--agent-index": index } as CSSProperties}>
                  <span className="ai-agent-card__index">{String(index + 2).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="ai-team-flow" aria-label={t.teamTitle}>
            {t.flow.map((step, index) => (
              <div key={step} className="ai-flow-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <div className="ai-team-checklist">
            <h3>{t.checklistTitle}</h3>
            <div className="ai-team-checklist__items">
              {t.checklist.map((item) => (
                <div key={item} className="ai-check-item">
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
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

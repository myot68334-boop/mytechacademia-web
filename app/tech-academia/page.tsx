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
    teamTitle: "A practical agent team for My Tech Academia",
    teamLead:
      "The AI team is designed as a supervised workflow: one coordinator routes the task, specialist agents draft and check the work, and a human review gate approves anything that changes the live product.",
    coordinator: {
      label: "Coordinator Agent",
      body: "Reads the request, chooses the right specialist, checks missing context, and prepares the final handoff.",
    },
    roles: [
      ["Content Agent", "Drafts Burmese, Japanese, and English copy for pages, product notes, support text, and launch messages."],
      ["SEO Agent", "Prepares titles, descriptions, sitemap notes, keywords, and search visibility checks."],
      ["QA Agent", "Checks links, mobile layout, UX clarity, accessibility basics, and release readiness."],
      ["Marketing Agent", "Creates social posts, campaign angles, email snippets, and product messaging."],
      ["Ops Agent", "Tracks deploy checklists, Vercel status, Git notes, and post-launch monitoring tasks."],
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
      ["技術学習の核", "建築、工学、BIM、積算、数学、物理をひとつの AI レイヤーで支える構想です。"],
      ["モード別の学習体験", "Teacher mode、Coach mode、Quiz mode、Deep explanation mode などを自然に組み込める設計です。"],
      ["音声対応の未来", "リアルタイム音声、多言語応答、セッション型支援へ広げていける方向性を見据えています。"],
      ["プラットフォームとしての拡張性", "モバイル、Web、ボットをまたいで成長できる将来の中核プロダクトを目指しています。"],
    ],
    teamEyebrow: "AIアシスタントチーム",
    teamTitle: "My Tech Academia のための実務型エージェントチーム",
    teamLead:
      "AIチームは、監督付きのワークフローとして設計しています。コーディネーターが依頼を振り分け、専門エージェントが作成と確認を行い、公開前には必ず人が承認します。",
    coordinator: {
      label: "Coordinator Agent",
      body: "依頼内容を読み取り、適切な専門エージェントを選び、不足情報を確認し、最終ハンドオフを整えます。",
    },
    roles: [
      ["Content Agent", "ビルマ語・日本語・英語のページ本文、商品説明、サポート文、公開メッセージを作成します。"],
      ["SEO Agent", "タイトル、説明文、sitemap メモ、キーワード、検索表示の確認を担当します。"],
      ["QA Agent", "リンク、モバイル表示、UX の分かりやすさ、アクセシビリティ基礎、公開準備を確認します。"],
      ["Marketing Agent", "SNS投稿、キャンペーン切り口、メール文、プロダクトメッセージを作成します。"],
      ["Ops Agent", "デプロイチェックリスト、Vercel 状態、Git メモ、公開後の監視タスクを整理します。"],
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
    body: "Tech Academia သည် ecosystem အတွင်း ရေရှည်တည်ဆောက်ဖော်ဆောင်မည့် AI learning platform vision ဖြစ်ပါသည်။ Technical study၊ engineering learning၊ productivity support နှင့် နောင်တွင် voice-first tutoring experience အထိ ချဲ့ထွင်နိုင်သော platform direction ကို အခြေခံထားပါသည်။",
    bullets: [
      "Technical tutoring နှင့် AI-assisted learning support",
      "Voice-based learning experience သို့ ချဲ့ထွင်နိုင်သော future-ready direction",
      "Serious learners များအတွက် scale လုပ်နိုင်သော platform vision",
    ],
    roadmap: "လမ်းပြမြေပုံအကြောင်း ဆွေးနွေးရန်",
    explore: "ထုတ်ကုန်စနစ်ကြည့်ရန်",
    bestFor: "အသုံးပြုရန် သင့်တော်သူများ",
    bestTitle: "အနာဂတ်တွင် in-depth learning support ပေးနိုင်မည့် integrated platform",
    bestBody: "ကျောင်းသားများ၊ technical learner များ၊ engineer များနှင့် ရေရှည်အသုံးပြုနိုင်သော structured AI-powered study environment ကို လိုအပ်သူများအတွက် ရည်ရွယ်ထားပါသည်။",
    screens: "မြင်ကွင်းများ",
    screensTitle: "dashboard နှင့် learning session concept visuals",
    screensLead: "Tech Academia သည် လက်ရှိတွင် platform-vision stage တွင် ရှိနေသေးသောကြောင့် full product captures မရှိသေးချိန်အတွက် dashboard direction နှင့် study-session structure ကို ပြသသော polished concept visuals များကို အသုံးပြုထားပါသည်။",
    features: [
      ["Technical learning core", "Architecture၊ engineering၊ BIM၊ quantity survey၊ math နှင့် physics ကို AI layer တစ်ခုအောက်တွင် support ပေးနိုင်ရန် ရည်ရွယ်ထားပါသည်။"],
      ["Mode-based experience", "Teacher mode၊ coach mode၊ quiz mode နှင့် deep explanation mode တို့ကို coherent learning flow အတွင်း ထည့်သွင်းအသုံးပြုနိုင်ရန် စီစဉ်ထားပါသည်။"],
      ["Voice-ready future", "Real-time voice၊ multilingual response နှင့် session-based help experience များကို future direction အဖြစ် စဉ်းစားထားပါသည်။"],
      ["Platform-scale ambition", "mobile၊ web နှင့် bot channels များကို တစ်ခုတည်းသော umbrella product structure အောက်တွင် ချိတ်ဆက်နိုင်ရန် တည်ဆောက်ထားပါသည်။"],
    ],
    teamEyebrow: "AI Assistant Team",
    teamTitle: "My Tech Academia အတွက် practical AI agent team",
    teamLead:
      "AI Team ကို human-supervised workflow အဖြစ် တည်ဆောက်ထားပါသည်။ Coordinator က task ကိုခွဲဝေပြီး specialist agents များက draft နှင့် check လုပ်ပါမည်။ Live product ကိုပြောင်းလဲမည့် အလုပ်တိုင်းတွင် human review gate ပါဝင်ပါသည်။",
    coordinator: {
      label: "Coordinator Agent",
      body: "request ကိုဖတ်ပြီး သင့်တော်သော specialist ကိုရွေးချယ်ခြင်း၊ မပြည့်စုံသော context ကိုစစ်ခြင်းနှင့် final handoff ကိုပြင်ဆင်ခြင်းကို တာဝန်ယူပါသည်။",
    },
    roles: [
      ["Content Agent", "Burmese၊ Japanese၊ English copy များ၊ page content၊ product note၊ support text နှင့် launch message များကို draft လုပ်ပါသည်။"],
      ["SEO Agent", "title၊ description၊ sitemap note၊ keyword နှင့် search visibility check များကို ပြင်ဆင်ပါသည်။"],
      ["QA Agent", "link၊ mobile layout၊ UX clarity၊ accessibility basics နှင့် release readiness ကိုစစ်ဆေးပါသည်။"],
      ["Marketing Agent", "social post၊ campaign angle၊ email snippet နှင့် product messaging များကို ပြင်ဆင်ပါသည်။"],
      ["Ops Agent", "deploy checklist၊ Vercel status၊ Git note နှင့် post-launch monitoring task များကို စီမံပါသည်။"],
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

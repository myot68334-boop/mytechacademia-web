import Link from "next/link";
import { getProjectGallery } from "../../data/screenshots";
import { getLang, withLang } from "../../lib/i18n";

const copy = {
  en: {
    eyebrow: "AI Learning Platform",
    heroBadge: "Version 2 Preview",
    heroSubtitle: "Precision AI guidance for technical learners and studios.",
    body: "Tech Academia Version 2 elevates the long-term AI learning platform vision. It brings architecture, engineering, productivity support, and voice-first tutoring into one responsible workflow for serious learners.",
    bullets: [
      "Human-approved AI companion for architecture and engineering study.",
      "Structured workflows that connect drafting, QA, and deployment.",
      "Designed for bilingual coaching and focused small teams.",
    ],
    heroMetrics: [
      ["6 AI roles", "Specialists covering drafting, QA, and release"],
      ["3 languages", "English, Japanese, and Burmese support"],
      ["24h review", "Human approval within a single day"],
    ],
    roadmap: "Plan a roadmap session",
    explore: "Explore Ecosystem",
    bestFor: "Best For",
    bestTitle: "One future platform for deep learning support",
    bestBody: "Built for students, technical learners, engineers, and users who want a structured AI-powered study environment that can grow with them over time.",
    aiShowcase: {
      eyebrow: "AI Assistant Showcase",
      title: "AI assistants designed for responsible delivery",
      lead: "Version 2 introduces a collaborative AI layer that keeps every request accountable while speeding up high-value work.",
      cards: [
        {
          title: "Guided multi-agent drafting",
          body: "Every request passes through coordinator, content, and QA agents so outputs stay aligned with project context.",
          highlights: [
            "Coordinator routes context instantly",
            "Language-ready drafts in EN / JA / MY",
            "Human checkpoints recorded in the log",
          ],
        },
        {
          title: "Contextual knowledge vault",
          body: "Reusable knowledge objects hold standards, templates, and past learnings so teams never restart from zero.",
          highlights: [
            "Discipline-specific standards saved",
            "Quick recall during study sessions",
            "Version control for every brief",
          ],
        },
        {
          title: "Ship-ready operations",
          body: "Ops automation keeps releases consistent with deployment checklists, rollback notes, and notification prep.",
          highlights: [
            "Deployment checklist synced",
            "Rollback notes captured fast",
            "Release notifications ready to send",
          ],
        },
      ],
    },
    voiceSection: {
      eyebrow: "Voice AI",
      badge: "Realtime concept",
      title: "Voice-first tutoring is ready to activate",
      lead: "Learners can move from structured prompts to natural conversations without leaving the workspace.",
      points: [
        "Realtime bilingual whisper + response for English, Japanese, and Burmese.",
        "Session summaries captured and translated for review.",
        "Hands-free controls for drawing, markups, and calculator prompts.",
        "Safeguarded escalation to human mentors before publishing.",
      ],
      caption: "Voice experiences roll out alongside the guided study timeline.",
    },
    featuresSection: {
      eyebrow: "Platform highlights",
      title: "Build momentum with guided technical learning",
      lead: "Each capability blends AI workflow assistance with structure so serious learners can progress faster without losing depth.",
    },
    features: [
      ["Technical command center", "A single AI hub for architecture, engineering, BIM, and operations teams."],
      ["Mode-based learning", "Switch between tutor, coach, quiz, and deep explanation modes during every session."],
      ["Voice-ready future", "Realtime bilingual voice support and transcripts are built into the roadmap."],
      ["Platform-level ambition", "Designed to scale across mobile, web, and conversational channels without losing oversight."],
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
    flowTitle: "AI team workflow",
    checklistTitle: "Human approval checklist",
    checklist: [
      "Brand voice and language quality are correct",
      "Links, mobile layout, and images are checked",
      "SEO metadata and social preview are ready",
      "Deploy notes and rollback path are clear",
    ],
    screens: "Workspace glimpses",
    screensTitle: "Workspace and session concept snapshots",
    screensLead: "Version 2 visuals highlight upcoming dashboard, session flow, and knowledge vault experiences until live captures arrive.",
    categoriesSection: {
      eyebrow: "Technical Learning",
      title: "Built for real project disciplines",
      lead: "Each category mixes foundational theory with AI-assisted practice tasks.",
      categories: [
        ["Architecture", "Studio-ready coordination with building physics, codes, and narrative briefs."],
        ["Structural Engineering", "Applied calculations, load paths, and review-ready reporting templates."],
        ["AutoCAD", "Clean drafting standards, layer management, and annotation walkthroughs."],
        ["Revit", "Family management, parametric workflows, and BIM coordination tips."],
        ["BIM", "Model checking, shared parameters, and data handoff routines."],
        ["Quantity Survey", "Take-off logic, cost tracking sheets, and revision control."],
        ["Math", "Core mathematics refreshers for technical entrance requirements."],
        ["Physics", "Mechanics, materials, and real-world problem framing for study groups."],
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Learners see momentum within the first month",
      lead: "Early access groups across Japan are already applying Tech Academia workflows to real assignments.",
      items: [
        {
          quote: "The coordinator and content agents helped my architecture studio brief read like a real proposal in two languages.",
          name: "Aiko K.",
          role: "Architecture student, Tokyo",
        },
        {
          quote: "Having the QA agent outline structural checks meant our study group finally understood why the answers mattered.",
          name: "Tanaka R.",
          role: "Structural engineering mentor, Osaka",
        },
        {
          quote: "Voice rehearsal plus follow-up notes gave our Burmese learners confidence to explain Revit decisions in interviews.",
          name: "Myo Thandar",
          role: "BIM coordinator, Nagoya",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      lead: "Quick answers before you book a session.",
      items: [
        {
          question: "How does human approval work?",
          answer: "Every AI draft is checked by a human reviewer inside 24 hours. Nothing ships to production or students without that sign-off.",
        },
        {
          question: "Can we join with mixed language groups?",
          answer: "Yes. Sessions routinely blend English, Japanese, and Burmese learners. The AI agents draft in all three languages and tutors keep context aligned.",
        },
        {
          question: "Do we need existing project files?",
          answer: "Bring whatever you have—drawings, spreadsheets, or notes. The coordinator agent helps organise everything into the shared workspace.",
        },
        {
          question: "When will voice tutoring be available?",
          answer: "Voice AI is in controlled rollout. Small groups joining now get early rehearsal support with transcripts and human oversight.",
        },
      ],
    },
    ctaTitle: "Partner with us on Tech Academia Version 2",
    ctaBody: "Book a conversation to plan disciplined AI workflows, early voice tutoring pilots, or technical curriculum build-outs.",
    cta: "Book a roadmap call",
    footer: {
      tagline: "Tech Academia is part of the My Tech Academia ecosystem.",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "ZayCho", href: "/zaycho" },
        { label: "WorkJapaneseGO", href: "/work-japanese-go" },
        { label: "Contact", href: "/contact" },
      ],
      contactLabel: "Book a session",
      rights: "© {year} My Tech Academia. All rights reserved.",
    },
  },
  ja: {
    eyebrow: "AI学習プラットフォーム",
    heroBadge: "バージョン2プレビュー",
    heroSubtitle: "技術系学習者とスタジオのための精密な AI ナビゲーション。",
    body: "Tech Academia バージョン2は、建築・エンジニアリング・生産性支援・音声チュータリングをひとつの責任あるワークフローにまとめた長期構想です。",
    bullets: [
      "建築・エンジニアリング学習を支える、人による承認付き AI コンパニオン。",
      "ドラフティング、QA、デプロイを結びつける構造化ワークフロー。",
      "バイリンガル指導と少人数チームに最適な設計。",
    ],
    heroMetrics: [
      ["6つのAIロール", "ドラフティング・QA・リリースを担当する専門体制"],
      ["3言語対応", "英語・日本語・ビルマ語のサポート"],
      ["24時間レビュー", "人による承認が1日以内に完了"],
    ],
    roadmap: "ロードマップを予約",
    explore: "エコシステムを見る",
    bestFor: "おすすめ対象",
    bestTitle: "深い学びを支える、将来の統合型プラットフォーム",
    bestBody: "学生、技術学習者、エンジニア、そして長く使える AI 学習環境を求める人のために設計されています。",
    aiShowcase: {
      eyebrow: "AIアシスタントショーケース",
      title: "責任ある成果のために設計された AI アシスタント",
      lead: "バージョン2では、すべての依頼を追跡しながら価値ある作業を加速させる協調型 AI レイヤーが導入されます。",
      cards: [
        {
          title: "ガイド付きマルチエージェントドラフト",
          body: "すべての依頼がコーディネーター、コンテンツ、QA エージェントを通過し、プロジェクトの前提に沿った成果を守ります。",
          highlights: [
            "コーディネーターが即座にコンテキストを振り分け",
            "英語・日本語・ビルマ語で草案を作成",
            "人のチェックポイントをログに記録",
          ],
        },
        {
          title: "コンテキスト知識ボルト",
          body: "再利用可能な知識オブジェクトが基準書やテンプレート、過去の学びを保持し、チームがゼロからやり直さないようにします。",
          highlights: [
            "専門分野ごとの基準を保存",
            "セッション中に素早く呼び出し",
            "すべてのブリーフにバージョン管理",
          ],
        },
        {
          title: "出荷準備済みオペレーション",
          body: "Ops オートメーションがデプロイチェックリスト、ロールバックメモ、通知準備を整え、リリースを一貫させます。",
          highlights: [
            "デプロイチェックリストを同期",
            "ロールバックメモを素早く記録",
            "リリース通知をすぐ送信可能",
          ],
        },
      ],
    },
    voiceSection: {
      eyebrow: "Voice AI",
      badge: "リアルタイム構想",
      title: "音声ファーストのチュータリングはすぐに開始可能",
      lead: "構造化プロンプトから自然な会話まで、学習者はワークスペース内ですべて完結できます。",
      points: [
        "英語・日本語・ビルマ語に対応したリアルタイムの音声入力と応答。",
        "セッション要約を自動保存し、翻訳して復習に使えます。",
        "図面、マークアップ、計算機プロンプトをハンズフリーで操作。",
        "公開前に必ず人間メンターへエスカレーションして安全を確保。",
      ],
      caption: "音声体験はガイド付き学習タイムラインと並行して展開されます。",
    },
    featuresSection: {
      eyebrow: "プラットフォームのハイライト",
      title: "AIガイド付きの技術学習で前進を加速",
      lead: "各機能が AI ワークフロー支援と構造化された学びを組み合わせ、本気で学ぶ人が深さを失わずに前進できるようにします。",
    },
    features: [
      ["技術コマンドセンター", "建築・エンジニアリング・BIM・オペレーションチームをひとつのAIハブに集約します。"],
      ["モード切り替え学習", "チューター／コーチ／クイズ／詳解モードをセッションごとに切り替えられます。"],
      ["音声対応の未来", "リアルタイムのバイリンガル音声サポートとトランスクリプトをロードマップに組み込んでいます。"],
      ["プラットフォームとしての拡張性", "モバイル・Web・会話チャネルに広がっても管理体制を失いません。"],
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
    flowTitle: "AIチームのワークフロー",
    checklistTitle: "人が承認するチェック項目",
    checklist: [
      "ブランドの言葉づかいと言語品質が合っている",
      "リンク、モバイル表示、画像を確認済み",
      "SEOメタデータとSNSプレビューが準備済み",
      "デプロイメモと戻し方が明確",
    ],
    screens: "コンセプトビジュアル",
    screensTitle: "ワークスペースとセッションのコンセプトビジュアル",
    screensLead: "バージョン2のビジュアルでは、ダッシュボード、セッションフロー、ナレッジボルトの方向性を先行して確認できます。",
    categoriesSection: {
      eyebrow: "技術学習",
      title: "実務ディシプリンに合わせて設計",
      lead: "基礎理論と AI 支援の演習タスクを組み合わせています。",
      categories: [
        ["建築", "建築物理・法規・コンセプトブリーフまでスタジオで使える調整力を養います。"],
        ["構造エンジニアリング", "応用計算、荷重経路、レビュー向けレポートテンプレートを整理します。"],
        ["AutoCAD", "整ったドラフティング基準、レイヤー管理、注釈ワークフローを理解します。"],
        ["Revit", "ファミリ管理、パラメトリックワークフロー、BIM連携のコツを学びます。"],
        ["BIM", "モデルチェック、共有パラメータ、データ引き継ぎの手順を確立します。"],
        ["数量積算", "拾い出しロジック、コスト管理シート、改訂コントロールを整備します。"],
        ["数学", "技術系入試に必要な基礎数学をリフレッシュします。"],
        ["物理", "力学・材料・実務課題の捉え方を学習グループで共有します。"],
      ],
    },
    testimonials: {
      eyebrow: "受講者の声",
      title: "1か月で手応えを感じる学習者が増えています",
      lead: "日本各地の少人数チームが Tech Academia のワークフローを実課題に活用しています。",
      items: [
        {
          quote: "コーディネーターとコンテンツエージェントのおかげで、建築スタジオのブリーフが二言語でも提案書らしく整いました。",
          name: "Aiko K.",
          role: "建築系学生（東京）",
        },
        {
          quote: "QA エージェントが構造チェックを整理してくれたので、学習グループ全員が解答の意味を理解できました。",
          name: "Tanaka R.",
          role: "構造エンジニアリング指導者（大阪）",
        },
        {
          quote: "音声リハーサルとフォローアップノートで、ビルマ人学習者も面接で Revit の判断を自信を持って説明できました。",
          name: "ミョー・タンダー",
          role: "BIM コーディネーター（名古屋）",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "よくある質問",
      lead: "セッションを予約する前にご確認ください。",
      items: [
        {
          question: "人による承認はどのように行われますか？",
          answer: "すべての AI 草案は24時間以内に人がレビューします。承認なしで本番や学習者に届くことはありません。",
        },
        {
          question: "複数言語のグループでも参加できますか？",
          answer: "はい。英語・日本語・ビルマ語が混在するセッションが日常的に行われています。AI エージェントは3言語で草案を作成し、指導者がコンテキストを整えます。",
        },
        {
          question: "既存のプロジェクトファイルが必要ですか？",
          answer: "図面・スプレッドシート・メモなど、手元にあるものを持参してください。コーディネーターエージェントが共有ワークスペースに整理します。",
        },
        {
          question: "音声チュータリングはいつ利用できますか？",
          answer: "Voice AI は段階的に公開中です。現在参加する少人数グループは、トランスクリプト付きのリハーサル支援を先行利用できます。",
        },
      ],
    },
    ctaTitle: "Tech Academia バージョン2について一緒に計画しませんか？",
    ctaBody: "AIワークフロー、音声チュータリングのパイロット、技術カリキュラムづくりについて気軽にご相談ください。",
    cta: "ロードマップ相談を予約する",
    footer: {
      tagline: "Tech Academia は My Tech Academia エコシステムの一部です。",
      links: [
        { label: "プロジェクト一覧", href: "/projects" },
        { label: "ZayCho", href: "/zaycho" },
        { label: "WorkJapaneseGO", href: "/work-japanese-go" },
        { label: "お問い合わせ", href: "/contact" },
      ],
      contactLabel: "セッションを予約する",
      rights: "© {year} My Tech Academia. All rights reserved.",
    },
  },
  my: {
    eyebrow: "AI သင်ယူမှုပလက်ဖောင်း",
    heroBadge: "ဗားရှင်း 2 Preview",
    heroSubtitle: "နည်းပညာသင်ယူသူများနှင့် စတူဒီယိုများအတွက် တိကျသည့် AI လမ်းညွှန်မှု။",
    body: "Tech Academia Version 2 သည် architecture၊ engineering၊ productivity အထောက်အပံ့ နှင့် voice-first tutoring ကို တစ်ခုတည်းသော တာဝန်ရှိသည့် workflow အဖြစ် ပေါင်းစည်းထားပြီး ရေရှည်အမြင်ကို မြှင့်တင်ပေးပါသည်။",
    bullets: [
      "Architecture နှင့် engineering သင်ယူမှုအတွက် လူအတည်ပြုထားသော AI အကူအညီ။",
      "Drafting၊ QA နှင့် deployment ကို ချိတ်ဆက်ပေးသော ဖွဲ့စည်းတကျ workflow။",
      "ဘာသာစုံနှင့် အဖွဲ့ငယ်များအတွက် အထူးဒီဇိုင်းပြုလုပ်ထားခြင်း။",
    ],
    heroMetrics: [
      ["AI အခန်းကဏ္ဍ ၆ ခု", "Drafting၊ QA နှင့် release ကိုထောက်ပံ့သည့် specialist များ"],
      ["ဘာသာ ၃ မျိုး", "English၊ Japanese၊ Burmese ပံ့ပိုးမှု"],
      ["၂၄ နာရီ အတွင်း အတည်ပြုချက်", "၁ ရက်အတွင်း လူမှ စစ်ဆေးပြီး အတည်ပြုသည်"],
    ],
    roadmap: "Roadmap ဆွေးနွေးရန်",
    explore: "ထုတ်ကုန်စနစ်ကြည့်ရန်",
    bestFor: "အသုံးပြုရန် သင့်တော်သူများ",
    bestTitle: "အနက်ရှိုင်းသင်ယူမှုကို ရေရှည်ပံ့ပိုးပေးနိုင်မည့် ပလက်ဖောင်း",
    bestBody: "ကျောင်းသားများ၊ နည်းပညာလေ့လာသူများ၊ အင်ဂျင်နီယာများနှင့် AI အကူအညီဖြင့် ဖွဲ့စည်းတကျ သင်ယူလိုသူများအတွက် စီမံထားခြင်းဖြစ်ပါသည်။",
    aiShowcase: {
      eyebrow: "AI Assistant Showcase",
      title: "တာဝန်ယူစိတ်ရှိစေရန် ဒီဇိုင်းထုတ်ထားသော AI အကူအညီများ",
      lead: "Version 2 တွင် တန်ဖိုးမြင့် အလုပ်များကို မြန်တိုးစေသော်လည်း တောင်းဆိုချက်တိုင်းကို ထိန်းသိမ်းနိုင်သော ပူးပေါင်းသည့် AI လွှာကို ထည့်သွင်းထားသည်။",
      cards: [
        {
          title: "Guided multi-agent drafting",
          body: "တောင်းဆိုချက်တိုင်းကို coordinator၊ content နှင့် QA agents များမှတဆင့် ဖြတ်သန်းစေပြီး ပရောဂျက် context နှင့် ကိုက်ညီစေပါသည်။",
          highlights: [
            "Coordinator သည် context ကို ချက်ချင်း ခွဲဝေသည်",
            "EN / JA / MY draft များကို ချက်ချင်းပြင်ဆင်ပေးနိုင်သည်",
            "လူအတည်ပြုချက်များကို log ထဲတွင် သိမ်းဆည်းထားသည်",
          ],
        },
        {
          title: "Contextual knowledge vault",
          body: "ပြန်လည်အသုံးပြုနိုင်သော knowledge objects များက standards၊ templates နှင့် အတွေ့အကြုံများကို သိမ်းဆည်းပေးပြီး အဖွဲ့များသည် ထပ်မံ စတင်စရာ မလိုတော့ပါ။",
          highlights: [
            "Discipline-by-discipline standards များကို သိမ်းဆည်းထားသည်",
            "သင်ယူမှု session များတွင် မြန်ဆန်ပြန်ခေါ်ယူနိုင်သည်",
            "Brief အသစ်တိုင်းကို version control ဖြင့် ထိန်းချုပ်ထားသည်",
          ],
        },
        {
          title: "Ship-ready operations",
          body: "Ops automation က deployment checklist၊ rollback မှတ်စု နှင့် အသိပေးချက်များဖြင့် release တိုင်းကို တစ်မျိုးတည်းစနစ်ထိန်းပေးသည်။",
          highlights: [
            "Deployment checklist ကို ချိတ်ဆက်ထားသည်",
            "Rollback မှတ်စုများကို အချိန်မီ မှတ်တမ်းတင်ပေးသည်",
            "Release အသိပေးချက်များကို အသင့်ထားပေးသည်",
          ],
        },
      ],
    },
    voiceSection: {
      eyebrow: "Voice AI",
      badge: "တိုက်ရိုက် အယူအဆ",
      title: "Voice-first tutoring ကို ချက်ချင်းစတင်ရန် အဆင်သင့်ဖြစ်နေပြီ",
      lead: "ဖွဲ့စည်းတကျသော prompt များမှ သဘာဝစကားပြောသို့ workspace ထဲတွင် ရွေ့ပြောင်းနိုင်သည်။",
      points: [
        "English၊ Japanese၊ Burmese အတွက် realtime bilingual whisper နှင့် response ပံ့ပိုးမှု။",
        "Session မှတ်တမ်းများကို အလိုအလျောက် သိမ်းဆည်းပြီး အကြိမ်ကြိမ် ပြန်ဖွင့်လို့ရသည်။",
        "ပန်းချီဆွဲခြင်း၊ မှတ်သားခြင်း၊ ကိန်းတွက်မှု prompts များကို လက်မထောင်ဘဲ ထိန်းချုပ်နိုင်သည်။",
        "Publish မလုပ်မီ လူမန်တော်များထံသို့ အလိုအလျောက် escalate လုပ်ပေးသည်။",
      ],
      caption: "Voice အတွေ့အကြုံများကို ညွှန်ကြားသင်ယူမှု timeline နှင့်အတူတကွ ဖြန့်ချိသွားမည်ဖြစ်သည်။",
    },
    featuresSection: {
      eyebrow: "ပလက်ဖောင်းအင်္ဂါရပ်ထင်ရှားချက်များ",
      title: "AI လမ်းညွှန်ပါဝင်သည့် နည်းပညာသင်ယူမှုကြောင့် မြန်ဆန်စွာ တိုးတက်နိုင်စေပါ",
      lead: "အင်္ဂါရပ်တိုင်းသည် AI workflow အကူအညီနှင့် ဖွဲ့စည်းတကျ သင်ယူမှုကို ပေါင်းစည်းထားပြီး နက်ရှိုင်းစွာ သင်ယူလိုသူများအတွက် အချိန်မရှုံးဘဲ မြန်ဆန်စွာ တိုးတက်နိုင်စေပါသည်။",
    },
    features: [
      ["နည်းပညာ Command Center", "Architecture၊ engineering၊ BIM နှင့် operations အဖွဲ့များအတွက် AI hub တစ်ခုတည်း။"],
      ["Mode-based သင်ယူမှု", "Tutor၊ coach၊ quiz နှင့် deep explanation မုဒ်များကို session တိုင်းတွင် ပြောင်းလဲအသုံးချနိုင်သည်။"],
      ["Voice-ready အနာဂတ်", "Realtime bilingual voice ပံ့ပိုးမှုနှင့် transcript များကို roadmap ထဲတွင် ထည့်သွင်းထားသည်။"],
      ["Platform-level Ambition", "Mobile၊ web နှင့် စကားပြောချန်နယ်များတွင် ချိတ်ဆက်အသုံးပြုစေချိန်တွிலும் ကြီးကြပ်မှုမလွှတ်ဘဲ ထိန်းသိမ်းထားနိုင်သည်။"],
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
    flowTitle: "AI အဖွဲ့၏ workflow",
    checklistTitle: "Human approval checklist",
    checklist: [
      "Brand voice နှင့် language quality မှန်ကန်ရမည်",
      "Links၊ mobile layout နှင့် images များစစ်ပြီးရမည်",
      "SEO metadata နှင့် social preview အဆင်သင့်ဖြစ်ရမည်",
      "Deploy notes နှင့် rollback path ရှင်းလင်းရမည်",
    ],
    screens: "Concept Visuals",
    screensTitle: "Workspace နှင့် session concept snapshots",
    screensLead: "Version 2 ၏ dashboard၊ session flow နှင့် knowledge vault အတွေ့အကြုံများကို လက်တွေ့ capture မရသေးသဖြင့် ဤ concept visual များဖြင့် ဖော်ပြထားပါသည်။",
    categoriesSection: {
      eyebrow: "နည်းပညာသင်ယူမှု",
      title: "တကယ့်ပရောဂျက် discipline များအတွက် ဖန်တီးထားသည်",
      lead: "အခြေခံသီအိုရီများနှင့် AI ပူးပေါင်းပေးသည့် လက်တွေ့ဆောင်ရွက်မှုများကို ပေါင်းစည်းထားသည်။",
      categories: [
        ["Architecture", "Building physics၊ code နှင့် narrative brief များကို စတူဒီယိုတွင် အသုံးချနိုင်အောင် ပြင်ဆင်ပေးသည်။"],
        ["Structural Engineering", "Applied calculation၊ load path နှင့် review-ready report template များကို စနစ်တကျ တည်ဆောက်ပေးသည်။"],
        ["AutoCAD", "Drafting standard၊ layer management နှင့် annotation လမ်းညွှန်များကို ဖော်ပြပေးသည်။"],
        ["Revit", "Family management၊ parametric workflow နှင့် BIM coordination အကြံပြုချက်များကို မျှဝေသည်။"],
        ["BIM", "Model checking၊ shared parameter နှင့် data handoff လုပ်ငန်းစဉ်များကို တည်ဆောက်ပေးသည်။"],
        ["Quantity Survey", "Take-off logic၊ cost tracking sheets နှင့် ပြင်ဆင်မှုများကို ထိန်းချုပ်ပေးသည်။"],
        ["Math", "နည်းပညာဝင်ခွင့်အတွက်လိုအပ်သော သင်္ချာအခြေခံများကို ပြန်လည်သရုပ်ပြပေးသည်။"],
        ["Physics", "Mechanics၊ material နှင့် ပြဿနာတည်ဆောက်နည်းများကို သင်တန်းအဖွဲ့နှင့် မျှဝေပါသည်။"],
      ],
    },
    testimonials: {
      eyebrow: "ထောက်ခံသံများ",
      title: "တစ်လအတွင်း သင်ယူမှုအဆင်ပြေမှုကို တွေ့မြင်စေပါသည်",
      lead: "ဂျပန်တစ်ကုန်ရှိ အဖွဲ့ငယ်များက Tech Academia workflow ကို အမှန်တကယ်လုပ်ငန်းတာဝန်များတွင် အသုံးချနေပြီဖြစ်သည်။",
      items: [
        {
          quote: "Coordinator နှင့် content agents ကြောင့် ကျွန်တော့် architecture studio brief ကို ဘာသာနှစ်မျိုးစလုံးဖြင့် အမှန်တကယ်သော ပေးပို့စာတင်လက်ခံဖို့ အသင့်ဖြစ်စေခဲ့သည်။",
          name: "Aiko K.",
          role: "Architecture ကျောင်းသား (တိုကျို)",
        },
        {
          quote: "QA agent က အစီအစဉ်တကျဆင်းသက်ထားပေးသည့် အဆင့်များကြောင့် ကျွန်တော်တို့ သင်တန်းအဖွဲ့က အဖြေထွက်ရတာရဲ့ အကြောင်းခံတရားကို နားလည်လာခဲ့တယ်။",
          name: "Tanaka R.",
          role: "Structural engineering မန်တော် (အိုစကာ)",
        },
        {
          quote: "Voice rehearsal နဲ့ follow-up မှတ်စုကြောင့် မြန်မာလေ့လာသူများက Revit ဆုံးဖြတ်ချက်များကို အင်တာဗျူးတွင် ယုံကြည်စိတ်ချဖြင့် ရှင်းပြနိုင်လာတယ်။",
          name: "Myo Thandar",
          role: "BIM ကော်ဒီနေတာ (နဂိုယား)",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "အမြဲမေးလေ့ရှိသော မေးခွန်းများ",
      lead: "Session မှတ်ချက်တင်မီ အချက်အလက်များကို ကြိုတင်လေ့လာပါ။",
      items: [
        {
          question: "လူအတည်ပြုခြင်းကို ဘယ်လိုလုပ်သလဲ?",
          answer: "AI draft တိုင်းကို 24 နာရီအတွင်း လူက စစ်ဆေးအတည်ပြုပါသည်။ အတည်မရသေးပါက production သို့မဟုတ် သင်ကြားရေးကျောင်းသားများထံ မပို့ပါ။",
        },
        {
          question: "ဘာသာစုံအဖွဲ့တွေပါဝင်လို့ရမလား?",
          answer: "ရပါတယ်။ Session များတွင် English၊ Japanese၊ Burmese တက်ရောက်သူများကို ပုံမှန်ပဲ တွေ့ရပါတယ်။ AI agents သည် ဘာသာ ၃ မျိုးစလုံးဖြင့် draft ပြုလုပ်ပြီး မန်တော်များက context ကို တစ်ထပ်ထပ် ကြည့်ရှုပေးပါတယ်။",
        },
        {
          question: "လုပ်ငန်းဖိုင်များမရှိဘဲ ပူးပေါင်းလို့ ရမလား?",
          answer: "ရှိပြီးသား drawing၊ spreadsheet သို့မဟုတ် မှတ်စုများ ရှိလျှင် ယူလာပေးပါ။ Coordinator agent သည် အားလုံးကို သာယာစွာ စနစ်တကျ စုစည်းပေးပါမည်။",
        },
        {
          question: "Voice tutoring ကို ဘယ်တော့ အသုံးပြုလို့ရမလဲ?",
          answer: "Voice AI ကို အဆင့်လိုက် ဖြန့်ချိနေပြီး လက်ရှိ ပူးပေါင်းသူ အဖွဲ့ငယ်များသည် transcript နဲ့ လူကြီးမင်းအတည်ပြုချက်ပါဝင်သည့် rehearsal ကို ဦးစွာအသုံးပြုနိုင်ပါသည်။",
        },
      ],
    },
    ctaTitle: "Tech Academia Version 2 အတွက် အတူတကွ စီမံခန့်ခွဲလိုပါသလား?",
    ctaBody: "AI workflow များ၊ voice tutoring pilot များနှင့် နည်းပညာသင်ယူမှု စီမံကိန်းများအတွက် ဆွေးနွေးရန် အခုပဲ အချိန်ချိန်းယူပါ။",
    cta: "Roadmap ချိန်းညှိရန်",
    footer: {
      tagline: "Tech Academia သည် My Tech Academia ecosystem ၏ အစိတ်အပိုင်းတစ်ခုဖြစ်ပါသည်။",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "ZayCho", href: "/zaycho" },
        { label: "WorkJapaneseGO", href: "/work-japanese-go" },
        { label: "ဆက်သွယ်ရန်", href: "/contact" },
      ],
      contactLabel: "Session တင်ရန်",
      rights: "© {year} My Tech Academia. မူပိုင်ခွင့်အားလုံးကို ကာကွယ်ထားသည်။",
    },
  },
} as const;

const aiBusinessIdeas = {
  en: {
    eyebrow: "AI Business Paths",
    title: "10 online businesses you can start from home with AI",
    lead: "Start with a laptop or phone, internet, Canva, and ChatGPT. These paths are ordered from easiest to sell first toward more advanced service packages.",
    note: "For the first customers, prepare three samples and contact Facebook groups, local businesses, and online shop pages.",
    items: [
      {
        title: "Social Media Content Service",
        body: "Create post ideas, captions, content calendars, simple Canva designs, and campaign angles for Facebook pages and small businesses.",
        tags: ["ChatGPT", "Canva", "Online shops", "Local businesses"],
      },
      {
        title: "Short Video Script / Reel Service",
        body: "Prepare hooks, 15-30 second scripts, captions, subtitle text, and shot lists for TikTok, Facebook Reels, and YouTube Shorts.",
        tags: ["ChatGPT", "CapCut", "Reels", "Service pages"],
      },
      {
        title: "Product Listing Service",
        body: "Write product titles, descriptions, price notes, FAQs, keywords, and listing captions for sellers who publish many products.",
        tags: ["ChatGPT", "Canva", "Marketplace", "Online sellers"],
      },
      {
        title: "Short Video / Reel Production",
        body: "Turn scripts into finished reels with editing, voiceover, subtitles, background music, and cover thumbnails for promotions and product reviews.",
        tags: ["CapCut", "Canva", "Voiceover", "TikTok sellers"],
      },
      {
        title: "E-commerce Product Listing Service",
        body: "Prepare Shopify, WooCommerce, Facebook Shop, or marketplace listings with upload-ready formats, categories, options, size charts, and cleaned product photos.",
        tags: ["Sheets", "Shopify", "Product data", "E-commerce shops"],
      },
      {
        title: "Digital Product Sales",
        body: "Create planners, checklists, worksheets, ebooks, Canva templates, or prompt packs and sell them through Facebook, Telegram, Gumroad, or Etsy.",
        tags: ["Canva", "PDF", "Templates", "Gumroad"],
      },
      {
        title: "Online Course / Tutorial Creation",
        body: "Use AI to structure lesson outlines, slides, scripts, quizzes, and worksheets from a skill you already know.",
        tags: ["Slides", "Zoom", "Worksheets", "Students"],
      },
      {
        title: "AI Chatbot Setup Service",
        body: "Set up FAQ answers, Messenger auto-reply flows, order response scripts, and support templates for business pages.",
        tags: ["FAQ", "Messenger", "Auto reply", "Service pages"],
      },
      {
        title: "Translation / Localization Service",
        body: "Draft English to Myanmar or Myanmar to English translations with AI, then proofread and localize the tone for menus, websites, subtitles, documents, and ads.",
        tags: ["Translation", "Proofread", "Subtitles", "Local brands"],
      },
      {
        title: "Virtual Assistant with AI",
        body: "Support clients with email replies, scheduling, research, data entry, summaries, and document formatting using AI to work faster.",
        tags: ["Email", "Research", "Docs", "Remote clients"],
      },
    ],
  },
  ja: {
    eyebrow: "AIビジネス",
    title: "自宅からAIで始められるオンラインビジネス10選",
    lead: "ノートPCまたはスマートフォン、インターネット、Canva、ChatGPT があれば始められます。売りやすい順から、より高度なサービスへ進める構成です。",
    note: "最初の顧客は、サンプルを3つ用意して Facebook グループ、地域ビジネス、オンラインショップページへ提案しましょう。",
    items: [
      {
        title: "SNSコンテンツ制作サービス",
        body: "Facebookページや小規模ビジネス向けに、投稿アイデア、キャプション、カレンダー、Canvaデザイン、キャンペーン案を作成します。",
        tags: ["ChatGPT", "Canva", "Online shops", "Local businesses"],
      },
      {
        title: "ショート動画スクリプト / Reel サービス",
        body: "TikTok、Facebook Reels、YouTube Shorts 向けに、フック、15-30秒台本、キャプション、字幕、撮影リストを準備します。",
        tags: ["ChatGPT", "CapCut", "Reels", "Service pages"],
      },
      {
        title: "商品リスティングサービス",
        body: "商品タイトル、説明文、価格メモ、FAQ、キーワード、掲載用キャプションを作成し、商品登録の時間を短縮します。",
        tags: ["ChatGPT", "Canva", "Marketplace", "Online sellers"],
      },
      {
        title: "ショート動画 / Reel 制作",
        body: "台本から編集、音声、字幕、BGM、サムネイルまで仕上げ、プロモーションや商品レビュー用の動画を制作します。",
        tags: ["CapCut", "Canva", "Voiceover", "TikTok sellers"],
      },
      {
        title: "EC商品リスティングサービス",
        body: "Shopify、WooCommerce、Facebook Shop、マーケットプレイス向けに、カテゴリ、オプション、サイズ表、写真整理まで整えます。",
        tags: ["Sheets", "Shopify", "Product data", "E-commerce shops"],
      },
      {
        title: "デジタル商品の販売",
        body: "プランナー、チェックリスト、ワークシート、電子書籍、Canvaテンプレート、プロンプト集を作り販売します。",
        tags: ["Canva", "PDF", "Templates", "Gumroad"],
      },
      {
        title: "オンライン講座 / チュートリアル制作",
        body: "自分が知っているスキルを、AIで講座構成、スライド、台本、クイズ、ワークシートに整理します。",
        tags: ["Slides", "Zoom", "Worksheets", "Students"],
      },
      {
        title: "AIチャットボット設定サービス",
        body: "FAQ、Messenger自動返信、注文対応、価格表返信、サポート文面をビジネスページ向けに設定します。",
        tags: ["FAQ", "Messenger", "Auto reply", "Service pages"],
      },
      {
        title: "翻訳 / ローカライズサービス",
        body: "英語とミャンマー語の翻訳をAIで下書きし、メニュー、Web、字幕、資料、広告に自然な表現で整えます。",
        tags: ["Translation", "Proofread", "Subtitles", "Local brands"],
      },
      {
        title: "AI活用バーチャルアシスタント",
        body: "メール返信、スケジュール、調査、データ入力、要約、文書整形をAIで効率化して支援します。",
        tags: ["Email", "Research", "Docs", "Remote clients"],
      },
    ],
  },
  my: {
    eyebrow: "AI အွန်လိုင်းလုပ်ငန်းများ",
    title: "အိမ်မှာနေရင်း AI နဲ့ စနိုင်တဲ့ အွန်လိုင်းလုပ်ငန်း ၁၀ ခု",
    lead: "Laptop သို့မဟုတ် phone, internet, Canva နဲ့ ChatGPT လောက်နဲ့ စနိုင်တဲ့ လုပ်ငန်းတွေကို အကောင်အထည်ဖော်ရလွယ်တဲ့ အစဉ်လိုက်စီထားပါတယ်။",
    note: "ပထမဆုံး customer ရှာချင်ရင် နမူနာ ၃ ခု ပြင်ပြီး Facebook groups, local businesses, online shop pages တွေကို message ပို့ပြီး စမ်းပါ။",
    items: [
      {
        title: "Social Media Content Service",
        body: "Facebook page တွေအတွက် post idea, caption, content calendar, simple Canva design နဲ့ campaign idea တွေကို AI နဲ့ draft လုပ်ပြီး ကိုယ်တိုင်ပြင်ဆင်ပေးပါ။",
        tags: ["ChatGPT", "Canva", "Online shops", "Local businesses"],
      },
      {
        title: "Short Video Script / Reel Service",
        body: "TikTok, Facebook Reels, YouTube Shorts အတွက် ၁၅-၃၀ စက္ကန့် video script, hook, caption, subtitle text နဲ့ shot list တွေပြင်ပေးပါ။",
        tags: ["ChatGPT", "CapCut", "Reels", "Service pages"],
      },
      {
        title: "Product Listing Service",
        body: "Online shop တွေအတွက် product title, description, price note, FAQ, keyword, photo cleanup နဲ့ listing caption တွေပြင်ပေးပါ။",
        tags: ["ChatGPT", "Canva", "Marketplace", "Online sellers"],
      },
      {
        title: "Short Video / Reel Production",
        body: "Script တင်မကဘဲ video cut, voiceover, subtitle, background music, cover thumbnail ပါ production အဖြစ်လုပ်ပေးပါ။",
        tags: ["CapCut", "Canva", "Voiceover", "TikTok sellers"],
      },
      {
        title: "E-commerce Product Listing Service",
        body: "Shopify, WooCommerce, Facebook Shop, marketplace page တွေအတွက် upload format, category, option, size chart, keyword နဲ့ listing photo cleanup ကိုပြင်ပေးပါ။",
        tags: ["Sheets", "Shopify", "Product data", "E-commerce shops"],
      },
      {
        title: "Digital Product ရောင်းခြင်း",
        body: "Planner, checklist, worksheet, ebook, Canva template, prompt pack စတာတွေကို AI နဲ့ draft လုပ်ပြီး digital file အဖြစ်ရောင်းနိုင်ပါတယ်။",
        tags: ["Canva", "PDF", "Templates", "Gumroad"],
      },
      {
        title: "Online Course / Tutorial ဖန်တီးခြင်း",
        body: "ကိုယ်သိတဲ့ skill တစ်ခုကို lesson outline, slide, script, quiz, worksheet တွေဖြစ်အောင် AI နဲ့စီပြီး course အဖြစ်ရောင်းပါ။",
        tags: ["Slides", "Zoom", "Worksheets", "Students"],
      },
      {
        title: "AI Chatbot Setup Service",
        body: "Business page တွေအတွက် FAQ answer, Messenger auto-reply flow, order response, price menu reply နဲ့ support script တွေ setup လုပ်ပေးပါ။",
        tags: ["FAQ", "Messenger", "Auto reply", "Service pages"],
      },
      {
        title: "Translation / Localization Service",
        body: "English ↔ Myanmar translation ကို AI နဲ့ draft လုပ်ပြီး ကိုယ်တိုင် proofread ပြင်ဆင်ကာ menu, website, subtitle, document, ad caption တွေကို local tone နဲ့ပြင်ပေးပါ။",
        tags: ["Translation", "Proofread", "Subtitles", "Local brands"],
      },
      {
        title: "Virtual Assistant with AI",
        body: "Email reply, schedule, research, data entry, report summary, document formatting စတဲ့ admin work တွေကို AI နဲ့ပိုမြန်အောင်လုပ်ပြီး VA service အဖြစ်ရောင်းပါ။",
        tags: ["Email", "Research", "Docs", "Remote clients"],
      },
    ],
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
  const technicalSection = {
    eyebrow: t.screens,
    title: t.screensTitle,
    lead: t.screensLead,
  };
  const featuresSection = t.featuresSection;
  const aiShowcase = t.aiShowcase;
  const voiceSection = t.voiceSection;
  const categoriesSection = t.categoriesSection;
  const businessSection = aiBusinessIdeas[lang];
  const testimonials = t.testimonials;
  const faq = t.faq;
  const metrics = t.heroMetrics;
  const year = new Date().getFullYear().toString();
  const footerLinks = t.footer.links.map((item) => ({
    ...item,
    href: withLang(item.href, lang),
  }));
  const rights = t.footer.rights.replace("{year}", year);

  return (
    <main className="relative isolate bg-midnight-950 text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35" />

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 -top-48 h-96 bg-aurora-500/25 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-b from-white/5 via-transparent to-aurora-500/10 opacity-40 blur-3xl lg:block" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-28 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="motion-safe:opacity-0 motion-safe:animate-fade-up">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-aurora-200">
                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.32em] text-aurora-100">{t.heroBadge}</span>
                <span>{t.eyebrow}</span>
              </div>
              <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">Tech Academia</h1>
              <p className="mt-4 text-xl font-semibold text-aurora-100/90 sm:text-2xl">{t.heroSubtitle}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-200 sm:text-xl">{t.body}</p>
              <ul className="mt-8 space-y-3 text-base text-slate-200 sm:text-lg">
                {t.bullets.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-aurora-500/15 text-xs font-semibold text-aurora-100 ring-1 ring-aurora-500/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={withLang("/contact", lang)}
                  className="inline-flex items-center justify-center rounded-full bg-aurora-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                >
                  {t.roadmap}
                </Link>
                <Link
                  href={withLang("/projects", lang)}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-inner-glow transition hover:border-aurora-300/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                >
                  {t.explore}
                </Link>
              </div>
              <div className="mt-8 rounded-3xl border border-white/12 bg-white/5 p-5 shadow-inner-glow backdrop-blur">
                <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-aurora-200">Start Learning Free</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <Link
                    href="/courses/python"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-aurora-500 px-5 py-3 text-center text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                  >
                    Python Course
                  </Link>
                  <Link
                    href="/courses/architecture"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-aurora-300/50 bg-aurora-500/15 px-5 py-3 text-center text-sm font-semibold text-aurora-100 shadow-inner-glow transition hover:border-aurora-200 hover:bg-aurora-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                  >
                    Architecture Course
                  </Link>
                  <Link
                    href="/tech-academia/chat"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white shadow-inner-glow transition hover:border-aurora-300/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                  >
                    AI Studio
                  </Link>
                  <Link
                    href="/tech-academia/chat?mode=quiz"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-500/15 px-5 py-3 text-center text-sm font-semibold text-emerald-100 shadow-inner-glow transition hover:border-emerald-200 hover:bg-emerald-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                  >
                    Quiz Mode
                  </Link>
                </div>
                <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
                  <Link
                    href="/tech-academia/register"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-aurora-500 px-5 py-3 text-center text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                  >
                    Create Account
                  </Link>
                  <Link
                    href="/tech-academia/login"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white shadow-inner-glow transition hover:border-aurora-300/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                  >
                    Login
                  </Link>
                  <Link
                    href="/tech-academia/dashboard"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-midnight-900/70 px-5 py-3 text-center text-sm font-semibold text-white shadow-inner-glow transition hover:border-aurora-300/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <aside
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-10 shadow-glow backdrop-blur-md motion-safe:opacity-0 motion-safe:animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-8 h-48 w-48 rounded-full bg-aurora-500/25 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-6 h-52 w-52 rounded-full bg-blush-500/20 blur-[110px]" />
              <div className="relative space-y-6">
                <div>
                  <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">{t.bestFor}</span>
                  <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{t.bestTitle}</h2>
                  <p className="text-base leading-relaxed text-slate-200 sm:text-lg">{t.bestBody}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map(([label, description], index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/15 bg-midnight-900/60 p-5 shadow-inner-glow motion-safe:opacity-0 motion-safe:animate-fade-up"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <span className="block text-xl font-semibold text-white">{label}</span>
                      <p className="mt-1 text-sm leading-relaxed text-slate-200">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-3xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{businessSection.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{businessSection.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{businessSection.lead}</p>
          </div>
          <div className="mt-12 grid gap-5">
            {businessSection.items.map((item, index) => (
              <article
                key={item.title}
                className="relative grid gap-5 overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up transition hover:-translate-y-1 hover:border-aurora-300/60 hover:bg-white/10 sm:grid-cols-[4.5rem_1fr]"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-0 h-36 w-36 rounded-full bg-aurora-500/15 blur-[100px]" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-aurora-500/20 text-sm font-semibold text-aurora-100 ring-1 ring-aurora-400/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-200">{item.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-midnight-900/60 px-3 py-1 text-xs font-semibold text-slate-200 shadow-inner-glow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-300">{businessSection.note}</p>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-2xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{aiShowcase.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{aiShowcase.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{aiShowcase.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiShowcase.cards.map((card, index) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up transition hover:-translate-y-1 hover:border-aurora-300/60 hover:bg-white/10"
                style={{ animationDelay: `${160 + index * 90}ms` }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-aurora-500/20 blur-[120px]" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-200">{card.body}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {card.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-aurora-500/15 text-[11px] font-semibold text-aurora-100 ring-1 ring-aurora-400/45">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="motion-safe:opacity-0 motion-safe:animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{voiceSection.eyebrow}</span>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">{voiceSection.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">{voiceSection.lead}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-aurora-100/80">{voiceSection.caption}</p>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-aurora-500/25 via-midnight-900/60 to-aurora-300/20 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-aurora-500/30 blur-[120px]" />
              <div className="relative flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
                  {voiceSection.badge}
                </span>
                <ul className="space-y-4 text-base leading-relaxed text-slate-100">
                  {voiceSection.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold text-white ring-1 ring-white/30">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-2xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{featuresSection.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{featuresSection.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{featuresSection.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.features.map(([title, body], index) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up transition hover:-translate-y-1 hover:border-aurora-300/60 hover:bg-white/10"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-aurora-500/25 blur-[110px]" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora-500/20 text-aurora-100 ring-1 ring-aurora-400/45 backdrop-blur">
                    <span className="text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-200">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-2xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{categoriesSection.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{categoriesSection.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{categoriesSection.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categoriesSection.categories.map(([title, body], index) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up transition hover:-translate-y-1 hover:border-aurora-300/60 hover:bg-white/10"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-0 h-32 w-32 rounded-full bg-aurora-500/15 blur-[120px]" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-3xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{t.teamEyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{t.teamTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{t.teamLead}</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/12 bg-white/10 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora-500/25 text-sm font-semibold text-white ring-1 ring-aurora-400/45">
                  01
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{t.coordinator.label}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-200">{t.coordinator.body}</p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up" style={{ animationDelay: "120ms" }}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {t.roles.map(([title, body], index) => (
                    <article
                      key={title}
                      className="rounded-2xl border border-white/10 bg-midnight-900/60 p-5 shadow-inner-glow transition hover:border-aurora-300/50"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-aurora-500/15 text-xs font-semibold text-aurora-100 ring-1 ring-aurora-400/45">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <h4 className="mt-4 text-lg font-semibold text-white">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up">
                <h3 className="text-lg font-semibold text-white">{t.flowTitle}</h3>
                <ol className="mt-6 space-y-4">
                  {t.flow.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-midnight-900/70 p-4 shadow-inner-glow"
                    >
                      <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-aurora-500/20 text-xs font-semibold text-aurora-100 ring-1 ring-aurora-400/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-slate-200 sm:text-base">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up" style={{ animationDelay: "120ms" }}>
                <h3 className="text-lg font-semibold text-white">{t.checklistTitle}</h3>
                <ul className="mt-6 space-y-4">
                  {t.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-aurora-500/25 text-xs font-bold text-midnight-950">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-2xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{technicalSection.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{technicalSection.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{technicalSection.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {gallery.techAcademia.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-glow transition hover:-translate-y-1 hover:border-aurora-300/50 hover:bg-white/10 motion-safe:opacity-0 motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-midnight-900/60">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-midnight-950/0 via-midnight-950/20 to-aurora-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="space-y-3 px-6 py-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-base leading-relaxed text-slate-200">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-2xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{testimonials.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{testimonials.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{testimonials.lead}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.items.map((item, index) => (
              <article
                key={item.quote}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-8 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-12 h-36 w-36 rounded-full bg-aurora-500/25 blur-[110px]" />
                <div className="relative">
                  <blockquote className="text-base leading-relaxed text-slate-200">“{item.quote}”</blockquote>
                  <div className="mt-6">
                    <span className="block text-sm font-semibold text-white">{item.name}</span>
                    <span className="text-xs uppercase tracking-[0.22em] text-aurora-200">{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <div className="max-w-2xl space-y-4 motion-safe:opacity-0 motion-safe:animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora-200">{faq.eyebrow}</span>
            <h2 className="font-display text-3xl text-white sm:text-4xl">{faq.title}</h2>
            <p className="text-lg leading-relaxed text-slate-200">{faq.lead}</p>
          </div>
          <div className="mt-10 space-y-4">
            {faq.items.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/12 bg-white/5 p-6 shadow-glow backdrop-blur motion-safe:opacity-0 motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <span>{item.question}</span>
                  <span className="text-aurora-200 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 pb-24 pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-aurora-500/20 via-white/10 to-aurora-300/30 p-10 text-center shadow-glow">
            <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-aurora-500/30 blur-3xl motion-safe:animate-pulse-soft" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-blush-500/20 blur-[120px]" />
            <div className="relative space-y-6 motion-safe:opacity-0 motion-safe:animate-fade-up">
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">{t.ctaTitle}</h2>
              <p className="text-lg leading-relaxed text-slate-100/90">{t.ctaBody}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href={withLang("/contact", lang)}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-midnight-950/70">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_0.8fr]">
            <div className="motion-safe:opacity-0 motion-safe:animate-fade-up">
              <h3 className="text-xl font-semibold text-white">Tech Academia</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.footer.tagline}</p>
              <Link
                href={withLang("/contact", lang)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-aurora-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-200"
              >
                {t.footer.contactLabel}
              </Link>
            </div>
            <nav className="motion-safe:opacity-0 motion-safe:animate-fade-up" aria-label="Footer">
              <ul className="grid gap-3 text-sm text-slate-200">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="transition hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
            {rights}
          </div>
        </div>
      </footer>
    </main>
  );
}

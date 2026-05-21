import Link from "next/link";
import { ProjectCard } from "../components/project-card";
import { ScreenshotShowcase } from "../components/screenshot-showcase";
import { projects } from "../data/projects";
import { getHomepageScreenshots } from "../data/screenshots";
import { getLang, withLang } from "../lib/i18n";

const copy = {
  en: {
    eyebrow: "Learning, AI, and Digital Products",
    heroTitle: "A Home for Learning, AI, and Practical Digital Products",
    heroBody:
      "My Tech Academia brings together practical apps for language learning, ecommerce, and AI-powered productivity. Each product is built to solve real everyday problems with clear design and useful workflows.",
    metrics: [
      ["3", "Core products under one umbrella"],
      ["Japan", "Built around practical user habits"],
      ["AI", "Assistive, useful, and human-centered"],
    ],
    explore: "Explore Projects",
    contact: "Contact",
    wgTitle: "Speak, learn, and practice with confidence",
    wgBody: "Practical phrases, clear mobile guidance, and an AI-assisted learning flow built for steady progress.",
    zyTitle: "Guided shopping, not just product browsing",
    zyBody: "Budget-based shopping support, recommendations, and faster purchase decisions with less confusion.",
    humanAi: "Human-centered AI",
    humanAiBody:
      "AI is used to improve speed, clarity, learning, and decision-making rather than add noise.",
    trust: [
      "Built in Japan",
      "Practical apps for real users",
      "Learning, commerce, and AI in one ecosystem",
    ],
    featuredEyebrow: "Featured Projects",
    featuredTitle: "Products growing under My Tech Academia",
    featuredLead: "Explore the products currently being shaped into a focused, practical digital ecosystem.",
    screensEyebrow: "Project Screens",
    screensTitle: "A visual look at the ecosystem direction",
    screensLead:
      "Current project visuals are embedded directly into the homepage, with room to replace them with richer captures as each product matures.",
    buildEyebrow: "What We Build",
    buildTitle: "Focused tools with room to scale",
    features: [
      ["Language learning experiences", "Practical and beginner-friendly tools designed around real everyday use."],
      ["Ecommerce systems", "Storefronts and shopping flows that help users decide faster and buy with ease."],
      ["AI-powered productivity", "Assistive workflows that improve clarity, speed, and learning outcomes."],
      ["Technical education platforms", "Long-term product ideas for engineering learning and digital skill growth."],
    ],
    servicesEyebrow: "AI Website Support",
    servicesTitle: "Practical AI website support for small businesses",
    servicesLead:
      "My Tech Academia helps small businesses clarify website messaging, improve multilingual communication, strengthen SEO basics, and introduce practical AI-assisted workflows in English, Japanese, and Burmese.",
    servicesStart: "Starting from ¥10,000",
    servicesWhoFor:
      "Best for small businesses, educators, consultants, multilingual service providers, and founders who want reliable website support without building a full in-house content team.",
    services: [
      {
        name: "Starter",
        price: "¥10,000",
        body: "A focused one-page improvement package for clearer messaging, stronger CTA wording, and a more confident first impression.",
        bullets: [
          "1 page copy rewrite",
          "CTA improvement",
          "Basic SEO title and meta description",
          "English / Japanese / Burmese support",
        ],
        cta: "Start with Starter",
      },
      {
        name: "Growth",
        price: "¥15,000",
        body: "A multi-page website polish package for businesses that want stronger structure, clearer communication, and cleaner service or product messaging.",
        bullets: [
          "2 to 3 page rewrite",
          "Homepage and service page improvement",
          "SEO copy improvement",
          "Messaging clarity review",
        ],
        cta: "Choose Growth",
      },
      {
        name: "Monthly AI Web Support",
        price: "¥30,000 / month",
        body: "Ongoing monthly support for businesses that want regular website updates, multilingual content help, SEO checks, and practical AI-assisted operations.",
        bullets: [
          "Monthly page improvements",
          "Search Console follow-up",
          "4 social copy drafts",
          "Multilingual website support",
          "QA and content review",
        ],
        cta: "Request Monthly Support",
        featured: true,
      },
    ],
    updatesEyebrow: "Latest Updates",
    updatesTitle: "What is moving across the ecosystem",
    updates: [
      ["ZayCho mobile experience", "Guided ecommerce, grocery support, and assisted shopping flows are expanding across web and mobile."],
      ["WorkJapaneseGO learning flow", "Practical Japanese lessons, voice-first learning ideas, and real work-use phrases remain the product focus."],
      ["Tech Academia platform roadmap", "The long-term vision combines AI tutoring, technical learning, and productivity into one connected platform."],
    ],
    deployEyebrow: "Deploy Ready",
    deployTitle: "Prepared for domain connection and production release",
    deployBody:
      "The scaffold is structured for a simple Vercel deployment flow with a clean route map, sitemap support, robots configuration, and custom domain handoff.",
    reviewRoutes: "Review Routes",
    launchSupport: "Launch Support",
    contactTitle: "Want to collaborate, build, or explore a project?",
    contactBody:
      "If you are interested in partnerships, freelance collaboration, product support, or future opportunities, feel free to get in touch.",
    getInTouch: "Get in Touch",
  },
  ja: {
    eyebrow: "学び、AI、デジタルプロダクト",
    heroTitle: "学びとAI、実用的なデジタルプロダクトを束ねる拠点",
    heroBody:
      "My Tech Academia は、語学学習、EC、AI活用による生産性向上を支える実用的なプロダクトを展開するブランドです。すべてのサービスは、日常の課題を分かりやすい設計と迷いの少ない導線で解決することを目指しています。",
    metrics: [
      ["3", "ひとつのブランドに集まる主要プロダクト"],
      ["Japan", "日本での実利用を踏まえた設計"],
      ["AI", "人に寄り添う支援型AI"],
    ],
    explore: "プロジェクトを見る",
    contact: "お問い合わせ",
    wgTitle: "話す・学ぶ・練習するを、もっと自然に",
    wgBody: "日常や仕事で役立つ実用フレーズ、分かりやすいモバイル体験、AI支援の学習導線をひとつにつないでいます。",
    zyTitle: "ただ見るだけで終わらない、選びやすい買い物体験",
    zyBody: "予算に応じた提案、おすすめ表示、迷いを減らす購入判断のサポートを組み合わせ、買い物をより進めやすく整えています。",
    humanAi: "人に寄り添うAI",
    humanAiBody:
      "AI はノイズを増やすためではなく、スピード、分かりやすさ、学び、判断を支えるために活用しています。",
    trust: [
      "日本で構築",
      "実際の利用者のための実用アプリ",
      "学び・EC・AIがつながるひとつのエコシステム",
    ],
    featuredEyebrow: "注目プロジェクト",
    featuredTitle: "My Tech Academia のもとで育つプロダクト",
    featuredLead: "ひとつのデジタルエコシステムとして磨き上げている各プロダクトの現在地をご紹介します。",
    screensEyebrow: "プロジェクト画面",
    screensTitle: "エコシステムの方向性をビジュアルで紹介",
    screensLead:
      "現在利用できるプロダクト画像をホームページ上に直接掲載し、今後は各サービスの成長に合わせて、より具体的なスクリーンショットへ段階的に差し替えられる構成にしています。",
    buildEyebrow: "私たちが作るもの",
    buildTitle: "焦点の定まったツールと拡張できる基盤",
    features: [
      ["語学学習体験", "実生活や仕事で役立つことを重視した、始めやすく続けやすい学習ツール。"],
      ["ECシステム", "利用者が迷わず選び、納得して購入しやすいストア導線。"],
      ["AI活用の生産性向上", "分かりやすさ、スピード、学習効率を支える実務的な支援ワークフロー。"],
      ["技術教育プラットフォーム", "工学学習とデジタルスキルの成長を支える長期的な基盤構想。"],
    ],
    servicesEyebrow: "AI Web サポート",
    servicesTitle: "小規模事業者向けの実用的なAI Web支援",
    servicesLead:
      "My Tech Academia は、英語・日本語・ビルマ語に対応しながら、Webサイトの文章改善、多言語での伝わり方の整理、SEOの基本整備、AIを活用した実務フロー支援を実用的にご提供します。",
    servicesStart: "料金は ¥10,000 から",
    servicesWhoFor:
      "小規模事業者、教育サービス、コンサルタント、多言語対応が必要なサービス業、少人数で継続的にWeb運用を行いたい事業者に適しています。",
    services: [
      {
        name: "Starter",
        price: "¥10,000",
        body: "1ページを対象に、伝わりやすい文章、CTA改善、第一印象の整理に絞って整える小規模パッケージです。",
        bullets: [
          "1ページの文章改善",
          "CTA文言の調整",
          "基本的なタイトル / メタディスクリプション整備",
          "英語 / 日本語 / ビルマ語対応",
        ],
        cta: "Starter を相談する",
      },
      {
        name: "Growth",
        price: "¥15,000",
        body: "複数ページを対象に、構成の整理、訴求の明確化、サービス説明の磨き込みを進める改善パッケージです。",
        bullets: [
          "2〜3ページの改善",
          "ホームページとサービスページの改善",
          "SEO向け文章の見直し",
          "メッセージの明確化レビュー",
        ],
        cta: "Growth を選ぶ",
      },
      {
        name: "Monthly AI Web Support",
        price: "¥30,000 / 月",
        body: "定期的な更新、SEO確認、多言語サポート、AIを活用した運用補助をまとめて支える月額支援プランです。",
        bullets: [
          "月次ページ改善",
          "Search Console の確認と簡易フォロー",
          "SNS用テキストを月4本作成",
          "多言語Web運用サポート",
          "QA と文章レビュー",
        ],
        cta: "月額支援を相談する",
        featured: true,
      },
    ],
    updatesEyebrow: "最新アップデート",
    updatesTitle: "エコシステム全体で進んでいること",
    updates: [
      ["ZayCho モバイル体験", "ガイド付きEC、食料品サポート、支援型ショッピング導線を Web とモバイルの両面で強化しています。"],
      ["WorkJapaneseGO 学習フロー", "実用日本語、音声中心の学習体験、仕事で使える表現の磨き込みを継続しています。"],
      ["Tech Academia ロードマップ", "AI家庭教師、技術学習、生産性向上をひとつにつなぐ長期ビジョンを着実に整理しています。"],
    ],
    deployEyebrow: "公開準備",
    deployTitle: "独自ドメイン接続と本番公開に向けた基盤が整っています",
    deployBody:
      "Vercel でのスムーズな公開を前提に、ルート構成、sitemap、robots、独自ドメイン接続まで見据えた基盤を整えています。",
    reviewRoutes: "ルートを見る",
    launchSupport: "公開サポート",
    contactTitle: "一緒に作り、育て、次の展開を相談しませんか",
    contactBody:
      "提携、受託、プロダクト支援、今後の取り組みについてご関心があれば、どうぞお気軽にご連絡ください。",
    getInTouch: "お問い合わせ",
  },
  my: {
    eyebrow: "ပညာရေး၊ AI နှင့် ဒစ်ဂျစ်တယ်ထုတ်ကုန်ဝန်ဆောင်မှုများ",
    heroTitle: "သင်ယူမှု၊ AI နှင့် လက်တွေ့အသုံးချနိုင်သော ဒစ်ဂျစ်တယ်ထုတ်ကုန်များကို ပေါင်းစည်းဖော်ဆောင်သည့် ပလက်ဖောင်း",
    heroBody:
      "My Tech Academia သည် ဘာသာစကားသင်ယူမှု၊ အီလက်ထရောနစ်ကုန်သွယ်မှုနှင့် AI အထောက်အကူပြု လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်မှုတို့ကို ချိတ်ဆက်ပေးနိုင်ရန် ရည်ရွယ်ထားသော ဒစ်ဂျစ်တယ်ထုတ်ကုန်များကို စနစ်တကျ တည်ဆောက်ဖော်ဆောင်လျက်ရှိသော အမှတ်တံဆိပ်တစ်ခုဖြစ်ပါသည်။",
    metrics: [
      ["3", "အမှတ်တံဆိပ်တစ်ခုအောက်တွင် စုစည်းထားသော အဓိကထုတ်ကုန်များ"],
      ["Japan", "ဂျပန်နိုင်ငံရှိ အသုံးပြုမှုအတွေ့အကြုံများကို အခြေခံထားသော ဒီဇိုင်း"],
      ["AI", "လက်တွေ့အကူအညီပေးနိုင်ရန် ရည်ရွယ်သည့် AI စနစ်"],
    ],
    explore: "ထုတ်ကုန်များကြည့်ရန်",
    contact: "ဆက်သွယ်ရန်",
    wgTitle: "“ပြောခြင်း၊ သင်ယူခြင်း၊ လေ့ကျင့်ခြင်း” ကို ပိုမိုသဘာဝကျစွာ ချိတ်ဆက်ပေးသော သင်ယူမှုအတွေ့အကြုံ",
    wgBody: "လက်တွေ့အသုံးချနိုင်သော စကားစုများ၊ နားလည်ရလွယ်ကူသော မိုဘိုင်းအတွေ့အကြုံနှင့် AI အထောက်အကူပြု သင်ယူမှုလမ်းကြောင်းကို အခြေခံထားပါသည်။",
    zyTitle: "ထုတ်ကုန်များကို ရွေးချယ်ဝယ်ယူရာတွင် ပိုမိုလွယ်ကူသော လမ်းညွှန်ပါဝင်သည့် ဝယ်ယူမှုအတွေ့အကြုံ",
    zyBody: "ဘတ်ဂျက်အခြေခံ အကြံပြုချက်များ၊ သင့်လျော်သော ထုတ်ကုန်ပြသမှုနှင့် ဝယ်ယူမှုဆုံးဖြတ်ချက်ကို မြန်ဆန်စေသော လမ်းညွှန်အကူအညီကို ပံ့ပိုးပေးပါသည်။",
    humanAi: "လူကိုအထောက်အကူပြုသော AI",
    humanAiBody:
      "AI ကို မလိုအပ်သော ရှုပ်ထွေးမှုတိုးပွားစေရန် မဟုတ်ဘဲ မြန်ဆန်မှု၊ နားလည်ရလွယ်ကူမှု၊ သင်ယူမှုနှင့် ဆုံးဖြတ်ချက်ချမှုတို့ကို အထောက်အကူပြုရန် အသုံးပြုထားပါသည်။",
    trust: [
      "ဂျပန်တွင် တည်ဆောက်ထားသော စနစ်",
      "လက်တွေ့အသုံးပြုသူများအတွက် တန်ဖိုးရှိသော ထုတ်ကုန်များ",
      "ပညာရေး၊ အီလက်ထရောနစ်ကုန်သွယ်မှုနှင့် AI ကို ချိတ်ဆက်ထားသော ချိတ်ဆက်ထုတ်ကုန်စနစ်",
    ],
    featuredEyebrow: "အဓိကထုတ်ကုန်များ",
    featuredTitle: "My Tech Academia အောက်တွင် တိုးတက်ဖွံ့ဖြိုးလျက်ရှိသော ထုတ်ကုန်များ",
    featuredLead: "ဒစ်ဂျစ်တယ် ချိတ်ဆက်ထုတ်ကုန်စနစ်တစ်ခုအဖြစ် တည်ဆောက်လျက်ရှိသော ထုတ်ကုန်များ၏ လက်ရှိအခြေအနေကို မိတ်ဆက်ပေးထားပါသည်။",
    screensEyebrow: "မြင်ကွင်းများ",
    screensTitle: "ချိတ်ဆက်ထုတ်ကုန်စနစ်၏ ဦးတည်ချက်ကို မြင်ကွင်းပုံစံဖြင့် မိတ်ဆက်ခြင်း",
    screensLead:
      "လက်ရှိ ထုတ်ကုန်မြင်ကွင်းများကို ပင်မစာမျက်နှာတွင် တိုက်ရိုက်ပြသထားပြီး နောင်တွင် ပိုမိုအသေးစိတ်သော ဖန်သားပြင်ပုံများဖြင့် အဆင့်ဆင့် မွမ်းမံသွားမည်ဖြစ်ပါသည်။",
    screens: [
      {
        title: "WorkJapaneseGO အက်ပ်၏ အမှတ်တံဆိပ်မြင်ကွင်း",
        caption:
          "လက်တွေ့အသုံးချနိုင်သော ဂျပန်ဘာသာသင်ယူမှုနှင့် လမ်းညွှန်ပါဝင်သော သင်ယူမှုပုံရိပ်ကို ကိုယ်စားပြုသည့် WorkJapaneseGO ၏ အဓိကအက်ပ်အိုင်ကွန်ဖြစ်ပါသည်။",
        image: "/screenshots/work-japanese-go-appicon.png",
        alt: "WorkJapaneseGO အက်ပ်အိုင်ကွန်မြင်ကွင်း",
        featured: true,
      },
      {
        title: "ZayCho storefront ၏ အမှတ်တံဆိပ်မြင်ကွင်း",
        caption:
          "လမ်းညွှန်ပါဝင်သော ဝယ်ယူမှုနှင့် ဆုံးဖြတ်ချက်ချမှုမြန်ဆန်စေရန် ရည်ရွယ်ထားသော ZayCho ၏ ကုန်စုံနှင့် အီလက်ထရောနစ်ကုန်သွယ်မှုအတွေ့အကြုံကို ဖော်ပြသည့် အမှတ်တံဆိပ်မြင်ကွင်းဖြစ်ပါသည်။",
        image: "/screenshots/zaycho-brand.png",
        alt: "ZayCho storefront အမှတ်တံဆိပ်မြင်ကွင်း",
      },
      {
        title: "Tech Academia ပလက်ဖောင်းဦးတည်ချက်မြင်ကွင်း",
        caption:
          "နည်းပညာသင်ယူမှု၊ လမ်းညွှန်အကူအညီနှင့် လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်မှုတို့ကို ချိတ်ဆက်ထားသော AI သင်ယူမှုပလက်ဖောင်း၏ ဦးတည်ချက်ကို ဖော်ပြသည့် မြင်ကွင်းဖြစ်ပါသည်။",
        image: "/screenshots/tech-academia-dashboard.svg",
        alt: "Tech Academia ပလက်ဖောင်းဦးတည်ချက်မြင်ကွင်း",
      },
    ],
    buildEyebrow: "ကျွန်ုပ်တို့ တည်ဆောက်နေသောအရာများ",
    buildTitle: "ရှင်းလင်းသော အာရုံစိုက်မှုရှိသည့် ကိရိယာများနှင့် ချဲ့ထွင်နိုင်သော အခြေခံစနစ်",
    features: [
      ["ဘာသာစကားသင်ယူမှုအတွေ့အကြုံ", "နေ့စဉ်ဘဝနှင့် အလုပ်ခွင်တွင် လက်တွေ့အသုံးဝင်နိုင်စေရန် စီမံထားသော သင်ယူမှုကိရိယာများ။"],
      ["အီလက်ထရောနစ်ကုန်သွယ်မှုစနစ်", "အသုံးပြုသူများ ရွေးချယ်မှုလွယ်ကူစေရန်နှင့် ယုံကြည်စိတ်ချစွာ ဝယ်ယူနိုင်စေရန် စီမံထားသော စတိုးလမ်းကြောင်းများ။"],
      ["AI ဖြင့် လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်စေခြင်း", "ရှင်းလင်းမှု၊ လုပ်ဆောင်မှုမြန်ဆန်မှုနှင့် သင်ယူမှုထိရောက်မှု တိုးတက်စေရန် ရည်ရွယ်သော လုပ်ငန်းလမ်းကြောင်းများ။"],
      ["နည်းပညာပညာရေးပလက်ဖောင်း", "အင်ဂျင်နီယာသင်ယူမှုနှင့် ဒစ်ဂျစ်တယ်ကျွမ်းကျင်မှုတိုးတက်မှုကို ရေရှည်အခြေပြု အထောက်အပံ့ပေးနိုင်ရန် ရည်ရွယ်ထားသော ပလက်ဖောင်းဦးတည်ချက်။"],
    ],
    servicesEyebrow: "AI Website Support",
    servicesTitle: "အသေးစားလုပ်ငန်းများအတွက် လက်တွေ့အသုံးဝင်သော AI ဝဘ်ဆိုက်ပံ့ပိုးမှု",
    servicesLead:
      "My Tech Academia သည် ဝဘ်ဆိုက်စာသားကို ပိုမိုရှင်းလင်းထိရောက်အောင် ပြန်လည်ညှိနှိုင်းပေးခြင်း၊ ဘာသာစုံမက်ဆေ့ချ်တင်ဆက်မှုကို တစ်ပြေးညီစနစ်တကျ ပြုပြင်ပေးခြင်း၊ SEO အခြေခံပြင်ဆင်မှုများကို တိုးတက်စေခြင်းနှင့် AI အထောက်အကူပြု လုပ်ငန်းလည်ပတ်မှုစနစ်များကို အင်္ဂလိပ်၊ ဂျပန်နှင့် မြန်မာဘာသာဖြင့် လက်တွေ့အသုံးဝင်အောင် ပံ့ပိုးပေးပါသည်။",
    servicesStart: "အစပြုဈေးနှုန်း ¥10,000 မှ",
    servicesWhoFor:
      "အသေးစားလုပ်ငန်းများ၊ ပညာရေးဝန်ဆောင်မှုများ၊ အကြံပေးလုပ်ငန်းများ၊ ဘာသာစုံအသုံးပြုရသော ဝန်ဆောင်မှုလုပ်ငန်းများနှင့် ကိုယ်ပိုင် content team မရှိသေးဘဲ တစ်ပြေးညီ ဝဘ်ဆိုက်ပံ့ပိုးမှု လိုအပ်သော founder များအတွက် သင့်တော်ပါသည်။",
    services: [
      {
        name: "Starter",
        price: "¥10,000",
        body: "စာမျက်နှာတစ်ခုတည်းကို အဓိကထားပြီး စာသားရှင်းလင်းမှု၊ CTA ပြန်လည်ညှိနှိုင်းမှုနှင့် ပထမမြင်ကွင်းကို ပိုမိုယုံကြည်ဖွယ်ကောင်းစေရန် ပြင်ဆင်ပေးသည့် ဝန်ဆောင်မှုအစီအစဉ်ဖြစ်ပါသည်။",
        bullets: [
          "စာမျက်နှာ ၁ ခု စာသားပြန်လည်ပြင်ဆင်ခြင်း",
          "CTA စာသား ပြန်လည်ညှိနှိုင်းခြင်း",
          "အခြေခံ SEO title နှင့် meta description ပြင်ဆင်ခြင်း",
          "အင်္ဂလိပ် / ဂျပန် / မြန်မာ ဘာသာပံ့ပိုးမှု",
        ],
        cta: "Starter ကိုစတင်ရန်",
      },
      {
        name: "Growth",
        price: "¥15,000",
        body: "စာမျက်နှာ ၂ မှ ၃ ခုအထိကို တပြိုင်နက်ပြင်ဆင်ကာ homepage ဖွဲ့စည်းပုံ၊ service messaging နှင့် SEO စာသားအရည်အသွေးကို ပိုမိုတိုးတက်စေသော ဝန်ဆောင်မှုအစီအစဉ်ဖြစ်ပါသည်။",
        bullets: [
          "စာမျက်နှာ ၂ မှ ၃ ခု ပြင်ဆင်ခြင်း",
          "homepage နှင့် service page အရည်အသွေးမြှင့်တင်ခြင်း",
          "SEO စာသားအရည်အသွေး တိုးတက်စေခြင်း",
          "message clarity review",
        ],
        cta: "Growth ကိုရွေးရန်",
      },
      {
        name: "Monthly AI Web Support",
        price: "¥30,000 / လ",
        body: "လစဉ် page update များ၊ SEO စစ်ဆေးမှုများ၊ ဘာသာစုံ content ပံ့ပိုးမှုနှင့် AI-assisted website workflow ကို ဆက်တိုက်ပံ့ပိုးပေးသည့် လစဉ်ဝဘ်ဆိုက်ပံ့ပိုးမှု အစီအစဉ်ဖြစ်ပါသည်။",
        bullets: [
          "လစဉ် စာမျက်နှာအရည်အသွေး မြှင့်တင်မှုများ",
          "Search Console အခြေအနေကို ဆက်လက်စစ်ဆေးခြင်း",
          "social copy draft ၄ ခု ပြင်ဆင်ပေးခြင်း",
          "ဘာသာစုံ ဝဘ်ဆိုက်ပံ့ပိုးမှု",
          "QA နှင့် content review",
        ],
        cta: "Monthly Support မေးမြန်းရန်",
        featured: true,
      },
    ],
    updatesEyebrow: "လတ်တလောအခြေအနေများ",
    updatesTitle: "ချိတ်ဆက်ထုတ်ကုန်စနစ်အတွင်း လက်ရှိဆောင်ရွက်လျက်ရှိသော အဓိကအလုပ်များ",
    updates: [
      ["ZayCho မိုဘိုင်းအတွေ့အကြုံ", "လမ်းညွှန်ပါဝင်သော အီလက်ထရောနစ်ကုန်သွယ်မှု၊ ကုန်စုံအကူအညီနှင့် အထောက်အကူပြု ဝယ်ယူမှုလမ်းကြောင်းများကို ဝဘ်နှင့် မိုဘိုင်း နှစ်မျိုးစလုံးတွင် တိုးတက်အောင် ဆက်လက်ဖော်ဆောင်လျက်ရှိသည်။"],
      ["WorkJapaneseGO သင်ယူမှုလမ်းကြောင်း", "လက်တွေ့အသုံးချနိုင်သော ဂျပန်ဘာသာ၊ အသံအခြေပြု သင်ယူမှုအတွေ့အကြုံနှင့် အလုပ်ခွင်တွင် အသုံးဝင်သော စကားအသုံးအနှုန်းများကို ဆက်လက်တိုးတက်စေထားသည်။"],
      ["Tech Academia လမ်းပြမြေပုံ", "AI လမ်းညွှန်အကူအညီ၊ နည်းပညာသင်ယူမှုနှင့် လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်မှုတို့ကို ပလက်ဖောင်းတစ်ခုတည်းတွင် ချိတ်ဆက်နိုင်စေရန် ရေရှည်ဦးတည်ချက်ကို တည်ဆောက်လျက်ရှိသည်။"],
    ],
    deployEyebrow: "မိတ်ဆက်ဖြန့်ချိရန် ပြင်ဆင်မှု",
    deployTitle: "စိတ်ကြိုက်ဒိုမိန်းချိတ်ဆက်မှုနှင့် တရားဝင်ဖြန့်ချိမှုအတွက် အဆင်သင့်ဖြစ်နေသော အခြေခံဖွဲ့စည်းမှု",
    deployBody:
      "Vercel ဖြန့်ချိမှုကို ဦးတည်ပြီး လမ်းကြောင်းဖွဲ့စည်းပုံ၊ sitemap၊ robots နှင့် စိတ်ကြိုက်ဒိုမိန်းချိတ်ဆက်မှုတို့အထိ ထည့်သွင်းစဉ်းစားထားသော အခြေခံစနစ်ကို စနစ်တကျ တည်ဆောက်ထားပါသည်။",
    reviewRoutes: "လမ်းကြောင်းများကြည့်ရန်",
    launchSupport: "ဖြန့်ချိမှုအကူအညီ",
    contactTitle: "အတူတကွ တည်ဆောက်ဖွံ့ဖြိုး၍ ပူးပေါင်းဆောင်ရွက်နိုင်ပါသည်",
    contactBody:
      "ပူးပေါင်းဆောင်ရွက်မှု၊ လက်ခံဆောင်ရွက်သည့် စီမံကိန်းများ၊ ထုတ်ကုန်အကူအညီနှင့် အနာဂတ်ပူးပေါင်းလုပ်ဆောင်မှုများနှင့်စပ်လျဉ်း၍ စိတ်ဝင်စားပါက အချိန်မရွေး ဆက်သွယ်နိုင်ပါသည်။",
    getInTouch: "ဆက်သွယ်ရန်",
  },
} as const;

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string | string[] }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const lang = getLang(params?.lang);
  const t = copy[lang];
  const screenshotItems = lang === "my" ? [...copy.my.screens] : getHomepageScreenshots(lang);
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className={`hero-copy hero-copy--entrance ${lang === "my" ? "hero-copy--my" : ""}`}>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroBody}</p>
            <div className="hero-metrics">
              {t.metrics.map(([value, label]) => (
                <div key={label} className="metric-card">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <Link href={withLang("/projects", lang)} className="cta-chip cta-chip--solid">
                {t.explore}
              </Link>
              <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--ghost">
                {t.contact}
              </Link>
            </div>
          </div>
          <div className="hero-panel hero-panel--entrance">
            <div className="hero-showcase">
              <Link
                href={withLang("/work-japanese-go", lang)}
                className="showcase-window showcase-window--primary showcase-window--entrance-primary showcase-window--link"
              >
                <div className="showcase-window__badge">WorkJapaneseGO</div>
                <div className="showcase-window__cue">View project ↗</div>
                <div className="showcase-window__media">
                  <img
                    src="/screenshots/work-japanese-go-appicon.png"
                    alt="WorkJapaneseGO app icon"
                    className="showcase-window__logo"
                  />
                </div>
                <h3>{t.wgTitle}</h3>
                <p>{t.wgBody}</p>
              </Link>
              <Link
                href={withLang("/zaycho", lang)}
                className="showcase-window showcase-window--secondary showcase-window--entrance-secondary showcase-window--link"
              >
                <div className="showcase-window__badge">ZayCho</div>
                <div className="showcase-window__cue">View project ↗</div>
                <div className="showcase-window__media showcase-window__media--secondary">
                  <img
                    src="/screenshots/zaycho-brand.png"
                    alt="ZayCho storefront brand visual"
                    className="showcase-window__logo showcase-window__logo--secondary"
                  />
                </div>
                <h3>{t.zyTitle}</h3>
                <p>{t.zyBody}</p>
              </Link>
            </div>
            <Link
              href={withLang("/tech-academia", lang)}
              className={`mini-card mini-card--entrance mini-card--link ${lang === "my" ? "mini-card--my" : ""}`}
            >
              <div className="mini-card__brand">
                <img
                  src="/screenshots/tech-academia-appicon.png"
                  alt="Tech Academia app icon"
                  className="mini-card__brand-image"
                />
                <span className="mini-card__brand-label">Tech Academia</span>
              </div>
              <div className="mini-card__cue">View project ↗</div>
              <strong>{t.humanAi}</strong>
              <p className="mini-card__body">{t.humanAiBody}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container trust-bar">
          {t.trust.map((item) => (
            <div key={item} className="trust-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.featuredEyebrow}</div>
              <h2 className="section-title">{t.featuredTitle}</h2>
            </div>
            <p className="section-lead">{t.featuredLead}</p>
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
              <div className="eyebrow">{t.screensEyebrow}</div>
              <h2 className="section-title">{t.screensTitle}</h2>
            </div>
            <p className="section-lead">{t.screensLead}</p>
          </div>
          <ScreenshotShowcase items={screenshotItems} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.buildEyebrow}</div>
              <h2 className="section-title">{t.buildTitle}</h2>
            </div>
          </div>
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

      <section className="section section--services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.servicesEyebrow}</div>
              <h2 className="section-title">{t.servicesTitle}</h2>
            </div>
            <div className="services-section-meta">
              <p className="section-lead">{t.servicesLead}</p>
              <span className="services-start-note">{t.servicesStart}</span>
            </div>
          </div>
          <div className="services-grid">
            {t.services.map((service) => (
              <article
                key={service.name}
                className={`service-card${"featured" in service && service.featured ? " service-card--highlight" : ""}`}
              >
                <div className="service-card__top">
                  <div>
                    <div className="project-tag">Service Package</div>
                    <h3>{service.name}</h3>
                  </div>
                  <div className="service-price">{service.price}</div>
                </div>
                <p>{service.body}</p>
                <ul className="service-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="service-card__footer">
                  <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--ghost">
                    {service.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="copy-block services-copy-block">
            <strong>{t.servicesWhoFor}</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.updatesEyebrow}</div>
              <h2 className="section-title">{t.updatesTitle}</h2>
            </div>
          </div>
          <div className="updates-grid">
            {t.updates.map(([title, body]) => (
              <article key={title} className="update-card">
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="deploy-strip reveal-band reveal-band--primary">
            <div>
              <div className="eyebrow">{t.deployEyebrow}</div>
              <h2>{t.deployTitle}</h2>
              <p>{t.deployBody}</p>
            </div>
            <div className="deploy-strip__actions">
              <Link href={withLang("/projects", lang)} className="cta-chip cta-chip--solid">
                {t.reviewRoutes}
              </Link>
              <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--ghost">
                {t.launchSupport}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-band reveal-band reveal-band--secondary">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
            <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--ghost">
              {t.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

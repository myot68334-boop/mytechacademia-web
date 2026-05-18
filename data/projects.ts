export type Project = {
  slug: string;
  name: string;
  thumbnail: string;
  thumbnailAlt: { en: string; ja: string; my: string };
  tag: { en: string; ja: string; my: string };
  description: { en: string; ja: string; my: string };
  audience: { en: string; ja: string; my: string };
  cta: { en: string; ja: string; my: string };
};

export const projects: Project[] = [
  {
    slug: "work-japanese-go",
    name: "WorkJapaneseGO",
    thumbnail: "/screenshots/work-japanese-go-appicon.png",
    thumbnailAlt: {
      en: "WorkJapaneseGO app icon",
      ja: "WorkJapaneseGO アプリアイコン",
      my: "WorkJapaneseGO အက်ပ်အိုင်ကွန်",
    },
    tag: { en: "Language Learning", ja: "日本語学習", my: "ဂျပန်ဘာသာသင်ယူမှု" },
    description: {
      en: "Practical Japanese learning for daily life and work, built for learners who want useful phrases, clear examples, and real-world speaking support.",
      ja: "日常生活や仕事ですぐ使える日本語を学ぶためのアプリです。実用的なフレーズ、分かりやすい例、実際の会話に近いサポートを重視しています。",
      my: "နေ့စဉ်ဘဝနှင့် အလုပ်ခွင်တွင် ချက်ချင်းအသုံးချနိုင်သော ဂျပန်ဘာသာစကားကို သင်ယူနိုင်ရန် ဖန်တီးထားသော အက်ပ်ဖြစ်ပါသည်။",
    },
    audience: {
      en: "Learners, workers, beginners in Japan",
      ja: "日本で学ぶ人、働く人、日本語初学者",
      my: "ဂျပန်နိုင်ငံတွင် သင်ယူနေသူများ၊ အလုပ်လုပ်နေသူများနှင့် ဂျပန်ဘာသာ စတင်သင်ယူသူများ",
    },
    cta: { en: "Try the App", ja: "アプリを見る", my: "အက်ပ်ကြည့်ရန်" },
  },
  {
    slug: "zaycho",
    name: "ZayCho",
    thumbnail: "/screenshots/zaycho-brand.png",
    thumbnailAlt: {
      en: "ZayCho storefront brand visual",
      ja: "ZayCho ストアフロントのブランドビジュアル",
      my: "ZayCho storefront အမှတ်တံဆိပ်မြင်ကွင်း",
    },
    tag: { en: "Guided Ecommerce", ja: "ガイド付きEC", my: "လမ်းညွှန်ပါဝင်သော အီလက်ထရောနစ်ကုန်သွယ်မှု" },
    description: {
      en: "A guided grocery and ecommerce experience that helps users choose products faster through recommendations, budget-based shopping, and assisted buying flows.",
      ja: "おすすめ提案、予算ベースの買い物、サポート付き導線によって、商品選びをもっと早く簡単にする食料品・EC体験です。",
      my: "အကြံပြုစနစ်၊ ဘတ်ဂျက်အခြေခံ ဝယ်ယူမှုနှင့် လမ်းညွှန်အကူအညီပေးသည့် လမ်းကြောင်းများဖြင့် ရွေးချယ်မှုကို ပိုမိုမြန်ဆန်လွယ်ကူစေသော ကုန်စုံနှင့် အီလက်ထရောနစ်ကုန်သွယ်မှုထုတ်ကုန်ဖြစ်ပါသည်။",
    },
    audience: {
      en: "Online shoppers, families, grocery buyers",
      ja: "ネット利用者、家族向けの買い物客、食料品購入者",
      my: "အွန်လိုင်းဝယ်ယူမှု အသုံးပြုသူများ၊ မိသားစုအတွက် ဝယ်ယူသူများနှင့် ကုန်စုံဝယ်ယူသူများ",
    },
    cta: { en: "Open Store", ja: "ストアを見る", my: "စတိုးကြည့်ရန်" },
  },
  {
    slug: "tech-academia",
    name: "Tech Academia",
    thumbnail: "/screenshots/tech-academia-appicon.png",
    thumbnailAlt: {
      en: "Tech Academia app icon",
      ja: "Tech Academia アプリアイコン",
      my: "Tech Academia အက်ပ်အိုင်ကွန်",
    },
    tag: { en: "AI Learning Platform", ja: "AI学習プラットフォーム", my: "AI သင်ယူမှုပလက်ဖောင်း" },
    description: {
      en: "An AI-first platform for technical study, engineering support, productivity, and future voice-based learning experiences.",
      ja: "技術学習、エンジニア支援、生産性向上、将来の音声学習体験まで見据えたAI中心の学習プラットフォームです。",
      my: "နည်းပညာသင်ယူမှု၊ အင်ဂျင်နီယာအထောက်အပံ့၊ လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်မှုနှင့် အနာဂတ် အသံအခြေပြု သင်ယူမှုအတွေ့အကြုံအထိ ရည်ရွယ်ထားသော AI အခြေပြု သင်ယူမှုပလက်ဖောင်းဖြစ်ပါသည်။",
    },
    audience: {
      en: "Students, technical learners, professionals",
      ja: "学生、技術学習者、実務者",
      my: "ကျောင်းသားများ၊ နည်းပညာသင်ယူသူများနှင့် လက်တွေ့လုပ်ငန်းအသုံးပြုသူများ",
    },
    cta: { en: "See the Roadmap", ja: "ロードマップを見る", my: "လမ်းပြမြေပုံကြည့်ရန်" },
  },
];

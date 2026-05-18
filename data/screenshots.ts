import type { Lang } from "../lib/i18n";

export type ScreenshotItem = {
  title: string;
  caption: string;
  image: string;
  alt: string;
  featured?: boolean;
};

type LocalizedScreenshot = {
  title: Record<Lang, string>;
  caption: Record<Lang, string>;
  alt: Record<Lang, string>;
  image: string;
  featured?: boolean;
};

function localize(items: readonly LocalizedScreenshot[], lang: Lang): ScreenshotItem[] {
  return items.map((item) => ({
    title: item.title[lang],
    caption: item.caption[lang],
    alt: item.alt[lang],
    image: item.image,
    featured: item.featured,
  }));
}

const homepageSource: LocalizedScreenshot[] = [
  {
    title: {
      en: "WorkJapaneseGO app icon and brand identity",
      ja: "WorkJapaneseGO アプリアイコンとブランドイメージ",
      my: "WorkJapaneseGO အက်ပ်အိုင်ကွန်နှင့် အမှတ်တံဆိပ်မြင်ကွင်း",
    },
      caption: {
        en: "The core app icon used to anchor WorkJapaneseGO across mobile touchpoints, combining practical Japanese learning with a confident guided-learning identity.",
        ja: "実用的な日本語学習とガイド型の学習体験を象徴する、WorkJapaneseGO の主要アプリアイコンです。",
        my: "လက်တွေ့အသုံးချနိုင်သော ဂျပန်ဘာသာသင်ယူမှုနှင့် လမ်းညွှန်ပါဝင်သော သင်ယူမှုပုံရိပ်ကို ကိုယ်စားပြုသည့် WorkJapaneseGO ၏ အဓိကအက်ပ်အိုင်ကွန်ဖြစ်ပါသည်။",
    },
    alt: {
      en: "WorkJapaneseGO app icon visual",
      ja: "WorkJapaneseGO のアプリアイコンビジュアル",
      my: "WorkJapaneseGO အက်ပ်အိုင်ကွန်မြင်ကွင်း",
    },
    image: "/screenshots/work-japanese-go-appicon.png",
    featured: true,
  },
  {
    title: {
      en: "ZayCho storefront brand visual",
      ja: "ZayCho ストアフロントのブランドビジュアル",
      my: "ZayCho storefront ၏ အမှတ်တံဆိပ်မြင်ကွင်း",
    },
      caption: {
        en: "A live brand visual from ZayCho's grocery and ecommerce experience, built around guided shopping and faster decisions.",
        ja: "案内付きの買い物導線と素早い購入判断を軸にした、ZayCho の食料品・EC体験を示すブランドビジュアルです。",
        my: "လမ်းညွှန်ပါဝင်သော ဝယ်ယူမှုနှင့် ဆုံးဖြတ်ချက်ချမှုမြန်ဆန်စေရန် အခြေခံထားသော ZayCho ၏ ကုန်စုံနှင့် အီလက်ထရောနစ်ကုန်သွယ်မှုအတွေ့အကြုံကို ဖော်ပြသည့် အမှတ်တံဆိပ်မြင်ကွင်းဖြစ်ပါသည်။",
    },
    alt: {
      en: "ZayCho brand storefront visual",
      ja: "ZayCho のブランドストアビジュアル",
        my: "ZayCho storefront အမှတ်တံဆိပ်မြင်ကွင်း",
    },
    image: "/screenshots/zaycho-brand.png",
  },
  {
    title: {
      en: "Tech Academia app icon and platform identity",
      ja: "Tech Academia アプリアイコンとプラットフォームイメージ",
      my: "Tech Academia အက်ပ်အိုင်ကွန်နှင့် ပလက်ဖောင်းအမှတ်တံဆိပ်မြင်ကွင်း",
    },
      caption: {
        en: "A branded icon visual representing the AI-first platform direction for technical study, tutoring, and productivity.",
        ja: "技術学習、チュータリング、生産性向上を束ねる AI 学習プラットフォームの方向性を示すアプリアイコンです。",
        my: "နည်းပညာသင်ယူမှု၊ လမ်းညွှန်အကူအညီနှင့် လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်မှုတို့ကို ချိတ်ဆက်ထားသော AI သင်ယူမှုပလက်ဖောင်း၏ ဦးတည်ချက်ကို ကိုယ်စားပြုသည့် အက်ပ်အိုင်ကွန်ဖြစ်ပါသည်။",
    },
    alt: {
      en: "Tech Academia app icon visual",
      ja: "Tech Academia アプリアイコンビジュアル",
      my: "Tech Academia အက်ပ်အိုင်ကွန်မြင်ကွင်း",
    },
    image: "/screenshots/tech-academia-appicon.png",
  },
];

const gallerySource = {
  workJapaneseGo: [
    {
      title: {
        en: "Branded splash experience",
        ja: "ブランドスプラッシュの体験設計",
        my: "အမှတ်တံဆိပ်ပါဝင်သော စတင်ဖွင့်မြင်ကွင်း",
      },
      caption: {
        en: "The current launch visual used for WorkJapaneseGO's mobile learning experience.",
        ja: "WorkJapaneseGO のモバイル学習体験で現在使用している起動画面ビジュアルです。",
        my: "WorkJapaneseGO ၏ မိုဘိုင်းသင်ယူမှုအတွေ့အကြုံတွင် လက်ရှိအသုံးပြုထားသော စတင်ဖွင့်မြင်ကွင်းဖြစ်ပါသည်။",
      },
      alt: {
        en: "WorkJapaneseGO splash visual",
        ja: "WorkJapaneseGO のスプラッシュビジュアル",
        my: "WorkJapaneseGO စတင်ဖွင့်မြင်ကွင်း",
      },
      image: "/screenshots/work-japanese-go-splash.png",
    },
    {
      title: {
        en: "App icon and identity system",
        ja: "アプリアイコンと識別システム",
        my: "အက်ပ်အိုင်ကွန်နှင့် အမှတ်တံဆိပ်ခွဲခြားမှုစနစ်",
      },
      caption: {
        en: "A real app-brand asset that anchors the Japanese-learning product across iOS and Android.",
        ja: "iOS と Android の両方で日本語学習プロダクトを支える実在のブランドアセットです。",
        my: "iOS နှင့် Android နှစ်မျိုးစလုံးတွင် ဂျပန်ဘာသာသင်ယူမှုထုတ်ကုန်ကို ခိုင်မာစေသော အမှတ်တံဆိပ်အိုင်ကွန်ဖြစ်ပါသည်။",
      },
      alt: {
        en: "WorkJapaneseGO app icon visual",
        ja: "WorkJapaneseGO のアプリアイコンビジュアル",
        my: "WorkJapaneseGO အက်ပ်အိုင်ကွန်မြင်ကွင်း",
      },
      image: "/screenshots/work-japanese-go-appicon.png",
      featured: true,
    },
  ],
  zaycho: [
    {
      title: {
        en: "ZayCho core brand visual",
        ja: "ZayCho コアブランドビジュアル",
        my: "ZayCho အဓိက အမှတ်တံဆိပ်မြင်ကွင်း",
      },
      caption: {
        en: "A current branded commerce visual representing ZayCho's online shopping and grocery direction.",
        ja: "ZayCho のオンラインショッピングと食料品ECの方向性を示す現在のブランドビジュアルです。",
        my: "ZayCho ၏ အွန်လိုင်းဝယ်ယူမှုနှင့် ကုန်စုံဝယ်ယူမှုဦးတည်ချက်ကို ဖော်ပြသော လက်ရှိ အမှတ်တံဆိပ်မြင်ကွင်းဖြစ်ပါသည်။",
      },
      alt: {
        en: "ZayCho brand visual",
        ja: "ZayCho のブランドビジュアル",
        my: "ZayCho အမှတ်တံဆိပ်မြင်ကွင်း",
      },
      image: "/screenshots/zaycho-brand.png",
    },
    {
      title: {
        en: "Real grocery product showcase",
        ja: "実際の食料品プロダクト紹介",
        my: "တကယ့် grocery ထုတ်ကုန်ပြသမြင်ကွင်း",
      },
      caption: {
        en: "A live product capture from the grocery catalog, useful for category-led shopping stories and merchandising.",
        ja: "カテゴリ訴求やマーチャンダイジングに活用しやすい、実際の食料品カタログ画面キャプチャです。",
        my: "အမျိုးအစားအခြေပြု ဝယ်ယူမှုဖော်ပြချက်များနှင့် ထုတ်ကုန်တင်ပြမှုများအတွက် အသုံးဝင်သော ကုန်စုံထုတ်ကုန်ဖန်သားပြင်ပုံဖြစ်ပါသည်။",
      },
      alt: {
        en: "ZayCho grocery product capture",
        ja: "ZayCho の食料品プロダクト画面",
        my: "ZayCho grocery ထုတ်ကုန်မြင်ကွင်း",
      },
      image: "/screenshots/zaycho-grocery-pack.png",
    },
  ],
  techAcademia: [
    {
      title: {
        en: "Platform overview",
        ja: "プラットフォーム全体像",
        my: "ပလက်ဖောင်းအကျဉ်းချုပ်မြင်ကွင်း",
      },
      caption: {
        en: "A premium AI dashboard concept for structured technical learning and productivity.",
        ja: "構造化された技術学習と生産性向上を支える、AIダッシュボードの構想ビジュアルです。",
        my: "ဖွဲ့စည်းတကျ နည်းပညာသင်ယူမှုနှင့် လုပ်ငန်းစွမ်းဆောင်ရည်တိုးတက်မှုကို ပံ့ပိုးနိုင်ရန် ရည်ရွယ်သည့် AI dashboard ဦးတည်ချက်မြင်ကွင်းဖြစ်ပါသည်။",
      },
      alt: {
        en: "Tech Academia dashboard concept visual",
        ja: "Tech Academia ダッシュボード構想ビジュアル",
        my: "Tech Academia dashboard ဦးတည်ချက်မြင်ကွင်း",
      },
      image: "/screenshots/tech-academia-dashboard.svg",
    },
    {
      title: {
        en: "Session workspace",
        ja: "学習セッションのワークスペース",
        my: "သင်ယူမှု session workspace",
      },
      caption: {
        en: "A future-facing study session concept with voice, tutor modes, and focused subject support.",
        ja: "音声対応、チューターモード、科目別サポートを備えた将来の学習セッションを想定したビジュアルです。",
        my: "အသံအခြေပြု အကူအညီ၊ လမ်းညွှန်သင်ယူမှုမုဒ်များနှင့် ဘာသာရပ်အလိုက် အထောက်အပံ့တို့ပါဝင်သော အနာဂတ်သင်ယူမှု session ဦးတည်ချက်မြင်ကွင်းဖြစ်ပါသည်။",
      },
      alt: {
        en: "Tech Academia session concept visual",
        ja: "Tech Academia セッション構想ビジュアル",
        my: "Tech Academia သင်ယူမှု session ဦးတည်ချက်မြင်ကွင်း",
      },
      image: "/screenshots/tech-academia-session.svg",
    },
  ],
} as const;

export function getHomepageScreenshots(lang: Lang): ScreenshotItem[] {
  return localize(homepageSource, lang);
}

export function getProjectGallery(lang: Lang) {
  return {
    workJapaneseGo: localize(gallerySource.workJapaneseGo, lang),
    zaycho: localize(gallerySource.zaycho, lang),
    techAcademia: localize(gallerySource.techAcademia, lang),
  };
}

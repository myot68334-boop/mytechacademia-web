"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { getLang, withLang } from "../lib/i18n";

const copy = {
  en: {
    eyebrow: "Page not found",
    title: "That page is not available.",
    body:
      "The link may be outdated, the page may have moved, or the address may have been entered incorrectly. You can return to the homepage or continue exploring the current product pages.",
    primary: "Back to Home",
    secondary: "View Projects",
    metaLabel: "Requested path",
  },
  ja: {
    eyebrow: "ページが見つかりません",
    title: "お探しのページは表示できませんでした。",
    body:
      "リンクの更新、ページ移動、またはURL入力の誤りが原因で、このページをご案内できない可能性があります。ホームへ戻るか、現在公開中のプロダクト一覧をご覧ください。",
    primary: "ホームへ戻る",
    secondary: "プロジェクトを見る",
    metaLabel: "アクセスされたパス",
  },
  my: {
    eyebrow: "စာမျက်နှာမတွေ့ရှိပါ",
    title: "သင်ရှာဖွေနေသော စာမျက်နှာကို ဖော်ပြ၍မရပါ။",
    body:
      "လင့်ခ်အဟောင်းဖြစ်နေခြင်း၊ စာမျက်နှာရွှေ့ပြောင်းထားခြင်း သို့မဟုတ် လိပ်စာရိုက်ထည့်မှုမမှန်ခြင်းတို့ကြောင့် ဖြစ်နိုင်ပါသည်။ ပင်မစာမျက်နှာသို့ ပြန်သွားနိုင်သကဲ့သို့ လက်ရှိထုတ်ကုန်စာမျက်နှာများကိုလည်း ဆက်လက်ကြည့်ရှုနိုင်ပါသည်။",
    primary: "ပင်မစာမျက်နှာသို့",
    secondary: "ထုတ်ကုန်များကြည့်ရန်",
    metaLabel: "တောင်းဆိုထားသော လမ်းကြောင်း",
  },
} as const;

function NotFoundInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const lang = getLang(searchParams.get("lang") ?? undefined);
  const t = copy[lang];

  return (
    <section className="section">
      <div className="container">
        <div className="not-found-card">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="section-title">{t.title}</h1>
          <p className="section-lead">{t.body}</p>
          <div className="hero-actions">
            <Link className="cta-chip cta-chip--solid" href={withLang("/", lang)}>
              {t.primary}
            </Link>
            <Link className="cta-chip cta-chip--ghost" href={withLang("/projects", lang)}>
              {t.secondary}
            </Link>
          </div>
          <p className="not-found-card__meta">
            <strong>{t.metaLabel}:</strong> <code>{pathname}</code>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundInner />
    </Suspense>
  );
}

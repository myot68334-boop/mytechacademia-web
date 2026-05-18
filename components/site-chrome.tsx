"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import type { Lang } from "../lib/i18n";
import { getLang, withLang } from "../lib/i18n";

const navCopy = {
  en: {
    eyebrow: "Digital Product Studio",
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    getInTouch: "Get in Touch",
    footerTagline: "A home for learning, AI, and digital products.",
    privacy: "Privacy",
    terms: "Terms",
  },
  ja: {
    eyebrow: "デジタルプロダクトスタジオ",
    home: "ホーム",
    projects: "プロジェクト",
    about: "紹介",
    contact: "お問い合わせ",
    getInTouch: "相談する",
    footerTagline: "学び、AI、デジタルプロダクトのための拠点。",
    privacy: "プライバシー",
    terms: "利用規約",
  },
  my: {
    eyebrow: "ဒစ်ဂျစ်တယ်ပရိုဒတ် စတူဒီယို",
    home: "ပင်မစာမျက်နှာ",
    projects: "ထုတ်ကုန်ပစ္စည်းများ",
    about: "မိတ်ဆက်",
    contact: "ဆက်သွယ်ရန်",
    getInTouch: "တိုင်ပင်ဆွေးနွေးရန်",
    footerTagline: "ပညာရေး၊ AI နှင့် ဒစ်ဂျစ်တယ်ပရိုဒတ်များအတွက် Platform",
    privacy: "ကိုယ်ရေးအချက်အလက်မူဝါဒ",
    terms: "အသုံးပြုမှုစည်းမျဉ်း",
  },
} as const;

const navItems = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/work-japanese-go", label: "WorkJapaneseGO" },
  { href: "/zaycho", label: "ZayCho" },
  { href: "/tech-academia", label: "Tech Academia" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

function langHref(pathname: string, lang: Lang) {
  return lang === "en" ? pathname || "/" : withLang(pathname || "/", lang);
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const lang = getLang(searchParams.get("lang") ?? undefined);
  const copy = navCopy[lang];

  return (
    <div className={`site-shell site-shell--${lang}`}>
      <header className="site-header">
        <div className={`container site-header__row ${lang === "my" ? "site-header__row--my" : ""}`}>
          <Link href={withLang("/", lang)} className="brand-mark">
            <span className="brand-mark__eyebrow">{copy.eyebrow}</span>
            <span className="brand-mark__name">My Tech Academia</span>
          </Link>
          <nav className={`nav-links ${lang === "my" ? "nav-links--my" : ""}`}>
            {navItems.map((item) => (
              <Link key={item.href} href={withLang(item.href, lang)} className="nav-link">
                {"key" in item ? copy[item.key] : item.label}
              </Link>
            ))}
          </nav>
          <div className="site-header__tools">
            <div className="lang-switcher">
              <Link
                href={langHref(pathname, "en")}
                className={`lang-chip ${lang === "en" ? "lang-chip--active" : ""}`}
              >
                EN
              </Link>
              <Link
                href={langHref(pathname, "ja")}
                className={`lang-chip ${lang === "ja" ? "lang-chip--active" : ""}`}
              >
                日本語
              </Link>
              <Link
                href={langHref(pathname, "my")}
                className={`lang-chip ${lang === "my" ? "lang-chip--active" : ""}`}
              >
                မြန်မာ
              </Link>
            </div>
            <Link href={withLang("/contact", lang)} className="cta-chip cta-chip--solid">
              {copy.getInTouch}
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container site-footer__row">
          <div>
            <strong>My Tech Academia</strong>
            <div>{copy.footerTagline}</div>
          </div>
          <div className="nav-links">
            <Link href={withLang("/projects", lang)}>{copy.projects}</Link>
            <Link href={withLang("/about", lang)}>{copy.about}</Link>
            <Link href={withLang("/contact", lang)}>{copy.contact}</Link>
            <Link href={withLang("/privacy", lang)}>{copy.privacy}</Link>
            <Link href={withLang("/terms", lang)}>{copy.terms}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

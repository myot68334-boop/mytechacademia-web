export type Lang = "en" | "ja" | "my";

export function getLang(value?: string | string[]): Lang {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (candidate === "ja") return "ja";
  if (candidate === "my") return "my";
  return "en";
}

export function withLang(href: string, lang: Lang): string {
  if (lang === "en") return href;
  return href.includes("?") ? `${href}&lang=${lang}` : `${href}?lang=${lang}`;
}

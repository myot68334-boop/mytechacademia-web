import Link from "next/link";
import type { Project } from "../data/projects";
import type { Lang } from "../lib/i18n";
import { withLang } from "../lib/i18n";

export function ProjectCard({
  project,
  lang,
  index = 0,
}: {
  project: Project;
  lang: Lang;
  index?: number;
}) {
  return (
    <article className="project-card reveal-card" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="project-thumb">
        <img
          src={project.thumbnail}
          alt={project.thumbnailAlt[lang]}
          className="project-thumb__image"
        />
      </div>
      <span className="project-tag">{project.tag[lang]}</span>
      <h3>{project.name}</h3>
      <p>{project.description[lang]}</p>
      <p>
        <strong>{lang === "ja" ? "おすすめ対象:" : lang === "my" ? "အသုံးပြုရန် သင့်တော်သူများ:" : "Best for:"}</strong>{" "}
        {project.audience[lang]}
      </p>
      <div className="project-actions">
        <Link href={withLang(`/${project.slug}`, lang)} className="cta-chip cta-chip--solid">
          {project.cta[lang]}
        </Link>
        <Link href={withLang("/projects", lang)} className="cta-chip cta-chip--ghost">
          {lang === "ja" ? "プロジェクト一覧を見る" : lang === "my" ? "ထုတ်ကုန်များကြည့်ရန်" : "View Projects"}
        </Link>
      </div>
    </article>
  );
}

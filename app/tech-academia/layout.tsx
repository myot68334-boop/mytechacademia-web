import type { ReactNode } from "react";
import { TechAcademiaAuthShell } from "../../components/tech-academia/auth-shell";

export default function TechAcademiaLayout({ children }: { children: ReactNode }) {
  return <TechAcademiaAuthShell>{children}</TechAcademiaAuthShell>;
}

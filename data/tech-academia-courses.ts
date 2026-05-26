export type TechAcademiaCourse = {
  id: string;
  title: string;
  description: string;
  totalLessons: number;
};

export const techAcademiaCourses: TechAcademiaCourse[] = [
  {
    id: "architecture",
    title: "Architecture Studio",
    description: "Guided passive design retrofits, bilingual narratives, and client-ready decks.",
    totalLessons: 12,
  },
  {
    id: "structural",
    title: "Structural Engineering",
    description: "Applied load path analysis with AI-generated explanations and review checklists.",
    totalLessons: 10,
  },
  {
    id: "autocad",
    title: "AutoCAD Layer Systems",
    description: "Layer standards, annotation best practices, and AI-assisted drafting drills.",
    totalLessons: 8,
  },
  {
    id: "revit",
    title: "Revit Coordination",
    description: "Family management, parametric workflows, and shared parameter routines.",
    totalLessons: 9,
  },
  {
    id: "bim",
    title: "BIM Operations",
    description: "Model checking, data handoff, and bilingual QA workflows.",
    totalLessons: 8,
  },
  {
    id: "quantity",
    title: "Quantity Survey",
    description: "Take-off logic, cost tracking sheets, and AI-reviewed adjustments.",
    totalLessons: 7,
  },
  {
    id: "math",
    title: "Mathematics Refresh",
    description: "Core math for entrance exams with voice rehearsals and shared notebooks.",
    totalLessons: 6,
  },
  {
    id: "physics",
    title: "Physics Foundations",
    description: "Mechanics, materials, and scenario-based coaching for technical interviews.",
    totalLessons: 6,
  },
];

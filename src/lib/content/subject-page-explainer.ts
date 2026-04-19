export interface SubjectFeature {
  title: string;
  description: string;
  icon: string;
  accent: "orange" | "violet" | "emerald" | "sky" | "rose";
}

export interface SubjectPageExplainerContent {
  badgeLabel: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subtitle: string;
  features: SubjectFeature[];
}

export const subjectPageExplainerContent: SubjectPageExplainerContent = {
  badgeLabel: "What You Get on Every Subject Page?",
  headlinePrefix: "Every Subject. Everything You Need.",
  headlineHighlight: "One Page.",
  headlineSuffix: "",
  subtitle:
    "When you look up a subject on BTechTutor, you don't get a link to a PDF somewhere on Google Drive. You get everything — structured, in one place, actually organised by the way KTU exams work.",
  features: [
    {
      title: "Syllabus",
      description:
        "Complete module-by-module KTU syllabus for the subject.",
      icon: "ClipboardList",
      accent: "orange",
    },
    {
      title: "PDF Notes",
      description:
        "Chapter-wise notes prepared by experienced faculty, aligned to the KTU question pattern.",
      icon: "FileText",
      accent: "violet",
    },
    {
      title: "Previous Year Papers",
      description:
        "University exam papers from past years with solutions.",
      icon: "ScrollText",
      accent: "emerald",
    },
    {
      title: "Video Classes",
      description:
        "Module-wise video lectures you can watch before class or before the exam.",
      icon: "PlayCircle",
      accent: "sky",
    },
    {
      title: "Marathon Class",
      description:
        "A full-length revision session covering the entire subject before exams.",
      icon: "Trophy",
      accent: "rose",
    },
  ],
};

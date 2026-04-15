export interface WhyUsPillar {
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsContent {
  badgeLabel: string;
  headline: string;
  gooeyTexts: string[];
  paragraphs: string[];
  pillars: WhyUsPillar[];
}

export const whyUsContent: WhyUsContent = {
  badgeLabel: "Who Are We?",
  headline: "Welcome to BTechTutor",
  gooeyTexts: [
    "Where Students Actually Learn",
    "Built for Kerala Engineers",
    "From Backlogs to Top CGPAs",
    "15 Years of Real Results",
  ],
  paragraphs: [
    "Most engineering students in Kerala have sat through classes where the teacher finished the syllabus and moved on, but the student was still trying to understand the third slide from twenty minutes ago. That is not learning. That is coverage.",
    "BTechTutor was built on a different philosophy. We believe every student can understand every subject — if it is explained clearly, patiently, and with genuine attention to how that individual student thinks.",
    "We started as a small coaching team in Kerala. Over fifteen years, we have helped more than five thousand engineering students — students with backlogs, students aiming for top CGPAs, students preparing for GATE, students from across Kerala, and Indian students studying abroad — all find their footing in engineering subjects that once felt impossible.",
    "Our faculty are not just qualified teachers. They are people who have sat in the same seats you are sitting in, faced the same exams you are facing, and figured out exactly what it takes to clear them.",
  ],
  pillars: [
    {
      title: "KTU BTech Coaching",
      description:
        "Complete coverage of KTU 2019 and 2024 scheme across all departments — EEE, ECE, CS, IT, Civil, and Mechanical. Notes, question papers, video classes, and demo sessions for every subject in every semester.",
      icon: "GraduationCap",
    },
    {
      title: "GATE Preparation",
      description:
        "Dedicated coaching for GATE ECE, EEE, and Instrumentation Engineering. Subject-wise classes, previous year paper analysis, mock tests, and cutoff guidance. One of the few Kerala-based coaching programmes that takes GATE seriously as a career path.",
      icon: "Target",
    },
    {
      title: "One-to-One Personal Tuition",
      description:
        "A dedicated faculty member who teaches only you, at your pace, on your schedule. The fastest way to clear a backlog, fix a falling CGPA, or master a subject that has been giving you trouble for months.",
      icon: "UserCheck",
    },
  ],
};

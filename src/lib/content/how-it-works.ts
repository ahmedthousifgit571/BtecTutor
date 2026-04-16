export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
  gradient: "orange" | "purple" | "emerald" | "sky";
}

export interface HowItWorksContent {
  badgeLabel: string;
  headlineHighlight: string;
  headlineWords: string[];
  headlineSeparator: string;
  steps: HowItWorksStep[];
}

export const howItWorksContent: HowItWorksContent = {
  badgeLabel: "How It Works",
  headlineHighlight: "How BTechTutor Works",
  headlineWords: ["Simple", "Clear", "No Surprises"],
  headlineSeparator: ", ",
  steps: [
    {
      stepNumber: 1,
      title: "Book Your Free Demo",
      description:
        "Fill a simple form with your department, semester, and the subject you need help with. No payment. No commitment. Just tell us what you're struggling with.",
      icon: "CalendarCheck",
      gradient: "orange",
    },
    {
      stepNumber: 2,
      title: "Meet Your Faculty",
      description:
        "We match you with the right faculty member based on your subject and requirements. Your first class is completely free — so you can see the teaching style, ask questions, and decide if BTechTutor is the right fit for you.",
      icon: "Users",
      gradient: "purple",
    },
    {
      stepNumber: 3,
      title: "Start Learning on Your Schedule",
      description:
        "Once you're enrolled, your classes begin on your chosen timing. Live classes, recorded sessions, notes, and question papers — everything is on our platform, accessible from your phone or laptop, any time you need it.",
      icon: "PlayCircle",
      gradient: "emerald",
    },
    {
      stepNumber: 4,
      title: "Track Your Progress",
      description:
        "Regular mock tests, performance reviews, and doubt-clearing sessions keep you on track. You always know where you stand and what to focus on next.",
      icon: "TrendingUp",
      gradient: "sky",
    },
  ],
};

export interface WhyUsFeature {
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsContent {
  badgeLabel: string;
  headline: string;
  gooeyTexts: string[];
  paragraphs: string[];
  features: WhyUsFeature[];
}

export const whyUsContent: WhyUsContent = {
  badgeLabel: "Who Are We?",
  headline: "Welcome To Btech Tutor -",
  gooeyTexts: [
    "Your Learning Path",
    "In Kerala",
    "Your Success Story",
    "Starts Here",
  ],
  paragraphs: [
    '<a href="#" class="font-semibold text-brand-orange hover:underline transition-colors">BTech Tutor</a> is your trusted destination for the best BTech tuition in Kerala, helping students master engineering subjects through structured online classes and personal mentorship. With experienced faculty, focused <a href="#" class="font-semibold text-brand-orange hover:underline transition-colors">GATE coaching</a>, and result-oriented learning methods, we make engineering studies easier, smarter, and more successful.',
    'We proudly stand as one of the top <a href="#" class="font-semibold text-brand-orange hover:underline transition-colors">GATE</a> coaching centres in Kerala, offering flexible online programs that fit every student\'s pace and goal. Whether you\'re preparing for semester exams or national-level tests like <a href="#" class="font-semibold text-brand-orange hover:underline transition-colors">GATE</a>, we provide complete support to ensure you achieve your academic dreams.',
    'At <a href="#" class="font-semibold text-brand-orange hover:underline transition-colors">BTech Tutor</a>, our mission is clear — <em class="text-gray-700">empowering students to achieve excellence, nurturing innovation, and guiding future engineers toward impactful careers.</em>',
  ],
  features: [
    {
      title: "Expert Faculty",
      description:
        "Learn from GATE-qualified professors with 10+ years of teaching experience.",
      icon: "GraduationCap",
    },
    {
      title: "Comprehensive Notes",
      description:
        "Meticulously prepared study materials covering every topic in the syllabus.",
      icon: "BookOpen",
    },
    {
      title: "Mock Tests",
      description:
        "Regular practice tests designed to simulate actual GATE/KTU exam patterns.",
      icon: "ClipboardCheck",
    },
    {
      title: "PYQ Analysis",
      description:
        "Detailed solutions and analysis of previous year questions for focused preparation.",
      icon: "BarChart3",
    },
    {
      title: "Doubt Clearing",
      description:
        "Dedicated doubt-clearing sessions to ensure complete understanding of concepts.",
      icon: "MessageCircle",
    },
    {
      title: "Proven Results",
      description:
        "Consistent track record of producing top GATE ranks and KTU university toppers.",
      icon: "Trophy",
    },
  ],
};

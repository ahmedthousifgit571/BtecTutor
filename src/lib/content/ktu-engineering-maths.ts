import type { KtuHubSeo, KtuHubFaqItem } from "@/lib/content/ktu-hub";

export interface KtuMathsSemester {
  code: string;
  semester: string;
  topics: string;
}

export interface KtuMathsContent {
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string[];
  semesterOverviewHeading: string;
  semesterOverviewNote: string;
  semesters: KtuMathsSemester[];
  highWeightageHeading: string;
  highWeightageTopics: string[];
  whyFailHeading: string;
  whyFailBullets: string[];
  offersHeading: string;
  offers: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuEngineeringMathsContent: KtuMathsContent = {
  seo: {
    title: "KTU Engineering Mathematics — Notes, PYQs & Coaching | BTechTutor",
    description:
      "Prepare KTU Engineering Mathematics with module-wise notes, previous year papers, and online coaching at BTechTutor Kerala. 2019 and 2024 scheme.",
    h1: "KTU Engineering Mathematics — Module-wise Notes, PYQs, and Online Coaching",
    primaryKeyword: "KTU Engineering Mathematics",
    secondaryKeywords: [
      "KTU Maths notes",
      "Engineering Mathematics KTU coaching online",
    ],
    lsiKeywords: [
      "KTU Engineering Mathematics module wise notes",
      "KTU Maths PYQs solutions",
      "how to score in KTU Engineering Mathematics",
    ],
  },

  heroSubheading:
    "Engineering Mathematics appears in multiple semesters of KTU BTech — typically as M1, M2, M3, and M4. It is one of the most failed subjects in KTU, and also one of the easiest to improve with the right guidance. Question patterns are consistent and most marks come from a few well-defined topics that repeat every year.",

  introduction: [
    "Engineering Mathematics appears in multiple semesters of KTU BTech — typically as M1 in S1, M2 in S2, M3 in S3, and M4 in S4 for most branches. It is one of the most failed subjects in KTU, and also one of the easiest to improve with the right guidance.",
    "The question patterns are consistent, and most marks come from a few well-defined topic areas that repeat every year. Knowing what to focus on and practising the right problems makes a significant difference to your score.",
  ],

  semesterOverviewHeading: "KTU Engineering Mathematics — Semester-wise Overview",
  semesterOverviewNote:
    "Exact topics vary slightly by branch. EEE and ECE branches have a stronger emphasis on Laplace transforms and Fourier analysis from S2 onwards.",
  semesters: [
    {
      code: "M1",
      semester: "Semester 1",
      topics: "Calculus, matrix theory, differential equations, vector calculus",
    },
    {
      code: "M2",
      semester: "Semester 2",
      topics: "Series solutions, complex analysis, numerical methods, Laplace transforms",
    },
    {
      code: "M3",
      semester: "Semester 3",
      topics: "Probability, statistics, Fourier series, partial differential equations",
    },
    {
      code: "M4",
      semester: "Semester 4",
      topics: "Operations research, graph theory, or advanced topics depending on branch",
    },
  ],

  highWeightageHeading: "High-Weightage Topics Across KTU Maths Papers",
  highWeightageTopics: [
    "Matrix theory — eigenvalues, eigenvectors, diagonalisation, Cayley-Hamilton theorem",
    "Differential equations — first order, second order linear ODEs, variation of parameters",
    "Laplace transforms — standard pairs, properties, inverse transforms, solving ODEs",
    "Fourier series — full range, half range, Parseval's theorem",
    "Probability — random variables, distributions, mean, variance, standard deviation",
    "Complex analysis — analytic functions, Cauchy-Riemann equations, contour integration",
  ],

  whyFailHeading: "Why Students Fail KTU Engineering Mathematics",
  whyFailBullets: [
    "Not practising enough problems — Maths cannot be learned by reading alone",
    "Skipping derivations that are directly asked in exams",
    "Not knowing which formula to apply when — memorisation without understanding",
    "Running out of time in the exam — slow calculation speed from lack of practice",
    "Weak basics in one topic affecting all related topics downstream",
  ],

  offersHeading: "What BTechTutor Offers for KTU Maths",
  offers: [
    "Module-wise notes — free, available for M1, M2, M3, M4 across branches",
    "Previous year question papers — free, with worked solutions",
    "Video classes — topic-wise explanations with solved problems",
    "One-to-one coaching — personalised sessions for specific modules or full subject",
    "Supply exam coaching — focused preparation for Maths backlogs",
  ],

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Which Engineering Mathematics subject is hardest in KTU?",
      answer:
        "Most students find M2 and M3 harder than M1 because they involve more abstract topics like complex analysis, Laplace transforms, and Fourier series. M1 is tough for students with weak basics from Plus Two.",
    },
    {
      question: "How do I score above 70% in KTU Engineering Mathematics?",
      answer:
        "Understand the topic, practise the standard problem types, and solve at least 5 years of previous papers for that subject. Focus more time on the highest-weightage modules — don't study everything equally.",
    },
    {
      question: "Is KTU Engineering Mathematics the same for all branches?",
      answer:
        "Mostly yes for M1 and M2. From M3 onwards there are branch-specific variations — EEE and ECE focus more on signal-related maths, while Civil focuses more on statistics and numerical methods.",
    },
    {
      question: "How many modules are there in KTU Engineering Mathematics?",
      answer:
        "Each Engineering Mathematics subject has 5 modules. In the end semester exam you typically answer one question from each module with internal choice.",
    },
    {
      question: "Is coaching available for KTU Maths supply exams?",
      answer:
        "Yes — this is one of our most requested subjects for supply coaching. Call or WhatsApp +91 98950 09337 to start preparation for your specific Maths subject.",
    },
  ],

  internalLinks: [
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Contact Us", href: "/contact" },
  ],
};

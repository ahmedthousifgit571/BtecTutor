import type { KtuHubSeo, KtuHubFaqItem } from "@/lib/content/ktu-hub";

export interface KtuSupplyExamStep {
  title: string;
  detail: string;
}

export interface KtuSupplyExamContent {
  heroBadge?: string;
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string[];
  whatIsHeading: string;
  whatIsIntro?: string;
  whatIsBullets: string[];
  whyDifferentHeading: string;
  whyDifferentBullets: string[];
  howWeHelpHeading: string;
  howWeHelpSteps: KtuSupplyExamStep[];
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  ctaDescription?: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuSupplyExamContent: KtuSupplyExamContent = {
  seo: {
    title: "KTU Supply Exam Coaching Online — Clear Backlogs | BTechTutor",
    description:
      "Clear your KTU supply exam with targeted online coaching at BTechTutor. Subject-wise preparation, notes, PYQs, and one-to-one guidance for Kerala students.",
    h1: "KTU Supply Exam Coaching — Clear Your Backlog the Right Way",
    primaryKeyword: "KTU supply exam coaching",
    secondaryKeywords: [
      "KTU supplementary exam preparation",
      "KTU backlog coaching online Kerala",
    ],
    lsiKeywords: [
      "how to clear KTU supply exam",
      "KTU supply exam tips Kerala",
      "KTU backlog coaching online",
    ],
  },

  heroSubheading:
    "Having a backlog in KTU does not define your degree — what matters is how you handle it. BTechTutor offers focused supply exam coaching for all KTU subjects across all branches, both 2019 and 2024 schemes.",

  introduction: [
    "Having a backlog in KTU does not define your degree — what matters is how you handle it. A lot of students fail supply exams not because the subject is too hard, but because they prepare the wrong way, study too broadly, or run out of time.",
    "Targeted coaching for supply exams works completely differently from regular semester preparation. BTechTutor offers focused supply exam coaching for all KTU subjects across all branches, both 2019 and 2024 schemes.",
  ],

  whatIsHeading: "What is a KTU Supply Exam?",
  whatIsIntro:
    "A supply exam (supplementary examination) is a second chance given to students who failed a subject in the regular end semester exam. KTU conducts supply exams alongside regular semester exams — so you can clear a backlog while continuing your current semester.",
  whatIsBullets: [
    "Who is eligible: Students who failed the ESE or did not meet the minimum 50% overall criteria",
    "When conducted: Alongside regular semester exams — November to January and April to June",
    "Number of attempts: No limit on supply exam attempts in KTU",
    "Does clearing a supply improve CGPA: Yes — the F grade (0 points) is replaced with your new grade",
  ],

  whyDifferentHeading: "Why Supply Exam Preparation is Different",
  whyDifferentBullets: [
    "You need to know the exact question patterns for that specific subject",
    "Important modules and high-weightage topics must be identified first",
    "PYQ practice is even more critical — question patterns repeat more predictably",
    "Time management during the exam is crucial — know which questions to attempt first",
  ],

  howWeHelpHeading: "How BTechTutor Helps with Supply Exam Coaching",
  howWeHelpSteps: [
    {
      title: "Subject-specific coaching",
      detail:
        "Identify exactly what to study for your supply subject — no wasted effort on low-priority topics.",
    },
    {
      title: "Important module analysis",
      detail:
        "Focus on high-weightage modules based on PYQ patterns and the subject's exam history.",
    },
    {
      title: "Previous year question paper practice",
      detail:
        "Structured practice with solutions and explanation for all relevant PYQs.",
    },
    {
      title: "One-to-one doubt sessions",
      detail: "Direct answers to your specific doubts from a subject expert.",
    },
    {
      title: "Exam strategy",
      detail:
        "How to attempt the paper, time allocation, and what to write when unsure.",
    },
  ],

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Can I clear a KTU supply exam while attending my current semester?",
      answer:
        "Yes — KTU conducts regular and supplementary exams simultaneously. You can attend current semester classes and write supply exams for previous semester subjects at the same time.",
    },
    {
      question: "How many times can I appear for a KTU supply exam?",
      answer:
        "There is no limit on the number of attempts for supply exams in KTU. You can keep appearing until you pass the subject.",
    },
    {
      question: "Will clearing a supply exam improve my CGPA?",
      answer:
        "Yes. When you clear a supply exam, the F grade (0 grade points) is replaced by the new grade you earn. This improves your SGPA for that semester and your overall CGPA.",
    },
    {
      question: "How much time do I need to prepare for a KTU supply exam?",
      answer:
        "For most subjects, 3-4 weeks of focused targeted preparation is sufficient. Our one-to-one coaching builds a specific plan based on your available time and the subject you are preparing for.",
    },
    {
      question: "How do I start supply exam coaching at BTechTutor?",
      answer:
        "Call or WhatsApp +91 98950 09337. Tell us which subject and semester your supply exam is for, and when the exam is scheduled. We will put together a focused preparation plan immediately.",
    },
  ],

  internalLinks: [
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "One-to-One Tuition", href: "/one-to-one-coaching" },
    { label: "Contact Us", href: "/contact" },
  ],
};

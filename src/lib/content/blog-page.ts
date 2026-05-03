import type { FaqContent } from "@/lib/content/faq";

export interface BlogFeaturedArticle {
  title: string;
  href: string;
}

export interface BlogCategory {
  title: string;
  description: string;
}

export interface BlogPageContent {
  seo: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string[];
  featuredArticles: BlogFeaturedArticle[];
  categories: BlogCategory[];
  faq: FaqContent;
}

export const blogPageContent: BlogPageContent = {
  seo: {
    title: "BTechTutor Blog | KTU Tips, GATE Strategy & Careers",
    description:
      "Explore the BTechTutor blog for KTU exam tips, GATE strategy, CGPA improvement, supply exam guidance, and engineering career advice.",
  },
  h1: "The BTechTutor Blog — Practical, Honest Advice for Engineering Students",
  intro: [
    "Engineering comes with a lot of questions — about subjects, about exams, about what to do when a semester goes wrong, and about what comes after graduation. This blog is here to answer them.",
    "We write about KTU exam prep, supply exam strategy, CGPA improvement, GATE preparation, and career options after BTech in Kerala. Nothing here is recycled from other websites. Every article is written from real coaching experience by people who have helped thousands of students through these exact situations.",
  ],
  featuredArticles: [
    { title: "How to Pass KTU Exams", href: "/blog/how-to-pass-ktu-exams" },
    { title: "How to Clear Your KTU Supply Exam", href: "/blog/ktu-supply-exam-tips" },
    {
      title: "KTU CGPA to Percentage — What Does Your CGPA Mean?",
      href: "/blog/ktu-cgpa-to-percentage",
    },
    { title: "KTU Passing Marks Explained", href: "/blog/ktu-passing-marks" },
    { title: "KTU 2024 vs 2019 Scheme — Which is Harder?", href: "/blog/ktu-2024-scheme-vs-2019" },
    { title: "How to Crack GATE in the First Attempt", href: "/blog/crack-gate-first-attempt" },
    {
      title: "GATE vs Kerala PSC — Which Path is Better for Engineers?",
      href: "/blog/gate-vs-kerala-psc",
    },
    {
      title: "Why One-to-One Coaching is Better Than Group Classes for BTech",
      href: "/blog/one-to-one-vs-group-coaching",
    },
  ],
  categories: [
    {
      title: "KTU Exam Tips",
      description:
        "Semester exams, supply exams, study strategies, CGPA improvement.",
    },
    {
      title: "GATE Preparation",
      description:
        "Subject strategy, preparation timeline, score targets, PSU guidance.",
    },
    {
      title: "Career After BTech",
      description: "PSU jobs, ISRO, government postings, further studies in Kerala.",
    },
    {
      title: "Coaching Advice",
      description: "When to get coaching, how to choose, one-to-one vs group.",
    },
  ],
  faq: {
    badgeLabel: "FAQs",
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    ctaHeading: "Want a plan tailored to you?",
    ctaDescription:
      "Message us on WhatsApp with your department and goal — we reply within 24 hours.",
    ctaButtonLabel: "Chat on WhatsApp",
    ctaWhatsAppNumber: "+919895006772",
    items: [
      {
        question: "Where can I find practical KTU study tips?",
        answer:
          "Right here. The BTechTutor blog covers KTU exam preparation, supply exam strategy, CGPA improvement, and subject-specific advice — all written from real coaching experience with Kerala engineering students. Updated regularly.",
      },
      {
        question: "How do I improve my CGPA in KTU?",
        answer:
          "Start by identifying which subjects are pulling your CGPA down — do not try to improve everything at once. Understand the exam pattern for those subjects, focus on the high-weightage modules first, and start revision at least four weeks before the university exam. Previous year papers are the most efficient revision tool. For students struggling with specific subjects, targeted coaching has consistently produced CGPA improvement within one to two semesters.",
      },
      {
        question: "How do I prepare for a KTU supply exam?",
        answer:
          "Do not try to cover the entire syllabus again — you do not have time and it is not necessary. Go through the last five to seven years of previous question papers for that subject and identify the ten to fifteen topics that appear most consistently. Understand those deeply. That focused approach is what clears supply exams, not full syllabus revision.",
      },
      {
        question: "What are the passing marks in KTU?",
        answer:
          "You need a minimum of 40 percent in the university exam and a combined total that meets the minimum for a D grade. The exact criteria vary slightly by subject type. Full details with current criteria are covered in the BTechTutor blog at btechtutor.com/blog/ktu-passing-marks/",
      },
      {
        question: "How do I convert my KTU CGPA to a percentage?",
        answer:
          "The formula is: Percentage = (CGPA − 0.5) × 10. So a 7.5 CGPA equals 70 percent. Some employers and universities accept CGPA directly without conversion. Full breakdown is at btechtutor.com/blog/ktu-cgpa-to-percentage/",
      },
      {
        question: "Is the KTU 2024 scheme harder than 2019?",
        answer:
          "Depends on the department. For most branches, the difficulty is broadly similar. The biggest changes are in the CS group — eleven sub-branches with updated course structures and more emphasis on practical and project-based work. A detailed comparison is at btechtutor.com/blog/ktu-2024-scheme-vs-2019/",
      },
      {
        question: "What career options are there after BTech in Kerala?",
        answer:
          "Campus placements, GATE for M.Tech or PSU jobs at BHEL, NTPC, ONGC, ISRO Scientist Engineer exam, Kerala PSC AE and JE exams, and private sector roles. The BTechTutor blog covers all of these in the career section at btechtutor.com/blog/",
      },
      {
        question: "Can reading a blog actually help my GATE preparation?",
        answer:
          "For strategy, timelines, and knowing what to prioritise — yes, absolutely. For the actual preparation, you need structured coaching and consistent practice with previous year papers. The blog is a good starting point. For a structured plan, reach out to the team at +91 98950 06772.",
      },
    ],
  },
};

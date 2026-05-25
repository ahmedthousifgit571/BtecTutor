import type { KtuHubSeo, KtuHubFaqItem } from "@/lib/content/ktu-hub";

export interface KtuComparisonRow {
  feature: string;
  scheme2019: string;
  scheme2024: string;
  isNew: boolean;
}

export interface KtuComparisonSection {
  title: string;
  bullets: string[];
}

export interface KtuComparisonContent {
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string[];
  summaryHeading: string;
  summarySubtext: string;
  summary: KtuComparisonRow[];
  sectionsHeading: string;
  sections: KtuComparisonSection[];
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuComparisonContent: KtuComparisonContent = {
  seo: {
    title: "KTU 2024 vs 2019 Scheme — Key Differences | BTechTutor",
    description:
      "Complete comparison of KTU 2024 and 2019 BTech schemes. Credits, evaluation, syllabus changes, and what it means for students. BTechTutor Kerala.",
    h1: "KTU 2024 vs 2019 Scheme — What Changed and What It Means for You",
    primaryKeyword: "KTU 2024 vs 2019 scheme",
    secondaryKeywords: [
      "KTU 2024 scheme vs 2019 scheme differences",
      "KTU new scheme changes",
    ],
    lsiKeywords: [
      "what is different in KTU 2024 scheme",
      "KTU 2024 scheme changes explained",
      "KTU 2019 vs 2024 scheme comparison",
    ],
  },

  heroSubheading:
    "KTU introduced the 2024 scheme for students admitted from 2024-25 onwards. If you are on the 2019 scheme, nothing changes for you. But if you are a new student or trying to understand what is different, this page breaks it down clearly.",

  introduction: [
    "KTU introduced the 2024 scheme for students admitted from 2024-25 onwards. If you are on the 2019 scheme, nothing changes for you — you complete your degree under the old scheme. But if you are a new student or trying to understand what is different, this page breaks it down clearly.",
    "The core structure remains similar — 8 semesters, S1 and S2 common to all branches, 10-point grading, and the same CGPA to percentage formula. The changes are in credit count, elective options, assessment methods, and an expanded CS branch with 11 specialisations.",
  ],

  summaryHeading: "Quick Comparison — 2019 vs 2024 Scheme",
  summarySubtext:
    "Key differences at a glance. Items highlighted in orange are new or changed in the 2024 scheme.",
  summary: [
    {
      feature: "Total Credits",
      scheme2019: "160 credits",
      scheme2024: "170 credits",
      isNew: true,
    },
    {
      feature: "CS Specialisations",
      scheme2019: "1 branch",
      scheme2024: "11 specialisations",
      isNew: true,
    },
    {
      feature: "Level 5 Courses",
      scheme2019: "Not available",
      scheme2024: "Yes — with external viva",
      isNew: true,
    },
    {
      feature: "Industry Linked Electives",
      scheme2019: "Not available",
      scheme2024: "Yes — all branches",
      isNew: true,
    },
    {
      feature: "Honours / Minor / Major",
      scheme2019: "Not available",
      scheme2024: "From semester 5",
      isNew: true,
    },
    {
      feature: "CGPA to Percentage",
      scheme2019: "CGPA × 10",
      scheme2024: "CGPA × 10",
      isNew: false,
    },
    {
      feature: "Grading Scale",
      scheme2019: "10-point scale",
      scheme2024: "10-point scale",
      isNew: false,
    },
    {
      feature: "Passing Criteria",
      scheme2019: "50% overall, 40% ESE",
      scheme2024: "50% overall, 40% ESE",
      isNew: false,
    },
  ],

  sectionsHeading: "Detailed Comparison",
  sections: [
    {
      title: "Credit Structure",
      bullets: [
        "2019 Scheme: Minimum 160 credits required for BTech degree",
        "2024 Scheme: Minimum 170 credits (167 academic + 3 student activity credits)",
        "The additional credits come from new Level 5 courses and expanded elective options",
      ],
    },
    {
      title: "Evaluation Pattern",
      bullets: [
        "Both schemes: CIE (Continuous Internal Evaluation) + ESE (End Semester Exam)",
        "2024 Scheme: New Level 5 courses carry an external viva at the end of semester",
        "Both schemes: Minimum 45% in CIE to be eligible to appear for ESE",
        "Both schemes: Minimum 50% overall and 40% in ESE to pass a subject",
      ],
    },
    {
      title: "CS Branch Changes",
      bullets: [
        "2019 Scheme: One CS branch — Computer Science and Engineering",
        "2024 Scheme: 11 CS specialisations — CS (General), CS with AI, CS with IoT, CS with Data Science, CS with AI and ML, CS with EBS, CS with IoT and Cyber Security, CS with Design, CS with AI and Data Science, CS with Cyber Security, and AI and ML",
      ],
    },
    {
      title: "What Stays the Same",
      bullets: [
        "CGPA to percentage formula: Percentage = CGPA × 10 for both schemes",
        "10-point grading scale — same grade categories for both",
        "8-semester structure for both schemes",
        "S1 and S2 remain common to all branches in both schemes",
        "Supply exam and supplementary exam system — same in both",
      ],
    },
  ],

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Can a 2019 scheme student switch to the 2024 scheme?",
      answer:
        "No, you complete your degree under the scheme you were admitted in. There is no provision to switch between schemes midway.",
    },
    {
      question: "Is the 2024 scheme harder than the 2019 scheme?",
      answer:
        "The 2024 scheme has more credits and new evaluation components like Level 5 external viva. Whether it is harder depends on the subject and branch. The updated syllabus includes more industry-relevant content, which may feel different from the older 2019 scheme.",
    },
    {
      question: "Does the CGPA to percentage formula differ between schemes?",
      answer:
        "No — both use the same formula: Percentage = CGPA × 10. This was standardised by the KTU Academic Council in June 2023 and applies to both schemes.",
    },
    {
      question: "Is coaching available for both 2019 and 2024 scheme subjects?",
      answer:
        "Yes — BTechTutor provides coaching for all subjects under both schemes. Call or WhatsApp +91 98950 09337 to discuss your specific needs.",
    },
  ],

  internalLinks: [
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "GATE Coaching", href: "/gate" },
    { label: "Contact Us", href: "/contact" },
  ],
};

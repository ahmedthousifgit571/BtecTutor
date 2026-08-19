import type { KtuHubSeo, KtuHubFaqItem } from "@/lib/content/ktu-hub";

export interface KtuGradeRow {
  grade: string;
  label: string;
  points: number;
  range: string;
}

export interface KtuSgpaSubject {
  label: string;
  grade: string;
  credits: number;
  product: number;
}

export interface KtuCgpaSemester {
  label: string;
  sgpa: number;
  credits: number;
  product: number;
}

export interface KtuDegreeClass {
  classification: string;
  range: string;
}

export interface KtuCgpaContent {
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string;
  gradingScaleHeading: string;
  gradingScale: KtuGradeRow[];
  sgpaHeading: string;
  sgpaDefinition: string;
  sgpaFormula: string;
  sgpaExampleSubjects: KtuSgpaSubject[];
  sgpaExampleSummary: string;
  cgpaHeading: string;
  cgpaDefinition: string;
  cgpaFormula: string;
  cgpaExampleSemesters: KtuCgpaSemester[];
  cgpaExampleSummary: string;
  percentageHeading: string;
  percentageFormula: string;
  percentageNote: string;
  percentageExamples: Array<{ cgpa: string; percentage: string }>;
  degreeClassHeading: string;
  degreeClasses: KtuDegreeClass[];
  importantNotesHeading: string;
  importantNotes: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuCgpaContent: KtuCgpaContent = {
  seo: {
    title: "KTU CGPA Calculator (2019 & 2024 Scheme) | BTechTutor",
    description:
      "Calculate your KTU CGPA, SGPA, and percentage easily. Official formula for 2019 and 2024 schemes with grade table and step-by-step guide at BTechTutor.",
    h1: "KTU CGPA Calculator — Calculate SGPA, CGPA, and Percentage",
    primaryKeyword: "KTU CGPA calculator",
    secondaryKeywords: [
      "KTU SGPA calculator",
      "KTU CGPA to percentage formula",
    ],
    lsiKeywords: [
      "KTU CGPA calculator online",
      "how to calculate CGPA in KTU",
      "KTU 2024 scheme CGPA percentage",
    ],
  },

  heroSubheading:
    "Use this page to understand how KTU calculates your SGPA, CGPA, and percentage — and to calculate your own. All formulas are based on official KTU regulations for both the 2019 and 2024 schemes.",

  introduction:
    "Use this page to understand how KTU calculates your SGPA, CGPA, and percentage. All formulas are based on official KTU regulations for both the 2019 and 2024 schemes.",

  gradingScaleHeading: "KTU Grading Scale",
  gradingScale: [
    { grade: "O", label: "Outstanding", points: 10, range: "90% and above" },
    { grade: "A+", label: "Excellent", points: 9, range: "80% to 89%" },
    { grade: "A", label: "Very Good", points: 8.5, range: "75% to 79%" },
    { grade: "B+", label: "Good", points: 8, range: "70% to 74%" },
    { grade: "B", label: "Above Average", points: 7, range: "60% to 69%" },
    { grade: "C", label: "Average", points: 6, range: "50% to 59%" },
    { grade: "P", label: "Pass", points: 5, range: "45% to 49%" },
    { grade: "F", label: "Fail", points: 0, range: "Below 45%" },
    { grade: "FE", label: "Failed (Eligibility)", points: 0, range: "CIE below 45%" },
  ],

  sgpaHeading: "How to Calculate SGPA",
  sgpaDefinition:
    "SGPA (Semester Grade Point Average) is the weighted average of grade points for all subjects in a semester.",
  sgpaFormula: "SGPA = Σ (Grade Point × Credits) ÷ Total Credits",
  sgpaExampleSubjects: [
    { label: "Subject A", grade: "A+ (9 pts)", credits: 4, product: 36 },
    { label: "Subject B", grade: "B+ (8 pts)", credits: 3, product: 24 },
    { label: "Subject C", grade: "B (7 pts)", credits: 4, product: 28 },
  ],
  sgpaExampleSummary: "Total credits = 11 | Total grade points = 88 | SGPA = 88 ÷ 11 = 8.0",

  cgpaHeading: "How to Calculate CGPA",
  cgpaDefinition:
    "CGPA is the weighted average of SGPA across all completed semesters.",
  cgpaFormula: "CGPA = Σ (SGPA × Semester Credits) ÷ Total Credits",
  cgpaExampleSemesters: [
    { label: "S1", sgpa: 7.5, credits: 18, product: 135 },
    { label: "S2", sgpa: 8.0, credits: 20, product: 160 },
    { label: "S3", sgpa: 8.2, credits: 22, product: 180.4 },
  ],
  cgpaExampleSummary: "Total credits = 60 | Total = 475.4 | CGPA = 475.4 ÷ 60 = 7.92",

  percentageHeading: "CGPA to Percentage Conversion",
  percentageFormula: "Percentage = CGPA × 10",
  percentageNote:
    "Official KTU formula as per Academic Council order dated June 29, 2023. Applies to both the 2019 and 2024 KTU schemes.",
  percentageExamples: [
    { cgpa: "6.5", percentage: "65%" },
    { cgpa: "7.5", percentage: "75%" },
    { cgpa: "8.0", percentage: "80%" },
    { cgpa: "9.0", percentage: "90%" },
  ],

  degreeClassHeading: "KTU Degree Classification",
  degreeClasses: [
    { classification: "First Class with Distinction", range: "CGPA 8.0 and above" },
    { classification: "First Class", range: "CGPA 6.5 to 7.99" },
    { classification: "Second Class", range: "CGPA 5.0 to 6.49" },
    { classification: "Pass", range: "CGPA below 5.0 (all subjects passed)" },
  ],

  importantNotesHeading: "Important Notes on CGPA Calculation",
  importantNotes: [
    "All subjects including those with F grade (0 points) are included in CGPA calculation",
    "Clearing a supply exam replaces the F grade with the new grade — this improves your CGPA",
    "Lab subjects and project credits are also included in SGPA and CGPA calculation",
  ],

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What is a good CGPA in KTU?",
      answer:
        "A CGPA of 7.5 and above is generally considered good for most placement opportunities. For competitive companies and higher studies, 8.0 and above is preferred. For government jobs and PSC exams, the cutoff is usually 60% (CGPA 6.0) or higher.",
    },
    {
      question: "What is the minimum CGPA to pass in KTU?",
      answer:
        "There is no minimum CGPA requirement for the degree as such — you need to pass all subjects individually. However, a CGPA of 5.0 is typically the threshold for a Pass class degree.",
    },
    {
      question: "Does clearing a supply exam improve my CGPA?",
      answer:
        "Yes — when you clear a supply exam, the F grade (0 grade points) is replaced by your new grade. This increases your SGPA for that semester and improves your overall CGPA.",
    },
    {
      question: "Is the CGPA to percentage formula the same for 2019 and 2024 KTU schemes?",
      answer:
        "Yes — both schemes use Percentage = CGPA × 10. This was confirmed by the KTU Academic Council order issued on June 29, 2023.",
    },
    {
      question: "How is SGPA different from CGPA?",
      answer:
        "SGPA is the grade point average for one semester. CGPA is the cumulative average across all completed semesters. A good SGPA in one semester does not guarantee a high CGPA if earlier semesters had low scores.",
    },
  ],

  internalLinks: [
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "2019 vs 2024 Scheme", href: "/ktu/2019-vs-2024" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

import type { KtuHubSeo, KtuHubFaqItem } from "@/lib/content/ktu-hub";

export interface KtuSubjectItem {
  code: string;
  name: string;
  credits: number;
}

export interface KtuStudyResource {
  title: string;
  badge: "FREE" | "PAID";
  description: string;
  linkLabel: string;
  href: string;
}

export interface KtuSemesterContent {
  heroBadge?: string;
  heroHighlights: Array<{ title: string; subtitle: string }>;
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string[];
  subjectsHeading: string;
  subjectsIntro: string;
  subjects: KtuSubjectItem[];
  resources: KtuStudyResource[];
  prepHeading: string;
  prepIntro: string;
  prepBullets: string[];
  gateNote?: { heading: string; note: string; footer: string };
  ctaDescription?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuEeeS1_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S1 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 1", subtitle: "Common to all KTU branches, 2019 scheme" },
    { title: "10 Subjects", subtitle: "Foundation subjects for all EEE core topics" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S1 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S1 notes, question papers, and video classes for all first semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU EEE S1 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S1 notes",
    secondaryKeywords: [
      "KTU EEE first semester",
      "KTU EEE S1 subjects",
    ],
    lsiKeywords: [
      "KTU EEE S1 notes all subjects free download",
      "KTU EEE first semester study material",
      "KTU S1 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 1 subjects under the 2019 scheme. S1 is common to all branches — these subjects form the foundation for EEE core from S3 onwards.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 1 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects.",
    "S1 is common to all KTU branches. These subjects form the foundation for all EEE core subjects from S3 onwards.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 1 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MAT101", name: "Linear Algebra and Calculus", credits: 4 },
    { code: "PHT110", name: "Engineering Physics A", credits: 4 },
    { code: "CYT100", name: "Engineering Chemistry", credits: 4 },
    { code: "EST100", name: "Engineering Mechanics", credits: 4 },
    { code: "EST110", name: "Engineering Graphics", credits: 4 },
    { code: "EST120", name: "Basics of Civil and Mechanical Engineering", credits: 4 },
    { code: "HUT101", name: "Life Skills", credits: 2 },
    { code: "PHL120", name: "Engineering Physics Lab", credits: 1 },
    { code: "CYL120", name: "Engineering Chemistry Lab", credits: 1 },
    { code: "ESL120", name: "Civil and Mechanical Workshop", credits: 2 },
  ],

  resources: [
    {
      title: "Notes",
      badge: "FREE",
      description:
        "Module-wise notes available for all subjects in this semester.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Question Papers",
      badge: "FREE",
      description:
        "Semester-wise question papers with solutions for all subjects.",
      linkLabel: "Download Question Papers",
      href: "#",
    },
    {
      title: "Video Classes",
      badge: "PAID",
      description:
        "Recorded video lectures covering the full syllabus for all subjects.",
      linkLabel: "Watch Video Classes",
      href: "#",
    },
    {
      title: "Demo Class",
      badge: "FREE",
      description:
        "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo on YouTube",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 1",
  prepIntro:
    "Focus on Mathematics (MAT101) and Engineering Physics — both are high-weightage and directly useful for EEE core subjects later. Engineering Mechanics is often the toughest subject for first-year students.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Are notes available for all KTU EEE Semester 1 subjects?",
      answer:
        "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 1 under the 2019 scheme. Access them from the subject links on this page.",
    },
    {
      question: "Where can I download KTU EEE S1 question papers?",
      answer:
        "Previous year question papers for all KTU EEE Semester 1 subjects are available free on BTechTutor. Click on any subject link on this page to access them.",
    },
    {
      question: "Is video class coaching available for KTU EEE S1?",
      answer:
        "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 1 subjects. A demo class is available on YouTube before you enrol.",
    },
    {
      question: "Can I get one-to-one coaching for KTU EEE S1 subjects?",
      answer:
        "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement.",
    },
    {
      question: "Is coaching available for KTU EEE S1 supply exams?",
      answer:
        "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately.",
    },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S2", href: "/ktu/2019-scheme/eee/s2/" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS2_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S2 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 2", subtitle: "Common to all KTU branches, 2019 scheme" },
    { title: "9 Subjects", subtitle: "Includes your first EEE-specific subject (EST130)" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S2 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S2 notes, question papers, and video classes. All second semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S2 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S2 notes",
    secondaryKeywords: [
      "KTU EEE second semester",
      "KTU EEE S2 subjects",
    ],
    lsiKeywords: [
      "KTU EEE S2 notes PDF free download",
      "KTU EEE second semester study material",
      "KTU S2 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 2 subjects under the 2019 scheme. S2 is common to all branches — Engineering Mathematics II introduced here is directly relevant throughout EEE.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 2 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S2 is also common to all KTU branches.",
    "Engineering Mathematics II (M2) introduced in S2 is directly relevant for EEE — Laplace transforms and complex analysis are used throughout EEE subjects from S3 onwards.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 2 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MAT102", name: "Vector Calculus, Differential Equations and Transforms", credits: 4 },
    { code: "PHT100", name: "Engineering Physics B", credits: 4 },
    { code: "EST100", name: "Engineering Mechanics (if not in S1)", credits: 4 },
    { code: "EST130", name: "Basics of Electrical and Electronics Engineering", credits: 4 },
    { code: "EST150", name: "Programming in C", credits: 4 },
    { code: "EST160", name: "Engineering Graphics (if not in S1)", credits: 4 },
    { code: "HUT102", name: "Professional Communication", credits: 2 },
    { code: "ESL120", name: "Electrical and Electronics Workshop", credits: 2 },
    { code: "ESL130", name: "Programming Lab", credits: 2 },
  ],

  resources: [
    {
      title: "Notes",
      badge: "FREE",
      description: "Module-wise notes available for all subjects in this semester.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Question Papers",
      badge: "FREE",
      description: "Semester-wise question papers with solutions for all subjects.",
      linkLabel: "Download Question Papers",
      href: "#",
    },
    {
      title: "Video Classes",
      badge: "PAID",
      description: "Recorded video lectures covering the full syllabus for all subjects.",
      linkLabel: "Watch Video Classes",
      href: "#",
    },
    {
      title: "Demo Class",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo on YouTube",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 2",
  prepIntro:
    "MAT102 (M2) is critical — Laplace transforms, differential equations, and complex analysis from this subject appear throughout EEE. EST130 (Basics of EEE) is your first introduction to electrical concepts — do not take it lightly.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Are notes available for all KTU EEE Semester 2 subjects?",
      answer:
        "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 2 under the 2019 scheme. Access them from the subject links on this page.",
    },
    {
      question: "Where can I download KTU EEE S2 question papers?",
      answer:
        "Previous year question papers for all KTU EEE Semester 2 subjects are available free on BTechTutor. Click on any subject link on this page to access them.",
    },
    {
      question: "Is video class coaching available for KTU EEE S2?",
      answer:
        "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 2 subjects. A demo class is available on YouTube before you enrol.",
    },
    {
      question: "Can I get one-to-one coaching for KTU EEE S2 subjects?",
      answer:
        "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement.",
    },
    {
      question: "Is coaching available for KTU EEE S2 supply exams?",
      answer:
        "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately.",
    },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S1", href: "/ktu/2019-scheme/eee/s1" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS3_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S3 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 3", subtitle: "First branch-specific semester for EEE students" },
    { title: "8 Subjects", subtitle: "Core EEE begins — Circuit Theory is foundational" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S3 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S3 notes, question papers, and video classes. All third semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S3 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S3 notes",
    secondaryKeywords: ["KTU EEE S3", "KTU EEE third semester"],
    lsiKeywords: [
      "KTU EEE S3 notes free PDF",
      "KTU EEE third semester study material",
      "KTU S3 EEE question papers download",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 3 subjects under the 2019 scheme. S3 is the first branch-specific semester for EEE — Circuit Theory introduced here is the foundation for almost everything that follows.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 3 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S3 is the first branch-specific semester for EEE students.",
    "Circuit Theory introduced here is the most important subject — it is the foundation for almost everything that follows in EEE.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 3 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "EET201", name: "Circuit Theory", credits: 4 },
    { code: "EET203", name: "Solid State Devices", credits: 4 },
    { code: "MAT203", name: "Discrete Mathematics", credits: 4 },
    { code: "EET205", name: "Electrical Machines I", credits: 4 },
    { code: "EET207", name: "Electromagnetic Theory", credits: 3 },
    { code: "EEL201", name: "Circuit Theory Lab", credits: 1 },
    { code: "EEL203", name: "Electrical Machines Lab I", credits: 1 },
    { code: "HUT200", name: "Professional Ethics", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes available for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions for all subjects.", linkLabel: "Download Question Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering the full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 3",
  prepIntro:
    "Circuit Theory (EET201) is the most important subject in S3. Give it the most time. Electrical Machines I introduces transformer theory — understand equivalent circuits thoroughly as this pattern is used for all machines in later semesters.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU EEE Semester 3 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 3 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU EEE S3 question papers?", answer: "Previous year question papers for all KTU EEE Semester 3 subjects are available free on BTechTutor. Click on any subject link on this page to access them." },
    { question: "Is video class coaching available for KTU EEE S3?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 3 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for KTU EEE S3 subjects?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU EEE S3 supply exams?", answer: "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S2", href: "/ktu/2019-scheme/eee/s2" },
    { label: "EEE S4", href: "/ktu/2019-scheme/eee/s4" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS4_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S4 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 4", subtitle: "Builds directly on S3 — Signals and Machines continue" },
    { title: "8 Subjects", subtitle: "Signals and Systems is the key subject this semester" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S4 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S4 notes, question papers, and video classes. All fourth semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S4 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S4 notes",
    secondaryKeywords: ["KTU EEE S4", "KTU EEE fourth semester"],
    lsiKeywords: [
      "KTU EEE S4 notes PDF free download",
      "KTU EEE fourth semester study material",
      "KTU S4 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 4 subjects under the 2019 scheme. S4 builds directly on S3 — Signals and Systems is one of the most mathematically intensive subjects in EEE.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 4 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S4 builds directly on S3.",
    "Signals and Systems introduced here is one of the most mathematically intensive subjects in EEE — strong Laplace and Fourier transform skills from M2 are essential.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 4 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "EET202", name: "Signals and Systems", credits: 4 },
    { code: "EET204", name: "Analog and Digital Electronics", credits: 4 },
    { code: "MAT204", name: "Probability, Statistics and Numerical Methods", credits: 4 },
    { code: "EET206", name: "Electrical Machines II", credits: 4 },
    { code: "EET208", name: "Network Theory", credits: 3 },
    { code: "EEL202", name: "Signals and Systems Lab", credits: 1 },
    { code: "EEL204", name: "Electrical Machines Lab II", credits: 1 },
    { code: "EST200", name: "Design and Engineering", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes available for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions for all subjects.", linkLabel: "Download Question Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering the full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 4",
  prepIntro:
    "Signals and Systems (EET202) is the hardest subject for most EEE students in S4. Start early and practice PYQs consistently. Electrical Machines II covers induction motors and synchronous machines — these carry the highest marks in university exams.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU EEE Semester 4 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 4 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU EEE S4 question papers?", answer: "Previous year question papers for all KTU EEE Semester 4 subjects are available free on BTechTutor. Click on any subject link on this page to access them." },
    { question: "Is video class coaching available for KTU EEE S4?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 4 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for KTU EEE S4 subjects?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU EEE S4 supply exams?", answer: "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S3", href: "/ktu/2019-scheme/eee/s3" },
    { label: "EEE S5", href: "/ktu/2019-scheme/eee/s5" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS5_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S5 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 5", subtitle: "Power Systems, Control Systems, and Power Electronics together" },
    { title: "8 Subjects", subtitle: "Most demanding semester — also key for GATE preparation" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S5 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S5 notes, question papers, and video classes. All fifth semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S5 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S5 notes",
    secondaryKeywords: ["KTU EEE S5", "KTU EEE fifth semester"],
    lsiKeywords: [
      "KTU EEE S5 notes PDF",
      "KTU EEE fifth semester study material",
      "KTU S5 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 5 subjects under the 2019 scheme. S5 is one of the most demanding semesters — Power Systems, Control Systems, and Power Electronics all come together here.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 5 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects.",
    "S5 is one of the most demanding semesters in KTU EEE. Power Systems, Control Systems, and Power Electronics all come together here — each requiring significant preparation time.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 5 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "EET301", name: "Power Systems I", credits: 4 },
    { code: "EET303", name: "Control Systems", credits: 4 },
    { code: "EET305", name: "Power Electronics", credits: 4 },
    { code: "EET307", name: "Measurements and Instrumentation", credits: 3 },
    { code: "EET309", name: "Linear Integrated Circuits", credits: 3 },
    { code: "EEL301", name: "Power Systems Lab", credits: 1 },
    { code: "EEL303", name: "Control Systems Lab", credits: 1 },
    { code: "EEL305", name: "Power Electronics Lab", credits: 1 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes available for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Question Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 5",
  prepIntro:
    "S5 is the most important semester for GATE preparation — Power Systems, Control Systems, and Power Electronics are all high-weightage GATE subjects. Prepare S5 subjects with dual focus — KTU exam and GATE. Do not neglect Measurements and Instrumentation — it carries direct marks.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU EEE Semester 5 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 5 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU EEE S5 question papers?", answer: "Previous year question papers for all KTU EEE Semester 5 subjects are available free on BTechTutor. Click on any subject link on this page to access them." },
    { question: "Is video class coaching available for KTU EEE S5?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 5 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for KTU EEE S5 subjects?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU EEE S5 supply exams?", answer: "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S4", href: "/ktu/2019-scheme/eee/s4" },
    { label: "EEE S6", href: "/ktu/2019-scheme/eee/s6" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS6_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S6 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 6", subtitle: "Power Systems II, DSP, and elective subjects" },
    { title: "8 Subjects", subtitle: "Serious GATE preparation begins this semester" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S6 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S6 notes, question papers, and video classes. All sixth semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S6 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S6 notes",
    secondaryKeywords: ["KTU EEE S6", "KTU EEE sixth semester"],
    lsiKeywords: [
      "KTU EEE S6 notes PDF",
      "KTU EEE sixth semester study material",
      "KTU S6 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 6 subjects under the 2019 scheme. S6 continues the advanced EEE curriculum — this is also the semester where most students begin serious GATE preparation.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 6 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S6 continues the advanced EEE curriculum with Power Systems II, Digital Signal Processing, and elective subjects.",
    "This is also the semester where most students begin serious GATE preparation.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 6 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "EET302", name: "Power Systems II", credits: 4 },
    { code: "EET304", name: "Digital Signal Processing", credits: 4 },
    { code: "EET306", name: "High Voltage Engineering", credits: 3 },
    { code: "EET308", name: "Industrial Drives and Control", credits: 3 },
    { code: "EET3XX", name: "Program Elective I", credits: 3 },
    { code: "EEL302", name: "DSP Lab", credits: 1 },
    { code: "EEL304", name: "Drives and Control Lab", credits: 1 },
    { code: "PHL301", name: "Project Phase I", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes available for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Question Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 6",
  prepIntro:
    "Power Systems II builds on Power Systems I — make sure S5 Power Systems is solid before S6 starts. Digital Signal Processing is mathematically intensive — Fourier and Z-transform skills from earlier semesters are essential here.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU EEE Semester 6 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 6 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU EEE S6 question papers?", answer: "Previous year question papers for all KTU EEE Semester 6 subjects are available free on BTechTutor. Click on any subject link on this page to access them." },
    { question: "Is video class coaching available for KTU EEE S6?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 6 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for KTU EEE S6 subjects?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU EEE S6 supply exams?", answer: "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S5", href: "/ktu/2019-scheme/eee/s5" },
    { label: "EEE S7", href: "/ktu/2019-scheme/eee/s7" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS7_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S7 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 7", subtitle: "Elective-driven — GATE exams happen this semester" },
    { title: "6 Subjects", subtitle: "Project work runs alongside regular subjects" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S7 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S7 notes, question papers, and video classes. All seventh semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S7 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S7 notes",
    secondaryKeywords: ["KTU EEE S7", "KTU EEE seventh semester"],
    lsiKeywords: [
      "KTU EEE S7 notes PDF",
      "KTU EEE seventh semester study material",
      "KTU S7 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 7 subjects under the 2019 scheme. S7 is primarily elective-driven — GATE exams typically happen this semester, so time management is critical.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 7 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S7 is primarily elective-driven with fewer core subjects. Most students also have project work running alongside regular subjects.",
    "GATE exams typically happen during S7 — time management is critical this semester.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 7 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "EET401", name: "Special Electrical Machines", credits: 3 },
    { code: "EET4XX", name: "Program Elective II", credits: 3 },
    { code: "EET4XX", name: "Program Elective III", credits: 3 },
    { code: "EET4XX", name: "Open Elective", credits: 3 },
    { code: "PHL401", name: "Project Phase II", credits: 4 },
    { code: "EEL401", name: "Seminar", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes available for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Question Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 7",
  prepIntro:
    "S7 is when GATE appears for most students. Plan your time carefully — project work, electives, and GATE preparation need to run simultaneously. Elective subjects chosen wisely can also support GATE preparation.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU EEE Semester 7 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 7 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU EEE S7 question papers?", answer: "Previous year question papers for all KTU EEE Semester 7 subjects are available free on BTechTutor. Click on any subject link on this page to access them." },
    { question: "Is video class coaching available for KTU EEE S7?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 7 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for KTU EEE S7 subjects?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU EEE S7 supply exams?", answer: "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S6", href: "/ktu/2019-scheme/eee/s6" },
    { label: "EEE S8", href: "/ktu/2019-scheme/eee/s8" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEeeS8_2019Content: KtuSemesterContent = {
  heroBadge: "KTU EEE S8 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 8", subtitle: "Final semester — main project and viva" },
    { title: "5 Subjects", subtitle: "GATE results and PSU recruitment happen this semester" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU EEE S8 Notes 2019 Scheme — Free Download | BTechTutor",
    description:
      "Free KTU EEE S8 notes, question papers, and video classes. All eighth semester subjects for 2019 scheme EEE at BTechTutor Kerala.",
    h1: "KTU EEE S8 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU EEE S8 notes",
    secondaryKeywords: ["KTU EEE S8", "KTU EEE eighth semester"],
    lsiKeywords: [
      "KTU EEE S8 notes PDF",
      "KTU EEE eighth semester study material",
      "KTU S8 EEE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU EEE Semester 8 subjects under the 2019 scheme. S8 is the final semester — dominated by the main project and viva. GATE results and PSU recruitment processes begin this semester.",

  introduction: [
    "This page has everything you need for KTU EEE Semester 8 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S8 is the final semester — dominated by the main project and viva. A few elective theory subjects run alongside.",
    "This is also when GATE results come out, and PSU recruitment processes begin.",
  ],

  subjectsHeading: "Subjects in KTU EEE Semester 8 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "EET402", name: "Electrical System Design and Estimation", credits: 3 },
    { code: "EET4XX", name: "Program Elective IV", credits: 3 },
    { code: "EET4XX", name: "Program Elective V (Non-Departmental)", credits: 3 },
    { code: "PHL402", name: "Project Phase III (Main Project)", credits: 8 },
    { code: "EEL402", name: "Viva Voce", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes available for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Question Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU EEE Semester 8",
  prepIntro:
    "S8 is mostly about your main project — give it the time it deserves. The elective subjects have fewer internal tests, so focus on understanding concepts for the end semester exam. If you have backlogs from earlier semesters, clear them before S8 viva.",
  prepBullets: [
    "Start each subject by downloading the syllabus and understanding the module structure",
    "Use module-wise notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait till exam week",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU EEE Semester 8 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU EEE Semester 8 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU EEE S8 question papers?", answer: "Previous year question papers for all KTU EEE Semester 8 subjects are available free on BTechTutor. Click on any subject link on this page to access them." },
    { question: "Is video class coaching available for KTU EEE S8?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU EEE Semester 8 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for KTU EEE S8 subjects?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU EEE S8 supply exams?", answer: "Yes — supply exam coaching is available for all EEE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU EEE 2019 Hub", href: "/ktu/2019-scheme/eee" },
    { label: "EEE S7", href: "/ktu/2019-scheme/eee/s7" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

const gateEceFooter =
  "Many KTU ECE subjects map directly to GATE ECE topics. Preparing your KTU subjects with depth gives you a strong head start for GATE without separate preparation effort.";

export const ktuEceS1_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S1 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 1", subtitle: "Common to all KTU branches, 2019 scheme" },
    { title: "7 Subjects", subtitle: "Foundation subjects for all ECE core topics" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S1 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S1 notes, question papers, and video classes for all first semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S1 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S1 notes",
    secondaryKeywords: ["KTU ECE first semester", "KTU ECE S1 subjects"],
    lsiKeywords: [
      "KTU ECE S1 notes all subjects free download",
      "KTU ECE first semester study material",
      "KTU S1 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 1 subjects under the 2019 scheme. S1 is common to all KTU branches — these subjects build the mathematical and scientific foundation for all ECE core subjects from S3 onwards.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 1 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S1 is common to all KTU branches.",
    "These subjects build the mathematical and scientific foundation for all ECE core subjects from S3 onwards.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 1 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "MAT101", name: "Linear Algebra and Calculus", credits: 4 },
    { code: "PHT110", name: "Engineering Physics A", credits: 4 },
    { code: "CYT100", name: "Engineering Chemistry", credits: 4 },
    { code: "EST100", name: "Engineering Mechanics", credits: 4 },
    { code: "EST110", name: "Engineering Graphics", credits: 4 },
    { code: "EST130", name: "Basics of Electrical and Electronics Engineering", credits: 4 },
    { code: "HUT101", name: "Life Skills", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 1",
  prepIntro:
    "MAT101 and PHT110 carry the highest marks. Mathematics from S1 — especially matrices and calculus — is used throughout ECE. Engineering Physics covers semiconductor physics which directly connects to ECE core subjects. Don't underestimate EST130 (Basics of EEE) — it introduces key concepts you will use from S3 onwards.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "MAT101 overlaps with GATE Engineering Mathematics. EST130 builds foundation for GATE ECE core subjects.",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 1 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 1 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S1 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 1 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S1?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 1 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S1 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S2", href: "/ktu/2019-scheme/ece/s2" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS2_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S2 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 2", subtitle: "Common to all KTU branches, 2019 scheme" },
    { title: "6 Subjects", subtitle: "MAT102 is critically important for ECE" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S2 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S2 notes, question papers, and video classes for all second semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S2 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S2 notes",
    secondaryKeywords: ["KTU ECE second semester", "KTU ECE S2 subjects"],
    lsiKeywords: [
      "KTU ECE S2 notes PDF free download",
      "KTU ECE second semester study material",
      "KTU S2 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 2 subjects under the 2019 scheme. MAT102 introduced in S2 is critically important for ECE — Laplace and Fourier analysis appear in Signals, Communications, and Control Systems.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 2 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S2 is also common to all KTU branches.",
    "MAT102 introduced in S2 is critically important for ECE — Laplace transforms and Fourier analysis from this subject are used in Signals and Systems, Communications, and Control Systems.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 2 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "MAT102", name: "Vector Calculus, Differential Equations and Transforms", credits: 4 },
    { code: "PHT100", name: "Engineering Physics B", credits: 4 },
    { code: "EST120", name: "Basics of Civil and Mechanical Engineering", credits: 4 },
    { code: "EST150", name: "Programming in C", credits: 4 },
    { code: "EST160", name: "Engineering Graphics (if not in S1)", credits: 4 },
    { code: "HUT102", name: "Professional Communication", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 2",
  prepIntro:
    "MAT102 (M2) is the most important subject in S2 for ECE students. Laplace transforms, Fourier transforms, and differential equations from this subject appear directly in S5 and S6 ECE subjects. Give it maximum attention.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "MAT102 directly supports GATE ECE — Laplace, Fourier, and Z-transforms are core GATE Engineering Mathematics topics.",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 2 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 2 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S2 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 2 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S2?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 2 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S2 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S1", href: "/ktu/2019-scheme/ece/s1" },
    { label: "ECE S3", href: "/ktu/2019-scheme/ece/s3" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS3_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S3 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 3", subtitle: "First branch-specific semester for ECE students" },
    { title: "7 Subjects", subtitle: "Circuits and Networks is the most foundational subject" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S3 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S3 notes, question papers, and video classes for all third semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S3 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S3 notes",
    secondaryKeywords: ["KTU ECE S3", "KTU ECE third semester"],
    lsiKeywords: [
      "KTU ECE S3 notes free PDF",
      "KTU ECE third semester study material",
      "KTU S3 ECE question papers download",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 3 subjects under the 2019 scheme. S3 is the first branch-specific semester — Circuits and Networks introduced here underpins nearly every other ECE subject.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 3 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S3 is the first branch-specific semester for ECE students.",
    "Circuits and Networks introduced here is the most foundational subject — it underpins nearly every other ECE subject. Analog Electronics and Solid State Devices begin the electronics stream.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 3 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "MAT201", name: "Partial Differential Equations and Complex Analysis", credits: 4 },
    { code: "ECT201", name: "Circuits and Networks", credits: 4 },
    { code: "ECT203", name: "Solid State Devices", credits: 4 },
    { code: "ECT205", name: "Logic Circuit Design", credits: 4 },
    { code: "ECT207", name: "Computer Organisation", credits: 4 },
    { code: "EST200", name: "Sustainable Engineering", credits: 3 },
    { code: "HUT200", name: "Professional Ethics", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 3",
  prepIntro:
    "ECT201 (Circuits and Networks) is the most important subject in S3. It directly maps to GATE ECE Networks which carries 8-12 marks. Master Thevenin, Norton, and phasor analysis thoroughly here — they appear throughout ECE. ECT205 (Logic Circuit Design) connects to GATE ECE Digital Electronics.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "ECT201 = GATE ECE Networks (8-12 marks). ECT205 = GATE ECE Digital Circuits (6-10 marks). ECT203 = GATE ECE Electronic Devices (6-10 marks).",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 3 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 3 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S3 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 3 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S3?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 3 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S3 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S2", href: "/ktu/2019-scheme/ece/s2" },
    { label: "ECE S4", href: "/ktu/2019-scheme/ece/s4" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS4_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S4 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 4", subtitle: "Builds directly on S3 — Analog Circuits and Signals begin" },
    { title: "6 Subjects", subtitle: "Analog Circuits and Signals and Systems are the key subjects" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S4 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S4 notes, question papers, and video classes for all fourth semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S4 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S4 notes",
    secondaryKeywords: ["KTU ECE S4", "KTU ECE fourth semester"],
    lsiKeywords: [
      "KTU ECE S4 notes PDF free download",
      "KTU ECE fourth semester study material",
      "KTU S4 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 4 subjects under the 2019 scheme. S4 builds directly on S3 — Analog Circuits is one of the highest-weightage subjects for both KTU exams and GATE ECE.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 4 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S4 builds directly on S3.",
    "Analog Circuits introduced here is one of the highest-weightage subjects for both KTU exams and GATE ECE. Signals and Systems begins the advanced mathematical analysis that continues through S5 and S6.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 4 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "MAT204", name: "Probability Distributions Transforms and Numerical Methods", credits: 4 },
    { code: "ECT202", name: "Analog Circuits", credits: 4 },
    { code: "ECT204", name: "Electromagnetic Theory", credits: 4 },
    { code: "ECT206", name: "Computer Architecture and Organisation", credits: 4 },
    { code: "ECT208", name: "Signals and Systems", credits: 4 },
    { code: "HUT210", name: "Constitution of India", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 4",
  prepIntro:
    "ECT202 (Analog Circuits) and ECT208 (Signals and Systems) are the two most important subjects in S4 — both for KTU exams and GATE. ECT202 builds on Solid State Devices from S3 — BJT and MOSFET knowledge is essential before starting amplifier analysis. ECT208 requires strong Laplace transform skills from MAT102.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "ECT202 = GATE ECE Analog Circuits (8-12 marks). ECT208 = GATE ECE Signals and Systems (8-12 marks). ECT204 = GATE ECE Electromagnetics (6-10 marks).",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 4 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 4 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S4 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 4 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S4?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 4 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S4 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S3", href: "/ktu/2019-scheme/ece/s3" },
    { label: "ECE S5", href: "/ktu/2019-scheme/ece/s5" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS5_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S5 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 5", subtitle: "Most GATE-aligned semester in KTU ECE" },
    { title: "6 Subjects", subtitle: "Control Systems, DSP, and Digital Communication together" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S5 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S5 notes, question papers, and video classes for all fifth semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S5 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S5 notes",
    secondaryKeywords: ["KTU ECE S5", "KTU ECE fifth semester"],
    lsiKeywords: [
      "KTU ECE S5 notes PDF",
      "KTU ECE fifth semester study material",
      "KTU S5 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 5 subjects under the 2019 scheme. S5 is the most GATE-aligned semester in ECE — Control Systems, Digital Communication, and DSP all come together here.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 5 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S5 is one of the most demanding semesters in KTU ECE.",
    "Communication Engineering, Control Systems, and Digital Signal Processing all come together here — each requiring significant preparation time. It is also the most GATE-aligned semester in ECE.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 5 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "ECT301", name: "Linear Integrated Circuits", credits: 4 },
    { code: "ECT303", name: "Control Systems", credits: 4 },
    { code: "ECT305", name: "Digital Communication", credits: 4 },
    { code: "ECT307", name: "Computer Networks", credits: 4 },
    { code: "ECT309", name: "Digital Signal Processing", credits: 4 },
    { code: "MGT305", name: "Management for Engineers", credits: 3 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 5",
  prepIntro:
    "S5 is the most important semester for GATE ECE preparation. Control Systems, Digital Communication, and DSP are all high-weightage GATE subjects. Prepare S5 subjects with dual focus — KTU exam and GATE. Don't neglect Computer Networks even if it isn't a GATE ECE subject — it carries good marks in KTU.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "ECT303 = GATE ECE Control Systems (8-12 marks). ECT305 = GATE ECE Communication Systems (8-12 marks). ECT309 = Supports GATE ECE DSP.",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 5 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 5 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S5 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 5 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S5?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 5 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S5 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S4", href: "/ktu/2019-scheme/ece/s4" },
    { label: "ECE S6", href: "/ktu/2019-scheme/ece/s6" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS6_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S6 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 6", subtitle: "VLSI, Wireless Communication, and electives" },
    { title: "6 Subjects", subtitle: "Serious GATE preparation begins this semester" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S6 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S6 notes, question papers, and video classes for all sixth semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S6 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S6 notes",
    secondaryKeywords: ["KTU ECE S6", "KTU ECE sixth semester"],
    lsiKeywords: [
      "KTU ECE S6 notes PDF",
      "KTU ECE sixth semester study material",
      "KTU S6 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 6 subjects under the 2019 scheme. S6 continues the advanced ECE curriculum with VLSI Design, Wireless Communication, and elective subjects.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 6 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S6 continues the advanced ECE curriculum with VLSI Design, Wireless Communication, and elective subjects.",
    "Many students also begin serious GATE preparation during S6.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 6 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "ECT302", name: "Analog and Mixed Signal VLSI Design", credits: 4 },
    { code: "ECT304", name: "Wireless Communication", credits: 4 },
    { code: "ECT306", name: "Microprocessors and Microcontrollers", credits: 4 },
    { code: "ECT308", name: "Antennas and Wave Propagation", credits: 4 },
    { code: "ECT3XX", name: "Program Elective I", credits: 3 },
    { code: "MCN306", name: "Industrial Economics and Foreign Trade", credits: 3 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 6",
  prepIntro:
    "ECT302 (VLSI Design) and ECT308 (Antennas and Wave Propagation) are the most technically intensive subjects in S6. Antennas builds on Electromagnetic Theory from S4. ECT306 (Microprocessors) is a consistent KTU exam scorer — structured notes and PYQ practice make it manageable.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "ECT308 supports GATE ECE Electromagnetics (6-10 marks). ECT302 VLSI overlaps with GATE ECE Electronic Devices and Analog Circuits.",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 6 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 6 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S6 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 6 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S6?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 6 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S6 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S5", href: "/ktu/2019-scheme/ece/s5" },
    { label: "ECE S7", href: "/ktu/2019-scheme/ece/s7" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS7_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S7 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 7", subtitle: "Elective-driven — GATE exams happen this semester" },
    { title: "6 Subjects", subtitle: "Project work runs alongside regular subjects" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S7 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S7 notes, question papers, and video classes for all seventh semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S7 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S7 notes",
    secondaryKeywords: ["KTU ECE S7", "KTU ECE seventh semester"],
    lsiKeywords: [
      "KTU ECE S7 notes PDF",
      "KTU ECE seventh semester study material",
      "KTU S7 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 7 subjects under the 2019 scheme. S7 is primarily elective-driven — GATE exams typically happen this semester, so time management is critical.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 7 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S7 is primarily elective-driven with project work running alongside regular subjects.",
    "GATE exams typically happen during S7 — time management is critical this semester.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 7 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "ECT401", name: "Optical Communication and Networks", credits: 3 },
    { code: "ECT4XX", name: "Program Elective II", credits: 3 },
    { code: "ECT4XX", name: "Program Elective III", credits: 3 },
    { code: "ECT4XX", name: "Open Elective", credits: 3 },
    { code: "PHL401", name: "Project Phase II", credits: 4 },
    { code: "EEL401", name: "Seminar", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 7",
  prepIntro:
    "S7 is when GATE appears for most students. Plan your time carefully — project work, elective subjects, and GATE preparation need to run simultaneously. ECT401 (Optical Communication) is an interesting and relatively manageable subject that connects to real-world fibre optic systems.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "S7 electives can be chosen to align with GATE topics — check with your college which GATE-relevant electives are offered.",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 7 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 7 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S7 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 7 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S7?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 7 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S7 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S6", href: "/ktu/2019-scheme/ece/s6" },
    { label: "ECE S8", href: "/ktu/2019-scheme/ece/s8" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuEceS8_2019Content: KtuSemesterContent = {
  heroBadge: "KTU ECE S8 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 8", subtitle: "Final semester — main project and viva" },
    { title: "5 Subjects", subtitle: "GATE results and PSU recruitment happen this semester" },
    { title: "Free Resources", subtitle: "Notes and question papers free for all subjects" },
  ],

  seo: {
    title: "KTU ECE S8 Notes 2019 Scheme — Free | BTechTutor",
    description:
      "Free KTU ECE S8 notes, question papers, and video classes for all eighth semester subjects. 2019 scheme at BTechTutor Kerala.",
    h1: "KTU ECE S8 — Notes, Question Papers, and Coaching | 2019 Scheme",
    primaryKeyword: "KTU ECE S8 notes",
    secondaryKeywords: ["KTU ECE S8", "KTU ECE eighth semester"],
    lsiKeywords: [
      "KTU ECE S8 notes PDF",
      "KTU ECE eighth semester study material",
      "KTU S8 ECE question papers",
    ],
  },

  heroSubheading:
    "Module-wise notes, previous year question papers, and video classes for all KTU ECE Semester 8 subjects under the 2019 scheme. S8 is the final semester — dominated by the main project and viva. GATE results come out during S8 and PSU recruitment processes begin.",

  introduction: [
    "This page has everything you need for KTU ECE Semester 8 under the 2019 scheme — module-wise notes, previous year question papers, and video classes for all subjects. S8 is the final semester — dominated by the main project and viva. A few elective theory subjects run alongside.",
    "GATE results come out during S8 and PSU recruitment processes begin.",
  ],

  subjectsHeading: "Subjects in KTU ECE Semester 8 — 2019 Scheme",
  subjectsIntro:
    "Notes, question papers, and video classes are available for all subjects listed below.",
  subjects: [
    { code: "ECT402", name: "Embedded Systems", credits: 3 },
    { code: "ECT4XX", name: "Program Elective IV", credits: 3 },
    { code: "ECT4XX", name: "Program Elective V", credits: 3 },
    { code: "PHL402", name: "Project Phase III (Main Project)", credits: 8 },
    { code: "EEL402", name: "Viva Voce", credits: 2 },
  ],

  resources: [
    { title: "Notes", badge: "FREE", description: "Module-wise notes for all subjects in this semester.", linkLabel: "Access Notes", href: "#" },
    { title: "Previous Year Question Papers", badge: "FREE", description: "Semester-wise question papers with solutions.", linkLabel: "Download Papers", href: "#" },
    { title: "Video Classes", badge: "PAID", description: "Recorded video lectures covering full syllabus for all subjects.", linkLabel: "Watch Video Classes", href: "#" },
    { title: "Demo Class", badge: "FREE", description: "Watch a free sample class on YouTube before enrolling.", linkLabel: "Watch Demo on YouTube", href: "#" },
  ],

  prepHeading: "How to Prepare for KTU ECE Semester 8",
  prepIntro:
    "S8 is mostly about your main project — give it the time it deserves. The theory elective subjects have fewer internal tests so focus on exam-oriented preparation. If you have any backlogs from earlier semesters, clear them before S8 viva as backlogs can delay your degree.",
  prepBullets: [
    "Start each subject by going through the module-wise syllabus — know what is in scope",
    "Use notes to build concepts — don't study from heavy textbooks for exam preparation",
    "Solve at least 5 years of previous question papers for each subject",
    "Attend series exams seriously — CIE marks reduce ESE pressure significantly",
    "If you are struggling with any subject, get coaching early — don't wait until exam week",
  ],

  gateNote: {
    heading: "GATE Connection",
    note: "S8 is when GATE results are declared and PSU recruitment begins. Use this semester to follow up on GATE score applications.",
    footer: gateEceFooter,
  },

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    { question: "Are notes available for all KTU ECE Semester 8 subjects?", answer: "Yes — module-wise notes are available free for all subjects in KTU ECE Semester 8 under the 2019 scheme. Access them from the subject links on this page." },
    { question: "Where can I download KTU ECE S8 previous year question papers?", answer: "Previous year question papers for all KTU ECE Semester 8 subjects are available free on BTechTutor. Access them from each subject link on this page." },
    { question: "Is video class coaching available for KTU ECE S8?", answer: "Yes — recorded video classes covering the full syllabus are available for all KTU ECE Semester 8 subjects. A demo class is available on YouTube before you enrol." },
    { question: "Can I get one-to-one coaching for any KTU ECE subject?", answer: "Yes — one-to-one coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your requirement." },
    { question: "Is coaching available for KTU ECE S8 supply exams?", answer: "Yes — supply exam coaching is available for all ECE subjects. Focused preparation based on PYQ patterns and important modules. Contact us to start immediately." },
  ],

  internalLinks: [
    { label: "KTU ECE 2019 Hub", href: "/ktu/2019-scheme/ece" },
    { label: "ECE S7", href: "/ktu/2019-scheme/ece/s7" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS1_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S1 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 1", subtitle: "Common to all BTech branches" },
    { title: "Foundational", subtitle: "Maths, Physics, Mechanics, Graphics & more" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S1 2019 Scheme — Notes & PYQs",
    description:
      "KTU BTech Mechanical Engineering Semester 1 (2019 scheme) — subjects, syllabus, free notes and PYQs. Maths, Physics, Engineering Mechanics, Graphics and more.",
    h1: "KTU Mechanical Engineering — Semester 1 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S1 notes",
    secondaryKeywords: ["KTU Mechanical Semester 1", "KTU Mechanical S1 subjects"],
    lsiKeywords: [
      "KTU EST100 Engineering Mechanics notes",
      "KTU MAT101 Calculus notes free download",
      "KTU first semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 1 is common to all KTU BTech branches including Mechanical. It covers the foundational subjects that every engineer needs — Mathematics, Physics or Chemistry, Engineering Mechanics, Engineering Graphics, and the Basics of Civil and Mechanical Engineering. None of these are Mechanical-specific, but they lay the groundwork for everything from S3 onwards.",

  introduction: [
    "Semester 1 is common to all KTU BTech branches including Mechanical. It covers the foundational subjects that every engineer needs — Mathematics, Physics or Chemistry, Engineering Mechanics, Engineering Graphics, and the Basics of Civil and Mechanical Engineering. None of these are Mechanical-specific, but they lay the groundwork for everything from S3 onwards.",
    "Engineering Mechanics (EST100) is especially relevant for Mechanical students — the statics and dynamics covered here feed directly into Mechanics of Solids in S3 and Theory of Machines in S4. Don't let the 'common semester' label fool you into treating S1 as a throwaway — it sets the tone for your entire degree.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 1 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MAT101", name: "Linear Algebra and Calculus", credits: 4 },
    { code: "PHT110 / CYT100", name: "Engineering Physics B or Engineering Chemistry", credits: 4 },
    { code: "EST100 / EST110", name: "Engineering Mechanics or Engineering Graphics", credits: 4 },
    { code: "EST120 / EST130", name: "Basics of Civil & Mechanical Engg or Basics of EE", credits: 4 },
    { code: "HUT101", name: "Life Skills", credits: 2 },
    { code: "PHL120 / CYL120", name: "Engineering Physics Lab or Engineering Chemistry Lab", credits: 1 },
    { code: "ESL120 / ESL130", name: "Civil & Mechanical Workshop or EE Workshop", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S1.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S1 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S1 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 1",
  prepIntro:
    "Semester 1 sets the tone for your entire degree. While it is a common semester, key subjects like Engineering Mechanics and Mathematics lay the direct foundation for your Mechanical core subjects from S3 onwards.",
  prepBullets: [
    "MAT 101 Linear Algebra and Calculus — eigenvalues, eigenvectors, and multivariable calculus appear again in later semesters. Build your foundation here properly rather than just passing the exam.",
    "Engineering Mechanics (EST100) is directly useful for Mechanical Engineering — statics, free body diagrams, and dynamics are foundational for Mechanics of Solids in S3 and Theory of Machines later.",
    "Engineering Physics B covers oscillations and quantum mechanics — the wave and vibration concepts show up again in S5 Mechanics of Machinery. Don't study it in isolation.",
    "Engineering Graphics takes consistent practice — work through at least 20-25 past drawings before your exam. CAD skills from Section B are useful throughout your degree.",
    "Basics of Civil and Mechanical Engineering (EST120) covers thermodynamic cycles, IC engines, pumps, and manufacturing basics — all directly relevant to your Mechanical career. Take it seriously.",
    "Lab records and workshop attendance carry internal marks. Be regular — they are easy marks to secure.",
  ],

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What are the subjects in KTU Mechanical S1 2019 scheme?",
      answer:
        "KTU Mechanical S1 (2019 scheme) includes MAT101 Linear Algebra and Calculus, Engineering Physics B or Engineering Chemistry, Engineering Mechanics or Engineering Graphics (depending on slot allocation), Basics of Civil and Mechanical Engg or Basics of EE, HUT101 Life Skills (non-credit), and labs/workshop.",
    },
    {
      question: "Is Engineering Mechanics in S1 relevant for Mechanical Engineering?",
      answer:
        "Very much so. EST100 Engineering Mechanics covers statics, dynamics, friction, and free body diagrams. These concepts directly feed into Mechanics of Solids (MET201) in S3 and Mechanics of Machines later. Mechanical students who do well in S1 Mechanics typically find S3 easier.",
    },
    {
      question: "Which subjects are most important in KTU Mechanical S1?",
      answer:
        "MAT101 and Engineering Mechanics are the most directly important for your Mechanical degree. But all S1 subjects contribute to your CGPA — there is no subject worth neglecting.",
    },
    {
      question: "Does BTechTutor provide notes for KTU Mechanical S1?",
      answer: "Yes. Free notes and PYQs for all KTU Mechanical S1 subjects are available on BTechTutor.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS2_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S2 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 2", subtitle: "Common to all BTech branches" },
    { title: "Key Subjects", subtitle: "MAT102, C Programming, Communication" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S2 2019 Scheme — Notes & PYQs",
    description:
      "KTU BTech Mechanical Engineering Semester 2 (2019 scheme) — subjects, syllabus, free notes and PYQs. Vector Calculus, Transforms, Professional Communication, Programming in C.",
    h1: "KTU Mechanical Engineering — Semester 2 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S2 notes",
    secondaryKeywords: ["KTU Mechanical Semester 2", "KTU Mechanical S2 subjects"],
    lsiKeywords: [
      "KTU EST102 Programming in C notes",
      "KTU MAT102 Calculus transforms notes",
      "KTU second semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 2 continues the common curriculum. MAT102 (Vector Calculus, Differential Equations and Transforms) is the key maths subject here, and it is more demanding than MAT101. The science subject switches between Physics B and Chemistry (opposite of S1). New additions are EST102 Programming in C and HUT102 Professional Communication — both important in their own ways.",

  introduction: [
    "Semester 2 continues the common curriculum. MAT102 (Vector Calculus, Differential Equations and Transforms) is the key maths subject here, and it is more demanding than MAT101. The science subject switches between Physics B and Chemistry (opposite of S1). New additions are EST102 Programming in C and HUT102 Professional Communication — both important in their own ways.",
    "Programming in C (EST102) is the only programming course most Mechanical students take — and it's more useful than it appears. Basic coding logic is increasingly relevant in modern Mechanical Engineering, especially in Mechatronics and CAD/CAM contexts. Use S2 to build good study habits — S3 will demand them.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 2 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MAT102", name: "Vector Calculus, Differential Equations and Transforms", credits: 4 },
    { code: "PHT110 / CYT100", name: "Engineering Physics B or Chemistry (opposite of S1)", credits: 4 },
    { code: "EST100 / EST110", name: "Engineering Mechanics or Engineering Graphics (opposite of S1)", credits: 4 },
    { code: "EST120 / EST130", name: "Basics of Civil & Mechanical Engg or Basics of EE (opposite of S1)", credits: 4 },
    { code: "HUT102", name: "Professional Communication", credits: 2 },
    { code: "EST102", name: "Programming in C", credits: 4 },
    { code: "PHL120 / CYL120", name: "Physics Lab or Chemistry Lab", credits: 1 },
    { code: "ESL120 / ESL130", name: "Civil & Mechanical Workshop or EE Workshop (opposite of S1)", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S2.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S2 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S2 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 2",
  prepIntro:
    "Semester 2 continues to build the groundwork for your engineering degree. Developing structured study habits in C Programming and Vector Calculus will serve you exceptionally well as core engineering subjects begin in S3.",
  prepBullets: [
    "MAT102 Vector Calculus and Transforms — Laplace and Fourier Transforms appear directly in S3 Mechanics of Fluids and later in Dynamics of Machinery. Don't treat this as just another exam.",
    "EST102 Programming in C — learn to think logically, not just memorise syntax. Problem-solving with loops, functions, and arrays is what the exam tests. Work through past question programs systematically.",
    "HUT102 Professional Communication is fully scoring if you prepare technical writing, formal letter formats, and group discussion techniques. Don't dismiss it as an easy pass.",
    "If you took Engineering Mechanics in S2 instead of S1 — treat it seriously. The statics and dynamics concepts are directly foundational for S3 Mechanics of Solids.",
    "Use S2 to establish a consistent daily study routine. S3 subjects hit harder and faster — the students who are already in a study rhythm handle the transition much better.",
  ],

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What are the subjects in KTU Mechanical S2 2019 scheme?",
      answer:
        "KTU Mechanical S2 (2019 scheme) includes MAT102 Vector Calculus Differential Equations and Transforms, the alternate Physics B or Chemistry subject from S1, EST102 Programming in C, HUT102 Professional Communication, and the alternate Engineering Mechanics or Graphics and Basic Engineering subjects from S1, plus corresponding labs and workshop.",
    },
    {
      question: "Why is Programming in C in KTU Mechanical S2?",
      answer:
        "EST102 Programming in C is a common subject for all KTU BTech branches in S2. For Mechanical students, basic programming logic is relevant in later subjects like CAD/CAM (S6) and Mechatronics (S8), and increasingly in industry roles that involve automation and data analysis.",
    },
    {
      question: "Is MAT102 harder than MAT101 for KTU Mechanical students?",
      answer:
        "Most students find MAT102 more challenging. Vector Calculus and Transforms require more practice. However, the Laplace and Fourier Transform techniques covered here are used directly in Fluid Mechanics and later in vibration analysis — making it worth mastering properly.",
    },
    {
      question: "Are KTU Mechanical S2 notes available for free?",
      answer: "Yes. BTechTutor provides free notes and PYQs for all KTU Mechanical S2 subjects.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S1", href: "/ktu/2019-scheme/mechanical/s1" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS3_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S3 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 3", subtitle: "First branch-specific semester for Mechanical" },
    { title: "Core Papers", subtitle: "Mechanics of Solids, Fluid Mechanics, Metallurgy" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S3 2019 Scheme — Notes & PYQs",
    description:
      "KTU Mechanical Engineering Semester 3 (2019 scheme) — Mechanics of Solids, Mechanics of Fluids, Metallurgy. Free notes, PYQs and online tuition for KTU Mechanical S3.",
    h1: "KTU Mechanical Engineering — Semester 3 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S3 notes",
    secondaryKeywords: ["KTU Mechanical Semester 3", "KTU Mechanical S3 subjects"],
    lsiKeywords: [
      "KTU MET201 Mechanics of Solids notes",
      "KTU MET203 Mechanics of Fluids notes",
      "KTU third semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 3 is where Mechanical Engineering properly begins. After two semesters of common subjects, S3 introduces three core Mechanical papers — Mechanics of Solids (MET201), Mechanics of Fluids (MET203), and Metallurgy and Material Science (MET205). These are not light subjects. Each one has significant numerical work, conceptual depth, and direct connections to later subjects.",

  introduction: [
    "Semester 3 is where Mechanical Engineering properly begins. After two semesters of common subjects, S3 introduces three core Mechanical papers — Mechanics of Solids (MET201), Mechanics of Fluids (MET203), and Metallurgy and Material Science (MET205). These are not light subjects. Each one has significant numerical work, conceptual depth, and direct connections to later subjects.",
    "Mechanics of Solids is the subject that defines how well students handle S4 and beyond. Mechanics of Fluids forms the base for Fluid Machinery in S4 and Thermal Engineering in S5. Metallurgy introduces materials concepts you'll need in S4 Manufacturing Process. Many students underestimate the pace change between S2 and S3 — starting early and getting help for difficult topics makes a measurable difference to your S3 CGPA.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 3 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MAT201", name: "Partial Differential Equations and Complex Analysis", credits: 4 },
    { code: "MET201", name: "Mechanics of Solids", credits: 4 },
    { code: "MET203", name: "Mechanics of Fluids", credits: 4 },
    { code: "MET205", name: "Metallurgy and Material Science", credits: 4 },
    { code: "EST200 / HUT200", name: "Design and Engineering or Professional Ethics", credits: 3 },
    { code: "MCN201", name: "Sustainable Engineering", credits: 0 },
    { code: "MEL201", name: "Computer Aided Machine Drawing Lab", credits: 2 },
    { code: "MEL203", name: "Materials Testing Lab", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S3.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S3 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S3 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 3",
  prepIntro:
    "Semester 3 introduces heavy core topics. Starting early, practicing numerical derivations, and building clear foundational concepts are key to scoring well in this demanding semester.",
  prepBullets: [
    "MET201 Mechanics of Solids — master SFD and BMD first. These two topics alone account for a large portion of exam questions. Work through 30-40 past numerical problems before your exam.",
    "MET203 Mechanics of Fluids — the continuity equation, Bernoulli's theorem, and pipe flow (Darcy-Weisbach) are the backbone of this subject. Understand derivations first, then practice numericals.",
    "MET205 Metallurgy and Material Science — the iron-carbon phase diagram and heat treatment processes are the most exam-heavy topics. Draw and label these diagrams until you can do them from memory.",
    "MAT201 (PDE and Complex Analysis) — the PDE methods (separation of variables, Fourier method) and Cauchy-Riemann equations are the most frequently tested topics. Focus past-paper practice here.",
    "MEL201 Computer Aided Machine Drawing Lab — AutoCAD and SolidWorks/CATIA skills are directly useful throughout your degree and career. Take the lab seriously, not just for marks.",
    "Both labs carry practical exam marks. Be regular, maintain lab records, and understand the experiments — not just the procedure but the theory behind each test.",
  ],

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Mechanical S3 2019 scheme?",
      answer:
        "KTU Mechanical S3 (2019 scheme) includes MAT201 Partial Differential Equations and Complex Analysis, MET201 Mechanics of Solids, MET203 Mechanics of Fluids, MET205 Metallurgy and Material Science, EST200 Design and Engineering or HUT200 Professional Ethics, MCN201 Sustainable Engineering (non-credit), MEL201 Computer Aided Machine Drawing Lab, and MEL203 Materials Testing Lab.",
    },
    {
      question: "Is Mechanics of Solids hard in KTU Mechanical?",
      answer:
        "It is one of the most challenging subjects for Mechanical students. The SFD/BMD, torsion, deflection, and pressure vessel problems require strong numerical practice. With past question practice and proper guidance, most students can score well above 60.",
    },
    {
      question: "What is the difference between Mechanics of Solids and Mechanics of Fluids in S3?",
      answer:
        "MET201 Mechanics of Solids deals with the behaviour of solid materials under load — stress, strain, bending, torsion. MET203 Mechanics of Fluids deals with fluid behaviour — pressure, flow, viscosity, Bernoulli. Both are core Mechanical subjects that form the base for many S4-S6 subjects.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU Mechanical S3?",
      answer:
        "Yes. Mechanics of Solids and Mechanics of Fluids are popular subjects for online tuition at BTechTutor. Call +91 98950 09337 to know more.",
    },
    {
      question: "How important is Metallurgy for KTU Mechanical students?",
      answer:
        "MET205 is directly relevant to Manufacturing Process in S4 and Design of Machine Elements in S7. Understanding material properties, phase diagrams, and heat treatment helps you make better engineering decisions in design and manufacturing contexts.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S2", href: "/ktu/2019-scheme/mechanical/s2" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS4_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S4 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 4", subtitle: "Builds directly on S3 — Thermal and Fluid machines" },
    { title: "Key Core", subtitle: "Thermodynamics, Manufacturing, Fluid Machinery" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S4 2019 Scheme — Notes & PYQs",
    description:
      "KTU Mechanical Engineering Semester 4 (2019 scheme) — Engineering Thermodynamics, Manufacturing Process, Fluid Machinery. Free notes, PYQs and online tuition.",
    h1: "KTU Mechanical Engineering — Semester 4 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S4 notes",
    secondaryKeywords: ["KTU Mechanical Semester 4", "KTU Mechanical S4 subjects"],
    lsiKeywords: [
      "KTU MET202 Engineering Thermodynamics notes",
      "KTU MET206 Fluid Machinery notes",
      "KTU fourth semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 4 introduces three subjects that are central to the entire Mechanical degree — Engineering Thermodynamics (MET202), Manufacturing Process (MET204), and Fluid Machinery (MET206). Thermodynamics is one of those subjects that Mechanical students either find fascinating or deeply frustrating — it is highly conceptual with a significant numerical component.",

  introduction: [
    "Semester 4 introduces three subjects that are central to the entire Mechanical degree — Engineering Thermodynamics (MET202), Manufacturing Process (MET204), and Fluid Machinery (MET206). Thermodynamics is one of those subjects that Mechanical students either find fascinating or deeply frustrating — it is highly conceptual with a significant numerical component.",
    "Manufacturing Process covers the actual methods used to shape and join materials — casting, forging, welding, machining. Fluid Machinery applies the S3 fluid mechanics concepts to pumps, turbines, and compressors. Together these three subjects define your manufacturing and thermal engineering foundation for S5 and S6. MAT202 also introduces Probability and Numerical Methods — useful in GATE later.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 4 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MAT202", name: "Probability, Statistics and Numerical Methods", credits: 4 },
    { code: "MET202", name: "Engineering Thermodynamics", credits: 4 },
    { code: "MET204", name: "Manufacturing Process", credits: 4 },
    { code: "MET206", name: "Fluid Machinery", credits: 4 },
    { code: "EST200 / HUT200", name: "Design and Engineering or Professional Ethics (opposite of S3)", credits: 3 },
    { code: "MCN202", name: "Constitution of India", credits: 0 },
    { code: "MEL202", name: "Fluid Mechanics and Hydraulic Machinery Lab", credits: 2 },
    { code: "MEL204", name: "Machine Tools Lab-I", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S4.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S4 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S4 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 4",
  prepIntro:
    "S4 demands strong focus on thermodynamic cycle concepts and fluid machine velocity triangles. Build solid analytical and mathematical models during the semester.",
  prepBullets: [
    "MET202 Engineering Thermodynamics — the laws of thermodynamics, steam tables, and power cycle calculations are the exam essentials. Learn to read steam tables fluently — they come up in almost every exam.",
    "MET204 Manufacturing Process — casting defects, welding types, and forging operations are the most exam-heavy theory portions. The exam questions are largely descriptive with diagrams — prepare labelled sketches.",
    "MET206 Fluid Machinery — pump and turbine characteristics, specific speed calculations, and dimensional analysis are the key topics. Past papers show a very consistent question pattern here.",
    "MAT202 Probability and Numerical Methods — probability distributions (normal, binomial, Poisson) and Newton's interpolation methods are the most exam-relevant topics. Numerical methods also appear in GATE.",
    "MEL202 Fluid Mechanics and HM Lab — pump characteristic curves and turbine efficiency experiments are important for your practical exam. Understand the theory behind each experiment.",
    "MEL204 Machine Tools Lab-I introduces lathe and drilling operations. Being comfortable with basic machining here prepares you well for Advanced Manufacturing in S6.",
  ],

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Mechanical S4 2019 scheme?",
      answer:
        "KTU Mechanical S4 (2019 scheme) includes MAT202 Probability Statistics and Numerical Methods, MET202 Engineering Thermodynamics, MET204 Manufacturing Process, MET206 Fluid Machinery, the alternate Design and Engineering or Professional Ethics from S3, MCN202 Constitution of India (non-credit), MEL202 FM and HM Lab, and MEL204 Machine Tools Lab-I.",
    },
    {
      question: "Is Engineering Thermodynamics hard for KTU Mechanical students?",
      answer:
        "It is considered one of the harder S4 subjects. The combination of conceptual thermodynamic laws and numerical problem solving (especially steam table problems and cycle efficiency calculations) requires consistent practice. Students who grasp the conceptual framework first find the numericals much easier.",
    },
    {
      question: "What is Fluid Machinery in KTU Mechanical S4?",
      answer:
        "MET206 Fluid Machinery covers the application of fluid mechanics to machines — centrifugal and reciprocating pumps, impulse and reaction turbines (Pelton, Francis, Kaplan), and compressors. It builds directly on MET203 Mechanics of Fluids from S3.",
    },
    {
      question: "Can I get free KTU Mechanical S4 notes and PYQs?",
      answer: "Yes. Free notes and PYQs for all KTU Mechanical S4 subjects are available on BTechTutor.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S4", href: "/ktu/2019-scheme/mechanical/s4" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS5_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S5 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 5", subtitle: "Core applied mechanical engineering begins" },
    { title: "Key Core", subtitle: "Machinery, Thermal, Industrial, Metrology" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S5 2019 Scheme — Notes & PYQs",
    description:
      "KTU Mechanical Engineering Semester 5 (2019 scheme) — Mechanics of Machinery, Thermal Engineering, Industrial Engineering, Machine Tools. Free notes, PYQs, tuition.",
    h1: "KTU Mechanical Engineering — Semester 5 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S5 notes",
    secondaryKeywords: ["KTU Mechanical Semester 5", "KTU Mechanical S5 subjects"],
    lsiKeywords: [
      "KTU MET301 Mechanics of Machinery notes",
      "KTU MET303 Thermal Engineering notes",
      "KTU fifth semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 5 is where applied Mechanical Engineering hits full stride. Mechanics of Machinery (MET301) covers the kinematics and dynamics of machines — gears, cams, governors, gyroscopes. Thermal Engineering (MET303) extends S4 Thermodynamics into IC engines, gas turbines, and steam nozzles. Industrial and Systems Engineering (MET305) introduces production planning, work study, and operations research.",

  introduction: [
    "Semester 5 is where applied Mechanical Engineering hits full stride. Mechanics of Machinery (MET301) covers the kinematics and dynamics of machines — gears, cams, governors, gyroscopes. Thermal Engineering (MET303) extends S4 Thermodynamics into IC engines, gas turbines, and steam nozzles. Industrial and Systems Engineering (MET305) introduces production planning, work study, and operations research.",
    "Machine Tools and Metrology (MET307) covers both manufacturing machines and precision measurement — directly practical and GATE-relevant. S5 also introduces the Comprehensive Course Work preparation track (MET308 in S6 builds on this). If you're planning GATE, S5 subjects are core — Mechanics of Machinery, Thermal Engineering, and Manufacturing Process form a large part of the GATE ME syllabus.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 5 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MET301", name: "Mechanics of Machinery", credits: 4 },
    { code: "MET303", name: "Thermal Engineering", credits: 4 },
    { code: "MET305", name: "Industrial and Systems Engineering", credits: 4 },
    { code: "MET307", name: "Machine Tools and Metrology", credits: 4 },
    { code: "HUT300 / HUT310", name: "Industrial Economics and Foreign Trade or Management for Engineers", credits: 3 },
    { code: "MCN301", name: "Disaster Management", credits: 0 },
    { code: "MEL331", name: "Machine Tools Lab-II", credits: 2 },
    { code: "MEL333", name: "Thermal Engineering Lab-I", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S5.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S5 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S5 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 5",
  prepIntro:
    "S5 requires strong numerical focus on mechanism velocity/acceleration vectors and IC engine performance metrics. Build strong foundations for both university exams and GATE.",
  prepBullets: [
    "MET301 Mechanics of Machinery — velocity and acceleration analysis of mechanisms (graphical and analytical) and gear train problems are the most exam-heavy sections. Balancing and vibration come after — don't skip them.",
    "MET303 Thermal Engineering — IC engine performance calculations (BHP, IHP, mechanical efficiency) and gas turbine cycle problems are the key numerical areas. Air standard cycle theory is scoring.",
    "MET305 Industrial and Systems Engineering — work study, inventory models (EOQ), and scheduling problems are the most exam-relevant areas. This subject is more scoring than its reputation suggests.",
    "MET307 Machine Tools and Metrology — the metrology section (limits, fits, tolerances, surface roughness) is directly GATE-relevant. Don't neglect it in favour of just studying machining operations.",
    "If you're preparing for GATE, MET301 and MET303 content overlaps significantly with GATE ME's Theory of Machines and Thermodynamics sections. Use S5 to build genuine depth.",
    "Both labs carry practical exam marks. The thermal lab tests IC engine performance — understand the test procedure and how to calculate efficiency from the readings.",
  ],

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Mechanical S5 2019 scheme?",
      answer:
        "KTU Mechanical S5 (2019 scheme) includes MET301 Mechanics of Machinery, MET303 Thermal Engineering, MET305 Industrial and Systems Engineering, MET307 Machine Tools and Metrology, HUT300/HUT310 Industrial Economics or Management for Engineers, MCN301 Disaster Management (non-credit), MEL331 Machine Tools Lab-II, and MEL333 Thermal Engineering Lab-I.",
    },
    {
      question: "Is Mechanics of Machinery hard for KTU Mechanical students?",
      answer:
        "It is considered one of the more challenging S5 subjects. The velocity and acceleration analysis of linkage mechanisms requires both conceptual clarity and graphical accuracy. The vibration and balancing portions add to the challenge but have predictable question patterns.",
    },
    {
      question: "What is covered in Thermal Engineering in KTU Mechanical S5?",
      answer:
        "MET303 Thermal Engineering covers the applied thermal systems — IC engines (both SI and CI types), their performance analysis, gas turbines, steam nozzles, steam turbines, air compressors, and refrigeration systems. It builds directly on S4 Engineering Thermodynamics.",
    },
    {
      question: "Is Industrial Engineering in KTU Mechanical S5 scoring?",
      answer:
        "Yes. MET305 Industrial and Systems Engineering is generally considered more scoring than the thermal or mechanical subjects. Work study, production planning, and inventory control have predictable question patterns. Past papers are the best preparation guide.",
    },
    {
      question: "Does BTechTutor offer GATE coaching for KTU Mechanical students?",
      answer:
        "Yes. BTechTutor offers GATE coaching for Mechanical Engineering. If you're in S5 and planning GATE, this is a good time to start. Call +91 98950 09337.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S4", href: "/ktu/2019-scheme/mechanical/s4" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS6_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S6 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 6", subtitle: "Last fully theory-intensive semester" },
    { title: "Key Core", subtitle: "Heat & Mass Transfer, Dynamic Design, Advanced Manufacturing" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S6 2019 Scheme — Notes & PYQs",
    description:
      "KTU Mechanical Engineering Semester 6 (2019 scheme) — Heat & Mass Transfer, Machine Design, Advanced Manufacturing, Program Elective I. Free notes, PYQs, tuition.",
    h1: "KTU Mechanical Engineering — Semester 6 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S6 notes",
    secondaryKeywords: ["KTU Mechanical Semester 6", "KTU Mechanical S6 subjects"],
    lsiKeywords: [
      "KTU MET302 Heat and Mass Transfer notes",
      "KTU MET304 Dynamics of Machinery and Machine Design notes",
      "KTU sixth semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 6 is the last fully theory-intensive semester before the elective and project-heavy S7. Heat and Mass Transfer (MET302) is considered one of the most demanding subjects in the entire Mechanical degree — combining thermodynamics, fluid mechanics, and mathematics into heat exchanger design and analysis. Dynamics of Machinery and Machine Design (MET304) brings together kinematics from S5 and materials from S3/S4 into mechanical design.",

  introduction: [
    "Semester 6 is the last fully theory-intensive semester before the elective and project-heavy S7. Heat and Mass Transfer (MET302) is considered one of the most demanding subjects in the entire Mechanical degree — combining thermodynamics, fluid mechanics, and mathematics into heat exchanger design and analysis. Dynamics of Machinery and Machine Design (MET304) brings together kinematics from S5 and materials from S3/S4 into mechanical design.",
    "Advanced Manufacturing Engineering (MET306) covers CNC machining, non-conventional manufacturing, and computer-aided manufacturing — directly relevant to industry. S6 also introduces Program Elective I, letting you begin specialising in an area of interest. The S6 Comprehensive Course Work (MET308) is an online objective exam covering 5 core subjects from S3-S5 — treat it like a mini-GATE practice.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 6 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MET302", name: "Heat and Mass Transfer", credits: 4 },
    { code: "MET304", name: "Dynamics of Machinery and Machine Design", credits: 4 },
    { code: "MET306", name: "Advanced Manufacturing Engineering", credits: 4 },
    { code: "METXXX", name: "Program Elective I", credits: 3 },
    { code: "HUT300 / HUT310", name: "Industrial Economics or Management for Engineers (whichever not taken in S5)", credits: 3 },
    { code: "MET308", name: "Comprehensive Course Work", credits: 1 },
    { code: "MEL332", name: "Computer Aided Design and Analysis Lab", credits: 2 },
    { code: "MEL334", name: "Thermal Engineering Lab-II", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S6.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S6 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S6 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 6",
  prepIntro:
    "S6 demands strong core capabilities. Master Heat Exchanger designs and machine element codes systematically from the start of the semester.",
  prepBullets: [
    "MET302 Heat and Mass Transfer — start with the conduction equations and Fourier's law, then move to convection correlations. Heat exchanger design (LMTD and NTU-effectiveness methods) is consistently the highest-weightage exam topic.",
    "MET304 Dynamics of Machinery and Machine Design — the design section (shafts, keys, springs, bearings) is highly numerical and follows IS codes. Dynamic analysis of mechanisms continues from S5. Both halves need equal attention.",
    "MET306 Advanced Manufacturing Engineering — CNC part programming (G-codes and M-codes) and non-conventional processes (EDM, LBM principles) are the most exam-relevant topics. The CAM section is shorter but important.",
    "MET308 Comprehensive Course Work — this GATE-style online exam covers 5 core subjects from S3-S5. It's also excellent GATE practice. Revise Mechanics of Solids, Fluids, Thermodynamics, Manufacturing Process, and Mechanics of Machinery.",
    "MEL332 CAD and Analysis Lab — ANSYS or equivalent FEA work is directly useful in your final year project and in industry. Don't treat this lab as just another mark — it builds skills.",
    "Program Elective I — choose based on your interest and career direction. If you're aiming for GATE, Advanced Mechanics of Solids or IC Engine Combustion are directly relevant to GATE ME.",
  ],

  gateNote: {
    heading: "Program Elective I — Available Options (S6)",
    note: "Options include: MET312 Nondestructive Testing, MET322 Data Analytics for Engineers, MET332 Advanced Mechanics of Solids, MET342 IC Engine Combustion and Pollution, MET352 Automobile Engineering, MET362 Product Design and Development, and MET372 Advanced Metal Joining Techniques.",
    footer: "Choose your elective based on your interest and GATE/career alignment.",
  },

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Mechanical S6 2019 scheme?",
      answer:
        "KTU Mechanical S6 (2019 scheme) includes MET302 Heat and Mass Transfer, MET304 Dynamics of Machinery and Machine Design, MET306 Advanced Manufacturing Engineering, a Program Elective I (choice from 7 options), HUT300 or HUT310 (whichever not taken in S5), MET308 Comprehensive Course Work, MEL332 CAD and Analysis Lab, and MEL334 Thermal Engineering Lab-II.",
    },
    {
      question: "Is Heat and Mass Transfer the hardest subject in KTU Mechanical?",
      answer:
        "Many students consider MET302 one of the most challenging subjects in the degree. It combines conduction, convection, and radiation theory with numerical heat exchanger design. Having a solid S4 Thermodynamics and S3 Fluids base makes a significant difference.",
    },
    {
      question: "What is the Comprehensive Course Work in KTU Mechanical S6?",
      answer:
        "MET308 is an online objective exam (GATE-style) conducted in S6. It covers 5 core subjects from S3 to S5. The minimum pass mark is 25 out of 50. It carries credit and is a good indicator of GATE readiness.",
    },
    {
      question: "How do I choose Program Elective I in KTU Mechanical S6?",
      answer:
        "Choose based on your career interest. If you're going into manufacturing, Nondestructive Testing or Advanced Metal Joining are relevant. For product development, Product Design is a strong choice. For GATE preparation, Advanced Mechanics of Solids is directly useful.",
    },
    {
      question: "Can I get KTU Mechanical S6 notes for free?",
      answer: "Yes. BTechTutor provides free notes and PYQs for all KTU Mechanical S6 subjects including Heat Transfer and Advanced Manufacturing Engineering.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S5", href: "/ktu/2019-scheme/mechanical/s5" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS7_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S7 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 7", subtitle: "Lighter theory load — seminar & project phase I begin" },
    { title: "Key Core", subtitle: "Design of Machine Elements, Electives, Seminar" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S7 2019 Scheme — Notes & PYQs",
    description:
      "KTU Mechanical Engineering Semester 7 (2019 scheme) — Design of Machine Elements, Program Elective II, Open Elective, Seminar, Project Phase I. Notes and tuition.",
    h1: "KTU Mechanical Engineering — Semester 7 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S7 notes",
    secondaryKeywords: ["KTU Mechanical Semester 7", "KTU Mechanical S7 subjects"],
    lsiKeywords: [
      "KTU MET401 Design of Machine Elements notes",
      "KTU MET433 Finite Element Method notes",
      "KTU seventh semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 7 marks the beginning of the final phase of your Mechanical degree. The theory load is lighter than S6 — just one compulsory theory subject (MET401 Design of Machine Elements) and two electives. But S7 comes with a seminar, a project Phase I, and the increasingly real pressure of placements and GATE preparation for many students.",

  introduction: [
    "Semester 7 marks the beginning of the final phase of your Mechanical degree. The theory load is lighter than S6 — just one compulsory theory subject (MET401 Design of Machine Elements) and two electives. But S7 comes with a seminar, a project Phase I, and the increasingly real pressure of placements and GATE preparation for many students.",
    "Design of Machine Elements is a design-synthesis subject — you apply your knowledge of materials, mechanics, and manufacturing to design actual machine components. The two electives (Program Elective II and Open Elective) let you specialise. MCN401 Industrial Safety Engineering is a mandatory non-credit course. Use the lighter S7 schedule to accelerate your GATE prep or project work, don't coast.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 7 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MET401", name: "Design of Machine Elements", credits: 3 },
    { code: "METXXX", name: "Program Elective II", credits: 3 },
    { code: "METXXX", name: "Open Elective", credits: 3 },
    { code: "MCN401", name: "Industrial Safety Engineering", credits: 0 },
    { code: "MEL411", name: "Mechanical Engineering Lab", credits: 2 },
    { code: "MEQ413", name: "Seminar", credits: 2 },
    { code: "MED415", name: "Project Phase I", credits: 2 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S7.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S7 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S7 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Prepare for KTU Mechanical Semester 7",
  prepIntro:
    "S7 offers a lighter course load to allow you to focus on your Project Phase I, Seminar, and GATE/placement preparations. Leverage this time strategically.",
  prepBullets: [
    "MET401 Design of Machine Elements — this is a design code-based subject. Know the relevant design standards (IS codes for shafts, gears, springs) and practice full design problems. Design of bolted joints, shafts, and gears is a perennial exam favourite.",
    "Program Elective II — if you're planning GATE, Finite Element Method (MET433) and Optimization Techniques (MET423) both align with GATE ME Advanced topics. For the industry, Operations Management and AC&R have strong career relevance.",
    "Open Elective — pick something genuinely useful. Renewable Energy Engineering and Quality Engineering are increasingly industry-relevant. Avoid picking purely for perceived ease.",
    "Project Phase I — use this semester to do your literature review properly. A well-researched Phase I report makes Phase II significantly smoother. Start with at least 20-25 journal/conference papers.",
    "Seminar — pick a topic you understand well, not just one that sounds impressive. Technical depth matters more than topic novelty. Prepare a well-structured 20-minute presentation.",
    "If you're preparing for GATE, S7's lighter schedule is the best opportunity to accelerate preparation. You have roughly 10-12 months to GATE if you start in S7.",
  ],

  gateNote: {
    heading: "Program Elective II & Open Elective Options (S7)",
    note: "Program Elective II options include: MET413 Advanced Methods in Nondestructive Testing, MET423 Optimization Techniques, MET433 Finite Element Method, MET443 Aerospace Engineering, MET453 Hybrid and Electric Vehicles, MET463 Operations Management, and MET473 Air Conditioning and Refrigeration. Open Elective options include: MET415 Introduction to Business Analytics, MET425 Quantitative Techniques, MET435 Automotive Technology, MET445 Renewable Energy Engineering, and MET455 Quality Engineering and Management.",
    footer: "Coordinate with your department slots and select courses aligned with your goals.",
  },

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in the KTU Mechanical S7 2019 scheme?",
      answer:
        "KTU Mechanical S7 (2019 scheme) includes MET401 Design of Machine Elements, Program Elective II (choice from 7 options), an Open Elective (choice from 5 options), MCN401 Industrial Safety Engineering (non-credit), MEL411 Mechanical Engineering Lab, MEQ413 Seminar, and MED415 Project Phase I.",
    },
    {
      question: "What is the Open Elective in KTU Mechanical S7?",
      answer:
        "The Open Elective is a subject that Mechanical Engineering offers for students from other branches. Mechanical students can also take it. The options include Business Analytics, Automotive Technology, Renewable Energy Engineering, Quality Engineering and Management, and Quantitative Techniques.",
    },
    {
      question: "Is Design of Machine Elements hard in KTU Mechanical S7?",
      answer:
        "MET401 is a demanding but rewarding subject. It synthesises your knowledge of mechanics, materials, and manufacturing into actual component design. Code-based design problems require both formula knowledge and systematic problem-solving practice.",
    },
    {
      question: "How should I approach Project Phase I in KTU Mechanical S7?",
      answer:
        "Start early — fix your topic and guide in the first two weeks of S7. Do a thorough literature survey, define your problem scope clearly, and submit a well-structured interim report. A strong Phase I directly reduces the pressure in Phase II.",
    },
    {
      question: "Does BTechTutor help KTU Mechanical students with GATE preparation?",
      answer:
        "Yes. BTechTutor offers GATE Mechanical Engineering coaching. S7 is a good time to begin seriously. Call +91 98950 09337 for details on the programme.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S6", href: "/ktu/2019-scheme/mechanical/s6" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

export const ktuMechanicalS8_2019Content: KtuSemesterContent = {
  heroBadge: "KTU Mechanical S8 — 2019 Scheme",

  heroHighlights: [
    { title: "Semester 8", subtitle: "Final semester — main project and comprehensive viva" },
    { title: "Key Focus", subtitle: "Mechatronics, 3 Electives, Project Phase II" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical S8 2019 Scheme — Project & Viva Guide",
    description:
      "KTU Mechanical Engineering Semester 8 (2019 scheme) — Mechatronics, Program Electives, Project Phase II, Comprehensive Viva. BTechTutor helps you finish strong.",
    h1: "KTU Mechanical Engineering — Semester 8 | 2019 Scheme",
    primaryKeyword: "KTU Mechanical S8 notes",
    secondaryKeywords: ["KTU Mechanical Semester 8", "KTU Mechanical S8 subjects"],
    lsiKeywords: [
      "KTU MET402 Mechatronics notes",
      "KTU Mechanical S8 project guide",
      "KTU eighth semester Mechanical Engineering notes",
    ],
  },

  heroSubheading:
    "Semester 8 is your final semester. One compulsory theory subject (MET402 Mechatronics), three program electives, a comprehensive viva, and your main BTech Project Phase II. The theory load is manageable — the real challenge is doing your project well while staying on top of the elective exams and the comprehensive viva.",

  introduction: [
    "Semester 8 is your final semester. One compulsory theory subject (MET402 Mechatronics), three program electives, a comprehensive viva, and your main BTech Project Phase II. The theory load is manageable — the real challenge is doing your project well while staying on top of the elective exams and the comprehensive viva.",
    "Mechatronics is an integrative subject — it brings together mechanical, electronics, and control systems. The comprehensive viva (MET404) covers 5 core subjects from S3-S5 based on the same syllabus as the S6 Comprehensive Course Work. Project Phase II is where you deliver the work you initiated in S7. Start your report early and know your project inside out before the final presentation.",
  ],

  subjectsHeading: "Subjects in KTU Mechanical Semester 8 (2019 Scheme)",
  subjectsIntro:
    "All subjects for this semester are listed below. Click on any subject to access notes, PYQs, and video classes.",
  subjects: [
    { code: "MET402", name: "Mechatronics", credits: 3 },
    { code: "METXXX", name: "Program Elective III", credits: 3 },
    { code: "METXXX", name: "Program Elective IV", credits: 3 },
    { code: "METXXX", name: "Program Elective V", credits: 3 },
    { code: "MET404", name: "Comprehensive Viva Voce", credits: 2 },
    { code: "MED416", name: "Project Phase II (Main Project)", credits: 8 },
  ],

  resources: [
    {
      title: "KTU Syllabus (2019 Scheme)",
      badge: "FREE",
      description: "Download the official KTU syllabus for Mechanical S8.",
      linkLabel: "Download Syllabus",
      href: "#",
    },
    {
      title: "Subject Notes (PDF)",
      badge: "FREE",
      description: "Free module-wise notes for all S8 subjects.",
      linkLabel: "Access Notes",
      href: "#",
    },
    {
      title: "Previous Year Questions (PYQs)",
      badge: "FREE",
      description: "S8 previous year questions for exam practice.",
      linkLabel: "Download PYQs",
      href: "#",
    },
    {
      title: "Video Classes (Full Course)",
      badge: "PAID",
      description: "Comprehensive recorded video classes covering the entire syllabus.",
      linkLabel: "Buy Course",
      href: "#",
    },
    {
      title: "Demo Class (YouTube)",
      badge: "FREE",
      description: "Watch a free sample class on YouTube before enrolling.",
      linkLabel: "Watch Demo",
      href: "#",
    },
  ],

  prepHeading: "How to Approach Your S8 — Project, Viva, and Exams",
  prepIntro:
    "S8 is about finishing strong. Balance your project execution with elective exam preparation and comprehensive viva revision. Start your dissertation report early.",
  prepBullets: [
    "Start your dissertation report writing in January — don't wait until March. The literature review, methodology, results, and conclusion chapters take much more time than expected.",
    "Your final project evaluation committee includes an external expert from industry or a research institute plus senior faculty. Prepare a clear, confident 20-minute presentation with results and conclusions.",
    "Know your project completely — methodology, limitations, results, and what you would do differently. Examiners probe the depth of your understanding.",
    "MET402 Mechatronics and the three electives carry full exam credit alongside your project. Don't neglect them.",
    "MET404 Comprehensive Viva covers the same 5 core subjects as the S6 MET308 exam. Begin revising Mechanics of Solids, Fluids, Thermodynamics, Manufacturing Process, and Mechanics of Machinery well in advance.",
    "Clear any backlogs before S8 ends — graduating on time is significantly better than extending a semester for one backlog paper.",
  ],

  gateNote: {
    heading: "Program Elective Options — S8",
    note: "Elective III: Quality Management, Decisions with Metaheuristics, Pressure Vessel and Piping Design, Computational Fluid Dynamics (CFD), Industrial Tribology, Micro and Nano Manufacturing, Heating and Ventilation Systems. Elective IV: Composite Materials, AI and Machine Learning, Acoustics and Noise Control, Heat Transfer Equipment Design, Robotics and Automation, Technology Management, Cryogenic Engineering. Elective V: Reliability Engineering, Industrial Internet of Things, Fracture Mechanics, Gas Turbines and Jet Propulsion, Advanced Energy Engineering, Additive Manufacturing, Power Plant Engineering.",
    footer: "Comprehensive Viva key topics: MET201 Mechanics of Solids, MET203 Mechanics of Fluids, MET202 Engineering Thermodynamics, MET204 Manufacturing Process, MET301 Mechanics of Machinery, and your own S8 project.",
  },

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort.",
  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What does KTU Mechanical S8 2019 scheme include?",
      answer:
        "KTU Mechanical S8 (2019 scheme) includes MET402 Mechatronics, three Program Electives (III, IV, V), MET404 Comprehensive Viva Voce, and MED416 Project Phase II. It is the final semester of the Mechanical Engineering degree.",
    },
    {
      question: "What is Mechatronics in KTU Mechanical S8?",
      answer:
        "MET402 Mechatronics covers the integration of mechanical, electronic, and control engineering — sensors, actuators, PLCs, microcontrollers, and closed-loop control systems. It is relevant to automation, robotics, and modern manufacturing roles.",
    },
    {
      question: "What is the KTU Mechanical Comprehensive Viva in S8?",
      answer:
        "MET404 Comprehensive Viva Voce is a viva conducted by a three-member committee based on 5 core subjects from S3 to S5 — the same subjects covered in the S6 MET308 online exam. The minimum pass mark is 25 out of 50. It is conducted alongside the final project evaluation.",
    },
    {
      question: "How long should a KTU Mechanical S8 project report be?",
      answer:
        "Typically 60-100 pages including all chapters, references, and appendices. KTU has official formatting guidelines your department will provide. The evaluation committee assesses technical depth and quality — not page count.",
    },
    {
      question: "Does BTechTutor help with KTU Mechanical S8 viva and exam preparation?",
      answer:
        "Yes. For subject-based revision ahead of your comprehensive viva and S8 elective exams, BTechTutor's online classes are effective. Call +91 98950 09337 for details.",
    },
  ],

  internalLinks: [
    { label: "KTU Mechanical 2019 Hub", href: "/ktu/2019-scheme/mechanical" },
    { label: "Mechanical S7", href: "/ktu/2019-scheme/mechanical/s7" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
  ],
};

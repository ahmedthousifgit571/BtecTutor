// KTU Hub content — static until API integration replaces this export.
// When integrating with the CMS or API, replace `ktuHubContent` with a
// fetched response that matches the `KtuHubContent` interface.

export interface KtuHubSeo {
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  lsiKeywords?: string[];
}

export interface KtuHubFaqItem {
  question: string;
  answer: string;
}

export interface KtuHubSchemeItem {
  title: string;
  description: string;
  note: string;
  href: string;
  ctaLabel: string;
}

export interface KtuHubBranchItem {
  title: string;
  shortTitle: string;
  href: string;
}

export interface KtuHubContent {
  heroBadge?: string;
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string[];
  offersHeading: string;
  offers: string[];
  schemesHeading: string;
  schemesSubtext: string;
  schemes: KtuHubSchemeItem[];
  schemeHelperText: string;
  branchesHeading: string;
  branchesSubtext: string;
  branches: KtuHubBranchItem[];
  whyHeading: string;
  whyBullets: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuHubContent: KtuHubContent = {
  seo: {
    title: "KTU BTech Online Tuition — Notes, PYQs & Coaching | BTechTutor",
    description:
      "KTU BTech online tuition for 2019 and 2024 scheme. Subject-wise notes, PYQs, video classes, and one-to-one coaching at BTechTutor Kerala.",
    h1: "KTU BTech Online Tuition — Your Complete Study Hub for 2019 and 2024 Scheme",
    primaryKeyword: "KTU BTech online tuition",
    secondaryKeywords: ["KTU BTech coaching Kerala", "KTU online classes 2024 scheme"],
    lsiKeywords: [
      "KTU BTech tuition online Kerala",
      "best online coaching for KTU BTech",
      "KTU 2024 scheme online classes",
    ],
  },

  heroSubheading:
    "100% online coaching for all KTU BTech subjects across both the 2019 and 2024 schemes. Module-wise notes, PYQs, video classes, and one-to-one sessions — everything in one place.",

  introduction: [
    "If you are a KTU BTech student struggling with subjects, preparing for end-semester exams, or trying to clear a backlog, you are in the right place. BTechTutor offers 100% online coaching for all KTU BTech subjects across both the 2019 and 2024 schemes, covering EEE, ECE, Civil, Mechanical, CS, and IT branches.",
    "Every subject page has the syllabus, module-wise notes, previous year question papers, and video classes. If you need more personalised help, one-to-one coaching is available directly.",
  ],

  offersHeading: "What BTechTutor Offers for KTU Students",
  offers: [
    "Module-wise notes — free, available for all subjects and semesters",
    "Previous year question papers — free, semester-wise and subject-wise",
    "Video classes — recorded lectures covering full syllabus, exam-focused and easy to follow",
    "One-to-one coaching — personalised sessions, direct doubt solving, custom study plan",
    "Supply exam coaching — targeted preparation for students clearing backlogs",
    "Series exam coaching — focused preparation for internal assessment exams",
  ],

  schemesHeading: "Choose Your Scheme",
  schemesSubtext:
    "KTU currently runs two schemes. Choose the one that applies to you.",
  schemes: [
    {
      title: "KTU 2024 Scheme",
      description:
        "For students admitted from 2024-25 onwards. Updated industry-aligned content, more elective flexibility, and a 170-credit structure.",
      note: "2024-25 batch and onwards",
      href: "/ktu/2024",
      ctaLabel: "Explore 2024 Scheme",
    },
    {
      title: "KTU 2019 Scheme",
      description:
        "For students admitted between 2019 and 2024. Complete subject-wise coaching, notes, and PYQs for all semesters.",
      note: "2019 to 2024 admissions",
      href: "/ktu/2019",
      ctaLabel: "Explore 2019 Scheme",
    },
  ],
  schemeHelperText:
    "Not sure which scheme you are on? Check your college admission year. 2024-25 batch and onwards follow the 2024 scheme. Earlier batches follow the 2019 scheme.",

  branchesHeading: "Subjects Available — All Branches",
  branchesSubtext:
    "Coaching is available for all major KTU branches. Click on your branch to see all available subjects.",
  branches: [
    { title: "Electrical and Electronics Engineering", shortTitle: "EEE", href: "/ktu/2024" },
    { title: "Electronics and Communication Engineering", shortTitle: "ECE", href: "/ktu/2024" },
    { title: "Civil Engineering", shortTitle: "Civil", href: "/ktu/2024" },
    { title: "Mechanical Engineering", shortTitle: "Mechanical", href: "/ktu/2024" },
    { title: "Computer Science and Engineering", shortTitle: "CS", href: "/ktu/2024" },
    { title: "Information Technology", shortTitle: "IT", href: "/ktu/2024" },
  ],

  whyHeading: "Why do KTU Students Choose BTechTutor?",
  whyBullets: [
    "100% online — study from anywhere in Kerala or outside",
    "Coaching available for both 2019 and 2024 KTU schemes",
    "Notes and question papers are free — no payment needed to access study material",
    "Video classes are recorded — watch at your own pace, pause and rewind anytime",
    "One-to-one sessions are personalised — not a generic group class",
    "Supply exam and series exam coaching available separately",
    "15+ years of experience, 5000+ students, faculty with strong academic backgrounds",
  ],

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Does BTechTutor cover all KTU BTech branches?",
      answer:
        "Yes — coaching and study materials are available for EEE, ECE, Civil, Mechanical, CS, and IT branches under both the 2019 and 2024 KTU schemes.",
    },
    {
      question: "Are the notes and question papers really free?",
      answer:
        "Yes. Module-wise notes and previous year question papers are available free of charge on each subject page. Video classes are paid, and a demo class is available on YouTube before you enrol.",
    },
    {
      question: "Is coaching available for supply exams?",
      answer:
        "Yes. If you have a backlog and need focused coaching to clear a specific subject, supply exam coaching is available. Call or WhatsApp +91 98950 09337 to discuss.",
    },
    {
      question: "Is the coaching online or offline?",
      answer:
        "100% online. There are no offline classes or classroom sessions. All coaching — video classes and one-to-one sessions — is conducted online.",
    },
    {
      question: "What is the difference between 2019 and 2024 KTU scheme?",
      answer:
        "The 2024 scheme introduced updated industry-aligned content, more elective flexibility, a 170-credit structure, and changes to evaluation patterns. See our detailed scheme pages for a full comparison.",
    },
    {
      question: "How do I enrol for one-to-one coaching?",
      answer:
        "Call or WhatsApp +91 98950 09337. The team will understand your requirement and put together a personalised plan for you.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "GATE Coaching", href: "/gate" },
    { label: "One-to-One Tuition", href: "/one-to-one-coaching" },
    { label: "Contact Us", href: "/contact" },
  ],
};

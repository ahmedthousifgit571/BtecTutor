import type { KtuHubSeo, KtuHubFaqItem } from "@/lib/content/ktu-hub";
import type { KtuSupplyExamStep } from "@/lib/content/ktu-supply-exam";

export interface KtuDepartmentSemester {
  code: string;
  label: string;
  href: string;
}

export interface KtuDepartmentHubContent {
  heroBadge?: string;
  heroHighlights: Array<{ title: string; subtitle: string }>;
  seo: KtuHubSeo;
  heroSubheading: string;
  introduction: string[];
  aboutHeading: string;
  aboutBullets: string[];
  semesterHeading: string;
  semesterIntro: string;
  semesters: KtuDepartmentSemester[];
  offersHeading: string;
  offerSteps: KtuSupplyExamStep[];
  subjectsHeading: string;
  subjectsIntro?: string;
  subjects: string[];
  ctaDescription?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaPhone: string;
  ctaEmail: string;
  faqs: KtuHubFaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
}

export const ktuEee2019Content: KtuDepartmentHubContent = {
  heroBadge: "KTU EEE 2019 Scheme",

  heroHighlights: [
    { title: "2019 Scheme", subtitle: "Applicable for 2019-20 to 2023-24 admissions" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Module-wise notes and question papers free" },
  ],

  seo: {
    title: "KTU EEE Notes 2019 Scheme — All Semesters | BTechTutor",
    description:
      "Free KTU EEE notes, question papers, and video classes for all semesters. 2019 scheme coaching for Electrical and Electronics Engineering at BTechTutor Kerala.",
    h1: "KTU EEE 2019 Scheme — Notes, Question Papers, and Coaching for All Semesters",
    primaryKeyword: "KTU EEE notes",
    secondaryKeywords: ["KTU EEE study materials", "KTU EEE 2019 scheme"],
    lsiKeywords: [
      "best KTU EEE notes online",
      "KTU EEE 2019 scheme all semester study material",
      "where to get KTU EEE notes free",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Electrical and Electronics Engineering under the 2019 scheme. Module-wise notes, previous year question papers, and video classes for all 8 semesters — free.",

  introduction: [
    "This is your complete study resource hub for KTU BTech Electrical and Electronics Engineering (EEE) under the 2019 scheme. Everything you need — module-wise notes, previous year question papers, and video classes — is available here for all 8 semesters.",
    "If you need more personalised help for any subject or semester, one-to-one coaching is available directly.",
  ],

  aboutHeading: "About KTU EEE 2019 Scheme",
  aboutBullets: [
    "Branch: Electrical and Electronics Engineering (EEE)",
    "Scheme: KTU 2019 — applicable for students admitted 2019-20 to 2023-24",
    "Duration: 8 semesters across 4 years",
    "Total credits: 160",
    "S1 and S2: Common to all branches",
    "S3 onwards: EEE-specific core subjects begin",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes for all subjects:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2019-scheme/eee/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2019-scheme/eee/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2019-scheme/eee/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2019-scheme/eee/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2019-scheme/eee/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2019-scheme/eee/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2019-scheme/eee/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2019-scheme/eee/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU EEE Students",
  offerSteps: [
    {
      title: "Module-wise notes — free",
      detail: "For all subjects across all 8 semesters under the 2019 scheme.",
    },
    {
      title: "Previous year question papers — free",
      detail: "Semester-wise and subject-wise PYQs with solutions.",
    },
    {
      title: "Video classes",
      detail: "Recorded lectures covering the full syllabus for every subject.",
    },
    {
      title: "One-to-one coaching",
      detail: "Personalised sessions for any subject or semester.",
    },
    {
      title: "Supply exam coaching",
      detail: "Focused preparation for clearing EEE backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU EEE Core Subjects — Overview",
  subjectsIntro:
    "EEE covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Circuit Theory, Network Analysis",
    "Electrical Machines I and II — Transformers, DC and AC Machines",
    "Power Systems I and II — Generation, Transmission, Distribution",
    "Control Systems — Classical and Modern Control",
    "Power Electronics — Converters, Inverters, Drives",
    "Signals and Systems, Digital Signal Processing",
    "Measurements and Instrumentation",
    "Electromagnetic Theory, Analog and Digital Electronics",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU EEE subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Is KTU EEE a good branch?",
      answer:
        "EEE is one of the most versatile engineering branches — it opens doors to power sector jobs, GATE, PSU recruitment, higher studies, and core electrical roles in manufacturing and automation. Companies like NTPC, BHEL, KSEB, Siemens, and ABB actively recruit EEE graduates.",
    },
    {
      question: "Which semester is the hardest in KTU EEE?",
      answer:
        "Most EEE students find S5 and S6 the most demanding — Power Systems, Electrical Machines II, and Power Electronics all come together in these semesters. Getting coaching or structured notes for these subjects makes a significant difference.",
    },
    {
      question: "Are notes available for all KTU EEE semesters?",
      answer:
        "Yes — module-wise notes are available free for all subjects across S1 to S8 under the 2019 scheme. Go to your semester page to access them.",
    },
    {
      question: "Is one-to-one coaching available for all KTU EEE subjects?",
      answer:
        "Yes — coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your specific requirement.",
    },
    {
      question: "Can I get coaching for KTU EEE supply exams?",
      answer:
        "Yes — supply exam coaching is one of our most requested services. Targeted preparation for specific backlog subjects is available. Contact us to get started immediately.",
    },
  ],

  internalLinks: [
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuEce2019Content: KtuDepartmentHubContent = {
  heroBadge: "KTU ECE 2019 Scheme",

  heroHighlights: [
    { title: "2019 Scheme", subtitle: "Applicable for 2019-20 to 2023-24 admissions" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Module-wise notes and question papers free" },
  ],

  seo: {
    title: "KTU ECE Notes 2019 Scheme — All Semesters | BTechTutor",
    description:
      "Free KTU ECE notes, question papers, and video classes for all semesters. 2019 scheme coaching for Electronics and Communication Engineering at BTechTutor Kerala.",
    h1: "KTU ECE 2019 Scheme — Notes, Question Papers, and Coaching for All Semesters",
    primaryKeyword: "KTU ECE notes",
    secondaryKeywords: ["KTU ECE study materials", "KTU ECE 2019 scheme"],
    lsiKeywords: [
      "best KTU ECE notes online",
      "KTU ECE 2019 scheme all semester study material",
      "where to get KTU ECE notes free",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Electronics and Communication Engineering under the 2019 scheme. Module-wise notes, previous year question papers, and video classes for all 8 semesters — free.",

  introduction: [
    "This is your complete study resource hub for KTU BTech Electronics and Communication Engineering (ECE) under the 2019 scheme. Everything you need — module-wise notes, previous year question papers, and video classes — is available here for all 8 semesters.",
    "If you need more personalised help for any subject or semester, one-to-one coaching is available directly.",
  ],

  aboutHeading: "About KTU ECE 2019 Scheme",
  aboutBullets: [
    "Branch: Electronics and Communication Engineering (ECE)",
    "Scheme: KTU 2019 — applicable for students admitted 2019-20 to 2023-24",
    "Duration: 8 semesters across 4 years",
    "Total credits: 160",
    "S1 and S2: Common to all KTU branches",
    "S3 onwards: ECE-specific core subjects begin",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2019-scheme/ece/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2019-scheme/ece/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2019-scheme/ece/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2019-scheme/ece/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2019-scheme/ece/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2019-scheme/ece/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2019-scheme/ece/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2019-scheme/ece/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU ECE Students",
  offerSteps: [
    {
      title: "Module-wise notes — free",
      detail: "For all subjects across all 8 semesters under the 2019 scheme.",
    },
    {
      title: "Previous year question papers — free",
      detail: "Semester-wise and subject-wise PYQs with solutions.",
    },
    {
      title: "Video classes",
      detail: "Recorded lectures covering the full syllabus for every subject.",
    },
    {
      title: "One-to-one coaching",
      detail: "Personalised sessions for any subject or semester.",
    },
    {
      title: "Supply exam coaching",
      detail: "Focused preparation for clearing ECE backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU ECE Core Subjects — Overview",
  subjectsIntro:
    "ECE covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Networks and Signals — Circuit Theory, Signals and Systems",
    "Electronics — Analog Circuits, Digital Electronics, VLSI Design",
    "Communication — Analog and Digital Communication, Wireless Communication",
    "Electromagnetics — Electromagnetic Theory, Antennas and Wave Propagation",
    "Control and Signal Processing — Control Systems, Digital Signal Processing",
    "Microprocessors and Embedded Systems",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU ECE subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "Is KTU ECE a good branch?",
      answer:
        "ECE is one of the most popular and versatile engineering branches in Kerala. It opens doors to core electronics roles, GATE, PSU recruitment, software companies, and higher studies. Companies like ISRO, DRDO, Intel, Qualcomm, and TCS actively recruit ECE graduates.",
    },
    {
      question: "Which semester is the hardest in KTU ECE?",
      answer:
        "Most ECE students find S5 and S6 the most demanding — Analog Circuits, Signals and Systems, and Communication Engineering all come together in those semesters. Structured coaching for these subjects makes a significant difference.",
    },
    {
      question: "Are notes available for all KTU ECE semesters?",
      answer:
        "Yes — module-wise notes are available free for all subjects across S1 to S8 under the 2019 scheme. Go to your semester page to access them.",
    },
    {
      question: "Is one-to-one coaching available for all KTU ECE subjects?",
      answer:
        "Yes — coaching is available for any subject in any semester. Call or WhatsApp +91 98950 09337 to discuss your specific requirement.",
    },
    {
      question: "Can I get coaching for KTU ECE supply exams?",
      answer:
        "Yes — supply exam coaching is available for all ECE subjects. Targeted preparation based on PYQ patterns and important modules. Contact us to get started immediately.",
    },
    {
      question: "Is KTU ECE useful for GATE preparation?",
      answer:
        "Absolutely. ECE subjects like Networks, Signals and Systems, Analog Circuits, Digital Electronics, Control Systems, and Communications are directly tested in GATE ECE. Preparing your KTU subjects well gives you a strong GATE foundation.",
    },
  ],

  internalLinks: [
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuMechanical2019Content: KtuDepartmentHubContent = {
  heroBadge: "KTU Mechanical 2019 Scheme",

  heroHighlights: [
    { title: "2019 Scheme", subtitle: "Applicable for 2019-20 to 2023-24 admissions" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Module-wise notes and question papers free" },
  ],

  seo: {
    title: "KTU Mechanical Engineering 2019 Scheme | BTechTutor",
    description:
      "KTU BTech Mechanical Engineering 2019 scheme — semester-wise subjects, notes, PYQs, syllabus, and online tuition. All semesters covered.",
    h1: "KTU Mechanical Engineering — 2019 Scheme (All Semesters)",
    primaryKeyword: "KTU Mechanical Engineering 2019 scheme",
    secondaryKeywords: ["KTU Mechanical notes", "KTU ME 2019 scheme"],
    lsiKeywords: [
      "KTU Mechanical Engineering all semester notes",
      "KTU ME 2019 scheme study material",
      "KTU Mechanical PYQs free download",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Mechanical Engineering under the 2019 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "Mechanical Engineering at KTU is one of the broadest engineering disciplines — and the 2019 scheme reflects that. From Mechanics of Solids and Thermodynamics in S3 to Machine Design, Heat Transfer, and Advanced Manufacturing by S6, the programme progressively builds your ability to analyse, design, and manufacture mechanical systems. S7 and S8 are where everything comes together — electives, a seminar, and your main BTech project.",
    "This page is your central hub for KTU Mechanical Engineering 2019 scheme — organised semester by semester. Whether you need free notes, previous year question papers, syllabus PDFs, or online tuition for a subject you're stuck on, you'll find it all here. Click on any semester below to get started.",
  ],

  aboutHeading: "About KTU Mechanical Engineering 2019 Scheme",
  aboutBullets: [
    "Branch: Mechanical Engineering (ME)",
    "Scheme: KTU 2019 — applicable for students admitted 2019-20 to 2023-24",
    "Duration: 8 semesters across 4 years",
    "Total credits: 160",
    "S1 and S2: Common to all KTU branches",
    "S3 onwards: Mechanical-specific core subjects begin",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2019-scheme/mechanical/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2019-scheme/mechanical/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2019-scheme/mechanical/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2019-scheme/mechanical/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2019-scheme/mechanical/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2019-scheme/mechanical/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2019-scheme/mechanical/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2019-scheme/mechanical/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU Mechanical Students",
  offerSteps: [
    {
      title: "Module-wise notes — free",
      detail: "For all subjects across all 8 semesters under the 2019 scheme.",
    },
    {
      title: "Previous year question papers — free",
      detail: "Semester-wise and subject-wise PYQs with solutions.",
    },
    {
      title: "Video classes",
      detail: "Recorded lectures covering the full syllabus for every subject.",
    },
    {
      title: "One-to-one coaching",
      detail: "Personalised sessions for any subject or semester.",
    },
    {
      title: "Supply exam coaching",
      detail: "Focused preparation for clearing Mechanical backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU Mechanical Core Subjects — Overview",
  subjectsIntro:
    "Mechanical Engineering covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Mechanics of Solids — stress, strain, bending, torsion",
    "Mechanics of Fluids — fluid statics, flow analysis, pipe networks",
    "Engineering Thermodynamics — laws, cycles, properties of steam",
    "Metallurgy and Material Science — crystal structures, heat treatment, testing",
    "Manufacturing Process — casting, welding, machining, forming",
    "Fluid Machinery — pumps, turbines, compressors",
    "Thermal Engineering — IC engines, refrigeration, air conditioning",
    "Heat and Mass Transfer — conduction, convection, radiation",
    "Dynamics of Machinery and Machine Design — kinematics, vibrations, design of elements",
    "Advanced Manufacturing Engineering — CNC, CAD/CAM, automation",
  ],

  ctaDescription:
    "Not sure if you're preparing the right topics or following the right approach? Getting early guidance can save you a full semester of wasted effort. One-to-one coaching is available for all KTU Mechanical subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Mechanical Engineering S3 2019 scheme?",
      answer:
        "KTU Mechanical S3 (2019 scheme) includes MAT201 Partial Differential Equations and Complex Analysis, MET201 Mechanics of Solids, MET203 Mechanics of Fluids, MET205 Metallurgy and Material Science, EST200/HUT200 Design and Engineering or Professional Ethics, MCN201 Sustainable Engineering, MEL201 Computer Aided Machine Drawing Lab, and MEL203 Materials Testing Lab.",
    },
    {
      question: "Is KTU Mechanical Engineering hard?",
      answer:
        "It is one of the more demanding branches at KTU. The combination of theoretical subjects (Thermodynamics, Heat Transfer) and design-heavy subjects (Machine Design, Dynamics) makes S5 and S6 particularly challenging. With organised study and good notes, most students manage a respectable CGPA.",
    },
    {
      question: "Can I get free KTU Mechanical notes and PYQs?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU Mechanical 2019 scheme subjects. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU Mechanical Engineering?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala. You can enrol for specific subjects or semester packages. Call +91 98950 09337 to discuss your requirements.",
    },
    {
      question: "What is the difference between KTU 2019 and 2024 Mechanical scheme?",
      answer:
        "The 2019 scheme has a fixed core curriculum with electives from S6 onwards. The 2024 scheme introduced updated syllabi, more elective flexibility, and a revised credit structure. Most students currently in S3 to S8 are under the 2019 scheme.",
    },
  ],

  internalLinks: [
    { label: "KTU 2019 Scheme", href: "/ktu/2019" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

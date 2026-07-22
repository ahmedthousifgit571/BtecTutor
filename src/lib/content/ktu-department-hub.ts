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

export const ktuCivil2019Content: KtuDepartmentHubContent = {
  heroBadge: "KTU Civil 2019 Scheme",

  heroHighlights: [
    { title: "2019 Scheme", subtitle: "Applicable for 2019-20 to 2023-24 admissions" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Civil Engineering 2019 Scheme | BTechTutor",
    description:
      "KTU BTech Civil Engineering 2019 scheme — semester-wise subjects, notes, PYQs, syllabus, and online tuition. Get started with BTechTutor Kerala.",
    h1: "KTU Civil Engineering — 2019 Scheme (All Semesters)",
    primaryKeyword: "KTU Civil Engineering 2019 scheme",
    secondaryKeywords: ["KTU Civil notes", "KTU CE 2019 scheme"],
    lsiKeywords: [
      "KTU Civil Engineering all semester notes",
      "KTU CE 2019 scheme study material",
      "KTU Civil PYQs free download",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Civil Engineering under the 2019 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "If you're a Civil Engineering student at KTU, you already know how spread out the syllabus can get — from Mechanics of Solids in S3 to Structural Analysis, Geotechnical Engineering, and Transportation by S5 and S7. The 2019 scheme builds your foundation in the early semesters and pushes you into specialised territory from S5 onwards.",
    "This page is your central hub for all things KTU Civil 2019. Whether you need subject-wise notes, previous year question papers, syllabus PDFs, or online tuition for a subject you're stuck on — you'll find everything organised semester by semester below.",
  ],

  aboutHeading: "About KTU Civil Engineering 2019 Scheme",
  aboutBullets: [
    "Branch: Civil Engineering (CE)",
    "Scheme: KTU 2019 — applicable for students admitted 2019-20 to 2023-24",
    "Duration: 8 semesters across 4 years",
    "Total credits: 160",
    "S1 and S2: Common to all KTU branches",
    "S3 onwards: Civil-specific core subjects begin",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2019-scheme/civil/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2019-scheme/civil/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2019-scheme/civil/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2019-scheme/civil/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2019-scheme/civil/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2019-scheme/civil/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2019-scheme/civil/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2019-scheme/civil/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU Civil Students",
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
      detail: "Focused preparation for clearing Civil backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU Civil Core Subjects — Overview",
  subjectsIntro:
    "Civil Engineering covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Mechanics of Solids — stress, strain, SFD/BMD, torsion, deflection",
    "Fluid Mechanics and Hydraulics — fluid statics, Bernoulli's theorem, pipe and open channel flow",
    "Surveying and Geomatics — chain surveying, levelling, total station, GIS and remote sensing",
    "Structural Analysis I, II and III — determinate and indeterminate structures, matrix methods",
    "Geotechnical Engineering I and II — soil classification, bearing capacity, foundations",
    "Design of Concrete Structures I and II — IS 456, beams, slabs, columns, footings",
    "Design of Steel Structures — IS 800, connections, trusses, gantry girders",
    "Water Resources and Hydraulic Structures — hydrology, irrigation, dams, canals",
    "Transportation Engineering I and II — highway design, traffic engineering, railways",
    "Environmental Engineering I and II — water supply and treatment, wastewater engineering",
  ],

  ctaDescription:
    "Struggling with any subject? Getting guidance early saves a lot of time. One-to-one coaching is available for all KTU Civil subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Civil Engineering S3?",
      answer:
        "KTU Civil S3 (2019 scheme) includes Mechanics of Solids (CE201), Fluid Mechanics and Hydraulics (CE203), Surveying and Geomatics (CE205), Engineering Geology (CE207), Engineering Mathematics III (MAT201), and lab subjects.",
    },
    {
      question: "Is KTU Civil Engineering hard?",
      answer:
        "It depends on how you approach it. Subjects like Structural Analysis, Fluid Mechanics, and Geotechnical Engineering are conceptually heavy and require consistent practice. With the right notes and guidance, most students can maintain a good CGPA.",
    },
    {
      question: "Can I get KTU Civil notes and PYQs for free?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU Civil 2019 scheme subjects. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU Civil Engineering?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala. You can enrol for specific subjects or full semester packages. Call +91 98950 09337 to know more.",
    },
    {
      question: "How is KTU 2019 Civil scheme different from 2024 scheme?",
      answer:
        "The 2019 scheme follows a traditional semester structure with fixed elective tracks from S7. The 2024 scheme introduced updated syllabi, revised credit distribution, and more flexible elective options. Most students currently in S3-S8 are under the 2019 scheme.",
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

export const ktuCs2019Content: KtuDepartmentHubContent = {
  heroBadge: "KTU CS 2019 Scheme",

  heroHighlights: [
    { title: "2019 Scheme", subtitle: "Applicable for 2019-20 to 2023-24 admissions" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU CS Notes 2019 Scheme | BTechTutor",
    description:
      "KTU BTech Computer Science 2019 scheme — semester-wise notes, PYQs, syllabus & online tuition. All semesters S1 to S8 covered. Kerala's trusted CSE coaching.",
    h1: "KTU Computer Science Engineering — 2019 Scheme (All Semesters)",
    primaryKeyword: "KTU CS notes 2019 scheme",
    secondaryKeywords: ["KTU CSE notes", "KTU computer science 2019 scheme", "KTU CSE syllabus 2019"],
    lsiKeywords: [
      "KTU BTech CS subjects",
      "KTU CSE semester wise notes",
      "KTU online tuition CS Kerala",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Computer Science Engineering under the 2019 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "Computer Science Engineering at KTU covers a wide range — from foundational Maths and Programming in the first two semesters, to Data Structures, Operating Systems, Computer Networks, and DBMS in the middle semesters, all the way to Artificial Intelligence, Distributed Computing, and your final project in S7 and S8. The 2019 scheme builds depth progressively — if you keep up with the pace, it's manageable. If you fall behind, the subjects compound quickly.",
    "This is your central hub for KTU CSE 2019 scheme — all semesters in one place. Subject-wise free notes, previous year question papers, syllabus downloads, and online tuition options for subjects you need help with. Click on any semester below to get started.",
  ],

  aboutHeading: "About KTU Computer Science Engineering 2019 Scheme",
  aboutBullets: [
    "Branch: Computer Science and Engineering (CS/CSE)",
    "Scheme: KTU 2019 — applicable for students admitted 2019-20 to 2023-24",
    "Duration: 8 semesters across 4 years",
    "Total credits: 160",
    "S1 and S2: Common to all KTU branches",
    "S3 onwards: CS-specific core subjects begin",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2019-scheme/cs/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2019-scheme/cs/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2019-scheme/cs/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2019-scheme/cs/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2019-scheme/cs/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2019-scheme/cs/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2019-scheme/cs/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2019-scheme/cs/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU CS Students",
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
      detail: "Focused preparation for clearing CS backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU CS Core Subjects — Overview",
  subjectsIntro:
    "Computer Science Engineering covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Data Structures — arrays, linked lists, trees, graphs, sorting, searching, hashing",
    "Logic System Design and Computer Organisation — Boolean algebra, ALU design, memory, pipelining",
    "Object-Oriented Programming Using Java — OOP concepts, collections, exception handling",
    "Database Management Systems — ER modelling, SQL, normalisation, transactions, concurrency",
    "Operating Systems — process scheduling, memory management, deadlocks, file systems",
    "Formal Languages and Automata Theory — DFA, NFA, CFG, Turing machines, decidability",
    "Computer Networks — OSI/TCP-IP models, routing, transport and application layers",
    "Compiler Design and Algorithm Analysis — parsing, code generation, complexity, DP, greedy",
    "Artificial Intelligence — search algorithms, knowledge representation, machine learning basics",
    "Distributed Computing and Software Engineering — SDLC, distributed systems, final project",
  ],

  ctaDescription:
    "Stuck on a subject or not sure how to prepare? Getting early guidance can save you an entire semester of confusion. One-to-one coaching is available for all KTU CS subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What are the subjects in KTU CSE S3 2019 scheme?",
      answer:
        "KTU CSE S3 (2019 scheme) includes MAT203 Discrete Mathematical Structures, CST201 Data Structures, CST203 Logic System Design, CST205 Object-Oriented Programming Using Java, EST200 Design and Engineering or HUT200 Professional Ethics, MCN201 Sustainable Engineering (non-credit), CSL201 Data Structures Lab, and CSL203 OOP in Java Lab.",
    },
    {
      question: "Is KTU Computer Science Engineering hard?",
      answer:
        "CSE is one of the more demanding branches at KTU. The combination of abstract theoretical subjects (Formal Languages, Algorithm Analysis) and design-heavy subjects (DBMS, OS, Networks) makes S5 and S6 particularly challenging. With consistent effort and good notes, a solid CGPA is very achievable.",
    },
    {
      question: "Can I get free KTU CSE notes and PYQs from BTechTutor?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU CSE 2019 scheme subjects across all semesters. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU CS Engineering?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala. You can enrol for specific subjects or semester packages. Call +91 98950 09337 to discuss your requirements.",
    },
    {
      question: "What is the difference between KTU 2019 and 2024 CS scheme?",
      answer:
        "The 2019 scheme has a fixed core curriculum with electives from S6. The 2024 scheme introduced updated syllabi including more AI and data-focused subjects, revised credit structure, and more elective flexibility. Most students currently in S3 to S8 are under the 2019 scheme.",
    },
    {
      question: "Which semester is hardest in KTU CSE 2019 scheme?",
      answer:
        "Most CSE students cite S5 and S6 as the hardest — Formal Languages, Computer Networks, Compiler Design, and Algorithm Analysis all together is a heavy combination. S3 is also a significant jump from S1-S2 for many students.",
    },
    {
      question: "Is GATE possible after KTU CSE?",
      answer:
        "Yes, and KTU CSE 2019 scheme has significant GATE overlap — especially in Discrete Mathematics, Data Structures, Algorithms, OS, DBMS, Computer Networks, and Compiler Design. The S6 Comprehensive Course Work (CST308) is essentially GATE-style preparation. BTechTutor offers GATE CS coaching — call +91 98950 09337.",
    },
    {
      question: "What are the best career options after KTU CSE?",
      answer:
        "KTU CSE graduates typically go into software development, data engineering, cloud computing, cybersecurity, or pursue higher studies (M.Tech, MS, MBA). GATE qualifiers go into PSUs or IIT/NIT M.Tech programmes. The Kerala IT industry (Technopark, Infopark, Cyberpark) actively recruits KTU CSE graduates.",
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

export const ktuIt2019Content: KtuDepartmentHubContent = {
  heroBadge: "KTU IT 2019 Scheme",

  heroHighlights: [
    { title: "2019 Scheme", subtitle: "Applicable for 2019-20 to 2023-24 admissions" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU IT Notes 2019 Scheme — All Semesters | BTechTutor",
    description:
      "KTU BTech Information Technology 2019 scheme — semester-wise notes, PYQs, syllabus and online tuition. S1 to S8 all covered. Kerala's trusted IT coaching.",
    h1: "KTU Information Technology — 2019 Scheme (All Semesters)",
    primaryKeyword: "KTU IT notes 2019 scheme",
    secondaryKeywords: ["KTU Information Technology notes", "KTU IT syllabus 2019", "KTU IT subjects all semesters"],
    lsiKeywords: [
      "KTU BTech IT semester wise notes",
      "KTU IT PYQs free download",
      "KTU online tuition IT Kerala",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Information Technology under the 2019 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "Information Technology at KTU sits very close to Computer Science — the two branches share several subjects, especially in S1-S4. But from S3 onwards, IT has its own identity — Digital System Design, Data Communication, Software Architecture, and a stronger emphasis on networking, web technologies, and distributed systems compared to CSE. If you're an IT student, you're essentially being trained to design, manage, and scale real-world technology systems.",
    "This is your central hub for KTU IT 2019 scheme — all semesters, all subjects, one place. Free notes, previous year question papers, syllabus PDFs, and online tuition for subjects you need help with. Click any semester below to get started.",
  ],

  aboutHeading: "About KTU Information Technology 2019 Scheme",
  aboutBullets: [
    "Branch: Information Technology (IT)",
    "Scheme: KTU 2019 — applicable for students admitted 2019-20 to 2023-24",
    "Duration: 8 semesters across 4 years",
    "Total credits: 160",
    "S1 and S2: Common to all KTU branches",
    "S3 onwards: IT-specific core subjects begin, several shared with CSE",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2019-scheme/it/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2019-scheme/it/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2019-scheme/it/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2019-scheme/it/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2019-scheme/it/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2019-scheme/it/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2019-scheme/it/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2019-scheme/it/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU IT Students",
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
      detail: "Focused preparation for clearing IT backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU IT Core Subjects — Overview",
  subjectsIntro:
    "Information Technology covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Digital System Design — Boolean algebra, combinational and sequential circuits, FSMs",
    "Data Communication — encoding, modulation, multiplexing, error detection and correction",
    "Data Structures and Algorithm Analysis — arrays, trees, graphs, complexity, DP, greedy",
    "Object Oriented Techniques — OOP concepts, Java programming, exception handling, collections",
    "Database Management Systems — ER modelling, SQL, normalisation, transactions",
    "Theory of Computation — DFA, NFA, CFG, Turing machines, decidability",
    "Computer Networks — OSI/TCP-IP models, routing, transport and application layers",
    "Internet Technology and Software Architecture — web development, design patterns, JSP/Servlets",
    "Compiler Design and Data Warehousing — parsing, code generation, OLAP, data mining",
    "Distributed Systems and Information Security — distributed computing, cryptography, network security",
  ],

  ctaDescription:
    "Stuck on a subject or not sure how to approach your semester? Getting guidance early saves time and CGPA. One-to-one coaching is available for all KTU IT subjects — all semesters, 2019 scheme.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU IT S3 2019 scheme?",
      answer:
        "KTU IT S3 (2019 scheme) includes IT201 Digital System Design, IT203 Data Communication, CS201 Discrete Computational Structures (shared with CSE), CS205 or equivalent Data Structures, MAT203 or equivalent Maths, IT231 Digital Circuit Lab, CS231 Data Structures Lab, and EST200/HUT200.",
    },
    {
      question: "Is KTU IT harder than CSE?",
      answer:
        "Neither is consistently harder than the other — they're different in emphasis. IT has Digital System Design, Data Communication, and Distributed Systems where CSE has Logic System Design, System Software, and Algorithm Analysis. Both have Theory of Computation and similar core CS subjects in S4-S5.",
    },
    {
      question: "Can I get free KTU IT notes and PYQs from BTechTutor?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU IT 2019 scheme subjects across all semesters. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU IT students?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala offering tuition for KTU IT subjects. Call +91 98950 09337 to discuss subject-wise or semester packages.",
    },
    {
      question: "What is the difference between KTU IT 2019 and 2024 scheme?",
      answer:
        "The 2019 scheme has a fixed core curriculum with electives from S6 onwards. The 2024 scheme updated syllabi with more focus on cloud computing, AI, and cybersecurity, and revised credit structure. Most students currently in S3-S8 are under the 2019 scheme.",
    },
    {
      question: "Is GATE possible after KTU IT?",
      answer:
        "Yes. KTU IT 2019 scheme has significant GATE CS overlap — Data Structures, Theory of Computation, Computer Networks, OS, DBMS, and Compiler Design are all core GATE CS topics. S6 Comprehensive Exam is essentially GATE-style preparation.",
    },
    {
      question: "What career options are available after KTU IT?",
      answer:
        "KTU IT graduates typically go into software development, web and cloud engineering, networking, cybersecurity, data engineering, or higher studies. The branch's strong networking and web technology focus is well-aligned with Kerala's IT industry at Technopark, Infopark, and Cyberpark.",
    },
    {
      question: "Which semester is hardest in KTU IT 2019 scheme?",
      answer:
        "Most IT students cite S5 and S6 as hardest — Theory of Computation, Computer Networks, Compiler Design, and Distributed Systems together is a heavy combination. S3 Digital System Design is also a common difficulty point for students new to digital electronics.",
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

export const ktuEee2024Content: KtuDepartmentHubContent = {
  heroBadge: "KTU EEE 2024 Scheme",

  heroHighlights: [
    { title: "2024 Scheme", subtitle: "Applicable for 2024-25 admissions onwards" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU EEE Notes 2024 Scheme — All Semesters | BTechTutor",
    description:
      "KTU BTech EEE 2024 scheme — semester-wise notes, PYQs, syllabus and online tuition. S1 to S8 all covered. Kerala's trusted EEE coaching platform.",
    h1: "KTU Electrical and Electronics Engineering — 2024 Scheme (All Semesters)",
    primaryKeyword: "KTU EEE notes 2024 scheme",
    secondaryKeywords: ["KTU Electrical Engineering notes 2024", "KTU EEE syllabus 2024 scheme", "KTU EEE subjects all semesters"],
    lsiKeywords: [
      "KTU BTech EEE semester wise notes 2024",
      "KTU EEE PYQs free download",
      "KTU online tuition EEE Kerala 2024",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Electrical and Electronics Engineering under the 2024 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "The 2024 scheme for Electrical and Electronics Engineering at KTU is a significant upgrade from the 2019 scheme — more structured, more industry-aligned, and built around a credit framework that gives students more flexibility through electives from S4 onwards. The core subjects are stronger than ever: Circuits and Networks, DC Machines, Power Electronics, Electromagnetic Theory, and Control Systems form the backbone of the programme across S3 to S6.",
    "From S7, the degree opens up into deep specialisation — Power Systems, Energy Management, Special Machines, Smart Grid, HVDC, and more — through a well-structured elective system. S7 also introduces the Internship option, which is a major addition in the 2024 scheme. This hub page covers all eight semesters. Click any semester below to find subject-wise notes, PYQs, syllabus, and online tuition.",
  ],

  aboutHeading: "About KTU EEE 2024 Scheme",
  aboutBullets: [
    "Branch: Electrical and Electronics Engineering (EEE)",
    "Scheme: KTU 2024 — applicable for students admitted 2024-25 onwards",
    "Duration: 8 semesters across 4 years",
    "Total credits: 170",
    "S1 and S2: Common to all KTU branches, with Group B (EEE-specific) Maths",
    "S3 onwards: EEE-specific core subjects begin, with PBL integrated from S3",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2024-scheme/eee/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2024-scheme/eee/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2024-scheme/eee/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2024-scheme/eee/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2024-scheme/eee/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2024-scheme/eee/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2024-scheme/eee/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2024-scheme/eee/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU EEE 2024 Scheme Students",
  offerSteps: [
    {
      title: "Module-wise notes — free",
      detail: "For all subjects across all 8 semesters under the 2024 scheme.",
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
      detail: "Focused preparation for clearing EEE 2024 scheme backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU EEE 2024 Scheme Core Subjects — Overview",
  subjectsIntro:
    "EEE under the 2024 scheme covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Circuits and Networks — network theorems, transient analysis, resonance, two-port networks",
    "DC Machines and Transformers, Synchronous and Induction Machines — machine characteristics and control",
    "Power Electronics and Drives — converters, inverters, PWM techniques, motor drives",
    "Electromagnetic Theory — vector analysis, Maxwell's equations, transmission lines, waveguides",
    "Signals and Systems — transforms, convolution, sampling theorem, frequency response",
    "Microprocessor and Embedded Systems — 8085/8086, ARM/Arduino programming",
    "Power Generation, Transmission and Protection, Power System Analysis — load flow, fault analysis",
    "Control Systems — transfer functions, stability analysis, PID controllers",
    "Electrical System Design and Estimation — load estimation, earthing, energy audit",
    "Programme and Open Electives — Renewable Energy, Electric Vehicles, Smart Grid, HVDC, and more",
  ],

  ctaDescription:
    "Confused about which subjects to focus on or how to prepare for your semester? Getting the right guidance early can save your CGPA. One-to-one coaching is available for all KTU EEE 2024 scheme subjects.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU EEE S3 2024 scheme?",
      answer:
        "KTU EEE S3 (2024 scheme) includes GYMAT301 Mathematics for Electrical Science-3, PCEET302 Circuits and Networks, PCEET303 DC Machines and Transformers, PBEET304 Analog Electronics (PBL), GNEST305 Introduction to AI and Data Science, UCHUT346/347 Economics for Engineers or Engineering Ethics, PCEEL307 Circuits and Measurements Lab, and PCEEL308 Analog Electronics Lab.",
    },
    {
      question: "How is KTU EEE 2024 scheme different from 2019 scheme?",
      answer:
        "The 2024 scheme includes Project-Based Learning (PBL) components in core subjects, a more structured elective system (6 PEs + 3 OEs), Algorithmic Thinking with Python in S1, embedded AI and Data Science in S3, and a formal Internship pathway in S7/S8. The credit structure is also revised at 170 total credits.",
    },
    {
      question: "Can I get free KTU EEE 2024 scheme notes and PYQs?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU EEE 2024 scheme subjects. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU EEE 2024 scheme?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala. Call +91 98950 09337 to discuss subject-wise or semester packages for the 2024 scheme.",
    },
    {
      question: "What is the total credit requirement for KTU EEE 2024 scheme?",
      answer:
        "The total credit requirement for KTU BTech EEE 2024 scheme is 170 credits, distributed across BSC, ESC, Programme Core, PBL, Electives, Project/Internship, and Skill Enhancement courses.",
    },
    {
      question: "What is the PBL component in KTU EEE 2024 scheme?",
      answer:
        "Project-Based Learning (PBL) components are embedded in certain core subjects from S3 to S6. These are subjects like Analog Electronics (PBEET304) and Digital Electronics (PBEET404) where a mini project runs alongside the theory. It carries separate CIA marks and contributes to the credit total.",
    },
    {
      question: "Is internship mandatory in KTU EEE 2024 scheme?",
      answer:
        "Internship is an option, not a mandatory requirement. In S7, students can choose between Option 1 (Major Project in the institute) and Option 2 (Full semester industry internship of 4-6 months). The same option continues in S8.",
    },
    {
      question: "Which electives are available in KTU EEE 2024 scheme?",
      answer:
        "KTU EEE 2024 scheme has 6 Programme Electives (PE-1 to PE-6) spread across S4 to S8, plus 3 Open Electives in S6, S7, and S8. PE options include Renewable Energy, Electric Vehicles, Power System Operation, Smart Grid, HVDC, and more. Full lists are on the individual semester pages.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuEce2024Content: KtuDepartmentHubContent = {
  heroBadge: "KTU ECE 2024 Scheme",

  heroHighlights: [
    { title: "2024 Scheme", subtitle: "Applicable for 2024-25 admissions onwards" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU ECE Notes 2024 Scheme — All Semesters | BTechTutor",
    description:
      "KTU BTech ECE 2024 scheme — semester-wise notes, PYQs, syllabus and online tuition. S1 to S8 all covered. Kerala's trusted ECE coaching platform.",
    h1: "KTU Electronics and Communication Engineering — 2024 Scheme (All Semesters)",
    primaryKeyword: "KTU ECE notes 2024 scheme",
    secondaryKeywords: ["KTU Electronics Communication Engineering 2024", "KTU ECE syllabus 2024", "KTU ECE subjects all semesters"],
    lsiKeywords: [
      "KTU BTech ECE semester wise notes 2024",
      "KTU ECE PYQs free download",
      "KTU online tuition ECE Kerala 2024",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Electronics and Communication Engineering under the 2024 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "Electronics and Communication Engineering at KTU has always been one of the most challenging and rewarding branches — and the 2024 scheme takes it a step further. The core subjects are stronger, the elective system is far more flexible, and Project-Based Learning (PBL) is now embedded into key subjects from S3 itself. If you're an ECE student under the 2024 scheme, you're being trained for a world that runs on embedded systems, wireless communication, VLSI design, and signal processing.",
    "This hub page covers all eight semesters — subject codes, free notes, PYQs, syllabus downloads, and online tuition for subjects you need help with. The total credit requirement is 170. Click any semester below to get started.",
  ],

  aboutHeading: "About KTU ECE 2024 Scheme",
  aboutBullets: [
    "Branch: Electronics and Communication Engineering (ECE)",
    "Scheme: KTU 2024 — applicable for students admitted 2024-25 onwards",
    "Duration: 8 semesters across 4 years",
    "Total credits: 170",
    "S1 and S2: Common to all KTU branches, with Group B (ECE-specific) Maths",
    "S3 onwards: ECE-specific core subjects begin, with PBL integrated from S3",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2024-scheme/ece/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2024-scheme/ece/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2024-scheme/ece/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2024-scheme/ece/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2024-scheme/ece/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2024-scheme/ece/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2024-scheme/ece/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2024-scheme/ece/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU ECE 2024 Scheme Students",
  offerSteps: [
    {
      title: "Module-wise notes — free",
      detail: "For all subjects across all 8 semesters under the 2024 scheme.",
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
      detail: "Focused preparation for clearing ECE 2024 scheme backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU ECE 2024 Scheme Core Subjects — Overview",
  subjectsIntro:
    "ECE under the 2024 scheme covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Network Theory — mesh/nodal analysis, network theorems, two-port networks",
    "Solid State Devices and Analog Circuits — semiconductor physics, amplifiers, oscillators",
    "Logic Circuit Design and Microcontrollers — Boolean algebra, embedded C programming",
    "Signals and Systems, Linear Integrated Circuits — transforms, op-amp applications, filters",
    "Electromagnetics — Maxwell's equations, transmission lines, waveguides",
    "Analog and Digital Communication, Control Systems — modulation, stability, PID control",
    "Digital Signal Processing — FFT, FIR/IIR filter design, DSP processors",
    "Advanced Communication Theory, Microwaves and Antennas — information theory, antenna design",
    "VLSI Circuit Design — CMOS design, digital IC design flow, FPGA implementation",
    "Programme and Open Electives — Machine Learning, IoT, VLSI, Optical Communication, and more",
  ],

  ctaDescription:
    "Struggling with a subject or not sure how to approach your semester? Early guidance makes a real difference. One-to-one coaching is available for all KTU ECE 2024 scheme subjects.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU ECE S3 2024 scheme?",
      answer:
        "KTU ECE S3 (2024 scheme) includes GYMAT301 Mathematics for Electrical Science-3, PCECT302 Solid State Devices, PCECT303 Analog Circuits, PBECT304 Logic Circuit Design (PBL), GNEST305 Introduction to AI and Data Science, UCHUT346/UCHUT347 Economics for Engineers or Engineering Ethics (S3/S4 slot), PCECL307 Analog Circuits Lab, and PCECL308 Logic Circuit Design Lab.",
    },
    {
      question: "How is KTU ECE 2024 scheme different from 2019 scheme?",
      answer:
        "The 2024 scheme moves Network Theory to S2, embeds PBL in four core subjects (Logic Design, Microcontrollers, DSP, VLSI), adds AI and Data Science in S3, expands electives to 6 PEs and 3 OEs, and introduces a formal Internship pathway in S7/S8. Total credits remain 170.",
    },
    {
      question: "Can I get free KTU ECE 2024 scheme notes and PYQs?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU ECE 2024 scheme subjects across all semesters. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU ECE 2024 scheme?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala. Call +91 98950 09337 to discuss subject-wise or semester packages for ECE 2024 scheme.",
    },
    {
      question: "What is the total credit requirement for KTU ECE 2024 scheme?",
      answer:
        "The total credit requirement for KTU BTech ECE 2024 scheme is 170 credits distributed across BSC, ESC, Programme Core, PBL, Electives, Project/Internship, and Skill Enhancement courses.",
    },
    {
      question: "What are the PBL subjects in KTU ECE 2024 scheme?",
      answer:
        "The four PBL subjects in ECE 2024 scheme are PBECT304 Logic Circuit Design (S3), PBECT404 Microcontrollers (S4), PBECT504 Digital Signal Processing (S5), and PBECT604 VLSI Circuit Design (S6). Each carries 60 CIA and 40 ESE marks with an integrated project component.",
    },
    {
      question: "Can KTU ECE 2024 students do an internship instead of project?",
      answer:
        "Yes. In S7, students can choose between Option 1 (Major Project under faculty) and Option 2 (Full semester industry internship of 4-6 months). The same option continues in S8.",
    },
    {
      question: "Is GATE possible after KTU ECE 2024 scheme?",
      answer:
        "Yes. KTU ECE 2024 scheme has strong GATE ECE overlap — Electromagnetics, Signals and Systems, Control Systems, Analog Circuits, Digital Signal Processing, VLSI, and Communication Theory are all core GATE ECE topics. BTechTutor offers GATE ECE coaching — call +91 98950 09337.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuCivil2024Content: KtuDepartmentHubContent = {
  heroBadge: "KTU Civil 2024 Scheme",

  heroHighlights: [
    { title: "2024 Scheme", subtitle: "Applicable for 2024-25 admissions onwards" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Civil Engineering Notes 2024 Scheme | BTechTutor",
    description:
      "KTU BTech Civil Engineering 2024 scheme — semester-wise notes, PYQs, syllabus and online tuition. S1 to S8 all covered. Kerala's trusted Civil coaching platform.",
    h1: "KTU Civil Engineering — 2024 Scheme (All Semesters)",
    primaryKeyword: "KTU Civil Engineering notes 2024 scheme",
    secondaryKeywords: ["KTU Civil notes 2024", "KTU Civil Engineering syllabus 2024", "KTU CE subjects all semesters"],
    lsiKeywords: [
      "KTU BTech Civil semester wise notes 2024",
      "KTU Civil PYQs free download",
      "KTU online tuition Civil Kerala 2024",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Civil Engineering under the 2024 scheme. Semester-wise notes, previous year question papers, syllabus, and online tuition — all semesters covered.",

  introduction: [
    "The 2024 scheme for Civil Engineering at KTU brings meaningful changes to how the degree is structured. Mechanics of Solids moves to S2 — making it the earliest a Programme Core subject appears in any branch. Project-Based Learning is embedded in four core subjects across S3 to S6. The elective system expands to six Programme Electives plus three Open Electives. And the Internship pathway in S7/S8 gives students a formal route to industry experience before graduation. Total credits: 170.",
    "This hub page is your central resource for KTU Civil Engineering 2024 scheme — all eight semesters, all subject codes, free notes, PYQs, syllabus PDFs, and online tuition. Click any semester below to find what you need.",
  ],

  aboutHeading: "About KTU Civil Engineering 2024 Scheme",
  aboutBullets: [
    "Branch: Civil Engineering (CE) — Group C",
    "Scheme: KTU 2024 — applicable for students admitted 2024-25 onwards",
    "Duration: 8 semesters across 4 years",
    "Total credits: 170",
    "S1 and S2: Common Group C curriculum, with Mechanics of Solids arriving in S2",
    "S3 onwards: Civil-specific core subjects begin, with PBL integrated from S3",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2024-scheme/civil/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2024-scheme/civil/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2024-scheme/civil/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2024-scheme/civil/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2024-scheme/civil/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2024-scheme/civil/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2024-scheme/civil/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2024-scheme/civil/s8/" },
  ],

  offersHeading: "What BTechTutor Offers for KTU Civil 2024 Scheme Students",
  offerSteps: [
    {
      title: "Module-wise notes — free",
      detail: "For all subjects across all 8 semesters under the 2024 scheme.",
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
      detail: "Focused preparation for clearing Civil 2024 scheme backlogs.",
    },
    {
      title: "Series exam coaching",
      detail: "Internal assessment preparation before your college tests.",
    },
  ],

  subjectsHeading: "KTU Civil 2024 Scheme Core Subjects — Overview",
  subjectsIntro:
    "Civil Engineering under the 2024 scheme covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Mechanics of Solids — stress, strain, SFD/BMD, bending and shear stresses, torsion",
    "Fluid Mechanics, Hydrology and Water Resources — Bernoulli's theorem, pipe flow, rainfall-runoff",
    "Structural Analysis I and II — determinate and indeterminate structures, slope deflection",
    "Surveying and Geomatics — total station, GPS, GIS, remote sensing",
    "Soil Mechanics and Foundation Engineering — classification, bearing capacity, pile design",
    "Design of Concrete Structures and Steel Structures — IS 456, IS 800 based design",
    "Transportation Engineering, Environmental Engineering — pavement design, water and wastewater treatment",
    "Quantity Surveying and Valuation — BOQ, rate analysis, estimation",
    "Construction Project Management — CPM, PERT, contracts, tendering",
    "Programme and Open Electives — Concrete Technology, GIS, Prestressed Concrete, Disaster Management, and more",
  ],

  ctaDescription:
    "Struggling with a subject or need guidance on how to prepare for your semester? Getting the right help early saves your CGPA. One-to-one coaching is available for all KTU Civil 2024 scheme subjects.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What subjects are in KTU Civil S3 2024 scheme?",
      answer:
        "KTU Civil S3 (2024 scheme) includes GYMAT301 Mathematics for Physical Science-3, PCCET302 Fluid Mechanics, PCCET303 Structural Analysis-I, PBCET304 Surveying and Geomatics (PBL), GNEST305 Introduction to AI and Data Science, UCHUT346/UCHUT347 Economics for Engineers or Engineering Ethics (S3/S4 slot), PCCEL307 Survey Lab, and PCCEL308 Fluid Mechanics Lab.",
    },
    {
      question: "How is KTU Civil 2024 scheme different from the 2019 scheme?",
      answer:
        "Mechanics of Solids moves to S2, Engineering Graphics moves to S2, PBL is embedded in four core subjects, AI and Data Science added in S3, elective system expanded to 6 PEs and 3 OEs, and a formal Internship pathway added in S7/S8. Total credits remain 170.",
    },
    {
      question: "Can I get free KTU Civil 2024 notes and PYQs from BTechTutor?",
      answer:
        "Yes. BTechTutor provides free notes and PYQs for KTU Civil 2024 scheme subjects. Check the individual semester pages for subject-wise downloads.",
    },
    {
      question: "Does BTechTutor offer online tuition for KTU Civil 2024 scheme?",
      answer:
        "Yes. BTechTutor is a 100% online coaching platform based in Kerala. Call +91 98950 09337 to discuss subject-wise or semester packages for the Civil 2024 scheme.",
    },
    {
      question: "What is the PBL component in the KTU Civil 2024 scheme?",
      answer:
        "Four core Civil subjects have PBL embedded — Surveying and Geomatics (PBCET304, S3), Design of Concrete Structures (PBCET404, S4), Foundation Engineering (PBCET504, S5), and Construction Project Management (PBCET604, S6). These carry 60 CIA and 40 ESE marks with integrated projects.",
    },
    {
      question: "Is GATE possible after the KTU Civil 2024 scheme?",
      answer:
        "Yes. KTU Civil 2024 scheme has strong GATE Civil overlap — Fluid Mechanics, Structural Analysis, Soil Mechanics, Foundation Engineering, Environmental Engineering, Transportation, and Hydrology are all core GATE CE topics. BTechTutor offers GATE Civil coaching — call +91 98950 09337.",
    },
    {
      question: "What is the total credit requirement for KTU Civil 2024 scheme?",
      answer:
        "The total credit requirement is 170 credits distributed across BSC, ESC, Programme Core, PBL, Electives, Project/Internship, HMC, and Skill Enhancement courses.",
    },
    {
      question: "Can KTU Civil 2024 students do an internship instead of a project?",
      answer:
        "Yes. In S7, students can choose between Option 1 (Major Project under faculty) and Option 2 (Full semester industry internship of 4-6 months). The same option continues in S8.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuMechanical2024Content: KtuDepartmentHubContent = {
  heroBadge: "KTU Mechanical 2024 Scheme",

  heroHighlights: [
    { title: "2024 Scheme", subtitle: "Applicable for 2024-25 admissions onwards" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU Mechanical Engineering 2024 Scheme | BTechTutor",
    description:
      "KTU Mechanical Engineering 2024 scheme notes, syllabus, PYQs and video classes for all 8 semesters. Expert coaching by BTechTutor Kerala.",
    h1: "KTU Mechanical Engineering — 2024 Scheme (All Semesters)",
    primaryKeyword: "KTU Mechanical Engineering 2024 scheme",
    secondaryKeywords: ["KTU ME 2024 notes", "KTU Mechanical syllabus 2024", "KTU Mechanical Engineering coaching Kerala"],
    lsiKeywords: [
      "KTU ME study materials",
      "mechanical engineering btech Kerala",
      "KTU 2024 curriculum mechanical",
      "best coaching for KTU Mechanical",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Mechanical Engineering under the 2024 scheme. Semester-wise notes, previous year question papers, syllabus, and video classes — all semesters covered.",

  introduction: [
    "The KTU B.Tech Mechanical Engineering programme under the 2024 scheme (Branch Code: ME, Group C) runs across eight semesters and covers everything from core mechanics and thermodynamics to advanced manufacturing, machine design, and modern electives like robotics, additive manufacturing, and mechatronics. The curriculum balances theory with project-based learning (PBL) subjects in every semester from S3 to S6, giving students hands-on problem-solving experience alongside regular coursework.",
    "At BTechTutor, we provide semester-wise notes, previous year question papers, and video classes taught by experienced faculty for KTU Mechanical Engineering students. Whether you are preparing for your end-semester exams, catching up on tough subjects like Heat and Mass Transfer or Machine Design, or looking for a structured study plan, our resources are built around the actual KTU 2024 curriculum.",
  ],

  aboutHeading: "About KTU Mechanical Engineering 2024 Scheme",
  aboutBullets: [
    "Branch: Mechanical Engineering (ME) — Group C",
    "Scheme: KTU 2024 — applicable for students admitted 2024-25 onwards",
    "Duration: 8 semesters across 4 years",
    "S1 and S2: Common Group C curriculum shared with Civil Engineering",
    "S3 onwards: Mechanical-specific core subjects begin, with PBL integrated every semester from S3 to S6",
    "Six Programme Elective slots (PE-1 to PE-6) and three Open/Industry Linked Elective slots from S6 to S8",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2024-scheme/mechanical/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2024-scheme/mechanical/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2024-scheme/mechanical/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2024-scheme/mechanical/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2024-scheme/mechanical/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2024-scheme/mechanical/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2024-scheme/mechanical/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2024-scheme/mechanical/s8/" },
  ],

  offersHeading: "Why Choose BTechTutor for KTU Mechanical Engineering?",
  offerSteps: [
    {
      title: "15+ years of coaching experience",
      detail: "BTechTutor is a 100% online coaching platform based in Kerala with a proven track record.",
    },
    {
      title: "5,000+ students guided",
      detail: "A large community of KTU students have used our notes, PYQs, and video classes.",
    },
    {
      title: "800+ GATE selections",
      detail: "Our faculty also prepare students for GATE, giving KTU coursework an added depth.",
    },
    {
      title: "Module-wise notes and PYQs — free",
      detail: "Available for all Mechanical Engineering subjects across all 8 semesters.",
    },
    {
      title: "Video classes by subject specialists",
      detail: "Recorded lectures aligned to the KTU 2024 syllabus, accessible from anywhere.",
    },
    {
      title: "One-to-one mentoring",
      detail: "Personalised guidance for exam prep, elective selection, and project topics.",
    },
  ],

  subjectsHeading: "Programme Electives — Quick Reference",
  subjectsIntro:
    "The KTU ME 2024 curriculum offers six programme elective slots (PE-1 to PE-6) spread across S4 to S8, plus three open/industry linked elective slots in S6, S7, and S8. Each PE slot carries 3 credits (or 5 credits for Level-5 courses). Students can also pursue Honours or Minor programmes through optional VAC slots.",
  subjects: [
    "Mechanics of Solids and Fluid Mechanics — stress-strain, bending, Bernoulli, pipe flow, turbines and pumps",
    "Manufacturing Processes and Advanced Manufacturing — casting, welding, CNC, non-traditional machining",
    "Engineering Thermodynamics and Heat and Mass Transfer — cycles, entropy, conduction, convection, radiation",
    "Dynamics and Mechanics of Machinery — kinematics, cams, gears, governors, balancing, vibration",
    "Machine Design — design methodology, failure theories, shafts, bearings, springs",
    "Industrial and Systems Engineering — work study, plant layout, production planning",
    "Programme Electives — Turbo Machinery, CFD, Additive Manufacturing, Robotics, Mechatronics, and more",
    "Open Electives — Business Analytics, Renewable Energy, Automotive Technology, Quality Engineering",
  ],

  ctaDescription:
    "Get personalised guidance for KTU Mechanical Engineering — notes, video classes, exam prep and more.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What is the branch code for Mechanical Engineering in KTU 2024 scheme?",
      answer:
        "The branch code for Mechanical Engineering under KTU 2024 scheme is ME and it belongs to Group C.",
    },
    {
      question: "How many semesters are there in KTU Mechanical Engineering?",
      answer:
        "KTU B.Tech Mechanical Engineering covers 8 semesters — S1 to S8 — spanning four years.",
    },
    {
      question: "Which semesters have project-based learning (PBL) subjects in KTU ME 2024?",
      answer:
        "PBL subjects are part of S3 (Manufacturing Processes), S4 (Mechanics of Machinery), S5 (Management for Engineers), and S6 (Thermal Engineering). These follow a 60 CIA / 40 ESE pattern.",
    },
    {
      question: "Are notes and PYQs free on BTechTutor?",
      answer:
        "Yes. Notes and previous year question papers for all KTU Mechanical Engineering semesters are available free of charge on BTechTutor.",
    },
    {
      question: "Where can I get KTU Mechanical Engineering video classes online?",
      answer:
        "BTechTutor offers online video classes for KTU Mechanical Engineering subjects. Call or WhatsApp +91 98950 09337 to know more or book a demo module.",
    },
    {
      question: "What are the open electives offered for KTU ME 2024?",
      answer:
        "KTU ME 2024 offers open elective slots in S6, S7, and S8. These are courses offered by other departments such as business analytics, renewable energy, automotive technology, and quality engineering.",
    },
    {
      question: "Does KTU 2024 scheme have internship option for Mechanical students?",
      answer:
        "Yes. Students can opt for a full-semester internship in S7 or S8 in place of the major project. This is an industry/organisation internship lasting 4 to 6 months.",
    },
    {
      question: "What is a Level-5 course in KTU 2024 scheme?",
      answer:
        "Level-5 courses carry 5 credits (3 regular + 2 additional). The additional 2 credits are awarded only if the student meets eligibility conditions specified in the 2024 regulations. Examples from ME include PEMET415 Advanced Mechanics of Solids and PEMET745 Mechatronics.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuIt2024Content: KtuDepartmentHubContent = {
  heroBadge: "KTU IT 2024 Scheme",

  heroHighlights: [
    { title: "2024 Scheme", subtitle: "Applicable for 2024-25 admissions onwards" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU IT 2024 Scheme Notes & Subjects | BTechTutor",
    description:
      "KTU Information Technology 2024 scheme — notes, syllabus, PYQs and video classes for all 8 semesters. Online coaching by BTechTutor Kerala.",
    h1: "KTU Information Technology — 2024 Scheme (Branch Code: IT)",
    primaryKeyword: "KTU IT 2024 scheme notes",
    secondaryKeywords: ["KTU Information Technology 2024", "KTU IT notes Kerala", "KTU IT syllabus 2024"],
    lsiKeywords: [
      "KTU IT subjects semester wise",
      "KTU IT Group A 2024",
      "BTechTutor IT coaching Kerala",
      "best coaching for KTU IT",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Information Technology under the 2024 scheme. Semester-wise notes, previous year question papers, syllabus, and video classes — all semesters covered.",

  introduction: [
    "KTU B.Tech Information Technology under the 2024 scheme (Branch Code: IT, Group A) is a programme built around the modern realities of software development, networking, security, and intelligent systems. Over eight semesters, students move from programming and data structures in the early years to machine learning, cryptography, IoT, and specialised electives in cloud computing, NLP, blockchain, and more in the later years. The curriculum has four PBL (project-based learning) subjects in S3 through S6 — DBMS, Data Science, Web Application Development, and IoT — which follow a 60 CIA / 40 ESE pattern and demand consistent internal work.",
    "At BTechTutor, we provide free notes, PYQs, and syllabus downloads for all KTU IT semesters, along with paid video classes taught by experienced faculty. Whether you're in S3 struggling with Computer Organisation and Data Structures, or in S5 trying to make sense of Machine Learning, our resources are mapped directly to the KTU 2024 curriculum — no extra fluff, just what you need for your exams.",
  ],

  aboutHeading: "About KTU Information Technology 2024 Scheme",
  aboutBullets: [
    "Branch: Information Technology (IT) — Group A",
    "Scheme: KTU 2024 — applicable for students admitted 2024-25 onwards",
    "Duration: 8 semesters across 4 years",
    "S1 and S2: Common Group A curriculum, with Discrete Mathematical Structures as the first IT core subject in S2",
    "S3 onwards: IT-specific core subjects begin, with PBL integrated in DBMS (S3), Data Science (S4), Web App Development (S5), and IoT (S6)",
    "Six Programme Elective slots (PE-1 to PE-6) and three Open/Industry Linked Elective slots from S6 to S8",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2024-scheme/it/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2024-scheme/it/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2024-scheme/it/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2024-scheme/it/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2024-scheme/it/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2024-scheme/it/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2024-scheme/it/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2024-scheme/it/s8/" },
  ],

  offersHeading: "Why BTechTutor for KTU IT?",
  offerSteps: [
    {
      title: "15+ years of coaching experience",
      detail: "BTechTutor is a 100% online coaching platform based in Kerala with a proven track record.",
    },
    {
      title: "5,000+ students guided",
      detail: "A large community of KTU students have used our notes, PYQs, and video classes.",
    },
    {
      title: "Faculty who know KTU exams",
      detail: "Our IT faculty are professionals who know exactly which topics KTU examiners focus on.",
    },
    {
      title: "Module-wise notes and PYQs — free",
      detail: "Available for all Information Technology subjects across all 8 semesters.",
    },
    {
      title: "Video classes at affordable rates",
      detail: "Recorded lectures aligned to the KTU 2024 syllabus, accessible from anywhere.",
    },
    {
      title: "One-to-one mentoring",
      detail: "Personalised guidance for exam prep, elective selection, and project topics.",
    },
  ],

  subjectsHeading: "KTU IT 2024 Scheme Core Subjects — Overview",
  subjectsIntro:
    "Information Technology under the 2024 scheme covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Discrete Mathematical Structures — logic, sets, relations, graph theory, combinatorics",
    "Computer Organisation and Architecture, Data Structures — CPU design, memory, arrays, trees, graphs",
    "Database Management System — ER modelling, SQL, normalisation, transactions",
    "Computer Networks, Operating Systems — OSI/TCP-IP, routing, process management, scheduling",
    "Data Science and Machine Learning — data analysis, regression, classification, clustering",
    "Algorithm Analysis and Design — complexity, dynamic programming, graph algorithms, NP-completeness",
    "Web Application Development — HTML, CSS, JavaScript, React/Angular, Node.js, REST APIs",
    "Cryptography and Network Security, Advanced AI — encryption, PKI, knowledge representation",
    "Internet of Things — sensors, Arduino/Raspberry Pi, MQTT, cloud integration",
    "Programme and Open Electives — NLP, Blockchain, Cloud Computing, Cyber Forensics, and more",
  ],

  ctaDescription:
    "Struggling with a subject or need guidance on how to prepare for your semester? Getting the right help early saves your CGPA.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 98950 09337",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What is the branch code for KTU Information Technology 2024 scheme?",
      answer:
        "The branch code is IT and it belongs to Group A under the KTU 2024 B.Tech curriculum.",
    },
    {
      question: "How many semesters are there in KTU IT 2024?",
      answer:
        "KTU B.Tech IT runs across 8 semesters — S1 to S8 — covering four years.",
    },
    {
      question: "Which semesters have PBL subjects in KTU IT 2024?",
      answer:
        "PBL subjects are in S3 (DBMS), S4 (Data Science), S5 (Web Application Development), and S6 (Internet of Things). All follow 60 CIA / 40 ESE marking.",
    },
    {
      question: "Are KTU IT 2024 notes free on BTechTutor?",
      answer:
        "Yes. Notes and PYQs for all KTU IT semesters are available free. Video classes are available as paid courses.",
    },
    {
      question: "Does KTU IT 2024 scheme have an internship option?",
      answer:
        "Yes. Students can opt for a full-semester industry internship in either S7 or S8 as an alternative to the major project.",
    },
    {
      question: "What are the elective options in KTU IT 2024?",
      answer:
        "There are six programme elective slots (PE-1 to PE-6) across S4 to S8, plus three open/industry linked elective slots in S6, S7, and S8.",
    },
    {
      question: "What is a Level-5 course in KTU IT 2024?",
      answer:
        "Level-5 courses carry 5 credits — 3 regular plus 2 additional. The extra 2 credits are awarded only if the student meets eligibility conditions in the 2024 regulations. Examples: PEITT415 Operations Research, PEITT745 Deep Learning.",
    },
    {
      question: "Is BTechTutor useful for KTU IT students in Kerala?",
      answer:
        "Yes. BTechTutor is fully online and accessible from anywhere in Kerala. Students from Thiruvananthapuram, Kochi, Thrissur, Kozhikode and across the state use BTechTutor for KTU coaching.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

export const ktuCs2024Content: KtuDepartmentHubContent = {
  heroBadge: "KTU CS 2024 Scheme",

  heroHighlights: [
    { title: "2024 Scheme", subtitle: "Applicable for 2024-25 admissions onwards" },
    { title: "8 Semesters", subtitle: "Full S1 to S8 coverage with notes and PYQs" },
    { title: "Free Resources", subtitle: "Syllabus, notes and PYQs free for all subjects" },
  ],

  seo: {
    title: "KTU CS 2024 Scheme Notes & Subjects | BTechTutor",
    description:
      "KTU Computer Science Engineering 2024 scheme — notes, syllabus, PYQs and video classes for all 8 semesters. Expert online coaching by BTechTutor Kerala.",
    h1: "KTU Computer Science Engineering — 2024 Scheme (Branch Code: CS)",
    primaryKeyword: "KTU CS 2024 scheme notes",
    secondaryKeywords: ["KTU Computer Science 2024 scheme", "KTU CS notes Kerala", "KTU CSE syllabus 2024"],
    lsiKeywords: [
      "KTU CS subjects semester wise",
      "KTU CSE Group A 2024",
      "BTechTutor CS coaching Kerala",
      "KTU computer science engineering coaching online",
    ],
  },

  heroSubheading:
    "Your complete study resource hub for KTU BTech Computer Science and Engineering under the 2024 scheme. Semester-wise notes, previous year question papers, syllabus, and video classes — all semesters covered.",

  introduction: [
    "KTU B.Tech Computer Science and Engineering under the 2024 scheme (Branch Code: CS, Group A) is one of the most sought-after engineering programmes in Kerala. Over eight semesters, students move from programming fundamentals and discrete mathematics in the early years to compilers, machine learning, cyber security, and advanced computing systems in the later ones. The curriculum has four Project Based Learning (PBL) subjects in S3 through S6 — Object Oriented Programming, Computer Organization, Microcontrollers, and Cyber Security — each following a 60 CIA / 40 ESE pattern that rewards consistent semester-long effort.",
    "BTechTutor provides free notes, PYQs, and syllabus for all KTU CS semesters, with paid video classes taught by experienced faculty. Whether you are in S3 battling Theory of Computation and Data Structures, or in S5 trying to make sense of Machine Learning and Algorithm Design, our resources are mapped directly to the KTU 2024 CS curriculum.",
  ],

  aboutHeading: "About KTU Computer Science Engineering 2024 Scheme",
  aboutBullets: [
    "Branch: Computer Science and Engineering (CS) — Group A",
    "Scheme: KTU 2024 — applicable for students admitted 2024-25 onwards",
    "Duration: 8 semesters across 4 years",
    "S1 and S2: Common Group A curriculum, with Discrete Mathematics as the first CS core subject in S2",
    "S3 onwards: CS-specific core subjects begin, with PBL integrated in OOP (S3), Computer Organization (S4), Microcontrollers (S5), and Cyber Security (S6)",
    "Six Programme Elective slots (PE-1 to PE-6) and three Open/Industry Linked Elective slots from S6 to S8",
  ],

  semesterHeading: "Go to Your Semester",
  semesterIntro:
    "Select your current semester to find notes, question papers, and video classes:",
  semesters: [
    { code: "S1", label: "Semester 1", href: "/ktu/2024-scheme/cs/s1/" },
    { code: "S2", label: "Semester 2", href: "/ktu/2024-scheme/cs/s2/" },
    { code: "S3", label: "Semester 3", href: "/ktu/2024-scheme/cs/s3/" },
    { code: "S4", label: "Semester 4", href: "/ktu/2024-scheme/cs/s4/" },
    { code: "S5", label: "Semester 5", href: "/ktu/2024-scheme/cs/s5/" },
    { code: "S6", label: "Semester 6", href: "/ktu/2024-scheme/cs/s6/" },
    { code: "S7", label: "Semester 7", href: "/ktu/2024-scheme/cs/s7/" },
    { code: "S8", label: "Semester 8", href: "/ktu/2024-scheme/cs/s8/" },
  ],

  offersHeading: "Why BTechTutor for KTU CS?",
  offerSteps: [
    {
      title: "15+ years of coaching experience",
      detail: "BTechTutor is a 100% online coaching platform with a proven track record.",
    },
    {
      title: "5,000+ students guided",
      detail: "A large community of KTU students have used our notes, PYQs, and video classes.",
    },
    {
      title: "800+ GATE selections",
      detail: "Our CS faculty understand what KTU examiners actually test — and our resources are built around that.",
    },
    {
      title: "Module-wise notes and PYQs — free",
      detail: "Available for all Computer Science subjects across all 8 semesters.",
    },
    {
      title: "Video classes at affordable rates",
      detail: "Recorded lectures aligned to the KTU 2024 syllabus, accessible from anywhere.",
    },
    {
      title: "One-to-one mentoring",
      detail: "Personalised guidance for exam prep, elective selection, and project topics.",
    },
  ],

  subjectsHeading: "KTU CS 2024 Scheme Core Subjects — Overview",
  subjectsIntro:
    "Computer Science Engineering under the 2024 scheme covers a wide range of subjects across 8 semesters. Key subjects include:",
  subjects: [
    "Discrete Mathematics — logic, sets, relations, graph theory, combinatorics, Boolean algebra",
    "Theory of Computation, Data Structures and Algorithms — automata, trees, graphs, sorting, searching",
    "Object Oriented Programming, Computer Organization and Architecture — classes, CPU design, pipelining",
    "Database Management Systems, Operating Systems — SQL, normalisation, process scheduling, memory management",
    "Computer Networks, Machine Learning — OSI/TCP-IP, regression, classification, clustering",
    "Design and Analysis of Algorithms, Microcontrollers — complexity, dynamic programming, embedded systems",
    "Compiler Design, Advanced Computing Systems — parsing, code generation, parallel and distributed computing",
    "Fundamentals of Cyber Security — cryptography, malware analysis, firewalls, vulnerability assessment",
    "Programme and Open Electives — Deep Learning, Blockchain, Cloud Computing, Computer Vision, and more",
  ],

  ctaDescription:
    "Struggling with a subject or need guidance on how to prepare for your semester? Getting the right help early saves your CGPA.",

  ctaLabel: "Talk to a Mentor",
  ctaHref: "/contact",
  ctaPhone: "+91 9895006772",
  ctaEmail: "help.btechtutorkerala@gmail.com",

  faqs: [
    {
      question: "What is the branch code for KTU CS 2024 scheme?",
      answer: "Branch Code: CS, Group A.",
    },
    {
      question: "How many semesters in KTU CS 2024?",
      answer: "8 semesters across 4 years.",
    },
    {
      question: "Which semesters have PBL subjects in KTU CS 2024?",
      answer:
        "S3 (OOP — PBCST304), S4 (Computer Organization — PBCST404), S5 (Microcontrollers — PBCST504), S6 (Fundamentals of Cyber Security — PBCST604). All follow 60 CIA / 40 ESE.",
    },
    {
      question: "Are KTU CS 2024 notes free on BTechTutor?",
      answer: "Yes. Notes and PYQs for all KTU CS semesters are available free. Video classes are paid.",
    },
    {
      question: "Does KTU CS 2024 have an internship option?",
      answer: "Yes. Full-semester industry internship in S7 or S8 as alternative to the major project.",
    },
    {
      question: "How many electives are in KTU CS 2024?",
      answer:
        "Six programme elective slots (PE-1 to PE-6) from S4 to S8, plus three open/industry linked elective slots in S6, S7, and S8.",
    },
    {
      question: "Is BTechTutor useful for KTU CS students preparing for GATE?",
      answer:
        "Yes. Many KTU CS core subjects — Theory of Computation, Data Structures, Computer Networks, OS, Algorithms — are high-weightage GATE CS topics. BTechTutor coaching for these subjects serves both KTU exams and GATE preparation.",
    },
    {
      question: "What are the Level-5 electives in KTU CS 2024?",
      answer:
        "Level-5 electives carry 5 credits (3+2). Examples: PECST415 VLSI Design, PECST495 Advanced Data Structures (PE-1), PECST525 Data Mining, PECST595 Advanced Graph Algorithms (PE-2), PECST635 Cloud Computing, PECST695 Mobile App Development (PE-3), and more across PE-4 to PE-6.",
    },
  ],

  internalLinks: [
    { label: "KTU 2024 Scheme", href: "/ktu/2024" },
    { label: "KTU Study Hub", href: "/ktu" },
    { label: "Supply Exam Coaching", href: "/ktu/supply-exam" },
    { label: "Previous Year Papers", href: "/ktu/previous-year-papers" },
    { label: "CGPA Calculator", href: "/ktu/cgpa" },
  ],
};

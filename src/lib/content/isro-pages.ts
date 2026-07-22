export interface IsroSeoContent {
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export interface IsroFaqItem {
  question: string;
  answer: string;
}

export interface IsroBranchItem {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface IsroTable {
  heading: string;
  columns: string[];
  rows: string[][];
}

export interface IsroResource {
  resource: string;
  type: string;
  access: "FREE" | "PAID";
}

export interface IsroSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface IsroPageContent {
  slug: string;
  navLabel: string;
  seo: IsroSeoContent;
  heroSubheading?: string;
  introduction?: string[];
  branches?: IsroBranchItem[];
  tables?: IsroTable[];
  additionalSections?: IsroSection[];
  resources?: IsroResource[];
  internalLinks?: Array<{ label: string; href: string }>;
  contact?: { phone: string; email: string };
  ctaLabel?: string;
  ctaHref?: string;
  faqs: IsroFaqItem[];
}

const CONTACT = {
  phone: "+91 9895006772",
  email: "help.btechtutorkerala@gmail.com",
} as const;

// The Resources table repeats on every ISRO page. Links are "to be added"
// in the source copy, so these render as informational rows (no dead links).
const STANDARD_RESOURCES: IsroResource[] = [
  { resource: "ISRO Syllabus PDF", type: "Official", access: "FREE" },
  { resource: "Previous Year Papers", type: "PYQs", access: "FREE" },
  { resource: "Mock Tests", type: "Practice", access: "FREE" },
  { resource: "Video Classes (Full Course)", type: "Coaching", access: "PAID" },
  { resource: "Demo Class (YouTube)", type: "YouTube", access: "FREE" },
];

export const isroPagesContent: IsroPageContent[] = [
  // ---------------------------------------------------------------- Hub ----
  {
    slug: "",
    navLabel: "ISRO Coaching",
    seo: {
      title: "ISRO Coaching Online — Scientist/Engineer | BTechTutor",
      description:
        "Online ISRO Scientist/Engineer coaching for ECE, EEE, Mechanical and CS. Free PYQs, syllabus, mock tests and expert video classes. BTechTutor Kerala.",
      h1: "ISRO Scientist/Engineer Coaching Online | BTechTutor",
      primaryKeyword: "ISRO coaching online",
      secondaryKeywords: [
        "ISRO Scientist Engineer coaching",
        "online ISRO preparation",
        "best ISRO coaching India",
      ],
    },
    heroSubheading:
      "100% online ISRO Scientist/Engineer coaching for ECE, EEE, Mechanical, and Computer Science — with free PYQs, syllabus downloads, mock tests, and expert video classes from a team that knows both GATE and ISRO.",
    introduction: [
      "ISRO — the Indian Space Research Organisation — is one of the most prestigious employers for engineering graduates in India. A Scientist/Engineer 'SC' or 'SD' post at ISRO is not just a job. It is a chance to work on satellite technology, launch vehicles, space exploration, and defence applications that put India on the global map. The competition is fierce, the technical depth required is significant, and the preparation needs to be structured.",
      "BTechTutor offers 100% online ISRO coaching for ECE, EEE, Mechanical, and Computer Science branches. Our faculty are experienced in both GATE and ISRO preparation — and the syllabus overlap between the two is substantial. If you have GATE-level preparation, you are already well on your way to ISRO. If you are starting fresh, we will get you there.",
    ],
    tables: [
      {
        heading: "ISRO Exam — Quick Overview",
        columns: ["Factor", "Details"],
        rows: [
          ["Conducting body", "ISRO ICRB (Centralised Recruitment Board)"],
          ["Post", "Scientist/Engineer SC and SD"],
          [
            "Exam pattern",
            "Written Test (Part A: Technical 80 marks + Part B: Aptitude 15 marks = 95 marks total) + Interview",
          ],
          ["Duration", "120 minutes"],
          ["Negative marking", "1/3 per wrong answer"],
          ["Branches covered", "ECE, EEE, Mechanical, Computer Science, Civil, and others"],
          [
            "Eligibility",
            "B.E./B.Tech or equivalent in relevant discipline with 65% or above (60% for SC/ST/PwBD)",
          ],
          ["Selection process", "Written Test → Interview → Medical Examination"],
          [
            "Pay scale",
            "Level 10 (SC) and Level 11 (SD) as per 7th CPC — approx Rs. 56,100 to Rs. 1,77,500",
          ],
          ["Frequency", "Notified periodically — typically once or twice a year"],
        ],
      },
    ],
    branches: [
      {
        title: "ISRO ECE — Electronics & Communication",
        description:
          "Networks, Signals, EDC, Analog Circuits, Control Systems, Digital Electronics, Communications, and EM Theory — at a depth equivalent to GATE EC.",
        ctaLabel: "Explore ISRO ECE Coaching",
        ctaHref: "/isro/ece/",
      },
      {
        title: "ISRO EEE — Electrical & Electronics",
        description:
          "Circuits, Machines, Power Electronics, Control Systems, Power Systems, and Signals — for power and electrical subsystems across ISRO missions.",
        ctaLabel: "Explore ISRO EEE Coaching",
        ctaHref: "/isro/eee/",
      },
      {
        title: "ISRO Mechanical",
        description:
          "Engineering Mechanics, Thermodynamics, Fluid Mechanics, Manufacturing, Machine Design, and Theory of Machines — for structural, thermal, and propulsion work.",
        ctaLabel: "Explore ISRO Mechanical Coaching",
        ctaHref: "/isro/mechanical/",
      },
      {
        title: "ISRO CS — Computer Science",
        description:
          "Data Structures, Algorithms, OS, DBMS, Computer Networks, Compiler Design, and Theory of Computation — the highest GATE overlap of any discipline.",
        ctaLabel: "Explore ISRO CS Coaching",
        ctaHref: "/isro/cs/",
      },
    ],
    additionalSections: [
      {
        heading: "ISRO vs GATE — Syllabus Overlap",
        paragraphs: [
          "ISRO vs GATE syllabus overlap is 70-80% for most branches. A student with solid GATE preparation has a significant head start in ISRO. BTechTutor GATE coaching directly supports ISRO preparation.",
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "Scientist/Engineer Guide", href: "/isro/scientist-engineer/" },
      { label: "ISRO ECE", href: "/isro/ece/" },
      { label: "ISRO EEE", href: "/isro/eee/" },
      { label: "ISRO Mechanical", href: "/isro/mechanical/" },
      { label: "ISRO CS", href: "/isro/cs/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What branches does ISRO recruit for?",
        answer:
          "ISRO regularly recruits Scientist/Engineer posts in Electronics (ECE), Electrical (EEE), Mechanical, Computer Science, Civil, and other disciplines through ISRO ICRB notifications.",
      },
      {
        question: "What is the eligibility for ISRO Scientist/Engineer?",
        answer:
          "B.E./B.Tech or M.Sc./M.Tech in the relevant discipline with a minimum 65% aggregate (60% for SC/ST/PwBD). Age limit is typically 35 years with relaxations for reserved categories.",
      },
      {
        question: "How is the ISRO written test structured?",
        answer:
          "The written test has 95 questions — 80 from technical/discipline subjects (Part A) and 15 from aptitude/reasoning (Part B). Duration is 120 minutes with 1/3 negative marking.",
      },
      {
        question: "How often does ISRO recruit?",
        answer:
          "ISRO releases recruitment notifications periodically — typically once or twice a year via ISRO ICRB. Notifications come separately for different discipline groups.",
      },
      {
        question: "Is GATE score required for ISRO?",
        answer:
          "For some ISRO recruitment cycles, a valid GATE score is used for shortlisting instead of a written test. For others, ISRO conducts its own written exam. Check the specific notification for each cycle.",
      },
      {
        question: "What is the salary for ISRO Scientist/Engineer?",
        answer:
          "ISRO Scientist/Engineer SC (Level 10) starts at Rs. 56,100 per month. With DA, HRA, and other allowances, the effective pay is significantly higher. The position also comes with government accommodation and other perks.",
      },
      {
        question: "Does BTechTutor offer ISRO coaching?",
        answer:
          "Yes. BTechTutor offers online ISRO coaching for ECE, EEE, Mechanical, and CS branches — with free PYQs, syllabus downloads, mock tests, and paid video classes. Call +91 9895006772.",
      },
      {
        question: "How is ISRO different from GATE preparation?",
        answer:
          "ISRO and GATE share 70-80% syllabus overlap. ISRO additionally includes an aptitude section and the exam is conducted by ISRO ICRB rather than IITs. The ISRO interview rounds test personality, research aptitude, and organisational fit beyond just technical knowledge.",
      },
    ],
  },

  // ------------------------------------------------ Scientist / Engineer ----
  {
    slug: "scientist-engineer",
    navLabel: "Scientist/Engineer Guide",
    seo: {
      title: "ISRO Scientist Engineer Coaching Online | BTechTutor",
      description:
        "ISRO Scientist Engineer SC SD exam coaching — syllabus, exam pattern, eligibility, selection process and online preparation. BTechTutor Kerala.",
      h1: "ISRO Scientist/Engineer SC & SD — Exam Guide and Online Coaching",
      primaryKeyword: "ISRO Scientist Engineer coaching",
      secondaryKeywords: [
        "ISRO Scientist Engineer SC exam",
        "ISRO SD coaching",
        "ISRO Scientist preparation online",
      ],
    },
    heroSubheading:
      "Everything you need to understand the ISRO Scientist/Engineer SC and SD posts — selection process, eligibility, exam pattern, and how BTechTutor prepares you for it online.",
    introduction: [
      "The ISRO Scientist/Engineer post is among the most respected technical roles in India's government sector. Scientist/Engineer 'SC' is the entry-level post for fresh engineering graduates, while 'SD' is for candidates with post-graduate qualifications or relevant experience. Both positions are recruited through ISRO ICRB and involve work directly related to space technology, satellite systems, launch vehicle development, and related fields.",
      "The competition is serious — thousands of engineers from across India apply for a limited number of posts. But the preparation is very structured: a strong technical foundation in your discipline plus targeted aptitude preparation is a clear and achievable path.",
    ],
    tables: [
      {
        heading: "Selection Process",
        columns: ["Stage", "Round", "Details"],
        rows: [
          [
            "Stage 1",
            "Written Test",
            "Part A: Technical (80 marks) + Part B: Aptitude (15 marks) = 95 marks, 120 minutes, 1/3 negative marking",
          ],
          [
            "Stage 2",
            "Interview",
            "Personal interview for shortlisted candidates — tests technical depth, research aptitude, and personality",
          ],
          ["Stage 3", "Medical", "Medical examination as per ISRO standards"],
          ["Stage 4", "Final Merit", "Based on written test score + interview performance"],
        ],
      },
      {
        heading: "Eligibility — SC vs SD Posts",
        columns: ["Post", "Qualification", "Marks", "Age"],
        rows: [
          [
            "Scientist/Engineer SC",
            "B.E./B.Tech or equivalent",
            "65% aggregate (60% SC/ST/PwBD)",
            "Up to 35 years",
          ],
          [
            "Scientist/Engineer SD",
            "M.E./M.Tech or B.E. + 2 yrs experience",
            "65% aggregate",
            "Up to 35 years",
          ],
        ],
      },
    ],
    additionalSections: [
      {
        heading: "Exam Pattern — Written Test",
        paragraphs: [
          "Total: 95 marks | 95 questions | 120 minutes | Negative marking: 1/3. Part A (Technical): 80 questions x 1 mark = 80 marks. Part B (Aptitude/Reasoning): 15 questions x 1 mark = 15 marks.",
          "The technical section tests your engineering discipline knowledge at a depth comparable to GATE. The aptitude section covers numerical reasoning, logical reasoning, abstract reasoning, and diagrammatic reasoning. Unlike GATE, ISRO does not have Numerical Answer Type (NAT) questions — all questions are MCQs.",
        ],
      },
      {
        heading: "How BTechTutor Prepares You for ISRO",
        bullets: [
          "Technical foundation — BTechTutor video classes cover the entire ISRO technical syllabus for ECE, EEE, Mechanical, and CS with ISRO-specific PYQ analysis.",
          "PYQs from the last 10+ years — solving ISRO previous year papers is the single most effective preparation activity. BTechTutor provides these free.",
          "Mock tests — full-length ISRO pattern mock tests (80 technical + 15 aptitude, 120 minutes) to build exam-day stamina and time management.",
          "Interview preparation — technical interview preparation covering research aptitude questions and ISRO-specific topics like satellite systems, space missions, and launch vehicles.",
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What is the difference between ISRO SC and SD posts?",
        answer:
          "Scientist/Engineer SC is for fresh B.E./B.Tech graduates (65% minimum). SD is for M.E./M.Tech holders or candidates with 2+ years relevant experience after B.E./B.Tech.",
      },
      {
        question: "What is the written test pattern for ISRO Scientist/Engineer?",
        answer:
          "95 questions, 95 marks, 120 minutes. Part A: 80 technical MCQs. Part B: 15 aptitude MCQs. Negative marking of 1/3 per wrong answer. All MCQs — no NAT questions.",
      },
      {
        question: "How many vacancies does ISRO typically announce?",
        answer:
          "Vacancy count varies per notification. Recent cycles have ranged from 28 to 320+ posts across different discipline groups and streams.",
      },
      {
        question: "Is GATE score valid for ISRO recruitment?",
        answer:
          "For some cycles, ISRO uses GATE scores for shortlisting without a separate written test. For other cycles, ISRO conducts its own written exam. Always check the specific notification.",
      },
      {
        question: "What is the ISRO Scientist/Engineer salary?",
        answer:
          "Scientist/Engineer SC falls in Level 10 of the 7th CPC pay matrix, starting at Rs. 56,100 per month. With DA, HRA, transport allowance, and other perks, the effective package is significantly higher.",
      },
      {
        question: "How is the ISRO interview conducted?",
        answer:
          "The ISRO interview is a personal interview testing technical knowledge in depth, research aptitude, and suitability for space research work. Candidates should be prepared for detailed technical questions beyond textbook level.",
      },
      {
        question: "How do I apply for ISRO Scientist/Engineer?",
        answer:
          "Applications are submitted online through the ISRO ICRB official portal (isro.gov.in) within the notification window. Check isro.gov.in for current and upcoming notifications.",
      },
    ],
  },

  // ----------------------------------------------------------------- ECE ----
  {
    slug: "ece",
    navLabel: "ISRO ECE",
    seo: {
      title: "ISRO ECE Coaching Online — Scientist/Engineer | BTechTutor",
      description:
        "ISRO Electronics ECE Scientist/Engineer coaching — syllabus, PYQs, mock tests and video classes. 100% online. BTechTutor Kerala.",
      h1: "ISRO ECE Coaching — Scientist/Engineer Electronics | BTechTutor",
      primaryKeyword: "ISRO ECE coaching",
      secondaryKeywords: [
        "ISRO Electronics Scientist Engineer coaching",
        "ISRO ECE preparation",
        "ISRO EC exam online coaching",
      ],
    },
    heroSubheading:
      "Dedicated ISRO ECE preparation for the Scientist/Engineer 'Electronics' post — complete technical syllabus, free PYQs, mock tests, and video classes.",
    introduction: [
      "ISRO recruits Electronics and Communication Engineers (EC discipline) for work across satellite payloads, RF and microwave systems, signal processing, communication subsystems, and spacecraft electronics. The ISRO ECE written test is technically demanding — the 80-mark technical section tests your understanding of Networks, Signals and Systems, Electronic Devices, Analog Circuits, Control Systems, Digital Electronics, Electromagnetics, and Communications at a depth equivalent to GATE EC.",
      "The good news for ECE engineers is that GATE EC and ISRO EC share approximately 80% syllabus overlap. If you have GATE-level preparation, the gap to ISRO is mostly about targeted PYQ practice and aptitude work. BTechTutor offers dedicated ISRO ECE preparation with free PYQs and paid video classes covering the complete technical syllabus.",
    ],
    tables: [
      {
        heading: "ISRO Syllabus — Key Topics",
        columns: ["Subject Area", "Key Topics"],
        rows: [
          [
            "Networks, Signals & Systems",
            "Circuit analysis, Thevenin/Norton, Laplace transforms, Fourier series and transforms, Z-transform, sampling theorem, LTI systems, convolution, DTFT",
          ],
          [
            "Electronic Devices & Circuits",
            "PN junction, BJT, MOSFET, biasing, small-signal models, amplifier configurations, feedback, oscillators",
          ],
          [
            "Analog Circuits",
            "Op-amp characteristics, applications (integrator, differentiator, comparator), signal generators, filters, ADC/DAC",
          ],
          [
            "Digital Electronics",
            "Boolean algebra, combinational circuits, sequential circuits, flip-flops, counters, shift registers, PLDs",
          ],
          [
            "Control Systems",
            "Transfer functions, block diagrams, signal flow graphs, stability (Routh, Bode, Nyquist), root locus, PID controllers",
          ],
          [
            "Communications",
            "AM/FM/PM modulation, noise analysis, digital modulation (ASK, FSK, PSK, QAM), channel capacity, spread spectrum",
          ],
          [
            "Electromagnetics",
            "Maxwell's equations, plane waves, transmission lines, waveguides, antennas, radiation patterns",
          ],
          [
            "Microprocessors",
            "8085/8086 architecture, assembly language, interfacing, interrupts, memory organisation",
          ],
          [
            "Aptitude — Part B",
            "Numerical reasoning, logical reasoning, abstract reasoning, diagrammatic reasoning — 15 questions",
          ],
        ],
      },
    ],
    additionalSections: [
      {
        heading: "How to Prepare — Tips",
        bullets: [
          "Networks and Signals & Systems together account for the highest weightage in ISRO ECE. Master circuit theorems, Laplace transforms, and Fourier analysis with PYQ practice.",
          "Control Systems is high-weightage and very predictable in question patterns. Bode plots, root locus, and stability criteria appear consistently in ISRO EC papers.",
          "Electronic Devices and Analog Circuits — MOSFET operating regions, op-amp circuits, and feedback amplifiers are the most-tested areas.",
          "Communications — modulation techniques and noise calculations appear every year. Practice SNR and bandwidth problems with actual ISRO PYQs.",
          "Do not neglect the Aptitude section (Part B). 15 marks from aptitude is a reliable scoring opportunity with much less study time than the technical section.",
          "Solve at least 10 years of ISRO EC PYQs before your exam. ISRO repeats question patterns and some near-identical questions across years.",
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What is the ISRO ECE syllabus?",
        answer:
          "ISRO ECE covers Networks & Signals, Electronic Devices, Analog Circuits, Digital Electronics, Control Systems, Communications, Electromagnetics, and Microprocessors in Part A (80 marks), plus Aptitude/Reasoning in Part B (15 marks).",
      },
      {
        question: "Is ISRO ECE tougher than GATE ECE?",
        answer:
          "The difficulty level is comparable. ISRO ECE is more focused on direct application questions and tends to test specific topic knowledge. GATE has more analytical and NAT questions. Both require the same depth of preparation.",
      },
      {
        question: "What cutoff is needed for ISRO ECE?",
        answer:
          "ISRO cutoffs vary by year and category. For the General category, technical section scores of 55-65 out of 80 are typically competitive for shortlisting. Always check the official ISRO notification for exact cutoffs.",
      },
      {
        question: "How many ISRO ECE vacancies are announced typically?",
        answer:
          "ISRO ECE vacancy counts vary per notification cycle. Electronics is one of the larger disciplines and typically sees more vacancies than smaller streams.",
      },
      {
        question: "Does BTechTutor offer ISRO ECE coaching?",
        answer:
          "Yes. Free PYQs, syllabus, and mock tests are available. Paid video classes covering the complete ISRO ECE syllabus are also available. Call +91 9895006772.",
      },
      {
        question: "Can I prepare for ISRO ECE and GATE ECE together?",
        answer:
          "Yes — the syllabus overlap is approximately 80%. Preparing for both simultaneously is efficient and widely recommended.",
      },
    ],
  },

  // ----------------------------------------------------------------- EEE ----
  {
    slug: "eee",
    navLabel: "ISRO EEE",
    seo: {
      title: "ISRO EEE Coaching Online — Scientist/Engineer | BTechTutor",
      description:
        "ISRO Electrical EEE Scientist/Engineer coaching — syllabus, PYQs, mock tests and video classes. 100% online. BTechTutor Kerala.",
      h1: "ISRO EEE Coaching — Scientist/Engineer Electrical | BTechTutor",
      primaryKeyword: "ISRO EEE coaching",
      secondaryKeywords: [
        "ISRO Electrical Scientist Engineer coaching",
        "ISRO EEE preparation",
        "ISRO EE exam online coaching",
      ],
    },
    heroSubheading:
      "Dedicated ISRO EEE preparation for the Scientist/Engineer 'Electrical' post — complete technical syllabus, free PYQs, mock tests, and video classes.",
    introduction: [
      "ISRO recruits Electrical Engineers (EE discipline) for power systems, satellite power conditioning, ground station electrical systems, and electrical subsystems in spacecraft and launch vehicles. The ISRO EEE written test covers Circuits and Networks, Electrical Machines, Power Electronics, Control Systems, Power Systems, Signals and Systems, and Measurement and Instrumentation — all at GATE-equivalent technical depth.",
      "Electrical Engineering is one of the core disciplines with consistent ISRO recruitment. The syllabus overlap with GATE EEE is approximately 75%. BTechTutor offers dedicated ISRO EEE preparation through free PYQs, syllabus downloads, and paid video classes taught by experienced faculty.",
    ],
    tables: [
      {
        heading: "ISRO Syllabus — Key Topics",
        columns: ["Subject Area", "Key Topics"],
        rows: [
          [
            "Circuits & Networks",
            "KVL, KCL, Thevenin, Norton, superposition, AC circuits, transients, two-port networks, resonance",
          ],
          [
            "Electrical Machines",
            "DC machines (motors and generators), transformers, induction motors, synchronous machines, starting and control methods",
          ],
          [
            "Power Electronics",
            "Diodes, thyristors, MOSFETs, converters (AC-DC, DC-DC, DC-AC), choppers, inverters, PWM techniques",
          ],
          [
            "Control Systems",
            "Transfer functions, block diagrams, stability analysis, Bode plots, root locus, PID, state space",
          ],
          [
            "Power Systems",
            "Load flow analysis, fault analysis, protection systems, circuit breakers, transmission line parameters, stability",
          ],
          [
            "Signals & Systems",
            "Laplace transforms, Fourier series and transforms, Z-transform, LTI systems, convolution, sampling",
          ],
          [
            "Measurements & Instruments",
            "Measuring instruments, bridges, transducers, CRO, error analysis, digital meters",
          ],
          [
            "Basic Electronics",
            "PN junction, BJT, op-amps, logic gates, digital circuits, ADC/DAC basics",
          ],
          [
            "Aptitude — Part B",
            "Numerical, logical, abstract and diagrammatic reasoning — 15 questions",
          ],
        ],
      },
    ],
    additionalSections: [
      {
        heading: "How to Prepare — Tips",
        bullets: [
          "Electrical Machines is typically the highest-weightage area in ISRO EEE. DC machines, transformers, and synchronous machines — cover all types of problems from torque calculations to equivalent circuits.",
          "Power Electronics has grown in weightage in recent ISRO EEE papers. Converter circuits, PWM techniques, and drive systems are priority areas.",
          "Control Systems is common to both ECE and EEE ISRO exams and is very predictable. Systematic preparation here gives reliable marks.",
          "Power Systems — load flow, fault analysis, and protection systems questions appear consistently. Use the phasor approach for AC circuit problems.",
          "Solve ISRO EEE PYQs from the last 10 years branch-wise. ISRO EE questions have recognisable patterns that repeat with variations.",
          "The Aptitude section (Part B) — 15 marks from standard reasoning questions. Practise for 30-45 minutes daily for 2-3 weeks to reliably score here.",
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What is the ISRO EEE syllabus?",
        answer:
          "ISRO EEE covers Circuits and Networks, Electrical Machines, Power Electronics, Control Systems, Power Systems, Signals and Systems, Measurements and Instrumentation, and Basic Electronics in Part A (80 marks), plus Aptitude in Part B (15 marks).",
      },
      {
        question: "Is GATE EEE preparation enough for ISRO EEE?",
        answer:
          "GATE EEE preparation covers approximately 75% of the ISRO EEE syllabus. The remaining gap is mostly in Measurements and Instrumentation, which GATE EEE covers but at different depth. Some additional topic-specific preparation is recommended.",
      },
      {
        question: "What ISRO EEE cutoff is expected?",
        answer:
          "ISRO EEE cutoffs vary per cycle and category. General category candidates typically need 55-65+ out of 80 in Part A to be competitive for shortlisting. Check official ISRO notifications for specific cutoffs.",
      },
      {
        question: "Does BTechTutor offer ISRO EEE coaching?",
        answer:
          "Yes. Free PYQs, syllabus, and mock tests are available. Paid video classes for the complete ISRO EEE syllabus are also available. Call +91 9895006772.",
      },
      {
        question: "Can Kerala EEE engineers appear for ISRO?",
        answer:
          "Yes. ISRO recruitment is open to candidates across India including Kerala. BTechTutor serves ISRO aspirants from all Kerala districts through 100% online coaching.",
      },
      {
        question: "Is ISRO EEE job better than KSEB or Kerala PSC?",
        answer:
          "ISRO is a central government PSU offering higher pay, national prestige, and work in cutting-edge space technology. KSEB and Kerala PSC offer state-level job security with Kerala posting. The choice depends on career goals and personal preference.",
      },
    ],
  },

  // ---------------------------------------------------------- Mechanical ----
  {
    slug: "mechanical",
    navLabel: "ISRO Mechanical",
    seo: {
      title: "ISRO Mechanical Coaching Online — Scientist/Engineer | BTechTutor",
      description:
        "ISRO Mechanical Scientist/Engineer coaching — syllabus, PYQs, mock tests and video classes. 100% online. BTechTutor Kerala.",
      h1: "ISRO Mechanical Coaching — Scientist/Engineer ME | BTechTutor",
      primaryKeyword: "ISRO Mechanical coaching",
      secondaryKeywords: [
        "ISRO Mechanical Scientist Engineer coaching",
        "ISRO ME preparation",
        "ISRO Mechanical exam coaching online",
      ],
    },
    heroSubheading:
      "Dedicated ISRO Mechanical preparation for the Scientist/Engineer 'ME' post — complete technical syllabus, free PYQs, mock tests, and video classes.",
    introduction: [
      "ISRO hires Mechanical Engineers across a wide range of critical functions — structural design of launch vehicles and satellites, thermal control systems, propulsion systems, fluid systems, manufacturing processes, and quality assurance. The ISRO Mechanical written test covers Engineering Mechanics, Thermodynamics, Fluid Mechanics, Heat Transfer, Manufacturing Engineering, Machine Design, Theory of Machines, and Materials Engineering.",
      "For KTU Mechanical Engineering graduates, a significant portion of the ISRO ME syllabus maps directly to your B.Tech curriculum — particularly S3 to S6 subjects. The GATE ME and ISRO ME syllabi also overlap by approximately 75%. BTechTutor offers ISRO Mechanical preparation with free PYQs and structured video classes.",
    ],
    tables: [
      {
        heading: "ISRO Syllabus — Key Topics",
        columns: ["Subject Area", "Key Topics"],
        rows: [
          [
            "Engineering Mechanics",
            "Static and dynamic equilibrium, free body diagrams, friction, kinematics, dynamics of particles and rigid bodies",
          ],
          [
            "Thermodynamics",
            "Laws of thermodynamics, entropy, gas cycles (Otto, Diesel, Brayton), steam cycles, Rankine cycle, refrigeration",
          ],
          [
            "Fluid Mechanics",
            "Fluid statics, Bernoulli's equation, flow analysis, pipe flow, boundary layer, turbines, pumps, compressors",
          ],
          [
            "Heat & Mass Transfer",
            "Conduction (Fourier's law), convection, radiation, heat exchangers, fins, mass diffusion",
          ],
          [
            "Theory of Machines",
            "Kinematics of mechanisms, cams, gears, gear trains, flywheel, governors, vibration analysis, balancing",
          ],
          [
            "Machine Design",
            "Stress analysis, failure theories, design of shafts, keys, couplings, bearings, springs, fasteners",
          ],
          [
            "Manufacturing",
            "Casting, welding, forming, machining operations, CNC, metrology, tolerances, surface finish",
          ],
          [
            "Engineering Materials",
            "Crystal structures, mechanical properties, heat treatment, ferrous/non-ferrous alloys, composites, polymers",
          ],
          [
            "Aptitude — Part B",
            "Numerical, logical, abstract and diagrammatic reasoning — 15 questions",
          ],
        ],
      },
    ],
    additionalSections: [
      {
        heading: "How to Prepare — Tips",
        bullets: [
          "Thermodynamics and Fluid Mechanics together carry the highest weightage in ISRO ME. Practice gas cycle numericals, steam table problems, and pipe flow equations with ISRO PYQs.",
          "Theory of Machines and Machine Design — gear calculations, vibration problems, and shaft design questions appear consistently in ISRO ME papers.",
          "Manufacturing Engineering — machining operations, tolerances, and metrology are more prominent in ISRO ME than in GATE ME. Give these subjects proportionally more attention.",
          "Heat and Mass Transfer — ISRO ME tests this more heavily than GATE ME does. Cover conduction, convection, and heat exchanger design thoroughly.",
          "Engineering Mechanics fundamentals from S1 come back in ISRO ME. Refresh dynamics and kinematics concepts if they feel rusty.",
          "ISRO ME PYQs from the last 10 years are your best preparation tool. Many question types repeat with near-identical parameters.",
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What is the ISRO Mechanical syllabus?",
        answer:
          "ISRO Mechanical covers Engineering Mechanics, Thermodynamics, Fluid Mechanics, Heat and Mass Transfer, Theory of Machines, Machine Design, Manufacturing Engineering, and Engineering Materials in Part A (80 marks), plus Aptitude in Part B (15 marks).",
      },
      {
        question: "What ISRO Mechanical cutoff is needed?",
        answer:
          "Based on the 2025 cycle, the ISRO Mechanical GATE score cutoff was 801 out of 1000 for shortlisting. For cycles with ISRO's own written test, general category candidates typically need 55-65+ out of 80.",
      },
      {
        question: "Is GATE ME preparation enough for ISRO ME?",
        answer:
          "GATE ME preparation covers approximately 75% of the ISRO ME syllabus. Manufacturing Engineering and some applied mechanics topics receive higher ISRO weightage than GATE. Targeted supplementary preparation is recommended.",
      },
      {
        question: "Does BTechTutor offer ISRO Mechanical coaching?",
        answer:
          "Yes. Free PYQs and syllabus are available. Paid video classes for the complete ISRO Mechanical syllabus are available. Call +91 9895006772.",
      },
      {
        question: "What kind of work do ISRO Mechanical Engineers do?",
        answer:
          "ISRO Mechanical Engineers work on launch vehicle structural design, thermal control systems, propulsion systems, fluid systems, manufacturing processes for space hardware, and quality assurance for ISRO missions.",
      },
      {
        question: "Can KTU Mechanical graduates apply for ISRO?",
        answer:
          "Yes. KTU B.Tech Mechanical graduates with 65% or above are eligible for ISRO Scientist/Engineer SC posts. The KTU 2024 scheme curriculum covers significant portions of the ISRO ME syllabus.",
      },
    ],
  },

  // ------------------------------------------------------------------ CS ----
  {
    slug: "cs",
    navLabel: "ISRO CS",
    seo: {
      title: "ISRO CS Coaching Online — Scientist/Engineer | BTechTutor",
      description:
        "ISRO Computer Science Scientist/Engineer coaching — syllabus, PYQs, mock tests and video classes. 100% online. BTechTutor Kerala.",
      h1: "ISRO CS Coaching — Scientist/Engineer Computer Science | BTechTutor",
      primaryKeyword: "ISRO CS coaching",
      secondaryKeywords: [
        "ISRO Computer Science Scientist Engineer coaching",
        "ISRO CS preparation",
        "ISRO CS exam online coaching",
      ],
    },
    heroSubheading:
      "Dedicated ISRO CS preparation for the Scientist/Engineer 'Computer Science' post — complete technical syllabus, free PYQs, mock tests, and video classes.",
    introduction: [
      "ISRO recruits Computer Science Engineers for software development, ground station systems, mission control software, onboard computer systems, embedded software for spacecraft, satellite data processing, and IT systems. The ISRO CS written test covers the core CS curriculum — Data Structures, Algorithms, OS, DBMS, Computer Networks, Compiler Design, Theory of Computation, Digital Logic, and Computer Organisation — at GATE CS equivalent depth.",
      "For KTU CS graduates, the ISRO CS syllabus maps very closely to your B.Tech core subjects from S3 to S6. The GATE CS and ISRO CS syllabi overlap by approximately 85% — the highest overlap of any discipline. Strong GATE CS preparation translates almost directly to ISRO CS readiness. BTechTutor offers ISRO CS preparation with free PYQs and structured video classes.",
    ],
    tables: [
      {
        heading: "ISRO Syllabus — Key Topics",
        columns: ["Subject Area", "Key Topics"],
        rows: [
          [
            "Data Structures & Algorithms",
            "Arrays, linked lists, trees (BST, AVL, heap), graphs, sorting, searching, hashing, complexity analysis, DP, greedy",
          ],
          [
            "Theory of Computation",
            "Finite automata, regular languages, context-free grammars, PDAs, Turing machines, decidability, complexity classes",
          ],
          [
            "Operating Systems",
            "Processes, threads, scheduling, memory management (paging, segmentation), virtual memory, file systems, deadlocks",
          ],
          [
            "Database Systems",
            "ER model, relational algebra, SQL, normalisation (1NF to BCNF), B+ trees, transactions, concurrency control, recovery",
          ],
          [
            "Computer Networks",
            "OSI/TCP-IP model, routing, switching, IP addressing, subnetting, transport protocols, DNS, HTTP, network security",
          ],
          [
            "Computer Organisation",
            "ISA, CPU design, pipelining, cache memory hierarchy, memory organisation, I/O systems, interrupts",
          ],
          [
            "Digital Logic",
            "Boolean algebra, combinational circuits, sequential circuits, minimisation, number representations",
          ],
          [
            "Compiler Design",
            "Lexical analysis, parsing (LL, LR), semantic analysis, intermediate code, code optimisation, code generation",
          ],
          [
            "Aptitude — Part B",
            "Numerical, logical, abstract and diagrammatic reasoning — 15 questions",
          ],
        ],
      },
    ],
    additionalSections: [
      {
        heading: "How to Prepare — Tips",
        bullets: [
          "Data Structures and Algorithms is the single highest-weightage area in ISRO CS. Trees, graphs (BFS, DFS, shortest paths), dynamic programming, and complexity analysis are must-master topics.",
          "Operating Systems and DBMS together account for a large portion of ISRO CS marks. CPU scheduling algorithms, page replacement, SQL queries, and normalisation appear every year.",
          "Theory of Computation — Turing machine problems, CFL/regular language proofs, and complexity classes (P, NP) are high-weightage ISRO CS topics.",
          "Computer Networks — TCP/IP layers, routing protocols, subnetting, and transport layer concepts are consistently tested.",
          "ISRO CS and GATE CS share approximately 85% syllabus — the highest overlap of any discipline. GATE CS toppers consistently perform well in ISRO CS.",
          "Solve ISRO CS PYQs from the last 10+ years. ISRO CS questions have strong pattern repetition and solving PYQs is the most direct preparation activity.",
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What is the ISRO CS syllabus?",
        answer:
          "ISRO CS covers Data Structures and Algorithms, Theory of Computation, Operating Systems, Database Systems, Computer Networks, Computer Organisation and Architecture, Digital Logic, and Compiler Design in Part A (80 marks), plus Aptitude in Part B (15 marks).",
      },
      {
        question: "Is GATE CS preparation enough for ISRO CS?",
        answer:
          "Yes, for the most part. GATE CS and ISRO CS overlap by approximately 85%. Students with strong GATE CS preparation need only targeted ISRO PYQ practice and aptitude preparation to be ready for ISRO CS.",
      },
      {
        question: "What ISRO CS cutoff is typically needed?",
        answer:
          "ISRO CS is competitive. For cycles using GATE scores, the CS cutoff was in the 800+ range (out of 1000) in 2025. For written test cycles, general category candidates typically need 60+ out of 80 in Part A.",
      },
      {
        question: "Does BTechTutor offer ISRO CS coaching?",
        answer:
          "Yes. Free PYQs, syllabus, and mock tests are available. Paid video classes for the complete ISRO CS syllabus are available. Call +91 9895006772.",
      },
      {
        question: "What work do ISRO CS Engineers do?",
        answer:
          "ISRO CS Engineers develop mission control software, satellite data processing systems, onboard computer software for spacecraft, IT infrastructure, and ground station systems for ISRO's space missions.",
      },
      {
        question: "Can KTU CS graduates apply for ISRO?",
        answer:
          "Yes. KTU B.Tech CS graduates with 65% or above are eligible. The KTU CS 2024 scheme curriculum (Theory of Computation, DSA, OS, DBMS, Computer Networks, Compiler Design) directly covers the ISRO CS syllabus.",
      },
    ],
  },

  // ------------------------------------------------- Previous Year Papers ----
  {
    slug: "previous-year-papers",
    navLabel: "Previous Year Papers",
    seo: {
      title: "ISRO Previous Year Papers Free Download | BTechTutor",
      description:
        "Free ISRO Scientist/Engineer previous year question papers for ECE, EEE, Mechanical and CS. Download PYQs with solutions. BTechTutor Kerala.",
      h1: "ISRO Previous Year Question Papers — Free Download | BTechTutor",
      primaryKeyword: "ISRO previous year papers",
      secondaryKeywords: [
        "ISRO Scientist Engineer previous year papers",
        "ISRO PYQs free download",
        "ISRO question papers ECE EEE CS Mechanical",
      ],
    },
    heroSubheading:
      "Free ISRO Scientist/Engineer previous year question papers for ECE, EEE, Mechanical, and CS — the single most important resource for your preparation.",
    introduction: [
      "ISRO previous year question papers are the single most important preparation resource for the ISRO Scientist/Engineer written test. The reason is simple — ISRO question papers have strong pattern repetition. The same topic areas, similar numerical values, and near-identical question structures appear year after year across ECE, EEE, Mechanical, and CS papers. A student who has thoroughly solved 10 years of ISRO PYQs is significantly better prepared than one who has only studied notes and textbooks.",
      "BTechTutor provides free ISRO previous year question papers for ECE, EEE, Mechanical, and CS disciplines. Downloads are available directly from the resource links below.",
    ],
    additionalSections: [
      {
        heading: "Why ISRO PYQs Are Your Best Preparation Tool",
        bullets: [
          "ISRO question patterns repeat — many questions from 2018-2019 papers appear with minor modifications in 2023-2024 papers. Solving PYQs trains you to recognise these patterns instantly.",
          "PYQs tell you the actual topic weightage — not what the syllabus says but what ISRO actually tests. Spend your preparation time proportionally to actual PYQ frequency, not syllabus listing order.",
          "ISRO paper difficulty calibration — solving PYQs under timed conditions (80 technical questions in approximately 100 minutes) reveals your actual exam readiness better than any mock test.",
          "Answer key analysis — for every PYQ you get wrong, identify whether it was a concept gap or a silly mistake. Concept gaps need re-study. Silly mistakes need exam technique work.",
          "Solve each year's paper in full before checking answers — do not solve question by question. Simulate actual exam conditions.",
        ],
      },
    ],
    tables: [
      {
        heading: "Available ISRO PYQ Papers by Discipline",
        columns: ["Discipline", "Years Available", "Pattern", "Access"],
        rows: [
          ["ISRO ECE / Electronics", "2008 to 2025", "80 technical + 15 aptitude", "Free"],
          ["ISRO EEE / Electrical", "2008 to 2025", "80 technical + 15 aptitude", "Free"],
          ["ISRO Mechanical", "2008 to 2025", "80 technical + 15 aptitude", "Free"],
          ["ISRO CS", "2008 to 2025", "80 technical + 15 aptitude", "Free"],
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Mock Tests", href: "/isro/mock-test/" },
      { label: "Scientist/Engineer Guide", href: "/isro/scientist-engineer/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "Where can I download ISRO previous year papers for free?",
        answer:
          "BTechTutor provides free ISRO PYQs for ECE, EEE, Mechanical, and CS disciplines. Use the download links on this page. Papers from 2008 to 2025 are available.",
      },
      {
        question: "Are ISRO question papers repeated?",
        answer:
          "Yes — ISRO question patterns and topic areas show strong repetition across years. This makes PYQ practice especially valuable for ISRO preparation.",
      },
      {
        question: "How many years of ISRO PYQs should I solve?",
        answer:
          "Solve at least 8 to 10 years of ISRO PYQs for your discipline. This covers the major pattern cycles and gives you reliable performance data.",
      },
      {
        question: "Do ISRO PYQs come with answer keys and solutions?",
        answer:
          "Yes. BTechTutor provides answer keys for all ISRO PYQ papers. Detailed solutions for selected papers are also available in the video classes.",
      },
      {
        question: "What is the pattern of ISRO ECE previous year papers?",
        answer:
          "ISRO ECE papers have 80 technical MCQs (Part A) and 15 aptitude MCQs (Part B) = 95 total questions. Duration 120 minutes. Negative marking 1/3.",
      },
      {
        question: "How should I use ISRO PYQs in my preparation?",
        answer:
          "Solve PYQs subject-wise after completing each topic. Identify weak areas from your error analysis. Then solve full-length papers under timed conditions in the final 4-6 weeks before the exam.",
      },
    ],
  },

  // ------------------------------------------------------------ Mock Test ----
  {
    slug: "mock-test",
    navLabel: "Mock Tests",
    seo: {
      title: "ISRO Mock Test Free — Scientist/Engineer | BTechTutor",
      description:
        "Free ISRO mock tests for ECE, EEE, Mechanical and CS. Full-length ISRO pattern tests — 80 technical + 15 aptitude questions. BTechTutor Kerala.",
      h1: "ISRO Mock Test Free — Scientist/Engineer | BTechTutor",
      primaryKeyword: "ISRO mock test free",
      secondaryKeywords: [
        "ISRO Scientist Engineer mock test",
        "free ISRO online test",
        "ISRO practice test ECE EEE CS Mechanical",
      ],
    },
    heroSubheading:
      "Free full-length ISRO pattern mock tests for ECE, EEE, Mechanical, and CS — 80 technical + 15 aptitude questions, 120 minutes, 1/3 negative marking.",
    introduction: [
      "Taking mock tests is not optional for ISRO preparation — it is essential. The difference between knowing a subject and performing under exam conditions is significant. In ISRO's 120-minute paper with 95 questions and negative marking, time management and question selection are as important as technical knowledge. Mock tests build both.",
      "BTechTutor offers free ISRO pattern mock tests for ECE, EEE, Mechanical, and CS disciplines. Each mock test follows the exact ISRO pattern — 80 technical questions (Part A) and 15 aptitude questions (Part B), 120 minutes, with 1/3 negative marking. Access links are below.",
    ],
    additionalSections: [
      {
        heading: "How to Use Mock Tests Effectively",
        bullets: [
          "Take your first mock test at the 4-month mark of preparation — even if you feel unprepared. The result tells you exactly where to focus.",
          "Simulate real exam conditions every time — 120 minutes, no breaks, no checking notes. Half-hearted mock tests give misleading performance data.",
          "Analyse every mock in detail — identify which questions you got wrong and whether it was a concept gap, a calculation error, or a question misread. Each category needs different remediation.",
          "Track your mock scores over time. A graph of your performance across 8 to 10 mocks shows whether you are genuinely improving or just getting familiar with the same questions.",
          "In the final 4 weeks, take 2 to 3 full-length mocks per week. This builds stamina for the actual exam and reveals any remaining weak areas.",
          "For the aptitude section (Part B) — practise reasoning questions daily for 20-30 minutes from 4-6 weeks before the exam. This section is highly scorable with focused practice.",
        ],
      },
    ],
    tables: [
      {
        heading: "Available ISRO Mock Tests at BTechTutor",
        columns: ["Test", "Questions", "Duration", "Access"],
        rows: [
          ["ISRO ECE Mock Test", "80 technical + 15 aptitude", "120 minutes", "Free"],
          ["ISRO EEE Mock Test", "80 technical + 15 aptitude", "120 minutes", "Free"],
          ["ISRO Mechanical Mock Test", "80 technical + 15 aptitude", "120 minutes", "Free"],
          ["ISRO CS Mock Test", "80 technical + 15 aptitude", "120 minutes", "Free"],
          ["ISRO Aptitude Practice (Part B only)", "15 questions", "20 minutes", "Free"],
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO Syllabus", href: "/isro/syllabus/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
      { label: "Scientist/Engineer Guide", href: "/isro/scientist-engineer/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "Are ISRO mock tests available free on BTechTutor?",
        answer:
          "Yes. Full-length ISRO pattern mock tests for ECE, EEE, Mechanical, and CS are available free at BTechTutor. Access the links on this page.",
      },
      {
        question: "What is the pattern of BTechTutor ISRO mock tests?",
        answer:
          "Each mock test follows the exact ISRO exam pattern — 80 technical MCQs (Part A) and 15 aptitude MCQs (Part B), 120 minutes total, 1/3 negative marking.",
      },
      {
        question: "How many mock tests should I take for ISRO preparation?",
        answer:
          "Aim for at least 8 to 10 full-length mock tests before the exam. Take 2 to 3 per week in the final month.",
      },
      {
        question: "When should I start taking ISRO mock tests?",
        answer:
          "Take your first mock test at the 4-month mark even if preparation is incomplete. Use the result to prioritise your remaining study time.",
      },
      {
        question: "Does the ISRO mock test include aptitude (Part B)?",
        answer:
          "Yes. BTechTutor ISRO mock tests include both Part A (technical) and Part B (aptitude/reasoning) to simulate the complete exam experience.",
      },
    ],
  },

  // ------------------------------------------------------------- Syllabus ----
  {
    slug: "syllabus",
    navLabel: "Syllabus",
    seo: {
      title: "ISRO Syllabus 2025 2026 — Branch-wise PDF | BTechTutor",
      description:
        "ISRO Scientist/Engineer syllabus 2025-2026 for ECE, EEE, Mechanical and CS. Download branch-wise syllabus PDF and topic weightage. BTechTutor.",
      h1: "ISRO Scientist/Engineer Syllabus 2025-2026 — Branch-wise Guide",
      primaryKeyword: "ISRO syllabus 2025",
      secondaryKeywords: [
        "ISRO Scientist Engineer syllabus 2025 2026",
        "ISRO exam syllabus ECE EEE CS Mechanical",
        "ISRO syllabus PDF download",
      ],
    },
    heroSubheading:
      "The complete branch-wise ISRO Scientist/Engineer syllabus for 2025-2026 — Part A (technical) for ECE, EEE, Mechanical, and CS, plus the common Part B aptitude section.",
    introduction: [
      "The ISRO Scientist/Engineer written test has two parts for all disciplines. Part A is technical — 80 questions covering your engineering specialisation. Part B is Aptitude and Ability — 15 questions covering numerical, logical, abstract, and diagrammatic reasoning. Here is the complete branch-wise syllabus breakdown.",
    ],
    additionalSections: [
      {
        heading: "ISRO Part B (Aptitude) Syllabus — Common for ALL Branches",
        paragraphs: [
          "Numerical Reasoning | Logical Reasoning | Abstract Reasoning | Diagrammatic Reasoning. 15 questions x 1 mark = 15 marks. The same pattern applies for ECE, EEE, ME, and CS.",
        ],
      },
    ],
    tables: [
      {
        heading: "Part A Syllabus — ECE (Electronics and Communication Engineering)",
        columns: ["Subject", "Topics"],
        rows: [
          [
            "Networks, Signals & Systems",
            "Circuit theorems, AC analysis, Laplace/Fourier/Z transforms, LTI systems, sampling",
          ],
          [
            "Electronic Devices & Circuits",
            "PN junction, BJT, MOSFET, amplifier biasing, small-signal models, feedback",
          ],
          ["Analog Circuits", "Op-amp, filters, oscillators, ADC/DAC, signal generators"],
          [
            "Digital Electronics",
            "Boolean algebra, combinational and sequential circuits, PLDs, counters",
          ],
          ["Control Systems", "Transfer functions, stability (Routh, Nyquist, Bode), root locus, PID"],
          ["Communications", "AM/FM/PM, noise, digital modulation (ASK/FSK/PSK/QAM), Shannon capacity"],
          [
            "Electromagnetics",
            "Maxwell's equations, wave propagation, transmission lines, waveguides, antennas",
          ],
          ["Microprocessors", "8085/8086 architecture, assembly, interfacing, I/O"],
        ],
      },
      {
        heading: "Part A Syllabus — EEE (Electrical and Electronics Engineering)",
        columns: ["Subject", "Topics"],
        rows: [
          ["Circuits & Networks", "KVL/KCL, Thevenin/Norton, AC circuits, transients, two-port networks"],
          [
            "Electrical Machines",
            "DC machines, transformers, induction motors, synchronous machines",
          ],
          ["Power Electronics", "Thyristors, converters, choppers, inverters, PWM"],
          [
            "Control Systems",
            "Transfer functions, stability, Bode/Nyquist/root locus, PID, state space",
          ],
          ["Power Systems", "Load flow, fault analysis, protection, transmission lines, stability"],
          ["Signals & Systems", "Laplace/Fourier/Z transforms, LTI systems, convolution"],
          ["Measurements & Instruments", "Bridges, transducers, CRO, error analysis, digital meters"],
          ["Basic Electronics", "PN junction, BJT, op-amps, digital circuits"],
        ],
      },
      {
        heading: "Part A Syllabus — Mechanical Engineering",
        columns: ["Subject", "Topics"],
        rows: [
          ["Engineering Mechanics", "Static equilibrium, dynamics, kinematics, friction"],
          ["Thermodynamics", "Laws, entropy, gas cycles, steam cycles, refrigeration"],
          ["Fluid Mechanics", "Bernoulli, pipe flow, turbines, pumps, compressors"],
          ["Heat & Mass Transfer", "Conduction, convection, radiation, heat exchangers"],
          ["Theory of Machines", "Kinematics, cams, gears, vibration, balancing, governors"],
          ["Machine Design", "Failure theories, shafts, bearings, springs, fatigue"],
          ["Manufacturing", "Casting, welding, machining, CNC, metrology"],
          ["Engineering Materials", "Crystal structure, heat treatment, alloys, composites"],
        ],
      },
      {
        heading: "Part A Syllabus — CS (Computer Science and Engineering)",
        columns: ["Subject", "Topics"],
        rows: [
          ["Data Structures & Algorithms", "Trees, graphs, sorting, hashing, DP, greedy, complexity"],
          [
            "Theory of Computation",
            "Automata, regular languages, CFG, PDA, Turing machines, decidability",
          ],
          ["Operating Systems", "Process scheduling, memory management, file systems, deadlocks"],
          ["Database Systems", "ER model, SQL, normalisation, B+ trees, transactions, concurrency"],
          ["Computer Networks", "OSI/TCP-IP, routing, IP addressing, transport protocols, security"],
          ["Computer Organisation", "ISA, pipelining, cache, memory hierarchy, I/O"],
          ["Digital Logic", "Boolean algebra, combinational and sequential circuits"],
          ["Compiler Design", "Lexing, parsing, semantic analysis, intermediate code, code generation"],
        ],
      },
    ],
    resources: STANDARD_RESOURCES,
    internalLinks: [
      { label: "ISRO Coaching Hub", href: "/isro/" },
      { label: "ISRO ECE", href: "/isro/ece/" },
      { label: "ISRO EEE", href: "/isro/eee/" },
      { label: "ISRO Mechanical", href: "/isro/mechanical/" },
      { label: "ISRO CS", href: "/isro/cs/" },
      { label: "Previous Year Papers", href: "/isro/previous-year-papers/" },
    ],
    contact: CONTACT,
    ctaLabel: "Talk to the ISRO Coaching Team",
    ctaHref: "/contact/",
    faqs: [
      {
        question: "What is the ISRO syllabus for 2025-2026?",
        answer:
          "The ISRO Scientist/Engineer syllabus has Part A (technical, 80 marks) covering your engineering discipline, and Part B (aptitude, 15 marks) covering numerical, logical, abstract, and diagrammatic reasoning. Syllabus details are the same as GATE for your branch, with minor variations.",
      },
      {
        question: "Is the ISRO syllabus the same as GATE?",
        answer:
          "For most branches, ISRO and GATE share 75-85% syllabus overlap. ISRO sometimes includes topics like Microprocessors (ECE), Measurements (EEE), or Manufacturing (ME) at higher weightage than GATE.",
      },
      {
        question: "Where can I download the official ISRO syllabus?",
        answer:
          "The official ISRO syllabus is published in the recruitment notification PDF on isro.gov.in. BTechTutor also provides simplified syllabus PDFs and topic weightage analysis — available free using the download links above.",
      },
      {
        question: "What is the Part B aptitude syllabus for ISRO?",
        answer:
          "Part B has 15 questions covering Numerical Reasoning, Logical Reasoning, Abstract Reasoning, and Diagrammatic Reasoning — 15 marks in total. It is the same aptitude pattern for every discipline (ECE, EEE, ME, CS), regardless of your engineering branch.",
      },
      {
        question: "How has the ISRO syllabus changed in 2025-2026?",
        answer:
          "The core ISRO syllabus remains largely consistent year to year. Changes in individual notifications are minor topic additions or rewordings. Always verify against the specific recruitment notification for your discipline.",
      },
    ],
  },
];

export function getIsroPageContentBySlug(slug = ""): IsroPageContent | undefined {
  return isroPagesContent.find((page) => page.slug === slug);
}

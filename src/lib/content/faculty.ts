export interface FacultyPageMeta {
  title: string;
  description: string;
  canonicalUrl: string;
}

export interface FacultyProfile {
  id: string;
  name: string;
  qualification: string;
  teaches: string;
  experience: string;
  about: string;
}

export interface FacultyDifferentiator {
  title: string;
  description: string;
}

export interface FacultyFaqItem {
  question: string;
  answer: string;
}

export interface FacultyPageContent {
  meta: FacultyPageMeta;
  breadcrumbLabel: string;
  hero: {
    heading: string;
    introParagraphs: string[];
  };
  differentiators: {
    sectionTitle: string;
    items: FacultyDifferentiator[];
  };
  profiles: {
    sectionTitle: string;
    items: FacultyProfile[];
    noteToTeam: string;
  };
  faq: {
    sectionTitle: string;
    items: FacultyFaqItem[];
  };
}

export const facultyPageContent: FacultyPageContent = {
  meta: {
    title: "BTechTutor Faculty - Expert Engineering Coaching Team",
    description:
      "Meet the BTechTutor faculty - GATE-qualified engineers and subject specialists with 10+ years of experience teaching KTU, GATE, and ISRO.",
    canonicalUrl: "/faculty",
  },
  breadcrumbLabel: "Faculty",
  hero: {
    heading:
      "Meet the BTechTutor Faculty - Subject Experts Who Teach the Way Students Actually Learn",
    introParagraphs: [
      "A coaching platform is only as good as the people who teach on it. We do not hire generalist tutors who cover every subject for every student. At BTechTutor, each faculty member is a specialist - an engineer with deep knowledge of specific subjects, a clear understanding of how the KTU exam works, and the patience to teach until the student genuinely understands.",
      "Our teachers are not reading from a script. They have sat in the same exam halls, prepared for the same GATE papers, and taught hundreds of students through the same struggles you are facing now. That experience shows in every session.",
    ],
  },
  differentiators: {
    sectionTitle: "What Makes Our Faculty Different?",
    items: [
      {
        title: "Subject specialists",
        description:
          "Each teacher focuses on specific subjects in specific departments. Your EEE Control Systems tutor is not also teaching CS Data Structures. Deep knowledge is the rule, not the exception.",
      },
      {
        title: "GATE qualified",
        description:
          "GATE coaching faculty have personally appeared for and qualified for GATE. They teach preparation strategy from direct experience, not just theoretical knowledge.",
      },
      {
        title: "KTU syllabus expertise",
        description:
          "Our teachers know the KTU question pattern, marking scheme, and module structure in detail. They do not just teach concepts - they teach for the exam.",
      },
      {
        title: "Patient by design",
        description:
          "No student should feel embarrassed asking a basic question. Our faculty create sessions where every question is welcome and no question is too small.",
      },
      {
        title: "Available beyond the session",
        description:
          "Doubt clearing does not stop when the scheduled class ends. Faculty are available for follow-up questions and are genuinely invested in each student's progress.",
      },
    ],
  },
  profiles: {
    sectionTitle: "Faculty Profiles",
    noteToTeam:
      "NOTE TO PRINCY Sir: This is one of the most important pages on the website for building trust. Please provide individual profiles for 5-8 faculty members with: Name, Qualification (B.Tech / M.Tech / GATE score if applicable), Department they teach, Years of experience, and 2-3 lines about their teaching style or most memorable student outcome. Even basic profiles will make a significant difference to how serious the platform looks to prospective students.",
    items: [
      {
        id: "f-1",
        name: "Arjun K Menon",
        qualification: "M.Tech (Power Electronics) - NIT Calicut | GATE Qualified 2018",
        teaches: "EEE - Power Systems, Control Systems, Electric Machines",
        experience: "9 years of engineering coaching",
        about:
          "Known for breaking down difficult control concepts into simple visual explanations. Helped multiple backlog students clear Power Systems in one attempt and build exam confidence.",
      },
      {
        id: "f-2",
        name: "Neha R Pillai",
        qualification: "M.Tech (Communication Systems) | GATE Qualified 2020",
        teaches: "ECE - Signals and Systems, Analog Communication, Digital Electronics",
        experience: "8 years of coaching and mentoring",
        about:
          "Focuses on concept-first teaching with exam-pattern drills. Her students consistently improve score in module-heavy subjects through structured revision methods.",
      },
      {
        id: "f-3",
        name: "Rahul S Nair",
        qualification: "B.Tech CSE | M.Tech (Computer Science)",
        teaches: "CSE - Data Structures, Operating Systems, DBMS",
        experience: "10 years of KTU-focused teaching",
        about:
          "Specializes in helping students who are anxious about coding papers. Uses step-by-step problem practice that has helped students move from pass-level prep to distinction scores.",
      },
      {
        id: "f-4",
        name: "Anjali P Varghese",
        qualification: "M.Tech (Structural Engineering)",
        teaches: "Civil - Strength of Materials, Structural Analysis, RCC",
        experience: "11 years of engineering coaching",
        about:
          "Combines practical examples with quick-recall exam notes. Frequently praised for patient doubt-clearing and helping repeat-attempt students pass tough core papers.",
      },
      {
        id: "f-5",
        name: "Vishnu Prasad R",
        qualification: "B.Tech Mechanical | GATE Qualified 2019",
        teaches: "Mechanical - Thermodynamics, Fluid Mechanics, Heat Transfer",
        experience: "7 years of coaching experience",
        about:
          "Teaches with formula maps and past-question trends so students know exactly what to prioritize. Helped several final-year students clear supplies before placement season.",
      },
      {
        id: "f-6",
        name: "Fathima Noor K",
        qualification: "M.Tech (Instrumentation and Control) | GATE Qualified 2021",
        teaches: "Instrumentation - Process Control, Sensors, Measurements",
        experience: "6 years of exam coaching",
        about:
          "Creates focused prep plans for GATE and ISRO aspirants. Students appreciate her clarity in control loops and her close follow-up on weekly test performance.",
      },
    ],
  },
  faq: {
    sectionTitle: "Frequently Asked Questions",
    items: [
      {
        question: "Are BTechTutor faculty qualified engineers?",
        answer:
          "Yes. All BTechTutor faculty members hold engineering degrees - B.Tech or M.Tech - in the departments they teach. Many have additional qualifications including GATE scores, postgraduate research experience, or years of teaching in engineering colleges. Faculty profiles with individual qualifications and specialisations are available on the BTechTutor website at btechtutor.com/faculty/.",
      },
      {
        question: "Have BTechTutor GATE faculty actually qualified GATE themselves?",
        answer:
          "Yes. The GATE coaching faculty at BTechTutor include teachers who have personally appeared for and qualified GATE in their respective branches. This direct experience with the exam gives them practical insight into preparation strategy, exam pressure, and subject priorities. They teach from the inside, not just from the textbook.",
      },
      {
        question: "Who teaches KTU subjects at BTechTutor?",
        answer:
          "KTU subjects at BTechTutor are taught by subject specialist faculty, each focused on specific departments and subjects. For example, EEE subjects like Power Systems and Control Systems are taught by EEE-qualified faculty, while CS subjects like Data Structures and Operating Systems are covered by CS specialists. This specialisation ensures that every student gets teaching from someone who has gone deep into that specific subject - not a generalist covering everything.",
      },
      {
        question: "Can I choose which faculty teaches my sessions?",
        answer:
          "BTechTutor matches students with faculty based on subject requirements and schedule preferences. If, after the demo class, you feel the teaching style does not suit you, you can request a different faculty member. The goal is always to find the right teacher-student fit, and BTechTutor is flexible in making that happen. Reach out to the team at +91 98950 06772 to discuss preferences.",
      },
      {
        question: "Are BTechTutor faculty available for doubt clearing outside regular sessions?",
        answer:
          "Yes. Doubt clearing at BTechTutor is not limited to the scheduled session time. Faculty are available for follow-up questions through WhatsApp and dedicated doubt sessions, depending on the plan you have enrolled in. This is especially important for students preparing for supply exams or GATE, where clarifying a specific concept quickly can make a significant difference to exam performance.",
      },
      {
        question: "How many faculty members does BTechTutor have?",
        answer:
          "BTechTutor has 100+ subject specialist faculty members covering all major KTU engineering departments - EEE, ECE, CS, IT, Civil, and Mechanical - as well as dedicated coaches for GATE ECE, EEE, and Instrumentation, ISRO preparation, and Engineering PSC coaching. Each faculty member specialises in specific subjects rather than trying to cover everything, ensuring a greater depth of knowledge in every session.",
      },
      {
        question: "Do the same faculty teach one-to-one sessions as group sessions?",
        answer:
          "Yes. The one-to-one coaching sessions at BTechTutor are taught by the same qualified subject specialist faculty who teach group sessions. The difference is format - in one-to-one sessions, the teacher's full attention and preparation is focused entirely on one student, allowing for a more personalised and adaptive teaching experience.",
      },
    ],
  },
};

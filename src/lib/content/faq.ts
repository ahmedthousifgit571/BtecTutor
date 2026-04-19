export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  badgeLabel: string;
  heading: string;
  headingHighlight: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaButtonLabel: string;
  ctaWhatsAppNumber: string;
  items: FaqItem[];
}

export const faqContent: FaqContent = {
  badgeLabel: "FAQs",
  heading: "Questions Students Ask Us",
  headingHighlight: "All the Time",
  ctaHeading: "Still have questions?",
  ctaDescription:
    "If you have any questions, just reach out to us on WhatsApp. Our team responds within 24 hours.",
  ctaButtonLabel: "Chat on WhatsApp",
  ctaWhatsAppNumber: "+919895006772",
  items: [
    {
      question: "What is the best KTU online coaching in Kerala?",
      answer:
        "BTechTutor is one of Kerala's most established online coaching platforms for KTU BTech students. We cover all departments — EEE, ECE, CS, IT, Civil, and Mechanical — across both the 2019 and 2024 KTU schemes. With over 5,000 students coached, BTechTutor is a trusted choice for KTU coaching in Kerala. Reach out to our team on WhatsApp to get started.",
    },
    {
      question: "Does BTechTutor cover KTU 2024 scheme subjects?",
      answer:
        "Yes. BTechTutor covers all KTU 2024 scheme departments, including all eleven CS sub-branches — CS Core, CS with AI, CS with Data Science, CS with IoT, CS with AI and Machine Learning, CS and Cyber Security, CS with IoT and Cyber Security, CS and Design Engineering, CS with AI and Data Science, CS and Engineering Business Systems, and AI and Machine Learning. This is one of the most comprehensive online coverage of the 2024 scheme.",
    },
    {
      question: "How do I get started with BTechTutor?",
      answer:
        "Simply fill the enquiry form on our website or reach out to us on WhatsApp at +91 98950 06772. Tell us your department, semester, and subject, and our team will get in touch with you within 24 hours to explain your options and schedule your first session.",
    },
    {
      question:
        "How is BTechTutor different from other KTU coaching websites?",
      answer:
        "The main difference is depth and structure. While most KTU websites offer notes and question papers for download, BTechTutor goes further. Each subject page includes the full syllabus, PDF notes, previous year question papers, module-wise video classes, an introductory session, and a marathon revision session. On top of that, BTechTutor offers GATE coaching, ISRO preparation, one-to-one personal coaching, and Engineering PSC coaching — all on one platform.",
    },
    {
      question: "Can I get coaching for GATE from BTechTutor?",
      answer:
        "Yes. BTechTutor offers dedicated GATE coaching for ECE (Electronics and Communication), EEE (Electrical and Electronics), and Instrumentation Engineering. Coaching includes subject-wise classes, previous year paper analysis, mock tests, and score versus rank guidance. We also cover GATE-specific topics like PSU recruitment and preparation strategies for working professionals and repeaters.",
    },
    {
      question: "How can I clear my KTU supply exam?",
      answer:
        "The fastest way to clear a KTU supply exam is focused, subject-specific preparation rather than trying to cover the entire syllabus again. BTechTutor offers dedicated supply exam coaching that targets the most frequently tested topics, gives you access to previous year papers with solutions, and provides doubt-clearing sessions. Contact our team and tell us which subject you need help with — we will get you a targeted plan within 24 hours.",
    },
    {
      question: "What is one-to-one BTech coaching?",
      answer:
        "One-to-one BTech coaching means you get a personal faculty member who teaches only you. Your sessions are private — no other students, no fixed batch pace, no waiting for the teacher to finish answering someone else's question. BTechTutor's one-to-one coaching is available for all KTU subjects and GATE topics, with fully flexible timing that fits around your college schedule or work commitments.",
    },
    {
      question:
        "Does BTechTutor offer coaching for Indian students in the UAE?",
      answer:
        "Yes. BTechTutor serves Indian engineering students in the UAE, Dubai, Abu Dhabi, Qatar, and other Gulf countries. All sessions are conducted online with flexible timing that accommodates different time zones. KTU students studying or working abroad can access the same coaching, notes, and support as students in Kerala.",
    },
    {
      question: "What departments and subjects does BTechTutor cover?",
      answer:
        "BTechTutor covers all major KTU BTech departments: Electrical and Electronics Engineering (EEE), Electronics and Communication Engineering (ECE), Computer Science (CS), Information Technology (IT), Civil Engineering, and Mechanical Engineering. Coaching is available for all subjects across all semesters — from first year Engineering Mathematics to final year electives. Subject-specific coaching for GATE and ISRO is also available within these branches.",
    },
    {
      question: "How do I join BTechTutor?",
      answer:
        "Joining BTechTutor is simple. Fill the enquiry form on this page with your name, phone number, department, and the subject you need help with. Our team will contact you within 24 hours. Alternatively, you can reach us directly on WhatsApp or by calling +91 98950 06772. There is no registration fee to enquire.",
    },
  ],
};

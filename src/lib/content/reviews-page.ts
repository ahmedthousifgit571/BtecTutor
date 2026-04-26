export interface ReviewsSeoContent {
  title: string;
  description: string;
  h1: string;
}

export interface ReviewsIntroContent {
  heading: string;
  paragraphs: string[];
}

export interface StudentCgpaResult {
  name: string;
  cgpa: string;
  college: string;
  story?: string;
}

export interface WrittenTestimonial {
  quote: string;
  author: string;
}

export interface ReviewsFaqItem {
  question: string;
  answer: string;
}

export interface ReviewsPageContent {
  seo: ReviewsSeoContent;
  introduction: ReviewsIntroContent;
  introEyebrow: string;
  cgpaResultsHeading: string;
  cgpaResults: StudentCgpaResult[];
  writtenTestimonialsHeading: string;
  writtenTestimonials: WrittenTestimonial[];
  faqHeading: string;
  faqs: ReviewsFaqItem[];
}

export const reviewsPageContent: ReviewsPageContent = {
  seo: {
    title: "BTechTutor Reviews: Real Student Results & Feedback",
    description:
      "Read real BTechTutor reviews from KTU students. Explore CGPA improvements, GATE results, and genuine feedback from engineering students across Kerala.",
    h1: "BTechTutor Reviews — Real Students. Real Results. Real Words.",
  },
  introduction: {
    heading: "About BTechTutor",
    paragraphs: [
      "Anyone can write their own marketing copy. We prefer to let our students speak.",
      "Below are real names, real CGPA scores, and real words from students who joined BTechTutor — some to clear backlogs, some to improve their CGPA, some to prepare for GATE, and some because they were struggling with one specific subject and needed help that group coaching was not providing.",
      "No stock photos. No anonymous quotes. No exaggerated claims. Just the actual results of people who chose to study with us.",
    ],
  },
  introEyebrow: "Trusted by KTU Students Across Kerala",
  cgpaResultsHeading: "Student CGPA Results",
  cgpaResults: [
    {
      name: "Roshan Roy",
      cgpa: "8.9",
      college: "Government College of Engineering, Thrissur",
    },
    {
      name: "Abhay Arackal",
      cgpa: "8.8",
      college: "Model College of Engineering, Thrikkakkara",
    },
    {
      name: "Abhinav K M",
      cgpa: "8.3",
      college: "Mar Athanasius College of Engineering",
    },
    {
      name: "Abhinav S",
      cgpa: "7.33",
      college: "Nehru College of Engineering",
    },
    {
      name: "Nihila K",
      cgpa: "8.32",
      college: "Government Engineering College Kannur",
    },
    {
      name: "Sofya Anez K A",
      cgpa: "6.68",
      college: "Gregorian Institute of Technology",
    },
  ],
  writtenTestimonialsHeading: "Written Testimonials",
  writtenTestimonials: [
    {
      quote:
        "BTech Tutor really helped me strengthen my basics. The classes are well-structured, and I gained the confidence to solve problems on my own.",
      author: "Vismay Vijayan",
    },
    {
      quote:
        "I am grateful to BTech Tutor for guiding me through tough subjects. The teaching style is clear, and doubts are always addressed patiently.",
      author: "Muhammed Haroon",
    },
    {
      quote:
        "BTech Tutor made engineering concepts simple to understand. The step-by-step teaching helped me improve my grades and exam performance.",
      author: "Abhina K Ishak",
    },
  ],
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      question: "Is BTechTutor worth it?",
      answer:
        "Yes. BTechTutor offers expert-led online coaching for KTU students, including personalized one-to-one tuition, comprehensive study materials, and flexible schedules. With a strong track record of student success, it is a trusted choice for engineering coaching in Kerala.",
    },
    {
      question: "Are the results on BTechTutor real?",
      answer:
        "Yes, every single one. The names, CGPAs, and colleges are all real students who studied with us. We do not use fake testimonials or stock photos. If a result is on our website, it happened.",
    },
    {
      question: "What do students say about the teaching quality?",
      answer:
        "The most common feedback we get is that concepts finally made sense after coaching. Subjects students had been struggling with for a full semester became clear in a few sessions. Patience and clarity are the two things students mention most.",
    },
    {
      question: "Has BTechTutor helped with supply exams?",
      answer:
        "Yes, this is actually one of the main reasons students come to us. Supply exam prep at BTechTutor is targeted. We focus on exactly what the exam tests, not the entire syllabus again. Many students clear their arrears in the first supply attempt after coaching with us.",
    },
    {
      question: "Have BTechTutor students qualified GATE?",
      answer:
        "Yes. Over 800 GATE selections have come from BTechTutor students across ECE, EEE, and Instrumentation. Some went on to M.Tech at NITs, and some landed PSU jobs.",
    },
    {
      question: "Can I check more reviews before deciding?",
      answer:
        "Of course. Check btechtutor.com/reviews/ or just Google BTechTutor reviews. You can also speak directly with our team on WhatsApp at +91 98950 06772 to ask any questions before enrolling.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "For supply exam prep, usually within the preparation window itself, which is typically four to six weeks. For CGPA improvement, most students see a difference within one semester of consistent coaching. For GATE, it depends on how early you start, but most students need six to twelve months of structured preparation.",
    },
  ],
};

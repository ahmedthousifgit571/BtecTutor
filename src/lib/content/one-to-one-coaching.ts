export interface OneToOneCoachingMeta {
  title: string;
  description: string;
  canonicalUrl: string;
}

export interface OneToOneCoachingHeroContent {
  badgeLabel: string;
  heading: string;
  introParagraphs: string[];
}

export interface OneToOneCoachingBenefit {
  title: string;
  description: string;
}

export interface OneToOneCoachingAudience {
  title: string;
  points: string[];
}

export interface OneToOneCoachingStep {
  title: string;
  description: string;
}

export interface OneToOneCoachingTestimonial {
  quote: string;
  student: string;
}

export interface OneToOneCoachingPageContent {
  meta: OneToOneCoachingMeta;
  breadcrumbLabel: string;
  hero: OneToOneCoachingHeroContent;
  benefits: {
    sectionTitle: string;
    items: OneToOneCoachingBenefit[];
  };
  audience: OneToOneCoachingAudience;
  steps: {
    sectionTitle: string;
    items: OneToOneCoachingStep[];
  };
  testimonials: {
    sectionTitle: string;
    items: OneToOneCoachingTestimonial[];
  };
  cta: {
    label: string;
    href: string;
  };
}

export const oneToOneCoachingPageContent: OneToOneCoachingPageContent = {
  meta: {
    title: "One-to-One BTech Coaching | BTechTutor",
    description:
      "Get private one-to-one BTech coaching with a dedicated faculty member, flexible timings, and personalised sessions for KTU students in Kerala and abroad.",
    canonicalUrl: "/one-to-one-coaching",
  },
  breadcrumbLabel: "One-to-One Coaching",
  hero: {
    badgeLabel: "ONE-TO-ONE TUITION",
    heading: "One-to-One BTech Tuition",
    introParagraphs: [
      "Struggling with a subject? Falling behind in class? What you need is not another group lecture, you need a teacher who is focused entirely on you.",
      "At BTechTutor, our One-to-One BTech Coaching gives you a dedicated faculty member who teaches only you at your pace, on your schedule, covering exactly what you need to clear your exams and build real confidence.",
    ],
  },
  benefits: {
    sectionTitle: "What Makes One-to-One Coaching Different",
    items: [
      {
        title: "One dedicated faculty for one student",
        description:
          "No sharing. No waiting. Your teacher's full attention is on you and you alone from the first minute to the last.",
      },
      {
        title: "No mass classes",
        description:
          "We don't put 50 students in a room and hope for the best. Your sessions are private, focused, and built around your specific weaknesses.",
      },
      {
        title: "Personalised teaching",
        description:
          "Your faculty understands how you learn. They adjust their teaching style, examples, and pace to match you, not the average student.",
      },
      {
        title: "Flexible timing",
        description:
          "Study at 7 am before college or 10 pm after work. You pick the time that works for your schedule. We adjust to you.",
      },
      {
        title: "Study at your convenience",
        description:
          "No commuting, no fixed batches, no missing sessions. Log in from your room, your hostel, anywhere in Kerala or abroad.",
      },
      {
        title: "Cover any subject, any semester",
        description:
          "Engineering Maths, Signals and Systems, Control Systems, Power Systems, Data Structures, whatever subject is giving you trouble, we cover it.",
      },
    ],
  },
  audience: {
    title: "Who Is This For?",
    points: [
      "You have a KTU supply exam coming up and need to pass fast.",
      "You are struggling with one or two specific subjects, pulling your CGPA down.",
      "You missed classes and are now behind your batch.",
      "You tried group coaching but couldn't keep up with the pace.",
      "You are preparing for GATE and need focused subject-wise coaching.",
      "You are an NRI student in UAE or abroad studying under KTU.",
      "You simply learn better when someone is teaching only you.",
    ],
  },
  steps: {
    sectionTitle: "3 Simple Steps to Get Started",
    items: [
      {
        title: "Fill the form below",
        description:
          "Tell us your department, semester, and the subject you need help with.",
      },
      {
        title: "Get matched with the right faculty",
        description:
          "We match you with the right faculty based on your subject and schedule preference.",
      },
      {
        title: "Start your first session",
        description:
          "Begin focused, personalised, result-oriented coaching from day one.",
      },
    ],
  },
  testimonials: {
    sectionTitle: "Student Experiences",
    items: [
      {
        quote:
          "I had a backlog in Control Systems and was really stressed. The one-to-one sessions helped me understand the concepts properly for the first time. I cleared the supply exam in one attempt.",
        student: "KTU EEE Student, Kochi",
      },
      {
        quote:
          "Group classes never worked for me, I was always too shy to ask questions. With personal coaching I could ask anything without hesitation. My CGPA improved by 1.2 points in one semester.",
        student: "KTU CS Student, Trivandrum",
      },
    ],
  },
  cta: {
    label: "Book a Free Demo Session",
    href: "/free-demo",
  },
};

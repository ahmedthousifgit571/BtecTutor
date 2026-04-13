export interface OneToOneDifferentiator {
  title: string;
  description: string;
}

export interface OneToOneTuitionContent {
  badgeLabel: string;
  heading: string;
  tagline: string;
  subheading: string;
  bodyParagraphs: string[];
  differentiatorsHeading: string;
  differentiators: OneToOneDifferentiator[];
  cta: {
    label: string;
    href: string;
  };
}

export const oneToOneTuitionContent: OneToOneTuitionContent = {
  badgeLabel: "ONE-TO-ONE TUITION",
  heading: "One-to-One BTech Tuition",
  tagline: "One Student. One Teacher. Your Schedule.",
  subheading:
    "For students who need more than a class, a dedicated personal tutor who is there only for you.",
  bodyParagraphs: [
    "Most engineering students in Kerala have sat through classes where the teacher finished the syllabus and moved on, but the student was still trying to understand the third slide from twenty minutes ago. That is not learning. That is coverage.",
    "BTechTutor was built on a different philosophy. We believe every student can understand every subject - if it is explained clearly, patiently, and with genuine attention to how that individual student thinks.",
    "We started as a small coaching team in Kerala. Over fifteen years, we have helped more than five thousand engineering students, students with backlogs, students aiming for top CGPAs, students preparing for GATE, students from across Kerala, and Indian students studying abroad - all find their footing in engineering subjects that once felt impossible.",
    "Our faculty are not just qualified teachers. They are people who have sat in the same seats you are sitting in, faced the same exams you are facing, and figured out exactly what it takes to clear them.",
  ],
  differentiatorsHeading: "Four Things That Make It Different",
  differentiators: [
    {
      title: "One dedicated faculty",
      description:
        "No sharing, no waiting. The teacher's full attention is on you from the moment the session starts.",
    },
    {
      title: "Completely flexible timing",
      description:
        "Early morning before college, late evening after work, weekend sessions - you pick the time slot that fits your life.",
    },
    {
      title: "Any subject, any semester",
      description:
        "Engineering Maths, Control Systems, Signals and Systems, Power Systems, Data Structures - whatever subject is giving you trouble, we have the right teacher for it.",
    },
    {
      title: "Free demo, no payment first",
      description:
        "Attend one complete session for free. If it does not work for you, you owe us nothing.",
    },
  ],
  cta: {
    label: "Book a One-to-One Session ->",
    href: "/one-to-one-coaching/",
  },
};

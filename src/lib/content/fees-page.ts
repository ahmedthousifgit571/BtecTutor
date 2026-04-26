export interface FeesSeoContent {
  title: string;
  description: string;
  h1: string;
}

export interface FeesPlan {
  name: string;
  bestFor: string;
  includes: string[];
  fee: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FeesFaqItem {
  question: string;
  answer: string;
}

export interface FeesPageContent {
  seo: FeesSeoContent;
  h1Accent: string;
  h1Rest: string;
  introduction: string[];
  plans: FeesPlan[];
  alwaysIncludedHeading: string;
  alwaysIncludedItems: string[];
  faq: {
    badgeLabel: string;
    heading: string;
    headingHighlight: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaButtonLabel: string;
    ctaWhatsAppNumber: string;
    items: FeesFaqItem[];
  };
}

export const feesPageContent: FeesPageContent = {
  seo: {
    title: "Fees & Pricing -- Affordable KTU Coaching Plans | Kerala",
    description:
      "Transparent fee structure for BTechTutor KTU coaching, GATE preparation, and one-to-one sessions. Affordable plans for Kerala engineering students",
    h1: "BTechTutor Fees -- Honest, Transparent Pricing for Every Student",
  },
  h1Accent: "BTechTutor Fees",
  h1Rest: "-- Honest, Transparent Pricing for Every Student",
  introduction: [
    "We believe students should know exactly what they are paying for before they pay anything. No locked pricing is revealed only after a sales call. No registration fees appear after you show interest. No increases mid-course.",
    "Below is a straightforward breakdown of our coaching plans. If your situation does not fit a standard plan, reach out, and we will build something that works for your budget.",
  ],
  plans: [
    {
      name: "Plan 1 -- Per Subject Coaching",
      bestFor: "Students who need help with one or two specific subjects",
      includes: [
        "Live sessions for the subject",
        "Recorded backup sessions",
        "Notes and previous year papers",
        "Doubt clearing",
      ],
      fee: "[Add fee -- per month or per subject]",
      ctaLabel: "Enrol for This Plan",
      ctaHref: "/contact",
    },
    {
      name: "Plan 2 -- KTU Semester Package",
      bestFor: "Students who want complete coverage for a full semester",
      includes: [
        "All subjects for the semester",
        "Demo class",
        "Notes, PYQ, video classes",
      ],
      fee: "[Add fee -- per semester]",
      ctaLabel: "Enrol for Semester Package",
      ctaHref: "/contact",
    },
    {
      name: "Plan 3 -- One-to-One Personal Coaching",
      bestFor:
        "Students with backlogs, CGPA concerns, or anyone who needs dedicated attention",
      includes: [
        "Private sessions with dedicated faculty",
        "Flexible timing",
        "Any subject",
      ],
      fee: "[Add fee -- per session or per month]",
      ctaLabel: "Book a One-to-One Session",
      ctaHref: "/one-to-one-coaching",
    },
    {
      name: "Plan 4 -- GATE Preparation",
      bestFor:
        "Students targeting GATE 2027 or 2028 for ECE, EEE, or Instrumentation",
      includes: [
        "Subject-wise coaching",
        "PYQ analysis",
        "Mock tests",
        "Complete preparation plan",
      ],
      fee: "[Add fee -- per course or per month]",
      ctaLabel: "Enroll for GATE Coaching",
      ctaHref: "/gate-coaching",
    },
    {
      name: "Plan 5 -- ISRO Preparation",
      bestFor: "BTech graduates targeting the ISRO Scientist Engineer exam",
      includes: [
        "ISRO-specific coaching",
        "Syllabus coverage",
        "PYQ analysis",
        "Mock tests",
      ],
      fee: "[Add fee]",
      ctaLabel: "Enroll for ISRO Coaching",
      ctaHref: "/contact",
    },
  ],
  alwaysIncludedHeading: "What Is Always Included in Every Plan",
  alwaysIncludedItems: [
    "Notes and previous year question papers for all enrolled subjects.",
    "Access to recorded sessions so you can revise at any time.",
    "Doubt clearing via WhatsApp or scheduled sessions.",
    "No hidden charges and no price changes after you join.",
  ],
  faq: {
    badgeLabel: "FAQs",
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    ctaHeading: "Need exact fee details now?",
    ctaDescription:
      "Message us on WhatsApp and we will share the right plan based on your semester, subjects, and goals.",
    ctaButtonLabel: "WhatsApp BTechTutor",
    ctaWhatsAppNumber: "+919895006772",
    items: [
      {
        question: "How much does KTU coaching cost at BTechTutor?",
        answer:
          "Depends on what you need. We have per-subject plans, full semester packages, and one-to-one sessions -- so the fee varies. The full breakdown is at btechtutor.com/fees/. You can also WhatsApp us at +91 98950 06772, and we will tell you exactly what works for your situation.",
      },
      {
        question: "Are there any hidden charges?",
        answer:
          "No. What we quote is what you pay. No registration fees, no surprise charges mid-course, nothing extra added later. The fee structure is published on this page -- no phone call required to see it.",
      },
      {
        question: "Is there a registration fee to join?",
        answer:
          "No. You fill the enquiry form, we discuss your requirement, and you only pay when you decide to enrol in a specific plan. Nothing is charged before that point.",
      },
      {
        question: "Is BTechTutor affordable for students on a tight budget?",
        answer:
          "We have tried to make it flexible for that reason. The per-subject plan means you only pay for what you actually need -- not a big package with subjects you do not require. If you are in a tough spot financially, reach out, and we will see what we can work out.",
      },
      {
        question: "Can I pay for just one subject?",
        answer:
          "Yes, absolutely. You do not have to take a full semester package. If you need help with one subject -- whether it is a backlog, a difficult topic, or GATE prep for a specific area -- we can set that up separately.",
      },
      {
        question: "What does the one-to-one coaching fee cover?",
        answer:
          "Private sessions with a dedicated faculty member, flexible scheduling, any subject you choose, and doubt clearing between sessions. For the current rate, WhatsApp us at +91 98950 06772 -- it depends slightly on the subject and session frequency.",
      },
      {
        question: "Is the fee different for students in the UAE or abroad?",
        answer:
          "The coaching is the same. For fee details specific to overseas students, just contact us at +91 98950 06772 -- we will sort it out directly.",
      },
    ],
  },
};

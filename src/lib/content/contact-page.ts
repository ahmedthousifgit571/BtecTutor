import type { LeadFormContent } from "@/lib/content/lead-form";
import type { FaqContent } from "@/lib/content/faq";

export interface ContactDetailItem {
  label: string;
  value: string;
  href?: string;
}

export interface ContactPageContent {
  seo: {
    title: string;
    description: string;
  };
  h1: string;
  introduction: string[];
  contactDetails: ContactDetailItem[];
  processHeading: string;
  processSteps: string[];
  formContent: LeadFormContent & {
    departmentOptions: string[];
    semesterOptions: string[];
  };
  faq: FaqContent;
}

export const contactPageContent: ContactPageContent = {
  seo: {
    title: "Contact BTechTutor | KTU Coaching & GATE Preparation",
    description:
      "Contact BTechTutor for KTU coaching, GATE preparation, and one-to-one BTech tuition. Call, WhatsApp, or fill the form. Quick response guaranteed.",
  },
  h1: "Contact BTechTutor — Enrol Today or Ask Us Anything",
  introduction: [
    "Ready to get started? Not sure which course fits your situation? Want to check if we cover your specific subject or semester? Just reach out.",
    "Fill the form below, WhatsApp us directly, or call. We get back to every enquiry - usually within a few hours.",
  ],
  contactDetails: [
    {
      label: "Phone / WhatsApp",
      value: "+91 98950 06772",
      href: "tel:+919895006772",
    },
    {
      label: "Email",
      value: "help.btechtutorkerala@gmail.com",
      href: "mailto:help.btechtutorkerala@gmail.com",
    },
    {
      label: "Response time",
      value: "Within 24 hours. Usually within 2-3 hours during working hours.",
    },
    {
      label: "Serving",
      value: "All Kerala cities + Indian students in UAE, Dubai, Qatar, and Gulf countries.",
    },
  ],
  processHeading: "What Happens After You Submit?",
  processSteps: [
    "Our team reviews your enquiry and contacts you by phone or WhatsApp within 24 hours.",
    "We ask a few quick questions to understand your subject, timing, and goals.",
    "We match you with the right faculty and suggest the best plan for your situation.",
    "You decide whether to enrol - no pressure, no follow-up calls unless you ask for them.",
  ],
  formContent: {
    title: "Send Us a Message",
    subtitle: "Tell us your department, semester, and subject. We will suggest the right plan.",
    successTitle: "Enquiry Sent",
    successMessage: "Thank you. Our team will contact you within 24 hours.",
    submitLabel: "Send My Enquiry",
    courseOptions: [],
    departmentOptions: [
      "EEE",
      "ECE",
      "CS",
      "IT",
      "Civil",
      "Mechanical",
      "GATE",
      "ISRO",
      "PSC",
    ],
    semesterOptions: [
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "Final Year",
      "Graduate",
    ],
  },
  faq: {
    badgeLabel: "Frequently Asked Questions",
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    ctaHeading: "Need a faster response?",
    ctaDescription:
      "WhatsApp is the quickest way to reach our team for urgent exam and enrolment queries.",
    ctaButtonLabel: "Chat on WhatsApp",
    ctaWhatsAppNumber: "+919895006772",
    items: [
      {
        question: "How do I contact BTechTutor?",
        answer:
          "Easiest way is WhatsApp at +91 98950 06772 - that gets the fastest response. You can also call the same number, email us at help.btechtutorkerala@gmail.com, or fill the form on this page. We respond within 24 hours on all channels.",
      },
      {
        question: "How do I enrol at BTechTutor?",
        answer:
          "Just fill the form on this page or WhatsApp +91 98950 06772 with your department, semester, and the subject you need help with. We will get back to you, understand your requirement, and guide you through the rest. The whole thing from first message to first class usually takes less than 48 hours.",
      },
      {
        question: "How quickly will I get a response?",
        answer:
          "Within 24 hours for sure, but usually much faster during working hours - typically 2 to 3 hours. If you have something urgent like a supply exam coming up soon, just mention that in your message and we will prioritise it.",
      },
      {
        question: "Can I join mid-semester?",
        answer:
          "Yes, absolutely. There are no fixed batch dates. Students join at any point - beginning of semester, middle, or even a few weeks before exams. If you have a specific deadline, tell us when you contact and we will build a plan around your timeline.",
      },
      {
        question: "Is there a WhatsApp number?",
        answer:
          "Yes - +91 98950 06772. It is the fastest way to reach us. Most questions get answered the same day over WhatsApp.",
      },
      {
        question: "Do you have an offline centre I can visit?",
        answer:
          "No. BTechTutor is fully online. All coaching, enquiries, and enrolment happen through the website, WhatsApp, and video sessions. This is actually what makes it possible for us to serve students across all of Kerala and Indian students in UAE and Gulf countries.",
      },
      {
        question: "What should I have ready when I contact you?",
        answer:
          "Just know your department, your current semester, and which subject or subjects you need help with. That is enough to get started. If you are preparing for GATE or ISRO, mention your branch and target year too. Everything else we can sort out in the first conversation.",
      },
    ],
  },
};

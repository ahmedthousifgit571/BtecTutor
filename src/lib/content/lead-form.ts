export interface LeadFormContent {
  title: string;
  subtitle: string;
  successTitle: string;
  successMessage: string;
  submitLabel: string;
  courseOptions: string[];
}

export const leadFormContent: LeadFormContent = {
  title: "Get in Touch",
  subtitle: "Fill in your details and we'll reach out",
  successTitle: "Thank You!",
  successMessage:
    "We've received your enquiry and will get back to you shortly.",
  submitLabel: "Submit Enquiry",
  courseOptions: [
    "GATE ECE",
    "GATE EEE",
    "GATE Instrumentation",
    "KTU CSE",
    "KTU Mechanical",
    "KTU Civil",
  ],
};

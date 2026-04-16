export interface TrustReason {
  number: string;
  title: string;
  description: string;
  icon: string;
  accent: "orange" | "violet" | "emerald" | "sky" | "rose" | "amber";
}

export interface WhyStudentsTrustContent {
  badgeLabel: string;
  headlinePrefix: string;
  headlineHighlight: string;
  reasons: TrustReason[];
}

export const whyStudentsTrustContent: WhyStudentsTrustContent = {
  badgeLabel: "Trusted by Thousands",
  headlinePrefix: "Why",
  headlineHighlight: "5,000+ Students Trust BTechTutor",
  reasons: [
    {
      number: "01",
      title: "Faculty Who Actually Know the Syllabus",
      description:
        "Our faculty specialise in specific KTU subjects and GATE topics. They don't teach everything to everyone — each teacher focuses on what they know best. The result is a level of depth and clarity that generic coaching rarely delivers.",
      icon: "BookOpenCheck",
      accent: "orange",
    },
    {
      number: "02",
      title: "Free Demo Before You Pay a Rupee",
      description:
        "We don't ask you to trust us based on a brochure. We give you a completely free class first. No payment, no registration fee, no catch. If the class doesn't impress you, you owe us nothing.",
      icon: "Gift",
      accent: "violet",
    },
    {
      number: "03",
      title: "Both KTU 2019 and 2024 Schemes Covered",
      description:
        "We cover all eleven CS sub-branches of the KTU 2024 scheme — including CS with AI, CS with Data Science, CS with IoT, CS with Cyber Security, and more. If you are on the new scheme, we have your subjects.",
      icon: "Layers",
      accent: "emerald",
    },
    {
      number: "04",
      title: "From Notes to GATE — One Platform",
      description:
        "Whether you need KTU notes for your semester exam or structured GATE preparation, it is all on BTechTutor. You do not need five different websites for five different things.",
      icon: "LayoutGrid",
      accent: "sky",
    },
    {
      number: "05",
      title: "Available Wherever You Are",
      description:
        "Kerala student at home. Working professional in another city. Indian student in UAE or abroad. All you need is an internet connection and we handle the rest.",
      icon: "Globe",
      accent: "rose",
    },
    {
      number: "06",
      title: "Real Results, Real Names",
      description:
        "Roshan Roy achieved a CGPA of 8.9 at Government College of Engineering Thrissur. Nihila K scored 8.32 at Government Engineering College Kannur. These are not stock photos with fake testimonials — these are BTechTutor students.",
      icon: "Award",
      accent: "amber",
    },
  ],
};

export interface FooterCta {
  subheading: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface FooterContact {
  phone: string;
  email: string;
  whatsapp: string;
  serving: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterContent {
  cta: FooterCta;
  contact: FooterContact;
  linkGroups: FooterLinkGroup[];
  copyright: string;
  legalLinks: { label: string; href: string }[];
}

export const footerContent: FooterContent = {
  cta: {
    subheading:
      "Whether it's clearing a backlog, improving your CGPA, cracking GATE, or just having a teacher who actually focuses on you — the right coaching makes it happen. Talk to our team today.",
    primaryLabel: "Talk to Our Team on WhatsApp",
    primaryHref: "https://wa.me/919895006772",
    secondaryLabel: "Send an Enquiry",
    secondaryHref: "tel:+919895006772",
  },
  contact: {
    phone: "+91 98950 06772",
    email: "help.btechtutorkerala@gmail.com",
    whatsapp: "+91 98950 06772",
    serving: "All Kerala cities + Indian students in UAE / Gulf",
  },
  linkGroups: [
    {
      title: "GATE Coaching",
      links: [
        { label: "ECE", href: "/gate-coaching/ece" },
        { label: "EEE", href: "/gate-coaching/eee" },
        { label: "Instrumentation", href: "/gate-coaching/instrumentation" },
        { label: "Mock Tests", href: "/gate-coaching/ece/mock-test" },
      ],
    },
    {
      title: "KTU Resources",
      links: [
        { label: "2019 Scheme", href: "/ktu/2019" },
        { label: "2024 Scheme", href: "/ktu/2024" },
        { label: "Notes & PYQs", href: "/ktu/2024/computer-science" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Faculty", href: "/faculty" },
        { label: "Reviews", href: "/reviews" },
        { label: "Blog", href: "/blog" },
        { label: "Why Us", href: "/why-us" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Fee Structure", href: "/fees" },
      ],
    },
  ],
  copyright: "BTEC Tutor. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

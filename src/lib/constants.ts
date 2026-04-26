export const SITE_CONFIG = {
  name: "BTEC Tutor",
  tagline: "GATE & KTU Coaching in Kerala",
  description:
    "Kerala's premier coaching institute for GATE and KTU exam preparation. Expert faculty, comprehensive study materials, and proven results.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "info@btectutor.com",
  phone: "+91 98765 43210",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "GATE Coaching",
    href: "/gate-coaching",
    children: [
      { label: "ECE", href: "/gate-coaching/ece" },
      { label: "EEE", href: "/gate-coaching/eee" },
      { label: "Instrumentation", href: "/gate-coaching/instrumentation" },
    ],
  },
  {
    label: "KTU",
    href: "#",
    children: [
      { label: "2019 Scheme", href: "/ktu/2019" },
      { label: "2024 Scheme", href: "/ktu/2024" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About", href: "/about" },
      { label: "Why Us", href: "/why-us" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  {
    label: "Support",
    href: "#",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Fees", href: "/fees" },
    ],
  },
] as const;

export const GATE_BRANCHES = [
  {
    slug: "ece",
    title: "Electronics & Communication",
    shortTitle: "ECE",
    icon: "Cpu",
  },
  {
    slug: "eee",
    title: "Electrical & Electronics",
    shortTitle: "EEE",
    icon: "Zap",
  },
  {
    slug: "instrumentation",
    title: "Instrumentation Engineering",
    shortTitle: "IE",
    icon: "Gauge",
  },
] as const;

export const KTU_SCHEMES = ["2019", "2024"] as const;

export const KTU_DEPARTMENTS = [
  { slug: "computer-science", title: "Computer Science & Engineering", shortTitle: "CSE" },
  { slug: "mechanical", title: "Mechanical Engineering", shortTitle: "ME" },
  { slug: "civil", title: "Civil Engineering", shortTitle: "CE" },
] as const;

export const STATS = [
  { label: "Students Coached", value: "5,000+" },
  { label: "Pass Rate", value: "95%" },
  { label: "Years Experience", value: "15+" },
  { label: "Expert Faculty", value: "100+" },
] as const;

export const WHY_US_FEATURES = [
  {
    title: "Expert Faculty",
    description: "Learn from GATE-qualified professors with 10+ years of teaching experience.",
    icon: "GraduationCap",
  },
  {
    title: "Comprehensive Notes",
    description: "Meticulously prepared study materials covering every topic in the syllabus.",
    icon: "BookOpen",
  },
  {
    title: "Mock Tests",
    description: "Regular practice tests designed to simulate actual GATE/KTU exam patterns.",
    icon: "ClipboardCheck",
  },
  {
    title: "PYQ Analysis",
    description: "Detailed solutions and analysis of previous year questions for focused preparation.",
    icon: "BarChart3",
  },
  {
    title: "Doubt Clearing",
    description: "Dedicated doubt-clearing sessions to ensure complete understanding of concepts.",
    icon: "MessageCircle",
  },
  {
    title: "Proven Results",
    description: "Consistent track record of producing top GATE ranks and KTU university toppers.",
    icon: "Trophy",
  },
] as const;

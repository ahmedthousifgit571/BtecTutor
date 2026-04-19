export interface CourseItem {
  title: string;
  slug: string;
  tagline: string;
  audience: string;
  features: string[];
  ctaText: string;
  icon: string;
  badge: string | null;
}

export interface CourseStat {
  label: string;
  value: string;
  icon: string;
}

export interface CourseGridContent {
  badgeLabel: string;
  headline: string;
  subtitle: string;
  exploreCta: string;
  stats: CourseStat[];
  courses: CourseItem[];
}

export const courseGridContent: CourseGridContent = {
  badgeLabel: "Our Courses",
  headline: "What We Teach — Choose Your Path",
  subtitle:
    "Whether you're clearing a backlog, preparing for GATE, or aiming for the top percentile — we have a course that fits where you are right now.",
  exploreCta: "Explore Courses",
  stats: [
    { label: "Students Coached", value: "5,000+", icon: "TrendingUp" },
    { label: "Free Videos", value: "200+", icon: "Play" },
    { label: "Expert Faculty", value: "100+", icon: "Users" },
    { label: "Pass Rate", value: "95%", icon: "Award" },
  ],
  courses: [
    {
      title: "One-to-One BTech Tuition",
      slug: "/free-demo",
      tagline: "One student. One teacher. Full attention.",
      audience:
        "Students with backlogs, CGPA issues, or anyone who learns better with personal attention",
      features: [
        "Dedicated personal faculty",
        "Flexible timing",
        "Any subject",
        "Free demo session",
      ],
      ctaText: "Book a One-to-One Session",
      icon: "UserCheck",
      badge: "Popular",
    },
    {
      title: "KTU BTech Tuition",
      slug: "/ktu/2024",
      tagline: "All subjects. All semesters. Both schemes.",
      audience:
        "KTU students in Semesters 1 to 8 under 2019 or 2024 scheme",
      features: ["Notes", "PYQ", "Video classes", "Demo + Marathon sessions"],
      ctaText: "Explore KTU Courses",
      icon: "GraduationCap",
      badge: null,
    },
    {
      title: "GATE Coaching",
      slug: "/gate-coaching",
      tagline: "Structured preparation for ECE, EEE, and Instrumentation.",
      audience:
        "BTech graduates and final year students targeting GATE 2027 / 2028",
      features: [
        "Subject-wise classes",
        "PYQ analysis",
        "Mock tests",
        "Cutoff guidance",
      ],
      ctaText: "Explore GATE Courses",
      icon: "Target",
      badge: null,
    },
    {
      title: "Supply Exam Coaching",
      slug: "/contact",
      tagline: "Clear your arrears fast.",
      audience: "KTU students with supply exams coming up",
      features: [
        "Targeted preparation",
        "Revision sessions",
        "Previous year analysis",
      ],
      ctaText: "Start Supply Exam Prep",
      icon: "RefreshCw",
      badge: null,
    },
    {
      title: "ISRO Coaching",
      slug: "/contact",
      tagline: "From campus to ISRO.",
      audience: "Graduates targeting ISRO Scientist Engineer exam",
      features: [
        "ISRO-specific coaching",
        "Syllabus coverage",
        "PYQ analysis",
        "Mock tests",
      ],
      ctaText: "Explore ISRO Preparation",
      icon: "Rocket",
      badge: "New",
    },
  ],
};

export interface CourseItem {
  title: string;
  slug: string;
  description: string;
  icon: string;
  badge: string | null;
  subjects: number;
}

export interface CourseGridContent {
  badgeLabel: string;
  headline: string;
  subtitle: string;
  courses: CourseItem[];
}

export const courseGridContent: CourseGridContent = {
  badgeLabel: "Our Courses",
  headline: "Choose Your Path to Success",
  subtitle:
    "Comprehensive coaching programs designed by experts with proven track records",
  courses: [
    {
      title: "GATE ECE",
      slug: "/gate-coaching/ece",
      description:
        "Electronics & Communication Engineering — Network Theory, Signals & Systems, Digital Electronics",
      icon: "Cpu",
      badge: "Popular",
      subjects: 15,
    },
    {
      title: "GATE EEE",
      slug: "/gate-coaching/eee",
      description:
        "Electrical & Electronics Engineering — Power Systems, Control Systems, Electric Circuits",
      icon: "Zap",
      badge: null,
      subjects: 12,
    },
    {
      title: "GATE Instrumentation",
      slug: "/gate-coaching/instrumentation",
      description:
        "Instrumentation Engineering — Transducers, Process Control, Analog Electronics",
      icon: "Gauge",
      badge: null,
      subjects: 10,
    },
    {
      title: "KTU CSE",
      slug: "/ktu/2024/computer-science",
      description:
        "Computer Science & Engineering — Data Structures, OS, DBMS for KTU 2024 scheme",
      icon: "Code",
      badge: "New Scheme",
      subjects: 20,
    },
    {
      title: "KTU Mechanical",
      slug: "/ktu/2024/mechanical",
      description:
        "Mechanical Engineering — Thermodynamics, Fluid Mechanics, Machine Design",
      icon: "Wrench",
      badge: null,
      subjects: 18,
    },
    {
      title: "KTU Civil",
      slug: "/ktu/2024/civil",
      description:
        "Civil Engineering — Structural Analysis, Geotechnical Engineering, Surveying",
      icon: "Building2",
      badge: null,
      subjects: 16,
    },
  ],
};

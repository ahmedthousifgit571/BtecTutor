export interface HeroContent {
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  callout: string;
  supportingLine: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const heroContent: HeroContent = {
  headlineLine1: "Kerala's Most Trusted Online Coaching",
  headlineLine2: "for KTU BTech and GATE",
  subtitle:
    "Expert faculty. Free demo class. Flexible schedule. Results you can actually measure. Join over 5,000 engineering students who chose BTechTutor.",
  callout:
    "Looking for personal attention? We offer One-to-One BTech Tuition with a dedicated faculty member for just you.",
  supportingLine:
    "KTU 2019 & 2024 Scheme · All Departments · GATE ECE EEE IN · One-to-One Tuition · ISRO Prep",
  primaryCta: { label: "Book A Demo Class", href: "/free-demo" },
  secondaryCta: { label: "Explore One-to-One Tuition", href: "/one-to-one-coaching" },
};

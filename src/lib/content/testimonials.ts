export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
}

export interface TestimonialsContent {
  badgeLabel: string;
  heading: string;
  exploreMoreLabel: string;
  exploreMoreHref: string;
  testimonials: TestimonialItem[];
}

export const testimonialsContent: TestimonialsContent = {
  badgeLabel: "Student Testimonials",
  heading: "What Students Say About BTechTutor",
  exploreMoreLabel: "Explore More Reviews",
  exploreMoreHref: "/reviews",
  testimonials: [
    {
      text: "BTech Tutor really helped me strengthen my basics. The classes are well-structured, and I gained the confidence to solve problems on my own.",
      image: "https://api.dicebear.com/9.x/initials/svg?seed=VV&backgroundColor=FF6B2B&textColor=ffffff",
      name: "Vismay Vijayan",
      role: "Student",
    },
    {
      text: "I am grateful to BTech Tutor for guiding me through tough subjects. The teaching style is clear, and doubts are always addressed patiently.",
      image: "https://api.dicebear.com/9.x/initials/svg?seed=MH&backgroundColor=FF6B2B&textColor=ffffff",
      name: "Muhammed Haroon",
      role: "Student",
    },
    {
      text: "BTech Tutor made engineering concepts simple to understand. The step-by-step teaching helped me improve my grades and exam performance.",
      image: "https://api.dicebear.com/9.x/initials/svg?seed=AKI&backgroundColor=FF6B2B&textColor=ffffff",
      name: "Abhina K Ishak",
      role: "Student",
    },
  ],
};

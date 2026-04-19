"use client";

import TestimonialV2 from "@/components/ui/testimonial-v2";
import { testimonialsContent } from "@/lib/content/testimonials";

interface Review {
  id: string;
  studentName: string;
  rating: number;
  content: string;
  course: string | null;
}

interface TestimonialCarouselProps {
  reviews: Review[];
}

export function TestimonialCarousel({ reviews }: TestimonialCarouselProps) {
  // Map DB reviews to the testimonial-v2 format
  const testimonials =
    reviews.length > 0
      ? reviews.map((review) => ({
          text: review.content,
          image: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(review.studentName)}&backgroundColor=FF6B2B&textColor=ffffff`,
          name: review.studentName,
          role: review.course || "Student",
        }))
      : testimonialsContent.testimonials;

  return <TestimonialV2 testimonials={testimonials} />;
}

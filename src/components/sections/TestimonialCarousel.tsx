"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Char-split animation for section title
      gsap.from(".testimonial-char", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".testimonial-badge", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const duplicated = [...reviews, ...reviews];

  return (
    <section ref={sectionRef} className="bg-surface-muted py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="testimonial-header text-center mb-12">
          <Badge variant="violet" className="testimonial-badge mb-4 !bg-brand-orange/10">
            Student Reviews
          </Badge>
          <h2 className="text-fluid-3xl font-bold text-gray-900">
            {"What Our ".split("").map((char, i) => (
              <span key={`a${i}`} className="testimonial-char inline-block" style={{ whiteSpace: char === " " ? "pre" : undefined }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {"Students Say".split("").map((char, i) => (
              <span
                key={`b${i}`}
                className="testimonial-char inline-block gradient-text-dark"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Scroll container */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {duplicated.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="snap-center shrink-0 w-[340px] sm:w-[400px]"
            >
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-brand-orange/20 mb-4" />

                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{review.content}&rdquo;
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {review.studentName}
                    </p>
                    {review.course && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        {review.course}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-3.5 w-3.5 ${
                          j < review.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-muted to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-muted to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

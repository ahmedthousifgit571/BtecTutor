"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialV2Props {
  testimonials?: Testimonial[];
}

// --- Default Data ---
const defaultTestimonials: Testimonial[] = [
  {
    text: "BTEC Tutor completely changed my approach to GATE preparation. The structured study plan and expert guidance helped me crack the exam with flying colors.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Priya Menon",
    role: "GATE ECE — AIR 156",
  },
  {
    text: "The faculty here genuinely cares about each student's progress. Their mock tests and doubt-clearing sessions were instrumental in my KTU success.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Arun Kumar",
    role: "KTU S8 — 9.2 SGPA",
  },
  {
    text: "The personalized attention and comprehensive study materials at BTEC Tutor are unmatched. I went from average to top of my class.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sneha Raj",
    role: "GATE EEE — AIR 230",
  },
  {
    text: "Joining BTEC was the best decision for my GATE prep. The systematic approach and regular assessments kept me on track throughout.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Vishnu Prasad",
    role: "GATE ME — AIR 412",
  },
  {
    text: "The online classes were just as effective as in-person sessions. Flexible scheduling made it easy to balance college and coaching.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Fathima Zahra",
    role: "KTU S6 — 9.5 SGPA",
  },
  {
    text: "BTEC's faculty breaks down complex topics into simple, understandable concepts. Their teaching methodology is truly world-class.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Deepa Nair",
    role: "GATE CS — AIR 198",
  },
  {
    text: "The mock test series and detailed performance analysis helped me identify and improve my weak areas quickly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rahul Krishnan",
    role: "GATE ECE — AIR 340",
  },
  {
    text: "From day one, the team at BTEC made me feel supported. The mentorship program gave me confidence to aim higher.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Anjali Thomas",
    role: "KTU S8 — 9.0 SGPA",
  },
  {
    text: "BTEC Tutor's result-oriented approach and experienced faculty helped me achieve my dream GATE score. Highly recommended!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mohammed Ashiq",
    role: "GATE EEE — AIR 175",
  },
];

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(255, 107, 43, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 107, 43, 0.15)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(255, 107, 43, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 107, 43, 0.15)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="p-10 rounded-3xl border border-brand-orange/10 shadow-lg shadow-brand-orange/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-gray-600 leading-relaxed font-normal m-0">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <Image
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-orange/10 group-hover:ring-brand-orange/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-gray-900">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-brand-orange/70 mt-0.5">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialV2({ testimonials }: TestimonialV2Props) {
  const items = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  const firstColumn = items.slice(0, Math.ceil(items.length / 3));
  const secondColumn = items.slice(Math.ceil(items.length / 3), Math.ceil((items.length * 2) / 3));
  const thirdColumn = items.slice(Math.ceil((items.length * 2) / 3));

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-surface-muted py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-brand-orange/20 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-brand-orange bg-brand-orange/10 transition-colors">
              Student Reviews
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-fluid-3xl font-extrabold tracking-tight mt-6 text-center text-gray-900 whitespace-nowrap"
          >
            What Our{" "}
            <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-center mt-5 text-gray-500 text-lg leading-relaxed max-w-sm">
            Discover how thousands of students have cracked GATE & aced KTU exams with our expert coaching.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[480px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}

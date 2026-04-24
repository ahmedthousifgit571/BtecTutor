"use client";

import React from "react";

import { motion } from "framer-motion";
import { testimonialsContent } from "@/lib/content/testimonials";

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

// --- Default Data (sourced from content file) ---
const defaultTestimonials: Testimonial[] = testimonialsContent.testimonials;

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
                  className="p-10 rounded-3xl border border-white/10 shadow-lg shadow-black/10 max-w-xs w-full bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-white/80 leading-relaxed font-normal m-0">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      {/* Keeping img for lightweight avatar loop in animated list */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-orange/10 group-hover:ring-brand-orange/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-white">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-brand-orange mt-0.5">
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

export default function TestimonialV2({ testimonials = defaultTestimonials }: TestimonialV2Props) {
  const items = testimonials;

  const firstColumn = items.slice(0, Math.ceil(items.length / 3));
  const secondColumn = items.slice(Math.ceil(items.length / 3), Math.ceil((items.length * 2) / 3));
  const thirdColumn = items.slice(Math.ceil((items.length * 2) / 3));

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-charcoal py-24 relative overflow-hidden"
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
        <div className="flex flex-col items-center justify-center mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-brand-orange/20 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-brand-orange bg-brand-orange/10 transition-colors">
              {testimonialsContent.badgeLabel}
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-fluid-3xl font-extrabold tracking-tight mt-6 text-center text-white"
          >
            What Students Say About
            <br />
            <span className="gradient-text">BTechTutor</span>
          </h2>
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

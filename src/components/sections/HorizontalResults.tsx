"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import {
  studentResultsContent,
  type StudentResultsContent,
  type StudentResult,
} from "@/lib/content/student-results";

/* ─── Reusable Result Card ─────────────────────────────────────── */

interface ResultCardProps {
  result: StudentResult;
  index: number;
}

function ResultCard({ result, index }: ResultCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[300px] sm:h-[340px] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-500 hover:border-brand-orange/40 hover:shadow-[0_8px_40px_rgba(255,107,43,0.12)] hover:-translate-y-1">
      {/* Large number — top-right */}
      <span
        className="absolute top-3 right-4 text-[4rem] sm:text-[5rem] font-black leading-none tracking-tighter text-brand-orange/[0.07] group-hover:text-brand-orange/[0.15] transition-colors duration-500 select-none"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {number}
      </span>

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full p-5 sm:p-6">
        {/* Top: CGPA badge */}
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold text-brand-orange">
            CGPA {result.cgpa}
          </span>
        </div>

        {/* Middle: Avatar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-brand-orange/[0.05] group-hover:bg-brand-orange/[0.10] blur-lg transition-colors duration-500" />
            <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-gray-200 bg-brand-orange/5 group-hover:border-brand-orange/30 transition-all duration-500">
              <GraduationCap className="h-7 w-7 sm:h-9 sm:w-9 text-brand-orange/50 group-hover:text-brand-orange transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Bottom: Name + College */}
        <div>
          <h3
            className="text-base sm:text-lg font-bold text-gray-900 uppercase leading-tight tracking-tight mb-1 group-hover:text-brand-orange transition-colors"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {result.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
            {result.college}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────────────────── */

interface HorizontalResultsProps {
  content?: StudentResultsContent;
}

export function HorizontalResults({
  content = studentResultsContent,
}: HorizontalResultsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-60px" });

  /* Measure the actual overflow of the horizontal track */
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const viewW = window.innerWidth;
      setScrollRange(Math.max(0, trackW - viewW));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [content.results.length]);

  /* scrollYProgress: 0 when section top hits viewport top,
     1 when section bottom hits viewport bottom.
     Map that to exact pixel translation of the track. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  /* Section height = 100vh (visible) + scrollRange (extra scroll room).
     This guarantees the sticky container stays pinned until
     ALL cards have finished scrolling horizontally. */
  const sectionHeight = `calc(100vh + ${scrollRange}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: sectionHeight }}
    >
      {/* Sticky viewport — pinned for the entire horizontal scroll */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header — centered */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 pb-2">
          <div ref={headingRef} className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="violet" className="mb-4 !bg-brand-orange/10">
                {content.badgeLabel}
              </Badge>
            </motion.div>

            <motion.h2
              className="text-fluid-3xl font-bold text-gray-900 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-poppins)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {content.headline}{" "}
              <span className="relative inline-block">
                <span className="gradient-text">
                  {content.headlineHighlight}
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-brand-orange via-brand-orange/60 to-transparent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-500 text-base sm:text-lg mt-3 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Horizontal cards track — fills remaining vertical space */}
        <div className="flex-1 flex items-center w-full min-h-0 pb-10 sm:pb-14">
          <motion.div
            ref={trackRef}
            className="flex gap-5 sm:gap-7 pl-4 sm:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
            style={{ x }}
          >
            {content.results.map((result, i) => (
              <ResultCard key={result.name} result={result} index={i} />
            ))}

            {/* End spacer so last card has room */}
            <div className="flex-shrink-0 w-8 sm:w-16" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

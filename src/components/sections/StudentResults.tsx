"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  GraduationCap,
  TrendingUp,
  Award,
  BookOpen,
  Star,
} from "lucide-react";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import {
  studentResultsContent,
  type StudentResultsContent,
  type StudentResult,
} from "@/lib/content/student-results";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── icon rotation per card ─── */
const cardIcons = [Award, TrendingUp, GraduationCap, BookOpen, Star];

/* ─── grid placement classes (bento) ─── */
const gridPlacements = [
  "md:col-span-1 md:row-span-2", // tall left
  "md:col-span-1 md:row-span-1", // top middle
  "md:col-span-1 md:row-span-1", // top right
  "md:col-span-1 md:row-span-1", // bottom middle
  "md:col-span-1 md:row-span-1", // bottom right
];

/* ─── framer variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const headingWordVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─── decorative wavy underline SVG ─── */
function WavyUnderline() {
  return (
    <motion.svg
      viewBox="0 0 200 12"
      fill="none"
      className="absolute -bottom-3 left-0 w-full"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
    >
      <motion.path
        d="M2 8 C 30 2, 50 12, 80 6 S 130 0, 160 6 S 185 12, 198 4"
        stroke="#FF6B2B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

/* ─── decorative curved arrow SVG ─── */
function CurvedArrow() {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      fill="none"
      className="hidden lg:block w-16 h-16 text-brand-orange/60 flex-shrink-0"
      initial={{ opacity: 0, rotate: -20 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    >
      <motion.path
        d="M10 10 C 10 50, 40 70, 70 60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.path
        d="M60 55 L70 60 L62 68"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.3 }}
      />
    </motion.svg>
  );
}

/* ─── bento result card ─── */
function BentoResultCard({
  result,
  index,
  isFeatured,
}: {
  result: StudentResult;
  index: number;
  isFeatured: boolean;
}) {
  const Icon = cardIcons[index % cardIcons.length];

  return (
    <motion.div
      variants={cardVariants}
      className={`${gridPlacements[index]} group`}
    >
      <motion.div
        className={`relative h-full rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-default overflow-hidden
          ${
            isFeatured
              ? "bg-charcoal text-white"
              : "bg-brand-cream/60 border border-gray-100/80 text-gray-900"
          }`}
        whileHover={{
          y: -6,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        {/* Subtle gradient glow on hover */}
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
            ${
              isFeatured
                ? "bg-gradient-to-br from-brand-orange/20 via-transparent to-brand-sky/10"
                : "bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent"
            }`}
        />

        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Top — Title & description */}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold leading-tight mb-2 ${
                isFeatured ? "text-white" : "text-gray-900"
              }`}
            >
              {result.name}{" "}
              <span className="gradient-text font-extrabold">
                scored {result.cgpa}
              </span>
            </h3>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isFeatured ? "text-white/70" : "text-gray-500"
              }`}
            >
              {result.college}
            </p>
          </div>

          {/* Bottom — Icon */}
          <div className="flex items-end mt-6">
            <motion.div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                isFeatured
                  ? "bg-white/10 text-brand-orange group-hover:bg-white/20"
                  : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange/20"
              }`}
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          </div>
        </div>

        {/* Centered CGPA badge + engineer image for featured card */}
        {isFeatured && (
          <>
            <motion.div
              className="flex items-center justify-center gap-1.5 rounded-full bg-brand-orange/20 backdrop-blur-sm px-4 py-2 text-sm font-bold text-brand-orange mx-auto mt-4 w-fit relative z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
            >
              <Star className="h-3.5 w-3.5 fill-brand-orange" />
              Top CGPA
            </motion.div>

            {/* Engineer silhouette illustration */}
            <motion.div
              className="absolute bottom-0 right-2 w-32 h-40 sm:w-40 sm:h-48 pointer-events-none"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <svg
                viewBox="0 0 200 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-15 group-hover:opacity-25 transition-opacity duration-500"
              >
                {/* Head */}
                <circle cx="100" cy="42" r="28" fill="white" />
                {/* Graduation cap */}
                <path d="M60 30 L100 14 L140 30 L100 46 Z" fill="#FF6B2B" opacity="0.8" />
                <path d="M100 46 L100 58 M140 30 L140 50" stroke="#FF6B2B" strokeWidth="2" opacity="0.6" />
                {/* Body */}
                <path d="M70 80 C70 65, 130 65, 130 80 L135 170 L65 170 Z" fill="white" opacity="0.9" />
                {/* Arms */}
                <path d="M70 90 L40 140 L55 145" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
                <path d="M130 90 L155 130 L150 135" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
                {/* Book in hand */}
                <rect x="145" y="120" width="20" height="28" rx="2" fill="#FF6B2B" opacity="0.5" />
                {/* Legs */}
                <path d="M85 170 L80 245 L70 250 L95 250" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                <path d="M115 170 L120 245 L130 250 L105 250" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
              </svg>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── main section ─── */
interface StudentResultsProps {
  content?: StudentResultsContent;
}

export function StudentResults({
  content = studentResultsContent,
}: StudentResultsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  useInView(headingRef, { once: true, margin: "-60px" });

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".sr-stat-counter", {
        textContent: 0,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".sr-stats-row",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const headlineWords = content.headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 sm:py-28 overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-sky/5 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Header: Bento-style split layout ─── */}
        <div
          ref={headingRef}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-16 sm:mb-20"
        >
          {/* Left — Headline */}
          <div className="lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                <Award className="h-3.5 w-3.5" />
                {content.badgeLabel}
              </span>
            </motion.div>

            <h2
              className="text-fluid-3xl sm:text-fluid-4xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={headingWordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <span className="relative inline-block mt-1">
                <motion.span
                  className="gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {content.headlineHighlight}
                </motion.span>
                <WavyUnderline />
              </span>
            </h2>
          </div>

          {/* Curved arrow + Subtitle grouped closer */}
          <div className="flex items-start gap-4 lg:gap-6 flex-shrink-0">
            <CurvedArrow />

            {/* Right — Subtitle + mini stats */}
            <motion.div
              className="lg:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
              {content.subtitle}
            </p>

            {/* Mini stat row */}
            <div className="sr-stats-row flex gap-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  <span className="sr-stat-counter">{content.results.length}</span>+
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Top Scorers
                </p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-brand-orange">8.0+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Avg CGPA
                </p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>

        {/* ─── Bento Grid ─── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-5 auto-rows-[minmax(200px,auto)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {content.results.map((result, i) => (
            <BentoResultCard
              key={result.name}
              result={result}
              index={i}
              isFeatured={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

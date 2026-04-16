"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  BookOpenCheck,
  Gift,
  Layers,
  LayoutGrid,
  Globe,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import {
  whyStudentsTrustContent,
  type WhyStudentsTrustContent,
  type TrustReason,
} from "@/lib/content/why-students-trust";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, React.ReactNode> = {
  BookOpenCheck: <BookOpenCheck className="h-6 w-6" />,
  Gift: <Gift className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  LayoutGrid: <LayoutGrid className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
};

const accentStyles: Record<
  TrustReason["accent"],
  { border: string; icon: string; number: string; glow: string }
> = {
  orange: {
    border: "hover:border-brand-orange/40",
    icon: "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange/20",
    number: "text-brand-orange/15 group-hover:text-brand-orange/25",
    glow: "from-brand-orange/10 via-transparent to-transparent",
  },
  violet: {
    border: "hover:border-violet-400/40",
    icon: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20",
    number: "text-violet-400/15 group-hover:text-violet-400/25",
    glow: "from-violet-500/10 via-transparent to-transparent",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    icon: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
    number: "text-emerald-400/15 group-hover:text-emerald-400/25",
    glow: "from-emerald-500/10 via-transparent to-transparent",
  },
  sky: {
    border: "hover:border-sky-400/40",
    icon: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20",
    number: "text-sky-400/15 group-hover:text-sky-400/25",
    glow: "from-sky-500/10 via-transparent to-transparent",
  },
  rose: {
    border: "hover:border-rose-400/40",
    icon: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20",
    number: "text-rose-400/15 group-hover:text-rose-400/25",
    glow: "from-rose-500/10 via-transparent to-transparent",
  },
  amber: {
    border: "hover:border-amber-400/40",
    icon: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20",
    number: "text-amber-400/15 group-hover:text-amber-400/25",
    glow: "from-amber-500/10 via-transparent to-transparent",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const hoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 },
};

interface WhyStudentsTrustProps {
  content?: WhyStudentsTrustContent;
}

export function WhyStudentsTrust({
  content = whyStudentsTrustContent,
}: WhyStudentsTrustProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-60px" });

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".trust-heading-line", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-charcoal py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="trust-heading-line">
            <Badge variant="violet" className="mb-4">
              {content.badgeLabel}
            </Badge>
          </div>
          <h2
            className="trust-heading-line text-fluid-3xl font-bold max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span className="text-white">{content.headlinePrefix} </span>
            <span className="relative">
              <span className="text-brand-orange">
                {content.headlineHighlight}
              </span>
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-brand-orange via-brand-orange/60 to-transparent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
            </span>
          </h2>
        </div>

        {/* Reason cards — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.reasons.map((reason, i) => {
            const style = accentStyles[reason.accent];
            return (
              <motion.div
                key={reason.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <motion.div
                  className={`group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-7 transition-colors duration-300 ${style.border}`}
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative z-10">
                    {/* Number + Icon row */}
                    <div className="flex items-start justify-between mb-5">
                      <span
                        className={`text-5xl font-black leading-none tracking-tighter transition-colors duration-300 ${style.number}`}
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {reason.number}
                      </span>
                      <div
                        className={`rounded-xl p-2.5 transition-colors duration-300 ${style.icon}`}
                      >
                        {iconMap[reason.icon]}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-white/50">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

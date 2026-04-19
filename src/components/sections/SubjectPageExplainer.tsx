"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ClipboardList,
  FileText,
  ScrollText,
  PlayCircle,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import {
  subjectPageExplainerContent,
  type SubjectPageExplainerContent,
  type SubjectFeature,
} from "@/lib/content/subject-page-explainer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  ScrollText: <ScrollText className="h-6 w-6" />,
  PlayCircle: <PlayCircle className="h-6 w-6" />,
  Trophy: <Trophy className="h-6 w-6" />,
};

const accentStyles: Record<
  SubjectFeature["accent"],
  { border: string; icon: string; glow: string; line: string }
> = {
  orange: {
    border: "hover:border-brand-orange/40",
    icon: "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange/20",
    glow: "from-brand-orange/10 via-transparent to-transparent",
    line: "bg-brand-orange",
  },
  violet: {
    border: "hover:border-violet-400/40",
    icon: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20",
    glow: "from-violet-500/10 via-transparent to-transparent",
    line: "bg-violet-400",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    icon: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
    glow: "from-emerald-500/10 via-transparent to-transparent",
    line: "bg-emerald-400",
  },
  sky: {
    border: "hover:border-sky-400/40",
    icon: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20",
    glow: "from-sky-500/10 via-transparent to-transparent",
    line: "bg-sky-400",
  },
  rose: {
    border: "hover:border-rose-400/40",
    icon: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20",
    glow: "from-rose-500/10 via-transparent to-transparent",
    line: "bg-rose-400",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const hoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 },
};

interface SubjectPageExplainerProps {
  content?: SubjectPageExplainerContent;
}

export function SubjectPageExplainer({
  content = subjectPageExplainerContent,
}: SubjectPageExplainerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-60px" });

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".spe-heading-line", {
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
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16 max-w-3xl mx-auto">
          <div className="spe-heading-line">
            <Badge variant="violet" className="mb-4">
              {content.badgeLabel}
            </Badge>
          </div>

          <h2
            className="spe-heading-line text-fluid-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span className="text-white">{content.headlinePrefix} </span>
            <span className="relative inline-block">
              <span className="gradient-text">{content.headlineHighlight}</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-brand-orange via-brand-orange/60 to-transparent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
            </span>
          </h2>

          <p className="spe-heading-line text-white/50 text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.map((feature, i) => {
            const style = accentStyles[feature.accent];
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={i >= 3 ? "md:col-span-1 lg:col-span-1" : ""}
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
                    {/* Icon + accent line */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`rounded-xl p-2.5 transition-colors duration-300 ${style.icon}`}
                      >
                        {iconMap[feature.icon]}
                      </div>
                      <div
                        className={`h-px flex-1 ${style.line} opacity-20`}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-white/50">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note — future dynamic data hint */}
        <motion.p
          className="text-center text-white/30 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Subject pages are continuously updated with new materials every semester.
        </motion.p>
      </div>
    </section>
  );
}

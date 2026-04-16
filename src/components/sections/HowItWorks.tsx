"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CalendarCheck,
  Users,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import {
  howItWorksContent,
  type HowItWorksContent,
  type HowItWorksStep,
} from "@/lib/content/how-it-works";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, React.ReactNode> = {
  CalendarCheck: <CalendarCheck className="h-7 w-7" />,
  Users: <Users className="h-7 w-7" />,
  PlayCircle: <PlayCircle className="h-7 w-7" />,
  TrendingUp: <TrendingUp className="h-7 w-7" />,
};

const gradientStyles: Record<HowItWorksStep["gradient"], { card: string; icon: string; step: string; accent: string }> = {
  orange: {
    card: "bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100/60",
    icon: "bg-orange-100 text-brand-orange",
    step: "bg-brand-orange text-white shadow-lg shadow-brand-orange/30",
    accent: "from-brand-orange/30",
  },
  purple: {
    card: "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100/60",
    icon: "bg-violet-100 text-violet-600",
    step: "bg-violet-600 text-white shadow-lg shadow-violet-600/30",
    accent: "from-violet-500/30",
  },
  emerald: {
    card: "bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/60",
    icon: "bg-emerald-100 text-emerald-600",
    step: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30",
    accent: "from-emerald-500/30",
  },
  sky: {
    card: "bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100/60",
    icon: "bg-sky-100 text-sky-600",
    step: "bg-sky-600 text-white shadow-lg shadow-sky-600/30",
    accent: "from-sky-500/30",
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -6 },
};

interface HowItWorksProps {
  content?: HowItWorksContent;
}

export function HowItWorks({ content = howItWorksContent }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });
  const [activeWord, setActiveWord] = useState(-1);

  const DRAW_DURATION = 0.6;
  const HOLD_DURATION = 0.4;
  const FADE_DURATION = 0.25;
  const CYCLE_TIME = (DRAW_DURATION + HOLD_DURATION + FADE_DURATION) * 1000;

  const cycle = useCallback(() => {
    let i = 0;
    setActiveWord(0);
    const interval = setInterval(() => {
      i += 1;
      if (i < content.headlineWords.length) {
        setActiveWord(i);
      } else {
        clearInterval(interval);
        setActiveWord(-1);
      }
    }, CYCLE_TIME);
    return interval;
  }, [content.headlineWords.length, CYCLE_TIME]);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const interval = cycle();
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, [isInView, cycle]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".hiw-step", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <Badge variant="violet" className="mb-4 !bg-brand-orange/10">
            {content.badgeLabel}
          </Badge>
          <h2 className="text-fluid-3xl font-semibold max-w-3xl mx-auto" style={{ fontFamily: "var(--font-poppins)" }}>
            <span className="text-brand-orange block">{content.headlineHighlight}</span>
            <span className="block text-gray-900 mt-2">
              {content.headlineWords.map((word, i) => (
                <span key={word}>
                  <span className="relative inline-block px-1">
                    {word}
                    <AnimatePresence>
                      {activeWord === i && (
                        <motion.svg
                          key={`circle-${i}`}
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          fill="none"
                          overflow="visible"
                          className="absolute pointer-events-none"
                          style={{ left: "-10px", top: "-8px", width: "calc(100% + 20px)", height: "calc(100% + 16px)" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, transition: { duration: FADE_DURATION } }}
                        >
                          <title>Circle {word}</title>
                          <motion.ellipse
                            cx="50"
                            cy="50"
                            rx="48"
                            ry="45"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-brand-orange"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1.05 }}
                            transition={{
                              duration: DRAW_DURATION,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            }}
                            style={{ vectorEffect: "non-scaling-stroke" }}
                          />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </span>
                  {i < content.headlineWords.length - 1 && content.headlineSeparator}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.steps.map((step) => {
            const style = gradientStyles[step.gradient];
            return (
              <motion.div
                key={step.stepNumber}
                className="hiw-step"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <div className={`relative overflow-hidden rounded-3xl p-7 h-full ${style.card} shadow-sm hover:shadow-xl transition-shadow duration-300`}>
                  {/* Decorative gradient blob */}
                  <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${style.accent} to-transparent blur-3xl opacity-60 pointer-events-none`} />
                  <div className={`absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-tr ${style.accent} to-transparent blur-2xl opacity-40 pointer-events-none`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step badge + icon row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${style.step}`}>
                        {step.stepNumber}
                      </div>
                      <div className={`rounded-2xl p-3 ${style.icon} transition-colors`}>
                        {iconMap[step.icon]}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

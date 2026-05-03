"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import {
  whyUsPageContent,
  type SixReasonsContent,
} from "@/lib/content/why-us-page";

const headingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headingChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

interface SixReasonsSectionProps {
  content?: SixReasonsContent;
}

export function SixReasonsSection({
  content = whyUsPageContent.sixReasons,
}: SixReasonsSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-surface-muted py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-orange/[0.07] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={reduceMotion ? undefined : headingContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div className="mb-4" variants={reduceMotion ? undefined : headingChild}>
            <Badge variant="violet" className="!bg-brand-orange/10">
              {content.badgeLabel}
            </Badge>
          </motion.div>
          <motion.h2
            className="text-fluid-3xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-poppins)" }}
            variants={reduceMotion ? undefined : headingChild}
          >
            {content.heading}{" "}
            <span className="text-brand-orange">{content.headingHighlight}</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => (
            <motion.article
              key={item.title}
              custom={index}
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, margin: "-40px" }}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex gap-4 sm:gap-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-lg font-bold text-brand-orange"
                  style={{ fontFamily: "var(--font-poppins)" }}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

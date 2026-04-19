"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import {
  whereWeServeContent,
  type WhereWeServeContent,
} from "@/lib/content/where-we-serve";
import whatweserveImage from "@/assets/whatweserveImage.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const listItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

interface WhereWeServeProps {
  content?: WhereWeServeContent;
}

export function WhereWeServe({
  content = whereWeServeContent,
}: WhereWeServeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-60px" });

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".serve-heading-line", {
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
      className="relative bg-white py-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-orange/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="mb-16">
          <div className="serve-heading-line mb-4">
            <Badge variant="violet">{content.badgeLabel}</Badge>
          </div>
          <h2
            className="serve-heading-line text-fluid-3xl font-bold max-w-3xl"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span className="text-brand-orange">{content.headingHighlight}</span>{" "}
            <span className="text-gray-900">{content.headingSuffix}</span>
          </h2>
        </div>

        {/* Two-column layout: Image left, content card overlapping right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] max-h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={whatweserveImage}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </motion.div>

          {/* Right — Overlapping card */}
          <motion.div
            className="relative lg:-ml-16 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="rounded-2xl bg-white border border-gray-100 p-8 sm:p-10 shadow-glass-light">
              {/* Description paragraphs */}
              <div className="mb-8 space-y-4">
                {content.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Location list */}
              <div className="space-y-3">
                {content.locations.map((location, i) => (
                  <motion.div
                    key={location.number}
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange text-xs font-bold shrink-0">
                      {location.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-orange/60 shrink-0" />
                      <span className="text-sm font-semibold text-gray-900">
                        {location.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plus, X, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import { faqContent, type FaqContent } from "@/lib/content/faq";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FAQHomeProps {
  content?: FaqContent;
}

export function FAQHome({ content = faqContent }: FAQHomeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".faq-heading-line", {
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

      gsap.from(".faq-item", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const whatsappUrl = `https://wa.me/${content.ctaWhatsAppNumber.replace(/[^0-9]/g, "")}`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-charcoal py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left column — Heading + CTA card */}
          <div ref={headingRef} className="lg:sticky lg:top-28">
            <div className="faq-heading-line mb-4">
              <Badge variant="violet">{content.badgeLabel}</Badge>
            </div>
            <h2
              className="faq-heading-line text-fluid-3xl font-bold text-white mb-10"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {content.heading}{" "}
              <span className="text-brand-orange">{content.headingHighlight}</span>
            </h2>

            {/* CTA Card */}
            <div className="faq-heading-line rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {content.ctaHeading}
              </h3>
              <p className="text-sm leading-relaxed text-white/50 mb-5">
                {content.ctaDescription}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-brand-orange/50 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                {content.ctaButtonLabel}
              </a>
            </div>
          </div>

          {/* Right column — FAQ accordion */}
          <div className="faq-list space-y-3">
            {content.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className="faq-item"
                  initial={false}
                >
                  <button
                    onClick={() => toggle(i)}
                    className={`group flex w-full items-center justify-between rounded-xl border px-6 py-5 text-left transition-all duration-200 ${
                      isOpen
                        ? "bg-white/[0.08] border-brand-orange/20"
                        : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12]"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`pr-4 font-medium transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                        isOpen
                          ? "bg-brand-orange text-white"
                          : "bg-white/10 text-white/50 group-hover:bg-white/15"
                      }`}
                    >
                      {isOpen ? (
                        <X className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pt-2 pb-5 text-sm leading-relaxed text-white/60">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

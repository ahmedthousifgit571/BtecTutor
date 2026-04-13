"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { statsContent, type StatItem } from "@/lib/content/stats";
import { prefersReducedMotion } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface StatsMarqueeProps {
  stats?: StatItem[];
}

export function StatsMarquee({ stats = statsContent }: StatsMarqueeProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const duplicatedStats = [...stats, ...stats];

  return (
    <section ref={sectionRef} className="bg-charcoal py-6 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee [animation-duration:16s] md:[animation-duration:30s]">
        {duplicatedStats.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="stat-item flex items-center gap-3 px-8 shrink-0"
          >
            <span className="text-xl font-bold text-brand-orange">{stat.value}</span>
            <span className="text-sm text-white/40 whitespace-nowrap">{stat.label}</span>
            <span className="text-white/10 ml-4">|</span>
          </div>
        ))}
      </div>
    </section>
  );
}

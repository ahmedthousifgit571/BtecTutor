"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { WHY_US_FEATURES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { prefersReducedMotion } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  ClipboardCheck: <ClipboardCheck className="h-6 w-6" />,
  BarChart3: <BarChart3 className="h-6 w-6" />,
  MessageCircle: <MessageCircle className="h-6 w-6" />,
  Trophy: <Trophy className="h-6 w-6" />,
};

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".why-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
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

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="violet" className="mb-4 !bg-brand-orange/10">
            Why Choose Us
          </Badge>
          <h2 className="text-fluid-3xl font-bold text-gray-900">
            Everything You Need to{" "}
            <span className="gradient-text-dark">Succeed</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We combine experienced faculty, structured materials, and proven methods
            to deliver consistent results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="why-card group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="rounded-xl bg-brand-orange/5 p-3 text-brand-orange w-fit mb-4 group-hover:bg-brand-orange/10 transition-colors">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

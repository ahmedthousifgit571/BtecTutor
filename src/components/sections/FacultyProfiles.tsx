"use client";

import { useRef } from "react";
import { GraduationCap, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import type { FacultyProfile } from "@/lib/content/faculty";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FacultyProfilesSectionProps {
  title: string;
  note: string;
  profiles: FacultyProfile[];
}

export function FacultyProfilesSection({
  title,
  note,
  profiles,
}: FacultyProfilesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".faculty-profiles-header", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.fromTo(
        ".faculty-profile-card",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 92%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-brand-navy py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand-orange/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="faculty-profiles-header mb-10">
          <h2 className="mb-6 text-fluid-3xl font-bold text-white">{title}</h2>
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              <Sparkles className="h-3.5 w-3.5" />
              Internal Note
            </div>
            <p className="text-sm leading-relaxed text-white/75">{note}</p>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((member) => (
            <article
              key={member.id}
              className="faculty-profile-card group rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/45 hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              </div>

              <ul className="space-y-2 text-sm text-white/75">
                <li>
                  <span className="font-semibold text-white">Qualification:</span>{" "}
                  {member.qualification}
                </li>
                <li>
                  <span className="font-semibold text-white">Teaches:</span> {member.teaches}
                </li>
                <li>
                  <span className="font-semibold text-white">Experience:</span> {member.experience}
                </li>
              </ul>

              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70">
                {member.about}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

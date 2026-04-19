"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TrendingUp, Play, Users, Award } from "lucide-react";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import { courseGridContent, type CourseGridContent } from "@/lib/content/courses";
import courseImage from "@/assets/courseImage.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const statIconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  Play: <Play className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Award: <Award className="h-5 w-5" />,
};

interface CourseGridProps {
  content?: CourseGridContent;
}

export function CourseGrid({ content = courseGridContent }: CourseGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        ".course-image-wrapper",
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" }
      )
        .fromTo(
          ".course-content-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.4"
        )
        .fromTo(
          ".course-stat-item",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="course-image-wrapper flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <Image
                src={courseImage}
                alt="Student learning at BTEC Tutor"
                className="w-full h-auto object-contain"
                priority={false}
                placeholder="blur"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="course-text-content flex flex-col gap-6">
            <span className="course-content-item inline-flex self-start items-center rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-orange uppercase">
              {content.badgeLabel}
            </span>

            <h2 className="course-content-item text-fluid-3xl font-bold text-charcoal leading-tight">
              What We Teach —{" "}
              <span className="text-brand-orange">Choose Your Path</span>
            </h2>

            <p className="course-content-item text-base text-gray-500 leading-relaxed max-w-lg">
              {content.subtitle}
            </p>

            <Link
              href="/courses"
              className="course-content-item inline-flex self-start items-center gap-2 rounded-lg bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-brand-orange/40"
            >
              {content.exploreCta}
            </Link>

            {/* Stats Grid */}
            <div className="course-content-item grid grid-cols-2 gap-4 mt-4">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="course-stat-item flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    {statIconMap[stat.icon]}
                  </span>
                  <div>
                    <p className="text-lg font-bold text-charcoal leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
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
import dynamicGif from "@/assets/dynamicGif.gif";
import { WHY_US_FEATURES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
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

const GOOEY_TEXTS = [
  "Your Learning Path",
  "In Kerala",
  "Your Success Story",
  "Starts Here",
];

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const gifRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".why-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
          once: true,
        },
      });

      // GIF reveal + parallax
      const gifEl = gifRef.current;
      if (gifEl) {
        const img = gifEl.querySelector(".gif-image");
        const glow = gifEl.querySelector(".gif-glow");

        // clip-path reveal
        gsap.fromTo(
          gifEl,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gifEl,
              start: "top 85%",
              once: true,
            },
          }
        );

        // subtle parallax on scroll
        if (img) {
          gsap.to(img, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: gifEl,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        }

        // glow pulse on scroll
        if (glow) {
          gsap.fromTo(
            glow,
            { scale: 0.85, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gifEl,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="violet" className="mb-4 !bg-brand-orange/10">
            Who Are We?
          </Badge>
          <h2 className="text-fluid-3xl font-bold text-gray-900">
            Welcome To Btech Tutor -
          </h2>
          <div className="h-[60px] md:h-[80px] flex items-center justify-center mt-6">
            <GooeyText
              texts={GOOEY_TEXTS}
              morphTime={1}
              cooldownTime={0.25}
              className="w-full h-full"
              textClassName="text-fluid-2xl md:text-[36pt] font-bold text-brand-orange"
            />
          </div>
        </div>

        {/* Two-column: Text + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12">
          {/* Left: Paragraphs */}
          <div className="space-y-6 text-left">
            <p className="text-lg leading-relaxed text-gray-600">
              <a href="#" className="font-semibold text-brand-orange hover:underline transition-colors">BTech Tutor</a>{" "}
              is your trusted destination for the best BTech tuition in Kerala, helping students master engineering subjects
              through structured online classes and personal mentorship. With experienced faculty, focused{" "}
              <a href="#" className="font-semibold text-brand-orange hover:underline transition-colors">GATE coaching</a>,
              and result-oriented learning methods, we make engineering studies easier, smarter, and more successful.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              We proudly stand as one of the top{" "}
              <a href="#" className="font-semibold text-brand-orange hover:underline transition-colors">GATE</a>{" "}
              coaching centres in Kerala, offering flexible online programs that fit every student&apos;s pace and goal.
              Whether you&apos;re preparing for semester exams or national-level tests like{" "}
              <a href="#" className="font-semibold text-brand-orange hover:underline transition-colors">GATE</a>,
              we provide complete support to ensure you achieve your academic dreams.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              At{" "}
              <a href="#" className="font-semibold text-brand-orange hover:underline transition-colors">BTech Tutor</a>,
              our mission is clear —{" "}
              <em className="text-gray-700">
                empowering students to achieve excellence, nurturing innovation, and guiding future engineers toward impactful careers.
              </em>
            </p>
          </div>

          {/* Right: Animated GIF */}
          <div
            ref={gifRef}
            className="relative overflow-hidden rounded-3xl min-h-[300px]"
          >
            {/* Glowing background blob */}
            <div className="gif-glow absolute -inset-6 bg-gradient-to-tr from-brand-orange/25 via-brand-cream to-brand-orange/10 rounded-3xl blur-3xl" />
            <Image
              src={dynamicGif}
              alt="BTech Tutor dynamic illustration"
              className="gif-image absolute inset-0 z-10 w-full h-full object-cover rounded-2xl drop-shadow-2xl"
              unoptimized
              priority
            />
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

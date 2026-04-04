"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { FloatingObjects } from "./FloatingObjects";
import { VideoBackground } from "./VideoBackground";
import { prefersReducedMotion } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      /* ── Hero entrance animations (on page load) ── */
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Badge: scale 0.85→1, opacity 0→1
      tl.fromTo(
        ".hero-badge",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.3 }
      );

      // Headline: SplitText words animation (drop with random rotation)
      const split1 = new SplitText(line1Ref.current, { type: "words" });
      const split2 = new SplitText(line2Ref.current, { type: "words" });

      // Apply gradient + per-word glow to line 1 words
      (split1.words as HTMLElement[]).forEach((word) => {
        word.style.display = "inline-block";
        word.style.background = "linear-gradient(135deg, #FF6B2B, #FFAB40)";
        word.style.webkitBackgroundClip = "text";
        word.style.backgroundClip = "text";
        (word.style as unknown as Record<string, string>).webkitTextFillColor = "transparent";
        const text = word.textContent?.trim();
        if (text === "GATE") {
          word.style.filter = "drop-shadow(0 0 80px rgba(255,107,43,0.3))";
        } else if (text === "KTU") {
          word.style.filter = "drop-shadow(0 0 80px rgba(56,189,248,0.3))";
        }
      });

      (split2.words as HTMLElement[]).forEach((word) => {
        word.style.display = "inline-block";
      });

      // Line 1: words drop from above with random rotation
      tl.from(
        split1.words,
        {
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          duration: 0.7,
          ease: "back",
          stagger: 0.15,
        },
        0.5
      );

      // Line 2: words drop from above with random rotation (slight delay)
      tl.from(
        split2.words,
        {
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          duration: 0.7,
          ease: "back",
          stagger: 0.15,
        },
        "-=0.3"
      );

      // Subtext
      tl.fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.0
      );

      // Micro-stats row
      tl.fromTo(
        ".hero-micro-stats",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        1.1
      );

      // CTA buttons: scale 0.9→1
      tl.fromTo(
        ".hero-cta-btn",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
        1.2
      );

      // Floating glass elements: entrance from edges
      tl.fromTo(
        ".float-element",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.1 },
        0.8
      );

      // Stats grid
      tl.fromTo(
        ".hero-stats",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        1.4
      );

      /* ── ScrollTrigger: Hero parallax ── */
      if (sectionRef.current && contentRef.current) {
        // Hero text moves up at 0.6x speed
        gsap.to(contentRef.current, {
          yPercent: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* ── ScrollTrigger: Video scale 1→1.08 ── */
      if (videoRef.current) {
        // Video parallax: moves at 0.4x speed
        gsap.to(videoRef.current, {
          yPercent: 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.fromTo(
          videoRef.current,
          { scale: 1 },
          {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );


  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden bg-charcoal"
      style={{ height: "100vh" }}
    >
      {/* Background video */}
      <VideoBackground ref={videoRef} />

      {/* Floating glass objects */}
      <FloatingObjects />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-32 pb-16"
        style={{ zIndex: 10 }}
      >
        <div className="hero-badge inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/70">Admissions Open 2025-26</span>
        </div>

        <h1
          className="font-bold tracking-tight text-balance"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", lineHeight: 1.1, perspective: 500 }}
        >
          <span ref={line1Ref}>
            Master GATE &amp; KTU
          </span>
          <br />
          <span ref={line2Ref} className="text-white">
            with Kerala&apos;s Best Coaching
          </span>
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-fluid-lg text-white/50 text-balance">
          Expert faculty, comprehensive study materials, 5,000+ successful students.
          Join the institute that transforms engineering students into toppers.
        </p>

        {/* Micro-stats row */}
        <p className="hero-micro-stats mt-4 text-white/50" style={{ fontSize: "0.85rem" }}>
          5,000+ Students&nbsp;&nbsp;|&nbsp;&nbsp;10+ Years&nbsp;&nbsp;|&nbsp;&nbsp;95% Success Rate
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="hero-cta-btn shimmer-border inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-3.5 text-base font-medium text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="hero-stats mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "5,000+", label: "Students" },
            { value: "92%", label: "Success Rate" },
            { value: "15+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" style={{ zIndex: 10 }} />
    </section>
  );
}

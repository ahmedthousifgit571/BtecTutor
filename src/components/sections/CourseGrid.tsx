"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Cpu, Zap, Gauge, Code, Wrench, Building2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import BorderGlow from "@/components/ui/BorderGlow";
import TextPressure from "@/components/ui/TextPressure";
import { prefersReducedMotion } from "@/lib/gsap-utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Gauge: <Gauge className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Building2: <Building2 className="h-6 w-6" />,
};

const courses = [
  {
    title: "GATE ECE",
    slug: "/gate-coaching/ece",
    description: "Electronics & Communication Engineering — Network Theory, Signals & Systems, Digital Electronics",
    icon: "Cpu",
    badge: "Popular",
    subjects: 15,
  },
  {
    title: "GATE EEE",
    slug: "/gate-coaching/eee",
    description: "Electrical & Electronics Engineering — Power Systems, Control Systems, Electric Circuits",
    icon: "Zap",
    badge: null,
    subjects: 12,
  },
  {
    title: "GATE Instrumentation",
    slug: "/gate-coaching/instrumentation",
    description: "Instrumentation Engineering — Transducers, Process Control, Analog Electronics",
    icon: "Gauge",
    badge: null,
    subjects: 10,
  },
  {
    title: "KTU CSE",
    slug: "/ktu/2024/computer-science",
    description: "Computer Science & Engineering — Data Structures, OS, DBMS for KTU 2024 scheme",
    icon: "Code",
    badge: "New Scheme",
    subjects: 20,
  },
  {
    title: "KTU Mechanical",
    slug: "/ktu/2024/mechanical",
    description: "Mechanical Engineering — Thermodynamics, Fluid Mechanics, Machine Design",
    icon: "Wrench",
    badge: null,
    subjects: 18,
  },
  {
    title: "KTU Civil",
    slug: "/ktu/2024/civil",
    description: "Civil Engineering — Structural Analysis, Geotechnical Engineering, Surveying",
    icon: "Building2",
    badge: null,
    subjects: 16,
  },
];

export function CourseGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".course-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
    <section ref={sectionRef} className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="violet" className="mb-4">Our Courses</Badge>
          <div style={{ position: 'relative', height: '120px' }} className="max-w-4xl mx-auto">
            <TextPressure
              text="Choose Your Path to Success"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#FFAB40"
              minFontSize={36}
              getCharColor={(index) => index < 12 ? '#ffffff' : '#FF6B2B'}
            />
          </div>
          <p className="mt-4 text-lg text-white/40 max-w-2xl mx-auto">
            Comprehensive coaching programs designed by experts with proven track records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.slug} href={course.slug} className="course-card group">
              <BorderGlow
                className="h-full"
                edgeSensitivity={30}
                glowColor="30 90 65"
                backgroundColor="#0A1628"
                borderRadius={16}
                glowRadius={35}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#FF6B2B', '#FFAB40', '#38bdf8']}
              >
                <GlassCard className="h-full flex flex-col !border-0 !bg-transparent !shadow-none !backdrop-filter-none" hover={false}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-xl bg-brand-orange/10 p-3 text-brand-orange">
                      {iconMap[course.icon]}
                    </div>
                    {course.badge && <Badge variant="sky">{course.badge}</Badge>}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-white/40 flex-1 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-white/30">
                      {course.subjects} subjects
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </GlassCard>
              </BorderGlow>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

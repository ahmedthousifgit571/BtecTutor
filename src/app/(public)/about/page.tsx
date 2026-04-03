import type { Metadata } from "next";
import { GraduationCap, Target, Users, Award } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = generateMeta({
  title: "About BTEC Tutor — Kerala's Leading Engineering Coaching",
  description:
    "Learn about BTEC Tutor, Kerala's premier GATE and KTU coaching institute. 15+ years of excellence, 5,000+ successful students, and a passion for engineering education.",
  canonicalUrl: "/about",
});

const milestones = [
  { year: "2010", event: "Founded in Kochi with 3 faculty members and a vision to democratize GATE coaching in Kerala." },
  { year: "2013", event: "Expanded to Trivandrum with growing demand. First batch of 50+ GATE qualifiers." },
  { year: "2016", event: "Launched KTU coaching programs. Student count crossed 1,000." },
  { year: "2019", event: "Introduced online learning platform. Partnered with leading publishers for study materials." },
  { year: "2022", event: "Expanded to 3 centers across Kerala. Launched mobile app for students." },
  { year: "2024", event: "5,000+ students coached. 92% success rate. KTU 2024 scheme materials launched." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "About", url: "/about" }]} className="mb-8" />

        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text-dark">BTEC Tutor</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Since 2010, BTEC Tutor has been shaping the careers of engineering
            students across Kerala. We combine decades of teaching expertise
            with modern pedagogy to help students excel in GATE examinations and
            KTU university exams.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <GraduationCap className="h-6 w-6" />,
              title: "Expert Faculty",
              desc: "Our faculty comprises GATE-qualified professionals with decades of teaching experience.",
            },
            {
              icon: <Target className="h-6 w-6" />,
              title: "Result Oriented",
              desc: "Structured approach focused on maximizing scores with strategic preparation.",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "5,000+ Students",
              desc: "A growing community of successful engineers who started their journey here.",
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "92% Success Rate",
              desc: "Consistently high pass rates across GATE and KTU examinations.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="rounded-xl bg-brand-orange/5 p-3 w-fit text-brand-orange mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="rounded-2xl bg-charcoal p-10 md:p-16 mb-20">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            To make world-class GATE and KTU coaching accessible to every
            engineering student in Kerala, regardless of location or background.
            We believe that the right guidance, at the right time, can transform
            careers and lives.
          </p>
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h2>
        <div className="space-y-6 max-w-2xl">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-6">
              <div className="shrink-0 w-16">
                <span className="text-sm font-bold text-brand-orange">{m.year}</span>
              </div>
              <div className="pb-6 border-l-2 border-gray-100 pl-6 relative">
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-brand-orange" />
                <p className="text-sm text-gray-600 leading-relaxed">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

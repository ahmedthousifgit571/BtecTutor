import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Zap, Gauge } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { GATE_BRANCHES } from "@/lib/constants";

export const metadata: Metadata = generateMeta({
  title: "GATE Coaching in Kerala — ECE, EEE, Instrumentation",
  description:
    "Comprehensive GATE coaching for ECE, EEE, and Instrumentation branches. Expert faculty, study materials, mock tests, and previous year question solutions.",
  keywords: ["GATE coaching Kerala", "GATE ECE", "GATE EEE", "GATE Instrumentation"],
  canonicalUrl: "/gate-coaching",
});

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Gauge: <Gauge className="h-8 w-8" />,
};

export default function GateCoachingHub() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "GATE Coaching", url: "/gate-coaching" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            GATE Coaching Programs
          </h1>
          <p className="text-lg text-gray-500">
            Choose your branch and access comprehensive study materials, expert-led
            lectures, mock tests, and previous year question analysis. Our
            structured approach has helped 800+ students crack GATE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {GATE_BRANCHES.map((branch) => (
            <Link
              key={branch.slug}
              href={`/gate-coaching/${branch.slug}`}
              className="group rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="rounded-2xl bg-brand-orange/5 p-4 w-fit text-brand-orange mb-6 group-hover:bg-brand-orange/10 transition-colors">
                {iconMap[branch.icon]}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
                GATE {branch.shortTitle}
              </h2>
              <p className="text-sm text-gray-500 mb-6">{branch.title}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all">
                View Subjects <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PlayCircle, Check } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = generateMeta({
  title: "Free Demo Class — Try Before You Join",
  description:
    "Attend a free demo class at BTEC Tutor. Experience our teaching methodology, interact with faculty, and see why students love our coaching.",
  canonicalUrl: "/free-demo",
});

export default function FreeDemoPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Free Demo", url: "/free-demo" }]} className="mb-8" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/5 px-4 py-2 mb-6">
              <PlayCircle className="h-4 w-4 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange">Free Demo Available</span>
            </div>

            <h1 className="text-fluid-3xl font-bold text-gray-900 mb-6">
              Experience Our <span className="gradient-text-dark">Teaching</span> First
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Not sure if our coaching is right for you? Attend a free demo
              class and experience our methodology firsthand. No commitments,
              no pressure — just great teaching.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Interactive session with expert faculty",
                "Experience our structured teaching methodology",
                "Get personalized preparation roadmap",
                "Access sample study materials",
                "Q&A session with current toppers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-surface-muted p-6">
              <p className="text-sm font-medium text-gray-900 mb-1">Next Demo Session</p>
              <p className="text-sm text-gray-500">
                Every Saturday, 10:00 AM — Available both online and at our centers
              </p>
            </div>
          </div>

          <div>
            <LeadForm variant="card" />
          </div>
        </div>
      </div>
    </div>
  );
}

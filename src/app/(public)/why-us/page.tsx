import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateMeta, buildFaqSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhyUs } from "@/components/sections/WhyUs";
import { SixReasonsSection } from "@/components/sections/SixReasonsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { whyUsPageContent } from "@/lib/content/why-us-page";
import { STATS } from "@/lib/constants";

export const metadata: Metadata = generateMeta({
  title: "Why Choose BTEC Tutor — Our Advantages",
  description:
    "Discover why 5,000+ students choose BTEC Tutor. Expert faculty, comprehensive materials, proven results, and personalized coaching.",
  canonicalUrl: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(whyUsPageContent.faq.items)} />

      <div className="pt-24 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          <Breadcrumb items={[{ name: "Why Us", url: "/why-us" }]} className="mb-8" />

          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text-dark">BTEC Tutor</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            We don&apos;t just teach — we build confidence, develop problem-solving skills, and create exam-ready engineers.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-charcoal py-12 mb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WhyUs />

        <SixReasonsSection content={whyUsPageContent.sixReasons} />

        <FAQSection content={whyUsPageContent.faq} />

        {/* CTA */}
        <section className="bg-surface-muted py-20">
          <div className="mx-auto max-w-2xl text-center px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-500 mb-8">
              Join thousands of successful engineers who started their journey with us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-medium text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/25 transition-all"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

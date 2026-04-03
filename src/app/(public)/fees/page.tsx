import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = generateMeta({
  title: "Fee Structure — GATE & KTU Coaching Programs",
  description:
    "Affordable fee structure for GATE and KTU coaching at BTEC Tutor. Flexible payment options, scholarships available. Contact us for detailed pricing.",
  canonicalUrl: "/fees",
});

const plans = [
  {
    name: "KTU Semester",
    price: "Contact Us",
    period: "per semester",
    description: "Perfect for KTU students looking for semester-wise coaching",
    features: [
      "Subject-wise notes & materials",
      "Previous year question solutions",
      "Regular class tests",
      "Doubt clearing sessions",
      "Access to online portal",
    ],
    cta: "Get Quote",
    popular: false,
  },
  {
    name: "GATE Complete",
    price: "Contact Us",
    period: "full program",
    description: "Comprehensive GATE preparation with complete subject coverage",
    features: [
      "All subjects covered",
      "1,200+ practice problems",
      "Full-length mock tests",
      "Personal mentor",
      "Video lectures access",
      "Doubt clearing — unlimited",
      "Performance analytics",
      "Interview preparation",
    ],
    cta: "Get Quote",
    popular: true,
  },
  {
    name: "GATE Subject-wise",
    price: "Contact Us",
    period: "per subject",
    description: "Pick specific subjects to focus on for GATE preparation",
    features: [
      "Single subject deep-dive",
      "Detailed study material",
      "Subject mock tests",
      "PYQ analysis",
      "Video lectures",
    ],
    cta: "Get Quote",
    popular: false,
  },
];

export default function FeesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Fees", url: "/fees" }]} className="mb-8" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent{" "}
            <span className="gradient-text-dark">Pricing</span>
          </h1>
          <p className="text-lg text-gray-500">
            Choose the plan that fits your needs. All plans include access to
            our online portal and study materials. Scholarships available for
            deserving students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-brand-orange bg-white shadow-xl shadow-brand-orange/5 relative"
                  : "border-gray-100 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-400 ml-1">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/25"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

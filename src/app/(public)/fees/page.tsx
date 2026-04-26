import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Check } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { feesPageContent } from "@/lib/content/fees-page";

export const metadata: Metadata = generateMeta({
  title: feesPageContent.seo.title,
  description: feesPageContent.seo.description,
  canonicalUrl: "/fees",
});

export default function FeesPage() {
  const feesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "BTechTutor Coaching Fees and Pricing",
        serviceType: "KTU, GATE, ISRO and One-to-One Coaching",
        provider: {
          "@type": "EducationalOrganization",
          name: "BTechTutor",
          url: "https://btechtutor.com",
        },
        areaServed: "Kerala",
        url: "https://btechtutor.com/fees/",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "BTechTutor Pricing Plans",
          itemListElement: feesPageContent.plans.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            description: `Best for: ${plan.bestFor}. Includes: ${plan.includes.join(", ")}.`,
            url: `https://btechtutor.com${plan.ctaHref}`,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "INR",
              description: plan.fee,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: feesPageContent.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="fees-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(feesSchema) }}
      />

      <div className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Fees", url: "/fees" }]} className="mb-8" />

          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h1 className="mb-6 text-fluid-3xl font-bold text-gray-900">
              <span className="text-brand-orange">{feesPageContent.h1Accent}</span>{" "}
              {feesPageContent.h1Rest}
            </h1>
            <div className="space-y-4">
              {feesPageContent.introduction.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <section className="mb-14">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {feesPageContent.plans.map((plan, index) => (
                <article
                  key={plan.name}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-orange/15 bg-white p-7 shadow-[0_10px_24px_-20px_rgba(255,107,43,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/35 hover:shadow-[0_22px_45px_-24px_rgba(255,107,43,0.6)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-orange-300" />
                  <div className="mb-4 inline-flex w-fit rounded-full border border-brand-orange/25 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                    Plan {index + 1}
                  </div>
                  <h2 className="mb-3 text-xl font-semibold text-gray-900">{plan.name}</h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-900">Best for:</span> {plan.bestFor}
                  </p>
                  <div className="mb-5 rounded-2xl border border-brand-orange/15 bg-gradient-to-r from-brand-orange/10 to-orange-100/70 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                      Fee
                    </p>
                    <p className="text-sm font-medium text-gray-700">{plan.fee}</p>
                  </div>
                  <p className="mb-3 text-sm font-semibold text-gray-900">Includes</p>
                  <ul className="mb-7 flex-1 space-y-2.5">
                    {plan.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark"
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-charcoal p-7 sm:p-10">
            <h2 className="mb-6 text-fluid-3xl font-bold text-white">
              What Is <span className="text-brand-orange">Always Included</span> in Every
              Plan
            </h2>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {feesPageContent.alwaysIncludedItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-relaxed text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <FAQSection content={feesPageContent.faq} />
    </>
  );
}

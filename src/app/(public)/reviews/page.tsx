import type { Metadata } from "next";
import Script from "next/script";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { reviewsPageContent } from "@/lib/content/reviews-page";

export const metadata: Metadata = generateMeta({
  title: reviewsPageContent.seo.title,
  description: reviewsPageContent.seo.description,
  canonicalUrl: "/reviews",
});

export const revalidate = 3600;

export default function ReviewsPage() {
  const reviewCount = reviewsPageContent.writtenTestimonials.length;
  const reviewsFaqContent = {
    badgeLabel: "FAQs",
    heading: "Questions Students Ask About",
    headingHighlight: "BTechTutor Reviews",
    ctaHeading: "Want to verify anything before joining?",
    ctaDescription:
      "You can speak directly with our team and ask about results, subjects, or preparation strategy.",
    ctaButtonLabel: "Chat on WhatsApp",
    ctaWhatsAppNumber: "+919895006772",
    items: reviewsPageContent.faqs,
  };
  const reviewSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AggregateRating",
        itemReviewed: {
          "@type": "EducationalOrganization",
          name: "BTechTutor",
          url: "https://btechtutor.com",
        },
        ratingValue: "4.9",
        reviewCount: String(reviewCount),
      },
      ...reviewsPageContent.writtenTestimonials.map((testimonial) => ({
        "@type": "Review",
        reviewBody: testimonial.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        itemReviewed: {
          "@type": "EducationalOrganization",
          name: "BTechTutor",
        },
        author: {
          "@type": "Person",
          name: testimonial.author,
        },
      })),
    ],
  };

  return (
    <>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Reviews", url: "/reviews" }]} className="mb-8" />

          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-fluid-3xl font-bold text-gray-900 mb-6 text-center">
              <span className="text-brand-orange">BTechTutor Reviews</span> — Real Students. Real
              Results. Real Words.
            </h1>
            <div className="relative overflow-hidden rounded-3xl border border-brand-orange/20 bg-gradient-to-br from-orange-50 via-white to-gray-50 p-6 sm:p-10">
              <div className="absolute -top-12 -right-10 h-36 w-36 rounded-full bg-brand-orange/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative">
                <p className="inline-flex rounded-full border border-brand-orange/25 bg-brand-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  {reviewsPageContent.introEyebrow}
                </p>
                <h2 className="text-2xl font-bold text-brand-orange mt-4 mb-4">
                  {reviewsPageContent.introduction.heading}
                </h2>
                <div className="space-y-4">
                  {reviewsPageContent.introduction.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mb-14 -mx-4 sm:-mx-6 lg:-mx-8 bg-charcoal py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-brand-orange">{reviewsPageContent.cgpaResultsHeading}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reviewsPageContent.cgpaResults.map((result) => (
                  <article
                    key={`${result.name}-${result.cgpa}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30"
                  >
                    <p className="text-lg font-semibold text-white">{result.name}</p>
                    <p className="text-sm text-brand-orange font-semibold mt-1">CGPA {result.cgpa}</p>
                    <p className="text-sm text-white/60 mt-2">{result.college}</p>
                    {result.story ? (
                      <p className="text-sm text-white/70 mt-3 leading-relaxed">{result.story}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="text-brand-orange">{reviewsPageContent.writtenTestimonialsHeading}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviewsPageContent.writtenTestimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <p className="text-gray-600 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mt-5">{testimonial.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <FAQSection content={reviewsFaqContent} />
    </>
  );
}

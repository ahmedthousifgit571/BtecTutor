import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  Mail,
  ChevronRight,
  Home,
  Sparkles,
} from "lucide-react";
import { absoluteUrl } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { FAQSection } from "@/components/sections/FAQ";
import {
  LOCATION_CONTACT,
  type LocationPageContent,
} from "@/lib/content/location-pages";

interface LocationContentPageProps {
  content: LocationPageContent;
}

function buildLocalBusiness(content: LocationPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl(content.path),
    name: `BTechTutor — ${content.city}`,
    description: content.metaDescription,
    url: absoluteUrl(content.path),
    telephone: `+${LOCATION_CONTACT.whatsappNumber}`,
    email: LOCATION_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: content.city,
      addressRegion: content.city === "UAE" ? "UAE" : "Kerala",
      addressCountry: content.city === "UAE" ? "AE" : "IN",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250",
    },
  };
}

export function LocationContentPage({ content }: LocationContentPageProps) {
  const whatsappHref = `https://wa.me/${LOCATION_CONTACT.whatsappNumber}`;
  const breadcrumbLabel =
    content.category === "gate"
      ? "GATE Coaching in Kerala"
      : `KTU Coaching in ${content.city}`;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/ktu-coaching" },
    { name: breadcrumbLabel, url: content.path },
  ];

  return (
    <>
      <JsonLd data={buildLocalBusiness(content)} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      {/* ── Hero band ── */}
      <section className="relative overflow-hidden bg-brand-navy pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-brand-orange/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-sky/10 blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm">
            {breadcrumbItems.map((item, i) => {
              const isLast = i === breadcrumbItems.length - 1;
              return (
                <span key={item.url} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/30" />}
                  {isLast ? (
                    <span className="truncate font-medium text-white/90">{item.name}</span>
                  ) : (
                    <Link
                      href={item.url}
                      className="text-white/50 transition-colors hover:text-white"
                    >
                      {i === 0 ? <Home className="h-4 w-4" /> : item.name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-brand-orange" />
            {content.category === "gate" ? "GATE Coaching" : "KTU Coaching"} · {content.city}
          </span>

          <h1 className="mt-6 text-fluid-2xl font-bold leading-[1.15] text-white">
            {content.h1}
          </h1>

          <div className="mt-5 space-y-4">
            {content.intro.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-white/70 sm:text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-orange/25 transition-colors hover:bg-brand-orange-dark"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* What We Offer */}
          <section className="pt-16">
            <h2 className="text-2xl font-bold text-gray-900">{content.offersHeading}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.offers.map((offer, i) => (
                <div
                  key={offer.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_-12px_rgba(255,107,43,0.25)]"
                >
                  <span
                    aria-hidden
                    className="absolute right-4 top-2 text-5xl font-black text-gray-100 transition-colors group-hover:text-brand-orange/10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 text-white shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 text-base font-semibold text-gray-900">
                    {offer.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-gray-500">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section className="pt-16">
            <div className="relative overflow-hidden rounded-3xl border border-brand-orange/10 bg-brand-cream p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl" />
              <h2 className="relative text-2xl font-bold text-gray-900">{content.whyHeading}</h2>
              <ul className="relative mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {content.whyBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How To Get Started */}
          <section className="pt-16">
            <h2 className="text-2xl font-bold text-gray-900">How to Get Started?</h2>
            <ol className="relative mt-8 space-y-6 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-brand-orange/40 before:to-transparent">
              {content.howToStart.map((step, i) => (
                <li key={i} className="relative flex items-start gap-4">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-gray-600">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <FAQSection faqs={content.faqs} className="pt-16" variant="light" />

          {/* CTA */}
          <section className="mt-16 mb-4">
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-12 text-center sm:px-10">
              <div className="absolute inset-0 bg-hero-gradient" />
              <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-brand-orange/20 blur-[90px]" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-sky/10 blur-[90px]" />

              <div className="relative">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{content.ctaHeading}</h2>
                <p className="mx-auto mt-3 max-w-2xl text-white/70">{content.ctaSubtext}</p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-orange/25 transition-colors hover:bg-brand-orange-dark"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60 sm:flex-row">
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-brand-orange" />
                    Call or WhatsApp: {LOCATION_CONTACT.whatsappDisplay}
                  </span>
                  <a
                    href={`mailto:${LOCATION_CONTACT.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-brand-orange" />
                    {LOCATION_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

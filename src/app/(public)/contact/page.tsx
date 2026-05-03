import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { generateMeta, buildFaqSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactEnquiryForm } from "@/components/sections/ContactEnquiryForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { contactPageContent } from "@/lib/content/contact-page";
import { absoluteUrl, getBaseUrl } from "@/lib/utils";
import contactImage from "@/assets/contactImage.png";

export const metadata: Metadata = generateMeta({
  title: contactPageContent.seo.title,
  description: contactPageContent.seo.description,
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${absoluteUrl("/contact")}#localbusiness`,
        name: "BTechTutor",
        url: absoluteUrl("/contact"),
        telephone: "+91 98950 06772",
        email: "help.btechtutorkerala@gmail.com",
        areaServed: [
          "Kerala",
          "UAE",
          "Dubai",
          "Qatar",
          "Gulf Countries",
        ],
        description: contactPageContent.seo.description,
      },
      {
        "@type": "ContactPage",
        "@id": `${absoluteUrl("/contact")}#contactpage`,
        name: contactPageContent.h1,
        url: absoluteUrl("/contact"),
        description: contactPageContent.seo.description,
        mainEntity: {
          "@type": "Organization",
          name: "BTechTutor",
          url: getBaseUrl(),
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91 98950 06772",
              contactType: "customer service",
              email: "help.btechtutorkerala@gmail.com",
              availableLanguage: ["English", "Malayalam"],
              areaServed: ["IN", "AE", "QA"],
            },
          ],
        },
      },
      buildFaqSchema(contactPageContent.faq.items),
    ],
  };

  return (
    <>
      <JsonLd data={contactSchema} />

      <div className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Contact", url: "/contact" }]} className="mb-8" />

          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
              <div className="absolute -right-12 top-14 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  <MessageCircle className="h-3.5 w-3.5" />
                  We&apos;re here to help
                </div>
                <h1 className="text-fluid-3xl font-bold leading-tight text-white">
                  <span className="text-brand-orange">Contact BTechTutor</span> <br />
                  Enrol Today or Ask Anything
                </h1>
                <div className="mt-5 space-y-3">
                  {contactPageContent.introduction.map((paragraph) => (
                    <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+919895006772"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Enrol Now
                  </a>
                  <a
                    href="https://wa.me/919895006772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:text-brand-orange"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { title: "Quick Response", subtitle: "Usually within a few hours" },
                    { title: "Trusted by Students", subtitle: "Across Kerala and Gulf" },
                    { title: "Expert Guidance", subtitle: "Right plan for your goal" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-white/55">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
                  <Image
                    src={contactImage}
                    alt="Contact BTechTutor support"
                    className="h-auto w-full rounded-xl object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+919895006772"
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-brand-orange/40"
                  >
                    <p className="text-xs text-white/50">Prefer talking?</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-white">
                      <PhoneCall className="h-4 w-4 text-brand-orange" />
                      +91 98950 06772
                    </p>
                  </a>
                  <a
                    href="mailto:help.btechtutorkerala@gmail.com"
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-brand-orange/40"
                  >
                    <p className="text-xs text-white/50">Email us</p>
                    <p className="mt-1 flex items-start gap-2 text-sm font-medium text-white">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                      <span className="break-all">help.btechtutorkerala@gmail.com</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-black/5">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">Contact Details</h2>
                <ul className="space-y-4">
                  {contactPageContent.contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-lg bg-brand-orange/10 p-2 text-brand-orange">
                        {item.label === "Phone / WhatsApp" && <PhoneCall className="h-4 w-4" />}
                        {item.label === "Email" && <Mail className="h-4 w-4" />}
                        {item.label === "Response time" && <Clock3 className="h-4 w-4" />}
                        {item.label === "Serving" && <MessageCircle className="h-4 w-4" />}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 hover:text-brand-orange"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm leading-relaxed text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">{contactPageContent.processHeading}</h2>
                <ol className="space-y-3">
                  {contactPageContent.processSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <ContactEnquiryForm content={contactPageContent.formContent} theme="dark" />
          </section>
        </div>
      </div>

      <FAQSection content={contactPageContent.faq} />
    </>
  );
}

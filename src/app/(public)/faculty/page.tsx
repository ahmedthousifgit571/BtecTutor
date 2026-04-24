import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/sections/FAQ";
import { FacultyProfilesSection } from "@/components/sections/FacultyProfiles";
import { facultyPageContent, type FacultyPageContent } from "@/lib/content/faculty";
import facultyImage from "@/assets/faculty.png";

export const metadata: Metadata = generateMeta({
  title: facultyPageContent.meta.title,
  description: facultyPageContent.meta.description,
  canonicalUrl: facultyPageContent.meta.canonicalUrl,
});

async function getFacultyPageData(): Promise<FacultyPageContent> {
  // API-ready structure:
  // replace this return with a fetch call once faculty CMS endpoints are available.
  return facultyPageContent;
}

export default async function FacultyPage() {
  const content = await getFacultyPageData();
  const heroTitlePrefix = "Meet the BTechTutor Faculty -";
  const heroTitleSuffix = content.hero.heading.replace(heroTitlePrefix, "").trim();

  const facultySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "BTechTutor",
        url: "https://btechtutor.com",
      },
      {
        "@type": "ProfessionalService",
        name: "BTechTutor Engineering Coaching",
        provider: {
          "@type": "Organization",
          name: "BTechTutor",
        },
        areaServed: "Kerala, India",
        serviceType: ["KTU Coaching", "GATE Coaching", "ISRO Exam Coaching"],
      },
      ...content.profiles.items.map((member) => ({
        "@type": "Person",
        name: member.name,
        description: `${member.qualification}. Teaches: ${member.teaches}. Experience: ${member.experience}.`,
        worksFor: {
          "@type": "Organization",
          name: "BTechTutor",
        },
      })),
    ],
  };

  return (
    <>
      <JsonLd data={facultySchema} />

      <section className="bg-white pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ name: content.breadcrumbLabel, url: "/faculty" }]}
            className="mb-8"
          />
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <h1
                className="text-fluid-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-poppins), var(--font-montserrat), sans-serif" }}
              >
                <span className="text-brand-orange">{heroTitlePrefix}</span>{" "}
                {heroTitleSuffix}
              </h1>
              <div className="space-y-4">
                {content.hero.introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-3 shadow-[0_24px_50px_-30px_rgba(13,23,43,0.35)]">
                <div className="pointer-events-none absolute inset-x-10 -top-16 h-40 rounded-full bg-brand-orange/20 blur-3xl" />
                <Image
                  src={facultyImage}
                  alt="BTechTutor faculty team"
                  className="relative h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-fluid-3xl font-bold text-white mb-10"
              style={{ fontFamily: "var(--font-poppins), var(--font-montserrat), sans-serif" }}
            >
              {content.differentiators.sectionTitle.replace(
                "Faculty Different?",
                ""
              )}
              <span className="text-brand-orange">Faculty Different?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.differentiators.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="leading-relaxed text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FacultyProfilesSection
        title={content.profiles.sectionTitle}
        note={content.profiles.noteToTeam}
        profiles={content.profiles.items}
      />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={content.faq.items}
            title={content.faq.sectionTitle}
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}

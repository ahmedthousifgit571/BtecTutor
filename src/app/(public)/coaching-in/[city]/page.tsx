import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta, buildLocalBusinessSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";

export const revalidate = 86400;

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  const locations = await prisma.locationPage.findMany({ select: { slug: true } });
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = await prisma.locationPage.findUnique({ where: { slug: params.city } });
  if (!location) return {};

  return generateMeta({
    title: location.seoTitle || `Best Coaching in ${location.city}`,
    description: location.seoDesc || `GATE and KTU coaching in ${location.city}, Kerala.`,
    keywords: location.seoKeywords,
    canonicalUrl: `/coaching-in/${location.slug}`,
  });
}

interface LocationContent {
  heroTitle: string;
  heroSubtitle: string;
  features: string[];
}

export default async function LocationPage({ params }: Props) {
  const location = await prisma.locationPage.findUnique({ where: { slug: params.city } });
  if (!location) notFound();

  const content = location.content as LocationContent | null;

  return (
    <>
      <JsonLd
        data={buildLocalBusinessSchema({
          city: location.city,
          description: location.seoDesc || `GATE and KTU coaching in ${location.city}`,
        })}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: `Coaching in ${location.city}`, url: `/coaching-in/${location.slug}` },
            ]}
            className="mb-8"
          />

          <GetInTouchSection
            theme="light"
            layout="compact"
            heading={content?.heroTitle || `Best GATE & KTU Coaching in ${location.city}`}
            description={
              content?.heroSubtitle ||
              `Join Kerala's top-rated coaching institute in ${location.city}. Expert faculty, comprehensive materials, and proven results.`
            }
            features={content?.features}
          >
            <div className="flex items-center gap-2 -mt-2 -order-1">
              <MapPin className="h-5 w-5 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange">{location.city}, Kerala</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/gate-coaching"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-5 py-3 text-sm font-medium text-white hover:bg-brand-orange-dark transition-colors"
              >
                Explore GATE Courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ktu/2024"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                KTU 2024 Resources
              </Link>
            </div>
          </GetInTouchSection>
        </div>
      </div>
    </>
  );
}

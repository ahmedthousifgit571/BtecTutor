import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMeta } from "@/lib/seo";
import { LocationContentPage } from "@/components/sections/LocationContentPage";
import { ktuLocationPages, getKtuLocation } from "@/lib/content/location-pages";

export const revalidate = 86400;

interface Props {
  params: { location: string };
}

export function generateStaticParams() {
  return ktuLocationPages.map((p) => ({ location: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const location = getKtuLocation(params.location);
  if (!location) return {};

  return generateMeta({
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    canonicalUrl: location.path,
  });
}

export default function KtuLocationPage({ params }: Props) {
  const location = getKtuLocation(params.location);
  if (!location) notFound();

  return <LocationContentPage content={location} />;
}

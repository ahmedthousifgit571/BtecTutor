import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMeta } from "@/lib/seo";
import { LocationContentPage } from "@/components/sections/LocationContentPage";
import { getGateLocation } from "@/lib/content/location-pages";

export const revalidate = 86400;

const location = getGateLocation("kerala");

export const metadata: Metadata = location
  ? generateMeta({
      title: location.metaTitle,
      description: location.metaDescription,
      keywords: location.keywords,
      canonicalUrl: location.path,
    })
  : {};

export default function GateKeralaPage() {
  if (!location) notFound();
  return <LocationContentPage content={location} />;
}

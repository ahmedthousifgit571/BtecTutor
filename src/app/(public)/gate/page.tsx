import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GateContentPage } from "@/components/sections/GateContentPage";
import { getGatePageContentBySlug } from "@/lib/content/gate-pages";
import { generateMeta } from "@/lib/seo";

const gateOneContent = getGatePageContentBySlug();

export const metadata: Metadata = gateOneContent
  ? generateMeta({
      title: gateOneContent.seo.title,
      description: gateOneContent.seo.description,
      keywords: [
        gateOneContent.seo.primaryKeyword,
        ...gateOneContent.seo.secondaryKeywords,
      ],
      canonicalUrl: "/gate",
    })
  : {};

export default function GateLandingPage() {
  if (!gateOneContent) notFound();

  return <GateContentPage content={gateOneContent} path="/gate" />;
}

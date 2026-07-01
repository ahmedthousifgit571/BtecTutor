import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IsroContentPage } from "@/components/sections/IsroContentPage";
import { getIsroPageContentBySlug } from "@/lib/content/isro-pages";
import { generateMeta } from "@/lib/seo";

const isroHubContent = getIsroPageContentBySlug();

export const metadata: Metadata = isroHubContent
  ? generateMeta({
      title: isroHubContent.seo.title,
      description: isroHubContent.seo.description,
      keywords: [
        isroHubContent.seo.primaryKeyword,
        ...isroHubContent.seo.secondaryKeywords,
      ],
      canonicalUrl: "/isro",
    })
  : {};

export default function IsroLandingPage() {
  if (!isroHubContent) notFound();

  return <IsroContentPage content={isroHubContent} path="/isro" />;
}

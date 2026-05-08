import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GateContentPage } from "@/components/sections/GateContentPage";
import {
  gatePagesContent,
  getGatePageContentBySlug,
} from "@/lib/content/gate-pages";
import { generateMeta } from "@/lib/seo";

interface Props {
  params: { slug: string[] };
}

export function generateStaticParams() {
  return gatePagesContent
    .filter((page) => page.pageNumber !== 1)
    .map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slugPath = params.slug.join("/");
  const content = getGatePageContentBySlug(slugPath);
  if (!content) return {};

  return generateMeta({
    title: content.seo.title,
    description: content.seo.description,
    keywords: [content.seo.primaryKeyword, ...content.seo.secondaryKeywords],
    canonicalUrl: `/gate/${slugPath}`,
  });
}

export default function GateSubPage({ params }: Props) {
  const slugPath = params.slug.join("/");
  const content = getGatePageContentBySlug(slugPath);
  if (!content || content.pageNumber === 1) notFound();

  return <GateContentPage content={content} path={`/gate/${slugPath}`} />;
}

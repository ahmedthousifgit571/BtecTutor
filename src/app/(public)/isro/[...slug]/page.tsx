import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IsroContentPage } from "@/components/sections/IsroContentPage";
import {
  isroPagesContent,
  getIsroPageContentBySlug,
} from "@/lib/content/isro-pages";
import { generateMeta } from "@/lib/seo";

interface Props {
  params: { slug: string[] };
}

export function generateStaticParams() {
  return isroPagesContent
    .filter((page) => page.slug !== "")
    .map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slugPath = params.slug.join("/");
  const content = getIsroPageContentBySlug(slugPath);
  if (!content) return {};

  return generateMeta({
    title: content.seo.title,
    description: content.seo.description,
    keywords: [content.seo.primaryKeyword, ...content.seo.secondaryKeywords],
    canonicalUrl: `/isro/${slugPath}`,
  });
}

export default function IsroSubPage({ params }: Props) {
  const slugPath = params.slug.join("/");
  const content = getIsroPageContentBySlug(slugPath);
  if (!content || content.slug === "") notFound();

  return <IsroContentPage content={content} path={`/isro/${slugPath}`} />;
}

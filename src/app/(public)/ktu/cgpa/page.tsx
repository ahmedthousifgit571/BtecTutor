import type { Metadata } from "next";
import { KtuCgpaPage } from "@/components/sections/KtuCgpaPage";
import { ktuCgpaContent } from "@/lib/content/ktu-cgpa";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCgpaContent.seo.title,
  description: ktuCgpaContent.seo.description,
  keywords: [
    ktuCgpaContent.seo.primaryKeyword,
    ...ktuCgpaContent.seo.secondaryKeywords,
    ...(ktuCgpaContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/cgpa",
});

export default function KtuCgpaLandingPage() {
  return <KtuCgpaPage content={ktuCgpaContent} />;
}

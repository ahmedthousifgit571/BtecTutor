import type { Metadata } from "next";
import { KtuHubPage } from "@/components/sections/KtuHubPage";
import { ktuHubContent } from "@/lib/content/ktu-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuHubContent.seo.title,
  description: ktuHubContent.seo.description,
  keywords: [
    ktuHubContent.seo.primaryKeyword,
    ...ktuHubContent.seo.secondaryKeywords,
    ...(ktuHubContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu",
});

export default function KtuHubLandingPage() {
  return <KtuHubPage content={ktuHubContent} />;
}

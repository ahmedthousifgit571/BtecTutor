import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuNotesContent } from "@/lib/content/ktu-notes";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuNotesContent.seo.title,
  description: ktuNotesContent.seo.description,
  keywords: [
    ktuNotesContent.seo.primaryKeyword,
    ...ktuNotesContent.seo.secondaryKeywords,
    ...(ktuNotesContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/notes-free",
});

export default function KtuNotesLandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuNotesContent}
      breadcrumbLabel="Notes Free"
      breadcrumbUrl="/ktu/notes-free"
    />
  );
}

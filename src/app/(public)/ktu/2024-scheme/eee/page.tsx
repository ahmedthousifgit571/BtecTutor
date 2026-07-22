import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuEee2024Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEee2024Content.seo.title,
  description: ktuEee2024Content.seo.description,
  keywords: [
    ktuEee2024Content.seo.primaryKeyword,
    ...ktuEee2024Content.seo.secondaryKeywords,
    ...(ktuEee2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/eee",
});

export default function KtuEee2024Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuEee2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "EEE", url: "/ktu/2024-scheme/eee" },
      ]}
    />
  );
}

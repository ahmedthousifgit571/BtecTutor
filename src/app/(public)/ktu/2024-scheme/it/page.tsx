import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuIt2024Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuIt2024Content.seo.title,
  description: ktuIt2024Content.seo.description,
  keywords: [
    ktuIt2024Content.seo.primaryKeyword,
    ...ktuIt2024Content.seo.secondaryKeywords,
    ...(ktuIt2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it",
});

export default function KtuIt2024Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuIt2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
      ]}
    />
  );
}

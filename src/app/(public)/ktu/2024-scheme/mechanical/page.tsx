import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuMechanical2024Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanical2024Content.seo.title,
  description: ktuMechanical2024Content.seo.description,
  keywords: [
    ktuMechanical2024Content.seo.primaryKeyword,
    ...ktuMechanical2024Content.seo.secondaryKeywords,
    ...(ktuMechanical2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/mechanical",
});

export default function KtuMechanical2024Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuMechanical2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Mechanical", url: "/ktu/2024-scheme/mechanical" },
      ]}
    />
  );
}

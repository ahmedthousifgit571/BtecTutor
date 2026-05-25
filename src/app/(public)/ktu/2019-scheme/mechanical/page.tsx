import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuMechanical2019Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanical2019Content.seo.title,
  description: ktuMechanical2019Content.seo.description,
  keywords: [
    ktuMechanical2019Content.seo.primaryKeyword,
    ...ktuMechanical2019Content.seo.secondaryKeywords,
    ...(ktuMechanical2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical",
});

export default function KtuMechanical2019Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuMechanical2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
      ]}
    />
  );
}

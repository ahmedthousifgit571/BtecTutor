import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuEee2019Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEee2019Content.seo.title,
  description: ktuEee2019Content.seo.description,
  keywords: [
    ktuEee2019Content.seo.primaryKeyword,
    ...ktuEee2019Content.seo.secondaryKeywords,
    ...(ktuEee2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee",
});

export default function KtuEee2019Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuEee2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
      ]}
    />
  );
}

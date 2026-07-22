import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuIt2019Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuIt2019Content.seo.title,
  description: ktuIt2019Content.seo.description,
  keywords: [
    ktuIt2019Content.seo.primaryKeyword,
    ...ktuIt2019Content.seo.secondaryKeywords,
    ...(ktuIt2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it",
});

export default function KtuIt2019Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuIt2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
      ]}
    />
  );
}

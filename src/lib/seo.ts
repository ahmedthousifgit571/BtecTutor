import type { Metadata } from "next";
import { getBaseUrl, absoluteUrl } from "./utils";

interface MetaInput {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export function generateMeta(input: MetaInput): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage,
    canonicalUrl,
    noIndex = false,
  } = input;

  const url = canonicalUrl || getBaseUrl();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface CourseSchemaInput {
  name: string;
  description: string;
  provider?: string;
  url: string;
}

export function buildCourseSchema(input: CourseSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: input.provider || "BTEC Tutor",
      sameAs: getBaseUrl(),
    },
    url: absoluteUrl(input.url),
  };
}

interface LocalBusinessInput {
  city: string;
  description: string;
}

export function buildLocalBusinessSchema(input: LocalBusinessInput) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl(`/coaching-in/${input.city.toLowerCase()}`),
    name: `BTEC Tutor - ${input.city}`,
    description: input.description,
    url: absoluteUrl(`/coaching-in/${input.city.toLowerCase()}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: input.city,
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.0",
      longitude: "76.3",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "BTEC Tutor",
    url: getBaseUrl(),
    logo: absoluteUrl("/logo.png"),
    description:
      "Kerala's premier coaching institute for GATE and KTU exam preparation.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [],
  };
}

interface BlogFeaturedPostSchema {
  headline: string;
  path: string;
}

export function buildBlogListingSchema(input: {
  name: string;
  description: string;
  posts: BlogFeaturedPostSchema[];
}) {
  const blogUrl = absoluteUrl("/blog");
  const blogId = `${blogUrl}#blog`;

  const postingNodes = input.posts.map((post) => {
    const path = post.path.replace(/\/$/, "") || post.path;
    const url = absoluteUrl(path);
    return {
      "@type": "BlogPosting",
      "@id": `${url}#blogposting`,
      headline: post.headline,
      url,
      isPartOf: { "@id": blogId },
      publisher: {
        "@type": "Organization",
        name: "BTechTutor",
        url: getBaseUrl(),
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": blogId,
        name: input.name,
        description: input.description,
        url: blogUrl,
        publisher: {
          "@type": "Organization",
          name: "BTechTutor",
          url: getBaseUrl(),
        },
        blogPost: postingNodes.map((n) => ({ "@id": n["@id"] })),
      },
      ...postingNodes,
    ],
  };
}

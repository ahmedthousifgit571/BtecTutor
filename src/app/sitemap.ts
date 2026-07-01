import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { getBaseUrl } from "@/lib/utils";
import { getBlogPostsByDate } from "@/lib/content/blog-posts";
import { locationPages as coachingLocationPages } from "@/lib/content/location-pages";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faculty`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/fees`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/why-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/free-demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/gate-coaching`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/gate-coaching/ece`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gate-coaching/eee`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gate/instrumentation/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/isro`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/isro/scientist-engineer`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/isro/ece`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/isro/eee`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/isro/mechanical`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/isro/cs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/isro/previous-year-papers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/isro/mock-test`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/isro/syllabus`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  // GATE subject pages
  const gateSubjects = await prisma.subject
    .findMany({
      where: { course: { scheme: null } },
      select: {
        slug: true,
        updatedAt: true,
        course: { select: { branch: true } },
      },
    })
    .catch(() => []);

  const gateSubjectPages: MetadataRoute.Sitemap = gateSubjects.map((s) => ({
    url: `${baseUrl}/gate-coaching/${s.course.branch}/${s.slug}`,
    lastModified: s.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // KTU subject pages
  const ktuSubjects = await prisma.subject
    .findMany({
      where: { course: { scheme: { not: null } } },
      select: {
        slug: true,
        updatedAt: true,
        course: { select: { scheme: true, department: true } },
      },
    })
    .catch(() => []);

  const ktuSubjectPages: MetadataRoute.Sitemap = ktuSubjects.map((s) => ({
    url: `${baseUrl}/ktu/${s.course.scheme}/${s.course.department}/${s.slug}`,
    lastModified: s.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Blog posts (static content)
  const blogPages: MetadataRoute.Sitemap = getBlogPostsByDate().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Location pages
  const locations = await prisma.locationPage
    .findMany({ select: { slug: true, updatedAt: true } })
    .catch(() => []);

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${baseUrl}/coaching-in/${l.slug}`,
    lastModified: l.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // KTU / GATE coaching location landing pages (static content)
  const coachingLocationHub: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ktu-coaching`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const coachingLocationLanding: MetadataRoute.Sitemap = coachingLocationPages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...gateSubjectPages,
    ...ktuSubjectPages,
    ...blogPages,
    ...locationPages,
    ...coachingLocationHub,
    ...coachingLocationLanding,
  ];
}

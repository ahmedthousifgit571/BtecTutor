import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = generateMeta({
  title: "Blog — GATE & KTU Preparation Tips & Guides",
  description:
    "Read expert tips, study strategies, and guides for GATE and KTU exam preparation. Stay updated with the latest education insights.",
  canonicalUrl: "/blog",
});

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await prisma.blogPost
    .findMany({
      where: { publishedAt: { not: null } },
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        tags: true,
        author: true,
        publishedAt: true,
      },
    })
    .catch(() => []);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} className="mb-8" />

        <div className="max-w-2xl mb-16">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text-dark">Blog</span>
          </h1>
          <p className="text-lg text-gray-500">
            Expert tips, study strategies, and guides to help you succeed in
            GATE and KTU examinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-orange/10 to-brand-sky/10 flex items-center justify-center">
                <span className="text-5xl font-bold text-brand-orange/15">
                  {post.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-brand-orange bg-brand-orange/5 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                )}
                <div className="flex items-center justify-between">
                  {post.publishedAt && (
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.publishedAt)}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs font-medium text-brand-orange group-hover:gap-1.5 transition-all">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

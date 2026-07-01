import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { generateMeta, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate, readingTime } from "@/lib/utils";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import {
  getBlogPost,
  getAllBlogSlugs,
  getRelatedBlogPosts,
  blogPlainText,
  blogFaqItems,
} from "@/lib/content/blog-posts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return generateMeta({
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords.length > 0 ? post.seo.keywords : post.tags,
    canonicalUrl: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const readTime = readingTime(blogPlainText(post));
  const faqItems = blogFaqItems(post);
  const relatedPosts = getRelatedBlogPosts(post.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema([
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ]),
      ...(faqItems.length > 0 ? [buildFaqSchema(faqItems)] : []),
    ],
  };

  return (
    <div className="pt-24 pb-16">
      <JsonLd data={structuredData} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
          className="mb-8"
        />

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-orange transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Hero */}
        <article>
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-brand-orange bg-brand-orange/5 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-fluid-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <BlogArticleBody blocks={post.body} />
        </article>

        {/* CTA */}
        <GetInTouchSection
          theme="dark"
          heading="Ready to Start Preparing?"
          description="Join BTEC Tutor and get access to expert coaching, study materials, and mock tests."
          submitLabel="Start Preparing Now"
          className="mt-16 !rounded-2xl overflow-hidden"
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="rounded-xl border border-gray-100 bg-white p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-brand-orange transition-colors">
                    {rp.cardTitle}
                  </h3>
                  <div className="flex gap-1.5 mt-2">
                    {rp.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] text-gray-400">{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

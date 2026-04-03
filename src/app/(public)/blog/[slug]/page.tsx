import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { formatDate, readingTime } from "@/lib/utils";
import { LeadForm } from "@/components/sections/LeadForm";

export const revalidate = 86400;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { publishedAt: { not: null } },
    select: { slug: true },
  });
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post) return {};

  return generateMeta({
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.excerpt || "",
    keywords: post.seoKeywords.length > 0 ? post.seoKeywords : post.tags,
    ogImage: post.ogImage || undefined,
    canonicalUrl: `/blog/${post.slug}`,
  });
}

interface ContentNode {
  type: string;
  attrs?: Record<string, unknown>;
  content?: ContentNode[];
  text?: string;
  marks?: { type: string; attrs?: Record<string, unknown> }[];
}

function renderContent(content: ContentNode[]): React.ReactNode[] {
  return content.map((node, i) => {
    if (node.type === "text") {
      let element: React.ReactNode = node.text;
      if (node.marks) {
        for (const mark of node.marks) {
          if (mark.type === "bold") element = <strong key={i}>{element}</strong>;
          if (mark.type === "italic") element = <em key={i}>{element}</em>;
          if (mark.type === "link")
            element = (
              <a key={i} href={mark.attrs?.href as string} className="text-brand-orange hover:underline">
                {element}
              </a>
            );
        }
      }
      return element;
    }

    const children = node.content ? renderContent(node.content) : null;

    switch (node.type) {
      case "paragraph":
        return <p key={i} className="mb-4 text-gray-600 leading-relaxed">{children}</p>;
      case "heading": {
        const level = (node.attrs?.level as number) || 2;
        const Tag = `h${level}` as keyof JSX.IntrinsicElements;
        return (
          <Tag key={i} className={`font-bold text-gray-900 mb-3 mt-8 ${level === 2 ? "text-2xl" : "text-xl"}`}>
            {children}
          </Tag>
        );
      }
      case "bulletList":
        return <ul key={i} className="list-disc pl-6 mb-4 space-y-1 text-gray-600">{children}</ul>;
      case "orderedList":
        return <ol key={i} className="list-decimal pl-6 mb-4 space-y-1 text-gray-600">{children}</ol>;
      case "listItem":
        return <li key={i}>{children}</li>;
      case "blockquote":
        return (
          <blockquote key={i} className="border-l-4 border-brand-orange pl-4 italic text-gray-500 mb-4">
            {children}
          </blockquote>
        );
      case "doc":
        return <div key={i}>{children}</div>;
      default:
        return <div key={i}>{children}</div>;
    }
  });
}

function extractPlainText(content: ContentNode[]): string {
  return content
    .map((node) => {
      if (node.text) return node.text;
      if (node.content) return extractPlainText(node.content);
      return "";
    })
    .join(" ");
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post) notFound();

  const contentData = post.content as unknown as { type: string; content: ContentNode[] };
  const plainText = extractPlainText(contentData.content || []);
  const readTime = readingTime(plainText);

  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      publishedAt: { not: null },
      slug: { not: post.slug },
    },
    take: 3,
    orderBy: { publishedAt: "desc" },
    select: { id: true, title: true, slug: true, tags: true },
  });

  return (
    <div className="pt-24 pb-16">
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
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">
            {renderContent(contentData.content || [])}
          </div>
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-charcoal p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Ready to Start Preparing?
              </h2>
              <p className="text-sm text-white/50">
                Join BTEC Tutor and get access to expert coaching, study
                materials, and mock tests.
              </p>
            </div>
            <LeadForm variant="card" theme="dark" />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="rounded-xl border border-gray-100 bg-white p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-brand-orange transition-colors">
                    {rp.title}
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

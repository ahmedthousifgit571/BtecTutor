import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { generateMeta, buildFaqSchema, buildBlogListingSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/sections/FAQSection";
import { blogPageContent } from "@/lib/content/blog-page";

export const metadata: Metadata = generateMeta({
  title: blogPageContent.seo.title,
  description: blogPageContent.seo.description,
  canonicalUrl: "/blog",
});

export const revalidate = 3600;

export default async function BlogPage() {
  const blogSchema = buildBlogListingSchema({
    name: blogPageContent.h1,
    description: blogPageContent.seo.description,
    posts: blogPageContent.featuredArticles.map((a) => ({
      headline: a.title,
      path: a.href,
    })),
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [...blogSchema["@graph"], buildFaqSchema(blogPageContent.faq.items)],
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <div className="pt-24 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} className="mb-8" />

          <div className="max-w-3xl mb-14">
            <h1 className="text-fluid-3xl font-bold text-gray-900 mb-6 leading-tight">
              The <span className="gradient-text-dark">BTechTutor Blog</span> — Practical, Honest Advice for
              Engineering Students
            </h1>
            {blogPageContent.intro.map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <p className="text-lg text-gray-600 leading-relaxed">
              If you cannot find what you are looking for, just WhatsApp us at{" "}
              <a
                href="https://wa.me/919895006772"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-orange hover:text-brand-orange-dark transition-colors"
              >
                +91 98950 06772
              </a>{" "}
              or visit the{" "}
              <Link href="/contact" className="font-medium text-brand-orange hover:text-brand-orange-dark transition-colors">
                contact page
              </Link>
              .
            </p>
          </div>

        </div>

        <section className="bg-charcoal py-20" aria-labelledby="blog-categories-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="blog-categories-heading"
              className="text-fluid-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Categories
            </h2>
            <p className="text-white/60 max-w-2xl mb-10 leading-relaxed">
              Browse by topic — from KTU papers to GATE timelines and careers in Kerala.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPageContent.categories.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:border-brand-orange/25 hover:bg-white/[0.06]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{cat.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-brand-orange" aria-hidden />
            <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {blogPageContent.featuredArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="group flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/25 hover:shadow-lg"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-sm font-bold text-brand-orange">
                    {article.title.charAt(0)}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="font-semibold text-gray-900 group-hover:text-brand-orange transition-colors block leading-snug">
                      {article.title}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-orange">
                      Read article <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FAQSection content={blogPageContent.faq} />
      </div>
    </>
  );
}

import { Fragment } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/utils";
import { BLOG_CONTACT, type BlogBlock } from "@/lib/content/blog-posts";

function normalizeUrl(url: string): { href: string; isInternal: boolean } {
  let href = url.trim();
  if (href.startsWith("https://www.btechtutor.com")) {
    href = href.replace("https://www.btechtutor.com", "") || "/";
  } else if (href.startsWith("https://btechtutor.com")) {
    href = href.replace("https://btechtutor.com", "") || "/";
  }
  const isInternal = href.startsWith("/");
  return { href, isInternal };
}

// Renders inline **bold** and [link text](url) markdown markers within a text string.
export function renderInline(text: string): React.ReactNode[] {
  // Regex to match either [text](url) or **bold**
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`text-${lastIndex}`}>
          {text.substring(lastIndex, match.index)}
        </Fragment>
      );
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      const linkText = match[1];
      const rawUrl = match[2];
      const { href, isInternal } = normalizeUrl(rawUrl);

      if (isInternal) {
        nodes.push(
          <Link
            key={`link-${match.index}`}
            href={href}
            className="font-medium text-brand-orange hover:text-brand-orange-dark underline decoration-brand-orange/40 hover:decoration-brand-orange underline-offset-2 transition-colors"
          >
            {renderInline(linkText)}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`link-${match.index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-orange hover:text-brand-orange-dark underline decoration-brand-orange/40 hover:decoration-brand-orange underline-offset-2 transition-colors"
          >
            {renderInline(linkText)}
          </a>
        );
      }
    } else if (match[3] !== undefined) {
      const boldText = match[3];
      nodes.push(
        <strong key={`bold-${match.index}`} className="font-semibold text-gray-900">
          {renderInline(boldText)}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <Fragment key={`text-${lastIndex}`}>
        {text.substring(lastIndex)}
      </Fragment>
    );
  }

  return nodes;
}

function CtaBlock({ text }: { text: string }) {
  const waLink = buildWhatsAppLink(
    BLOG_CONTACT.phoneRaw,
    "Hi BTechTutor! I read your blog and would like to know more about your coaching. Could you help me?"
  );

  return (
    <aside className="not-prose mt-10 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6">
      <p className="text-gray-800 font-medium leading-relaxed mb-4">{renderInline(text)}</p>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
        >
          Call / WhatsApp {BLOG_CONTACT.phone}
        </a>
        <a
          href={`mailto:${BLOG_CONTACT.email}`}
          className="inline-flex items-center rounded-full border border-brand-orange/30 px-5 py-2.5 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
        >
          {BLOG_CONTACT.email}
        </a>
      </div>
    </aside>
  );
}

export function BlogArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-custom">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="mb-4 leading-relaxed text-gray-600">
                {renderInline(block.text)}
              </p>
            );
          case "heading": {
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
              <Tag
                key={i}
                className={`mb-3 mt-8 font-bold text-gray-900 ${
                  block.level === 2 ? "text-2xl" : "text-xl"
                }`}
              >
                {block.text}
              </Tag>
            );
          }
          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`mb-4 space-y-2 pl-6 text-gray-600 ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {renderInline(item)}
                  </li>
                ))}
              </ListTag>
            );
          }
          case "table":
            return (
              <div key={i} className="not-prose my-6">
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        {block.headers.map((h, j) => (
                          <th
                            key={j}
                            className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r} className="even:bg-gray-50/50">
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={`border-b border-gray-50 px-4 py-3 align-top text-gray-600 ${
                                c === 0 ? "font-medium text-gray-900" : ""
                              }`}
                            >
                              {renderInline(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.note && (
                  <p className="mt-3 text-sm italic leading-relaxed text-gray-500">
                    Note: {renderInline(block.note)}
                  </p>
                )}
              </div>
            );
          case "callout":
            return (
              <div
                key={i}
                className="not-prose my-6 rounded-xl border-l-4 border-brand-orange bg-brand-orange/5 px-5 py-4 text-gray-700 font-medium leading-relaxed"
              >
                {renderInline(block.text)}
              </div>
            );
          case "image":
            return (
              <figure key={i} className="not-prose my-8">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-charcoal shadow-md">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full h-auto object-cover max-h-[520px]"
                    loading="lazy"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-2.5 text-center text-xs sm:text-sm text-gray-500 font-medium">
                    {renderInline(block.caption)}
                  </figcaption>
                )}
              </figure>
            );
          case "faq":
            return (
              <div key={i} className="not-prose mt-10">
                <h2 className="mb-5 text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {block.items.map((item, j) => (
                    <div key={j} className="rounded-xl border border-gray-100 bg-white p-5">
                      <h3 className="mb-2 font-semibold text-gray-900">{item.question}</h3>
                      <p className="leading-relaxed text-gray-600">{renderInline(item.answer)}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "cta":
            return <CtaBlock key={i} text={block.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

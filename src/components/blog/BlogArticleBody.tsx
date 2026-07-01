import { Fragment } from "react";
import { buildWhatsAppLink } from "@/lib/utils";
import { BLOG_CONTACT, type BlogBlock } from "@/lib/content/blog-posts";

// Renders inline **bold** markers within a text string.
function renderInline(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
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
                className={`mb-4 space-y-1.5 pl-6 text-gray-600 ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
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
                className="not-prose my-6 rounded-xl border-l-4 border-brand-orange bg-brand-orange/5 px-5 py-4 text-gray-700"
              >
                {renderInline(block.text)}
              </div>
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
                      <p className="leading-relaxed text-gray-600">{item.answer}</p>
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

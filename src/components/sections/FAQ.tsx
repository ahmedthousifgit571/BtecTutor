import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/seo";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FaqItem[];
  title?: string;
  className?: string;
  variant?: "dark" | "light";
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  className,
  variant = "light",
}: FAQSectionProps) {
  const accordionItems = faqs.map((faq, i) => ({
    id: `faq-${i}`,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className={className}>
      <JsonLd data={buildFaqSchema(faqs)} />
      <h2
        className={`text-2xl font-bold mb-6 ${
          variant === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <Accordion items={accordionItems} variant={variant} />
    </section>
  );
}

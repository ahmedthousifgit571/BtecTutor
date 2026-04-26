import { faqContent, type FaqContent } from "@/lib/content/faq";
import { FAQSection } from "@/components/sections/FAQSection";

interface FAQHomeProps {
  content?: FaqContent;
}

export function FAQHome({ content = faqContent }: FAQHomeProps) {
  return <FAQSection content={content} />;
}

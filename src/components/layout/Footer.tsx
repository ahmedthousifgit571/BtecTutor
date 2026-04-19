import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import logoImage from "@/assets/logoImage2.png";
import { footerContent, type FooterContent } from "@/lib/content/footer";

interface FooterProps {
  content?: FooterContent;
}

export function Footer({ content = footerContent }: FooterProps) {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Banner — White */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 mb-8">
              {content.cta.subheading}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={content.cta.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-brand-orange/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                {content.cta.primaryLabel}
              </a>
              <a
                href={content.cta.secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                {content.cta.secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2 mb-4 lg:mb-0">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src={logoImage}
                alt="BTechTutor"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40 max-w-xs">
              Kerala&apos;s premier coaching institute for GATE and KTU exam
              preparation. Expert faculty, comprehensive study materials, and
              proven results.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-brand-orange transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {content.contact.phone}
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-brand-orange transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {content.contact.email}
              </a>
              <a
                href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-brand-orange transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {content.contact.whatsapp}
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/40">
                <MapPin className="h-4 w-4 shrink-0" />
                {content.contact.serving}
              </span>
            </div>
          </div>

          {/* Link Groups */}
          {content.linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {content.copyright}
          </p>
          <div className="flex items-center gap-6">
            {content.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  "GATE Coaching": [
    { label: "ECE", href: "/gate-coaching/ece" },
    { label: "EEE", href: "/gate-coaching/eee" },
    { label: "Instrumentation", href: "/gate-coaching/instrumentation" },
    { label: "Mock Tests", href: "/gate-coaching/ece/mock-test" },
  ],
  "KTU Resources": [
    { label: "2019 Scheme", href: "/ktu/2019" },
    { label: "2024 Scheme", href: "/ktu/2024" },
    { label: "Notes & PYQs", href: "/ktu/2024/computer-science" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Free Demo", href: "/free-demo" },
    { label: "Fee Structure", href: "/fees" },
    { label: "Why Us", href: "/why-us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="text-2xl font-bold gradient-text">
              BTEC Tutor
            </Link>
            <p className="mt-3 text-sm text-white/50 max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-orange transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-orange transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <span className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0" />
                Kerala, India
              </span>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
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
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} BTEC Tutor. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logoImage2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/gsap-utils";

gsap.registerPlugin(useGSAP);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    },
    { scope: headerRef }
  );

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50" style={{ opacity: 0 }}>
      <div className="bg-charcoal border-b border-white/10">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoImage} alt="BTEC Tutor" height={150} className="w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in link ? setOpenDropdown(link.label) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {"children" in link ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-white/15 bg-brand-navy/95 backdrop-blur-xl shadow-xl shadow-black/40 p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-2 text-sm font-medium text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/25 transition-all"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden rounded-lg p-2 text-white/80 hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-20 z-40 border-b border-white/10 bg-brand-navy shadow-2xl shadow-black/50">
          <div className="mx-auto max-w-7xl max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 py-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {"children" in link ? (
                  <div className="space-y-1">
                    <span className="block px-3 py-2 text-sm font-medium text-white/50">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-6 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-brand-orange text-center rounded-lg px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-orange-dark"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

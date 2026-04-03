"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
        "bg-charcoal/95 backdrop-blur-md border-t border-white/10",
        "p-3 flex items-center gap-3",
        "animate-in slide-in-from-bottom duration-300"
      )}
    >
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-orange py-3 text-sm font-medium text-white hover:bg-brand-orange-dark transition-colors"
      >
        Enroll Now
      </Link>
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center rounded-lg border border-white/20 p-3 text-white hover:bg-white/5 transition-colors"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="flex items-center justify-center rounded-lg p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

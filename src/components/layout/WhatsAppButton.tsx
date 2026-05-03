"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "919895006772";
const DEFAULT_MESSAGE =
  "Hi BTEC Tutor! I'm interested in your GATE/KTU coaching programs. Could you share more details about the courses, fees, and upcoming batches?";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
    >
      <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.498 1.128 6.738 3.046 9.372L1.06 31.14l5.964-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0Zm9.336 22.616c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.322-5.656-1.216-4.748-1.966-7.804-6.78-8.04-7.094-.226-.314-1.9-2.532-1.9-4.83s1.202-3.43 1.63-3.898c.39-.428 1.03-.642 1.642-.642.198 0 .376.01.536.018.468.02.702.048 1.012.782.386.918 1.326 3.232 1.44 3.466.116.234.232.546.076.86-.146.322-.272.522-.506.8-.234.278-.456.49-.69.788-.214.262-.454.542-.194 1.01.26.46 1.158 1.91 2.486 3.094 1.706 1.522 3.144 1.994 3.588 2.214.35.174.766.136.994-.116s.984-1.07 1.334-1.47c.35-.4.694-.328 1.164-.196.478.13 2.976 1.41 3.484 1.668.508.258.844.386.97.606.124.22.124 1.276-.268 2.376Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 1500);
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 5000);
    const pulseTimer = setTimeout(() => setIsPulsing(false), 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    /* Wrapper follows the same max-w-7xl + px as the navbar/content */
    <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className={`flex items-center justify-end gap-3 transition-all duration-700 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-75"
        }`}
      >
        {/* Tooltip */}
        <div
          className={`hidden sm:flex items-center transition-all duration-500 pointer-events-auto ${
            showTooltip
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-100 max-w-[200px]">
            <p className="text-sm font-medium text-gray-800 leading-snug">
              Chat with us on WhatsApp!
            </p>
          </div>
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white -ml-[1px] drop-shadow-sm" />
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          id="whatsapp-cta"
          onClick={() => setShowTooltip(false)}
          onMouseEnter={() => {
            setShowTooltip(true);
            setIsPulsing(false);
          }}
          onMouseLeave={() => setShowTooltip(false)}
          className="pointer-events-auto group relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
        >
          {isPulsing && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
              <span
                className="absolute inset-[-4px] rounded-full border-2 border-[#25D366] opacity-30"
                style={{ animation: "whatsapp-ring 2s ease-out infinite" }}
              />
            </>
          )}
          <WhatsAppIcon className="w-7 h-7 relative z-10 group-hover:rotate-[15deg] transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

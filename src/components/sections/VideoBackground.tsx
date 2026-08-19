"use client";

import { forwardRef, useState } from "react";
import { Play } from "lucide-react";

interface HeroBackgroundProps {
  showVideoOption?: boolean;
}

export const VideoBackground = forwardRef<HTMLDivElement, HeroBackgroundProps>(
  function VideoBackground({ showVideoOption = true }, ref) {
    const [isVideoActive, setIsVideoActive] = useState(false);

    return (
      <div
        ref={ref}
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Prioritized Static Hero WebP Background (Primary LCP Element) */}
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/hero-bg-mobile.webp" />
          <source media="(min-width: 769px)" srcSet="/images/hero-bg.webp" />
          <img
            src="/images/hero-bg.webp"
            alt="BTechTutor Engineering Coaching"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>

        {/* Optional Interactive Video on Demand */}
        {isVideoActive && (
          <video
            src="/videos/hero-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute top-0 left-0 w-full h-full object-cover z-[1] transition-opacity duration-700 opacity-100"
            aria-hidden="true"
          />
        )}

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.70) 60%, rgba(4,4,12,1) 100%)",
          }}
        />

        {/* Subtle Video Preview Toggle (Non-blocking interaction) */}
        {showVideoOption && !isVideoActive && (
          <button
            type="button"
            onClick={() => setIsVideoActive(true)}
            className="absolute bottom-6 right-6 z-[15] hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all shadow-md"
            aria-label="Play background video preview"
          >
            <Play className="h-3 w-3 fill-white/80" />
            <span>Watch Preview</span>
          </button>
        )}
      </div>
    );
  }
);


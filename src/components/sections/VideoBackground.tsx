"use client";

import { forwardRef, useEffect, useState } from "react";
import landingVideo from "@/videos/landingVideo.mp4";

export const VideoBackground = forwardRef<HTMLVideoElement>(
  function VideoBackground(_props, ref) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const video =
        ref && "current" in ref ? ref.current : null;
      if (!video) return;

      // If the video already has data (cached), show immediately
      if (video.readyState >= 2) {
        setLoaded(true);
        return;
      }

      const handleLoaded = () => setLoaded(true);
      // loadeddata fires as soon as the first frame is available — much faster than canplaythrough
      video.addEventListener("loadeddata", handleLoaded);

      // Attempt play in case autoplay is blocked
      video.play().catch(() => {});

      return () => video.removeEventListener("loadeddata", handleLoaded);
    }, [ref]);

    return (
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <video
          ref={ref}
          src={landingVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 60%, rgba(4,4,12,1) 100%)",
          }}
        />
      </div>
    );
  }
);

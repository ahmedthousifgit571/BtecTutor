"use client";

import { useLayoutEffect, useEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const floatAnimation = {
  y: -20,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut" as const,
};

export const fadeInUp = {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out" as const,
};

export const staggerChildren = {
  each: 0.1,
  from: "start" as const,
};

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "violet" | "sky" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-white/10 text-white/80": variant === "default",
          "bg-brand-orange/20 text-brand-orange": variant === "violet",
          "bg-brand-sky/20 text-brand-sky": variant === "sky",
          "border border-current text-white/60": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

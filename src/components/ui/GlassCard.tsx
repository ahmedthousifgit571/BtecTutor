import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light";
  hover?: boolean;
}

export function GlassCard({
  className,
  variant = "dark",
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variant === "dark" ? "glass" : "glass-light",
        hover && (variant === "dark" ? "glass-hover" : "hover:shadow-lg hover:-translate-y-1"),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

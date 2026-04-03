import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(allItems)} />
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center gap-1.5 text-sm", className)}
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <span key={item.url} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
              )}
              {isLast ? (
                <span className="text-gray-900 font-medium truncate max-w-[200px]">
                  {index === 0 ? <Home className="h-4 w-4" /> : item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-gray-500 hover:text-brand-orange transition-colors truncate max-w-[150px]"
                >
                  {index === 0 ? <Home className="h-4 w-4" /> : item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}

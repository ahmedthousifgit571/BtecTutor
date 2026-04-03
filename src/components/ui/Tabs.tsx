"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  variant?: "underline" | "pills";
}

export function Tabs({
  tabs,
  defaultTab,
  className,
  variant = "underline",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={className}>
      <div
        className={cn(
          "flex gap-1 overflow-x-auto no-scrollbar",
          variant === "underline" && "border-b border-gray-200"
        )}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap px-4 py-3 text-sm font-medium transition-all",
              variant === "underline" && [
                "border-b-2 -mb-px",
                activeTab === tab.id
                  ? "border-brand-orange text-brand-orange"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              ],
              variant === "pills" && [
                "rounded-lg",
                activeTab === tab.id
                  ? "bg-brand-orange text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700",
              ]
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6" role="tabpanel">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

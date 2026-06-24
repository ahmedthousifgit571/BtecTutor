"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { LogoutButton } from "./LogoutButton";

const NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "KTU Notes", href: "/admin/ktu-notes", icon: GraduationCap },
  { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-30 hidden w-64 flex-col bg-charcoal text-white lg:flex">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-amber-500 text-sm font-black text-white shadow-lg shadow-brand-orange/30">
          B
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-white">BTEC Admin</p>
          <p className="text-[11px] text-white/40">Content Console</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {NAV.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-white/10 text-white"
                  : "text-white/55 hover:bg-white/5 hover:text-white"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand-orange" />
              )}
              <Icon
                className={`h-[18px] w-[18px] transition-colors ${
                  active ? "text-brand-orange" : "text-white/45 group-hover:text-white"
                }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-3 py-4">
        <LogoutButton />
      </div>
    </aside>
  );
}

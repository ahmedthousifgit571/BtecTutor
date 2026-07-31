import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard | BTechTutor",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-6 backdrop-blur-md">
          <h2 className="text-sm font-medium text-gray-500">Admin Panel</h2>
          <span className="hidden text-xs text-gray-400 sm:block">
            BTechTutor · Content Console
          </span>
        </header>
        <div className="p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}

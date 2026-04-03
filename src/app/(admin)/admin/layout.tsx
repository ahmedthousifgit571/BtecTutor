import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | BTEC Tutor",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-charcoal text-white border-r border-white/10 hidden lg:block">
        <div className="p-6">
          <h1 className="text-lg font-bold gradient-text">BTEC Admin</h1>
        </div>
        <nav className="px-3 space-y-1">
          {[
            { label: "Dashboard", href: "/admin/dashboard" },
            { label: "Content CMS", href: "/admin/content" },
            { label: "Blog", href: "/admin/blog" },
            { label: "Reviews", href: "/admin/reviews" },
            { label: "Enquiries", href: "/admin/enquiries" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md flex items-center px-6">
          <h2 className="text-sm font-medium text-gray-600">Admin Panel</h2>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

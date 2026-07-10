"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Overview", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Orders", href: "/orders" },
  { label: "Customers", href: "/customers" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Coupons", href: "/coupons" },
  { label: "Banners", href: "/banners" },
  { label: "Inventory", href: "/inventory" },
  { label: "Analytics", href: "/analytics" },
  { label: "Notifications", href: "/notifications" },
  { label: "Settings", href: "/settings" }
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-[var(--border)] bg-white">
      <div className="p-6">
        <p className="text-lg font-semibold tracking-[0.2em] uppercase">AURA Admin</p>
        <p className="mt-2 text-xs text-[var(--muted-foreground)]">Luxury operations hub</p>
      </div>
      <nav className="flex flex-col gap-1 px-3 pb-6">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-[var(--accent)] font-medium text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

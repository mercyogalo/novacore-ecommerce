import Link from "next/link";
import { SectionHeading } from "../../components/section-heading";
import { getOrders } from "../../lib/data";

const links = [
  { label: "Profile", href: "/account" },
  { label: "Orders", href: "/account" },
  { label: "Addresses", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Security", href: "/account" }
];

export default function AccountPage() {
  const orders = getOrders();

  return (
    <main className="container py-16">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="card h-fit p-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="rounded-xl px-4 py-3 text-sm text-[var(--muted-foreground)] transition hover:bg-[var(--accent)] hover:text-[var(--foreground)]">
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div>
          <SectionHeading title="Account dashboard" description="Profile, orders, addresses, reviews, notifications, security, and logout entry points." />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card p-6">
              <p className="text-sm text-[var(--muted-foreground)]">Personal information</p>
              <p className="mt-3 font-medium">Amara Johnson</p>
              <p className="text-sm text-[var(--muted-foreground)]">amara@example.com</p>
            </div>
            <div className="card p-6">
              <p className="text-sm text-[var(--muted-foreground)]">Saved address</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">42 Glow Street, Brooklyn, NY 11201</p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-semibold">Recent orders</h2>
            <div className="mt-4 space-y-4">
              {orders.map((order) => (
                <article key={order.id} className="card flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium">{order.number}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {order.date} · {order.status}
                    </p>
                  </div>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

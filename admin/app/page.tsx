import { AdminPageHeader } from "../components/content-page";
import { DataTable } from "../components/data-table";
import { MetricCard } from "../components/metric-card";
import { getMetrics, getOrders, lowStock, recentActivity } from "../lib/data";

export default function AdminPage() {
  const metrics = getMetrics();
  const orders = getOrders();

  return (
    <main className="container py-10">
      <AdminPageHeader
        eyebrow="Overview"
        title="Luxury admin dashboard"
        description="A responsive operations hub for products, orders, customers, inventory, content, and analytics."
        actions={
          <>
            <button className="btn-secondary">Quick action</button>
            <button className="btn-primary">Create product</button>
          </>
        }
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Recent orders</p>
          <div className="mt-6">
            <DataTable
              headers={["Order", "Customer", "Total", "Status"]}
              rows={orders.map((order) => [order.id, order.customer, `$${order.total}`, order.status])}
            />
          </div>
        </article>
        <article className="card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Inventory alerts</p>
          <div className="mt-6 space-y-4">
            {lowStock.map((item) => (
              <div key={item} className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 card p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Activity feed</p>
        <div className="mt-6 space-y-3">
          {recentActivity.map((item) => (
            <p key={item} className="text-sm text-[var(--muted-foreground)]">
              {item}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

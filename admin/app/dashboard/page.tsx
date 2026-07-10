import { AdminPageHeader } from "../../components/content-page";
import { DataTable } from "../../components/data-table";
import { MetricCard } from "../../components/metric-card";
import { getMetrics, getOrders } from "../../lib/data";

export default function DashboardPage() {
  const metrics = getMetrics();
  const orders = getOrders();

  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Dashboard" title="Performance overview" description="Overview of revenue, orders, customers, products, and quick actions." />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="mt-8 card p-6">
        <DataTable
          headers={["Order", "Customer", "Email", "Items", "Total", "Status"]}
          rows={orders.map((order) => [order.id, order.customer, order.email, order.items, `$${order.total}`, order.status])}
        />
      </section>
    </main>
  );
}

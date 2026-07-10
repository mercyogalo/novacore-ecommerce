import { AdminPageHeader } from "../../components/content-page";
import { DataTable } from "../../components/data-table";
import { getOrders } from "../../lib/data";

export default function OrdersPage() {
  const orders = getOrders();

  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Sales" title="Orders" description="Order table, details, timeline, invoice, shipping, and customer views." />
      <section className="mt-8">
        <DataTable
          headers={["Order", "Customer", "Email", "Date", "Items", "Total", "Status"]}
          rows={orders.map((order) => [order.id, order.customer, order.email, order.date, order.items, `$${order.total}`, order.status])}
        />
      </section>
    </main>
  );
}

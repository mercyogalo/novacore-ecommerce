import { AdminPageHeader } from "../../components/content-page";
import { DataTable } from "../../components/data-table";
import { getProducts, lowStock } from "../../lib/data";

export default function InventoryPage() {
  const products = getProducts();

  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Operations" title="Inventory" description="Stock levels, alerts, and warehouse management UI." />
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {lowStock.map((item) => (
          <div key={item} className="card border-[var(--primary)]/20 p-5 text-sm">
            <p className="font-medium">{item}</p>
            <p className="mt-2 text-[var(--muted-foreground)]">Low stock alert</p>
          </div>
        ))}
      </section>
      <section className="mt-8">
        <DataTable headers={["Product", "Category", "Stock", "Status"]} rows={products.map((p) => [p.name, p.category, p.stock, p.status])} />
      </section>
    </main>
  );
}

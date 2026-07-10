import Image from "next/image";
import { AdminPageHeader } from "../../components/content-page";
import { DataTable } from "../../components/data-table";
import { getCustomers } from "../../lib/data";

export default function CustomersPage() {
  const customers = getCustomers();

  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Community" title="Customers" description="Customer list, details, orders, addresses, reviews, and activity." />
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {customers.map((customer) => (
          <article key={customer.id} className="card flex items-center gap-4 p-5">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image src={customer.avatar} alt={customer.name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-[var(--muted-foreground)]">{customer.email}</p>
              <p className="text-xs text-[var(--muted-foreground)]">
                {customer.orders} orders · ${customer.spent} spent
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="mt-8">
        <DataTable headers={["ID", "Name", "Email", "Orders", "Spent", "Status"]} rows={customers.map((c) => [c.id, c.name, c.email, c.orders, `$${c.spent}`, c.status])} />
      </section>
    </main>
  );
}

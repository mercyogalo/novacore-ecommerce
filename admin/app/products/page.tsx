import Image from "next/image";
import { AdminPageHeader } from "../../components/content-page";
import { DataTable } from "../../components/data-table";
import { getProducts } from "../../lib/data";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="container py-10">
      <AdminPageHeader
        eyebrow="Catalog"
        title="Products"
        description="Table, filters, create/edit/delete, duplicate, gallery, pricing, variants, and SEO UI."
        actions={<button className="btn-primary">Create product</button>}
      />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <article key={product.id} className="card overflow-hidden">
            <div className="relative aspect-[4/3] bg-[var(--muted)]">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-[var(--muted-foreground)]">{product.category}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <DataTable
          headers={["ID", "Name", "Category", "Price", "Stock", "Status"]}
          rows={products.map((product) => [product.id, product.name, product.category, `$${product.price}`, product.stock, product.status])}
        />
      </section>
    </main>
  );
}

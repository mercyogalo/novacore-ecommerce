import { ProductCard } from "../../components/product-card";
import { SectionHeading } from "../../components/section-heading";
import { getProducts } from "../../lib/data";

export default function ShopPage() {
  const products = getProducts();

  return (
    <main className="container py-16">
      <SectionHeading
        eyebrow="Shop"
        title="All products"
        description="Filter by category, ingredient, skin type, price, and availability in a premium storefront layout."
      />

      <div className="mt-8 grid gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 md:grid-cols-4">
        {["All categories", "Price range", "Skin type", "Sort by featured"].map((filter) => (
          <div key={filter} className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--muted-foreground)]">
            {filter}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

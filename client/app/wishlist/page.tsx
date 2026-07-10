import { ProductCard } from "../../components/product-card";
import { SectionHeading } from "../../components/section-heading";
import { getProducts } from "../../lib/data";

export default function WishlistPage() {
  const items = getProducts().slice(2, 5);

  return (
    <main className="container py-16">
      <SectionHeading title="Wishlist" description="Save products, move to cart, remove, or share your curated list." />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

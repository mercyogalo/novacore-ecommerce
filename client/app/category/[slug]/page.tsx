import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "../../../components/product-card";
import { SectionHeading } from "../../../components/section-heading";
import { getCategoryBySlug, getProductsByCategory } from "../../../lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);

  return (
    <main className="container py-16">
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
        <Link href="/" className="hover:text-[var(--foreground)]">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/shop" className="hover:text-[var(--foreground)]">
          Shop
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-[var(--foreground)]">{category.name}</span>
      </nav>

      <SectionHeading
        eyebrow="Category"
        title={category.name}
        description={`Browse ${products.length} products in ${category.name}.`}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} featured />)
        ) : (
          <div className="card col-span-full p-8 text-center text-sm text-[var(--muted-foreground)]">
            No products found in this category yet.
          </div>
        )}
      </div>
    </main>
  );
}

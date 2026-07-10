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
      <SectionHeading
        eyebrow="Category"
        title={category.name}
        description={`Browse ${products.length} products in ${category.name}.`}
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="card col-span-full p-8 text-sm text-[var(--muted-foreground)]">No products found in this category yet.</div>
        )}
      </div>
    </main>
  );
}

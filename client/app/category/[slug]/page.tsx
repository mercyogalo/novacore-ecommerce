import { notFound } from "next/navigation";
import { SectionHeading } from "../../../components/section-heading";
import { CategoryProductsCarousel } from "../../../components/category-loop-carousel";
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
      <div className="mt-10">
        {products.length > 0 ? (
          <CategoryProductsCarousel products={products} />
        ) : (
          <div className="card p-8 text-center text-sm text-[var(--muted-foreground)]">
            No products found in this category yet.
          </div>
        )}
      </div>
    </main>
  );
}
import { ProductCard } from "../../components/product-card";
import { SectionHeading } from "../../components/section-heading";
import { searchProducts } from "../../lib/data";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const results = searchProducts(q);

  return (
    <main className="container py-16">
      <SectionHeading
        eyebrow="Search"
        title={q ? `Results for "${q}"` : "Search products"}
        description="Live search with suggestions, recent searches, and popular products."
      />

      <form className="mt-8">
        <input name="q" defaultValue={q} placeholder="Search products, ingredients, categories..." className="input-field max-w-xl" />
      </form>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {results.length > 0 ? (
          results.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="card col-span-full p-8 text-sm text-[var(--muted-foreground)]">No results found. Try another search term.</div>
        )}
      </div>
    </main>
  );
}

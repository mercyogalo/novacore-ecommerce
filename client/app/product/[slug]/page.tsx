import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "../../../components/product-card";
import { ProductGallery } from "../../../components/product-gallery";
import { ProductPurchasePanel } from "../../../components/product-purchase-panel";
import { SectionHeading } from "../../../components/section-heading";
import { getProductBySlug, getProducts, getReviews } from "../../../lib/data";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const reviews = getReviews(product.id);
  const related = getProducts().filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id).slice(0, 4);
  const recentlyViewed = getProducts().filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="container py-8 md:py-12">
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)]">
        <Link href="/" className="hover:text-[var(--foreground)]">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/shop" className="hover:text-[var(--foreground)]">
          Shop
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-[var(--foreground)]">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery product={product} />
        <ProductPurchasePanel product={product} />
      </div>

      <section className="mt-16 border-t border-[var(--border)] pt-16">
        <SectionHeading eyebrow="Reviews" title="Customer reviews" description="Real feedback from the Bare Bliss community." />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.id} className="card p-6">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={review.avatar} alt={review.user} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{review.user}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{review.rating} / 5</p>
                </div>
              </div>
              <h3 className="mt-4 font-medium">{review.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">{review.comment}</p>
            </article>
          ))}
        </div>

        <div className="card mt-8 p-6">
          <h3 className="text-lg font-semibold">Write a review</h3>
          <form className="mt-4 space-y-4">
            <input className="input-field" placeholder="Review title" />
            <textarea className="input-field min-h-28" placeholder="Share your experience" />
            <button type="button" className="btn-primary">
              Submit review
            </button>
          </form>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-16">
          <SectionHeading eyebrow="Related" title="You may also like" description="Products from the same category." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} featured />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-16">
        <SectionHeading eyebrow="Recently viewed" title="Continue browsing" description="Products you may want to revisit." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {recentlyViewed.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

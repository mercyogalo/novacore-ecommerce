import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "../../../components/product-card";
import { SectionHeading } from "../../../components/section-heading";
import { getProductBySlug, getProducts, getReviews } from "../../../lib/data";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const reviews = getReviews(product.id);
  const related = getProducts().filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id).slice(0, 3);

  return (
    <main className="container py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--muted)]">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {(product.images ?? [product.image]).map((image) => (
              <div key={image} className="relative aspect-square overflow-hidden rounded-xl border border-[var(--border)]">
                <Image src={image} alt={product.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">{product.category}</p>
          <h1 className="mt-4 text-4xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
            {product.compareAtPrice ? <span className="text-lg text-[var(--muted-foreground)] line-through">${product.compareAtPrice.toFixed(2)}</span> : null}
          </div>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            {product.rating.toFixed(1)} / 5 ({product.reviewsCount} reviews) · {product.stock} in stock
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-medium">Ingredients</p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{product.ingredients.join(", ")}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Benefits</p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{(product.benefits ?? []).join(" · ")}</p>
            </div>
            <div>
              <p className="text-sm font-medium">How to use</p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{product.howToUse}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cart" className="btn-primary">
              Add to cart
            </Link>
            <Link href="/checkout" className="btn-secondary">
              Buy now
            </Link>
            <Link href="/wishlist" className="btn-secondary">
              Wishlist
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="Reviews" title="Customer feedback" description="Ratings, comments, and customer photos." />
        <div className="mt-8 grid gap-4">
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
      </section>

      {related.length > 0 ? (
        <section className="mt-16">
          <SectionHeading eyebrow="Related" title="You may also like" description="Products from the same category." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <article className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-sm)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-md)]">
        <div className="relative aspect-[4/5] bg-[var(--muted)]">
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">{product.category}</span>
            {product.badge ? <span className="badge">{product.badge}</span> : null}
          </div>
          <h3 className="text-lg font-medium text-[var(--foreground)]">{product.name}</h3>
          <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
            <span>${product.price.toFixed(2)}</span>
            <span>
              {product.rating.toFixed(1)} / 5 ({product.reviewsCount})
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Heart, Star } from "lucide-react";
import type { Product } from "../types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-3.5 w-3.5 ${index < Math.round(rating) ? "fill-[var(--primary)] text-[var(--primary)]" : "text-[var(--border)]"}`}
        />
      ))}
      <span className="ml-1 text-xs text-[var(--muted-foreground)]">{rating.toFixed(1)}</span>
    </div>
  );
}

export function ProductCard({
  product,
  featured = false,
  imageBackground = false
}: {
  product: Product;
  featured?: boolean;
  imageBackground?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
    >
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block">
          <div className={`relative aspect-square p-6 ${imageBackground ? "bg-[var(--accent)]" : "bg-transparent"}`}>
            <Image src={product.image} alt={product.name} fill className="object-contain transition duration-500 group-hover:scale-105" />
          </div>
        </Link>

        <Link
          href="/wishlist"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--foreground)] shadow-[var(--shadow-sm)] transition hover:bg-white hover:text-[var(--primary)]"
        >
          <Heart className="h-4 w-4" />
        </Link>

        {featured ? (
          <Link
            href={`/product/${product.slug}`}
            className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-white/95 py-2 text-center text-xs font-medium opacity-0 shadow-[var(--shadow-sm)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" /> Quick View
            </span>
          </Link>
        ) : null}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/product/${product.slug}`} className="flex-1">
            <h3 className="text-base font-medium leading-snug text-[var(--foreground)] transition group-hover:text-[var(--primary)]">{product.name}</h3>
          </Link>
          {product.badge ? <span className="badge shrink-0">{product.badge}</span> : null}
        </div>

        <StarRating rating={product.rating} />

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-[var(--foreground)]">${product.price.toFixed(2)}</span>
          {product.compareAtPrice ? (
            <span className="text-sm text-[var(--muted-foreground)] line-through">${product.compareAtPrice.toFixed(2)}</span>
          ) : null}
        </div>

        {featured ? (
          <Link href="/cart" className="btn-primary mt-2 w-full text-center text-sm">
            Add to Cart
          </Link>
        ) : (
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{product.category}</p>
        )}
      </div>
    </motion.article>
  );
}

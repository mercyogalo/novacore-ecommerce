"use client";

import Link from "next/link";
import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "../types";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">{product.category}</p>
      <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{product.name}</h1>

      <div className="mt-4 flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < Math.round(product.rating) ? "fill-[var(--primary)] text-[var(--primary)]" : "text-[var(--border)]"}`}
          />
        ))}
        <span className="text-sm text-[var(--muted-foreground)]">
          {product.rating.toFixed(1)} ({product.reviewsCount} reviews)
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
        {product.compareAtPrice ? (
          <>
            <span className="text-lg text-[var(--muted-foreground)] line-through">${product.compareAtPrice.toFixed(2)}</span>
            <span className="badge">Save ${(product.compareAtPrice - product.price).toFixed(2)}</span>
          </>
        ) : null}
      </div>

      <p className="mt-3 text-sm text-[var(--muted-foreground)]">
        {(product.stock ?? 0) > 0 ? `${product.stock} in stock` : "Out of stock"}
      </p>

      <p className="mt-6 text-sm leading-7 text-[var(--muted-foreground)]">{product.description}</p>

      <div className="mt-8 space-y-5">
        <div>
          <p className="text-sm font-medium">Benefits</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted-foreground)]">
            {(product.benefits ?? []).map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Ingredients</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">{product.ingredients.join(", ")}</p>
        </div>
        <div>
          <p className="text-sm font-medium">How to use</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">{product.howToUse}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-sm font-medium">Quantity</span>
        <div className="flex items-center rounded-full border border-[var(--border)]">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-[var(--accent)]">
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-8 text-center text-sm">{quantity}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 hover:bg-[var(--accent)]">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/cart" className="btn-primary flex-1 justify-center">
          Add to Cart
        </Link>
        <Link href="/checkout" className="btn-secondary flex-1 justify-center">
          Buy Now
        </Link>
      </div>
      <Link href="/wishlist" className="btn-secondary mt-3 w-full justify-center">
        Add to Wishlist
      </Link>
    </div>
  );
}

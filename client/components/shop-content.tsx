"use client";

import { useState } from "react";
import { ProductCard } from "./product-card";
import { ShopFilters, ShopToolbar } from "./shop-filters";
import type { Product } from "../types";

export function ShopContent({ products }: { products: Product[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <ShopFilters />
      <div>
        <ShopToolbar view={view} onViewChange={setView} />
        <div className={view === "grid" ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
          {products.map((product) =>
            view === "grid" ? (
              <ProductCard key={product.id} product={product} featured />
            ) : (
              <article key={product.id} className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                <div className="relative h-32 w-full shrink-0 rounded-[var(--radius)] bg-transparent sm:w-32">
                  <img src={product.image} alt={product.name} className="h-full w-full object-contain p-3" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">{product.description}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    {product.compareAtPrice ? (
                      <span className="text-sm text-[var(--muted-foreground)] line-through">${product.compareAtPrice.toFixed(2)}</span>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          )}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              className={`h-10 w-10 rounded-full text-sm transition ${page === 1 ? "bg-[var(--primary)] text-white" : "border border-[var(--border)] hover:bg-[var(--accent)]"}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

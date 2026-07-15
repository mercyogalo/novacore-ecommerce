"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "../types";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images?.length ? product.images : [product.image];
  const [active, setActive] = useState(images[0]);

  return (
    <div className="space-y-4">
      <motion.div
        key={active}
        initial={{ opacity: 0.8, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-square overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-transparent p-8"
      >
        <Image src={active} alt={product.name} fill className="object-contain" priority />
      </motion.div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className={`relative aspect-square overflow-hidden rounded-xl border bg-transparent p-2 transition ${active === image ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20" : "border-[var(--border)]"}`}
          >
            <Image src={image} alt={product.name} fill className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PromoCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image src="/products/product-1.png" alt="Glow Ritual Collection" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#2b1a14]/55" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl text-white"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/75">Limited offer</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Glow Ritual Collection</h2>
          <p className="mt-5 text-sm leading-7 text-white/85 md:text-base">
            Discover our curated gift sets and body care essentials. Thoughtfully packaged for everyday luxury and special moments.
          </p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex bg-white text-[var(--foreground)] hover:opacity-90">
            Shop the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

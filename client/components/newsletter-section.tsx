"use client";

import { motion } from "framer-motion";

export function NewsletterSection() {
  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card mx-auto max-w-3xl p-8 text-center md:p-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Newsletter</p>
        <h2 className="mt-3 text-3xl font-semibold">Join the Bare Bliss community</h2>
        <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
          Receive skincare tips, exclusive offers, and early access to new collections.
        </p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <input type="email" placeholder="Enter your email" className="input-field max-w-md rounded-full px-5 sm:flex-1" />
          <button type="button" className="btn-primary shrink-0 rounded-full px-8">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}

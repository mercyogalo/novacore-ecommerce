"use client";

import { motion } from "framer-motion";
import { FlaskConical, Leaf, Rabbit, Truck } from "lucide-react";

const items = [
  { icon: Leaf, title: "Premium Ingredients", text: "Botanical actives and nourishing oils in every formula." },
  { icon: FlaskConical, title: "Dermatologically Tested", text: "Developed with skin safety and comfort in mind." },
  { icon: Rabbit, title: "Cruelty Free", text: "Never tested on animals, always crafted with care." },
  { icon: Truck, title: "Fast Delivery", text: "Reliable shipping so your routine never waits." }
];

export function WhyChooseUs() {
  return (
    <section className="container page-section">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Why choose us</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">The Bare Bliss difference</h2>
        <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
          Clean luxury skincare designed for calm rituals, visible results, and everyday confidence.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="card p-6 text-center transition-shadow hover:shadow-[var(--shadow-md)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]">
              <Icon className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

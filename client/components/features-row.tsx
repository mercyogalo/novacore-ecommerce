"use client";

import { motion } from "framer-motion";
import { Headphones, RefreshCw, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", text: "Complimentary delivery on orders over $50." },
  { icon: ShieldCheck, title: "Secure Payment", text: "Safe checkout with encrypted transactions." },
  { icon: RefreshCw, title: "Easy Returns", text: "Hassle-free returns within 30 days." },
  { icon: Headphones, title: "24/7 Customer Support", text: "Our team is here whenever you need us." }
];

export function FeaturesRow() {
  return (
    <section className="bg-white py-10">
      <div className="container grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="card flex flex-col items-center p-6 text-center transition-shadow hover:shadow-[var(--shadow-md)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]">
              <Icon className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

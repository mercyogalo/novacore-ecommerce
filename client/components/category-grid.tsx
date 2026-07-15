"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "../types";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Link href={`/category/${category.slug}`} className="group flex flex-col items-center text-center">
            <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] shadow-[var(--shadow-sm)] transition duration-300 group-hover:scale-105 group-hover:shadow-[var(--shadow-md)] md:h-44 md:w-44">
              <div className="relative h-[72%] w-[72%]">
                <Image src={category.image} alt={category.name} fill className="object-contain" />
              </div>
            </div>
            <h3 className="mt-4 text-base font-medium text-[var(--foreground)] transition group-hover:text-[var(--primary)] md:text-lg">
              {category.name}
            </h3>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

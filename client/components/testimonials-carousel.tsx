"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { Testimonial } from "../types";

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  const goPrev = () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setActive((current) => (current + 1) % testimonials.length);

  return (
    <section className="py-20">
      <div className="container max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">What our customers say</h2>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`relative h-12 w-12 overflow-hidden rounded-full border-2 transition ${index === active ? "scale-110 border-[var(--primary)]" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <Image src={item.avatar} alt={item.name} fill className="object-cover" />
            </button>
          ))}
        </div>

        <div className="relative mt-10 flex min-h-[220px] items-center">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="absolute left-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white transition hover:bg-[var(--accent)] md:-left-2 lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="mx-auto w-full max-w-2xl px-14 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < current.rating ? "fill-[var(--primary)] text-[var(--primary)]" : "text-[var(--border)]"}`}
                    />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-8 text-[var(--foreground)] md:text-xl">"{current.text}"</p>
                <p className="mt-6 font-medium">{current.name}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{current.product}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="absolute right-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white transition hover:bg-[var(--accent)] md:-right-2 lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

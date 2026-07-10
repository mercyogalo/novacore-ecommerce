"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type LoopCategory = {
  id: string;
  slug: string;
  name: string;
  image: string;
};

export function CategoryLoopCarousel({ categories }: { categories: LoopCategory[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pageCount = Math.max(1, Math.ceil(categories.length / 3));

  const goToPage = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const wrapped = (index + pageCount) % pageCount;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = pageCount > 1 ? (maxScroll * wrapped) / (pageCount - 1) : 0;
    el.scrollTo({ left: target, behavior: "smooth" });
    setActivePage(wrapped);
  };

  useEffect(() => {
    if (pageCount <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setActivePage((current) => {
        const next = (current + 1) % pageCount;
        const el = scrollRef.current;
        if (el) {
          const maxScroll = el.scrollWidth - el.clientWidth;
          const target = pageCount > 1 ? (maxScroll * next) / (pageCount - 1) : 0;
          el.scrollTo({ left: target, behavior: "smooth" });
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [pageCount, isPaused]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group/item flex w-[calc((100%-2*1rem)/3)] shrink-0 snap-start flex-col items-center gap-3"
          >
            <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden border-none bg-[var(--muted)] shadow-[var(--shadow-sm)] transition duration-300 group-hover/item:shadow-[var(--shadow-md)]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 20vw, 30vw"
                className="object-cover transition duration-500 group-hover/item:scale-105"
              />
            </div>
            <p className="text-center text-xs font-medium text-[var(--foreground)] md:text-sm">
              {category.name}
            </p>
          </Link>
        ))}
      </div>

      {pageCount > 1 ? (
        <>
          <button
            type="button"
            onClick={() => goToPage(activePage - 1)}
            aria-label="Previous categories"
            className="absolute left-2 top-[40%] -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-[var(--shadow-md)] transition hover:bg-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goToPage(activePage + 1)}
            aria-label="Next categories"
            className="absolute right-2 top-[40%] -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-[var(--shadow-md)] transition hover:bg-white"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === activePage ? "w-5 bg-[var(--primary)]" : "w-2 bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
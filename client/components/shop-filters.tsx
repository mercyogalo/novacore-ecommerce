"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

const filterSections = [
  {
    title: "Price",
    options: ["Under $25", "$25 – $50", "$50+"]
  },
  {
    title: "Category",
    options: ["Body Lotions", "Shea Butter", "Face Creams", "Gift Sets"]
  },
  {
    title: "Skin Type",
    options: ["Dry", "Normal", "Sensitive", "All"]
  },
  {
    title: "Ingredient",
    options: ["Shea Butter", "Aloe Vera", "Vitamin E", "Rosehip Oil"]
  },
  {
    title: "Availability",
    options: ["In stock", "On sale"]
  }
];

function FilterPanel({ onClose }: { onClose?: () => void }) {
  return (
    <div className="space-y-6">
      {onClose ? (
        <div className="flex items-center justify-between lg:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button type="button" aria-label="Close filters" onClick={onClose} className="rounded-full p-2 hover:bg-[var(--accent)]">
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : null}

      {filterSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--muted-foreground)]">{section.title}</h3>
          <div className="mt-3 space-y-2">
            {section.options.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-sm transition hover:bg-[var(--accent)]">
                <input type="checkbox" className="accent-[var(--primary)]" />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ShopFilters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="btn-secondary mb-6 inline-flex lg:hidden">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>

      <aside className="hidden lg:block">
        <div className="card sticky top-28 p-6">
          <FilterPanel />
        </div>
      </aside>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close filter overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-[var(--shadow-lg)] lg:hidden"
            >
              <FilterPanel onClose={() => setOpen(false)} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function ShopToolbar({
  view,
  onViewChange
}: {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <select className="input-field w-auto min-w-[180px] rounded-full px-4 py-2 text-sm">
        <option>Sort by featured</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
        <option>Top rated</option>
      </select>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewChange("grid")}
          className={`rounded-full px-4 py-2 text-sm transition ${view === "grid" ? "bg-[var(--primary)] text-white" : "border border-[var(--border)]"}`}
        >
          Grid
        </button>
        <button
          type="button"
          onClick={() => onViewChange("list")}
          className={`rounded-full px-4 py-2 text-sm transition ${view === "list" ? "bg-[var(--primary)] text-white" : "border border-[var(--border)]"}`}
        >
          List
        </button>
      </div>
    </div>
  );
}

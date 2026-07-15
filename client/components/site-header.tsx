"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X
} from "lucide-react";
import { useState } from "react";
import categoriesData from "../data/categories.json";
import type { Category } from "../types";

const categories = categoriesData as Category[];

const mainNav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", mega: true },
  { label: "Categories", href: "/shop", dropdown: true },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="group relative px-1 py-2 text-sm font-medium text-[var(--foreground)]">
      <span className={active ? "text-[var(--primary)]" : "text-[var(--muted-foreground)] transition group-hover:text-[var(--foreground)]"}>
        {label}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="border-b border-[var(--border)] bg-[var(--background)]"
      >
        <div className="container flex items-center justify-between gap-4 py-5">
          <div className="flex items-center gap-4 lg:gap-8">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>

            <Link href="/" className="flex items-center">
              <Image src="/logos/logo.png" alt="Bare Bliss" width={88} height={36} className="h-8 w-auto" priority />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {mainNav.map((item) =>
                item.mega ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setShopOpen(true)}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    <button type="button" className="group flex items-center gap-1 px-1 py-2 text-sm font-medium">
                      <span className={isActive(item.href) ? "text-[var(--primary)]" : "text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]"}>
                        {item.label}
                      </span>
                      <ChevronDown className={`h-4 w-4 transition ${shopOpen ? "rotate-180 text-[var(--primary)]" : "text-[var(--muted-foreground)]"}`} />
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ${isActive(item.href) || shopOpen ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </button>

                    <AnimatePresence>
                      {shopOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full z-50 w-[720px] pt-3"
                        >
                          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-lg)]">
                            <div className="mb-4 flex items-center justify-between">
                              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Shop by category</p>
                              <Link href="/shop" className="text-sm text-[var(--primary)] hover:underline">
                                View all
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {categories.map((category) => (
                                <Link
                                  key={category.id}
                                  href={`/category/${category.slug}`}
                                  className="rounded-xl p-3 transition hover:bg-[var(--accent)]"
                                >
                                  <p className="text-sm font-medium">{category.name}</p>
                                  <p className="mt-1 text-xs text-[var(--muted-foreground)]">{category.productCount ?? 0} products</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setCategoriesOpen(true)}
                    onMouseLeave={() => setCategoriesOpen(false)}
                  >
                    <button type="button" className="group flex items-center gap-1 px-1 py-2 text-sm font-medium">
                      <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition ${categoriesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {categoriesOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute left-0 top-full z-50 w-56 pt-3"
                        >
                          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-2 shadow-[var(--shadow-md)]">
                            {categories.map((category) => (
                              <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                className="block rounded-lg px-3 py-2 text-sm text-[var(--muted-foreground)] transition hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink key={item.label} href={item.href} label={item.label} active={isActive(item.href)} />
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            <Link href="/search" aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[var(--accent)]">
              <Search className="h-4 w-4" />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="hidden h-9 w-9 items-center justify-center rounded-full transition hover:bg-[var(--accent)] sm:flex">
              <Heart className="h-4 w-4" />
            </Link>
            <Link href="/cart" aria-label="Cart" className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[var(--accent)]">
              <ShoppingBag className="h-4 w-4" />
            </Link>
            <Link href="/account" aria-label="Account" className="hidden h-9 w-9 items-center justify-center rounded-full transition hover:bg-[var(--accent)] md:flex">
              <User className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-[var(--shadow-lg)] lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
                <Image src="/logos/logo.png" alt="Bare Bliss" width={88} height={32} className="h-8 w-auto" />
                <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-full p-2 hover:bg-[var(--accent)]">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5">
                {mainNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block border-b border-[var(--border)] py-4 text-base ${isActive(item.href) ? "font-medium text-[var(--primary)]" : "text-[var(--foreground)]"}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6 space-y-3">
                  <Link href="/search" onClick={() => setMobileOpen(false)} className="btn-secondary w-full justify-center">
                    Search
                  </Link>
                  <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="btn-secondary w-full justify-center">
                    Wishlist
                  </Link>
                  <Link href="/account" onClick={() => setMobileOpen(false)} className="btn-secondary w-full justify-center">
                    Account
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

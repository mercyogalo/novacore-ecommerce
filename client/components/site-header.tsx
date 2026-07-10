import Link from "next/link";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-5">
        <img src="/logos/logo.png" alt="Bare Bliss Logo" className="h-20 w-auto" />        
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/search" className="hidden rounded-full border border-[var(--border)] px-4 py-2 transition hover:bg-[var(--accent)] md:inline-flex">
            Search
          </Link>
          <Link href="/auth/login" className="rounded-full border border-[var(--border)] px-4 py-2 transition hover:bg-[var(--accent)]">
            Sign in
          </Link>
          <Link href="/cart" className="rounded-full bg-[var(--primary)] px-4 py-2 text-white transition hover:opacity-90">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}

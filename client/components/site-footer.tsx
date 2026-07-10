import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Returns", href: "/returns" },
  { label: "Shipping", href: "/shipping-policy" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/60">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] uppercase">AURA</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted-foreground)]">
            Premium organic skincare template built for modern ecommerce, with reusable sections, static data, and a luxury editorial feel.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted-foreground)]">
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Policies</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted-foreground)]">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

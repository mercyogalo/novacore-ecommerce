import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Returns", href: "/returns" },
  { label: "Shipping", href: "/shipping-policy" }
];

export function SiteFooter() {
  return (
    <footer className="bg-[#2b1a14] text-white">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <img src="/logos/logo.png" alt="Bare Bliss Logo" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Premium organic skincare crafted for calm rituals, clean ingredients, and everyday glow.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href="/shop" className="transition hover:text-white">
              Shop
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">Policies</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

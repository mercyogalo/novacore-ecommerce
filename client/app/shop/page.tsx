import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MotionSection } from "../../components/motion-section";
import { ShopContent } from "../../components/shop-content";
import { getProducts } from "../../lib/data";

export default function ShopPage() {
  const products = getProducts();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0">
          <Image src="/banners/banner-1.svg" alt="Shop banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#2b1a14]/45" />
        </div>
        <div className="container relative py-16 md:py-20">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Shop</span>
          </nav>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Shop all products</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
            Discover our complete collection of organic body care, face creams, oils, and gift sets.
          </p>
        </div>
      </section>

      <MotionSection className="container py-12">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <Link href="/" className="hover:text-[var(--foreground)]">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[var(--foreground)]">Shop</span>
        </nav>
        <ShopContent products={products} />
      </MotionSection>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { CategoryLoopCarousel } from "../components/category-loop-carousel";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import { getBanners, getCategories, getFaq, getProducts, getTestimonials } from "../lib/data";

const benefits = [
  { icon: Leaf, title: "Clean ingredients", text: "Thoughtfully sourced formulas designed for everyday use." },
  { icon: ShieldCheck, title: "Sensitive-skin friendly", text: "Calming, skin-first routines with minimal irritation." },
  { icon: BadgeCheck, title: "Trusted quality", text: "Clear product storytelling and premium packaging cues." }
];

export default function HomePage() {
  const featuredProducts = getProducts().slice(0, 6);
  const categories = getCategories();
  const testimonials = getTestimonials();
  const faq = getFaq();
  const banners = getBanners();

  return (
    <main>
      <section className="relative border-b border-[var(--border)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-1.png"
            alt="Premium skincare hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="container relative py-24 lg:py-24">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">Organic Skincare</p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-white md:text-6xl">
              Luxury skincare crafted for calm, glow and conversion.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              A premium storefront template with reusable ecommerce sections, graceful motion-ready structure, and editable global design tokens.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">
                Shop collection <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {banners.map((banner) => (
            <Link key={banner.id} href={banner.href} className="card group relative overflow-hidden">
              <div className="relative aspect-[2/1] bg-[var(--muted)]">
                <Image src={banner.image} alt={banner.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-black/20 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.25em]">{banner.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold">{banner.title}</h3>
                <span className="mt-3 text-sm">{banner.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading
          eyebrow="Shop by category"
          title="Everything your customers expect in one clean system."
          description="Featured collections, ingredient-led browsing, and category-first merchandising are all wired into the same reusable structure."
        />
        <div className="mt-10">
          <CategoryLoopCarousel categories={categories} />
        </div>
      </section>

      <section className="bg-[var(--muted)]/40 py-16">
        <div className="container">
          <SectionHeading
            eyebrow="Featured products"
            title="Designed for premium product discovery."
            description="Product cards are built as reusable frontend-only units with image, pricing, badge, rating, and category metadata."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading eyebrow="Why choose us" title="A calm luxury system that stays easy to customize." description="Every visual decision is controlled through global CSS variables so colors, radius, and spacing can be changed in one place." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card p-6">
              <Icon className="text-[var(--primary)]" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--muted)]/35 py-16">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Loved by customers who value clean luxury." description="Social proof sections are ready for ratings, quotes, and product attribution." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.id} className="card p-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{item.product}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">"{item.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
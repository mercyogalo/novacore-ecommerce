import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CategoryGrid } from "../components/category-grid";
import { FeaturesRow } from "../components/features-row";
import { MotionSection } from "../components/motion-section";
import { NewsletterSection } from "../components/newsletter-section";
import { ProductCard } from "../components/product-card";
import { PromoCta } from "../components/promo-cta";
import { SectionHeading } from "../components/section-heading";
import { TestimonialsCarousel } from "../components/testimonials-carousel";
import { WhyChooseUs } from "../components/why-choose-us";
import { getBanners, getCategories, getProducts, getTestimonials } from "../lib/data";

export default function HomePage() {
  const bestSellers = getProducts().slice(0, 4);
  const categories = getCategories();
  const testimonials = getTestimonials();
  const banners = getBanners();

  return (
    <main>
      <section className="relative overflow-hidden">
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

      <FeaturesRow />

      <MotionSection className="container page-section">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find your perfect ritual"
          description="Explore our full range of organic skincare categories."
          align="center"
        />
        <div className="mt-12">
          <CategoryGrid categories={categories} />
        </div>
      </MotionSection>

      <MotionSection className="py-16">
        <div className="container">
          <SectionHeading
            eyebrow="Best sellers"
            title="Customer favorites"
            description="Our most-loved formulas, chosen for results you can feel."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>
      </MotionSection>

      <PromoCta />

      <WhyChooseUs />

      <TestimonialsCarousel testimonials={testimonials} />

      <NewsletterSection />
    </main>
  );
}

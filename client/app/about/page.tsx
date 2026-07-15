import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "../../components/motion-section";
import { SectionHeading } from "../../components/section-heading";
import { TestimonialsCarousel } from "../../components/testimonials-carousel";
import { getTestimonials } from "../../lib/data";

const team = [
  { name: "Sofia Reed", role: "Founder", image: "/team/team-1.svg" },
  { name: "Amara Johnson", role: "Formulation Lead", image: "/team/team-2.svg" },
  { name: "Elena Ruiz", role: "Creative Director", image: "/team/team-3.svg" }
];

const timeline = [
  { year: "2018", title: "Bare Bliss founded", text: "Started with a single shea butter formula and a vision for clean luxury." },
  { year: "2020", title: "Expanded collection", text: "Introduced body lotions, face creams, and gift sets." },
  { year: "2023", title: "Community growth", text: "Reached thousands of customers who value transparent skincare." },
  { year: "2026", title: "Today", text: "Continuing to craft premium organic rituals for everyday glow." }
];

export default function AboutPage() {
  const testimonials = getTestimonials();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0">
          <Image src="/hero/hero-2.svg" alt="About Bare Bliss" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#2b1a14]/50" />
        </div>
        <div className="container relative py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">About Bare Bliss</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold text-white md:text-5xl">Skincare rooted in nature, refined for modern rituals.</h1>
        </div>
      </section>

      <MotionSection className="container page-section">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Crafted with intention" description="Bare Bliss was created to make premium organic skincare feel calm, modern, and trustworthy." />
            <p className="mt-6 text-sm leading-7 text-[var(--muted-foreground)]">
              Every product is designed around clean ingredients, elegant rituals, and formulas that feel as luxurious as they perform. We believe skincare should be simple, honest, and deeply nourishing.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--accent)]">
            <Image src="/products/product-1.png" alt="Bare Bliss products" fill className="object-contain p-8" />
          </div>
        </div>
      </MotionSection>

      <section className="bg-[var(--muted)]/40 py-16">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="card p-8">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              To elevate everyday skincare through thoughtfully sourced ingredients and premium experiences that feel accessible and honest.
            </p>
          </article>
          <article className="card p-8">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              A world where clean luxury skincare is the standard — transparent, effective, and designed for every skin story.
            </p>
          </article>
        </div>
      </section>

      <MotionSection className="container page-section">
        <SectionHeading eyebrow="Why Bare Bliss" title="Natural care, elevated" description="We combine botanical wisdom with modern formulation for results you can see and feel." align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Clean ingredient sourcing", "Gentle, effective formulas", "Premium textures and scents"].map((item) => (
            <div key={item} className="card p-6 text-center text-sm text-[var(--muted-foreground)]">
              {item}
            </div>
          ))}
        </div>
      </MotionSection>

      <section className="border-y border-[var(--border)] bg-[var(--accent)]/35 py-16">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius)] bg-[var(--accent)]">
            <Image src="/ingredients/ingredient-1.svg" alt="Natural ingredients" fill className="object-contain p-10" />
          </div>
          <div>
            <SectionHeading eyebrow="Natural ingredients" title="Botanicals you can trust" description="Shea butter, aloe, rosehip, and vitamin-rich oils form the heart of every Bare Bliss formula." />
          </div>
        </div>
      </section>

      <MotionSection className="container page-section">
        <SectionHeading eyebrow="Our promise" title="What we stand behind" description="Quality, transparency, and care in every jar and bottle." align="center" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {["No harsh fillers", "Cruelty-free practices", "Thoughtful packaging", "Customer-first support"].map((item) => (
            <div key={item} className="card p-5 text-sm text-[var(--muted-foreground)]">
              {item}
            </div>
          ))}
        </div>
      </MotionSection>

      <section className="bg-[var(--muted)]/40 py-16">
        <div className="container">
          <SectionHeading eyebrow="Timeline" title="Our journey" description="From a single formula to a full collection of organic skincare." align="center" />
          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <article key={item.year} className="card grid gap-4 p-6 md:grid-cols-[120px_1fr]">
                <p className="text-lg font-semibold text-[var(--primary)]">{item.year}</p>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="container page-section">
        <SectionHeading eyebrow="Meet our team" title="The people behind Bare Bliss" description="Passionate formulators, creatives, and care specialists." align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="card overflow-hidden">
              <div className="relative aspect-square bg-[var(--accent)]">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <TestimonialsCarousel testimonials={testimonials} />

      <section className="container py-16">
        <div className="card flex flex-col items-center p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold">Ready to begin your ritual?</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted-foreground)]">
            Explore our collection and discover formulas designed for calm, glow, and everyday confidence.
          </p>
          <Link href="/shop" className="btn-primary mt-8">
            Shop now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "./section-heading";

export function ContentPage({
  title,
  description,
  items,
  children
}: {
  title: string;
  description: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <main className="container py-16">
      <SectionHeading eyebrow="Premium skincare" title={title} description={description} />
      {children}
      {items ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="card p-6">
              <p className="text-sm text-[var(--muted-foreground)]">{item}</p>
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/shop" className="btn-primary">
          Continue shopping
        </Link>
        <Link href="/" className="btn-secondary">
          Go home
        </Link>
      </div>
    </main>
  );
}

export function BlogCard({ post }: { post: { slug: string; title: string; excerpt: string; image: string; category: string; readTime: string } }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <div className="relative aspect-[16/10] bg-[var(--muted)]">
        <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{post.category}</p>
        <h3 className="text-xl font-medium">{post.title}</h3>
        <p className="text-sm leading-7 text-[var(--muted-foreground)]">{post.excerpt}</p>
        <p className="text-xs text-[var(--muted-foreground)]">{post.readTime}</p>
      </div>
    </Link>
  );
}

export function CategoryCard({ category }: { category: { slug: string; name: string; image: string; productCount?: number } }) {
  return (
    <Link href={`/category/${category.slug}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <div className="relative aspect-[4/3] bg-[var(--muted)]">
        <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium">{category.name}</h3>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">{category.productCount ?? 0} products</p>
      </div>
    </Link>
  );
}

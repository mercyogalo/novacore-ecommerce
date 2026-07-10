import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "../../../lib/data";

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getBlogs().filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <main className="container py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">{post.category}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold">{post.title}</h1>
      <p className="mt-4 text-sm text-[var(--muted-foreground)]">
        {post.author} · {post.date} · {post.readTime}
      </p>
      <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="prose mt-8 max-w-3xl text-[var(--muted-foreground)]">
        <p className="text-lg leading-8">{post.excerpt}</p>
        <p className="mt-6 leading-8">
          This article shell is ready for rich editorial content, ingredient education, and routine guidance. Replace with CMS or API content later.
        </p>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Related articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.id} href={`/blog/${item.slug}`} className="card p-6 transition hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{item.category}</p>
                <h3 className="mt-3 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted-foreground)]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

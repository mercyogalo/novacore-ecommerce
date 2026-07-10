import Image from "next/image";
import { BlogCard } from "../../components/content-page";
import { SectionHeading } from "../../components/section-heading";
import { getBlogs } from "../../lib/data";

export default function BlogPage() {
  const posts = getBlogs();

  return (
    <main className="container py-16">
      <SectionHeading title="Blog" description="Editorial skincare content with categories, search, and related posts." />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

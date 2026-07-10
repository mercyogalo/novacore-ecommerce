import { AdminPageHeader } from "../../components/content-page";

const posts = [
  { title: "How to Build a Simple Night Routine", category: "Routine", status: "Published" },
  { title: "Why Shea Butter Belongs in Every Cabinet", category: "Ingredients", status: "Published" },
  { title: "Gift Sets That Feel Personal", category: "Gifting", status: "Draft" }
];

export default function BlogPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Content" title="Blog management" description="Posts, categories, tags, and comments." actions={<button className="btn-primary">New post</button>} />
      <section className="mt-8 grid gap-4">
        {posts.map((post) => (
          <article key={post.title} className="card flex items-center justify-between p-5">
            <div>
              <p className="font-medium">{post.title}</p>
              <p className="text-sm text-[var(--muted-foreground)]">{post.category}</p>
            </div>
            <span className="badge">{post.status}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

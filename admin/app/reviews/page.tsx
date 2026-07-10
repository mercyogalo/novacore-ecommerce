import { AdminPageHeader } from "../../components/content-page";

const reviews = [
  { product: "Shea Glow Body Lotion", user: "Amara Johnson", rating: 5, status: "Approved" },
  { product: "Radiance Face Cream", user: "Maya Chen", rating: 4, status: "Pending" },
  { product: "Glow Ritual Gift Set", user: "Elena Ruiz", rating: 5, status: "Approved" }
];

export default function ReviewsPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Community" title="Reviews" description="Approve, reject, delete, reply, and manage customer ratings and images." />
      <section className="mt-8 grid gap-4">
        {reviews.map((review) => (
          <article key={review.product} className="card flex flex-wrap items-center justify-between gap-4 p-5">
            <div>
              <p className="font-medium">{review.product}</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                {review.user} · {review.rating} / 5
              </p>
            </div>
            <div className="flex gap-2">
              <span className="badge">{review.status}</span>
              <button className="btn-secondary">Reply</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

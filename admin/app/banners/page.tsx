import Image from "next/image";
import { AdminPageHeader } from "../../components/content-page";

const banners = [
  { title: "Summer Glow Event", image: "/banners/banner-1.svg", status: "Live" },
  { title: "New Arrivals", image: "/banners/banner-2.svg", status: "Live" },
  { title: "Gift Season", image: "/banners/banner-3.svg", status: "Draft" }
];

export default function BannersPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Merchandising" title="Banners" description="Create and schedule homepage and campaign banners." actions={<button className="btn-primary">Create banner</button>} />
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {banners.map((banner) => (
          <article key={banner.title} className="card overflow-hidden">
            <div className="relative aspect-[3/1] bg-[var(--muted)]">
              <Image src={banner.image} alt={banner.title} fill className="object-cover" />
            </div>
            <div className="flex items-center justify-between p-5">
              <p className="font-medium">{banner.title}</p>
              <span className="badge">{banner.status}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

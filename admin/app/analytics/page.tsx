import { AdminPageHeader } from "../../components/content-page";

const analytics = [
  { label: "Visitors", value: "48.2k", change: "+6.4%" },
  { label: "Conversion", value: "3.8%", change: "+0.4%" },
  { label: "Avg. order", value: "$54.20", change: "+2.1%" },
  { label: "Top product", value: "Shea Glow Body Lotion", change: "Best seller" }
];

export default function AnalyticsPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Insights" title="Analytics" description="Revenue charts, sales charts, visitors, orders, conversion, and top customers." />
      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {analytics.map((item) => (
          <article key={item.label} className="card p-6">
            <p className="text-sm text-[var(--muted-foreground)]">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold">{item.value}</p>
            <p className="mt-2 text-xs text-[var(--muted-foreground)]">{item.change}</p>
          </article>
        ))}
      </section>
      <section className="mt-8 card p-6">
        <div className="grid h-72 place-items-center rounded-[var(--radius)] border border-dashed border-[var(--border)] bg-[var(--muted)]/40 text-sm text-[var(--muted-foreground)]">
          Revenue and sales chart area ready for Recharts
        </div>
      </section>
    </main>
  );
}

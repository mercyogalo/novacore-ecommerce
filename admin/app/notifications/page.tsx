import { AdminPageHeader } from "../../components/content-page";

const notifications = [
  { title: "New order received", detail: "Order AURA-1004 from Jordan Lee", time: "2m ago" },
  { title: "Low stock alert", detail: "Golden Body Oil is below threshold", time: "18m ago" },
  { title: "Review pending", detail: "Radiance Face Cream needs approval", time: "1h ago" }
];

export default function NotificationsPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Inbox" title="Notifications" description="Store alerts, order updates, inventory warnings, and review activity." />
      <section className="mt-8 space-y-4">
        {notifications.map((item) => (
          <article key={item.title} className="card p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">{item.title}</p>
              <span className="text-xs text-[var(--muted-foreground)]">{item.time}</span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.detail}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

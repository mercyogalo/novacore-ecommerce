import { AdminPageHeader } from "../../components/content-page";

const coupons = [
  { code: "GLOW20", discount: "20%", status: "Active", uses: 128 },
  { code: "WELCOME10", discount: "10%", status: "Active", uses: 412 },
  { code: "SUMMER15", discount: "15%", status: "Scheduled", uses: 0 }
];

export default function CouponsPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Promotions" title="Coupons" description="Create and manage discount codes." actions={<button className="btn-primary">Create coupon</button>} />
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {coupons.map((coupon) => (
          <article key={coupon.code} className="card p-6">
            <p className="text-2xl font-semibold">{coupon.code}</p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">{coupon.discount} off</p>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              {coupon.status} · {coupon.uses} uses
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

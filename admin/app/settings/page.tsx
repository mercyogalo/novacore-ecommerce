import { AdminPageHeader } from "../../components/content-page";

export default function SettingsPage() {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Configuration" title="Settings" description="Store information, brand colors, fonts, social links, policies, payments, shipping, email templates, and SEO." />
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <form className="card space-y-4 p-6">
          <h2 className="text-lg font-semibold">Store information</h2>
          <input className="input-field" defaultValue="AURA Skincare" placeholder="Store name" />
          <input className="input-field" defaultValue="hello@aura-skincare.com" placeholder="Support email" />
          <button type="button" className="btn-primary">
            Save changes
          </button>
        </form>
        <div className="card space-y-4 p-6">
          <h2 className="text-lg font-semibold">Brand colors</h2>
          {[
            ["Primary", "#9c6b4b"],
            ["Accent", "#f1e6d9"],
            ["Background", "#ffffff"]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-xl border border-[var(--border)] px-4 py-3 text-sm">
              <span>{label}</span>
              <span className="text-[var(--muted-foreground)]">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import { SectionHeading } from "../../components/section-heading";
import { getFaq } from "../../lib/data";

export default function ContactPage() {
  const faq = getFaq().slice(0, 3);

  return (
    <main className="container py-16">
      <SectionHeading title="Contact us" description="Form, store locations, FAQs, and social links for customer support." />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form className="card space-y-4 p-6">
          <input className="input-field" placeholder="Full name" />
          <input className="input-field" placeholder="Email address" type="email" />
          <textarea className="input-field min-h-32" placeholder="How can we help?" />
          <button type="button" className="btn-primary">
            Send message
          </button>
        </form>

        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="font-medium">Store locations</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">New York · London · Lagos</p>
          </div>
          <div className="card h-48 p-6 text-sm text-[var(--muted-foreground)]">Map placeholder</div>
          {faq.map((item) => (
            <details key={item.id} className="card p-5">
              <summary className="cursor-pointer font-medium">{item.question}</summary>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}

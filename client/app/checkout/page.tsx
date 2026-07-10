import Link from "next/link";
import { SectionHeading } from "../../components/section-heading";

const steps = ["Shipping", "Delivery", "Payment", "Review", "Confirmation"];

export default function CheckoutPage() {
  return (
    <main className="container py-16">
      <SectionHeading title="Checkout" description="Multi-step checkout with address selection, delivery method, payment, and order review." />

      <div className="mt-8 flex flex-wrap gap-3">
        {steps.map((step, index) => (
          <div key={step} className={`rounded-full px-4 py-2 text-sm ${index === 0 ? "bg-[var(--primary)] text-white" : "border border-[var(--border)]"}`}>
            {index + 1}. {step}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="card space-y-4 p-6">
          <h2 className="text-lg font-semibold">Shipping address</h2>
          <input className="input-field" placeholder="Full name" />
          <input className="input-field" placeholder="Street address" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="input-field" placeholder="City" />
            <input className="input-field" placeholder="Postal code" />
          </div>
          <button type="button" className="btn-primary">
            Continue to delivery
          </button>
        </form>

        <aside className="card h-fit space-y-4 p-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>$56.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>$8.00</span>
          </div>
          <div className="flex justify-between border-t border-[var(--border)] pt-4 font-medium">
            <span>Total</span>
            <span>$64.00</span>
          </div>
          <p className="text-xs text-[var(--muted-foreground)]">Login required before placing an order.</p>
          <Link href="/auth/login" className="btn-secondary w-full text-center">
            Sign in to continue
          </Link>
        </aside>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";
import { getProducts } from "../../lib/data";

export default function CartPage() {
  const cartItems = getProducts().slice(0, 2).map((product, index) => ({
    ...product,
    quantity: index + 1
  }));
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="container py-16">
      <SectionHeading title="Your cart" description="Coupon entry, shipping estimate, order summary, and checkout CTA are structured for conversion." />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <article key={item.id} className="card flex gap-4 p-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-[var(--muted)]">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">Qty: {item.quantity}</p>
                <p className="mt-2 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="card h-fit space-y-4 p-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping estimate</span>
            <span>$8.00</span>
          </div>
          <div className="flex justify-between border-t border-[var(--border)] pt-4 font-medium">
            <span>Total</span>
            <span>${(subtotal + 8).toFixed(2)}</span>
          </div>
          <input placeholder="Coupon code" className="input-field" />
          <Link href="/checkout" className="btn-primary w-full">
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}

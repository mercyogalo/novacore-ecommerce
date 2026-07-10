import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";

export default function RegisterPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md">
        <SectionHeading title="Create account" description="Register to save addresses, track orders, and leave product reviews." />
        <form className="card mt-8 space-y-4 p-6">
          <input className="input-field" placeholder="Full name" />
          <input className="input-field" placeholder="Email address" type="email" />
          <input className="input-field" placeholder="Password" type="password" />
          <label className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <input type="checkbox" /> I agree to the terms and privacy policy
          </label>
          <button type="button" className="btn-primary w-full">
            Create account
          </button>
          <Link href="/auth/login" className="block text-center text-sm text-[var(--primary)]">
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </main>
  );
}

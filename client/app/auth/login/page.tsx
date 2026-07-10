import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";

export default function LoginPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md">
        <SectionHeading title="Sign in" description="Access your account to checkout, track orders, and manage your profile." />
        <form className="card mt-8 space-y-4 p-6">
          <input className="input-field" placeholder="Email address" type="email" />
          <input className="input-field" placeholder="Password" type="password" />
          <label className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <input type="checkbox" /> Remember me
          </label>
          <button type="button" className="btn-primary w-full">
            Sign in
          </button>
          <div className="flex justify-between text-sm">
            <Link href="/auth/forgot-password" className="text-[var(--primary)]">
              Forgot password?
            </Link>
            <Link href="/auth/register" className="text-[var(--primary)]">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

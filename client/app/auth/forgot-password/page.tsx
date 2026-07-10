import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";

export default function ForgotPasswordPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md">
        <SectionHeading title="Forgot password" description="Enter your email and we'll send reset instructions." />
        <form className="card mt-8 space-y-4 p-6">
          <input className="input-field" placeholder="Email address" type="email" />
          <button type="button" className="btn-primary w-full">
            Send reset link
          </button>
          <Link href="/auth/login" className="block text-center text-sm text-[var(--primary)]">
            Back to sign in
          </Link>
        </form>
      </div>
    </main>
  );
}

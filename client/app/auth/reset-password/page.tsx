import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";

export default function ResetPasswordPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md">
        <SectionHeading title="Reset password" description="Choose a new password for your account." />
        <form className="card mt-8 space-y-4 p-6">
          <input className="input-field" placeholder="New password" type="password" />
          <input className="input-field" placeholder="Confirm password" type="password" />
          <button type="button" className="btn-primary w-full">
            Update password
          </button>
          <Link href="/auth/login" className="block text-center text-sm text-[var(--primary)]">
            Return to sign in
          </Link>
        </form>
      </div>
    </main>
  );
}

import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";

export default function VerifyEmailPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md text-center">
        <SectionHeading title="Verify your email" description="We sent a verification link to your inbox. Click it to activate your account." />
        <div className="card mt-8 p-8">
          <p className="text-sm text-[var(--muted-foreground)]">Didn't receive the email?</p>
          <button type="button" className="btn-primary mt-4">
            Resend verification
          </button>
          <Link href="/auth/login" className="mt-4 block text-sm text-[var(--primary)]">
            Back to sign in
          </Link>
        </div>
      </div>
    </main>
  );
}

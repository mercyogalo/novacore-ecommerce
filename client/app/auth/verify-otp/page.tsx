import Link from "next/link";
import { SectionHeading } from "../../../components/section-heading";

export default function VerifyOtpPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-md">
        <SectionHeading title="Enter verification code" description="Enter the 6-digit code sent to your phone or email." />
        <form className="card mt-8 space-y-4 p-6">
          <input className="input-field text-center tracking-[0.5em]" placeholder="000000" maxLength={6} />
          <button type="button" className="btn-primary w-full">
            Verify code
          </button>
          <Link href="/auth/login" className="block text-center text-sm text-[var(--primary)]">
            Back to sign in
          </Link>
        </form>
      </div>
    </main>
  );
}

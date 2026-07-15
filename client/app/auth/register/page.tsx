import Link from "next/link";
import { AuthDivider, AuthSplitLayout, GoogleAuthButton } from "../../../components/auth-split-layout";

export default function RegisterPage() {
  return (
    <AuthSplitLayout
      title="Create your account"
      subtitle="Join Bare Bliss to save addresses, track orders, and leave product reviews."
      footer={
        <span>
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-[var(--primary)] hover:underline">
            Sign in
          </Link>
        </span>
      }
    >
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input className="input-field" placeholder="Full name" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input className="input-field" placeholder="you@example.com" type="email" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Phone</label>
          <input className="input-field" placeholder="Phone number" type="tel" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>
          <input className="input-field" placeholder="Create a password" type="password" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Confirm password</label>
          <input className="input-field" placeholder="Confirm your password" type="password" />
        </div>
        <label className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
          <input type="checkbox" className="mt-1 accent-[var(--primary)]" /> I agree to the terms and privacy policy
        </label>
        <button type="button" className="btn-primary w-full">
          Register
        </button>
        <AuthDivider />
        <GoogleAuthButton />
      </form>
    </AuthSplitLayout>
  );
}

import Link from "next/link";
import { AuthDivider, AuthSplitLayout, GoogleAuthButton } from "../../../components/auth-split-layout";

export default function LoginPage() {
  return (
    <AuthSplitLayout
      title="Welcome back"
      subtitle="Sign in to access your account, track orders, and manage your profile."
      footer={
        <span>
          New to Bare Bliss?{" "}
          <Link href="/auth/register" className="font-medium text-[var(--primary)] hover:underline">
            Create an account
          </Link>
        </span>
      }
    >
      <form className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input className="input-field" placeholder="you@example.com" type="email" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>
          <input className="input-field" placeholder="Enter your password" type="password" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[var(--muted-foreground)]">
            <input type="checkbox" className="accent-[var(--primary)]" /> Remember me
          </label>
          <Link href="/auth/forgot-password" className="text-[var(--primary)] hover:underline">
            Forgot password?
          </Link>
        </div>
        <button type="button" className="btn-primary w-full">
          Login
        </button>
        <AuthDivider />
        <GoogleAuthButton />
      </form>
    </AuthSplitLayout>
  );
}

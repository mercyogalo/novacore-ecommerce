import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted-foreground)]">The admin page you requested does not exist.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to overview
      </Link>
    </main>
  );
}

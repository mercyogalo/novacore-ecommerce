"use client";

import Image from "next/image";
import { ReactNode } from "react";

export function AuthSplitLayout({
  title,
  subtitle,
  children,
  footer
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <main className="min-h-[calc(100vh-80px)]">
      <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image src="/hero/hero-1.png" alt="Bare Bliss lifestyle" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1a14]/95 via-[#2b1a14]/45 to-[#2b1a14]/20" />
          <div className="relative flex h-full min-h-[320px] flex-col justify-end p-8 text-white md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-white/75">Bare Bliss</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">Elevated skincare rituals for every day.</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/85">
              Join a community that values clean ingredients, calm luxury, and skin that feels as good as it looks.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 md:px-12 lg:py-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{subtitle}</p>
            </div>
            <div className="card p-6 md:p-8">{children}</div>
            <div className="mt-6 text-center text-sm">{footer}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function AuthDivider() {
  return (
    <div className="relative my-6 text-center text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
      <span className="bg-white px-3">or</span>
      <div className="absolute inset-x-0 top-1/2 -z-10 border-t border-[var(--border)]" />
    </div>
  );
}

export function GoogleAuthButton() {
  return (
    <button type="button" className="btn-secondary w-full justify-center">
      Continue with Google
    </button>
  );
}

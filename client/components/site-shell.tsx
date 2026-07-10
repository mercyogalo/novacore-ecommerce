import { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">{children}</div>;
}

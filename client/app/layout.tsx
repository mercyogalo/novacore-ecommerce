import "../styles/index.css";
import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Bare Bliss | Premium Organic Skincare",
  description: "Premium organic skincare storefront"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SiteShell>
      </body>
    </html>
  );
}

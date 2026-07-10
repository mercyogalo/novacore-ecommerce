import "../styles/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SiteShell } from "../components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bare Bliss | Premium Organic Skincare",
  description: "Premium organic skincare storefront"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteShell>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SiteShell>
      </body>
    </html>
  );
}

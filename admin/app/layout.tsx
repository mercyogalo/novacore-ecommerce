import "../styles/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AdminShell } from "../components/admin-shell";
import { AdminSidebar } from "../components/admin-sidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "AURA Admin",
  description: "Premium skincare admin dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminShell>
          <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
            <AdminSidebar />
            <div className="min-w-0">{children}</div>
          </div>
        </AdminShell>
      </body>
    </html>
  );
}

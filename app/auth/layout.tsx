import type { Metadata } from "next";

export const metadata: Metadata = {
  // Stop search engines from indexing auth pages
  robots: { index: false, follow: false },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

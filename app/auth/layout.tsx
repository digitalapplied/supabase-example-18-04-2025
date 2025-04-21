import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server'; // Use server client here

export const metadata: Metadata = {
  // Stop search engines from indexing auth pages
  robots: { index: false, follow: false },
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect every /auth/* page in one place (for already logged-in users)
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    // If the visitor is already signed‑in, get them out of /auth
    console.log('User already logged in, redirecting from /auth/* to /dashboard');
    redirect('/dashboard');
  }

  // Render the children (auth pages like Login, Sign Up) only if the user is not logged in
  return <>{children}</>;
}

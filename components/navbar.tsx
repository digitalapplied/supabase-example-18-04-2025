"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const supabase = createClient();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  // Initial session check
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session?.user);
    });

    // Listen for changes
    const { subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => setLoggedIn(!!session?.user)
    ).data;

    return () => subscription.unsubscribe();
  }, [supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/auth/login");
  }

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-semibold text-lg">
          Supabase Example
        </Link>

        {loggedIn !== null && (
          <nav className="flex items-center gap-4">
            {loggedIn ? (
              <>
                <Link href="/dashboard">
                  <Button size="sm">Dashboard</Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button size="sm">Login</Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button variant="outline" size="sm">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

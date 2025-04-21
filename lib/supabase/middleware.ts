import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Always call getUser to refresh the session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Define public routes that don't require authentication
  // Matching Move Planner's approach
  const publicPaths = [
    '/', // Home page
    '/auth', // Base auth path, includes /auth/* by startsWith check
    // Add any other explicitly public API routes or pages here if needed
    // Example: '/api/public-endpoint', '/about-us'
  ];

  // Check if the current path starts with any of the public paths
  const isPublic = publicPaths.some((path) =>
    path === '/' ? pathname === path : pathname.startsWith(path)
  );

  // If the user is not logged in AND the path is NOT public, redirect to login
  if (!user && !isPublic) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/login';
    console.log(`Redirecting unauthenticated user from ${pathname} to /auth/login`);
    return NextResponse.redirect(url);
  }

  // If the user IS logged in AND trying to access a public-only auth page (handled in AuthLayout now)
  // This middleware mainly focuses on protecting non-public routes for non-users.

  return supabaseResponse;
}

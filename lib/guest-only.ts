import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Guard for pages that should be visible **only** to guests.
 * Usage inside a Server Component:
 *   await guestOnly();              // redirects to "/dashboard"
 *   await guestOnly("/somewhere");  // custom path
 */
export async function guestOnly(redirectTo = "/dashboard") {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) redirect(redirectTo);
}

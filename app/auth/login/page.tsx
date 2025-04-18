import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginForm } from "@/components/login-form";

export default async function Page() {
  // Server‑side Supabase – safe to call in a Server Component
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // 🚀  Prevent signed‑in users from seeing the form again
  if (data.user) redirect("/protected");

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

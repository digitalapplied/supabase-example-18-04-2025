import { LoginForm } from "@/components/login-form";
import { guestOnly } from "@/lib/guest-only";

export const metadata = { title: "Login · Supabase Example" };

export default async function Page() {
  await guestOnly(); // 1‑liner guard ✨

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

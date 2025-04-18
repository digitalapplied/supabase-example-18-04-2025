import { SignUpForm } from "@/components/sign-up-form";
import { guestOnly } from "@/lib/guest-only";

export const metadata = { title: "Sign&nbsp;up · Supabase Example" };

export default async function Page() {
  await guestOnly();

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}

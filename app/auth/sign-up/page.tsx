import { SignUpForm } from "@/components/sign-up-form";

export const metadata = { title: "Sign up · Supabase Example" };

export default async function Page() {
  return (
    <div className="flex flex-1 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}

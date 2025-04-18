import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Dashboard" };

export default async function Dashboard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/auth/login");

  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-6 p-4">
      <h2 className="text-2xl">
        Welcome&nbsp;<span className="font-semibold">{data.user.email}</span>
      </h2>

      <div className="flex gap-3">
        <Link href="/protected/profile">
          <Button variant="outline">Profile&nbsp;(stub)</Button>
        </Link>
        <Link href="/auth/update-password">
          <Button variant="outline">Change&nbsp;password</Button>
        </Link>
      </div>
    </div>
  );
}

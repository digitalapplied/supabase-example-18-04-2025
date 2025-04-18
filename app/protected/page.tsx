import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/logout-button";
import { Button } from "@/components/ui/button";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) redirect("/auth/login");

  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-6 p-4">
      <p>
        Hello&nbsp;<span className="font-medium">{data.user.email}</span>
      </p>

      <div className="flex gap-3">
        <LogoutButton />
        <Link href="/auth/update-password">
          <Button variant="outline">Change password</Button>
        </Link>
      </div>
    </div>
  );
}

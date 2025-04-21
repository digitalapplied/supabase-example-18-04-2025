import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "User Profile" };

export default async function Profile() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  // Middleware handles the redirect if !data.user

  // Handle potential null user gracefully
  if (!data?.user) {
    // Or return a loading/error component
    return <div className="flex flex-1 w-full items-center justify-center"><p>Loading user data or error...</p></div>;
  }

  const user = data.user;
  
  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center gap-6 p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p className="text-base">{user.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">User ID</h3>
                <p className="text-sm text-muted-foreground break-all">{user.id}</p>
              </div>
              
              {user.user_metadata && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Additional Information</h3>
                  <pre className="text-sm bg-muted p-2 rounded-md mt-1 overflow-auto">
                    {JSON.stringify(user.user_metadata, null, 2)}
                  </pre>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Last Sign In</h3>
                <p className="text-sm">
                  {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

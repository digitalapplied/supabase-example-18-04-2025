import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-semibold text-lg">
              Supabase Example
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container py-12">
        <div className="flex flex-col items-center justify-center gap-8 text-center py-12">
          <h1 className="text-5xl font-bold tracking-tight">
            Supabase + Next.js Integration
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            A modern application template with authentication and database functionality powered by Supabase.
          </p>
          
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            <div className="flex flex-col items-center p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Authentication</h3>
              <p className="text-sm text-muted-foreground text-center">Secure user authentication with Supabase Auth</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Database</h3>
              <p className="text-sm text-muted-foreground text-center">PostgreSQL database with real-time capabilities</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Storage</h3>
              <p className="text-sm text-muted-foreground text-center">File storage and management with Supabase Storage</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6 md:py-4">
        <div className="container flex justify-center px-4 md:px-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Supabase Example. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

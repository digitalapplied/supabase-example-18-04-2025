import Link from "next/link";

export const metadata = {
  title: "Supabase × Next.js starter",
  description: "Instant auth, DB & storage powered by Supabase.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ----- Main content ----- */}
      <main className="flex-1 container py-12">
        <div className="flex flex-col items-center justify-center gap-8 text-center py-12">
          <h1 className="text-5xl font-bold tracking-tight">
            Supabase + Next.js Integration
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Kick‑start your SaaS with authentication, PostgreSQL and file
            storage out of the box.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {[
              ["Authentication", "Secure users with Supabase Auth"],
              ["Database", "PostgreSQL & real‑time streams"],
              ["Storage", "Upload & serve files with RLS"],
            ].map(([title, body]) => (
              <article
                key={title}
                className="flex flex-col items-center p-6 bg-card text-card-foreground rounded-lg border shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* ----- Footer ----- */}
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

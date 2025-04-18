This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Supabase Setup

This project uses Supabase for authentication and potentially database interactions. You need to set up a Supabase project and configure environment variables.

1.  **Create a Supabase Project:**

    - Go to [Supabase Dashboard](https://supabase.com/dashboard) and create a new project.
    - Or use the Supabase CLI: `supabase init` then `supabase start`.

2.  **Get API Keys:**

    - In your Supabase project dashboard, navigate to `Project Settings` > `API`.
    - Find your **Project URL** (e.g., `https://<your-project-ref>.supabase.co`).
    - Find your **Project API Keys** > `anon` `public` key. **Never use the `service_role` key in client-side code.**

3.  **Configure Environment Variables:**

    - Create a file named `.env.local` in the root of your project (this file should be listed in your `.gitignore`).
    - Add your Supabase credentials to this file:

      ```dotenv
      # .env.local
      NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
      NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
      ```

    - Replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_PUBLIC_KEY` with the actual values from your Supabase project.

4.  **Configure Auth Redirect URLs:**

    - In your Supabase project dashboard, navigate to `Authentication` > `URL Configuration`.
    - Under **Redirect URLs**, add the URLs your application will use for redirects after authentication actions. For local development, you typically need:
      - `http://localhost:3000/auth/confirm` (or specific confirmation paths)
      - `http://localhost:3000/protected` (or wherever sign-up redirects)
      - `http://localhost:3000/auth/update-password` (for password reset)
    - **Important:** Update these URLs for your deployed application (e.g., `https://your-app-domain.com/auth/confirm`). You can use wildcards like `http://localhost:3000/**` for convenience during development, but be specific in production.

5.  **Restart Development Server:**
    - After modifying `.env.local`, stop your development server (Ctrl+C) and restart it (`npm run dev` or equivalent) for the changes to take effect.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Important:** When deploying to Vercel, make sure to configure the Supabase environment variables in your Vercel project settings under the "Environment Variables" section. Add the same variables as in your `.env.local` file:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

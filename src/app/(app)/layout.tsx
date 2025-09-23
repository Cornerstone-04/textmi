// app/(app)/layout.tsx
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app/sidebar";
import { AppTopbar } from "@/components/app/topbar";
import { isAuthenticated } from "@/lib/auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated(); // implement against Supabase/your auth
  if (!authed) redirect("/auth/sign-in");

  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="grid min-h-dvh grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Sidebar (hidden on small screens if you like) */}
        <aside className="hidden border-r border-neutral-200 md:block dark:border-neutral-800">
          <AppSidebar />
        </aside>

        {/* Main area */}
        <div className="flex min-h-dvh flex-col">
          <AppTopbar />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

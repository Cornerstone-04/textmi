// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="text-center px-5">
        <h1 className="text-7xl font-bold tracking-tight">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/(app)/chat">Open App</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

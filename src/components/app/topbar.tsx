// components/app-topbar.tsx
"use client";

import Link from "next/link";

export function AppTopbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 sm:px-6 md:px-8">
        <Link href="/(app)/chat" className="font-medium">
          TextMi
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="/(app)/profile"
            className="underline-offset-4 hover:underline"
          >
            Profile
          </Link>
          <Link
            href="/(app)/settings"
            className="underline-offset-4 hover:underline"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

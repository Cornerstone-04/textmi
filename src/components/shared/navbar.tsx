// components/header.tsx
"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6 md:px-8">
        <Link href="/" className="font-semibold">
          TextMi
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/#faq" className="hover:underline underline-offset-4">
            FAQ
          </Link>
          <Link
            href="/auth/sign-in"
            className="hover:underline underline-offset-4"
          >
            Sign in
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

// components/theme-toggle.tsx
"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded border px-3 py-1 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-900"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <LucideSun className="size-5"/> : <LucideMoon className="size-5"/>}
    </button>
  );
}

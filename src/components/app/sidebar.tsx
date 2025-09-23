// components/app-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Chat", href: "/(app)/chat" },
  { label: "Profile", href: "/(app)/profile" },
  { label: "Settings", href: "/(app)/settings" },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 h-dvh w-[260px] overflow-y-auto p-4">
      <ul className="space-y-1 text-sm">
        {links.map((l) => {
          const active = pathname.startsWith(l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={[
                  "block rounded px-3 py-2",
                  active
                    ? "bg-neutral-100 dark:bg-neutral-900"
                    : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50",
                ].join(" ")}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

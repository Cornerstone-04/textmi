// components/forms/password-meter.tsx
"use client";

import { scorePassword } from "@/lib/password-score";

export function PasswordMeter({
  password,
  firstName,
  lastName,
  email,
}: {
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}) {
  const { score, label, suggestions } = scorePassword({
    password,
    firstName,
    lastName,
    email,
  });

  const segments = 4; // 4 visible segments
  const active = score; // 0..4
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  return (
    <div className="space-y-2">
      {/* Bar */}
      <div className="flex gap-1" aria-hidden="true">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={[
              "h-1.5 w-full rounded",
              i < active
                ? colors[Math.min(active - 1, colors.length - 1)]
                : "bg-neutral-200 dark:bg-neutral-800",
            ].join(" ")}
          />
        ))}
      </div>
      {/* Label */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-neutral-500 dark:text-neutral-400">Strength</span>
        <span className="font-medium">{label}</span>
      </div>

      {/* Suggestions */}
      {password && suggestions.length > 0 && (
        <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-600 dark:text-neutral-400">
          {suggestions.slice(0, 3).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

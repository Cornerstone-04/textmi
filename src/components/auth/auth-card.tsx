// components/auth/auth-card.tsx
import { ReactNode } from "react";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </p>
        )}
      </header>
      <div>{children}</div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}

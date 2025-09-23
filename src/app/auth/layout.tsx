// app/auth/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh grid place-items-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="w-full max-w-md px-5 sm:px-6 md:px-8 py-10">
        {children}
      </div>
    </div>
  );
}

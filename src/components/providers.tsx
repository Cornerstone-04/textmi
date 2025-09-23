// components/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
// import { Toaster } from "@/components/ui/toaster"; // if using shadcn toaster

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      {/* <Toaster /> */}
    </ThemeProvider>
  );
}

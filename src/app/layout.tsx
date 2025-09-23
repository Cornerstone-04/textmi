// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "TextMi — Minimal Texting",
  description: "Distraction-free chat with only what matters.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#000", media: "(prefers-color-scheme: dark)" },
    { color: "#fff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* body sets neutral color scheme for the whole app */}
      <body className="bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

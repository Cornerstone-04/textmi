// app/(marketing)/layout.tsx
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Balanced margins */}
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

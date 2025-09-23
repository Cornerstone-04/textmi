// components/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 sm:flex-row sm:justify-between sm:px-6 md:px-8">
        <p>&copy; {new Date().getFullYear()} TextMi</p>
        <nav className="flex gap-4">
          <Link href="/privacy" className="underline-offset-4 hover:underline">Privacy</Link>
          <Link href="/terms" className="underline-offset-4 hover:underline">Terms</Link>
          <Link href="/contact" className="underline-offset-4 hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
// components/oauth-button.tsx
"use client";

export function OAuthButton({
  onClick,
  provider = "Google",
}: {
  onClick?: () => void;
  provider?: "Google";
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      Continue with {provider}
    </button>
  );
}

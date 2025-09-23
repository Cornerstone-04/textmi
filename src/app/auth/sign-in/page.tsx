// app/auth/sign-in/page.tsx
"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCard } from "@/components/auth/auth-card";

import { SignInSchema, type SignInInput } from "@/lib/validations/auth";
import { signInWithEmail, signInWithGoogle } from "@/lib/auth";
import { InputField } from "@/components/shared/forms/input-field";
import { OAuthButton } from "@/components/auth/oauth-button";

export default function SignInPage() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: SignInInput) => {
    setServerError(null);
    startTransition(async () => {
      const res = await signInWithEmail(values);
      if (!res.ok) setServerError(res.error ?? "Sign in failed");
      // On success, redirect to app—do client-side router push if you prefer
      if (res.ok) window.location.href = "/(app)/chat";
    });
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to continue to TextMi"
      footer={
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link href="/auth/sign-up" className="underline underline-offset-4">
            Create one
          </Link>
          .
        </p>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          register={register("password")}
          error={errors.password?.message}
        />

        {serverError ? (
          <p className="text-sm text-red-600">{serverError}</p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800 disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          {pending ? "Signing in..." : "Sign in"}
        </button>

        <div className="relative py-1 text-center text-xs text-neutral-500 dark:text-neutral-400">
          <span className="bg-white px-2 dark:bg-neutral-950">or</span>
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <OAuthButton
          onClick={() => {
            startTransition(async () => {
              const res = await signInWithGoogle();
              if (!res.ok) setServerError(res.error ?? "Google sign-in failed");
              if (res.ok) window.location.href = "/(app)/chat";
            });
          }}
        />
      </form>
    </AuthCard>
  );
}

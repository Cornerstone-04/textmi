// app/auth/sign-up/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form"; // ← added useWatch
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCard } from "@/components/auth/auth-card";
import { InputField } from "@/components/shared/forms/input-field";
import { OAuthButton } from "@/components/auth/oauth-button";
import { PasswordMeter } from "@/components/shared/forms/password-meter"; // ← add
import { SignUpSchema, type SignUpInput } from "@/lib/validations/auth";
import { signUpWithEmail, signInWithGoogle } from "@/lib/auth";
import { scorePassword } from "@/lib/password-score";

export default function SignUpPage() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const form = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange", // ← react to typing
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  // Watch fields for meter + strength gate
  const password = useWatch({ control, name: "password" }) || "";
  const firstName = useWatch({ control, name: "firstName" }) || "";
  const lastName = useWatch({ control, name: "lastName" }) || "";
  const email = useWatch({ control, name: "email" }) || "";

  // Compute strength once per render
  const { score, label } = useMemo(
    () => scorePassword({ password, firstName, lastName, email }),
    [password, firstName, lastName, email]
  );

  // Submission allowed only if no Zod errors, length ≥ 8, and score ≥ 2 (Fair)
  const lengthOk = password.length >= 8;
  const zodOk = Object.keys(errors).length === 0;
  const strengthOk = score >= 2; // 0..4
  const canSubmit = !pending && lengthOk && strengthOk && zodOk;

  const onSubmit = (values: SignUpInput) => {
    setServerError(null);
    startTransition(async () => {
      const { confirmPassword, ...payload } = values;
      const res = await signUpWithEmail(payload);
      if (!res.ok) setServerError(res.error ?? "Sign up failed");
      if (res.ok) window.location.href = "/(app)/chat";
    });
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Join TextMi in a minute"
      footer={
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
          .
        </p>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField
            label="First name"
            placeholder="Ada"
            autoComplete="given-name"
            register={register("firstName")}
            error={errors.firstName?.message}
          />
          <InputField
            label="Last name"
            placeholder="Lovelace"
            autoComplete="family-name"
            register={register("lastName")}
            error={errors.lastName?.message}
          />
        </div>

        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          register={register("email")}
          error={errors.email?.message}
        />

        {/* Password + Meter */}
        <div className="space-y-2">
          <InputField
            label="Password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            register={register("password")}
            error={errors.password?.message}
          />
          <PasswordMeter
            password={password}
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          {/* Inline gating hint */}
          {!lengthOk && password && (
            <p className="text-xs text-red-600">
              Password must be at least 8 characters.
            </p>
          )}
          {lengthOk && !strengthOk && password && (
            <p className="text-xs text-amber-600">
              Password strength is <span className="font-medium">{label}</span>.
              Aim for <span className="font-medium">Fair</span> or higher.
            </p>
          )}
        </div>

        <InputField
          label="Confirm password"
          type="password"
          placeholder="Repeat password"
          autoComplete="new-password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        {serverError ? (
          <p className="text-sm text-red-600">{serverError}</p>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit}
          aria-disabled={!canSubmit}
          className="w-full rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800 disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 disabled:cursor-not-allowed"
        >
          {pending ? "Creating account..." : "Create account"}
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

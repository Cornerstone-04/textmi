// components/forms/input-field.tsx
"use client";

import { LucideEye, LucideEyeClosed, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export function InputField({
  label,
  type = "text",
  placeholder,
  error,
  register,
  autoComplete,
}: {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  autoComplete?: string;
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          {...register}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-neutral-500 dark:border-neutral-800 dark:bg-neutral-900"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 right-2 text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <LucideEyeClosed className="size-5" /> : <LucideEye className="size-5"  />}
          </button>
        )}
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

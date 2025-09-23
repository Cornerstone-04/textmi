// lib/validations/auth.ts
import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignInInput = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
  .object({
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"), // ← updated here
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpInput = z.infer<typeof SignUpSchema>;

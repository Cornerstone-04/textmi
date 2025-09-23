// lib/auth.ts (server)
"use server";
import { cookies } from "next/headers";

export async function isAuthenticated(): Promise<boolean> {
  // Replace with Supabase/NextAuth check. Example cookie presence:
  const cookieStore = await cookies();
  const session = cookieStore.get("textmi_session");
  return Boolean(session?.value);
}

// Replace stubs with your Supabase/NextAuth logic.
// These return a { ok, error } shape for simplicity.

export async function signInWithEmail(data: {
  email: string;
  password: string;
}) {
  // TODO: Supabase: await supabase.auth.signInWithPassword({ email, password })
  // or NextAuth: redirect to /api/auth/signin etc.
  console.log("SIGN IN", data);
  // Simulate success:
  return { ok: true as const, error: null as string | null };
}

export async function signUpWithEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  // TODO: Supabase: await supabase.auth.signUp({ email, password, options: { data: { firstName, lastName } } })
  console.log("SIGN UP", data);
  // Simulate success:
  return { ok: true as const, error: null as string | null };
}

export async function signInWithGoogle() {
  // TODO: Supabase: await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: ... }})
  console.log("OAUTH GOOGLE");
  return { ok: true as const, error: null as string | null };
}

// middleware.ts (optional hard gate for client navigations)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isApp = req.nextUrl.pathname.startsWith("/(app)");
  if (!isApp) return NextResponse.next();

  const session = req.cookies.get("textmi_session")?.value; // align with your auth
  if (!session) {
    const url = new URL("/auth/sign-in", req.url);
    url.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/(app)/:path*"],
};
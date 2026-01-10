
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Only protect /admin routes
  if (pathname.startsWith("/admin")) {
    
    // 2. Allow access to login page
    if (pathname === "/admin/login") {
        // (Optional) If already logged in, redirect to dashboard
        const tokenStart = req.cookies.get("admin_token");
        if (tokenStart) {
             try {
                const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default_secret_key_change_me");
                await jwtVerify(tokenStart.value, secret);
                return NextResponse.redirect(new URL("/admin/dashboard", req.url));
             } catch (e) {
                // Token invalid, allow access to login
             }
        }
        return NextResponse.next();
    }

    // 3. Check for Token
    const token = req.cookies.get("admin_token");

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // 4. Verify Token
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default_secret_key_change_me");
      await jwtVerify(token.value, secret);
      return NextResponse.next();
    } catch (error) {
      console.error("JWT Verification Failed:", error);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

// Optimization: Match only admin routes to avoid running middleware everywhere
export const config = {
  matcher: ["/admin/:path*"],
};

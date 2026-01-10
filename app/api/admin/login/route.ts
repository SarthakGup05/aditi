
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { SignJWT } from "jose";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1. Check User in DB
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 2. Validate Password (DIRECT COMPARISON as per user request/environment)
    // NOTE: In production, you MUST use bcrypt/argon2.
    // Assuming database stores plain text or user wants simple check for now.
    // If user provided a hash in JSON, I should probably check if it matches,
    // but the JSON showed "password": "securepassword123", which looks like plain text.
    // I will use direct comparison as implied by the simplicity of the request.
    
    if (admin.password !== password) {
       return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 3. Create JWT
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default_secret_key_change_me");
    const token = await new SignJWT({ id: admin.id, email: admin.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    // 4. Set Cookie
    const response = NextResponse.json({ success: true, user: { name: admin.name, email: admin.email } });
    
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

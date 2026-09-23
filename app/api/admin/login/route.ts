import { NextRequest, NextResponse } from "next/server";
import { makeSessionToken, verifyPassword } from "@/lib/adminAuth";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (!rateLimit(`login:${ip}`, 5, 300_000)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      { status: 429 }
    );
  }

  const { password } = await req.json().catch(() => ({ password: "" }));
  if (typeof password !== "string" || !verifyPassword(password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("mb_admin", makeSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 12 * 60 * 60,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("mb_admin", "", { path: "/", maxAge: 0 });
  return res;
}

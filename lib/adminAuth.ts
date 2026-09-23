import crypto from "crypto";
import { cookies } from "next/headers";

const SECRET =
  process.env.ADMIN_SESSION_SECRET ?? "baiita-dev-secret-change-in-prod";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "baita-admin-2025";

export function verifyPassword(password: string): boolean {
  const a = Buffer.from(password);
  const b = Buffer.from(ADMIN_PASSWORD);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function makeSessionToken(): string {
  const payload = `admin.${Date.now()}`;
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");
  if (
    expected.length !== parts[2].length ||
    !crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(parts[2]))
  )
    return false;
  // sessions valid for 12 hours
  const ts = Number(parts[1]);
  return Number.isFinite(ts) && Date.now() - ts < 12 * 60 * 60 * 1000;
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get("mb_admin")?.value);
}

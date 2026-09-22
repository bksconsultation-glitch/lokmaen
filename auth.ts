import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE = "ittihad_admin_session";

function secret() {
  const value = process.env.ADMIN_JWT_SECRET;
  if (!value || value.length < 32) throw new Error("ADMIN_JWT_SECRET must be at least 32 characters.");
  return new TextEncoder().encode(value);
}

export async function createAdminSession(email: string) {
  const token = await new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret());

  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export async function isAdmin() {
  try {
    const token = (await cookies()).get(COOKIE)?.value;
    if (!token) return false;
    await jwtVerify(token, secret());
    return true;
  } catch {
    return false;
  }
}

export async function clearAdminSession() {
  (await cookies()).delete(COOKIE);
}
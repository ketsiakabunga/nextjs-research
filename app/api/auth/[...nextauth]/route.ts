import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  cookieStore.set("session", "demo", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return Response.json({
    message: "Secure HTTP-only cookie set.",
  });
}
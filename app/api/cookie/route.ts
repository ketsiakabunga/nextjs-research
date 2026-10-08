import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  return Response.json({
    cookie: session?.value ?? "none",
  });
}
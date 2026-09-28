import { headers } from "next/headers";
import { auth } from "@/auth";
import SignIn from "./signin";
import WebWorkerDemo from "./WebWorkerDemo";

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  const serverTime = new Date().toLocaleTimeString();

  const session = await auth();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        Next.js SSR Demo
      </h1>

      <p className="mt-4">
        This page uses request-time data from the server.
      </p>

      <div className="mt-6">
        <p className="font-semibold">Your browser:</p>
        <p>{userAgent}</p>

        <p className="mt-2">
          Server time: {serverTime}
        </p>
      </div>

      <div className="mt-8">
        {session?.user ? (
          <div>
            <h2 className="text-xl font-semibold">
              Welcome!
            </h2>

            <p className="mt-2">
              Name: {session.user.name}
            </p>

            <p>
              Email: {session.user.email}
            </p>

            <p className="mt-4 text-green-600">
              You are signed in with Google.
            </p>
          </div>
        ) : (
          <SignIn />
        )}
      </div>

      <WebWorkerDemo />
    </main>
  );
}
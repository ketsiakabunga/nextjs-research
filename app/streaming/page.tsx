import { Suspense } from "react";
import SlowContent from "./SlowContent";

export default function StreamingPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        Next.js Streaming Demo
      </h1>

      <p className="mt-4">
        This content appears immediately.
      </p>

      <Suspense fallback={<LoadingMessage />}>
        <SlowContent />
      </Suspense>
    </main>
  );
}

function LoadingMessage() {
  return (
    <div className="mt-6 rounded-lg border p-6">
      <p className="text-lg">
        ⏳ Waiting for slow content...
      </p>
    </div>
  );
}
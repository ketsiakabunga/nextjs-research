"use client";

import { useEffect, useState } from "react";

export default function WebWorkerDemo() {
  const [number, setNumber] = useState(10);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(
      new URL("./worker.ts", import.meta.url)
    );

    worker.onmessage = (event) => {
      setResult(event.data);
    };

    worker.postMessage(number);

    return () => {
      worker.terminate();
    };
  }, [number]);

  return (
    <div className="mt-10 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">
        Web Worker Demo
      </h2>

      <p className="mt-2">
        Calculate the square of a number in a Web Worker.
      </p>

      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(Number(event.target.value))}
        className="mt-4 rounded border px-3 py-2"
      />

      <p className="mt-4">
        Result: <strong>{result}</strong>
      </p>
    </div>
  );
}
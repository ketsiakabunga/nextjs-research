export default async function SlowContent() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="mt-6 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">
        Slow content loaded!
      </h2>

      <p className="mt-2">
        This content took 3 seconds to load.
      </p>
    </div>
  );
}
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="m-auto mt-4 flex max-w-xl flex-col">
      <h2 className="mb-2 self-center pb-3 text-5xl font-extrabold text-shadow-inverted">
        Something went wrong!
      </h2>

      <div>{error.message}</div>
    </section>
  );
}

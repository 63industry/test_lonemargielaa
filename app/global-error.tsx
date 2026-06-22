"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-black px-4">
        <div className="text-center">
          <h1 className="font-display text-7xl uppercase tracking-tight text-white">500</h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest text-white/50">
            Something went wrong
          </p>
          <button
            onClick={reset}
            className="mt-6 border border-white/20 px-6 py-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:border-white/60"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

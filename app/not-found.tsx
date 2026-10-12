import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-content flex flex-col items-start py-24">
      <h1 className="text-3xl font-bold text-zinc-900">Page not found</h1>
      <p className="mt-3 text-zinc-600">
        That page doesn&apos;t exist — it may have been moved or unpublished.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-accent-600 px-5 py-2.5 font-semibold text-white hover:bg-accent-700"
      >
        Back to home
      </Link>
    </div>
  );
}

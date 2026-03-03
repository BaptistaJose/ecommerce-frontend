import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
      <p className="mt-6 text-gray-400 text-lg text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/dashboard"
        className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
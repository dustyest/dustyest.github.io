import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-[Inter] text-white"
      style={{ backgroundColor: "#1c1c1e" }}
    >
      <h1 className="text-4xl font-semibold mb-8">rshn.xyz</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/status"
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg font-medium shadow transition"
        >
          🔍 status
        </Link>
        <Link
          href="/photography"
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg font-medium shadow transition"
        >
          📸 photography
        </Link>
        <Link
          href="/connections"
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg font-medium shadow transition"
        >
          🌐 connections
        </Link>
      </div>
    </div>
  );
}

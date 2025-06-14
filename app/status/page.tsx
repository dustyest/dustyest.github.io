import StatusCard from "../components/StatusCard";
import FocusStatus from "../components/FocusStatus";

export default function StatusPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#1c1c1e] text-white p-6">
      <div className="w-full max-w-md">
        <FocusStatus />
      </div>

      <div className="w-full max-w-md">
        <StatusCard />
      </div>

      <div className="w-full max-w-md">
        <div className="bg-[#1f1f21] p-6 rounded-2xl shadow-2xl w-full max-w-md text-white transition-all">
        <div className="flex items-center gap-4">
        <div>
          <p className="text-xl font-semibold">ℹ️ live status page</p>
          <p className="text-l text-gray-300">updates based on focus modes and discord presense</p>
          <p className="text-sm text-gray-400"> </p>
          <p className="text-sm text-gray-400">🛖/rshn.xyz - "i bought this for 0.01$"</p>
        </div>
        </div>
        </div>
      </div>
    </main>
  );
}

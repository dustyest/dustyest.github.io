import StatusCard from "../components/StatusCard";
import FocusStatus from "../components/FocusStatus";

export default function StatusPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#1c1c1e] text-white p-6">
      <div className="w-full max-w-md">
        <StatusCard />
      </div>
      <div className="w-full max-w-md">
        <FocusStatus />
      </div>
    </main>
  );
}

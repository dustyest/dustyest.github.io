"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type LanyardActivity = {
  type: number;
  name: string;
  details?: string;
  state?: string;
};

type LanyardData = {
  discord_user: {
    username: string;
    discriminator: string;
    avatar: string;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: LanyardActivity[];
};

export default function StatusCard() {
  const [data, setData] = useState<LanyardData | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get("/api/discord"); // <-- your own API
        setData(res.data);
      } catch (err) {
        console.error("Error fetching Discord status:", err);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <p className="text-white">Loading status...</p>;

  const { discord_user, discord_status, activities } = data;
  const userId = "358478174591385600";
  const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${discord_user.avatar}.png`;

  const watching = activities.find((a) => a.name === "Crunchyroll");
  const animeTitle = watching?.details;
  const episodeInfo = watching?.state;

  const game = activities.find(
    (a) => a.type === 0 && a.name !== "Crunchyroll"
  );
  const gameName = game?.name;

  const statusColors: Record<string, string> = {
    online: "#4ade80",
    dnd: "#f87171",
    idle: "#facc15",
    offline: "#6b7280",
  };

  const statusText: Record<string, string> = {
    online: "Online",
    dnd: "Do Not Disturb",
    idle: "Idle",
    offline: "Offline",
  };

  return (
    <div className="bg-[#1f1f21] p-6 rounded-2xl shadow-2xl w-full max-w-md text-white transition-all">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-16 h-16 rounded-full border-2"
            style={{ borderColor: statusColors[discord_status] }}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-[#1c1c1e]"
            style={{ backgroundColor: statusColors[discord_status] }}
          />
        </div>
        <div>
          <p className="text-l font-semibold">{discord_user.username}</p>
          <p className="text-sm text-gray-400">{statusText[discord_status]}</p>
        </div>
      </div>

      {animeTitle && (
        <p className="mt-4 text-lg">
          🍿 Watching <span className="font-semibold">{animeTitle}</span> on{" "}
          <span className="text-orange-500 font-semibold">Crunchyroll</span>
          <p>
            EP: {episodeInfo && <span className="text-gray-400">{episodeInfo}</span>}
          </p>
        </p>
      )}

      {gameName && (
        <p className="mt-2 text-lg">
          🎮 Currently playing <span className="text-blue-500 font-medium">{gameName}</span>
        </p>
      )}
    </div>
  );
}

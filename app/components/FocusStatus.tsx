"use client";

import { useEffect, useState } from "react";
import { Moon, Bed } from "lucide-react";

type FocusStates = {
  "Do Not Disturb": boolean;
  Sleep: boolean;
};

export default function FocusStatus() {
  const [focus, setFocus] = useState<FocusStates | null>(null);

  useEffect(() => {
    const fetchFocus = async () => {
      try {
        const res = await fetch("/api/focus");
        const data = await res.json();
        setFocus(data);
      } catch (e) {
        console.error("Failed to fetch focus status", e);
      }
    };

    fetchFocus();
    const interval = setInterval(fetchFocus, 10000); // auto refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  if (!focus) return null;

  return (
    <div className="mt-4 p-4 rounded-2xl bg-[#262629] text-white shadow-lg transition-all duration-300 space-y-2">
      {focus["Do Not Disturb"] && (
        <div className="flex items-center gap-2 text-purple-400 animate-fadeIn">
          <Moon className="w-5 h-5" />
          <span>Currently in <strong>Do Not Disturb</strong> mode</span>
        </div>
      )}
      {focus["Sleep"] && (
        <div className="flex items-center gap-2 text-sky-400 animate-fadeIn">
          <Bed className="w-5 h-5" />
          <span>Currently in <strong>Sleep Mode</strong></span>
        </div>
      )}
    </div>
  );
}

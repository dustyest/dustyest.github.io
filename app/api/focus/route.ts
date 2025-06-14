import { NextRequest, NextResponse } from "next/server";

// Define exact modes
type FocusMode = "Do Not Disturb" | "Sleep";

// Simple in-memory state
let focusStates: Record<FocusMode, boolean> = {
  "Do Not Disturb": false,
  Sleep: false,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mode, status } = body;

    // Check if mode is one of the allowed focus modes
    if (mode !== "Do Not Disturb" && mode !== "Sleep") {
      return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
    }

    // TypeScript now knows mode is a valid key
    focusStates[mode] = status === "on";

    return NextResponse.json({ success: true, state: focusStates });
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json(focusStates);
}

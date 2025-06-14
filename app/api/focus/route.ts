import { NextRequest, NextResponse } from "next/server";

// Simple in-memory store (resets when site redeploys)
let focusStates = {
  "Do Not Disturb": false,
  Sleep: false,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mode, status } = body;

    if (!["Do Not Disturb", "Sleep"].includes(mode)) {
      return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
    }

    focusStates[mode] = status === "on";

    return NextResponse.json({ success: true, state: focusStates });
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json(focusStates);
}

import { NextRequest, NextResponse } from "next/server";

type FocusMode = "Do Not Disturb" | "Sleep";

let focusStates: Record<FocusMode, boolean> = {
  "Do Not Disturb": false,
  Sleep: false,
};

function isFocusMode(value: any): value is FocusMode {
  return value === "Do Not Disturb" || value === "Sleep";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mode, status } = body;

    if (!isFocusMode(mode)) {
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

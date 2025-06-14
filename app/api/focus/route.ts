import { NextRequest, NextResponse } from "next/server";

const FIREBASE_URL = process.env.FIREBASE_DB;

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`${FIREBASE_URL}/focus.json`);
    if (!res.ok) throw new Error("Firebase fetch failed");
    const data = await res.json();

    // Return default values if no data exists yet
    return NextResponse.json(data || { "Do Not Disturb": false, Sleep: false });
  } catch (err) {
    console.error("GET /api/focus error:", err);
    return NextResponse.json(
      { "Do Not Disturb": false, Sleep: false },
      { status: 200 }
    );
  }
}

// Your existing POST handler below
export async function POST(req: NextRequest) {
  try {
    const { mode, status } = await req.json();

    const currentRes = await fetch(`${FIREBASE_URL}/focus.json`);
    let currentData = await currentRes.json();

    if (!currentData || typeof currentData !== "object") {
      currentData = {};
    }

    currentData[mode] = status === "on";

    const saveRes = await fetch(`${FIREBASE_URL}/focus.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentData),
    });
    const savedData = await saveRes.json();

    return NextResponse.json({ ok: true, saved: savedData });
  } catch (err) {
    console.error("Failed to POST to Firebase:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

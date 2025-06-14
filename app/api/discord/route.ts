import { NextResponse } from "next/server";

const userId = "358478174591385600";

export async function GET() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch Discord status" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching Discord status" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  // For now just log it
  console.log("New waitlist signup:", email);

  return NextResponse.json({ message: "Successfully joined waitlist" });
}
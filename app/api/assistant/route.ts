import { NextRequest, NextResponse } from "next/server";
import { answerQuestion } from "@/lib/assistant";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (!rateLimit(`assistant:${ip}`, 20, 60_000)) {
    return NextResponse.json(
      { error: "Too many messages — please slow down." },
      { status: 429 }
    );
  }

  const { message } = await req.json().catch(() => ({ message: "" }));
  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Empty message." }, { status: 400 });
  }

  const result = answerQuestion(message.slice(0, 500));
  return NextResponse.json(result);
}

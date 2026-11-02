import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";
import { isValidReactionTarget, REACTION_DATASETS } from "@/lib/reaction-datasets";

function hashKey(dataset: string) {
  return `civcurve:reactions:${dataset}`;
}

export async function GET(req: NextRequest) {
  const dataset = req.nextUrl.searchParams.get("dataset");
  if (!dataset || !Object.hasOwn(REACTION_DATASETS, dataset)) {
    return NextResponse.json({ error: "missing or unknown dataset" }, { status: 400 });
  }
  const counts = (await getRedis().hgetall<Record<string, number>>(hashKey(dataset))) ?? {};
  return NextResponse.json(counts);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const dataset = body?.dataset as string | undefined;
  const entryId = body?.entryId as string | undefined;

  if (!dataset || !entryId || !isValidReactionTarget(dataset, entryId)) {
    return NextResponse.json({ error: "invalid target" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const dedupeKey = `civcurve:reacted:${ip}:${dataset}:${entryId}`;

  // SET NX EX 86400 — 이미 있으면 null 반환(24시간 내 중복 반응 방지)
  const firstTime = await getRedis().set(dedupeKey, "1", { nx: true, ex: 86400 });

  let count: number;
  if (firstTime) {
    count = await getRedis().hincrby(hashKey(dataset), entryId, 1);
  } else {
    const current = await getRedis().hget<number>(hashKey(dataset), entryId);
    count = current ?? 0;
  }

  return NextResponse.json({ count, alreadyReacted: !firstTime });
}

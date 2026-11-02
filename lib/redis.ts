import { Redis } from "@upstash/redis";

let client: Redis | undefined;

// 환경 변수 검사를 첫 사용 시점으로 미룬다 — 모듈 로드 시점에 던지면 env 없는 빌드(`next build`)가 깨진다.
export function getRedis(): Redis {
  if (client) return client;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error(
      "Redis env vars missing. Set KV_REST_API_URL/KV_REST_API_TOKEN or " +
        "UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN in the Vercel project " +
        "(Storage tab → connect a Redis integration)."
    );
  }
  client = new Redis({ url, token });
  return client;
}

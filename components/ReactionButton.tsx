"use client";

import { useEffect, useState } from "react";
import { dictionaries, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "civcurve:reacted";

function readReacted(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeReacted(list: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // 저장 불가(프라이빗 모드 등) — 서버 dedupe가 있으니 무시
  }
}

export function ReactionButton({
  datasetKey,
  entryId,
  initialCount,
  locale,
  onReacted,
}: {
  datasetKey: string;
  entryId: string;
  initialCount: number;
  locale: Locale;
  onReacted?: (entryId: string, count: number) => void;
}) {
  const { label, ariaLabel } = dictionaries[locale].reaction;
  const token = `${datasetKey}:${entryId}`;
  const [count, setCount] = useState(initialCount);
  const [reacted, setReacted] = useState(false);

  useEffect(() => setCount(initialCount), [initialCount]);
  useEffect(() => setReacted(readReacted().includes(token)), [token]);

  async function react() {
    if (reacted) return;
    setReacted(true);
    setCount((c) => c + 1);
    const list = readReacted();
    if (!list.includes(token)) writeReacted([...list, token]);
    try {
      const res = await fetch("/api/reactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataset: datasetKey, entryId }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data: { count: number } = await res.json();
      setCount(data.count);
      onReacted?.(entryId, data.count);
    } catch {
      // 서버 실패 시 낙관적 증가를 되돌리고 다시 누를 수 있게 한다
      setCount(initialCount);
      setReacted(false);
      writeReacted(readReacted().filter((t) => t !== token));
    }
  }

  return (
    <button type="button" className="reaction-button mono" onClick={react} disabled={reacted} aria-label={ariaLabel}>
      <span aria-hidden="true">✦</span> {label} ({count})
    </button>
  );
}

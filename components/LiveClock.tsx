"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatNow(d: Date) {
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

// 브랜드 로고 옆에 붙는 실시간 시계.
// "진행 중인 문명" 커브가 아직 열려 있는 지점 — 바로 이 순간 — 을
// 초 단위로 계속 갱신해 보여준다. 서버에서는 아무 시각도 모르므로
// 마운트 전에는 렌더링하지 않고(hydration mismatch 방지), 클라이언트에서만 켠다.
export function LiveClock({ locale }: { locale: Locale }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    // 레이아웃 흔들림 방지용 자리표시자 (숫자 폭과 동일한 너비)
    return <span className="live-clock mono" aria-hidden="true">&nbsp;</span>;
  }

  return (
    <span
      className="live-clock mono"
      aria-label={locale === "en" ? "Current local time" : "현재 시각"}
    >
      <span className="live-dot" aria-hidden="true" />
      {formatNow(now)}
    </span>
  );
}

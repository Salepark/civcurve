"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatOffset(d: Date) {
  const totalMinutes = -d.getTimezoneOffset();
  const sign = totalMinutes >= 0 ? "+" : "-";
  const abs = Math.abs(totalMinutes);
  return `${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
}

// ISO 8601 표기 — en/ko 어느 로케일에서 봐도 동일하게 읽히는 국제 표준
// 포맷이라 "이게 몇 월 며칠이지?" 하는 헷갈림이 없다. 오프셋까지 붙여
// 방문자의 로컬 시간대를 명시한다.
function formatNow(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${formatOffset(d)}`;
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

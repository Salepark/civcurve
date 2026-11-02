"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Theme = "dark" | "light";

const LABELS: Record<Locale, Record<Theme, string>> = {
  en: { dark: "Dark", light: "Light" },
  ko: { dark: "다크", light: "라이트" },
};

export function ThemeToggle({ locale }: { locale: Locale }) {
  // 서버는 선택값을 모른다 — 마운트 후 실제 적용된 테마를 읽어 하이라이트한다.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const applied = document.documentElement.getAttribute("data-theme");
    setTheme(
      applied === "light" || applied === "dark"
        ? applied
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
    );
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("civcurve:theme", next);
    } catch {
      // 저장 불가(프라이빗 모드 등) — 이번 방문에서만 적용
    }
  }

  return (
    <div className="theme-toggle locale-switch mono" role="group" aria-label={locale === "en" ? "Theme" : "테마"}>
      {(["dark", "light"] as const).map((t, i) => (
        <span key={t}>
          {i > 0 && <span className="locale-sep">·</span>}
          <button type="button" aria-pressed={theme === t} onClick={() => choose(t)}>
            {LABELS[locale][t]}
          </button>
        </span>
      ))}
    </div>
  );
}

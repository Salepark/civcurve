"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Civilization } from "@/data/civilizations";
import { Timeline } from "./Timeline";
import { DetailPanel } from "./DetailPanel";
import type { Locale } from "@/lib/i18n";

const ZOOM_LEVELS = [1, 2, 4, 8];

export function TimelineApp({
  civilizations,
  locale,
  ariaLabel,
}: {
  civilizations: Civilization[];
  locale: Locale;
  ariaLabel?: string;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [scrollFraction, setScrollFraction] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  // 줌 전 화면 중앙이 가리키던 위치(전체 폭 대비 0~1). 줌 후 같은 지점이 중앙에 오도록 복원한다.
  const pendingCenter = useRef<number | null>(null);
  const selected = civilizations.find((c) => c.id === selectedId) ?? null;
  const zoom = ZOOM_LEVELS[zoomIndex];

  function svgWidth(wrap: HTMLDivElement) {
    return wrap.querySelector("svg")?.getBoundingClientRect().width ?? wrap.scrollWidth;
  }

  function changeZoom(next: number) {
    const wrap = wrapRef.current;
    if (wrap) pendingCenter.current = (wrap.scrollLeft + wrap.clientWidth / 2) / svgWidth(wrap);
    setZoomIndex(next);
  }

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || pendingCenter.current === null) return;
    wrap.scrollLeft = pendingCenter.current * svgWidth(wrap) - wrap.clientWidth / 2;
    pendingCenter.current = null;
    setScrollFraction(wrap.scrollLeft / svgWidth(wrap));
  }, [zoomIndex]);

  // 확대 상태에서 밴드를 선택하면, 화면 밖에 있을 때 그 밴드가 가운데 오도록 스크롤한다.
  function scrollToSpan(span: { start: number; end: number }) {
    const wrap = wrapRef.current;
    if (!wrap || zoom === 1) return;
    const width = svgWidth(wrap);
    const left = span.start * width;
    const right = span.end * width;
    if (left >= wrap.scrollLeft && right <= wrap.scrollLeft + wrap.clientWidth) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    wrap.scrollTo({ left: (left + right) / 2 - wrap.clientWidth / 2, behavior: reduceMotion ? "auto" : "smooth" });
  }

  const zoomOutLabel = locale === "en" ? "Zoom out" : "축소";
  const zoomInLabel = locale === "en" ? "Zoom in" : "확대";

  return (
    <div className="app-layout">
      <div className="timeline-column">
        <div className="zoom-controls mono" role="group" aria-label={locale === "en" ? "Timeline zoom" : "타임라인 확대/축소"}>
          <button type="button" onClick={() => changeZoom(zoomIndex - 1)} disabled={zoomIndex === 0} aria-label={zoomOutLabel}>
            −
          </button>
          <span aria-live="polite">{zoom}×</span>
          <button
            type="button"
            onClick={() => changeZoom(zoomIndex + 1)}
            disabled={zoomIndex === ZOOM_LEVELS.length - 1}
            aria-label={zoomInLabel}
          >
            +
          </button>
        </div>
        <div
          className="timeline-wrap"
          ref={wrapRef}
          onScroll={(e) => setScrollFraction(e.currentTarget.scrollLeft / svgWidth(e.currentTarget))}
        >
          <Timeline
            civilizations={civilizations}
            selectedId={selectedId}
            locale={locale}
            ariaLabel={ariaLabel}
            zoom={zoom}
            scrollFraction={scrollFraction}
            onSelect={(id, span) => {
              if (id === selectedId) {
                setSelectedId(null);
                return;
              }
              setSelectedId(id);
              scrollToSpan(span);
            }}
          />
        </div>
      </div>
      <DetailPanel civ={selected} locale={locale} />
    </div>
  );
}

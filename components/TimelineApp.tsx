"use client";

import { useState } from "react";
import { Civilization } from "@/data/civilizations";
import { Timeline } from "./Timeline";
import { DetailPanel } from "./DetailPanel";
import type { Locale } from "@/lib/i18n";

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
  const selected = civilizations.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="app-layout">
      <div className="timeline-wrap">
        <Timeline
          civilizations={civilizations}
          selectedId={selectedId}
          locale={locale}
          ariaLabel={ariaLabel}
          onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
        />
      </div>
      <DetailPanel civ={selected} locale={locale} />
    </div>
  );
}

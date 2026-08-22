"use client";

import { useState } from "react";
import { Civilization } from "@/data/civilizations";
import { Timeline } from "./Timeline";
import { DetailPanel } from "./DetailPanel";
import type { Locale } from "@/lib/i18n";

export function TimelineApp({
  civilizations,
  locale,
}: {
  civilizations: Civilization[];
  locale: Locale;
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
          onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
        />
      </div>
      <DetailPanel civ={selected} locale={locale} />
    </div>
  );
}

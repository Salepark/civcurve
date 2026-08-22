"use client";

import { useState } from "react";
import { Civilization } from "@/data/civilizations";
import { Timeline } from "./Timeline";
import { DetailPanel } from "./DetailPanel";

export function TimelineApp({ civilizations }: { civilizations: Civilization[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = civilizations.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="app-layout">
      <div className="timeline-wrap">
        <Timeline
          civilizations={civilizations}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
        />
      </div>
      <DetailPanel civ={selected} />
    </div>
  );
}

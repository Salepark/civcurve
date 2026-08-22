import { Civilization } from "@/data/civilizations";
import { formatTick } from "@/lib/scale";

export function DetailPanel({ civ }: { civ: Civilization | null }) {
  if (!civ) {
    return (
      <div className="detail-panel detail-empty">
        <p>타임라인에서 문명을 클릭하면 상세 정보가 여기 표시됩니다.</p>
      </div>
    );
  }

  return (
    <div className="detail-panel">
      <span className="detail-region mono">{civ.region}</span>
      <h2>
        {civ.nameKo} <span className="detail-en">{civ.nameEn}</span>
      </h2>
      <p className="detail-range mono">
        {formatTick(civ.startYear)} – {formatTick(civ.endYear)}
        <span className="detail-peak">
          {" "}
          · 전성기 {formatTick(civ.peakStart)}–{formatTick(civ.peakEnd)}
        </span>
      </p>
      <p className="detail-summary">{civ.summary}</p>
      <ul className="detail-events">
        {civ.keyEvents.map((e) => (
          <li key={e.year + e.label}>
            <span className="mono event-year">{formatTick(e.year)}</span>
            <span>{e.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

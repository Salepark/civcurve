import { Civilization } from "@/data/civilizations";
import { formatTick } from "@/lib/scale";
import { dictionaries, regionLabels, type Locale } from "@/lib/i18n";

export function DetailPanel({
  civ,
  locale,
}: {
  civ: Civilization | null;
  locale: Locale;
}) {
  const dict = dictionaries[locale];

  if (!civ) {
    return (
      <div className="detail-panel detail-empty">
        <p>{dict.detail.empty}</p>
      </div>
    );
  }

  const name = civ.name[locale];
  const otherLocale: Locale = locale === "en" ? "ko" : "en";

  return (
    <div className="detail-panel">
      <span className="detail-region mono">{regionLabels[locale][civ.region]}</span>
      <h2>
        {name} <span className="detail-en">{civ.name[otherLocale]}</span>
      </h2>
      <p className="detail-range mono">
        {formatTick(civ.startYear, locale)} – {formatTick(civ.endYear, locale)}
        <span className="detail-peak">
          {" "}
          · {dict.detail.peak} {formatTick(civ.peakStart, locale)}–{formatTick(civ.peakEnd, locale)}
        </span>
      </p>
      <p className="detail-summary">{civ.summary[locale]}</p>
      <ul className="detail-events">
        {civ.keyEvents.map((e) => (
          <li key={e.year + e.label[locale]}>
            <span className="mono event-year">{formatTick(e.year, locale)}</span>
            <span>{e.label[locale]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

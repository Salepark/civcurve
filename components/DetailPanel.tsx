import Link from "next/link";
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
  const endLabel = civ.ongoing ? dict.detail.present : formatTick(civ.endYear, locale);
  const peakEndLabel = civ.ongoing ? dict.detail.present : formatTick(civ.peakEnd, locale);

  return (
    <div className="detail-panel" data-ongoing={civ.ongoing ?? false}>
      <span className="detail-region mono">
        {regionLabels[locale][civ.region]}
        {civ.ongoing && <span className="detail-ongoing-tag">{dict.detail.ongoing}</span>}
      </span>
      <h2>
        {name} <span className="detail-en">{civ.name[otherLocale]}</span>
      </h2>
      <p className="detail-range mono">
        {formatTick(civ.startYear, locale)} – {endLabel}
        <span className="detail-peak">
          {" "}
          · {dict.detail.peak} {formatTick(civ.peakStart, locale)}–{peakEndLabel}
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
      <Link className="detail-view-full" href={`/${locale}/civ/${civ.slug}`}>
        {dict.detail.viewFull}
      </Link>
    </div>
  );
}

import { Civilization } from "@/data/civilizations";
import { makeXScale, formatTick } from "@/lib/scale";
import { dictionaries, type Locale } from "@/lib/i18n";

const ROW_HEIGHT = 58;
const BAND_HALF_HEIGHT = 14;
const TOP_PADDING = 40;
const AXIS_GAP = 26;
const AXIS_LABEL_GAP = 18;
const CHART_WIDTH = 960;
const TICK_STEP = 500; // 500년 단위 눈금

function bandPath(
  x: ReturnType<typeof makeXScale>["toX"],
  civ: Civilization,
  y: number
) {
  const xStart = x(civ.startYear);
  const xPeakStart = x(civ.peakStart);
  const xPeakEnd = x(civ.peakEnd);
  const xEnd = x(civ.endYear);
  const h = BAND_HALF_HEIGHT;

  const growCtrlX = (xStart + xPeakStart) / 2;

  if (civ.ongoing) {
    // 쇠퇴기가 아직 없는 문명: 한 점으로 닫지 않고 현재 시점에서 수직으로
    // 잘라낸다 — 다른 모든(닫힌) 곡선과의 대비가 시각적 메시지의 핵심.
    return [
      `M ${xStart},${y}`,
      `Q ${growCtrlX},${y - h} ${xPeakStart},${y - h}`,
      `L ${xEnd},${y - h}`,
      `L ${xEnd},${y + h}`,
      `L ${xPeakStart},${y + h}`,
      `Q ${growCtrlX},${y + h} ${xStart},${y}`,
      "Z",
    ].join(" ");
  }

  const declineCtrlX = (xPeakEnd + xEnd) / 2;
  return [
    `M ${xStart},${y}`,
    `Q ${growCtrlX},${y - h} ${xPeakStart},${y - h}`,
    `L ${xPeakEnd},${y - h}`,
    `Q ${declineCtrlX},${y - h} ${xEnd},${y}`,
    `Q ${declineCtrlX},${y + h} ${xPeakEnd},${y + h}`,
    `L ${xPeakStart},${y + h}`,
    `Q ${growCtrlX},${y + h} ${xStart},${y}`,
    "Z",
  ].join(" ");
}

export function Timeline({
  civilizations,
  selectedId,
  locale,
  onSelect,
}: {
  civilizations: Civilization[];
  selectedId: string | null;
  locale: Locale;
  onSelect: (id: string) => void;
}) {
  const minYear = Math.min(...civilizations.map((c) => c.startYear));
  const maxYear = Math.max(...civilizations.map((c) => c.endYear), 2026);
  const x = makeXScale(minYear, maxYear, CHART_WIDTH).toX;

  const sorted = [...civilizations].sort((a, b) => a.startYear - b.startYear);
  const axisY = sorted.length * ROW_HEIGHT + TOP_PADDING + AXIS_GAP;
  const svgHeight = axisY + AXIS_LABEL_GAP + 16;

  const ticks: number[] = [];
  const firstTick = Math.ceil(minYear / TICK_STEP) * TICK_STEP;
  for (let year = firstTick; year <= maxYear; year += TICK_STEP) {
    ticks.push(year);
  }

  return (
    <svg
      className="timeline"
      viewBox={`0 0 ${CHART_WIDTH} ${svgHeight}`}
      role="img"
      aria-label={locale === "en" ? "Civilization curve timeline" : "문명 생명곡선 타임라인"}
    >
      {sorted.map((civ, i) => {
        const y = TOP_PADDING + i * ROW_HEIGHT;
        const isSelected = civ.id === selectedId;
        const isDimmed = selectedId !== null && !isSelected;
        const name = civ.name[locale];
        const endLabel = civ.ongoing
          ? dictionaries[locale].detail.present
          : formatTick(civ.endYear, locale);
        return (
          <g
            key={civ.id}
            className="civ-row"
            data-dimmed={isDimmed}
            data-ongoing={civ.ongoing ?? false}
            onClick={() => onSelect(civ.id)}
            tabIndex={0}
            role="button"
            aria-pressed={isSelected}
            aria-label={`${name}, ${formatTick(civ.startYear, locale)} - ${endLabel}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(civ.id);
            }}
          >
            <path
              d={bandPath(x, civ, y)}
              fill={civ.color}
              className="band"
              stroke={isSelected ? civ.color : "none"}
              strokeWidth={isSelected ? 2 : 0}
            />
            {civ.ongoing && (
              <line
                className="open-edge"
                stroke={civ.color}
                x1={x(civ.endYear)}
                y1={y - BAND_HALF_HEIGHT}
                x2={x(civ.endYear)}
                y2={y + BAND_HALF_HEIGHT}
              />
            )}
            <text className="band-label" x={4} y={y - BAND_HALF_HEIGHT - 9}>
              {name}
              <tspan className="band-years mono">
                {" "}
                {formatTick(civ.startYear, locale)}–{endLabel}
              </tspan>
            </text>
          </g>
        );
      })}

      <line className="axis-line" x1={0} y1={axisY} x2={CHART_WIDTH} y2={axisY} />
      {ticks.map((year) => (
        <g key={year} className="tick">
          <line x1={x(year)} y1={axisY - 4} x2={x(year)} y2={axisY + 4} />
          <text className="tick-label mono" x={x(year)} y={axisY + AXIS_LABEL_GAP} textAnchor="middle">
            {formatTick(year, locale)}
          </text>
        </g>
      ))}
    </svg>
  );
}

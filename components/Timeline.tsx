import { Civilization } from "@/data/civilizations";
import { makeXScale, formatTick } from "@/lib/scale";

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
  onSelect,
}: {
  civilizations: Civilization[];
  selectedId: string | null;
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
      aria-label="문명 생명곡선 타임라인"
    >
      {sorted.map((civ, i) => {
        const y = TOP_PADDING + i * ROW_HEIGHT;
        const isSelected = civ.id === selectedId;
        const isDimmed = selectedId !== null && !isSelected;
        return (
          <g
            key={civ.id}
            className="civ-row"
            data-dimmed={isDimmed}
            onClick={() => onSelect(civ.id)}
            tabIndex={0}
            role="button"
            aria-pressed={isSelected}
            aria-label={`${civ.nameKo}, ${formatTick(civ.startYear)} ~ ${formatTick(
              civ.endYear
            )}`}
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
            <text className="band-label" x={4} y={y - BAND_HALF_HEIGHT - 9}>
              {civ.nameKo}
              <tspan className="band-years mono"> {formatTick(civ.startYear)}–{formatTick(civ.endYear)}</tspan>
            </text>
          </g>
        );
      })}

      <line className="axis-line" x1={0} y1={axisY} x2={CHART_WIDTH} y2={axisY} />
      {ticks.map((year) => (
        <g key={year} className="tick">
          <line x1={x(year)} y1={axisY - 4} x2={x(year)} y2={axisY + 4} />
          <text className="tick-label mono" x={x(year)} y={axisY + AXIS_LABEL_GAP} textAnchor="middle">
            {formatTick(year)}
          </text>
        </g>
      ))}
    </svg>
  );
}

import { Civilization } from "@/data/civilizations";
import { makeXScale, formatTick, resolveYear, effectiveEndYear } from "@/lib/scale";
import { dictionaries, type Locale } from "@/lib/i18n";

const ROW_HEIGHT = 66;
const BAND_HALF_HEIGHT = 14;
const AXIS_Y = 20; // 시간축을 맨 위에 고정 — 스캔되는 대상(문명 곡선)이 아래에 있으니 축은 위에서 바로 보여야 이해가 쉽다
const AXIS_LABEL_GAP = 16;
const TOP_PADDING = 90; // 축 눈금 라벨과 첫 행 라벨이 겹치지 않을 여유
const BOTTOM_PADDING = 24;
const BASE_CHART_WIDTH = 960; // zoom 1배일 때의 viewBox 폭 — 줌하면 viewBox 폭과 렌더 폭을 같은 비율로 늘려 글자 크기는 그대로 둔다
const CHART_MARGIN_X = 32; // 양끝 눈금 라벨("2000 BCE" 등)이 잘리지 않고 끝 밴드가 가장자리에 붙지 않을 여유
const TICK_STEPS = [500, 250, 100, 50, 25, 10]; // 눈금 간격 후보(년) — 줌에 따라 라벨이 겹치지 않는 가장 촘촘한 값을 고른다
const MIN_TICK_GAP = 100; // 눈금 사이 최소 간격(viewBox 단위)

function bandPath(
  x: (year: number) => number,
  civ: Civilization,
  y: number
) {
  const xStart = x(civ.startYear);
  const xPeakStart = x(civ.peakStart);
  const xPeakEnd = x(resolveYear(civ.peakEnd));
  const xEnd = x(effectiveEndYear(civ));
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
  ariaLabel,
  zoom = 1,
  scrollFraction = 0,
  onSelect,
}: {
  civilizations: Civilization[];
  selectedId: string | null;
  locale: Locale;
  ariaLabel?: string;
  zoom?: number;
  /** 가로 스크롤 위치(0~1, 전체 폭 대비). 밴드 라벨을 보이는 영역 왼쪽에 붙여 두는 데 쓴다. */
  scrollFraction?: number;
  onSelect: (id: string) => void;
}) {
  const chartWidth = BASE_CHART_WIDTH * zoom;
  const labelX = 4 + scrollFraction * chartWidth;
  const minYear = Math.min(...civilizations.map((c) => c.startYear));
  const maxYear = Math.max(
    ...civilizations.map((c) => effectiveEndYear(c)),
    resolveYear("present")
  );
  const scale = makeXScale(minYear, maxYear, chartWidth - 2 * CHART_MARGIN_X);
  const x = (year: number) => CHART_MARGIN_X + scale.toX(year);

  const sorted = [...civilizations].sort((a, b) => a.startYear - b.startYear);
  const lastRowY = TOP_PADDING + (sorted.length - 1) * ROW_HEIGHT;
  const svgHeight = lastRowY + BAND_HALF_HEIGHT + BOTTOM_PADDING;
  const playheadTop = AXIS_Y + AXIS_LABEL_GAP + 10;

  const unitsPerYear = (chartWidth - 2 * CHART_MARGIN_X) / (maxYear - minYear);
  const tickStep = TICK_STEPS.filter((step) => step * unitsPerYear >= MIN_TICK_GAP).pop() ?? TICK_STEPS[0];
  const ticks: number[] = [];
  const firstTick = Math.ceil(minYear / tickStep) * tickStep;
  for (let year = firstTick; year <= maxYear; year += tickStep) {
    ticks.push(year);
  }

  return (
    <svg
      className="timeline"
      viewBox={`0 0 ${chartWidth} ${svgHeight}`}
      style={{ width: `${zoom * 100}%`, minWidth: 640 * zoom }}
      role="img"
      aria-label={ariaLabel ?? (locale === "en" ? "Civilization curve timeline" : "문명 생명곡선 타임라인")}
    >
      <defs>
        <clipPath id="intro-reveal-clip">
          <rect className="intro-clip-rect" x={0} y={0} width={chartWidth} height={svgHeight} />
        </clipPath>
      </defs>

      <line className="axis-line" x1={0} y1={AXIS_Y} x2={chartWidth} y2={AXIS_Y} />
      {ticks.map((year) => (
        <g key={year} className="tick">
          <line x1={x(year)} y1={AXIS_Y - 4} x2={x(year)} y2={AXIS_Y + 4} />
          <text className="tick-label mono" x={x(year)} y={AXIS_Y + AXIS_LABEL_GAP} textAnchor="middle">
            {formatTick(year, locale)}
          </text>
        </g>
      ))}

      {sorted.map((civ, i) => {
        const y = TOP_PADDING + i * ROW_HEIGHT;
        const isSelected = civ.id === selectedId;
        const isDimmed = selectedId !== null && !isSelected;
        const name = civ.name[locale];
        const endLabel = civ.ongoing
          ? dictionaries[locale].detail.present
          : formatTick(resolveYear(civ.endYear), locale);
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
              clipPath="url(#intro-reveal-clip)"
            />
            {civ.ongoing && (
              <line
                className="open-edge"
                stroke={civ.color}
                x1={x(effectiveEndYear(civ))}
                y1={y - BAND_HALF_HEIGHT}
                x2={x(effectiveEndYear(civ))}
                y2={y + BAND_HALF_HEIGHT}
                clipPath="url(#intro-reveal-clip)"
              />
            )}
            <text className="band-label" x={labelX} y={y - BAND_HALF_HEIGHT - 9}>
              {name}
              <tspan className="band-years mono">
                {" "}
                {formatTick(civ.startYear, locale)}–{endLabel}
              </tspan>
            </text>
          </g>
        );
      })}

      <rect
        className="intro-playhead"
        x={0}
        y={playheadTop}
        width={2}
        height={svgHeight - playheadTop}
        aria-hidden="true"
      />
    </svg>
  );
}

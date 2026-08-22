/**
 * 연도(BC/AD) <-> SVG x좌표 변환.
 * 데이터 범위(minYear~maxYear)를 [0, width]에 선형으로 매핑한다.
 */
export function makeXScale(minYear: number, maxYear: number, width: number) {
  const span = maxYear - minYear;
  return {
    toX: (year: number) => ((year - minYear) / span) * width,
    toYear: (x: number) => minYear + (x / width) * span,
  };
}

/** BC/AD 표기가 섞인 연도를 사람이 읽는 라벨로 변환. 예: -539 -> "BC539", 1453 -> "AD1453" */
export function formatYear(year: number): string {
  if (year < 0) return `BC${Math.abs(year)}`;
  return `AD${year}`;
}

/** 축 눈금용 라벨. 0년은 "0"으로, 그 외는 formatYear. */
export function formatTick(year: number): string {
  return year === 0 ? "0" : formatYear(year);
}

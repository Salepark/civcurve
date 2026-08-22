import type { Locale } from "@/lib/i18n";

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

/** 연도를 로케일에 맞는 라벨로 변환. ko: "BC539"/"AD1453", en: "539 BCE"/"1453 CE" */
export function formatYear(year: number, locale: Locale): string {
  if (locale === "en") {
    return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
  }
  return year < 0 ? `BC${Math.abs(year)}` : `AD${year}`;
}

/** 축 눈금용 라벨. 0년은 "0"으로, 그 외는 formatYear. */
export function formatTick(year: number, locale: Locale): string {
  return year === 0 ? "0" : formatYear(year, locale);
}

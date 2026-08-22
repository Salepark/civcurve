import type { RegionKey } from "@/data/civilizations";

export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const regionLabels: Record<Locale, Record<RegionKey, string>> = {
  en: {
    westAsia: "West Asia",
    mediterraneanEurope: "Mediterranean & Europe",
    southAsia: "South Asia",
    americas: "Americas",
  },
  ko: {
    westAsia: "서아시아",
    mediterraneanEurope: "지중해·유럽",
    southAsia: "남아시아",
    americas: "아메리카",
  },
};

export type Dictionary = {
  meta: { title: string; description: string };
  page: { eyebrow: string; title: string; lede: string };
  detail: { empty: string; peak: string };
  localeName: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "CivCurve",
      description:
        "From the first civilizations to today — a curve for each one's rise, peak, and fall, compared on a single timeline.",
    },
    page: {
      eyebrow: "CivCurve · Phase 1 prototype",
      title: "CivCurve",
      lede: "The horizontal axis is time (3200 BCE to today). Each curve traces one civilization from birth to disappearance — the widest point is its peak. Click a civilization for details.",
    },
    detail: {
      empty: "Click a civilization in the timeline to see its details here.",
      peak: "Peak",
    },
    localeName: "English",
  },
  ko: {
    meta: {
      title: "문명 생명곡선",
      description:
        "인류 최초 문명부터 현재까지, 각 문명의 탄생·성장·전성·쇠퇴를 곡선으로 비교하는 타임라인.",
    },
    page: {
      eyebrow: "문명 생명곡선 · Phase 1 프로토타입",
      title: "문명 생명곡선",
      lede: "가로축은 시간(BC3200~현재), 각 곡선은 문명의 탄생부터 소멸까지를 나타냅니다. 곡선이 넓어지는 구간이 전성기입니다. 문명을 클릭하면 상세 정보를 볼 수 있습니다.",
    },
    detail: {
      empty: "타임라인에서 문명을 클릭하면 상세 정보가 여기 표시됩니다.",
      peak: "전성기",
    },
    localeName: "한국어",
  },
};

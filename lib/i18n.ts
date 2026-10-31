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
    eastAsia: "East Asia",
    africa: "Africa",
    americas: "Americas",
    global: "Global",
  },
  ko: {
    westAsia: "서아시아",
    mediterraneanEurope: "지중해·유럽",
    southAsia: "남아시아",
    eastAsia: "동아시아",
    africa: "아프리카",
    americas: "아메리카",
    global: "지구 전체",
  },
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { civilizations: string; faith: string; art: string; science: string; tech: string };
  page: {
    eyebrow: string;
    title: string;
    lede: string;
    faith: { eyebrow: string; title: string; lede: string };
    art: { eyebrow: string; title: string; lede: string };
    science: { eyebrow: string; title: string; lede: string };
    tech: { eyebrow: string; title: string; lede: string };
  };
  detail: { empty: string; peak: string; present: string; ongoing: string; viewFull: string };
  civPage: { back: string };
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
      faith: {
        eyebrow: "FaithCurve · Phase 1 prototype",
        title: "FaithCurve",
        lede: "The horizontal axis is time (2100 BCE to today). Each band traces one era of biblical and church history from its beginning to the present. Branching lanes — Israel/Judah, then Catholic/Orthodox/Protestant — show historical divisions without ranking any of them. Click an era for details.",
      },
      art: {
        eyebrow: "ArtCurve · Phase 1 prototype",
        title: "ArtCurve",
        lede: "The horizontal axis is time (800 BCE to today). Each band traces one Western art movement from its beginning to the present — ending with AI art, whose place in this history is still being written. Click a movement for details.",
      },
      science: {
        eyebrow: "ScienceCurve · Phase 1 prototype",
        title: "ScienceCurve",
        lede: "The horizontal axis is time (3000 BCE to today). Each band traces one chapter in the history of science — ideas and discoveries, not industry or engineering — from its beginning to the present. Branching lanes — medieval Europe and the Islamic Golden Age, then 19th-century biology and physics — show parallel traditions without ranking either. Click a chapter for details.",
      },
      tech: {
        eyebrow: "TechCurve · Phase 1 prototype",
        title: "TechCurve",
        lede: "The horizontal axis is time (3500 BCE to today). Each band traces one chapter in the history of technology and industry — tools, engineering, and infrastructure, not pure science — from its beginning to the present. Several bands remain open-ended, still unfolding today. Click a chapter for details.",
      },
    },
    nav: { civilizations: "Civilizations", faith: "Faith History", art: "Art Movements", science: "Science History", tech: "Technology History" },
    detail: {
      empty: "Click a civilization in the timeline to see its details here.",
      peak: "Peak",
      present: "present",
      ongoing: "Ongoing — no decline observed yet",
      viewFull: "View full page →",
    },
    civPage: {
      back: "← Back to timeline",
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
      faith: {
        eyebrow: "FaithCurve · Phase 1 프로토타입",
        title: "FaithCurve",
        lede: "가로축은 시간(BC2100~현재), 각 밴드는 성경과 교회사의 한 시대를 탄생부터 오늘까지로 나타냅니다. 갈라지는 레인(이스라엘/유다, 로마가톨릭/동방정교회/개신교)은 역사적 분기를 가치 판단 없이 보여줍니다. 시대를 클릭하면 상세 정보를 볼 수 있습니다.",
      },
      art: {
        eyebrow: "ArtCurve · Phase 1 프로토타입",
        title: "ArtCurve",
        lede: "가로축은 시간(BC800~현재), 각 밴드는 서양 미술사의 한 사조를 탄생부터 오늘까지로 나타냅니다. AI 아트로 끝나는데, 이 사조가 역사에서 어떤 자리를 차지할지는 아직 쓰이는 중입니다. 사조를 클릭하면 상세 정보를 볼 수 있습니다.",
      },
      science: {
        eyebrow: "ScienceCurve · Phase 1 프로토타입",
        title: "ScienceCurve",
        lede: "가로축은 시간(BC3000~현재), 각 밴드는 산업이나 공학이 아니라 과학적 발견과 사고 자체의 한 장을 탄생부터 오늘까지로 나타냅니다. 갈라지는 레인(중세 유럽/이슬람 황금기, 19세기 생물학/물리학)은 병행하는 전통을 우열 없이 보여줍니다. 장을 클릭하면 상세 정보를 볼 수 있습니다.",
      },
      tech: {
        eyebrow: "TechCurve · Phase 1 프로토타입",
        title: "TechCurve",
        lede: "가로축은 시간(BC3500~현재), 각 밴드는 순수 과학이 아니라 도구·공학·인프라 중심의 기술/산업사의 한 장을 탄생부터 오늘까지로 나타냅니다. 여러 장은 아직 끝나지 않고 진행 중입니다. 장을 클릭하면 상세 정보를 볼 수 있습니다.",
      },
    },
    nav: { civilizations: "문명", faith: "기독교 역사", art: "미술 사조", science: "과학사", tech: "기술사" },
    detail: {
      empty: "타임라인에서 문명을 클릭하면 상세 정보가 여기 표시됩니다.",
      peak: "전성기",
      present: "현재",
      ongoing: "진행 중 — 아직 쇠퇴기가 관측되지 않음",
      viewFull: "전체 보기 →",
    },
    civPage: {
      back: "← 타임라인으로 돌아가기",
    },
    localeName: "한국어",
  },
};

export type RegionKey =
  | "westAsia"
  | "mediterraneanEurope"
  | "southAsia"
  | "americas"
  | "global";

export type LocalizedText = {
  ko: string;
  en: string;
};

export type KeyEvent = {
  year: number;
  label: LocalizedText;
};

export type Civilization = {
  id: string;
  name: LocalizedText;
  region: RegionKey;
  startYear: number;
  endYear: number;
  peakStart: number;
  peakEnd: number;
  summary: LocalizedText;
  keyEvents: KeyEvent[];
  color: string;
  /**
   * true면 아직 쇠퇴기가 관측되지 않은 "진행 중" 문명 — Timeline이 곡선을
   * 한 점으로 닫지 않고 현재 시점에서 폭이 좁아지지 않은 채로 잘라 그린다.
   * 다른 모든 문명과의 시각적 대비(닫힌 곡선 vs 열린 곡선)가 핵심 장치.
   */
  ongoing?: boolean;
};

// Phase 1 프로토타입 데이터 — 10개 역사 문명 + 진행 중인 현재 문명 1개.
// 연대는 대중적으로 통용되는 근사치이며, 학술적으로는 이견이 있을 수 있음.
export const civilizations: Civilization[] = [
  {
    id: "mesopotamia",
    name: { ko: "메소포타미아", en: "Mesopotamia" },
    region: "westAsia",
    startYear: -3200,
    endYear: -539,
    peakStart: -1800,
    peakEnd: -1200,
    summary: {
      ko: "수메르 도시국가에서 시작해 바빌론, 아시리아로 이어진 문명권. 쐐기문자와 함무라비 법전을 남겼다.",
      en: "Beginning with Sumerian city-states and continuing through Babylon and Assyria, this civilization gave the world cuneiform writing and the Code of Hammurabi.",
    },
    keyEvents: [
      { year: -3200, label: { ko: "수메르 도시국가 형성", en: "Sumerian city-states emerge" } },
      { year: -1754, label: { ko: "함무라비 법전", en: "Code of Hammurabi" } },
      { year: -539, label: { ko: "페르시아에 병합", en: "Absorbed by Persia" } },
    ],
    color: "#6c8f74",
  },
  {
    id: "egypt",
    name: { ko: "고대 이집트", en: "Ancient Egypt" },
    region: "westAsia",
    startYear: -3100,
    endYear: -30,
    peakStart: -1550,
    peakEnd: -1070,
    summary: {
      ko: "나일강을 따라 3000년 이상 지속된 문명. 통일 왕조와 피라미드, 신왕국 시기의 대외 팽창이 특징이다.",
      en: "A civilization along the Nile that endured for over 3,000 years, marked by a unified kingdom, the pyramids, and the New Kingdom's outward expansion.",
    },
    keyEvents: [
      { year: -3100, label: { ko: "상·하 이집트 통일", en: "Unification of Upper and Lower Egypt" } },
      { year: -2560, label: { ko: "기자 대피라미드", en: "Great Pyramid of Giza" } },
      { year: -30, label: { ko: "로마에 병합", en: "Annexed by Rome" } },
    ],
    color: "#7c9868",
  },
  {
    id: "indus",
    name: { ko: "인더스 문명", en: "Indus Valley" },
    region: "southAsia",
    startYear: -3300,
    endYear: -1300,
    peakStart: -2600,
    peakEnd: -1900,
    summary: {
      ko: "모헨조다로·하라파 등 계획도시로 알려진 청동기 문명. 문자가 아직 완전히 해독되지 않았다.",
      en: "A Bronze Age civilization known for planned cities like Mohenjo-daro and Harappa. Its script remains undeciphered.",
    },
    keyEvents: [
      { year: -2600, label: { ko: "모헨조다로·하라파 번성", en: "Mohenjo-daro and Harappa flourish" } },
      { year: -1900, label: { ko: "쇠퇴 시작", en: "Decline begins" } },
    ],
    color: "#a3ac6e",
  },
  {
    id: "greece",
    name: { ko: "고대 그리스", en: "Ancient Greece" },
    region: "mediterraneanEurope",
    startYear: -800,
    endYear: -146,
    peakStart: -500,
    peakEnd: -323,
    summary: {
      ko: "폴리스 체제와 고전기 철학·민주정, 알렉산드로스의 헬레니즘 확장까지를 포괄한다.",
      en: "Spans the polis system and classical philosophy and democracy, through Alexander's Hellenistic expansion.",
    },
    keyEvents: [
      { year: -508, label: { ko: "아테네 민주정", en: "Athenian democracy" } },
      { year: -336, label: { ko: "알렉산드로스 즉위", en: "Alexander crowned" } },
      { year: -146, label: { ko: "로마에 병합", en: "Absorbed by Rome" } },
    ],
    color: "#5f9482",
  },
  {
    id: "rome",
    name: { ko: "로마·비잔틴", en: "Rome & Byzantium" },
    region: "mediterraneanEurope",
    startYear: -753,
    endYear: 1453,
    peakStart: -27,
    peakEnd: 180,
    summary: {
      ko: "왕정-공화정-제정을 거쳐 서로마 멸망(476) 이후에도 비잔틴 제국으로 천년 더 존속했다.",
      en: "From kingdom to republic to empire — after the Western Empire fell in 476, it endured another thousand years as Byzantium.",
    },
    keyEvents: [
      { year: -27, label: { ko: "팍스 로마나 시작", en: "Pax Romana begins" } },
      { year: 476, label: { ko: "서로마 멸망", en: "Fall of the Western Empire" } },
      { year: 1453, label: { ko: "콘스탄티노플 함락", en: "Fall of Constantinople" } },
    ],
    color: "#598269",
  },
  {
    id: "maya",
    name: { ko: "마야", en: "Maya" },
    region: "americas",
    startYear: -1000,
    endYear: 900,
    peakStart: 250,
    peakEnd: 900,
    summary: {
      ko: "독자적 문자와 정교한 역법을 발전시킨 중미 문명. 고전기 이후 저지대 도시들이 급격히 쇠퇴했다.",
      en: "A Mesoamerican civilization with its own script and an intricate calendar system. Lowland cities collapsed abruptly after the Classic period.",
    },
    keyEvents: [
      { year: 250, label: { ko: "고전기 시작", en: "Classic period begins" } },
      { year: 900, label: { ko: "저지대 도시 붕괴", en: "Collapse of lowland cities" } },
    ],
    color: "#8a9558",
  },
  {
    id: "gupta",
    name: { ko: "굽타 왕조", en: "Gupta Empire" },
    region: "southAsia",
    startYear: 320,
    endYear: 550,
    peakStart: 320,
    peakEnd: 467,
    summary: {
      ko: "인도 고전 문화의 황금기로 불리는 시기. 수학·천문학·산스크리트 문학이 크게 발전했다.",
      en: "Often called the golden age of classical Indian culture, with major advances in mathematics, astronomy, and Sanskrit literature.",
    },
    keyEvents: [
      { year: 320, label: { ko: "찬드라굽타 1세 즉위", en: "Chandragupta I crowned" } },
      { year: 550, label: { ko: "지방 왕조로 분열", en: "Fragments into regional kingdoms" } },
    ],
    color: "#c9a24b",
  },
  {
    id: "abbasid",
    name: { ko: "이슬람 황금기(압바스)", en: "Abbasid Caliphate" },
    region: "westAsia",
    startYear: 750,
    endYear: 1258,
    peakStart: 786,
    peakEnd: 861,
    summary: {
      ko: "바그다드를 중심으로 그리스·페르시아·인도 학문이 아랍어로 번역·종합된 학술 전성기.",
      en: "Centered on Baghdad, a scholarly golden age where Greek, Persian, and Indian learning was translated and synthesized in Arabic.",
    },
    keyEvents: [
      { year: 762, label: { ko: "바그다드 건설", en: "Founding of Baghdad" } },
      { year: 830, label: { ko: "지혜의 집 설립", en: "House of Wisdom established" } },
      { year: 1258, label: { ko: "몽골의 바그다드 함락", en: "Mongol sack of Baghdad" } },
    ],
    color: "#8fb197",
  },
  {
    id: "ottoman",
    name: { ko: "오스만 제국", en: "Ottoman Empire" },
    region: "westAsia",
    startYear: 1299,
    endYear: 1922,
    peakStart: 1520,
    peakEnd: 1683,
    summary: {
      ko: "동유럽·서아시아·북아프리카에 걸친 다민족 제국. 쉴레이만 1세 시기 최대 판도에 도달했다.",
      en: "A multiethnic empire spanning Eastern Europe, West Asia, and North Africa, reaching its greatest extent under Suleiman I.",
    },
    keyEvents: [
      { year: 1453, label: { ko: "콘스탄티노플 정복", en: "Conquest of Constantinople" } },
      { year: 1683, label: { ko: "2차 빈 공방전 패배", en: "Defeat at the Second Siege of Vienna" } },
      { year: 1922, label: { ko: "제국 폐지", en: "Abolition of the empire" } },
    ],
    color: "#4a7a72",
  },
  {
    id: "inca",
    name: { ko: "잉카", en: "Inca Empire" },
    region: "americas",
    startYear: 1438,
    endYear: 1533,
    peakStart: 1438,
    peakEnd: 1527,
    summary: {
      ko: "안데스 산맥을 따라 도로망으로 연결된 제국. 스페인 정복으로 채 100년을 못 채우고 붕괴했다.",
      en: "An Andean empire linked by an extensive road network. Conquered by Spain before it reached even a century of existence.",
    },
    keyEvents: [
      { year: 1438, label: { ko: "파차쿠티 즉위, 팽창 시작", en: "Pachacuti's accession, expansion begins" } },
      { year: 1533, label: { ko: "스페인에 정복", en: "Conquered by Spain" } },
    ],
    color: "#7fa88c",
  },
  {
    id: "global-industrial",
    name: { ko: "글로벌 산업·기술 문명", en: "Global Industrial Civilization" },
    region: "global",
    startYear: 1760,
    endYear: 2026,
    peakStart: 1950,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "특정 국가나 지역이 아니라 지구 전체가 하나의 산업·기술 시스템으로 묶인 시기. 앞의 10개 문명과 달리 지금까지 쇠퇴기가 관측된 적이 없다 — 다음이 어떻게 될지는 아직 아무도 모른다.",
      en: "Not tied to any single nation or region — the era in which the entire planet became bound into one industrial-technological system. Unlike the ten civilizations above, it has never yet shown a decline. What comes next is not written.",
    },
    keyEvents: [
      { year: 1760, label: { ko: "산업혁명 시작", en: "Industrial Revolution begins" } },
      { year: 1945, label: { ko: "핵시대 개막", en: "Nuclear age begins" } },
      { year: 1950, label: { ko: "대가속(Great Acceleration) 시작", en: "The Great Acceleration begins" } },
      { year: 1972, label: { ko: "로마클럽 「성장의 한계」 보고서", en: "Club of Rome's Limits to Growth report" } },
      { year: 2015, label: { ko: "파리기후협정", en: "Paris Agreement" } },
    ],
    color: "#b0563a",
  },
];

// WorldReligionsCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀)
// Phase 1 범위: 세계 주요 종교 가운데 다섯 가지(기독교·이슬람·힌두교·불교·유대교),
// 종교당 1개 레인. "세계 5대 종교"라는 단정적 표현은 쓰지 않는다 — 조로아스터교,
// 자이나교, 시크교, 유교·도교 등도 세계 종교사의 중요한 부분이며, 이번 범위에서
// 다섯 가지를 고른 것은 비교하기 좋은 규모였기 때문이지 우열 판단이 아니다.
// 설계 원칙:
// 1) 모든 종교를 같은 수준의 깊이·같은 중립적 톤으로 서술 — 어느 전통도 "더 중요하다"는
//    인상을 주지 않도록 함. FaithCurve에서 세운 "가치판단 없는 병렬 서술" 원칙을
//    종교 간 비교로 확장한 것.
// 2) peakStart/peakEnd를 모두 startYear/endYear와 동일하게 둠 — 특정 종교에만
//    "전성기 이후 쇠퇴"라는 인상을 주는 시각적 차이를 만들지 않기 위한 의도적 선택.
//    5개 전통 모두 지금도 살아있는 전통이라는 사실을 동일하게 표현한다.
// 3) 각 종교는 서로 다른 기준(문헌 전통의 형성, 조상과의 언약, 창시자의 깨달음, 죽음과
//    부활, 최초의 계시)으로 시작점을 정했다 — 이 연대들은 같은 성격의 역사적 사실이
//    아니다. 종교가 스스로 설명하는 전통적/신앙적 기원과 역사학이 확인하는 기원을
//    각 summary에서 구별해 서술하되, 어느 한쪽을 다른 한쪽의 기준으로 재단하지
//    않는다. 전통적 연대는 이벤트 라벨에 "(전통적 연대)"로 명시한다.
// 4) 기독교는 FaithCurve에서 이미 깊게 다루므로 여기서는 요약 수준으로만 서술하고,
//    FaithCurve로 연결되는 안내를 summary에 포함한다. 이슬람의 수니/시아 등 내부
//    분파도 이번 단계에서는 세분화하지 않는다 (Phase 2 과제).

import type { Civilization } from "./civilizations";

export const religionsHistory: Civilization[] = [
  {
    id: "hinduism",
    name: { ko: "힌두교", en: "Hinduism" },
    startYear: -1500,
    endYear: 2026,
    peakStart: -1500,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "특정 창시자 없이 인더스·베다 전통이 수천 년에 걸쳐 축적되며 형성된 종교. 다양한 철학 학파와 신앙 형태를 포괄하는 것이 특징이며, 지금도 살아있는 전통으로 이어지고 있다.",
      en: "Formed over millennia from Indus Valley and Vedic traditions with no single founder. It encompasses a wide range of philosophical schools and forms of devotion, and remains a living tradition today.",
    },
    keyEvents: [
      { year: -1500, label: { ko: "베다 찬가, 구전으로 형성 시작", en: "Composition of the Vedic hymns begins (oral tradition)" } },
      { year: -500, label: { ko: "우파니샤드, 철학적 전통 체계화", en: "The Upanishads systematize Hindu philosophical thought" } },
      { year: 400, label: { ko: "푸라나 문헌, 대중 신앙 형태 확립", en: "The Puranas establish popular devotional forms" } },
    ],
    color: "#c97a3a",
  },
  {
    id: "judaism",
    name: { ko: "유대교", en: "Judaism" },
    startYear: -1800,
    endYear: 2026,
    peakStart: -1800,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "아브라함과 하나님의 언약 전승을 신앙적 기원으로 삼는 종교. 역사학적으로는 고대 이스라엘의 종교 전통이 기원전 1천년기에 걸쳐 점진적으로 발전하며 유대교의 정체성을 형성한 것으로 본다. 신자 수보다 기독교·이슬람 모두에 끼친 경전적·사상적 영향력 때문에 이 비교에 포함했다.",
      en: "A religion whose faith-based origin is the covenant between Abraham and God. Historically, scholars see ancient Israelite religious tradition developing gradually over the first millennium BCE into what became Jewish identity. It is included here less for its number of adherents than for the scriptural and doctrinal influence it had on both Christianity and Islam.",
    },
    keyEvents: [
      { year: -1800, label: { ko: "아브라함 언약 전승 (전통적 연대)", en: "The tradition of Abraham's covenant (traditional dating)" } },
      { year: -1250, label: { ko: "모세의 율법 수여 전승 (전통적 연대)", en: "The tradition of Moses receiving the Law (traditional dating)" } },
      { year: -515, label: { ko: "제2성전 완공", en: "Completion of the Second Temple" } },
    ],
    color: "#4a6a9c",
  },
  {
    id: "buddhism",
    name: { ko: "불교", en: "Buddhism" },
    startYear: -528,
    endYear: 2026,
    peakStart: -528,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "고타마 싯다르타(석가모니)의 깨달음과 가르침에서 출발한 종교. 전통적으로는 깨달음의 시기를 기원전 528년경으로 보지만, 정확한 생존 연대는 학계에서 합의되지 않았고 대체로 기원전 5세기경으로 추정한다. 이후 여러 지역으로 퍼지며 다양한 전통으로 갈라졌지만 '깨달음'이라는 핵심 문제의식은 공유한다.",
      en: "Originating with the enlightenment and teaching of Siddhartha Gautama (the Buddha). Tradition places his enlightenment around 528 BCE, though scholars have not reached consensus on his exact dates and generally place him in the 5th century BCE. It later spread across many regions and branched into diverse traditions, all sharing the core concern of awakening.",
    },
    keyEvents: [
      { year: -528, label: { ko: "고타마 싯다르타, 깨달음을 얻음 (전통적 연대, 학계는 BC5세기경으로 추정)", en: "Siddhartha Gautama attains enlightenment (traditional dating; scholars estimate the 5th century BCE)" } },
      { year: -250, label: { ko: "아소카 왕, 불교 포교 후원", en: "King Ashoka sponsors the spread of Buddhism" } },
      { year: 100, label: { ko: "대승불교 경전, 독자적 전통으로 발전", en: "Mahayana sutras develop into a distinct tradition" } },
    ],
    color: "#d4a13a",
  },
  {
    id: "christianity",
    name: { ko: "기독교", en: "Christianity" },
    startYear: 30,
    endYear: 2026,
    peakStart: 30,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "예수의 십자가 처형과 초기 제자 공동체의 출현은 역사적 사건으로, 부활은 기독교 신앙의 핵심 고백으로 구분된다. 이 공동체가 로마 제국 전역과 이후 전 세계로 퍼져나갔다. 가톨릭·정교회·개신교 등 여러 전통으로 나뉘어 있으며, 각 전통의 역사는 FaithCurve에서 더 깊게 다룬다.",
      en: "The crucifixion of Jesus and the emergence of the early disciple community are treated as historical events, while the resurrection is distinguished as the central confession of Christian faith. This community spread across the Roman Empire and eventually worldwide. It now encompasses several traditions — Catholic, Orthodox, Protestant, and others — whose individual histories are covered in more depth in FaithCurve.",
    },
    keyEvents: [
      { year: 30, label: { ko: "예수의 십자가 처형과 초기 공동체 형성", en: "The crucifixion of Jesus and formation of the early community" } },
      { year: 313, label: { ko: "밀라노 칙령, 로마 제국 내 종교적 관용 인정", en: "The Edict of Milan grants religious tolerance within the Roman Empire" } },
      { year: 1054, label: { ko: "동서 교회, 대분열", en: "The East–West Schism divides the church" } },
    ],
    color: "#7a3a5a",
  },
  {
    id: "islam",
    name: { ko: "이슬람교", en: "Islam" },
    startYear: 610,
    endYear: 2026,
    peakStart: 610,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "무함마드가 첫 계시를 받은 사건(610년경)을 신앙적 기원으로, 메디나로 이주한 헤지라(622년)를 공동체 제도화의 전환점으로 본다. 이후 아라비아 반도를 넘어 빠르게 확산됐고, 수니파와 시아파로 나뉘었다 — 두 전통 모두 이 데이터셋에서는 하나의 레인으로 함께 다룬다 (세분화는 Phase 2 과제).",
      en: "Muhammad's first revelation (around 610 CE) marks the faith's origin, while the Hijra — his migration to Medina in 622 — marks the turning point when the community became institutionalized. It then spread rapidly beyond the Arabian Peninsula and later divided into Sunni and Shia traditions, both represented here as a single lane (further branching is a Phase 2 task).",
    },
    keyEvents: [
      { year: 610, label: { ko: "무함마드, 첫 계시를 받음", en: "Muhammad receives his first revelation" } },
      { year: 622, label: { ko: "헤지라(메디나 이주), 이슬람 공동체 형성", en: "The Hijra (migration to Medina) establishes the Muslim community" } },
      { year: 632, label: { ko: "꾸란 편찬 시작 (무함마드 사후)", en: "Compilation of the Quran begins after Muhammad's death" } },
    ],
    color: "#3a8a7a",
  },
];

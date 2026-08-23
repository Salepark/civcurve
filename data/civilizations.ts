export type RegionKey =
  | "westAsia"
  | "mediterraneanEurope"
  | "southAsia"
  | "eastAsia"
  | "africa"
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
  slug: string;
  name: LocalizedText;
  region: RegionKey;
  startYear: number;
  /**
   * "present"는 ongoing 문명 전용 sentinel — 하드코딩된 연도 대신
   * 소비하는 쪽(resolveYear)에서 현재 연도로 치환한다. 다른 문명은 항상 number.
   */
  endYear: number | "present";
  peakStart: number;
  peakEnd: number | "present";
  summary: LocalizedText;
  keyEvents: KeyEvent[];
  color: string;
  /**
   * true면 아직 쇠퇴기가 관측되지 않은 "진행 중" 문명 — Timeline이 곡선을
   * 한 점으로 닫지 않고 현재 시점에서 폭이 좁아지지 않은 채로 잘라 그린다.
   * 다른 모든 문명과의 시각적 대비(닫힌 곡선 vs 열린 곡선)가 핵심 장치.
   */
  ongoing?: boolean;
  /** 학술적 합의가 아닌 해석적 구분 등, summary 아래 별도 안내 블록으로 보여줄 문구 */
  note?: LocalizedText;
};

// Phase 1 프로토타입 데이터 — 10개 역사 문명 + 진행 중인 현재 문명 1개.
// 연대는 대중적으로 통용되는 근사치이며, 학술적으로는 이견이 있을 수 있음.
export const civilizations: Civilization[] = [
  {
    id: "mesopotamia",
    slug: "mesopotamia",
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
    slug: "ancient-egypt",
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
    slug: "indus-valley",
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
    slug: "ancient-greece",
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
    id: "phoenicia-carthage",
    slug: "phoenicia-carthage",
    name: { ko: "페니키아·카르타고", en: "Phoenicia–Carthage" },
    region: "mediterraneanEurope",
    startYear: -1200,
    endYear: -146,
    peakStart: -300,
    peakEnd: -202,
    summary: {
      ko: "티레, 시돈 등 페니키아 도시국가의 지중해 무역망에서 시작해, 식민도시 카르타고가 서지중해 최강 세력으로 성장한 문명. 한니발의 알프스 원정으로 대표되는 2차 포에니 전쟁 시기 로마와 패권을 다퉜으나, 3차 포에니 전쟁에서 로마에 완전히 멸망했다.",
      en: "Beginning with the Mediterranean trade networks of Phoenician city-states like Tyre and Sidon, this civilization saw the colony of Carthage grow into the dominant power of the western Mediterranean. It rivaled Rome for supremacy during the Second Punic War, epitomized by Hannibal's crossing of the Alps, before being utterly destroyed by Rome in the Third Punic War.",
    },
    keyEvents: [
      { year: -1200, label: { ko: "페니키아 도시국가 무역망 형성 시작", en: "Phoenician city-states begin building Mediterranean trade networks" } },
      { year: -814, label: { ko: "카르타고 건설", en: "Founding of Carthage" } },
      { year: -218, label: { ko: "2차 포에니 전쟁, 한니발의 알프스 원정", en: "Second Punic War, Hannibal crosses the Alps" } },
      { year: -146, label: { ko: "3차 포에니 전쟁, 카르타고 완전 파괴", en: "Third Punic War, complete destruction of Carthage" } },
    ],
    color: "#7a4f6d",
  },
  {
    id: "rome",
    slug: "rome-byzantium",
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
    slug: "maya",
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
    id: "olmec-teotihuacan",
    slug: "olmec-teotihuacan",
    name: { ko: "올멕·테오티우아칸", en: "Olmec–Teotihuacan" },
    region: "americas",
    startYear: -1200,
    endYear: 550,
    peakStart: 200,
    peakEnd: 450,
    summary: {
      ko: "산 로렌소, 라 벤타를 중심으로 형성된 올멕 문명에서 시작해, 이후 테오티우아칸이 아메리카 대륙 최대 도시로 성장하며 메소아메리카 문명의 원류를 이룬 시기. 마야·아스텍보다 앞서 신전 건축과 도시 계획의 기틀을 세웠으나, 6세기 내부 혼란과 화재로 테오티우아칸이 붕괴하며 막을 내렸다.",
      en: "Beginning with the Olmec civilization centered on San Lorenzo and La Venta, this curve traces the root tradition of Mesoamerican civilization through the rise of Teotihuacan, which grew into the largest city in the Americas. It established foundations of temple architecture and urban planning that predated the Maya and Aztec, before Teotihuacan collapsed amid internal upheaval and fire in the 6th century.",
    },
    note: {
      ko: "이 곡선은 올멕 문명과 테오티우아칸을 하나로 압축한 단순화한 해석입니다.",
      en: "This curve compresses the Olmec civilization and Teotihuacan into one simplified interpretation.",
    },
    keyEvents: [
      { year: -1200, label: { ko: "올멕 문명 형성 (산 로렌소)", en: "Olmec civilization emerges at San Lorenzo" } },
      { year: -900, label: { ko: "라 벤타, 올멕 중심지로 성장", en: "La Venta rises as the Olmec center" } },
      { year: 200, label: { ko: "테오티우아칸, 태양의 피라미드 건설", en: "Construction of the Pyramid of the Sun at Teotihuacan" } },
      { year: 550, label: { ko: "내부 혼란과 화재로 테오티우아칸 붕괴", en: "Teotihuacan collapses amid internal upheaval and fire" } },
    ],
    color: "#8f4a42",
  },
  {
    id: "gupta",
    slug: "gupta",
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
    id: "mughal",
    slug: "mughal-empire",
    name: { ko: "무굴 제국", en: "Mughal Empire" },
    region: "southAsia",
    startYear: 1526,
    endYear: 1857,
    peakStart: 1600,
    peakEnd: 1707,
    summary: {
      ko: "바부르가 파니파트 전투에서 승리하며 세운 왕조로, 악바르 대제 시기 강력한 중앙집권 체제를 구축했다. 아우랑제브 시기 인도 아대륙 대부분을 지배하며 최대 영토를 이뤘으나, 이후 지방 세력 이탈과 영국 동인도회사의 세력 확장으로 서서히 쇠퇴해 1857년 세포이 항쟁 이후 공식적으로 종식되었다.",
      en: "Founded by Babur after his victory at the Battle of Panipat, the Mughal Empire built a powerful centralized state under Akbar. It reached its greatest territorial extent under Aurangzeb, ruling most of the Indian subcontinent, before gradually declining amid regional fragmentation and the rise of the British East India Company, formally ending after the 1857 Rebellion.",
    },
    keyEvents: [
      { year: 1526, label: { ko: "파니파트 전투, 바부르가 무굴 제국 건국", en: "Battle of Panipat, Babur founds the Mughal Empire" } },
      { year: 1556, label: { ko: "악바르 대제 즉위, 제국 체제 정비", en: "Akbar ascends the throne, consolidates the empire" } },
      { year: 1631, label: { ko: "타지마할 건설 (샤 자한)", en: "Construction of the Taj Mahal under Shah Jahan" } },
      { year: 1707, label: { ko: "아우랑제브 사망, 최대 영토 이후 쇠퇴 시작", en: "Death of Aurangzeb, decline begins after peak territorial extent" } },
      { year: 1857, label: { ko: "세포이 항쟁, 무굴 제국 공식 종료", en: "Indian Rebellion of 1857, formal end of Mughal rule" } },
    ],
    color: "#b8894a",
  },
  {
    id: "khmer",
    slug: "khmer",
    name: { ko: "크메르(앙코르)", en: "Khmer (Angkor)" },
    region: "southAsia",
    startYear: 802,
    endYear: 1431,
    peakStart: 1113,
    peakEnd: 1220,
    summary: {
      ko: "자야바르만 2세가 앙코르를 중심으로 세운 제국으로, 수리야바르만 2세 시기 앙코르와트를 건설하며 전성기를 맞았다. 이후 자야바르만 7세 때 영토를 최대로 확장했으나, 지속된 전쟁과 주변 세력의 압박으로 쇠퇴해 1431년 아유타야에 함락되었다.",
      en: "Founded by Jayavarman II centered on Angkor, the Khmer Empire reached its height under Suryavarman II, who built Angkor Wat. It expanded to its greatest extent under Jayavarman VII before declining under sustained warfare and regional pressure, falling to Ayutthaya in 1431.",
    },
    keyEvents: [
      { year: 802, label: { ko: "자야바르만 2세, 크메르 제국 건국", en: "Jayavarman II founds the Khmer Empire" } },
      { year: 1113, label: { ko: "수리야바르만 2세 치세, 앙코르와트 건설", en: "Reign of Suryavarman II, construction of Angkor Wat" } },
      { year: 1181, label: { ko: "자야바르만 7세, 최대 영토 확장", en: "Jayavarman VII expands the empire to its greatest extent" } },
      { year: 1431, label: { ko: "아유타야에 앙코르 함락", en: "Fall of Angkor to Ayutthaya" } },
    ],
    color: "#7f9463",
  },
  {
    id: "persia",
    slug: "persia",
    name: { ko: "페르시아", en: "Persia" },
    region: "westAsia",
    startYear: -550,
    endYear: 651,
    peakStart: -518,
    peakEnd: -465,
    summary: {
      ko: "키루스 대왕이 아케메네스 제국을 세우며 시작해, 파르티아를 거쳐 사산조까지 이어진 고대 페르시아 문명. 다리우스 1세와 크세르크세스 1세 시기 이집트부터 인더스강까지 이르는 고대 세계 최대 제국을 이뤘다. 이후 알렉산드로스의 정복과 왕조 교체를 겪으면서도 문화적 연속성을 유지했으나, 651년 이슬람 세력에게 정복되며 고대 페르시아 시대가 막을 내렸다.",
      en: "Beginning with Cyrus the Great's founding of the Achaemenid Empire, ancient Persian civilization continued through the Parthian and Sassanid dynasties. Under Darius I and Xerxes I, it became the largest empire the ancient world had seen, stretching from Egypt to the Indus River. Despite Alexander's conquest and successive dynastic changes, it maintained cultural continuity until the Arab Muslim conquest ended the Sassanid era in 651 CE.",
    },
    note: {
      ko: "이 곡선은 아케메네스·파르티아·사산조 등 여러 왕조를 하나로 압축한 단순화한 해석입니다. (로마·비잔틴과 동일한 방식)",
      en: "This curve compresses several dynasties — Achaemenid, Parthian, Sassanid — into one simplified interpretation, following the same approach used for Rome & Byzantium.",
    },
    keyEvents: [
      { year: -550, label: { ko: "키루스 대왕, 아케메네스 제국 건국", en: "Cyrus the Great founds the Achaemenid Empire" } },
      { year: -480, label: { ko: "그리스-페르시아 전쟁 (마라톤, 테르모필레, 살라미스)", en: "Greco-Persian Wars (Marathon, Thermopylae, Salamis)" } },
      { year: -330, label: { ko: "알렉산드로스, 아케메네스 제국 정복", en: "Alexander the Great conquers the Achaemenid Empire" } },
      { year: 224, label: { ko: "사산조 페르시아 건국 (아르다시르 1세)", en: "Sassanid Empire founded by Ardashir I" } },
      { year: 651, label: { ko: "이슬람 세력의 정복으로 사산조 멸망", en: "Fall of the Sassanid Empire to the Arab Muslim conquest" } },
    ],
    color: "#5c8a8f",
  },
  {
    id: "abbasid",
    slug: "abbasid",
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
    slug: "ottoman",
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
    slug: "inca",
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
    id: "umayyad",
    slug: "umayyad",
    name: { ko: "우마이야 왕조", en: "Umayyad Caliphate" },
    region: "westAsia",
    startYear: 661,
    endYear: 750,
    peakStart: 705,
    peakEnd: 740,
    summary: {
      ko: "무아위야 1세가 다마스쿠스를 수도로 세운 이슬람 최초의 세습 칼리프 왕조. 이베리아반도부터 중앙아시아까지 이슬람 영토를 최대로 확장했으나, 750년 압바스 혁명으로 전복되었다.",
      en: "Established by Muawiyah I with Damascus as its capital, this was the first hereditary Islamic caliphate. It expanded Islamic territory to its greatest extent, from the Iberian Peninsula to Central Asia, before being overthrown by the Abbasid Revolution in 750.",
    },
    keyEvents: [
      { year: 661, label: { ko: "무아위야 1세, 우마이야 칼리프국 수립", en: "Muawiyah I establishes the Umayyad Caliphate" } },
      { year: 711, label: { ko: "이베리아반도 정복 시작", en: "Conquest of the Iberian Peninsula begins" } },
      { year: 732, label: { ko: "투르-푸아티에 전투로 유럽 진출 저지", en: "Battle of Tours halts expansion into Europe" } },
      { year: 750, label: { ko: "압바스 혁명으로 왕조 전복", en: "Abbasid Revolution overthrows the dynasty" } },
    ],
    color: "#6f9986",
  },
  {
    id: "mongol",
    slug: "mongol-empire",
    name: { ko: "몽골 제국", en: "Mongol Empire" },
    region: "westAsia",
    startYear: 1206,
    endYear: 1368,
    peakStart: 1260,
    peakEnd: 1300,
    summary: {
      ko: "칭기즈 칸이 몽골 부족을 통일하며 시작해 유라시아 대륙 대부분을 정복한 역사상 최대 규모의 인접 영토 제국. 쿠빌라이 칸 시기 남송을 정복하며 정점을 찍었고, 이후 여러 칸국으로 분열되며 원 왕조 멸망과 함께 쇠퇴했다.",
      en: "Founded when Genghis Khan unified the Mongol tribes, it grew into the largest contiguous land empire in history. It peaked under Kublai Khan with the conquest of Southern Song China, then fragmented into successor khanates and declined with the fall of the Yuan Dynasty.",
    },
    keyEvents: [
      { year: 1206, label: { ko: "칭기즈 칸, 몽골 부족 통일", en: "Genghis Khan unifies the Mongol tribes" } },
      { year: 1220, label: { ko: "호라즘 제국 정복", en: "Conquest of the Khwarazmian Empire" } },
      { year: 1258, label: { ko: "바그다드 함락, 압바스 칼리프국 멸망", en: "Fall of Baghdad, end of the Abbasid Caliphate" } },
      { year: 1279, label: { ko: "쿠빌라이 칸, 남송 정복하고 중국 통일", en: "Kublai Khan conquers Southern Song, unifying China" } },
      { year: 1368, label: { ko: "원 왕조 멸망, 몽골 초원으로 퇴각", en: "Fall of the Yuan Dynasty, Mongols retreat to the steppe" } },
    ],
    color: "#9a7b4f",
  },
  {
    id: "china",
    slug: "china",
    name: { ko: "중국", en: "China" },
    region: "eastAsia",
    startYear: -221,
    endYear: 1912,
    peakStart: 600,
    peakEnd: 1200,
    summary: {
      ko: "진시황의 중국 통일로 시작해 한·당·송·원·명·청으로 이어진 통일 왕조 체제의 연속. 당~송 시기 세계 최고 수준의 경제력과 기술, 문화를 이뤘다. 이후 여러 왕조 교체와 몽골 지배(원)를 거치면서도 통일 제국 체제가 유지되었으나, 1912년 신해혁명으로 청 왕조가 무너지며 2000년 넘게 이어진 제정 시대가 끝났다.",
      en: "Beginning with Qin Shi Huang's unification of China, this curve traces the continuous imperial system through the Han, Tang, Song, Yuan, Ming, and Qing dynasties. It reached a cultural, economic, and technological golden age during the Tang–Song era. Despite dynastic changes and Mongol rule under the Yuan, the unified imperial system persisted for over two millennia until the 1912 Xinhai Revolution ended the Qing Dynasty and imperial rule.",
    },
    note: {
      ko: "이 곡선은 진·한부터 청까지 여러 왕조를 하나로 압축한 단순화한 해석입니다. (로마·비잔틴과 동일한 방식)",
      en: "This curve compresses multiple dynasties from Qin/Han through Qing into one simplified interpretation, following the same approach used for Rome & Byzantium.",
    },
    keyEvents: [
      { year: -221, label: { ko: "진시황, 중국 통일", en: "Qin Shi Huang unifies China" } },
      { year: -206, label: { ko: "한 왕조 건국, 제국 체제 확립", en: "Han Dynasty founded, imperial system consolidated" } },
      { year: 618, label: { ko: "당 왕조 건국, 황금기 시작", en: "Tang Dynasty founded, golden age begins" } },
      { year: 1279, label: { ko: "몽골, 남송 정복하고 원 왕조 수립", en: "Mongol conquest of Southern Song, establishment of the Yuan Dynasty" } },
      { year: 1912, label: { ko: "신해혁명, 청 왕조 멸망", en: "Xinhai Revolution, fall of the Qing Dynasty" } },
    ],
    color: "#7d6a9c",
  },
  {
    id: "japan",
    slug: "japan",
    name: { ko: "일본", en: "Japan" },
    region: "eastAsia",
    startYear: 300,
    endYear: 1868,
    peakStart: 1603,
    peakEnd: 1868,
    summary: {
      ko: "야마토 정권의 성립으로 시작해 나라·헤이안 시대의 귀족 문화를 거쳐, 에도 시대 도쿠가와 막부 아래 오랜 평화와 독자적 문화가 꽃핀 문명. 1868년 메이지 유신으로 봉건 체제가 끝나고 근대 국민국가로 전환되었다.",
      en: "Beginning with the establishment of the Yamato state, Japanese civilization passed through the aristocratic culture of the Nara and Heian periods before flourishing under the long peace and distinctive culture of the Tokugawa shogunate's Edo period. The 1868 Meiji Restoration ended the feudal system and marked the transition to a modern nation-state.",
    },
    keyEvents: [
      { year: 300, label: { ko: "야마토 정권 성립", en: "Establishment of the Yamato state" } },
      { year: 794, label: { ko: "헤이안 시대 시작, 귀족 문화 융성", en: "Beginning of the Heian period, flourishing of aristocratic culture" } },
      { year: 1603, label: { ko: "도쿠가와 막부 수립, 에도 시대 시작", en: "Establishment of the Tokugawa shogunate, beginning of the Edo period" } },
      { year: 1868, label: { ko: "메이지 유신, 봉건 체제 종료", en: "Meiji Restoration ends the feudal system" } },
    ],
    color: "#a56b8c",
  },
  {
    id: "korea",
    slug: "korea",
    name: { ko: "한국", en: "Korea" },
    region: "eastAsia",
    startYear: 676,
    endYear: 1910,
    peakStart: 1418,
    peakEnd: 1450,
    summary: {
      ko: "신라의 삼국 통일로 시작해 고려·조선으로 이어진 한반도 통일 왕조의 연속. 조선 세종 시기 훈민정음 창제를 비롯한 과학·문화적 전성기를 맞았다. 이후 근대화 과정에서 열강의 압박을 받다 1910년 일본에 병합되며 주권을 잃었다.",
      en: "Beginning with Silla's unification of the Three Kingdoms, this curve traces the continuous unified Korean dynasties through Goryeo and Joseon. It reached a scientific and cultural golden age under King Sejong of Joseon, including the creation of Hangul, before losing sovereignty to Japan's annexation in 1910 amid pressure from imperial powers during modernization.",
    },
    note: {
      ko: "이 곡선은 신라·고려·조선을 하나로 압축한 단순화한 해석입니다.",
      en: "This curve compresses Silla, Goryeo, and Joseon into one simplified interpretation.",
    },
    keyEvents: [
      { year: 676, label: { ko: "신라, 삼국 통일", en: "Silla unifies the Three Kingdoms" } },
      { year: 918, label: { ko: "고려 건국", en: "Founding of Goryeo" } },
      { year: 1418, label: { ko: "세종대왕 치세, 훈민정음 창제", en: "Reign of King Sejong, creation of Hangul" } },
      { year: 1910, label: { ko: "한일병합, 대한제국 주권 상실", en: "Japan's annexation of Korea, loss of sovereignty" } },
    ],
    color: "#6e5a86",
  },
  {
    id: "aksum",
    slug: "aksum",
    name: { ko: "아크숨", en: "Aksum" },
    region: "africa",
    startYear: 100,
    endYear: 960,
    peakStart: 300,
    peakEnd: 400,
    summary: {
      ko: "홍해 무역을 기반으로 성장한 고대 아프리카의 강국으로, 에자나 왕 시기 기독교를 받아들이고 영토를 크게 확장하며 전성기를 맞았다. 이후 이슬람 세력의 홍해 무역로 장악과 내부 요인으로 서서히 쇠퇴했다.",
      en: "A powerful ancient African kingdom built on Red Sea trade, Aksum reached its height under King Ezana, who adopted Christianity and expanded its territory. It gradually declined as Islamic powers took control of Red Sea trade routes.",
    },
    keyEvents: [
      { year: 100, label: { ko: "아크숨 왕국 성장 시작", en: "Kingdom of Aksum begins to rise" } },
      { year: 330, label: { ko: "에자나 왕, 기독교 국교화", en: "King Ezana adopts Christianity as the state religion" } },
      { year: 550, label: { ko: "홍해·아라비아 무역 지배력 정점", en: "Peak of dominance over Red Sea and Arabian trade" } },
      { year: 960, label: { ko: "구디트 침공 등으로 쇠퇴, 왕국 해체", en: "Decline and dissolution following invasions such as Gudit's" } },
    ],
    color: "#3d5a80",
  },
  {
    id: "mali-songhai",
    slug: "mali-songhai",
    name: { ko: "말리·송가이", en: "Mali–Songhai" },
    region: "africa",
    startYear: 1235,
    endYear: 1591,
    peakStart: 1312,
    peakEnd: 1528,
    summary: {
      ko: "순디아타 케이타가 세운 말리 제국은 만사 무사 시기 세계 최고 부유국 중 하나로 성장했고, 이후 송가이 제국이 그 영향력을 이어받아 아스키아 무함마드 시기 서아프리카 최대 제국으로 확장했다. 1591년 모로코군에 톤디비 전투에서 패배하며 서아프리카 제국 시대가 막을 내렸다.",
      en: "Founded by Sundiata Keita, the Mali Empire grew into one of the wealthiest states in the world under Mansa Musa. The Songhai Empire later inherited its influence, expanding to become West Africa's largest empire under Askia Muhammad, before Moroccan forces ended the era at the Battle of Tondibi in 1591.",
    },
    note: {
      ko: "이 곡선은 말리 제국과 송가이 제국을 하나로 압축한 단순화한 해석입니다. (로마·비잔틴과 동일한 방식)",
      en: "This curve compresses the Mali and Songhai Empires into one simplified interpretation, following the same approach used for Rome & Byzantium.",
    },
    keyEvents: [
      { year: 1235, label: { ko: "순디아타 케이타, 말리 제국 건국", en: "Sundiata Keita founds the Mali Empire" } },
      { year: 1324, label: { ko: "만사 무사의 메카 순례 (세계적 부의 상징)", en: "Mansa Musa's pilgrimage to Mecca, symbol of Mali's wealth" } },
      { year: 1468, label: { ko: "송가이, 순니 알리 시기 통북투 장악", en: "Songhai captures Timbuktu under Sunni Ali" } },
      { year: 1591, label: { ko: "톤디비 전투, 모로코에 송가이 멸망", en: "Battle of Tondibi, fall of Songhai to Morocco" } },
    ],
    color: "#4f6d8f",
  },
  {
    id: "aztec",
    slug: "aztec",
    name: { ko: "아스텍", en: "Aztec" },
    region: "americas",
    startYear: 1325,
    endYear: 1521,
    peakStart: 1440,
    peakEnd: 1520,
    summary: {
      ko: "테노치티틀란 건설로 시작해 삼각동맹 결성 이후 중앙아메리카 최강 세력으로 성장한 문명. 목테수마 2세 시기 절정에 달했으나 에르난 코르테스의 스페인 원정대에게 정복당하며 급격히 멸망했다.",
      en: "Beginning with the founding of Tenochtitlan, the Aztec grew into the dominant power in central Mexico after forming the Triple Alliance. It reached its height under Moctezuma II before being abruptly conquered by Hernán Cortés's Spanish expedition.",
    },
    keyEvents: [
      { year: 1325, label: { ko: "테노치티틀란 건설", en: "Founding of Tenochtitlan" } },
      { year: 1428, label: { ko: "삼각동맹 결성, 아스텍 제국 성립", en: "Formation of the Triple Alliance, birth of the Aztec Empire" } },
      { year: 1487, label: { ko: "대신전(템플로 마요르) 봉헌", en: "Dedication of the Great Temple (Templo Mayor)" } },
      { year: 1519, label: { ko: "에르난 코르테스 도착", en: "Arrival of Hernán Cortés" } },
      { year: 1521, label: { ko: "테노치티틀란 함락", en: "Fall of Tenochtitlan" } },
    ],
    color: "#7a9b5a",
  },
  {
    id: "global-industrial",
    slug: "global-industrial",
    name: { ko: "글로벌 산업·기술 문명", en: "Global Industrial Civilization" },
    region: "global",
    startYear: 1760,
    endYear: "present",
    peakStart: 1950,
    peakEnd: "present",
    ongoing: true,
    summary: {
      ko: "특정 국가나 지역이 아니라 지구 전체가 하나의 산업·기술 시스템으로 묶인 시기. 앞의 10개 문명과 달리 지금까지 쇠퇴기가 관측된 적이 없다 — 다음이 어떻게 될지는 아직 아무도 모른다.",
      en: "Not tied to any single nation or region — the era in which the entire planet became bound into one industrial-technological system. Unlike the ten civilizations above, it has never yet shown a decline. What comes next is not written.",
    },
    note: {
      ko: "이 문명 구분은 학계에서 합의된 것이 아닌 하나의 해석입니다. 나머지 문명들과 달리 현재 진행 중이며, 쇠퇴 여부를 판단하기엔 이릅니다.",
      en: "This civilization category is one interpretation, not an academic consensus. Unlike the others, it is still ongoing, and it is too early to assess any decline.",
    },
    keyEvents: [
      { year: 1760, label: { ko: "산업혁명 시작", en: "Industrial Revolution begins" } },
      { year: 1945, label: { ko: "핵시대 개막", en: "Nuclear age begins" } },
      { year: 1950, label: { ko: "대가속(Great Acceleration) 시작", en: "The Great Acceleration begins" } },
      { year: 1972, label: { ko: "로마클럽 「성장의 한계」 보고서", en: "Club of Rome's Limits to Growth report" } },
      { year: 2015, label: { ko: "파리기후협정", en: "Paris Agreement" } },
      { year: 2022, label: { ko: "ChatGPT 출시, AI 대중화", en: "ChatGPT launch — AI goes mainstream" } },
    ],
    color: "#b0563a",
  },
];

// IslamCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀)
// Phase 1 범위: 이슬람 종교사 딥다이브, 14개 장 (v3, 2026-11-02 Louis 교정 반영).
// WorldReligionsCurve의 이슬람 항목(610~현재, 단일 레인)을 FaithCurve가
// 기독교를 다루는 깊이로 확장한 것.
//
// REVISED 2026-11-02 (v2 → v3): JudaismCurve에 구약시대를 넣은 것과 같은 종류의
// 불일치를 Louis가 IslamCurve에서 짚었다 — 이슬람은 구약시대를 표기하지 않는데
// 기독교·유대교에만 표기한 것은 이상하다는 지적. 검토 결과 타당하되 범위는 더
// 좁다. 이슬람 신학에서 이브라힘과 아들 이스마일(이삭이 아님)의 카바 건립은
// 단순한 배경이 아니라 하지 의례(사이, 잠잠, 이둘아드하)에 직접 구현된 자기
// 정체성이며, 꾸란은 이를 "밀라트 이브라힘"이라 부르고 이브라힘을 "하니프"로
// 규정한다(꾸란 3:67). 반면 아담·노아·무사·이사는 꾸란에서 "예언자 계승 서사"로
// 기능할 뿐 장소·건축물·현재진행형 의례로 제도화되어 있지 않다. Louis는 세 범위
// 선택지 중 가장 좁은 "이브라힘·이스마일·카바 건립만"을 선택했으므로 아담/노아/
// 무사/이사는 별도 장으로 추가하지 않는다.
//
// 맨 앞에 장 1개만 추가했고 기존 13개 장은 v2와 동일하다. -1700년과 570년 사이에
// 큰 시간 공백이 생기는 것은 의도된 것이다.
//
// 설계 원칙 (v2부터 유지):
// 1) 종교·신학사 중심. 오스만·사파비 등 제국의 정치·군사사는 "배경"으로만 다룬다.
// 2) 수니·시아를 680년(카르발라) 이후 별도 레인으로 분리, 같은 깊이·중립적 톤.
//    시아 내부의 열두이맘파/이스마일파/자이드파 분화도 가치 판단 없이 병렬 서술.
// 3) ScienceCurve의 이슬람 황금기와 시기가 겹치지만 관점이 다르다(신학·법학·신비주의).
// 4) 두 전통의 마지막 장(현대 수니 개혁·부흥 / 현대 시아 성직 위계)만 ongoing: true.
// 5) (v3 신규) 새 장의 연대(-2000~-1700)는 JudaismCurve 족장시대 장과 동일하게
//    맞춰 비교 가능성을 확보하며, 확정된 역사 연대가 아니라 전통적 연대기임을
//    요약문에서 헷지한다.

import type { Civilization } from "./civilizations";

export const islamHistory: Civilization[] = [
  {
    id: "ibrahim-ismail-and-the-founding-of-the-kaaba",
    name: {
      ko: "이브라힘·이스마일과 카바 건립",
      en: "Ibrahim, Isma'il, and the Founding of the Kaaba",
    },
    startYear: -2000,
    endYear: -1700,
    peakStart: -2000,
    peakEnd: -1700,
    summary: {
      ko: "이슬람 전승에 따르면 이브라힘(아브라함)과 그의 아들 이스마일(이삭이 아님 — 유대·기독교 전통과 갈라지는 핵심 지점), 그리고 이스마일의 어머니 하자르(하갈)가 메카 계곡에 정착했고, 이브라힘과 이스마일이 그곳에 일신교 경배를 위한 \"최초의 집\" 카바를 세웠다고 전한다. 꾸란은 이를 \"밀라트 이브라힘\"(이브라힘의 종교)이라 부르며 이브라힘을 유대인도 기독교인도 아닌 순수한 일신교도 \"하니프\"로 묘사한다(꾸란 3:67). 이 서사는 이슬람에서 단순한 배경 역사가 아니라 하지(성지순례) 의례 자체에 직접 구현되어 있다 — 사파·마르와 두 언덕 사이를 뛰는 사이(하자르의 물 찾기를 기념), 잠잠 샘물, 그리고 이브라힘이 아들(이슬람 전승에서는 이삭이 아닌 이스마일)을 바치려 했던 순종을 기념하는 이둘아드하(희생제)까지. 여기 표기된 연대는 JudaismCurve의 족장시대 장과 동일한 전통적 연대기를 비교 가능성을 위해 그대로 쓴 것일 뿐, 어떤 확정된 역사적 연대로 제시하는 것이 아니다 — 이슬람 전통 자체도 이를 정밀하게 연대가 매겨진 기록이 아니라 신성한 서사로 다룬다.",
      en: "Islamic tradition holds that Ibrahim (Abraham), his son Isma'il (Ishmael — not Isaac, a key point of divergence from the Judeo-Christian tradition), and Isma'il's mother Hajar (Hagar) settled in the valley of Mecca, where Ibrahim and Isma'il built the Kaaba as \"the first house\" of monotheistic worship. The Quran calls this \"millat Ibrahim\" (the religion of Abraham) and describes Ibrahim as \"hanif\" — a primordial monotheist who was neither Jew nor Christian (Quran 3:67). This narrative is not mere background for Islam: it is directly embodied in the Hajj pilgrimage itself — the sa'i (running between the hills of Safa and Marwah, commemorating Hajar's search for water), the Zamzam well, and Eid al-Adha (commemorating Ibrahim's willingness to sacrifice his son, understood in Islamic tradition to be Isma'il rather than Isaac). The dates shown here follow the same traditional chronology used for JudaismCurve's patriarchal-era chapter, for comparability across datasets only — they are not presented as a settled historical date; Islamic tradition itself treats this as sacred narrative rather than a precisely dated historical record.",
    },
    keyEvents: [
      {
        year: -2000,
        label: {
          ko: "전통적 연대 표기 (JudaismCurve 족장시대 장과 비교를 위해 동일 연대 사용)",
          en: "Traditional dating marker, aligned with JudaismCurve's patriarchal-era chapter for comparability only",
        },
      },
      {
        year: -1850,
        label: {
          ko: "하자르와 이스마일이 메카 계곡에 정착했다고 전해짐, 잠잠 샘물 출현",
          en: "Hajar and Isma'il are said to settle in the valley of Mecca; the Zamzam well emerges",
        },
      },
      {
        year: -1700,
        label: {
          ko: "이브라힘과 이스마일이 카바를 건립 (꾸란 2:127 등 전승에 따름)",
          en: "Ibrahim and Isma'il build the Kaaba, per Quranic and Islamic tradition (e.g. Quran 2:127)",
        },
      },
    ],
    color: "#a68a5a",
  },
  {
    id: "muhammad-early-revelation",
    name: { ko: "무함마드의 생애와 초기 계시", en: "Muhammad's Life and Early Revelation" },
    startYear: 570,
    endYear: 632,
    peakStart: 610,
    peakEnd: 632,
    summary: {
      ko: "메카의 상인 무함마드가 610년경 히라 동굴에서 첫 계시를 받은 사건에서 시작해, 메카 포교기의 박해, 622년 메디나 이주(헤지라), 움마(공동체) 건설, 632년 사망까지를 다룬다. 이 시기에 이슬람의 핵심 경전(꾸란)의 계시가 완성되고 초기 공동체의 틀이 세워졌다.",
      en: "Begins with Muhammad, a Meccan merchant, receiving his first revelation in the cave of Hira around 610, through the persecution of the early Meccan period, the 622 migration to Medina (the Hijra), the founding of the umma (community), and his death in 632. The revelations that became the Quran were completed during this period, and the early community's institutions took shape.",
    },
    keyEvents: [
      { year: 610, label: { ko: "히라 동굴에서 첫 계시", en: "First revelation in the cave of Hira" } },
      { year: 622, label: { ko: "헤지라(메디나 이주), 이슬람력 원년", en: "The Hijra (migration to Medina), year one of the Islamic calendar" } },
      { year: 632, label: { ko: "무함마드 사망, 고별 순례 직후", en: "Muhammad dies, shortly after his Farewell Pilgrimage" } },
    ],
    color: "#8a6a3a",
  },
  {
    id: "rashidun-caliphate",
    name: { ko: "정통 칼리파 시대와 꾸란 편찬", en: "The Rashidun Caliphate and the Compilation of the Quran" },
    startYear: 632,
    endYear: 661,
    peakStart: 632,
    peakEnd: 650,
    summary: {
      ko: "무함마드 사후 네 명의 \"정통 칼리파\"(아부 바크르·우마르·우스만·알리)가 차례로 공동체를 이끈 시기. 아라비아반도를 넘어 페르시아·비잔틴 영토로 급속히 팽창했고, 우스만 칼리파 때 여러 지역에 흩어져 있던 꾸란 암송·기록을 하나의 표준 사본으로 편찬했다. 알리의 칼리파 계승을 둘러싼 갈등이 이후 분열의 씨앗이 된다.",
      en: "After Muhammad's death, four successive \"Rightly Guided Caliphs\" (Abu Bakr, Umar, Uthman, and Ali) led the community. The faith expanded rapidly beyond Arabia into Persian and Byzantine territory, and under Uthman the scattered recitations and written fragments of the Quran were compiled into a single standard codex. The dispute over Ali's succession planted the seeds of the later split.",
    },
    keyEvents: [
      { year: 634, label: { ko: "우마르, 2대 칼리파 즉위 — 페르시아·비잔틴 정복 본격화", en: "Umar becomes the second caliph; conquests of Persia and Byzantine territory accelerate" } },
      { year: 650, label: { ko: "우스만, 꾸란 표준 사본(\"우스만 사본\") 편찬", en: "Uthman compiles the standardized \"Uthmanic codex\" of the Quran" } },
      { year: 656, label: { ko: "우스만 암살, 알리 4대 칼리파 즉위 — 내부 갈등 격화", en: "Uthman is assassinated; Ali becomes the fourth caliph amid rising internal conflict" } },
    ],
    color: "#a67a4a",
  },
  {
    id: "umayyad-era-sunni-shia-divergence",
    name: { ko: "우마이야 시대와 수니·시아의 분기", en: "The Umayyad Era and the Sunni–Shia Divergence" },
    startYear: 656,
    endYear: 680,
    peakStart: 656,
    peakEnd: 680,
    summary: {
      ko: "알리의 칼리파 계승을 인정하지 않는 세력과의 내전(\"제1차 피트나\")으로 시작해, 무아위야가 우마이야 왕조를 세우고 칼리파직을 세습제로 바꾸면서 알리의 후손(이맘)을 따르는 이들과 우마이야 정권을 인정하는 이들 사이의 골이 깊어졌다. 680년 알리의 아들 후세인이 카르발라에서 순교한 사건은 이 갈등을 돌이킬 수 없게 만든 상징적 분기점이 됐다 — 이후 두 전통은 각자의 길을 걷는다.",
      en: "Begins with the civil war (\"the First Fitna\") between Ali's supporters and those who refused to recognize his succession. When Mu'awiya founded the Umayyad dynasty and turned the caliphate into a hereditary office, the gulf widened between those who followed Ali's descendants (the Imams) and those who accepted Umayyad rule. The 680 martyrdom of Ali's son Husayn at Karbala became the symbolic point of no return — from here the two traditions follow separate paths.",
    },
    keyEvents: [
      { year: 656, label: { ko: "제1차 피트나 발발 — 알리와 반대 세력 간 내전", en: "The First Fitna breaks out — civil war between Ali and his opponents" } },
      { year: 661, label: { ko: "무아위야, 우마이야 왕조 수립 — 칼리파직 세습화", en: "Mu'awiya founds the Umayyad dynasty, making the caliphate hereditary" } },
      { year: 680, label: { ko: "카르발라 전투 — 후세인 순교, 수니·시아 분기의 상징적 전환점", en: "The Battle of Karbala — Husayn's martyrdom, the symbolic turning point of the Sunni–Shia split" } },
    ],
    color: "#9c5a4a",
  },
  {
    id: "sunni-madhab-formation",
    name: { ko: "수니 4대 법학파(마드하브) 형성", en: "Formation of the Four Sunni Schools of Law (Madhabs)" },
    startYear: 700,
    endYear: 900,
    peakStart: 767,
    peakEnd: 855,
    summary: {
      ko: "아부 하니파·말리크·샤피이·아흐마드 이븐 한발 네 법학자의 이름을 딴 학파가 각각 다른 지역에서 독자적인 이슬람 법(피끄흐) 해석 전통을 세운 시기. 네 학파 모두 꾸란·순나(무함마드의 언행)를 법원으로 삼지만 유추(끼야스)·합의(이즈마으)를 적용하는 방식에 차이가 있다. 네 학파 모두 서로를 정통으로 인정하며 공존한다.",
      en: "Four schools of law, each named for its founding jurist (Abu Hanifa, Malik, al-Shafi'i, and Ahmad ibn Hanbal), developed independent traditions of Islamic legal interpretation (fiqh) in different regions. All four treat the Quran and the Sunna (the Prophet's words and example) as sources of law, but differ in how they apply analogy (qiyas) and consensus (ijma). All four recognize one another as orthodox and continue to coexist.",
    },
    keyEvents: [
      { year: 767, label: { ko: "아부 하니파 사망 — 하나피 학파의 기초 확립", en: "Abu Hanifa dies, having laid the foundations of the Hanafi school" } },
      { year: 795, label: { ko: "말리크 이븐 아나스 사망 — 말리키 학파 확립", en: "Malik ibn Anas dies, having established the Maliki school" } },
      { year: 855, label: { ko: "아흐마드 이븐 한발 사망 — 한발리 학파 확립, 4대 학파 체계 완성", en: "Ahmad ibn Hanbal dies, completing the system of four schools" } },
    ],
    color: "#5a8a5a",
  },
  {
    id: "sunni-kalam-theology",
    name: { ko: "수니 칼람 신학과 아샤리·마투리디 학파", en: "Sunni Kalam Theology and the Ash'ari–Maturidi Schools" },
    startYear: 850,
    endYear: 1100,
    peakStart: 900,
    peakEnd: 1111,
    summary: {
      ko: "이성적 논증(칼람)으로 신의 속성·인간의 자유의지 같은 신학적 쟁점을 다루려 한 무타질라 학파에 대한 반작용으로, 알아샤리와 알마투리디가 각각 계시와 이성을 절충하는 정통 신학 체계를 세운 시기. 알가잘리는 철학적 논증과 신비주의를 통합해 수니 신학의 주류 틀을 완성했다.",
      en: "As a reaction against the Mu'tazila school, which used rational argument (kalam) to address theological questions like God's attributes and human free will, al-Ash'ari and al-Maturidi each built orthodox theological systems that balanced revelation and reason. Al-Ghazali later integrated philosophical argument with mysticism, completing the mainstream framework of Sunni theology.",
    },
    keyEvents: [
      { year: 935, label: { ko: "알아샤리 사망 — 아샤리파 신학 확립", en: "Al-Ash'ari dies, having established Ash'ari theology" } },
      { year: 944, label: { ko: "알마투리디 사망 — 마투리디파 신학 확립", en: "Al-Maturidi dies, having established Maturidi theology" } },
      { year: 1111, label: { ko: "알가잘리 사망 — 「종교학의 부흥」으로 신학·신비주의 통합", en: "Al-Ghazali dies, having integrated theology and mysticism in The Revival of the Religious Sciences" } },
    ],
    color: "#4a8a6a",
  },
  {
    id: "sufi-tradition",
    name: { ko: "수피즘(이슬람 신비주의) 전통의 발전", en: "The Development of Sufism (Islamic Mysticism)" },
    startYear: 900,
    endYear: 1400,
    peakStart: 1100,
    peakEnd: 1300,
    summary: {
      ko: "율법적 실천을 넘어 신과의 직접적·체험적 합일을 추구한 신비주의 전통. 처음엔 주변적 경향으로 시작했지만 루미 같은 시인들의 작품과 여러 수피 교단(타리카)의 조직화를 거치며 수니 세계 대중 신앙의 핵심 축으로 자리잡았다. 일부 신학자들과는 긴장 관계에 있었지만 알가잘리 이후 주류 신학에 통합됐다.",
      en: "A mystical tradition seeking direct, experiential union with God beyond legal observance. What began as a marginal current became central to popular piety across the Sunni world, through the poetry of figures like Rumi and the organization of Sufi orders (tariqas). It was at times in tension with more legalistic theologians, but became integrated into mainstream theology after al-Ghazali.",
    },
    keyEvents: [
      { year: 1166, label: { ko: "압둘 카디르 길라니 사망 — 최초의 주요 수피 교단(카디리 교단) 확산", en: "Abd al-Qadir al-Jilani dies, and the Qadiriyya, one of the first major Sufi orders, spreads" } },
      { year: 1273, label: { ko: "루미 사망 — 「마스나비」와 메블레비 교단(회전 수도승) 전통 확립", en: "Rumi dies, leaving the Masnavi and the Mevlevi order (the \"whirling dervishes\")" } },
      { year: 1300, label: { ko: "여러 수피 교단, 아나톨리아·인도·북아프리카로 확산", en: "Multiple Sufi orders spread across Anatolia, India, and North Africa" } },
    ],
    color: "#6a9a7a",
  },
  {
    id: "sunni-ottoman-institutionalization",
    name: { ko: "수니 이슬람의 제도화와 오스만 칼리파제", en: "The Institutionalization of Sunni Islam and the Ottoman Caliphate" },
    startYear: 1300,
    endYear: 1924,
    peakStart: 1517,
    peakEnd: 1800,
    summary: {
      ko: "오스만 제국이 순니 이슬람을 제국의 공식 틀로 삼으면서, 셰이훌이슬람(최고 종교 지도자) 직제·마드라사(종교 학교) 네트워크·와크프(종교 기부 재단) 제도를 통해 신학·법학 전통이 국가 체계 안으로 통합된 시기. 오스만 제국 자체의 정치사보다, 이 시기 동안 수니 종교 제도가 어떻게 체계화됐는지에 초점을 둔다.",
      en: "As the Ottoman Empire made Sunni Islam its official framework, theological and legal traditions became integrated into state structures through the office of Sheikh-ul-Islam (the empire's chief religious authority), a network of madrasas (religious schools), and the waqf (religious endowment) system. The focus here is on how Sunni religious institutions became systematized during this period, not on Ottoman political history itself.",
    },
    keyEvents: [
      { year: 1517, label: { ko: "오스만 술탄, 칼리파 칭호 주장 시작 (전통적 연대)", en: "The Ottoman sultan begins claiming the title of caliph (traditional dating)" } },
      { year: 1600, label: { ko: "셰이훌이슬람 직제, 제국 전역 종교 행정의 정점으로 확립", en: "The office of Sheikh-ul-Islam is established as the pinnacle of religious administration empire-wide" } },
      { year: 1924, label: { ko: "오스만 칼리파제 공식 폐지 (튀르키예 공화국)", en: "The Ottoman caliphate is formally abolished by the Republic of Turkey" } },
    ],
    color: "#7a8a5a",
  },
  {
    id: "modern-sunni-reform-revival",
    name: { ko: "현대 수니 개혁·부흥 운동", en: "Modern Sunni Reform and Revival Movements" },
    startYear: 1850,
    endYear: 2026,
    peakStart: 1850,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "서구 식민 지배와 근대화에 대한 응답으로 다양한 개혁·부흥 운동이 등장한 시기. 무함마드 압두의 이슬람 모더니즘, 살라피 운동의 \"원형으로의 회귀\" 주장, 무슬림형제단 같은 조직의 정치적 이슬람까지 — 수니 세계 안에서도 근대성에 대응하는 방향은 하나가 아니다. 지금도 진행 중인 흐름이다.",
      en: "Diverse reform and revival movements emerged in response to Western colonial rule and modernization — Muhammad Abduh's Islamic modernism, the Salafi movement's call to \"return to the original sources,\" and the political Islam of organizations like the Muslim Brotherhood. Even within the Sunni world, there is no single response to modernity. This remains an ongoing, unresolved development.",
    },
    keyEvents: [
      { year: 1905, label: { ko: "무함마드 압두 사망 — 이슬람 모더니즘 운동의 주요 사상적 기반 남김", en: "Muhammad Abduh dies, leaving a major intellectual foundation for Islamic modernism" } },
      { year: 1928, label: { ko: "무슬림형제단 결성 (이집트)", en: "The Muslim Brotherhood is founded in Egypt" } },
      { year: 1979, label: { ko: "이란 혁명 이후 범이슬람권에서 정치적 이슬람 담론 확산 (수니권에도 영향)", en: "Following the Iranian Revolution, political Islam discourse spreads across the broader Muslim world, including Sunni contexts" } },
    ],
    color: "#8aa05a",
  },
  {
    id: "shia-imamate-doctrine",
    name: { ko: "시아파 이맘 계승 교리의 형성", en: "The Formation of Shia Imamate Doctrine" },
    startYear: 680,
    endYear: 765,
    peakStart: 680,
    peakEnd: 765,
    summary: {
      ko: "카르발라 이후, 알리와 파티마(무함마드의 딸)의 후손만이 공동체를 올바르게 이끌 수 있는 영적 권위(\"이맘\")를 지닌다는 교리가 체계화된 시기. 자으파르 알사디크 때에 이르러 이맘의 무오류성과 신적 지식 전수라는 시아 신학의 핵심 틀이 자리잡았다.",
      en: "After Karbala, the doctrine that only the descendants of Ali and Fatima (Muhammad's daughter) possess the spiritual authority (\"Imamate\") to rightly lead the community was systematized. By the time of Ja'far al-Sadiq, the core Shia theological framework — the infallibility of the Imams and the transmission of divinely inspired knowledge — was in place.",
    },
    keyEvents: [
      { year: 680, label: { ko: "카르발라 전투 이후 이맘 계승 교리 형성 시작", en: "Imamate doctrine begins to take shape in the aftermath of Karbala" } },
      { year: 712, label: { ko: "무함마드 알바키르, 5대 이맘으로서 신학 체계화 착수", en: "Muhammad al-Baqir, the fifth Imam, begins systematizing Shia theology" } },
      { year: 765, label: { ko: "자으파르 알사디크 사망 — 시아 신학·법학의 틀 확립", en: "Ja'far al-Sadiq dies, having established the framework of Shia theology and law" } },
    ],
    color: "#6a4a7a",
  },
  {
    id: "shia-branching-twelver-ismaili-zaydi",
    name: { ko: "열두이맘파·이스마일파·자이드파의 분화", en: "The Branching into Twelver, Ismaili, and Zaydi Shia" },
    startYear: 740,
    endYear: 900,
    peakStart: 765,
    peakEnd: 900,
    summary: {
      ko: "765년 자으파르 알사디크 사후 후계자를 둘러싼 이견으로 시아파 내부가 여러 갈래로 나뉜 시기. 열두 이맘 계보를 따르는 열두이맘파(현재 시아파의 다수), 이스마일을 7대 이맘으로 보는 이스마일파, 좀 더 일찍 갈라진 자이드파가 각자 독자적인 신학·법학 전통을 발전시켰다. 세 전통 모두 같은 비중으로 서술한다.",
      en: "After Ja'far al-Sadiq's death in 765, disagreement over succession split Shia Islam into several branches. The Twelver tradition, which follows a line of twelve Imams (today the majority of Shia Muslims), the Ismaili tradition, which recognizes Isma'il as the seventh Imam, and the earlier-diverging Zaydi tradition each developed their own distinct theological and legal traditions. All three are given equal weight here.",
    },
    keyEvents: [
      { year: 740, label: { ko: "자이드 이븐 알리의 봉기 — 자이드파 전통의 기원", en: "The uprising of Zayd ibn Ali — the origin of the Zaydi tradition" } },
      { year: 765, label: { ko: "이스마일파, 이스마일을 7대 이맘으로 인정하며 분리", en: "The Ismaili branch separates, recognizing Isma'il as the seventh Imam" } },
      { year: 874, label: { ko: "12대 이맘 은폐(오컬테이션) — 열두이맘파 교리의 결정적 전환점", en: "The Occultation of the Twelfth Imam — the decisive turning point in Twelver doctrine" } },
    ],
    color: "#7a4a8a",
  },
  {
    id: "shia-theological-jurisprudential-development",
    name: { ko: "시아 신학·법학 전통의 발전 (자파리 법학·우술리-아크바리 논쟁)", en: "The Development of Shia Theology and Law (Ja'fari Fiqh, the Usuli–Akhbari Debate)" },
    startYear: 900,
    endYear: 1500,
    peakStart: 1000,
    peakEnd: 1400,
    summary: {
      ko: "열두이맘파 안에서 이맘의 가르침에 기초한 자파리 법학이 독자적인 법체계로 자리잡고, 법적 판단에서 이성적 추론(이즈티하드)을 어디까지 허용할지를 둘러싸고 우술리파와 아크바리파가 수세기에 걸쳐 논쟁한 시기. 이 논쟁은 이후 시아 성직자 제도의 권위 구조에 큰 영향을 남겼다.",
      en: "Within Twelver Shia Islam, Ja'fari jurisprudence, grounded in the teachings of the Imams, established itself as an independent legal system, while the Usuli and Akhbari schools debated for centuries over how far rational reasoning (ijtihad) should be allowed in legal judgment. This debate left a lasting mark on the authority structure of the later Shia clergy.",
    },
    keyEvents: [
      { year: 1067, label: { ko: "셰이크 알투시 사망 — 시아 법학·신학 체계화의 주요 인물", en: "Shaykh al-Tusi dies, a central figure in systematizing Shia law and theology" } },
      { year: 1280, label: { ko: "알라마 알힐리 사망 — 우술리 법학 방법론 정교화", en: "Allama al-Hilli dies, having refined Usuli legal methodology" } },
      { year: 1400, label: { ko: "우술리-아크바리 논쟁 격화, 이후 수세기간 지속", en: "The Usuli–Akhbari debate intensifies, continuing for centuries afterward" } },
    ],
    color: "#5a4a7a",
  },
  {
    id: "safavid-twelver-state-religion",
    name: { ko: "사파비 왕조와 열두이맘파 시아의 국교화", en: "The Safavid Dynasty and the Establishment of Twelver Shia as State Religion" },
    startYear: 1501,
    endYear: 1736,
    peakStart: 1501,
    peakEnd: 1600,
    summary: {
      ko: "사파비 왕조가 페르시아(현 이란)에서 열두이맘파 시아 이슬람을 국교로 선포하면서, 그 지역의 종교적 정체성이 극적으로 전환된 시기. 이란 전역에 시아 성직자 교육기관이 조직적으로 확산되고 성직 위계 체계의 기초가 놓였다 — 왕조 자체의 정치·군사사보다 이 종교적 전환과 제도화에 초점을 둔다.",
      en: "When the Safavid dynasty declared Twelver Shia Islam the state religion of Persia (modern-day Iran), the region's religious identity shifted dramatically. Shia clerical educational institutions spread systematically across Iran, laying the foundation for the later clerical hierarchy. The focus here is on this religious transformation and institutionalization, not the dynasty's political or military history.",
    },
    keyEvents: [
      { year: 1501, label: { ko: "사파비 왕조, 열두이맘파 시아를 국교로 선포", en: "The Safavid dynasty declares Twelver Shia Islam the state religion" } },
      { year: 1600, label: { ko: "이란 전역에 시아 성직자 교육기관(마드라사) 조직적 확산", en: "Shia clerical schools (madrasas) spread systematically across Iran" } },
      { year: 1722, label: { ko: "사파비 왕조 쇠퇴, 그러나 시아 국교 정체성은 이후에도 지속", en: "The Safavid dynasty declines, but Shia religious identity persists afterward" } },
    ],
    color: "#4a5a7a",
  },
  {
    id: "modern-shia-clerical-hierarchy",
    name: { ko: "현대 시아파 성직 위계와 마르자 타클리드 제도", en: "The Modern Shia Clerical Hierarchy and the Marja Taqlid System" },
    startYear: 1900,
    endYear: 2026,
    peakStart: 1900,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "최고위 법학자(\"마르자 타클리드\")를 따르는 체계가 정교화되고, 1979년 이란 혁명으로 호메이니가 \"법학자의 통치\"(벨라야테 파키흐) 개념을 국가 체제로 구현하며 정치와 종교 권위가 결합된 새로운 모델이 등장한 시기. 모든 시아 성직자나 신자가 이 정치적 모델에 동의하는 것은 아니며, 전통적인 조언자적 역할을 지지하는 흐름도 여전히 공존한다.",
      en: "The system of following a supreme jurist (the \"marja taqlid\") became more refined, and the 1979 Iranian Revolution saw Khomeini implement the concept of \"guardianship of the jurist\" (velayat-e faqih) as a model of state, merging political and religious authority in a new way. Not all Shia clergy or believers endorse this political model, and currents favoring the more traditional advisory role of clerics continue to coexist.",
    },
    keyEvents: [
      { year: 1979, label: { ko: "이란 혁명, 호메이니의 벨라야테 파키흐 체제 수립", en: "The Iranian Revolution establishes Khomeini's velayat-e faqih system" } },
      { year: 1989, label: { ko: "호메이니 사망, 하메네이 최고지도자 취임", en: "Khomeini dies; Khamenei becomes Supreme Leader" } },
      { year: 2003, label: { ko: "이라크 전쟁 이후 나자프(이라크) 시아 성직자 전통의 국제적 위상 재부각", en: "After the Iraq War, the Shia clerical tradition of Najaf, Iraq, regains international prominence" } },
    ],
    color: "#3a4a7a",
  },
];

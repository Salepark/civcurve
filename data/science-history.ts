// ScienceCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀 — 지역 개념이 없는 데이터셋)
// Phase 1 범위: 서양 과학사 중심 15개 장. 기술/산업사(TechCurve)는 별도 데이터셋으로 분리.
// 이론·발견 중심으로 구성 — 로마 공학, 산업혁명 등 기술/산업 요소는 의도적으로 제외.
// AI·인지과학의 기점을 2022년으로 잡은 건 civilizations.ts/artHistory와 같은 논리 —
// 세 데이터셋 모두 2022년이 "지금 우리가 선 지점"이라는 일관된 서사를 공유한다.

import type { Civilization } from "./civilizations";

export const scienceHistory: Civilization[] = [
  {
    id: "ancient-astronomy-math",
    name: { ko: "고대 천문·수학", en: "Ancient Astronomy & Mathematics" },
    startYear: -3000,
    endYear: -600,
    peakStart: -1800,
    peakEnd: -600,
    summary: {
      ko: "바빌로니아 점성가들이 행성 주기를 기록하고, 이집트인들이 나일강 범람을 예측하려 기하학을 발전시킨 시기. 체계적 관측과 계산이라는 과학적 방법의 싹이 여기서 텄다.",
      en: "Babylonian astronomers tracked planetary cycles while Egyptians developed geometry to predict the Nile's floods. The seeds of systematic observation and calculation — the roots of the scientific method — took hold here.",
    },
    keyEvents: [
      { year: -1800, label: { ko: "바빌로니아 점토판에 행성 운행 기록 시작", en: "Babylonian clay tablets begin recording planetary motion" } },
      { year: -2000, label: { ko: "이집트 기하학, 토지 측량에 활용", en: "Egyptian geometry applied to land surveying" } },
      { year: -700, label: { ko: "바빌로니아, 일식 주기(사로스 주기) 발견", en: "Babylonians discover the Saros eclipse cycle" } },
    ],
    color: "#8a8a6c",
  },
  {
    id: "greek-natural-philosophy",
    name: { ko: "그리스 자연철학", en: "Greek Natural Philosophy" },
    startYear: -600,
    endYear: -300,
    peakStart: -450,
    peakEnd: -350,
    summary: {
      ko: "탈레스가 신화 대신 자연법칙으로 세계를 설명하려 한 이래, 아리스토텔레스가 논리학과 생물 분류 체계를 세운 시기. '왜'를 묻는 태도 자체가 과학의 출발점이 됐다.",
      en: "From Thales's attempt to explain the world through natural law instead of myth, to Aristotle's systems of logic and biological classification. The habit of asking \"why\" became science's starting point.",
    },
    keyEvents: [
      { year: -585, label: { ko: "탈레스, 일식 예측 (신화적 설명 탈피)", en: "Thales predicts a solar eclipse, breaking from mythic explanation" } },
      { year: -450, label: { ko: "데모크리토스, 원자론 제시", en: "Democritus proposes atomism" } },
      { year: -350, label: { ko: "아리스토텔레스, 「자연학」·「동물지」 저술", en: "Aristotle writes Physics and History of Animals" } },
    ],
    color: "#6b8a7a",
  },
  {
    id: "hellenistic-science",
    name: { ko: "헬레니즘 과학", en: "Hellenistic Science" },
    startYear: -300,
    endYear: -30,
    peakStart: -280,
    peakEnd: -150,
    summary: {
      ko: "알렉산드리아 도서관을 중심으로 수학·천문학·의학이 체계화된 시기. 유클리드의 기하학, 에라토스테네스의 지구 둘레 측정처럼 정밀한 계산이 과학의 도구로 자리잡았다.",
      en: "Mathematics, astronomy, and medicine were systematized around the Library of Alexandria. Precise calculation became a scientific tool, from Euclid's geometry to Eratosthenes's measurement of the Earth's circumference.",
    },
    keyEvents: [
      { year: -300, label: { ko: "유클리드, 「원론」 집필", en: "Euclid writes the Elements" } },
      { year: -240, label: { ko: "에라토스테네스, 지구 둘레 측정", en: "Eratosthenes measures the Earth's circumference" } },
      { year: -250, label: { ko: "아르키메데스, 부력의 원리 발견", en: "Archimedes discovers the principle of buoyancy" } },
    ],
    color: "#9c8a4a",
  },
  {
    id: "medieval-scholasticism",
    name: { ko: "중세 스콜라 과학", en: "Medieval Scholastic Science" },
    startYear: 400,
    endYear: 1400,
    peakStart: 1100,
    peakEnd: 1300,
    summary: {
      ko: "유럽 대학이 설립되며 아리스토텔레스 자연학이 신학과 결합해 체계적으로 연구된 시기. 느리지만 관찰과 논증을 중시하는 지적 전통이 이어졌다.",
      en: "As European universities were founded, Aristotelian natural philosophy merged with theology for systematic study. Progress was slow, but an intellectual tradition valuing observation and argument persisted.",
    },
    keyEvents: [
      { year: 1088, label: { ko: "볼로냐 대학 설립 (유럽 최초)", en: "University of Bologna founded, Europe's first" } },
      { year: 1267, label: { ko: "로저 베이컨, 실험 방법 강조", en: "Roger Bacon emphasizes experimental method" } },
      { year: 1377, label: { ko: "니콜 오렘, 지구 자전 가능성 논의", en: "Nicole Oresme discusses the possibility of Earth's rotation" } },
    ],
    color: "#6a6a9a",
  },
  {
    id: "islamic-golden-age-science",
    name: { ko: "이슬람 황금기 과학", en: "Islamic Golden Age Science" },
    startYear: 800,
    endYear: 1400,
    peakStart: 900,
    peakEnd: 1200,
    summary: {
      ko: "바그다드 '지혜의 집'을 중심으로 그리스·인도·페르시아 지식이 번역·종합되며 대수학·광학·의학이 크게 발전한 시기. 유럽 과학혁명의 토대가 된 지식이 이 시기에 축적됐다.",
      en: "Centered on Baghdad's House of Wisdom, Greek, Indian, and Persian knowledge was translated and synthesized, driving major advances in algebra, optics, and medicine. Much of the groundwork for Europe's later Scientific Revolution was laid here.",
    },
    keyEvents: [
      { year: 830, label: { ko: "바그다드 '지혜의 집' 설립", en: "The House of Wisdom founded in Baghdad" } },
      { year: 820, label: { ko: "알콰리즈미, 대수학 체계화 (「al-jabr」)", en: "al-Khwarizmi systematizes algebra in al-Jabr" } },
      { year: 1021, label: { ko: "이븐 알하이삼, 「광학의 서」 저술", en: "Ibn al-Haytham writes the Book of Optics" } },
    ],
    color: "#3a7a6a",
  },
  {
    id: "renaissance-science",
    name: { ko: "르네상스 과학", en: "Renaissance Science" },
    startYear: 1400,
    endYear: 1550,
    peakStart: 1450,
    peakEnd: 1540,
    summary: {
      ko: "인쇄술 보급으로 지식이 빠르게 퍼지고, 해부학과 천문학에서 직접 관찰이 고대 권위를 넘어서기 시작한 시기. 코페르니쿠스의 지동설 발표로 막을 내린다.",
      en: "The spread of printing accelerated the circulation of knowledge, and direct observation in anatomy and astronomy began to outweigh ancient authority. The period closes with Copernicus's publication of the heliocentric model.",
    },
    keyEvents: [
      { year: 1450, label: { ko: "구텐베르크 인쇄술, 지식 확산 가속", en: "Gutenberg's printing press accelerates the spread of knowledge" } },
      { year: 1543, label: { ko: "베살리우스, 「인체의 구조에 관하여」 출간", en: "Vesalius publishes On the Fabric of the Human Body" } },
      { year: 1543, label: { ko: "코페르니쿠스, 「천구의 회전에 관하여」 출간", en: "Copernicus publishes On the Revolutions of the Heavenly Spheres" } },
    ],
    color: "#a68a3e",
  },
  {
    id: "scientific-revolution",
    name: { ko: "과학혁명", en: "Scientific Revolution" },
    startYear: 1550,
    endYear: 1700,
    peakStart: 1600,
    peakEnd: 1687,
    summary: {
      ko: "갈릴레이가 망원경으로 목성의 위성을 관측하고, 뉴턴이 운동과 중력을 수학 법칙으로 통합한 시기. 관찰·실험·수학으로 자연을 설명하는 근대 과학의 틀이 여기서 완성됐다.",
      en: "Galileo observed Jupiter's moons through a telescope, and Newton unified motion and gravity into mathematical law. The modern scientific framework — explaining nature through observation, experiment, and mathematics — was completed here.",
    },
    keyEvents: [
      { year: 1609, label: { ko: "갈릴레이, 망원경으로 목성의 위성 관측", en: "Galileo observes Jupiter's moons with a telescope" } },
      { year: 1628, label: { ko: "하비, 혈액 순환 이론 발표", en: "Harvey publishes his theory of blood circulation" } },
      { year: 1687, label: { ko: "뉴턴, 「프린키피아」 출간", en: "Newton publishes the Principia" } },
    ],
    color: "#4a6a9c",
  },
  {
    id: "enlightenment-science",
    name: { ko: "계몽주의 과학", en: "Enlightenment Science" },
    startYear: 1700,
    endYear: 1800,
    peakStart: 1735,
    peakEnd: 1789,
    summary: {
      ko: "린네의 생물 분류 체계, 라부아지에의 화학 혁명처럼 자연을 체계적으로 분류하고 정량화하려 한 시기. 과학이 왕실 후원을 넘어 학회와 대중 강연으로 퍼져나갔다.",
      en: "Linnaeus's taxonomy and Lavoisier's chemical revolution both sought to classify and quantify nature systematically. Science spread beyond royal patronage into learned societies and public lectures.",
    },
    keyEvents: [
      { year: 1735, label: { ko: "린네, 「자연의 체계」 출간", en: "Linnaeus publishes Systema Naturae" } },
      { year: 1752, label: { ko: "프랭클린, 번개의 전기적 본질 입증", en: "Franklin demonstrates the electrical nature of lightning" } },
      { year: 1789, label: { ko: "라부아지에, 질량 보존 법칙과 근대 화학 체계화", en: "Lavoisier formulates the law of conservation of mass and systematizes modern chemistry" } },
    ],
    color: "#7a8aa0",
  },
  {
    id: "19th-century-biology-geology",
    name: { ko: "19세기 생물학·지질학", en: "19th-Century Biology & Geology" },
    startYear: 1800,
    endYear: 1900,
    peakStart: 1830,
    peakEnd: 1880,
    summary: {
      ko: "지질학이 지구의 나이를 수백만 년 단위로 밀어올리고, 다윈이 자연선택에 의한 진화를 제시한 시기. 생명과 지구의 역사를 보는 관점이 근본적으로 바뀌었다.",
      en: "Geology pushed the age of the Earth back to millions of years, and Darwin proposed evolution by natural selection. The way life and Earth's history were understood changed fundamentally.",
    },
    keyEvents: [
      { year: 1830, label: { ko: "라이엘, 「지질학 원리」 출간 (동일과정설)", en: "Lyell publishes Principles of Geology, establishing uniformitarianism" } },
      { year: 1859, label: { ko: "다윈, 「종의 기원」 출간", en: "Darwin publishes On the Origin of Species" } },
      { year: 1865, label: { ko: "멘델, 유전 법칙 발표", en: "Mendel publishes his laws of heredity" } },
    ],
    color: "#5a7a4a",
  },
  {
    id: "19th-century-physics-chemistry",
    name: { ko: "19세기 물리학·화학", en: "19th-Century Physics & Chemistry" },
    startYear: 1800,
    endYear: 1900,
    peakStart: 1830,
    peakEnd: 1890,
    summary: {
      ko: "에너지 보존 법칙과 열역학이 정립되고, 멘델레예프가 원소를 주기율표로 정리한 시기. 전기와 자기가 하나의 현상(전자기학)으로 통합되며 다음 세기 기술혁신의 이론적 토대를 놓았다.",
      en: "The laws of energy conservation and thermodynamics were established, and Mendeleev organized the elements into the periodic table. Electricity and magnetism were unified as electromagnetism, laying the theoretical groundwork for the next century's technological leaps.",
    },
    keyEvents: [
      { year: 1850, label: { ko: "클라우지우스, 열역학 제2법칙 정식화", en: "Clausius formulates the second law of thermodynamics" } },
      { year: 1865, label: { ko: "맥스웰, 전자기 이론 통합", en: "Maxwell unifies electromagnetic theory" } },
      { year: 1869, label: { ko: "멘델레예프, 원소 주기율표 발표", en: "Mendeleev publishes the periodic table" } },
    ],
    color: "#a05a3a",
  },
  {
    id: "modern-physics",
    name: { ko: "현대물리학", en: "Modern Physics" },
    startYear: 1900,
    endYear: 1945,
    peakStart: 1905,
    peakEnd: 1930,
    summary: {
      ko: "상대성이론이 시공간 개념을 뒤집고, 양자역학이 원자 이하 세계의 확률적 본질을 드러낸 시기. 뉴턴 역학으로 설명되지 않던 영역이 처음으로 열렸다.",
      en: "Relativity overturned the concept of space and time, while quantum mechanics revealed the probabilistic nature of the subatomic world. Realms that Newtonian mechanics could not explain were opened for the first time.",
    },
    keyEvents: [
      { year: 1905, label: { ko: "아인슈타인, 특수상대성이론 발표", en: "Einstein publishes special relativity" } },
      { year: 1915, label: { ko: "아인슈타인, 일반상대성이론 발표", en: "Einstein publishes general relativity" } },
      { year: 1927, label: { ko: "하이젠베르크, 불확정성 원리 발표", en: "Heisenberg publishes the uncertainty principle" } },
    ],
    color: "#6a4a8a",
  },
  {
    id: "info-computer-science-foundations",
    name: { ko: "정보·컴퓨터과학 기초", en: "Foundations of Information & Computer Science" },
    startYear: 1930,
    endYear: 1970,
    peakStart: 1936,
    peakEnd: 1950,
    summary: {
      ko: "튜링이 '계산 가능하다'는 것의 수학적 의미를 정의하고, 섀넌이 정보를 비트 단위로 측정하는 이론을 세운 시기. 이후 모든 디지털 기술의 이론적 토대가 이 시기에 놓였다.",
      en: "Turing defined the mathematical meaning of \"computable,\" and Shannon built a theory for measuring information in bits. The theoretical foundation for every digital technology that followed was laid in this period.",
    },
    keyEvents: [
      { year: 1936, label: { ko: "튜링, 계산 가능성 이론 (튜링 기계) 발표", en: "Turing publishes his theory of computability (the Turing machine)" } },
      { year: 1948, label: { ko: "섀넌, 「통신의 수학적 이론」 발표", en: "Shannon publishes A Mathematical Theory of Communication" } },
      { year: 1950, label: { ko: "튜링, '튜링 테스트' 제안", en: "Turing proposes the \"Turing Test\"" } },
    ],
    color: "#4a6a5a",
  },
  {
    id: "molecular-biology-genetics",
    name: { ko: "분자생물학·유전학", en: "Molecular Biology & Genetics" },
    startYear: 1950,
    endYear: 2003,
    peakStart: 1953,
    peakEnd: 2000,
    summary: {
      ko: "왓슨과 크릭이 DNA의 이중나선 구조를 밝혀낸 이후, 생명의 설계도를 분자 단위에서 읽어내려는 작업이 이어진 시기. 인간 게놈 프로젝트 완료로 한 단락을 맺었다.",
      en: "Following Watson and Crick's discovery of the double-helix structure of DNA, researchers worked to read life's blueprint at the molecular level. The completion of the Human Genome Project closed this chapter.",
    },
    keyEvents: [
      { year: 1953, label: { ko: "왓슨·크릭, DNA 이중나선 구조 규명", en: "Watson and Crick determine the double-helix structure of DNA" } },
      { year: 1983, label: { ko: "중합효소 연쇄반응(PCR) 기법 개발", en: "The PCR technique is developed" } },
      { year: 2003, label: { ko: "인간 게놈 프로젝트 완료", en: "The Human Genome Project is completed" } },
    ],
    color: "#3a8a6a",
  },
  {
    id: "modern-cosmology",
    name: { ko: "현대 우주론", en: "Modern Cosmology" },
    startYear: 1965,
    endYear: 2026,
    peakStart: 1965,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "우주배경복사 관측으로 빅뱅 이론이 실증적 뒷받침을 얻은 이후, 우주의 나이·구성·운명을 둘러싼 탐구가 계속되는 중. 암흑물질과 암흑에너지처럼 아직 풀리지 않은 질문이 남아있다.",
      en: "Since the detection of the cosmic microwave background gave the Big Bang theory empirical support, the search into the universe's age, composition, and fate has continued. Open questions remain, among them dark matter and dark energy.",
    },
    keyEvents: [
      { year: 1965, label: { ko: "펜지어스·윌슨, 우주배경복사 발견", en: "Penzias and Wilson discover the cosmic microwave background" } },
      { year: 1998, label: { ko: "우주 팽창 가속 발견 (암흑에너지)", en: "Discovery that the universe's expansion is accelerating (dark energy)" } },
      { year: 2015, label: { ko: "중력파 최초 직접 검출", en: "First direct detection of gravitational waves" } },
    ],
    color: "#2a4a7a",
  },
  {
    id: "ai-cognitive-science",
    name: { ko: "AI·인지과학", en: "AI & Cognitive Science" },
    startYear: 2022,
    endYear: 2026,
    peakStart: 2022,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "대규모 언어모델이 등장하며 '지능이란 무엇인가'라는 질문이 과학의 중심 주제로 다시 떠오른 시기. 과학사의 다른 모든 장과 달리, 이 장은 아직 결론이 나지 않았다.",
      en: "With the emergence of large language models, the question \"what is intelligence?\" has returned to the center of scientific inquiry. Unlike every other chapter in this history, this one has no conclusion yet.",
    },
    keyEvents: [
      { year: 2022, label: { ko: "ChatGPT 공개, 대규모 언어모델 대중화", en: "ChatGPT launches, bringing large language models to the public" } },
      { year: 2024, label: { ko: "단백질 구조 예측 AI(알파폴드), 노벨상 수상", en: "AlphaFold's protein-structure predictions win a Nobel Prize" } },
      { year: 2025, label: { ko: "AI를 활용한 과학적 가설 생성·검증 연구 확산", en: "Research into AI-assisted scientific hypothesis generation and testing spreads" } },
    ],
    color: "#b0563a",
  },
];

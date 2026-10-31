// TechCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀 — 지역 개념이 없는 데이터셋)
// Phase 1 범위: 서양 기술/산업사 중심 15개 장. ScienceCurve(이론·발견)와 분리된 데이터셋 —
// 로마 공학, 산업혁명 등 ScienceCurve에서 의도적으로 뺐던 실용 기술/공학 요소가 여기 들어간다.
// AI·자동화 인프라의 기점을 2022년으로 잡은 건 civilizations.ts/artHistory/scienceHistory와
// 같은 논리 — 네 데이터셋 모두 2022년이 "지금 우리가 선 지점"이라는 일관된 서사를 공유한다.
// 마지막 장(AI·자동화 인프라)은 ScienceCurve의 "AI·인지과학"과 같은 시기지만 관점이 다르다:
// 과학 쪽은 질문("지능이란 무엇인가") 자체, 여긴 그 질문에 답하기 위해 깔리는 칩·전력·클라우드
// 인프라를 다룬다.

import type { Civilization } from "./civilizations";

export const techHistory: Civilization[] = [
  {
    id: "ancient-technology",
    name: { ko: "고대 기술 (바퀴·청동기·관개)", en: "Ancient Technology (Wheel, Bronze, Irrigation)" },
    startYear: -3500,
    endYear: -1200,
    peakStart: -3000,
    peakEnd: -1500,
    summary: {
      ko: "바퀴의 발명과 청동 합금 기술, 관개 수로가 메소포타미아와 이집트에서 거의 동시에 등장한 시기. 자연을 그대로 쓰는 단계에서 도구로 가공해 쓰는 단계로 넘어갔다.",
      en: "The wheel, bronze alloying, and irrigation canals emerged almost simultaneously in Mesopotamia and Egypt. Humanity moved from using nature as it was to shaping it into tools.",
    },
    keyEvents: [
      { year: -3500, label: { ko: "메소포타미아, 바퀴 발명", en: "The wheel is invented in Mesopotamia" } },
      { year: -3000, label: { ko: "이집트, 관개 수로 체계 확립", en: "Egypt establishes a system of irrigation canals" } },
      { year: -1500, label: { ko: "청동 합금 기술, 지중해 전역 확산", en: "Bronze alloying spreads across the Mediterranean" } },
    ],
    color: "#8a7a5a",
  },
  {
    id: "iron-age-technology",
    name: { ko: "철기시대 기술", en: "Iron Age Technology" },
    startYear: -1200,
    endYear: -500,
    peakStart: -1000,
    peakEnd: -600,
    summary: {
      ko: "청동보다 흔하고 단단한 철을 다루는 제련 기술이 퍼지며 농기구와 무기의 성능이 크게 올라간 시기. 생산력 증가가 곧바로 정치·군사 구조의 변화로 이어졌다.",
      en: "Smelting techniques for iron — harder and more abundant than bronze — spread widely, sharply improving farm tools and weapons. The rise in productivity fed directly into political and military change.",
    },
    keyEvents: [
      { year: -1200, label: { ko: "히타이트, 철기 제련 기술 확산 시작", en: "Hittite ironworking techniques begin to spread" } },
      { year: -800, label: { ko: "그리스, 철제 농기구 보급", en: "Iron farm tools spread across Greece" } },
      { year: -600, label: { ko: "지중해 전역, 철제 무기가 청동 대체", en: "Iron weapons replace bronze across the Mediterranean" } },
    ],
    color: "#6a6a6a",
  },
  {
    id: "roman-engineering",
    name: { ko: "로마 토목·공학", en: "Roman Civil Engineering" },
    startYear: -300,
    endYear: 400,
    peakStart: -100,
    peakEnd: 200,
    summary: {
      ko: "콘크리트 발명으로 수도교와 돔 구조물을 가능케 하고, 제국 전역을 연결하는 도로망을 깐 시기. \"모든 길은 로마로 통한다\"는 말 그대로 인프라가 제국을 지탱했다.",
      en: "The invention of concrete made aqueducts and domed structures possible, and roads connected the empire from end to end. Infrastructure held the empire together — literally, all roads led to Rome.",
    },
    keyEvents: [
      { year: -312, label: { ko: "아피아 가도 건설 시작", en: "Construction of the Via Appia begins" } },
      { year: -19, label: { ko: "아그리파, 로마 수도교 체계 완성", en: "Agrippa completes Rome's aqueduct system" } },
      { year: 128, label: { ko: "판테온 돔, 로마 콘크리트 공학의 정점", en: "The Pantheon's dome, the height of Roman concrete engineering" } },
    ],
    color: "#9c5a4a",
  },
  {
    id: "medieval-technology",
    name: { ko: "중세 기술", en: "Medieval Technology" },
    startYear: 500,
    endYear: 1400,
    peakStart: 1000,
    peakEnd: 1300,
    summary: {
      ko: "수차와 풍차가 동력원으로 널리 퍼지고, 말 목에 맞는 마구(馬具) 개량으로 농업 생산력이 크게 늘어난 시기. 중국에서 전래된 나침반은 이후 대항해시대의 밑거름이 됐다.",
      en: "Water and windmills spread as power sources, and improved horse harnesses sharply boosted agricultural output. The compass, transmitted from China, laid the groundwork for the Age of Exploration that followed.",
    },
    keyEvents: [
      { year: 1000, label: { ko: "유럽 전역, 수차 보급 확산", en: "Watermills spread widely across Europe" } },
      { year: 1180, label: { ko: "유럽에 나침반 전래", en: "The compass reaches Europe" } },
      { year: 1300, label: { ko: "풍차, 네덜란드 간척지 배수에 활용", en: "Windmills put to use draining Dutch polders" } },
    ],
    color: "#7a8a6a",
  },
  {
    id: "age-of-exploration-technology",
    name: { ko: "대항해시대 기술", en: "Age of Exploration Technology" },
    startYear: 1400,
    endYear: 1600,
    peakStart: 1450,
    peakEnd: 1550,
    summary: {
      ko: "카라벨선 같은 원양 항해용 범선과 화약 무기가 결합하며 유럽이 대서양을 건너기 시작한 시기. 항해술의 발전이 곧바로 지도 위 세계의 크기를 바꿔놓았다.",
      en: "Ocean-going caravels combined with gunpowder weapons as Europe began crossing the Atlantic. Advances in navigation directly redrew the size of the world on the map.",
    },
    keyEvents: [
      { year: 1420, label: { ko: "포르투갈, 카라벨선 개발", en: "Portugal develops the caravel" } },
      { year: 1492, label: { ko: "콜럼버스, 대서양 횡단 항해", en: "Columbus crosses the Atlantic" } },
      { year: 1543, label: { ko: "화기, 유럽 전장의 주력 무기로 자리잡음", en: "Firearms become the dominant weapon on European battlefields" } },
    ],
    color: "#4a7a9c",
  },
  {
    id: "first-industrial-revolution",
    name: { ko: "1차 산업혁명", en: "First Industrial Revolution" },
    startYear: 1760,
    endYear: 1840,
    peakStart: 1780,
    peakEnd: 1830,
    summary: {
      ko: "증기기관이 수력의 한계를 벗어나 공장을 어디에나 세울 수 있게 했고, 방직기계가 수공업을 대체한 시기. 사람과 가축의 힘에 의존하던 생산 방식이 근본적으로 바뀌었다.",
      en: "The steam engine freed factories from dependence on waterpower, letting them be built anywhere, while mechanized looms replaced hand weaving. Production shifted fundamentally away from human and animal muscle.",
    },
    keyEvents: [
      { year: 1769, label: { ko: "와트, 개량 증기기관 특허", en: "Watt patents his improved steam engine" } },
      { year: 1785, label: { ko: "카트라이트, 역직기 발명", en: "Cartwright invents the power loom" } },
      { year: 1825, label: { ko: "스톡턴-달링턴 철도, 최초의 증기기관차 철도", en: "The Stockton and Darlington Railway, the first steam locomotive railway" } },
    ],
    color: "#6c6456",
  },
  {
    id: "second-industrial-revolution",
    name: { ko: "2차 산업혁명", en: "Second Industrial Revolution" },
    startYear: 1840,
    endYear: 1914,
    peakStart: 1870,
    peakEnd: 1910,
    summary: {
      ko: "전기 조명과 전동기가 공장과 도시를 밝히고, 내연기관이 자동차를 만들어낸 시기. 베서머 제강법으로 철강 대량생산이 가능해지며 고층 건물과 철도망이 함께 확장됐다.",
      en: "Electric lighting and motors lit up factories and cities, while the internal combustion engine gave rise to the automobile. The Bessemer process made mass steel production possible, expanding skyscrapers and railway networks together.",
    },
    keyEvents: [
      { year: 1856, label: { ko: "베서머 제강법 특허", en: "The Bessemer steelmaking process is patented" } },
      { year: 1879, label: { ko: "에디슨, 실용적 백열전구 개발", en: "Edison develops the practical incandescent light bulb" } },
      { year: 1886, label: { ko: "벤츠, 최초의 가솔린 자동차 특허", en: "Benz patents the first gasoline automobile" } },
    ],
    color: "#a05a3a",
  },
  {
    id: "mass-production-era",
    name: { ko: "대량생산 시대", en: "Mass Production Era" },
    startYear: 1908,
    endYear: 1945,
    peakStart: 1913,
    peakEnd: 1940,
    summary: {
      ko: "포드의 컨베이어벨트 조립라인이 자동차를 사치품에서 대중 상품으로 바꾼 시기. 표준화·분업화된 생산 방식이 이후 모든 제조업의 기본 모델이 됐다.",
      en: "Ford's conveyor-belt assembly line turned the automobile from a luxury good into a mass-market product. Standardized, divided-labor production became the basic model for all of manufacturing that followed.",
    },
    keyEvents: [
      { year: 1908, label: { ko: "포드, 모델 T 출시", en: "Ford launches the Model T" } },
      { year: 1913, label: { ko: "포드, 이동식 조립라인 도입", en: "Ford introduces the moving assembly line" } },
      { year: 1935, label: { ko: "전 세계 공장, 포드주의 생산방식 확산", en: "Fordist production methods spread to factories worldwide" } },
    ],
    color: "#8a5a3a",
  },
  {
    id: "aviation-technology",
    name: { ko: "항공기술", en: "Aviation Technology" },
    startYear: 1903,
    endYear: 1970,
    peakStart: 1930,
    peakEnd: 1960,
    summary: {
      ko: "라이트 형제의 첫 동력비행에서 제트엔진 여객기 상용화까지, 인류가 하늘을 나는 데 걸린 시간은 60여 년에 불과했다. 두 차례 세계대전이 역설적으로 항공기술 발전을 가속했다.",
      en: "From the Wright brothers' first powered flight to the commercial jet airliner, humanity took barely sixty years to conquer the sky. Two world wars, paradoxically, accelerated the pace of that progress.",
    },
    keyEvents: [
      { year: 1903, label: { ko: "라이트 형제, 최초의 동력비행 성공", en: "The Wright brothers achieve the first powered flight" } },
      { year: 1939, label: { ko: "최초의 제트엔진 비행기 시험비행", en: "The first jet-engine aircraft takes its test flight" } },
      { year: 1958, label: { ko: "보잉 707, 상업용 제트여객기 시대 개막", en: "The Boeing 707 opens the era of the commercial jet airliner" } },
    ],
    color: "#5a7a9c",
  },
  {
    id: "space-technology",
    name: { ko: "우주기술", en: "Space Technology" },
    startYear: 1957,
    endYear: 2026,
    peakStart: 1961,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "스푸트니크 발사로 시작된 우주 경쟁이 달 착륙을 거쳐, 지금은 민간 기업이 재사용 로켓을 쏘아올리는 시대로 이어지는 중. 국가 프로젝트에서 상업적 산업으로 무게중심이 옮겨갔다.",
      en: "The space race that began with Sputnik's launch passed through the Moon landing and has carried on into an era where private companies launch reusable rockets. The center of gravity has shifted from national project to commercial industry.",
    },
    keyEvents: [
      { year: 1957, label: { ko: "스푸트니크 1호 발사", en: "Sputnik 1 launches" } },
      { year: 1969, label: { ko: "아폴로 11호, 유인 달 착륙", en: "Apollo 11 achieves the first crewed Moon landing" } },
      { year: 2015, label: { ko: "스페이스X, 로켓 1단 재사용 착륙 성공", en: "SpaceX achieves the first successful reusable rocket landing" } },
    ],
    color: "#3a5a8a",
  },
  {
    id: "computer-hardware",
    name: { ko: "컴퓨터 하드웨어", en: "Computer Hardware" },
    startYear: 1940,
    endYear: 1980,
    peakStart: 1945,
    peakEnd: 1975,
    summary: {
      ko: "방 하나를 채우던 진공관 컴퓨터가 트랜지스터를 거쳐 손바닥만 한 마이크로프로세서 칩으로 압축된 시기. 하드웨어 소형화 속도가 이후 모든 디지털 기술의 발전 속도를 결정했다.",
      en: "Room-filling vacuum-tube computers compressed, by way of the transistor, into microprocessor chips small enough to hold in a hand. The pace of hardware miniaturization set the pace for every digital technology that followed.",
    },
    keyEvents: [
      { year: 1945, label: { ko: "에니악(ENIAC), 최초의 범용 전자식 컴퓨터 가동", en: "ENIAC, the first general-purpose electronic computer, begins operation" } },
      { year: 1958, label: { ko: "집적회로(IC) 발명", en: "The integrated circuit is invented" } },
      { year: 1971, label: { ko: "인텔, 최초의 상용 마이크로프로세서 4004 출시", en: "Intel releases the 4004, the first commercial microprocessor" } },
    ],
    color: "#4a6a5a",
  },
  {
    id: "personal-computing-internet-infrastructure",
    name: { ko: "개인용 컴퓨터·인터넷 인프라", en: "Personal Computing & Internet Infrastructure" },
    startYear: 1975,
    endYear: 2007,
    peakStart: 1981,
    peakEnd: 2000,
    summary: {
      ko: "컴퓨터가 기업·연구소 전유물에서 가정의 책상 위로 내려온 시기. TCP/IP와 월드와이드웹이 결합하며 개별 컴퓨터들이 하나의 네트워크로 연결되기 시작했다.",
      en: "The computer moved off the desks of corporations and research labs and onto desks at home. TCP/IP combined with the World Wide Web to begin weaving individual computers into a single network.",
    },
    keyEvents: [
      { year: 1981, label: { ko: "IBM PC 출시", en: "The IBM PC is released" } },
      { year: 1989, label: { ko: "팀 버너스리, 월드와이드웹 제안", en: "Tim Berners-Lee proposes the World Wide Web" } },
      { year: 1996, label: { ko: "광대역 인터넷, 가정에 보급 시작", en: "Broadband internet begins reaching homes" } },
    ],
    color: "#6a4a8a",
  },
  {
    id: "mobile-smartphone-technology",
    name: { ko: "모바일·스마트폰 기술", en: "Mobile & Smartphone Technology" },
    startYear: 2007,
    endYear: 2022,
    peakStart: 2010,
    peakEnd: 2020,
    summary: {
      ko: "아이폰 출시로 전화기가 손바닥 안의 컴퓨터로 재정의된 시기. 앱스토어 생태계와 함께 모바일이 인터넷 접속의 기본값이 됐다.",
      en: "The iPhone's launch redefined the phone as a computer that fits in a hand. Together with the app store ecosystem, mobile became the default way people connected to the internet.",
    },
    keyEvents: [
      { year: 2007, label: { ko: "애플, 아이폰 공개", en: "Apple unveils the iPhone" } },
      { year: 2008, label: { ko: "앱스토어 생태계 시작", en: "The app store ecosystem begins" } },
      { year: 2019, label: { ko: "전 세계 인터넷 트래픽, 모바일이 과반 차지", en: "Mobile devices account for the majority of global internet traffic" } },
    ],
    color: "#c9507a",
  },
  {
    id: "renewable-energy-ev-technology",
    name: { ko: "재생에너지·전기차 기술", en: "Renewable Energy & EV Technology" },
    startYear: 2000,
    endYear: 2026,
    peakStart: 2010,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "태양광·풍력 발전 단가가 화석연료 아래로 떨어지고, 전기차 배터리 기술이 실용 주행거리를 확보한 시기. 에너지 인프라 전환이 아직 끝나지 않은 진행형 과제로 이어지는 중이다.",
      en: "The cost of solar and wind power fell below fossil fuels, and EV battery technology reached practical driving range. The transition of energy infrastructure remains an unfinished, ongoing project.",
    },
    keyEvents: [
      { year: 2008, label: { ko: "테슬라, 로드스터 출시 (양산형 전기 스포츠카)", en: "Tesla launches the Roadster, the first mass-produced electric sports car" } },
      { year: 2010, label: { ko: "태양광 발전 단가, 꾸준한 하락세 시작", en: "Solar power costs begin a steady decline" } },
      { year: 2020, label: { ko: "전 세계 재생에너지 발전 비중 확대 논의 본격화", en: "Discussion intensifies over the growing global share of renewable power generation" } },
    ],
    color: "#3a8a5a",
  },
  {
    id: "ai-automation-infrastructure",
    name: { ko: "AI·자동화 인프라", en: "AI & Automation Infrastructure" },
    startYear: 2022,
    endYear: 2026,
    peakStart: 2022,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "대규모 언어모델을 돌리기 위한 GPU·데이터센터 투자가 전례 없는 규모로 늘어난 시기. ScienceCurve의 'AI·인지과학'이 질문 자체를 다룬다면, 여기서는 그 질문에 답하기 위해 깔리는 칩·전력·클라우드 인프라를 다룬다.",
      en: "Investment in GPUs and data centers to run large language models grew at an unprecedented scale. Where ScienceCurve's \"AI & Cognitive Science\" covers the question itself, this chapter covers the chips, power, and cloud infrastructure being built to answer it.",
    },
    keyEvents: [
      { year: 2022, label: { ko: "ChatGPT 공개, AI 인프라 투자 경쟁 촉발", en: "ChatGPT launches, triggering a race in AI infrastructure investment" } },
      { year: 2023, label: { ko: "엔비디아, AI 칩 수요 폭증으로 시가총액 급등", en: "Nvidia's market value surges on soaring demand for AI chips" } },
      { year: 2024, label: { ko: "빅테크, AI 데이터센터에 대규모 전력 투자 발표", en: "Major tech companies announce large-scale power investments for AI data centers" } },
    ],
    color: "#b0563a",
  },
];

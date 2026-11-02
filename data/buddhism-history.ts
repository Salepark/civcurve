// BuddhismCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀)
// Phase 1 범위: 불교 종교·철학사 딥다이브, 13개 장. WorldReligionsCurve의
// 불교 항목(단일 레인, 개관)을 FaithCurve/IslamCurve가 각 종교를 다루는
// 깊이로 확장한 것 — CivCurve(개관)/FaithCurve·IslamCurve·HinduismCurve
// (딥다이브), WorldReligionsCurve(종교 개관)/BuddhismCurve(불교 딥다이브)
// 구조를 그대로 재사용.
//
// 설계 원칙 (Louis 확정, AskUserQuestion):
// 1) 3개 레인 분리 구조. 불교는 이슬람(카르발라 단일 분기)과 힌두교(단일
//    분기점 없음)의 중간형 — 상좌부(팔리어 전승, 동남아시아로 확산)와
//    대승(기원전·1세기경 등장, 동아시아로 확산)은 비교적 명확히 갈라졌고,
//    금강승(7세기경 대승에서 파생, 티베트로 확산)은 더 나중에 갈라져
//    나왔다. 세 전통 모두 지금도 지리적·교리적으로 구분되어 살아있어
//    IslamCurve의 수니/시아 분리 패턴을 셋으로 확장해 재사용했다. 단,
//    대승과 금강승은 분기 시점이 다르고(금강승은 대승에서 파생) 지리적
//    확산 경로도 다르다는 점을 각 장 summary에 명시.
// 2) 종교·철학 사상 중심. 아소카(마우리아)·쿠샨·당(현장·불교 후원)·
//    토번(티베트) 제국의 정치·군사사는 그 시기 종교 제도가 어떻게
//    형성됐는지의 "배경"으로만 다루고 장의 중심 주제로 삼지 않는다
//    (IslamCurve·HinduismCurve와 동일 원칙, Louis 명시적 결정).
// 3) 부처의 생몰연대는 전통적 연대(스리랑카·동남아 상좌부 전통, 기원전
//    563~483년)와 학계의 "교정된" 추정 연대(약 1세기 늦음) 사이 이견이
//    있는 영역 — 단정적 서술을 피하고 "전통적 연대" 같은 표현으로
//    불확실성을 명시한다(WorldReligionsCurve·HinduismCurve에서 확립된
//    원칙 재적용). 대승 측이 기존 전통을 지칭할 때 쓴 "히나야나"(작은
//    수레)라는 표현은 논쟁적·폄하적이라 이 데이터셋에서는 "상좌부"·
//    "부파불교" 같은 중립적 명칭만 쓴다.
// 4) 세 레인 각각의 마지막 장(근대 상좌부 개혁, 현대 대승·참여불교, 현대
//    티베트 불교·금강승의 세계적 확산)만 ongoing: true로 지정하고
//    peakStart/peakEnd를 startYear/endYear와 동일하게 둔다.

import type { Civilization } from "./civilizations";

export const buddhismHistory: Civilization[] = [
  {
    id: "buddha-life-and-early-sangha",
    name: { ko: "부처의 생애와 초기 상가(승가)", en: "The Buddha's Life and the Early Sangha" },
    startYear: -563,
    endYear: -483,
    peakStart: -528,
    peakEnd: -483,
    summary: {
      ko: "싯다르타 고타마가 출가해 보리수 아래에서 깨달음을 얻고(전통적 연대 기준 기원전 528년경), 사성제·팔정도를 가르치며 출가 공동체(상가)를 세운 시기. 정확한 생몰연대는 학계에서도 이견이 있어(전통적 연대와 \"교정된\" 학계 추정 연대 사이 약 1세기 차이) 여기서는 남아시아·동남아시아 상좌부 전통에서 널리 쓰이는 전통적 연대(기원전 563~483년)를 따른다.",
      en: "Siddhartha Gautama renounced his household, attained enlightenment under the Bodhi tree (traditionally dated to around 528 BCE), and taught the Four Noble Truths and the Eightfold Path while founding a monastic community (the sangha). Exact dates remain debated among scholars (traditional dating differs from \"corrected\" scholarly estimates by roughly a century); this entry follows the traditional dating widely used in South and Southeast Asian Theravada tradition (563–483 BCE).",
    },
    keyEvents: [
      { year: -528, label: { ko: "보리수 아래에서 깨달음을 얻음 (전통적 연대)", en: "Attains enlightenment under the Bodhi tree (traditional dating)" } },
      { year: -483, label: { ko: "파리니르바나(열반) — 상가에 비나야(계율) 전승을 남김", en: "Attains parinirvana (final passing), leaving the Vinaya (monastic code) to the sangha" } },
      { year: -480, label: { ko: "제1차 결집, 라자그리하에서 경(수트라)·율(비나야) 암송·확정", en: "The First Council convenes at Rajagriha to recite and fix the Sutras and Vinaya" } },
    ],
    color: "#8a6a3a",
  },
  {
    id: "early-councils-and-eighteen-schools",
    name: { ko: "초기 결집과 18부파의 분화", en: "The Early Councils and the Branching into Eighteen Schools" },
    startYear: -483,
    endYear: -250,
    peakStart: -383,
    peakEnd: -250,
    summary: {
      ko: "제2차 결집(전통적으로 부처 열반 후 100년경, 기원전 383년경)에서 계율 해석을 둘러싼 이견으로 상좌부(스타비라바다)와 대중부(마하상기카) 두 흐름으로 처음 갈라졌고, 이후 수세기에 걸쳐 교리·지역 차이로 약 18개 부파로 더 세분화된 시기. 아소카 왕의 불교 후원과 선교사 파견(스리랑카의 마힌다 등)으로 교단이 인도 아대륙 밖으로 퍼지기 시작했다 — 마우리아 제국 자체의 정치사보다 이 시기 불교 교단의 분화·확산에 초점을 둔다.",
      en: "At the Second Council (traditionally dated about a century after the Buddha's death, c. 383 BCE), disagreement over the interpretation of monastic discipline produced the first split between the Sthaviravada and Mahasanghika streams, which further fragmented over the following centuries into roughly eighteen schools distinguished by doctrine and region. Emperor Ashoka's patronage and dispatch of missionaries (including Mahinda to Sri Lanka) began spreading the sangha beyond the Indian subcontinent — the focus here is on this doctrinal branching and spread, not the political history of the Mauryan Empire itself.",
    },
    keyEvents: [
      { year: -383, label: { ko: "제2차 결집 — 상좌부·대중부 최초 분열", en: "The Second Council — the first split into Sthaviravada and Mahasanghika" } },
      { year: -250, label: { ko: "아소카 왕 치세, 제3차 결집과 선교사 파견 (제국 정치사는 배경)", en: "Under Ashoka, the Third Council convenes and missionaries are dispatched (the empire's political history is background only)" } },
      { year: -247, label: { ko: "마힌다, 스리랑카에 불교 전파", en: "Mahinda introduces Buddhism to Sri Lanka" } },
    ],
    color: "#7a7a4a",
  },
  {
    id: "theravada-formation-sri-lanka",
    name: { ko: "스리랑카에서 상좌부의 형성과 팔리 삼장 기록", en: "The Formation of Theravada in Sri Lanka and the Writing of the Pali Canon" },
    startYear: -250,
    endYear: 100,
    peakStart: -29,
    peakEnd: 100,
    summary: {
      ko: "마힌다의 선교로 스리랑카에 뿌리내린 상좌부(테라바다, \"장로들의 가르침\") 전통이 독자적 정체성을 확립한 시기. 그동안 구전으로 전승되던 삼장(경·율·논)이 기원전 1세기경 제4차 결집(스리랑카)에서 처음 문자(팔리어)로 기록됐다. 이 팔리 삼장은 이후 동남아시아 상좌부 전통 전체의 공통 경전 기반이 된다.",
      en: "The Theravada (\"teaching of the elders\") tradition, rooted in Sri Lanka through Mahinda's mission, established its own distinct identity during this period. The Tipitaka (the \"three baskets\" of scripture), transmitted orally until then, was first committed to writing in Pali at the Fourth Council in Sri Lanka around the 1st century BCE. This Pali Canon became the shared scriptural foundation for the entire later Theravada tradition of Southeast Asia.",
    },
    keyEvents: [
      { year: -250, label: { ko: "마힌다의 선교 이후 스리랑카 상가, 독자적 전통으로 발전", en: "Following Mahinda's mission, the Sri Lankan sangha develops its own distinct tradition" } },
      { year: -29, label: { ko: "제4차 결집(스리랑카) — 팔리 삼장, 처음으로 문자화", en: "The Fourth Council in Sri Lanka first commits the Pali Canon to writing" } },
      { year: 100, label: { ko: "\"상좌부\"(테라바다) 명칭, 스리랑카 전통의 자기 정체성으로 자리잡음", en: "The name \"Theravada\" becomes established as the Sri Lankan tradition's self-identity" } },
    ],
    color: "#6a9a6a",
  },
  {
    id: "theravada-spread-southeast-asia",
    name: { ko: "동남아시아로의 상좌부 확산", en: "The Spread of Theravada across Southeast Asia" },
    startYear: 500,
    endYear: 1300,
    peakStart: 1000,
    peakEnd: 1300,
    summary: {
      ko: "상좌부 불교가 미얀마·태국·캄보디아·라오스로 확산되며 각 지역 왕권의 공인을 받아 국가 종교로 자리잡은 시기. 버강(미얀마)·수코타이(태국) 같은 왕조들이 상좌부를 후원하며 사원·탑(스투파) 건축이 번성했고, 비구 승단과 재가자 공동체의 관계를 규정하는 지역별 관행이 확립됐다 — 각 왕조의 정치사보다 상좌부 신앙·제도의 정착 과정에 초점을 둔다.",
      en: "Theravada Buddhism spread into Myanmar, Thailand, Cambodia, and Laos, gaining royal patronage and becoming established as a state religion in each region. Dynasties such as Bagan (Myanmar) and Sukhothai (Thailand) sponsored Theravada, and temple and stupa construction flourished, while regional conventions governing the relationship between the monastic sangha and lay communities became established — the focus here is on the settling of Theravada belief and institutions, not the political history of each dynasty.",
    },
    keyEvents: [
      { year: 1057, label: { ko: "버강 왕조, 상좌부를 국교로 공인 (미얀마)", en: "The Bagan dynasty establishes Theravada as the state religion (Myanmar)" } },
      { year: 1200, label: { ko: "수코타이 왕조 치하 상좌부 확산 (태국)", en: "Theravada spreads under the Sukhothai dynasty (Thailand)" } },
      { year: 1300, label: { ko: "캄보디아·라오스에서도 상좌부가 지배적 전통으로 자리잡음", en: "Theravada becomes the dominant tradition in Cambodia and Laos as well" } },
    ],
    color: "#5a8a6a",
  },
  {
    id: "modern-theravada-reform",
    name: { ko: "근대 상좌부 개혁과 위빳사나 부흥", en: "Modern Theravada Reform and the Vipassana Revival" },
    startYear: 1800,
    endYear: 2026,
    peakStart: 1800,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "서구 식민 지배와의 접촉 속에서 아나가리카 다르마팔라 같은 개혁가들이 상좌부를 \"합리적 과학과 양립하는 종교\"로 재해석하며 근대적 불교 부흥 운동을 이끈 시기. 레디 사야도·마하시 사야도 등이 재가자도 수행할 수 있는 위빳사나(통찰 명상) 전통을 대중화했고, 이는 20세기 후반 이후 서구의 \"마음챙김\"(마인드풀니스) 운동의 뿌리가 됐다.",
      en: "In contact with Western colonial rule, reformers such as Anagarika Dharmapala reinterpreted Theravada as \"compatible with rational science\" and led a modern Buddhist revival. Figures such as Ledi Sayadaw and Mahasi Sayadaw popularized vipassana (insight meditation) as a practice accessible to laypeople as well as monastics, and this became the root of the Western \"mindfulness\" movement from the late 20th century onward.",
    },
    keyEvents: [
      { year: 1891, label: { ko: "아나가리카 다르마팔라, 마하보디 소사이어티 설립", en: "Anagarika Dharmapala founds the Maha Bodhi Society" } },
      { year: 1950, label: { ko: "마하시 사야도의 위빳사나 수행법, 재가자 중심으로 확산", en: "Mahasi Sayadaw's vipassana method spreads widely among lay practitioners" } },
      { year: 1979, label: { ko: "서구에서 \"마음챙김에 기반한 스트레스 완화\"(MBSR) 프로그램 시작 — 위빳사나 전통의 세속화된 응용", en: "The \"Mindfulness-Based Stress Reduction\" (MBSR) program begins in the West, a secularized application of the vipassana tradition" } },
    ],
    color: "#6a9a5a",
  },
  {
    id: "mahayana-emergence-and-early-sutras",
    name: { ko: "대승 운동의 등장과 초기 경전", en: "The Emergence of the Mahayana Movement and Its Early Sutras" },
    startYear: -100,
    endYear: 200,
    peakStart: -50,
    peakEnd: 150,
    summary: {
      ko: "기존 부파 불교와 구분되는 새로운 흐름이 등장해, 모든 중생을 구제하겠다는 서원을 세운 보살(보디사트바)의 이상을 중심에 놓은 시기. 반야바라밀(지혜의 완성) 계열 경전, 법화경 등 대승 경전이 편찬되기 시작했다. 대승 측은 자신을 \"큰 수레\"(마하야나)로, 기존 전통을 폄하조로 \"작은 수레\"(히나야나)로 부르기도 했는데, 이 명칭은 논쟁적이라 현대 학계·종교간 대화에서는 \"상좌부·부파불교\"처럼 중립적 명칭을 쓰는 것이 일반적이다.",
      en: "A new current emerged, distinct from the earlier schools, centering on the ideal of the bodhisattva who vows to liberate all beings. Mahayana scriptures began to be composed, including the Prajnaparamita (\"Perfection of Wisdom\") sutras and the Lotus Sutra. Mahayana (\"the great vehicle\") adherents sometimes referred to the earlier tradition disparagingly as \"Hinayana\" (\"the lesser vehicle\") — a polemical term now generally avoided in favor of neutral names such as \"Theravada\" or \"early Buddhist schools.\"",
    },
    keyEvents: [
      { year: -100, label: { ko: "반야바라밀 계열 경전, 최초 편찬 시작", en: "The earliest Prajnaparamita sutras begin to be composed" } },
      { year: 50, label: { ko: "보살 사상과 대승 정체성이 뚜렷한 운동으로 형성", en: "The bodhisattva ideal and Mahayana identity take shape as a distinct movement" } },
      { year: 150, label: { ko: "법화경 등 주요 대승 경전 편찬 지속", en: "Major Mahayana sutras such as the Lotus Sutra continue to be composed" } },
    ],
    color: "#8a5a7a",
  },
  {
    id: "madhyamaka-and-yogacara-philosophy",
    name: { ko: "중관(마디아마카)·유식(요가차라) 철학의 체계화", en: "The Systematization of Madhyamaka and Yogacara Philosophy" },
    startYear: 150,
    endYear: 500,
    peakStart: 150,
    peakEnd: 450,
    summary: {
      ko: "나가르주나가 모든 현상이 고정된 실체 없이 서로 의존해 일어난다는 공(空, 순야타) 사상을 중관 학파로 체계화하고, 이후 아상가·바수반두 형제가 모든 경험이 마음(식, 비즈냐나)의 작용이라는 유식 사상을 유가행 학파로 체계화한 시기. 두 학파는 대승 불교 철학의 두 축으로 자리잡아 이후 동아시아·티베트 불교 전통 모두에 깊은 영향을 남겼다.",
      en: "Nagarjuna systematized the Madhyamaka (\"middle way\") school around the concept of emptiness (shunyata) — that all phenomena arise interdependently without fixed essence — and the brothers Asanga and Vasubandhu later systematized Yogacara, the view that all experience is a function of consciousness (vijnana). The two schools became the twin pillars of Mahayana philosophy, leaving a deep mark on both the later East Asian and Tibetan Buddhist traditions.",
    },
    keyEvents: [
      { year: 150, label: { ko: "나가르주나, 「중론」 저술 — 중관 학파의 토대 마련 (전통적 추정 연대)", en: "Nagarjuna writes the Mulamadhyamakakarika, founding the Madhyamaka school (conventional estimate)" } },
      { year: 320, label: { ko: "아상가, 유가행 학파의 초기 체계화", en: "Asanga begins the early systematization of the Yogacara school" } },
      { year: 400, label: { ko: "바수반두, 「유식삼십송」 등으로 유식 사상 정교화", en: "Vasubandhu refines Yogacara thought in works such as the Trimshika" } },
    ],
    color: "#7a4a7a",
  },
  {
    id: "mahayana-spread-east-asia",
    name: { ko: "대승 불교의 동아시아 확산과 종파 형성", en: "Mahayana's Spread across East Asia and the Formation of Its Schools" },
    startYear: 300,
    endYear: 1200,
    peakStart: 400,
    peakEnd: 900,
    summary: {
      ko: "쿠마라지바 등의 대규모 경전 한역 작업을 거쳐 대승 불교가 중국에 뿌리내리고, 천태종·화엄종·선종(찬)·정토종 같은 독자적 중국 종파들이 형성된 시기. 이후 한반도·일본·베트남으로 전파되며 각 지역에서 고유한 형태로 발전했다 — 당 제국 등 왕조의 정치사보다 경전 번역·종파 형성 과정에 초점을 둔다.",
      en: "Through large-scale sutra translation projects led by figures such as Kumarajiva, Mahayana Buddhism took root in China, and distinct Chinese schools formed — Tiantai, Huayan, Chan (Zen), and Pure Land among them. It then spread to Korea, Japan, and Vietnam, developing its own regional forms in each. The focus here is on sutra translation and school formation, not the political history of dynasties such as Tang China.",
    },
    keyEvents: [
      { year: 401, label: { ko: "쿠마라지바, 장안에서 대규모 경전 한역 작업 착수", en: "Kumarajiva begins large-scale sutra translation at Chang'an" } },
      { year: 520, label: { ko: "보리달마, 중국에 선(찬) 전통 전래 (전통적 연대)", en: "Bodhidharma brings the Chan (Zen) tradition to China (traditional dating)" } },
      { year: 804, label: { ko: "사이초·구카이, 일본에 천태종·진언종(밀교) 전래", en: "Saicho and Kukai bring the Tendai and Shingon traditions to Japan" } },
    ],
    color: "#6a5a8a",
  },
  {
    id: "modern-mahayana-and-engaged-buddhism",
    name: { ko: "현대 대승 불교와 참여불교", en: "Modern Mahayana Buddhism and Engaged Buddhism" },
    startYear: 1850,
    endYear: 2026,
    peakStart: 1850,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "근대화·식민지 경험 속에서 일본의 불교 근대주의, 타이완의 인간불교(인생불교) 운동이 등장했고, 틱낫한 같은 인물들이 사회 참여와 평화운동을 불교 수행과 결합한 참여불교를 제창한 시기. 서구로 이주한 선·정토 공동체들이 디아스포라 신앙 공동체를 형성하며, 대승의 여러 흐름이 동시대에 다양하게 공존하고 있다.",
      en: "Amid modernization and colonial experience, Japanese Buddhist modernism and Taiwan's Humanistic Buddhism movement emerged, and figures such as Thich Nhat Hanh articulated Engaged Buddhism, combining social involvement and peace activism with Buddhist practice. Zen and Pure Land communities that emigrated to the West formed diaspora communities of faith, and multiple strands of Mahayana coexist diversely in the present.",
    },
    keyEvents: [
      { year: 1899, label: { ko: "타이완의 인간불교(인생불교) 운동 시작", en: "Taiwan's Humanistic Buddhism movement begins" } },
      { year: 1966, label: { ko: "틱낫한, 참여불교 운동 본격화 (베트남 전쟁 반전 활동 포함)", en: "Thich Nhat Hanh advances the Engaged Buddhism movement, including anti-war activism during the Vietnam War" } },
      { year: 1990, label: { ko: "서구 선·정토 공동체, 디아스포라 신앙 공동체로 자리잡음", en: "Zen and Pure Land communities in the West become established diaspora communities of faith" } },
    ],
    color: "#5a6a8a",
  },
  {
    id: "vajrayana-emergence-in-india",
    name: { ko: "인도에서 금강승(바즈라야나)의 등장", en: "The Emergence of Vajrayana in India" },
    startYear: 600,
    endYear: 800,
    peakStart: 650,
    peakEnd: 800,
    summary: {
      ko: "대승 불교 안에서 만다라·진언(만트라)·관상(명상 수행)을 활용하는 밀교적 수행 전통(탄트라 불교, 금강승)이 발전한 시기. 날란다·비크라마실라 같은 대규모 승원대학이 이 전통의 학문적 중심지가 됐고, 신속한 깨달음을 추구하는 독자적 수행 체계가 체계화됐다. 이후 금강승은 주로 티베트로 전파돼 그곳에서 가장 온전한 형태로 보존된다.",
      en: "Within Mahayana Buddhism, an esoteric practice tradition using mandalas, mantras, and visualization (Tantric Buddhism, Vajrayana) developed. Large monastic universities such as Nalanda and Vikramashila became its intellectual centers, and a distinct system of practice aimed at rapid awakening was systematized. Vajrayana would later spread primarily to Tibet, where it was preserved in its most complete form.",
    },
    keyEvents: [
      { year: 650, label: { ko: "초기 불교 탄트라 문헌 편찬 시작", en: "The earliest Buddhist Tantric texts begin to be composed" } },
      { year: 700, label: { ko: "날란다 승원대학, 금강승 학문의 중심지로 번성", en: "Nalanda monastic university flourishes as a center of Vajrayana scholarship" } },
      { year: 780, label: { ko: "비크라마실라 승원대학 설립", en: "Vikramashila monastic university is founded" } },
    ],
    color: "#4a6a8a",
  },
  {
    id: "vajrayana-establishment-in-tibet",
    name: { ko: "티베트에서 금강승의 정착", en: "The Establishment of Vajrayana in Tibet" },
    startYear: 750,
    endYear: 1200,
    peakStart: 750,
    peakEnd: 1000,
    summary: {
      ko: "인도의 탄트라 전승자 파드마삼바바가 티베트에 초청되며 금강승이 티베트에 뿌리내린 시기. 티베트 최초의 승원 삼예사가 세워졌고, 산스크리트 경전의 티베트어 번역 사업이 대규모로 진행되며 티베트 대장경의 토대가 마련됐다. 닝마파를 비롯한 티베트 불교 종파들의 기원이 이 시기로 거슬러 올라간다.",
      en: "Vajrayana took root in Tibet when the Indian Tantric master Padmasambhava was invited there. Tibet's first monastery, Samye, was established, and a large-scale project to translate Sanskrit scriptures into Tibetan laid the foundation of the Tibetan Buddhist canon. The origins of Tibetan Buddhist schools, including the Nyingma, trace back to this period.",
    },
    keyEvents: [
      { year: 775, label: { ko: "파드마삼바바, 티베트에 초청돼 금강승 전파", en: "Padmasambhava is invited to Tibet and spreads Vajrayana there" } },
      { year: 779, label: { ko: "삼예사, 티베트 최초의 승원으로 건립", en: "Samye, Tibet's first monastery, is established" } },
      { year: 900, label: { ko: "산스크리트 경전의 티베트어 대역경 사업 본격화", en: "Large-scale translation of Sanskrit scriptures into Tibetan advances" } },
    ],
    color: "#3a5a7a",
  },
  {
    id: "tibetan-buddhist-schools-and-dalai-lama-institution",
    name: { ko: "티베트 불교 종파의 분화와 달라이 라마 제도", en: "The Branching of Tibetan Buddhist Schools and the Dalai Lama Institution" },
    startYear: 1200,
    endYear: 1950,
    peakStart: 1357,
    peakEnd: 1642,
    summary: {
      ko: "닝마파 이후 사캬파·카규파·겔룩파 등 독자적 종파들이 형성되고, 총카파가 세운 겔룩파에서 환생 라마(툴쿠) 제도를 바탕으로 달라이 라마 계보가 확립된 시기. 1642년 겔룩파가 티베트 정교일치 정부(간덴 포드랑)를 수립하며 종교 제도가 정치 제도와 긴밀히 결합됐다 — 정치사 자체보다 이 종파 분화·제도 형성 과정에 초점을 둔다.",
      en: "Following the Nyingma, distinct schools formed — the Sakya, Kagyu, and Gelug among them — and within the Gelug school founded by Tsongkhapa, the Dalai Lama lineage was established on the basis of the reincarnate lama (tulku) institution. In 1642 the Gelug school established the Ganden Phodrang, a unified religious-political government of Tibet, closely binding religious and political institutions together — the focus here is on this school formation and institutional development, not the political history itself.",
    },
    keyEvents: [
      { year: 1357, label: { ko: "총카파 출생 — 이후 겔룩파 창시", en: "Tsongkhapa is born; he goes on to found the Gelug school" } },
      { year: 1578, label: { ko: "\"달라이 라마\" 칭호, 처음 수여됨", en: "The title \"Dalai Lama\" is conferred for the first time" } },
      { year: 1642, label: { ko: "간덴 포드랑 정부 수립 — 겔룩파의 정교일치 체제 확립", en: "The Ganden Phodrang government is established, formalizing Gelug religious-political rule" } },
    ],
    color: "#2a4a6a",
  },
  {
    id: "modern-tibetan-buddhism-and-global-vajrayana",
    name: { ko: "현대 티베트 불교와 금강승의 세계적 확산", en: "Modern Tibetan Buddhism and the Global Spread of Vajrayana" },
    startYear: 1950,
    endYear: 2026,
    peakStart: 1950,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "1950~1959년 중국의 티베트 병합과 뒤이은 14대 달라이 라마의 인도 망명을 계기로 티베트 불교 공동체가 전 세계로 흩어진 시기. 망명 정부와 디아스포라 공동체를 통해 금강승이 서구에 본격적으로 소개됐고, 동시에 일본 진언종처럼 티베트 불교와는 별도 계보를 지닌 금강승 전통도 계속 이어지고 있다 — \"금강승\"이 곧 \"티베트 불교\"만을 뜻하지는 않는다는 점을 명시.",
      en: "China's annexation of Tibet (1950–1959) and the subsequent exile of the 14th Dalai Lama to India scattered the Tibetan Buddhist community across the world. Vajrayana was introduced to the West in earnest through the exile government and diaspora communities, while other Vajrayana lineages distinct from Tibetan Buddhism, such as Japan's Shingon school, continue as well — Vajrayana is not synonymous with Tibetan Buddhism alone.",
    },
    keyEvents: [
      { year: 1959, label: { ko: "14대 달라이 라마, 인도로 망명", en: "The 14th Dalai Lama goes into exile in India" } },
      { year: 1989, label: { ko: "14대 달라이 라마, 노벨평화상 수상", en: "The 14th Dalai Lama receives the Nobel Peace Prize" } },
      { year: 2000, label: { ko: "서구에서 티베트 불교 센터·명상 공동체 확산", en: "Tibetan Buddhist centers and meditation communities spread across the West" } },
    ],
    color: "#1a3a6a",
  },
];

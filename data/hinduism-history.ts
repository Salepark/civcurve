// HinduismCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀)
// Phase 1 범위: 힌두교 종교·철학사 딥다이브, 13개 장. WorldReligionsCurve의
// 힌두교 항목(단일 레인, 개관)을 FaithCurve/IslamCurve가 각 종교를 다루는
// 깊이로 확장한 것 — CivCurve(개관)/FaithCurve·IslamCurve(딥다이브),
// WorldReligionsCurve(종교 개관)/HinduismCurve(힌두교 딥다이브) 구조를
// 그대로 재사용.
//
// 설계 원칙 (Louis 확정, AskUserQuestion):
// 1) 단일 흐름 구조. 힌두교는 이슬람·기독교처럼 "카르발라"나 "1054년 대분열"
//    같은 단일 분기 사건이 없고, 베다 종교에서 여러 철학 학파·신앙 전통이
//    점진적으로 갈라져 나온 형태라 FaithCurve/IslamCurve식 레인 분리보다
//    하나의 연대기적 레인으로 각 시대의 사상적 전환을 추적하는 쪽이 자연
//    스럽다. 비슈누파/시바파/샥티파, 베단타 학파 내 분화(샹카라의 불이론 vs
//    라마누자·마드바의 유신론적 베단타) 등은 각자 독립된 장으로 다루되
//    "레인"을 나누지는 않는다 — 장끼리 시기가 겹치는 것은 다른 CivCurve
//    데이터셋들과 동일하게 허용(의도된 비중복).
// 2) 종교·철학 사상 중심. 마우리아 왕조(아소카의 불교 후원 전후 맥락)·
//    굽타 왕조("힌두 황금기") 같은 제국의 정치사는 그 시기 종교·철학이 어떻게
//    형성됐는지의 "배경"으로만 다루고 장의 중심 주제로 삼지 않는다
//    (IslamCurve와 동일 원칙, Louis 명시적 결정).
// 3) 베다 시대 연대는 학계에서도 이견이 있는 영역(전통적 연대와 역사학적
//    추정 연대 사이) — 단정적 서술을 피하고 "대략", "전통적으로" 같은
//    표현으로 불확실성을 명시한다 (WorldReligionsCurve에서 확립된 원칙).
// 4) 마지막 장(현대 힌두 민족주의·동시대 힌두교)만 ongoing: true로 지정하고
//    peakStart/peakEnd를 startYear/endYear와 동일하게 둔다. 힌두트바
//    (정치적 힌두 민족주의)는 현대 힌두교의 한 흐름일 뿐 모든 힌두교도가
//    동의하는 입장이 아니라는 점을 summary에 명시 — IslamCurve의 현대 시아
//    성직 위계 장에서 쓴 것과 동일한 중립화 패턴.

import type { Civilization } from "./civilizations";

export const hinduismHistory: Civilization[] = [
  {
    id: "vedic-religion-and-rigveda",
    name: { ko: "베다 종교와 리그베다", en: "Vedic Religion and the Rigveda" },
    startYear: -1500,
    endYear: -500,
    peakStart: -1200,
    peakEnd: -900,
    summary: {
      ko: "인도 북서부에서 자연신(인드라·아그니·바루나 등)에게 제사(야즈냐)를 바치는 구전 찬가 전통이 리그베다를 비롯한 네 베다로 집성된 시기. 정확한 연대는 학계에서도 이견이 있어 여기서는 전통적 추정 연대(대략 기원전 1500~500년경)를 따른다. 이후 모든 힌두교 전통이 베다를 최고 경전(슈루티)으로 인정한다는 점에서 공통 뿌리가 된다.",
      en: "In northwestern India, an oral tradition of hymns offering sacrifice (yajna) to nature deities (Indra, Agni, Varuna, and others) was compiled into the four Vedas, beginning with the Rigveda. Exact dating remains debated among scholars; this entry follows conventional estimates (roughly 1500–500 BCE). All later Hindu traditions recognize the Vedas as the highest scripture (shruti), making this period a shared root.",
    },
    keyEvents: [
      { year: -1200, label: { ko: "리그베다 찬가, 구전 형태로 집성 (전통적 추정 연대)", en: "The hymns of the Rigveda are compiled orally (conventional estimate)" } },
      { year: -1000, label: { ko: "사마베다·야주르베다·아타르바베다 편찬 지속", en: "The Samaveda, Yajurveda, and Atharvaveda continue to be compiled" } },
      { year: -600, label: { ko: "브라흐마나·아란야카 문헌 — 제의 해설 전통 발달", en: "The Brahmanas and Aranyakas develop as commentary on ritual practice" } },
    ],
    color: "#8a6a3a",
  },
  {
    id: "upanishads-and-early-vedanta",
    name: { ko: "우파니샤드와 초기 베단타 사상", en: "The Upanishads and Early Vedanta Thought" },
    startYear: -800,
    endYear: -200,
    peakStart: -700,
    peakEnd: -500,
    summary: {
      ko: "제의 중심의 베다 종교에서 벗어나, 브라만(우주의 근본 원리)과 아트만(개인의 참자아)이 하나라는 깨달음을 추구하는 철학적 전통이 등장한 시기. 윤회(삼사라)·업(카르마)·해탈(모크샤) 개념이 이 시기 체계화됐고, 이후 모든 베단타 학파의 출발점이 된다. '베단타'라는 말 자체가 '베다의 끝'(우파니샤드)을 뜻한다.",
      en: "A philosophical tradition emerged that moved beyond ritual-centered Vedic religion to pursue the realization that Brahman (the ultimate principle of the universe) and Atman (the individual self) are one. The concepts of samsara (rebirth), karma, and moksha (liberation) were systematized during this period, becoming the starting point for every later school of Vedanta — the word itself means \"the end of the Vedas,\" referring to the Upanishads.",
    },
    keyEvents: [
      { year: -700, label: { ko: "브리하다란야카·찬도기야 우파니샤드 — 초기 주요 텍스트", en: "The Brihadaranyaka and Chandogya Upanishads — among the earliest major texts" } },
      { year: -600, label: { ko: "\"탓 트밤 아시\"(그대가 바로 그것이다) 같은 핵심 명제 등장", en: "Core formulations such as \"tat tvam asi\" (\"you are that\") appear" } },
      { year: -400, label: { ko: "카타·문다카 우파니샤드 등 후기 주요 우파니샤드 성립", en: "Later major Upanishads such as the Katha and Mundaka take shape" } },
    ],
    color: "#7a7a4a",
  },
  {
    id: "epics-and-bhagavad-gita",
    name: { ko: "서사시 전통과 바가바드 기타", en: "The Epic Tradition and the Bhagavad Gita" },
    startYear: -400,
    endYear: 400,
    peakStart: -300,
    peakEnd: 200,
    summary: {
      ko: "라마야나와 마하바라타 두 서사시가 구전 전승을 거쳐 지금의 형태로 편집된 시기. 특히 마하바라타의 일부인 바가바드 기타는 크리슈나가 아르주나에게 전하는 가르침을 통해 의무(다르마)·행위의 요가(카르마 요가)·헌신의 길(박티)을 종합적으로 제시하며, 이후 힌두교 신자 대중에게 철학적 우파니샤드보다 훨씬 폭넓게 읽히는 핵심 경전이 됐다.",
      en: "The two great epics, the Ramayana and the Mahabharata, were compiled through oral tradition into roughly their present form. The Bhagavad Gita, part of the Mahabharata, presents Krishna's teaching to Arjuna synthesizing duty (dharma), the discipline of action (karma yoga), and the path of devotion (bhakti) — and became a core scripture read far more widely among ordinary Hindus than the more philosophical Upanishads.",
    },
    keyEvents: [
      { year: -300, label: { ko: "라마야나, 지금 형태에 가까운 편집 단계 (전통적 추정)", en: "The Ramayana reaches close to its present form (conventional estimate)" } },
      { year: -200, label: { ko: "마하바라타 편집 지속, 바가바드 기타 포함", en: "The Mahabharata, including the Bhagavad Gita, continues to be compiled" } },
      { year: 100, label: { ko: "서사시 전통, 인도 전역 구전·공연 문화의 핵심으로 자리잡음", en: "The epic tradition becomes central to oral and performance culture across the subcontinent" } },
    ],
    color: "#9a6a4a",
  },
  {
    id: "six-orthodox-philosophical-schools",
    name: { ko: "정통 6파 철학(샤드다르샤나)의 체계화", en: "The Systematization of the Six Orthodox Schools (Shad-darshana)" },
    startYear: -200,
    endYear: 500,
    peakStart: 100,
    peakEnd: 450,
    summary: {
      ko: "베다의 권위를 인정하는 여섯 정통 철학 학파 — 상키야(이원론적 존재론)·요가(수행론, 파탄잘리의 요가수트라)·냐야(논리학)·바이셰시카(원자론적 자연철학)·미망사(제의 해석학)·베단타(우파니샤드 해석) — 가 각각 경전(수트라)과 주석 전통을 갖춘 독자적 학파로 체계화된 시기. 여섯 학파는 서로 경쟁하면서도 모두 정통(아스티카)으로 인정되며 공존한다.",
      en: "The six orthodox philosophical schools that accept the authority of the Vedas — Samkhya (dualist ontology), Yoga (practice, formalized in Patanjali's Yoga Sutras), Nyaya (logic), Vaisheshika (atomistic natural philosophy), Mimamsa (ritual hermeneutics), and Vedanta (interpretation of the Upanishads) — each developed into independent traditions with their own foundational sutras and commentarial literature. The six schools compete with one another but are all recognized as orthodox (astika) and continue to coexist.",
    },
    keyEvents: [
      { year: 200, label: { ko: "파탄잘리, 「요가수트라」 편찬 (전통적 추정 연대)", en: "Patanjali compiles the Yoga Sutras (conventional estimate)" } },
      { year: 350, label: { ko: "이슈바라크리슈나, 「상키야카리카」로 상키야 학파 체계화", en: "Ishvarakrishna systematizes the Samkhya school in the Samkhya Karika" } },
      { year: 450, label: { ko: "바다라야나, 「브라흐마수트라」로 베단타 학파의 토대 마련", en: "Badarayana lays the foundation of the Vedanta school in the Brahma Sutras" } },
    ],
    color: "#6a8a6a",
  },
  {
    id: "puranic-hinduism-and-temple-worship",
    name: { ko: "푸라나 힌두교와 사원 신앙의 발전", en: "Puranic Hinduism and the Rise of Temple Worship" },
    startYear: 300,
    endYear: 700,
    peakStart: 400,
    peakEnd: 600,
    summary: {
      ko: "비슈누·시바·데비(여신) 등 개별 신격을 중심으로 한 신화·계보·숭배 의례를 담은 푸라나 문헌들이 대거 편찬되고, 제의 중심의 베다 종교에서 신상(무르티)을 모신 사원에서 예배하는 신앙 형태로 대중 신앙의 중심이 옮겨간 시기. 이 시기부터 '힌두교'라 불리는 신앙 형태가 오늘날 우리가 아는 사원·신상 중심의 모습에 가까워진다.",
      en: "A large body of Puranic literature — mythology, genealogies, and worship rites centered on individual deities such as Vishnu, Shiva, and the Goddess (Devi) — was compiled, and popular devotion shifted from ritual-centered Vedic religion toward temple worship of consecrated images (murti). From this period, the faith we call \"Hinduism\" comes to resemble the temple- and image-centered form recognizable today.",
    },
    keyEvents: [
      { year: 350, label: { ko: "비슈누 푸라나·시바 푸라나 등 주요 푸라나 편찬 시작", en: "Major Puranas such as the Vishnu Purana and Shiva Purana begin to be compiled" } },
      { year: 400, label: { ko: "굽타 왕조 치하, 힌두 사원 건축 양식 확립 (왕조 정치사는 배경)", en: "Under the Gupta dynasty, Hindu temple architecture becomes established (the dynasty's political history is background only)" } },
      { year: 600, label: { ko: "신상 숭배, 인도 전역 대중 신앙의 중심 관행으로 자리잡음", en: "Image worship becomes the central popular devotional practice across the subcontinent" } },
    ],
    color: "#8a5a6a",
  },
  {
    id: "tantra-and-shakta-tradition",
    name: { ko: "탄트라와 샥티(여신) 전통의 발전", en: "The Development of Tantra and the Shakta (Goddess) Tradition" },
    startYear: 600,
    endYear: 1300,
    peakStart: 800,
    peakEnd: 1200,
    summary: {
      ko: "우주의 근원적 힘을 여성 원리(샥티)로 보고 데비(여신)를 최고신으로 숭배하는 샥티 전통과, 독자적인 의례·명상 기법을 담은 탄트라 문헌 전통이 발전한 시기. 두르가·칼리 같은 여신 숭배가 체계화됐고, 이 전통은 비슈누파·시바파와 구분되면서도 서로 배타적이지 않은 또 하나의 주요 신앙 축으로 자리잡았다.",
      en: "The Shakta tradition — which regards the fundamental power of the universe as feminine (Shakti) and worships the Goddess (Devi) as supreme — developed alongside a body of Tantric literature describing distinct ritual and meditative techniques. Worship of goddesses such as Durga and Kali became systematized, establishing Shaktism as another major devotional strand, distinct from but not exclusive of Vaishnavism and Shaivism.",
    },
    keyEvents: [
      { year: 700, label: { ko: "초기 탄트라 문헌 편찬 시작", en: "Early Tantric texts begin to be composed" } },
      { year: 900, label: { ko: "데비 마하트미야(여신의 위대함) 전통, 두르가 숭배 확산에 영향", en: "The Devi Mahatmya tradition shapes the spread of Durga worship" } },
      { year: 1100, label: { ko: "벵골·동인도 지역에서 샥타 전통 특히 융성", en: "The Shakta tradition flourishes especially in Bengal and eastern India" } },
    ],
    color: "#7a4a8a",
  },
  {
    id: "bhakti-movement-south-india",
    name: { ko: "남인도 박티 운동 — 알와르와 나얀마르", en: "The South Indian Bhakti Movement — the Alvars and Nayanars" },
    startYear: 600,
    endYear: 1200,
    peakStart: 700,
    peakEnd: 1000,
    summary: {
      ko: "타밀어를 비롯한 지역어로 신에 대한 뜨거운 헌신(박티)을 노래한 시인-성자들이 등장한 시기. 비슈누를 노래한 알와르 성자들과 시바를 노래한 나얀마르 성자들은 철학적 사변보다 신과의 개인적·감정적 관계를 중시했고, 이 흐름이 이후 수세기에 걸쳐 인도 전역으로 퍼지는 박티 운동의 원류가 됐다.",
      en: "Poet-saints emerged who sang of passionate devotion (bhakti) to God in regional languages, especially Tamil. The Alvar saints, devoted to Vishnu, and the Nayanar saints, devoted to Shiva, emphasized a personal, emotional relationship with God over philosophical speculation — and this current became the wellspring of the bhakti movement that would spread across the subcontinent over the following centuries.",
    },
    keyEvents: [
      { year: 700, label: { ko: "알와르 성자들의 비슈누 헌신시, 타밀어로 널리 유포", en: "The Alvar saints' devotional poetry to Vishnu spreads widely in Tamil" } },
      { year: 800, label: { ko: "나얀마르 성자들의 시바 헌신시 전통 확립", en: "The Nayanar saints establish their tradition of devotional poetry to Shiva" } },
      { year: 1000, label: { ko: "박티 운동, 남인도를 넘어 다른 지역어권으로 확산 시작", en: "The bhakti movement begins spreading beyond South India into other language regions" } },
    ],
    color: "#6a9a7a",
  },
  {
    id: "advaita-vedanta-shankara",
    name: { ko: "샹카라와 불이일원론(아드바이타) 베단타", en: "Shankara and Advaita (Non-Dualist) Vedanta" },
    startYear: 700,
    endYear: 900,
    peakStart: 788,
    peakEnd: 820,
    summary: {
      ko: "아디 샹카라가 브라만과 아트만이 궁극적으로 하나이며 둘로 보이는 것은 무지(아비디야) 때문이라는 불이일원론(아드바이타) 베단타를 체계화한 시기. 인도 네 방위에 수도원(마타)을 세워 제도적 기반도 마련했다. 이후 힌두 철학의 가장 영향력 있는 해석 틀 중 하나로 자리잡았고, 동시에 유신론적 베단타 학파들의 반론을 촉발하는 기준점이 됐다.",
      en: "Adi Shankara systematized Advaita (non-dualist) Vedanta, the teaching that Brahman and Atman are ultimately one, and that their apparent duality is a product of ignorance (avidya). He also built an institutional foundation by establishing monasteries (mathas) in four directions across India. Advaita became one of the most influential interpretive frameworks in Hindu philosophy, and also the reference point against which later theistic Vedanta schools would argue.",
    },
    keyEvents: [
      { year: 788, label: { ko: "샹카라 출생 (전통적 연대)", en: "Shankara's traditional birth date" } },
      { year: 800, label: { ko: "브라흐마수트라·주요 우파니샤드 주석서 저술", en: "Shankara writes commentaries on the Brahma Sutras and major Upanishads" } },
      { year: 820, label: { ko: "네 방위 마타(수도원) 설립 — 불이일원론의 제도적 전승 체계 마련", en: "The four directional mathas are established, giving Advaita an institutional lineage" } },
    ],
    color: "#9a8a4a",
  },
  {
    id: "dualist-and-qualified-nondualist-vedanta",
    name: { ko: "유신론적 베단타 — 비시슈타드바이타와 드바이타", en: "Theistic Vedanta — Vishishtadvaita and Dvaita" },
    startYear: 1017,
    endYear: 1317,
    peakStart: 1017,
    peakEnd: 1317,
    summary: {
      ko: "샹카라의 불이일원론에 대한 신학적 반론으로, 라마누자가 \"제한된 불이론\"(비시슈타드바이타 — 브라만과 개별 영혼이 하나이되 속성상 구별된다는 입장)을, 마드바가 \"이원론\"(드바이타 — 신과 영혼은 본질적으로 별개라는 입장)을 각각 체계화한 시기. 두 학파 모두 비슈누를 인격신으로 섬기는 헌신적 신앙과 철학을 결합했고, 이후 비슈누파 박티 운동의 신학적 토대가 됐다.",
      en: "As theological responses to Shankara's non-dualism, Ramanuja systematized \"qualified non-dualism\" (Vishishtadvaita — the view that Brahman and individual souls are one yet distinct in their attributes), and Madhva systematized \"dualism\" (Dvaita — the view that God and souls are fundamentally separate). Both schools combined devotional worship of Vishnu as a personal God with rigorous philosophy, and became the theological foundation for later Vaishnava bhakti movements.",
    },
    keyEvents: [
      { year: 1017, label: { ko: "라마누자 출생 (전통적 연대)", en: "Ramanuja's traditional birth date" } },
      { year: 1137, label: { ko: "라마누자 사망 — 비시슈타드바이타 체계 확립", en: "Ramanuja dies, having established the Vishishtadvaita system" } },
      { year: 1238, label: { ko: "마드바 출생 (전통적 연대) — 이후 드바이타 베단타 확립", en: "Madhva's traditional birth date; he goes on to establish Dvaita Vedanta" } },
    ],
    color: "#5a7a8a",
  },
  {
    id: "bhakti-movement-north-india",
    name: { ko: "북인도 박티 운동과 성자 시인들", en: "The North Indian Bhakti Movement and Its Poet-Saints" },
    startYear: 1300,
    endYear: 1700,
    peakStart: 1400,
    peakEnd: 1600,
    summary: {
      ko: "박티 운동이 인도 북부·동부 지역어권으로 확산되며 카비르·투카람·미라바이·툴시다스·차이타냐 같은 성자 시인들이 등장한 시기. 카스트와 형식적 종교 의례를 넘어선 신과의 직접적 사랑을 노래했고, 차이타냐는 벵골에서 크리슈나 중심 헌신 전통(가우디야 바이슈나비즘)을 일으켰다. 이 시기 북인도는 이슬람 왕조들의 지배 아래 있었으나, 이 장은 그 정치사보다 박티 신앙·문학 전통의 발전에 초점을 둔다.",
      en: "As the bhakti movement spread into the vernacular language regions of northern and eastern India, poet-saints such as Kabir, Tukaram, Mirabai, Tulsidas, and Chaitanya emerged, singing of direct love of God beyond caste and formal ritual. Chaitanya sparked a Krishna-centered devotional tradition in Bengal (Gaudiya Vaishnavism). Northern India was under the rule of Islamic dynasties during this period, but the focus here is on the development of bhakti devotion and literature rather than that political history.",
    },
    keyEvents: [
      { year: 1440, label: { ko: "카비르 출생 (전통적 추정) — 힌두·수피 사상을 넘나드는 헌신시", en: "Kabir's conventionally estimated birth date; his devotional poetry draws on both Hindu and Sufi thought" } },
      { year: 1486, label: { ko: "차이타냐 출생 — 벵골 가우디야 바이슈나비즘의 출발점", en: "Chaitanya's birth, the starting point of Gaudiya Vaishnavism in Bengal" } },
      { year: 1574, label: { ko: "툴시다스, 「라마차리트마나스」(힌디어 라마야나) 저술 시작", en: "Tulsidas begins writing the Ramcharitmanas, a Hindi retelling of the Ramayana" } },
    ],
    color: "#8a7a5a",
  },
  {
    id: "modern-hindu-reform-movements",
    name: { ko: "근대 힌두 개혁 운동", en: "Modern Hindu Reform Movements" },
    startYear: 1828,
    endYear: 1900,
    peakStart: 1828,
    peakEnd: 1900,
    summary: {
      ko: "서구 식민 지배와의 접촉 속에서 사티(과부 순장)·아동 결혼 같은 관행에 반대하고 힌두교를 개혁하려는 운동이 등장한 시기. 람 모한 로이의 브라모 사마지는 일신교적 해석과 우상 숭배 비판을 내세웠고, 다야난다 사라스바티의 아리아 사마지는 베다로의 복귀를 주장하며 더 보수적인 개혁 노선을 취했다 — 힌두교 내부에서도 근대성에 대한 대응은 하나가 아니었다.",
      en: "In contact with Western colonial rule, movements emerged to reform Hinduism and oppose practices such as sati (widow immolation) and child marriage. Ram Mohan Roy's Brahmo Samaj advocated a monotheistic interpretation and criticized idol worship, while Dayananda Saraswati's Arya Samaj called for a return to the Vedas and took a more conservative reformist line — even within Hinduism, there was no single response to modernity.",
    },
    keyEvents: [
      { year: 1828, label: { ko: "람 모한 로이, 브라모 사마지 설립", en: "Ram Mohan Roy founds the Brahmo Samaj" } },
      { year: 1829, label: { ko: "사티 금지법 제정 (영국령 인도)", en: "Sati is legally banned in British India" } },
      { year: 1875, label: { ko: "다야난다 사라스바티, 아리아 사마지 설립", en: "Dayananda Saraswati founds the Arya Samaj" } },
    ],
    color: "#6a6a9a",
  },
  {
    id: "neo-vedanta-and-global-hinduism",
    name: { ko: "신베단타와 힌두교의 세계적 확산", en: "Neo-Vedanta and the Global Spread of Hinduism" },
    startYear: 1863,
    endYear: 1950,
    peakStart: 1893,
    peakEnd: 1950,
    summary: {
      ko: "라마크리슈나의 신비 체험과 가르침을 제자 비베카난다가 서구에 소개하며, 모든 종교가 궁극적으로 하나의 진리를 가리킨다는 보편주의적 해석(신베단타)이 등장한 시기. 1893년 시카고 세계종교의회 연설로 비베카난다는 힌두교를 서구에 철학적 전통으로 소개했고, 라마크리슈나 교단 설립과 요가의 세계적 확산에 토대를 놓았다.",
      en: "As Ramakrishna's mystical experiences and teachings were introduced to the West by his disciple Vivekananda, a universalist interpretation emerged (Neo-Vedanta) holding that all religions ultimately point to one truth. Vivekananda's 1893 address to the World's Parliament of Religions in Chicago introduced Hinduism to the West as a philosophical tradition, and laid the groundwork for the founding of the Ramakrishna Mission and the later global spread of yoga.",
    },
    keyEvents: [
      { year: 1886, label: { ko: "라마크리슈나 사망 — 비베카난다, 그의 가르침 계승", en: "Ramakrishna dies; Vivekananda carries his teaching forward" } },
      { year: 1893, label: { ko: "비베카난다, 시카고 세계종교의회에서 연설", en: "Vivekananda addresses the World's Parliament of Religions in Chicago" } },
      { year: 1897, label: { ko: "라마크리슈나 교단(미션) 설립", en: "The Ramakrishna Mission is founded" } },
    ],
    color: "#9a7a6a",
  },
  {
    id: "modern-hindu-nationalism-and-contemporary-hinduism",
    name: { ko: "현대 힌두 민족주의와 동시대 힌두교", en: "Modern Hindu Nationalism and Contemporary Hinduism" },
    startYear: 1925,
    endYear: 2026,
    peakStart: 1925,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "1925년 민족의용단(RSS) 창설을 기점으로 힌두교를 인도의 국가적·문화적 정체성과 결부하는 정치적 흐름(힌두트바)이 등장했고, 1947년 독립 이후 정당 정치로 이어져 오늘날까지 이어지고 있다. 다른 한편으로는 간디의 종교다원주의적 힌두교 해석, 요가·명상의 세계적 대중화, 디아스포라 공동체의 다양한 신앙 실천도 동시대 힌두교의 중요한 흐름이다. 힌두트바는 현대 힌두교의 한 정치적 흐름일 뿐, 모든 힌두교도가 이 입장에 동의하는 것은 아니다.",
      en: "Beginning with the founding of the Rashtriya Swayamsevak Sangh (RSS) in 1925, a political current (Hindutva) emerged linking Hinduism to India's national and cultural identity, continuing into party politics after 1947 independence and persisting to the present. Alongside this, Gandhi's religiously pluralist interpretation of Hinduism, the global popularization of yoga and meditation, and diverse devotional practices within diaspora communities are also major strands of contemporary Hinduism. Hindutva is one political current within modern Hinduism, not a position all Hindus endorse.",
    },
    keyEvents: [
      { year: 1925, label: { ko: "민족의용단(RSS) 창설", en: "The Rashtriya Swayamsevak Sangh (RSS) is founded" } },
      { year: 1947, label: { ko: "인도 독립 — 힌두교와 국가 정체성을 둘러싼 논의 본격화", en: "Indian independence; debates over Hinduism and national identity intensify" } },
      { year: 1960, label: { ko: "요가·명상 전통, 서구 대중문화로 확산 시작", en: "Yoga and meditation traditions begin spreading into Western popular culture" } },
    ],
    color: "#7a9a5a",
  },
];

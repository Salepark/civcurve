// PhilosophyCurve 데이터셋 — civilizations.ts의 Civilization 타입을 그대로 재사용.
// (region은 optional이라 여기서는 아예 안 씀)
// Phase 1 범위: 서양 철학사 중심 15개 장. 고대 자연철학(소크라테스 이전)부터
// 현대 심리철학·AI 윤리까지. ScienceCurve의 '중세 스콜라 과학', WorldReligionsCurve/
// FaithCurve의 신학적 내용, LiteratureCurve의 실존주의·포스트모던 문학과 시기·인물이
// 겹치는 장들이 있는데, Louis의 명시적 판단("문학·철학은 종교와도 밀접하니 중복이
// 돼도 문제 아님 — 인류 역사에서 연관 안 된 것이 없다")에 따라 중복 회피를 위해
// 범위를 억지로 비틀지 않았다. 해당 장의 summary에 겹치는 데이터셋을 명시적으로
// 언급해뒀다.

import type { Civilization } from "./civilizations";

export const philosophyHistory: Civilization[] = [
  {
    id: "ancient-natural-philosophy",
    name: { ko: "고대 자연철학 (탈레스와 소크라테스 이전 철학자들)", en: "Ancient Natural Philosophy (Thales and the Pre-Socratics)" },
    startYear: -600,
    endYear: -400,
    peakStart: -585,
    peakEnd: -450,
    summary: {
      ko: "탈레스가 \"만물의 근원은 무엇인가\"라는 질문으로 신화적 설명 대신 자연 자체에서 답을 찾기 시작한 시기. 헤라클레이토스의 변화의 철학, 파르메니데스의 존재론, 피타고라스의 수 이론이 이어지며 이후 모든 서양 철학의 질문틀을 세웠다.",
      en: "Thales began asking what everything is made of and sought answers in nature itself rather than myth. Heraclitus's philosophy of change, Parmenides's ontology, and Pythagoras's theory of number followed, setting the questions that all later Western philosophy would inherit.",
    },
    keyEvents: [
      { year: -585, label: { ko: "탈레스, 일식을 예측 (전통적 연대)", en: "Thales predicts a solar eclipse (traditional dating)" } },
      { year: -500, label: { ko: "헤라클레이토스, \"만물은 유전한다\" 사상 전개", en: "Heraclitus develops his philosophy that \"everything flows\"" } },
      { year: -450, label: { ko: "파르메니데스·제논, 존재와 변화의 역설 제기", en: "Parmenides and Zeno raise paradoxes of being and change" } },
    ],
    color: "#7a6a4a",
  },
  {
    id: "classical-greek-philosophy",
    name: { ko: "그리스 고전 철학 (소크라테스·플라톤·아리스토텔레스)", en: "Classical Greek Philosophy (Socrates, Plato, Aristotle)" },
    startYear: -470,
    endYear: -322,
    peakStart: -399,
    peakEnd: -322,
    summary: {
      ko: "소크라테스가 \"너 자신을 알라\"며 캐묻는 대화법으로 철학의 방법 자체를 바꾸고, 플라톤이 이데아론으로 형이상학의 틀을 세우고, 아리스토텔레스가 논리학·윤리학·정치학을 체계화한 시기. 이후 2천 년 넘게 서양 철학의 기본 어휘와 질문이 여기서 나왔다.",
      en: "Socrates transformed the very method of philosophy with his questioning dialogue, summed up as \"know thyself.\" Plato established the framework of metaphysics with his theory of Forms, and Aristotle systematized logic, ethics, and politics. The basic vocabulary and questions of Western philosophy for the next two millennia trace back to this period.",
    },
    keyEvents: [
      { year: -399, label: { ko: "소크라테스, 재판 후 처형", en: "Socrates is tried and executed" } },
      { year: -387, label: { ko: "플라톤, 아카데메이아 설립", en: "Plato founds the Academy" } },
      { year: -335, label: { ko: "아리스토텔레스, 리케이온 설립", en: "Aristotle founds the Lyceum" } },
    ],
    color: "#6a8a6a",
  },
  {
    id: "hellenistic-roman-philosophy",
    name: { ko: "헬레니즘·로마 철학 (스토아·에피쿠로스·회의주의)", en: "Hellenistic & Roman Philosophy (Stoicism, Epicureanism, Skepticism)" },
    startYear: -300,
    endYear: 180,
    peakStart: -300,
    peakEnd: 180,
    summary: {
      ko: "알렉산드로스 사후 거대한 도시국가 체제가 무너지며, 철학의 관심이 \"어떻게 잘 사는가\"라는 개인의 마음가짐 문제로 옮겨간 시기. 제논의 스토아 철학, 에피쿠로스의 쾌락주의, 피론의 회의주의가 경쟁했고, 로마로 건너가 세네카·마르쿠스 아우렐리우스의 실천 철학으로 이어졌다.",
      en: "After Alexander's death and the collapse of the city-state system, philosophy's focus shifted to the personal question of how to live well. Zeno's Stoicism, Epicurus's hedonism, and Pyrrho's skepticism competed, and the tradition carried into Rome through the practical philosophy of Seneca and Marcus Aurelius.",
    },
    keyEvents: [
      { year: -300, label: { ko: "제논, 스토아 학파 창시", en: "Zeno founds the Stoic school" } },
      { year: -306, label: { ko: "에피쿠로스, 아테네에 정원 학파 개설", en: "Epicurus opens his Garden school in Athens" } },
      { year: 180, label: { ko: "마르쿠스 아우렐리우스, 「명상록」 최종 형태로 전해짐 (사후 편집)", en: "Marcus Aurelius's Meditations reaches its final form (compiled after his death)" } },
    ],
    color: "#9c7a5a",
  },
  {
    id: "patristic-philosophy",
    name: { ko: "교부 철학 (아우구스티누스 등 초기 기독교 철학)", en: "Patristic Philosophy (Augustine and Early Christian Thought)" },
    startYear: 200,
    endYear: 600,
    peakStart: 354,
    peakEnd: 430,
    summary: {
      ko: "그리스 철학의 개념 도구(로고스·이데아 등)를 빌려 기독교 신앙을 체계적으로 설명하려 한 시기. 아우구스티누스는 플라톤 철학과 기독교 신학을 결합해 시간·의지·악의 문제를 다뤘고, 이후 서양 철학과 신학이 오랫동안 함께 발전하는 토대를 놓았다. 신학적 내용 자체는 FaithCurve·WorldReligionsCurve에서 더 깊게 다룬다.",
      en: "Early Christian thinkers borrowed the conceptual tools of Greek philosophy, such as logos and the Forms, to systematically explain Christian faith. Augustine combined Platonic philosophy with Christian theology to address time, will, and evil, laying the groundwork for philosophy and theology to develop together for centuries. The theological content itself is covered in more depth in FaithCurve and WorldReligionsCurve.",
    },
    keyEvents: [
      { year: 397, label: { ko: "아우구스티누스, 「고백록」 집필", en: "Augustine writes the Confessions" } },
      { year: 413, label: { ko: "아우구스티누스, 「신국론」 집필 시작", en: "Augustine begins writing The City of God" } },
      { year: 529, label: { ko: "유스티니아누스, 아테네 철학 학교 폐쇄", en: "Justinian closes the philosophical schools of Athens" } },
    ],
    color: "#6a5a7a",
  },
  {
    id: "medieval-scholasticism",
    name: { ko: "중세 스콜라 철학", en: "Medieval Scholasticism" },
    startYear: 1000,
    endYear: 1350,
    peakStart: 1225,
    peakEnd: 1308,
    summary: {
      ko: "아리스토텔레스 철학이 아랍어 번역을 거쳐 다시 서유럽에 유입되면서, 이성과 신앙을 체계적으로 조화시키려 한 시기. 토마스 아퀴나스가 아리스토텔레스와 기독교 신학을 종합한 「신학대전」을 썼고, 대학이라는 제도가 이 논쟁의 중심 무대가 됐다. ScienceCurve의 '중세 스콜라 과학' 장과 시기·인물이 겹치는데, 당시 철학과 자연학은 분리된 분야가 아니었으므로 자연스러운 중복이다.",
      en: "As Aristotelian philosophy flowed back into Western Europe through Arabic translations, thinkers sought to systematically reconcile reason and faith. Thomas Aquinas synthesized Aristotle and Christian theology in his Summa Theologica, and the newly founded universities became the central stage for this debate. This chapter overlaps in period and figures with ScienceCurve's \"Medieval Scholastic Science\" — a natural overlap, since philosophy and natural science were not separate fields at the time.",
    },
    keyEvents: [
      { year: 1088, label: { ko: "볼로냐 대학 설립, 유럽 대학 제도의 시작", en: "The University of Bologna is founded, the beginning of Europe's university system" } },
      { year: 1274, label: { ko: "토마스 아퀴나스, 「신학대전」 미완성으로 남기고 사망", en: "Thomas Aquinas dies, leaving the Summa Theologica unfinished" } },
      { year: 1300, label: { ko: "둔스 스코투스, 개체화 이론 전개", en: "Duns Scotus develops his theory of individuation" } },
    ],
    color: "#5a6a8a",
  },
  {
    id: "renaissance-humanist-political-philosophy",
    name: { ko: "르네상스 인문주의·정치철학", en: "Renaissance Humanism & Political Philosophy" },
    startYear: 1400,
    endYear: 1600,
    peakStart: 1500,
    peakEnd: 1532,
    summary: {
      ko: "신 중심의 세계관에서 벗어나 인간과 고전 문헌 자체에 관심을 돌린 시기. 에라스뮈스가 고전 텍스트를 비판적으로 복원했고, 마키아벨리는 「군주론」에서 정치를 도덕과 분리해 다루는 근대적 정치사상의 출발점을 세웠다.",
      en: "Attention turned away from a God-centered worldview toward the human and the classical texts themselves. Erasmus critically restored classical texts, while Machiavelli's The Prince treated politics as separate from morality, marking the starting point of modern political thought.",
    },
    keyEvents: [
      { year: 1511, label: { ko: "에라스뮈스, 「우신예찬」 출간", en: "Erasmus publishes In Praise of Folly" } },
      { year: 1513, label: { ko: "마키아벨리, 「군주론」 집필", en: "Machiavelli writes The Prince" } },
      { year: 1516, label: { ko: "토마스 모어, 「유토피아」 출간", en: "Thomas More publishes Utopia" } },
    ],
    color: "#a68a5a",
  },
  {
    id: "continental-rationalism",
    name: { ko: "대륙 합리론", en: "Continental Rationalism" },
    startYear: 1630,
    endYear: 1716,
    peakStart: 1637,
    peakEnd: 1677,
    summary: {
      ko: "데카르트가 \"나는 생각한다, 고로 존재한다\"로 모든 것을 의심한 뒤 이성으로 확실한 지식을 재건하려 한 시기. 스피노자는 신과 자연을 하나로 보는 체계를, 라이프니츠는 모나드 형이상학을 세우며 이성만으로 세계를 설명하려는 기획을 이어갔다.",
      en: "Descartes doubted everything and sought to rebuild certain knowledge through reason alone, captured in \"I think, therefore I am.\" Spinoza built a system identifying God with nature, and Leibniz developed his monadology, both continuing the project of explaining the world through reason alone.",
    },
    keyEvents: [
      { year: 1637, label: { ko: "데카르트, 「방법서설」 출간", en: "Descartes publishes Discourse on the Method" } },
      { year: 1677, label: { ko: "스피노자, 「에티카」 사후 출간", en: "Spinoza's Ethics is published posthumously" } },
      { year: 1714, label: { ko: "라이프니츠, 「모나드론」 저술", en: "Leibniz writes the Monadology" } },
    ],
    color: "#4a7a8a",
  },
  {
    id: "british-empiricism",
    name: { ko: "영국 경험론", en: "British Empiricism" },
    startYear: 1690,
    endYear: 1780,
    peakStart: 1690,
    peakEnd: 1751,
    summary: {
      ko: "로크가 인간의 마음을 \"빈 서판\"으로 보고 모든 지식이 경험에서 나온다고 주장하며 합리론에 반기를 든 시기. 버클리가 지각되지 않는 물질의 존재 자체를 의심했고, 흄은 인과관계조차 습관적 연상일 뿐이라며 경험론을 가장 급진적인 형태까지 밀어붙였다.",
      en: "Locke viewed the mind as a \"blank slate\" and argued all knowledge comes from experience, pushing back against rationalism. Berkeley questioned the very existence of unperceived matter, and Hume pushed empiricism to its most radical form, arguing that even causation is merely habitual association.",
    },
    keyEvents: [
      { year: 1689, label: { ko: "로크, 「인간지성론」 출간", en: "Locke publishes An Essay Concerning Human Understanding" } },
      { year: 1710, label: { ko: "버클리, 「인간 지식의 원리론」 출간", en: "Berkeley publishes A Treatise Concerning the Principles of Human Knowledge" } },
      { year: 1739, label: { ko: "흄, 「인간 본성에 관한 논고」 출간", en: "Hume publishes A Treatise of Human Nature" } },
    ],
    color: "#8a6a7a",
  },
  {
    id: "enlightenment-political-philosophy",
    name: { ko: "계몽주의 정치철학 (사회계약론)", en: "Enlightenment Political Philosophy (Social Contract Theory)" },
    startYear: 1690,
    endYear: 1790,
    peakStart: 1748,
    peakEnd: 1762,
    summary: {
      ko: "홉스가 세운 사회계약 개념을 로크와 루소가 각자 다른 방향으로 발전시키며, 국가 권력의 정당성을 신의 권위가 아니라 개인들의 합의에서 찾으려 한 시기. 몽테스키외의 삼권분립론은 이후 근대 헌정 체제의 설계도가 됐다.",
      en: "Locke and Rousseau each developed Hobbes's concept of the social contract in different directions, seeking to ground the legitimacy of state power in the consent of individuals rather than divine authority. Montesquieu's theory of the separation of powers became a blueprint for modern constitutional systems.",
    },
    keyEvents: [
      { year: 1689, label: { ko: "로크, 「통치론」 출간", en: "Locke publishes Two Treatises of Government" } },
      { year: 1748, label: { ko: "몽테스키외, 「법의 정신」 출간", en: "Montesquieu publishes The Spirit of the Laws" } },
      { year: 1762, label: { ko: "루소, 「사회계약론」 출간", en: "Rousseau publishes The Social Contract" } },
    ],
    color: "#7a8a4a",
  },
  {
    id: "kant-german-idealism",
    name: { ko: "칸트·독일 관념론", en: "Kant & German Idealism" },
    startYear: 1781,
    endYear: 1831,
    peakStart: 1781,
    peakEnd: 1807,
    summary: {
      ko: "칸트가 합리론과 경험론을 종합해 \"인간이 세계를 어떻게 구성해서 인식하는가\"라는 질문으로 철학의 중심을 옮긴 시기. 헤겔은 역사 전체를 정신이 자기를 실현해가는 변증법적 과정으로 그려내며 이후 마르크스를 포함한 수많은 사상에 영향을 남겼다.",
      en: "Kant synthesized rationalism and empiricism, shifting philosophy's center of gravity to the question of how the human mind structures its knowledge of the world. Hegel portrayed all of history as a dialectical process of Spirit realizing itself, leaving an influence that reached figures from Marx onward.",
    },
    keyEvents: [
      { year: 1781, label: { ko: "칸트, 「순수이성비판」 출간", en: "Kant publishes the Critique of Pure Reason" } },
      { year: 1807, label: { ko: "헤겔, 「정신현상학」 출간", en: "Hegel publishes the Phenomenology of Spirit" } },
      { year: 1818, label: { ko: "쇼펜하우어, 「의지와 표상으로서의 세계」 출간", en: "Schopenhauer publishes The World as Will and Representation" } },
    ],
    color: "#6a4a9a",
  },
  {
    id: "nineteenth-century-philosophy",
    name: { ko: "19세기 철학 (공리주의·마르크스·니체·키에르케고르)", en: "Nineteenth-Century Philosophy (Utilitarianism, Marx, Nietzsche, Kierkegaard)" },
    startYear: 1830,
    endYear: 1900,
    peakStart: 1840,
    peakEnd: 1889,
    summary: {
      ko: "거대한 철학 체계에 대한 신뢰가 흔들리며 여러 방향으로 갈라진 시기. 밀의 공리주의가 \"최대 다수의 최대 행복\"을 윤리 기준으로 제시하고, 마르크스는 철학을 세계를 해석하는 데서 변혁하는 쪽으로 돌리려 했으며, 키에르케고르와 니체는 각자 다른 방식으로 개인의 실존과 전통적 가치 체계에 의문을 던졌다.",
      en: "Confidence in grand philosophical systems wavered and fragmented in several directions. Mill's utilitarianism proposed \"the greatest happiness for the greatest number\" as an ethical standard, Marx sought to turn philosophy from interpreting the world toward changing it, and Kierkegaard and Nietzsche each, in different ways, questioned individual existence and inherited value systems.",
    },
    keyEvents: [
      { year: 1859, label: { ko: "밀, 「자유론」 출간", en: "Mill publishes On Liberty" } },
      { year: 1867, label: { ko: "마르크스, 「자본론」 1권 출간", en: "Marx publishes volume one of Capital" } },
      { year: 1883, label: { ko: "니체, 「차라투스트라는 이렇게 말했다」 집필 시작", en: "Nietzsche begins writing Thus Spoke Zarathustra" } },
    ],
    color: "#8a4a4a",
  },
  {
    id: "phenomenology-existentialism",
    name: { ko: "현상학·실존주의", en: "Phenomenology & Existentialism" },
    startYear: 1900,
    endYear: 1970,
    peakStart: 1927,
    peakEnd: 1960,
    summary: {
      ko: "후설이 \"사태 자체로\"라는 구호 아래 의식에 드러나는 경험을 엄밀하게 기술하려 했고, 하이데거는 존재의 의미를 묻는 질문으로 서양 형이상학 전체를 다시 검토했다. 사르트르와 카뮈는 이 흐름을 \"실존이 본질에 앞선다\"는 대중적 실존주의로 확장했다 — 이 인물들과 저작은 LiteratureCurve의 '전후·실존주의 문학' 장과도 겹친다.",
      en: "Husserl sought to rigorously describe experience as it appears to consciousness under the slogan \"to the things themselves,\" while Heidegger reexamined the whole of Western metaphysics through the question of the meaning of being. Sartre and Camus extended this into a popular existentialism summed up as \"existence precedes essence\" — these figures and works also overlap with LiteratureCurve's \"Postwar & Existentialist Literature\" chapter.",
    },
    keyEvents: [
      { year: 1913, label: { ko: "후설, 「순수현상학과 현상학적 철학의 이념들」 출간", en: "Husserl publishes Ideas Pertaining to a Pure Phenomenology" } },
      { year: 1927, label: { ko: "하이데거, 「존재와 시간」 출간", en: "Heidegger publishes Being and Time" } },
      { year: 1943, label: { ko: "사르트르, 「존재와 무」 출간", en: "Sartre publishes Being and Nothingness" } },
    ],
    color: "#4a8a6a",
  },
  {
    id: "analytic-philosophy",
    name: { ko: "분석철학", en: "Analytic Philosophy" },
    startYear: 1900,
    endYear: 1970,
    peakStart: 1921,
    peakEnd: 1953,
    summary: {
      ko: "프레게와 러셀이 수학의 기초를 논리로 엄밀하게 다시 세우려 하면서, 철학의 문제 다수가 언어의 혼동에서 비롯된다는 생각이 자리잡은 시기. 비트겐슈타인은 전기와 후기에 걸쳐 이 흐름 자체를 스스로 비판하며 분석철학의 방향을 두 번 바꿔놓았다.",
      en: "As Frege and Russell sought to rigorously rebuild the foundations of mathematics in logic, the idea took hold that many philosophical problems stem from confusions of language. Wittgenstein, across his early and later work, critiqued this very movement from within and redirected analytic philosophy twice.",
    },
    keyEvents: [
      { year: 1903, label: { ko: "러셀, 「수학의 원리」 출간", en: "Russell publishes The Principles of Mathematics" } },
      { year: 1921, label: { ko: "비트겐슈타인, 「논리철학논고」 출간", en: "Wittgenstein publishes the Tractatus Logico-Philosophicus" } },
      { year: 1953, label: { ko: "비트겐슈타인, 「철학적 탐구」 사후 출간", en: "Wittgenstein's Philosophical Investigations is published posthumously" } },
    ],
    color: "#4a6a4a",
  },
  {
    id: "postmodern-philosophy",
    name: { ko: "포스트모던 철학", en: "Postmodern Philosophy" },
    startYear: 1960,
    endYear: 2000,
    peakStart: 1966,
    peakEnd: 1980,
    summary: {
      ko: "푸코가 지식과 권력이 서로를 만들어낸다고 분석하고, 데리다는 텍스트의 고정된 의미 자체를 해체하려 한 시기. 거대한 하나의 진리 체계를 세우기보다 그런 체계가 어떻게 만들어지고 배제를 낳는지를 드러내는 쪽으로 철학의 관심이 옮겨갔다 — LiteratureCurve의 '포스트모던 문학' 장과 문제의식을 공유한다.",
      en: "Foucault analyzed how knowledge and power produce each other, while Derrida sought to deconstruct the very idea of a text's fixed meaning. Philosophy's attention shifted from building one grand system of truth toward exposing how such systems are constructed and what they exclude — a concern it shares with LiteratureCurve's \"Postmodern Literature\" chapter.",
    },
    keyEvents: [
      { year: 1966, label: { ko: "푸코, 「말과 사물」 출간", en: "Foucault publishes The Order of Things" } },
      { year: 1967, label: { ko: "데리다, 「그라마톨로지」 출간", en: "Derrida publishes Of Grammatology" } },
      { year: 1979, label: { ko: "리오타르, 「포스트모던의 조건」 출간", en: "Lyotard publishes The Postmodern Condition" } },
    ],
    color: "#9c4a7a",
  },
  {
    id: "contemporary-philosophy-of-mind-ai-ethics",
    name: { ko: "현대 심리철학·AI 윤리", en: "Contemporary Philosophy of Mind & AI Ethics" },
    startYear: 2000,
    endYear: 2026,
    peakStart: 2000,
    peakEnd: 2026,
    ongoing: true,
    summary: {
      ko: "의식이 무엇인지, 기계가 생각할 수 있는지를 묻던 오래된 질문이 실제로 작동하는 AI 시스템을 마주하면서 구체적인 윤리적·존재론적 문제로 바뀐 시기. 자율성·책임·도덕적 지위 같은 개념을 인간 아닌 행위자에게 어떻게 적용할지가 아직 해결되지 않은 채, 이 장은 현재진행형으로 쓰이고 있다. TechCurve/ScienceCurve의 AI 엔트리와 주제가 겹치지만, 여기서는 기술 자체가 아니라 그것이 제기하는 철학적 질문을 다룬다.",
      en: "Old questions about what consciousness is and whether machines can think have turned into concrete ethical and ontological problems now that real AI systems exist. How to apply concepts like autonomy, responsibility, and moral status to non-human agents remains unresolved, and this chapter is still being written in real time. It overlaps in topic with the AI entries in TechCurve and ScienceCurve, but focuses on the philosophical questions those technologies raise rather than the technology itself.",
    },
    keyEvents: [
      { year: 2014, label: { ko: "보스트롬, 「슈퍼인텔리전스」 출간", en: "Bostrom publishes Superintelligence" } },
      { year: 2022, label: { ko: "ChatGPT 공개, 기계의 이해·의식을 둘러싼 논쟁 재점화", en: "ChatGPT launches, reigniting debate over machine understanding and consciousness" } },
      { year: 2024, label: { ko: "주요 기관, AI 윤리·거버넌스 원칙 발표 확산", en: "Major institutions increasingly publish AI ethics and governance principles" } },
    ],
    color: "#b05a6a",
  },
];

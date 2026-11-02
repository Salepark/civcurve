// JudaismCurve dataset — 21 entries, single chronological lane (no lane separation).
//
// REVISED 2026-11-02 after Louis's correction: the original v1 draft started
// at 70 CE (Second Temple destruction), reasoning that the biblical/ancient
// Israelite period was already covered as background in FaithCurve and
// WorldReligionsCurve. Louis correctly pushed back — unlike Christianity
// (which is genuinely new relative to Judaism and can reasonably start its
// own deep dive at the 1st century CE), Judaism's entire identity is built on
// the Torah/Tanakh. The patriarchal narratives, Exodus, Sinai covenant, the
// monarchy, the prophets, and the First Temple are not "background" for
// Judaism — they ARE Judaism's own foundational history, in a way they are
// not for any of the other three deep-dive religions (whose own founders/
// origin points come much later: Muhammad, the Buddha, Vedic-era sages, none
// of whom treat the Hebrew Bible period as their own origin story). On
// inspection, FaithCurve covers this period only through a Christian/
// church-history lens (leading toward the New Testament and the church), and
// WorldReligionsCurve's Judaism lane is a single compressed overview band —
// neither gives this period a dedicated, Judaism-centered treatment. So this
// revision prepends 8 new chapters covering patriarchal era through Herodian
// Judea before the original 13 post-70-CE chapters (kept unchanged).
//
// Design principles (updated):
// - Single-lane structure (same pattern as HinduismCurve): no single clean
//   schism point like Karbala (IslamCurve) or two-stage branching like
//   Theravada/Mahayana/Vajrayana (BuddhismCurve). Ashkenazi/Sephardi/Mizrahi
//   are geographic-cultural traditions, not doctrinal splits; modern
//   Orthodox/Conservative/Reform movements only emerge in the 19th century.
// - Religious/philosophical focus, WITH ONE EXPLICIT EXCEPTION: unlike the
//   other three deep dives, where empire/political history (Mauryan, Tang,
//   Ottoman, etc.) is pure background because it's incidental to the
//   religion's own story, the kingdom period of ancient Israel (United
//   Monarchy, Divided Kingdom) is NOT incidental background for Judaism — it
//   is itself core covenantal/religious history (the biblical historical
//   books are scripture, not secular political record), so it is given full
//   chapters rather than being compressed into a footnote. Later purely
//   political history (Rome, the Crusades, European nation-states) remains
//   background-only, consistent with the other deep dives.
// - Disputed/traditional dates are explicitly hedged against modern scholarly
//   views throughout: the patriarchal narratives' historicity is widely
//   debated among scholars (some treat them as later literary/theological
//   tradition rather than discrete Bronze Age events); the Exodus date is
//   given as the traditional 1500–1200 BCE range without choosing between
//   the early-date and late-date theories — the same range and the same
//   hedge FaithCurve already uses for consistency across datasets; the
//   historical extent of the United Monarchy is debated between
//   "maximalist" and "minimalist" readings of the archaeological record.
// - Zionism is included as its own chapter (not just background) for its
//   centrality to modern Jewish identity, explicitly neutralized to note
//   secular-nationalist and religious streams that have not always agreed.
// - The Zohar's attribution to the 2nd-century sage Shimon bar Yochai is
//   hedged against the modern scholarly view that treats it as a medieval
//   composition, per the precedent in WorldReligionsCurve/HinduismCurve/
//   BuddhismCurve.
//
// This is now CivCurve's longest-spanning dataset by far — c. 2000 BCE to
// 2026 CE, roughly 4,000 years — surpassing HinduismCurve's previous record
// (-1500 to present).

import { Civilization } from "./civilizations";

export const judaismHistory: Civilization[] = [
  {
    id: "patriarchal-era-and-the-abrahamic-covenant",
    name: {
      en: "The Patriarchal Era and the Abrahamic Covenant",
      ko: "족장시대와 아브라함 언약",
    },
    startYear: -2000,
    endYear: -1700,
    peakStart: -2000,
    peakEnd: -1700,
    summary: {
      en: "The book of Genesis traces Jewish origins to Abraham, who according to tradition left Mesopotamia and entered into a covenant with God promising land and descendants — a promise renewed with his son Isaac and grandson Jacob (renamed Israel), whose twelve sons became the traditional ancestors of the twelve tribes. These dates follow traditional biblical chronology; the historicity of the patriarchal narratives as discrete Bronze Age events is widely debated among scholars, with many treating them as later literary and theological traditions rather than straightforward historical record. Regardless of historicity, the Abrahamic covenant remains the foundational self-understanding from which all later Jewish history is told.",
      ko: "창세기는 유대인의 기원을 아브라함에게서 찾는다 — 전승에 따르면 그는 메소포타미아를 떠나 땅과 자손에 대한 약속을 담은 하나님과의 언약을 맺었고, 이 약속은 아들 이삭과 손자 야곱(이스라엘로 개명)에게로 갱신되었으며, 야곱의 열두 아들은 전통적으로 열두 지파의 조상이 되었다. 이 연대는 전통적 성서 연대기를 따른 것이며, 족장 설화가 청동기 시대의 구체적 사건이었는지는 학계에서 폭넓게 논쟁되는 영역으로, 다수 학자는 이를 후대의 문학적·신학적 전승으로 본다. 역사성과 무관하게, 아브라함 언약은 이후 모든 유대 역사가 서술되는 근본적 자기 이해로 남아 있다.",
    },
    keyEvents: [
      {
        year: -2000,
        label: {
          en: "Traditional date for Abraham's covenant and migration to Canaan",
          ko: "아브라함 언약과 가나안 이주의 전통적 연대",
        },
      },
      {
        year: -1850,
        label: {
          en: "Covenant renewed with Isaac and Jacob, traditional ancestors of the twelve tribes",
          ko: "이삭·야곱에게 언약이 갱신됨, 열두 지파의 전통적 조상",
        },
      },
      {
        year: -1700,
        label: {
          en: "Traditional narrative places Jacob's family settling in Egypt",
          ko: "전승에 따르면 야곱의 가족이 이집트에 정착",
        },
      },
    ],
    color: "#a68a5a",
  },
  {
    id: "exodus-and-the-sinai-covenant",
    name: {
      en: "The Exodus and the Sinai Covenant",
      ko: "출애굽과 시내산 언약",
    },
    startYear: -1500,
    endYear: -1200,
    peakStart: -1500,
    peakEnd: -1200,
    summary: {
      en: "Tradition holds that Moses led the Israelites out of slavery in Egypt and received the Torah at Mount Sinai, establishing the covenant and law that would define Jewish religious identity ever after. As with FaithCurve's treatment of the same event, the date is left unresolved between the early-date theory (c. 1446 BCE) and the late-date theory (c. 1250 BCE), shown here as the full 1500–1200 BCE range rather than choosing one. Whatever its precise historical shape, the Exodus and the giving of the Torah at Sinai are the central reference point of Jewish self-understanding — commemorated yearly at Passover and invoked throughout later Jewish law, liturgy, and thought.",
      ko: "전승에 따르면 모세는 이스라엘 백성을 이집트의 노예 상태에서 이끌어냈고, 시내산에서 토라를 받아 이후 유대 종교 정체성을 규정하는 언약과 율법을 세웠다. FaithCurve가 같은 사건을 다룰 때와 마찬가지로, 이른 연대설(약 기원전 1446년)과 늦은 연대설(약 기원전 1250년) 중 하나를 택하지 않고 기원전 1500~1200년 전체 범위로 표시했다. 정확한 역사적 실체가 무엇이었든, 출애굽과 시내산에서의 토라 수여는 유대 자기 이해의 중심 준거점으로, 매년 유월절로 기념되며 이후 유대 율법·전례·사상 전반에서 계속 환기된다.",
    },
    keyEvents: [
      {
        year: -1446,
        label: { en: "Early-date theory for the Exodus from Egypt", ko: "출애굽의 이른 연대설" },
      },
      {
        year: -1250,
        label: { en: "Late-date theory for the Exodus from Egypt", ko: "출애굽의 늦은 연대설" },
      },
      {
        year: -1200,
        label: {
          en: "Traditional giving of the Torah at Mount Sinai and the wilderness covenant",
          ko: "시내산에서 토라 수여와 광야 언약의 전통적 연대",
        },
      },
    ],
    color: "#9a7a3a",
  },
  {
    id: "settlement-judges-and-the-united-monarchy",
    name: {
      en: "Settlement, the Judges, and the United Monarchy",
      ko: "정착·사사시대와 통일왕국",
    },
    startYear: -1200,
    endYear: -930,
    peakStart: -1020,
    peakEnd: -930,
    summary: {
      en: "After settling in Canaan, the Israelite tribes were led for generations by charismatic judges before uniting under a monarchy. Saul became the first king, followed by David, who established Jerusalem as the political and spiritual capital, and Solomon, who built the First Temple (traditionally dedicated c. 960 BCE) as the central site of sacrificial worship. The historical extent of this 'United Monarchy' is debated among archaeologists and biblical scholars, with readings ranging from a substantial regional kingdom to a more modest chiefdom — but the biblical account of Jerusalem and the Temple as the center of Israelite worship became foundational to all later Jewish practice and longing.",
      ko: "가나안 정착 이후 이스라엘 지파들은 여러 세대 동안 카리스마적 사사들의 지도를 받다가 왕정으로 통합되었다. 사울이 첫 왕이 되었고, 뒤이어 다윗이 예루살렘을 정치·영적 수도로 세웠으며, 솔로몬이 희생 제의의 중심지인 제1성전을 건축했다(전통적으로 약 기원전 960년 봉헌). 이 '통일왕국'의 실제 규모는 고고학자와 성서학자들 사이에서 논쟁적인 영역으로, 상당한 지역 왕국이었다는 견해부터 더 소박한 추장 사회였다는 견해까지 다양하다 — 그러나 예루살렘과 성전을 이스라엘 예배의 중심으로 보는 성서적 서술은 이후 모든 유대 관행과 염원의 토대가 되었다.",
    },
    keyEvents: [
      {
        year: -1200,
        label: {
          en: "Israelite tribal settlement in Canaan and the period of the Judges begins",
          ko: "가나안에서 이스라엘 지파 정착과 사사시대 시작",
        },
      },
      {
        year: -1010,
        label: { en: "David becomes king and establishes Jerusalem as capital", ko: "다윗이 왕위에 올라 예루살렘을 수도로 세움" },
      },
      {
        year: -960,
        label: {
          en: "Solomon dedicates the First Temple in Jerusalem (traditional date)",
          ko: "솔로몬이 예루살렘 제1성전을 봉헌(전통적 연대)",
        },
      },
    ],
    color: "#8a9a5a",
  },
  {
    id: "divided-kingdom-and-the-classical-prophets",
    name: {
      en: "The Divided Kingdom and the Classical Prophets",
      ko: "분열왕국과 고전 예언자들",
    },
    startYear: -930,
    endYear: -586,
    peakStart: -800,
    peakEnd: -722,
    summary: {
      en: "After Solomon's death, the kingdom split into Israel in the north and Judah in the south. This period produced the classical prophets — Amos, Hosea, Isaiah, Jeremiah, and others — whose calls for covenant faithfulness, social justice, and exclusive worship of YHWH shaped the moral and theological vocabulary of Judaism and, later, Christianity and Islam. The northern kingdom of Israel fell to Assyria in 722 BCE, its population scattered (the traditional 'Ten Lost Tribes'); the southern kingdom of Judah survived another century and a half before facing the Babylonian threat that would end the First Temple period.",
      ko: "솔로몬 사후 왕국은 북쪽 이스라엘과 남쪽 유다로 분열되었다. 이 시기에 아모스·호세아·이사야·예레미야 등 고전 예언자들이 등장해 언약에 대한 신실함, 사회 정의, 야훼에 대한 배타적 예배를 촉구했고, 이는 유대교는 물론 이후 기독교·이슬람의 도덕적·신학적 어휘를 형성했다. 북이스라엘 왕국은 기원전 722년 아시리아에 멸망해 주민이 흩어졌다(전통적으로 '사라진 열 지파'로 불림). 남쪽 유다 왕국은 그로부터 한 세기 반을 더 버텼지만, 결국 제1성전 시대를 끝낼 바빌로니아의 위협에 직면했다.",
    },
    keyEvents: [
      {
        year: -930,
        label: {
          en: "Kingdom splits into Israel (north) and Judah (south)",
          ko: "왕국이 북이스라엘과 남유다로 분열",
        },
      },
      {
        year: -760,
        label: {
          en: "Classical prophetic movement flourishes (Amos, Hosea, Isaiah)",
          ko: "고전 예언 운동 융성(아모스·호세아·이사야)",
        },
      },
      {
        year: -722,
        label: { en: "Assyria conquers the northern kingdom of Israel", ko: "아시리아가 북이스라엘 왕국을 정복" },
      },
    ],
    color: "#7a8a4a",
  },
  {
    id: "babylonian-exile-and-destruction-of-first-temple",
    name: {
      en: "The Babylonian Exile and Destruction of the First Temple",
      ko: "바빌론 유수와 제1성전 파괴",
    },
    startYear: -586,
    endYear: -538,
    peakStart: -586,
    peakEnd: -538,
    summary: {
      en: "In 586 BCE, Babylonian forces under Nebuchadnezzar II destroyed Jerusalem and the First Temple, deporting much of Judah's population to Babylon. The exile forced a profound theological reckoning — without Temple or land, prophets such as Ezekiel reframed Jewish identity around Torah observance, prayer, and communal gathering, laying groundwork for practices that would later define rabbinic Judaism. The exile ended when the Persian king Cyrus the Great, having conquered Babylon, issued an edict in 538 BCE permitting Jews to return to Judah and rebuild the Temple.",
      ko: "기원전 586년, 느부갓네살 2세 휘하의 바빌로니아군이 예루살렘과 제1성전을 파괴하고 유다 인구 상당수를 바빌론으로 추방했다. 유배는 깊은 신학적 재검토를 강요했다 — 성전도 땅도 없는 상황에서 에스겔 같은 예언자들은 토라 준수·기도·공동체 모임을 중심으로 유대 정체성을 재구성했고, 이는 훗날 랍비 유대교를 규정하게 될 관행들의 토대가 되었다. 유배는 바빌론을 정복한 페르시아 왕 키루스 대왕이 기원전 538년 유다인의 귀환과 성전 재건을 허락하는 칙령을 내리면서 끝났다.",
    },
    keyEvents: [
      {
        year: -586,
        label: {
          en: "Nebuchadnezzar II destroys Jerusalem and the First Temple",
          ko: "느부갓네살 2세가 예루살렘과 제1성전을 파괴",
        },
      },
      {
        year: -570,
        label: { en: "Ezekiel and other exilic prophets reframe Jewish religious identity", ko: "에스겔 등 유배기 예언자들이 유대 종교 정체성을 재구성" },
      },
      {
        year: -538,
        label: { en: "Cyrus the Great's edict permits the return to Judah", ko: "키루스 대왕의 칙령으로 유다 귀환 허용" },
      },
    ],
    color: "#6a5a4a",
  },
  {
    id: "return-from-exile-and-second-temple-reconstruction",
    name: {
      en: "Return from Exile and the Second Temple Era",
      ko: "유배 귀환과 제2성전 시대",
    },
    startYear: -538,
    endYear: -332,
    peakStart: -516,
    peakEnd: -400,
    summary: {
      en: "Jews returning from Babylon under Zerubbabel rebuilt the Temple, dedicated in 516 BCE. Ezra and Nehemiah led further religious and civic reforms in the following century, publicly reading and renewing commitment to the Torah and reconstructing Jerusalem's walls — a period traditionally associated with the formal closing of the Torah's text and the broader process that would eventually produce the Hebrew Bible canon. Judah remained a modest Persian-ruled province (Yehud) throughout this period, its religious life organized around Temple worship in Jerusalem.",
      ko: "바빌론에서 스룹바벨을 따라 귀환한 유대인들은 성전을 재건해 기원전 516년 봉헌했다. 그 다음 세기 에스라와 느헤미야는 추가적인 종교·시민적 개혁을 이끌어, 토라를 공개적으로 낭독하고 그에 대한 헌신을 갱신했으며 예루살렘 성벽을 재건했다 — 이 시기는 전통적으로 토라 본문의 공식적 완성과, 훗날 히브리 성서 정경을 낳게 될 더 넓은 과정과 연관된다. 이 기간 내내 유다는 페르시아 통치하의 소박한 속주(예후드)로 남았고, 종교 생활은 예루살렘 성전 예배를 중심으로 조직되었다.",
    },
    keyEvents: [
      {
        year: -516,
        label: { en: "Second Temple dedicated in Jerusalem", ko: "예루살렘에서 제2성전 봉헌" },
      },
      {
        year: -445,
        label: {
          en: "Nehemiah rebuilds Jerusalem's walls; Ezra renews public Torah observance",
          ko: "느헤미야가 예루살렘 성벽을 재건, 에스라가 공개적 토라 준수를 갱신",
        },
      },
      {
        year: -400,
        label: {
          en: "Formal closing of the Torah text, part of the broader canonization process",
          ko: "토라 본문의 공식적 완성, 더 넓은 정경화 과정의 일부",
        },
      },
    ],
    color: "#8a7a6a",
  },
  {
    id: "hellenistic-period-and-the-hasmonean-revolt",
    name: {
      en: "The Hellenistic Period and the Hasmonean Revolt",
      ko: "헬레니즘 시대와 하스몬 반란",
    },
    startYear: -332,
    endYear: -63,
    peakStart: -167,
    peakEnd: -63,
    summary: {
      en: "Alexander's conquest brought Judea under Hellenistic rule, first Ptolemaic, then Seleucid. When the Seleucid king Antiochus IV Epiphanes desecrated the Temple and banned Jewish religious practice, Judah Maccabee led a successful revolt (167–160 BCE), rededicating the Temple in 164 BCE — the origin of Hanukkah — and establishing the independent Hasmonean kingdom. This period also saw the emergence of the major Second Temple religious parties (Pharisees, Sadducees, and Essenes) whose debates over law, resurrection, and Temple authority would shape the religious landscape into the Roman period.",
      ko: "알렉산드로스의 정복으로 유다는 헬레니즘 통치 아래 들어갔다 — 처음엔 프톨레마이오스 왕조, 이후 셀레우코스 왕조. 셀레우코스 왕 안티오코스 4세 에피파네스가 성전을 모독하고 유대 종교 관행을 금지하자, 유다 마카베오가 성공적인 반란(기원전 167~160년)을 이끌어 기원전 164년 성전을 재봉헌했다 — 하누카의 기원이다 — 그리고 독립적인 하스몬 왕국을 세웠다. 이 시기에는 또한 제2성전 시대의 주요 종교 분파(바리새파·사두개파·에세네파)가 등장했고, 율법·부활·성전 권위를 둘러싼 이들의 논쟁은 로마 시대까지 종교 지형을 형성했다.",
    },
    keyEvents: [
      {
        year: -332,
        label: { en: "Alexander the Great's conquest brings Judea under Hellenistic rule", ko: "알렉산드로스 대왕의 정복으로 유다가 헬레니즘 통치 아래 편입" },
      },
      {
        year: -167,
        label: {
          en: "Antiochus IV's persecution sparks the Maccabean revolt",
          ko: "안티오코스 4세의 박해로 마카베오 반란 발발",
        },
      },
      {
        year: -164,
        label: { en: "Temple rededicated; origin of Hanukkah", ko: "성전 재봉헌, 하누카의 기원" },
      },
    ],
    color: "#9a6a3a",
  },
  {
    id: "herodian-judea-and-the-eve-of-the-jewish-revolt",
    name: {
      en: "Herodian Judea and the Eve of the Jewish Revolt",
      ko: "헤롯 치하 유대와 유대 반란 전야",
    },
    startYear: -63,
    endYear: 66,
    peakStart: -20,
    peakEnd: 44,
    summary: {
      en: "The Roman general Pompey's conquest of Jerusalem in 63 BCE ended Hasmonean independence and brought Judea into Rome's orbit. Herod the Great, installed as a Roman client king, undertook a massive expansion of the Second Temple beginning around 20 BCE, making it one of the ancient world's largest religious complexes even as his rule — and the direct Roman administration that followed his death — bred deep political and religious resentment. Messianic expectation, Pharisaic and Zealot activity, and recurring friction with Roman governors intensified through the early 1st century CE, setting the stage for the revolt of 66 CE.",
      ko: "기원전 63년 로마 장군 폼페이우스의 예루살렘 정복으로 하스몬 왕국의 독립이 끝나고 유다는 로마의 영향권에 들어갔다. 로마의 봉신왕으로 즉위한 헤롯 대왕은 약 기원전 20년부터 제2성전의 대대적 확장 공사를 시작해 고대 세계 최대 규모의 종교 건축물 중 하나로 만들었지만, 그의 통치와 그의 사후 이어진 로마의 직접 통치는 깊은 정치적·종교적 반감을 낳았다. 메시아적 기대, 바리새파·열심당의 활동, 로마 총독들과의 거듭된 마찰이 기원후 1세기 초반까지 격화되며 기원후 66년 반란의 무대를 마련했다.",
    },
    keyEvents: [
      {
        year: -63,
        label: { en: "Pompey conquers Jerusalem, ending Hasmonean independence", ko: "폼페이우스가 예루살렘을 정복, 하스몬 독립 종식" },
      },
      {
        year: -20,
        label: { en: "Herod the Great begins his massive expansion of the Second Temple", ko: "헤롯 대왕이 제2성전의 대대적 확장 공사 시작" },
      },
      {
        year: 6,
        label: { en: "Judea comes under direct Roman provincial administration", ko: "유다가 로마의 직접적인 속주 통치 아래 편입" },
      },
    ],
    color: "#8a6a4a",
  },
  {
    id: "destruction-of-second-temple-and-rise-of-rabbinic-judaism",
    name: {
      en: "Destruction of the Second Temple and the Rise of Rabbinic Judaism",
      ko: "제2성전 파괴와 랍비 유대교의 대두",
    },
    startYear: 66,
    endYear: 135,
    peakStart: 70,
    peakEnd: 135,
    summary: {
      en: "The failed Jewish revolt against Rome (66–73 CE) ended with the destruction of the Second Temple in Jerusalem in 70 CE, removing the priestly sacrificial system that had anchored Jewish religious life for centuries. At Yavneh, Rabbi Yohanan ben Zakkai and his successors reorganized Jewish practice around Torah study, prayer, and the synagogue rather than Temple sacrifice — the foundation of what would become rabbinic Judaism. The Bar Kokhba revolt (132–135 CE) and its crushing defeat ended realistic hopes of a near-term return to Temple worship, cementing this shift as permanent rather than provisional.",
      ko: "로마에 대한 유대 반란(66–73년)은 기원후 70년 예루살렘 제2성전 파괴로 끝났고, 수세기 동안 유대 종교 생활의 중심이었던 제사장 중심 희생 제의 체계가 사라졌다. 야브네에서 요하난 벤 자카이와 그 후계자들은 성전 희생 대신 토라 연구·기도·회당을 중심으로 유대 관행을 재편했다 — 이것이 랍비 유대교의 토대가 되었다. 바르 코크바 반란(132–135년)의 참패는 가까운 시일 내 성전 예배 회복에 대한 현실적 기대를 끝냈고, 이 전환을 임시가 아닌 영구적인 것으로 굳혔다.",
    },
    keyEvents: [
      {
        year: 70,
        label: {
          en: "Second Temple destroyed by Roman forces under Titus",
          ko: "티투스 휘하 로마군이 제2성전 파괴",
        },
      },
      {
        year: 90,
        label: {
          en: "Yohanan ben Zakkai's academy at Yavneh reorganizes Jewish practice",
          ko: "요하난 벤 자카이의 야브네 학당이 유대 관행을 재편",
        },
      },
      {
        year: 135,
        label: {
          en: "Bar Kokhba revolt crushed; Jews barred from Jerusalem",
          ko: "바르 코크바 반란 진압, 유대인 예루살렘 출입 금지",
        },
      },
    ],
    color: "#8a6a3a",
  },
  {
    id: "mishnah-and-talmudic-literature",
    name: {
      en: "The Mishnah and Talmudic Literature",
      ko: "미쉬나와 탈무드 문헌",
    },
    startYear: 200,
    endYear: 500,
    peakStart: 200,
    peakEnd: 500,
    summary: {
      en: "Rabbinic oral tradition, developed over generations by the Tannaim, was codified around 200 CE by Judah ha-Nasi as the Mishnah — a structured legal code organized by topic. Subsequent generations of rabbis (the Amoraim) debated and expanded the Mishnah in the academies of Palestine and Babylonia, producing the Jerusalem Talmud (completed c. 400) and the more authoritative Babylonian Talmud (completed c. 500–600). Together the Mishnah and its commentary (Gemara) became the central text of rabbinic Judaism, interweaving law (halakha) and narrative/ethical teaching (aggadah).",
      ko: "여러 세대에 걸쳐 탄나임(초기 랍비들)이 발전시킨 구전 전통은 기원후 약 200년 유다 하나시에 의해 주제별로 정리된 법전인 미쉬나로 성문화되었다. 이후 아모라임(후대 랍비들)이 팔레스타인과 바빌로니아 학당에서 미쉬나를 두고 토론·확장하며 예루살렘 탈무드(약 400년 완성)와 더 권위 있는 바빌로니아 탈무드(약 500–600년 완성)를 만들어냈다. 미쉬나와 그 주석(게마라)은 함께 랍비 유대교의 중심 문헌이 되어 율법(할라카)과 서사·윤리적 가르침(아가다)을 엮어냈다.",
    },
    keyEvents: [
      {
        year: 200,
        label: { en: "Judah ha-Nasi redacts the Mishnah", ko: "유다 하나시가 미쉬나를 편찬" },
      },
      {
        year: 400,
        label: {
          en: "Jerusalem Talmud substantially completed",
          ko: "예루살렘 탈무드 대체로 완성",
        },
      },
      {
        year: 500,
        label: {
          en: "Babylonian Talmud reaches its core form",
          ko: "바빌로니아 탈무드 핵심 형태 완성",
        },
      },
    ],
    color: "#7a7a4a",
  },
  {
    id: "geonic-period-and-babylonian-academies",
    name: {
      en: "The Geonic Period and the Babylonian Academies",
      ko: "게오님 시대와 바빌로니아 학당",
    },
    startYear: 589,
    endYear: 1038,
    peakStart: 700,
    peakEnd: 1000,
    summary: {
      en: "The Geonim — heads of the Babylonian academies of Sura and Pumbedita — served for over four centuries as the most authoritative interpreters of Talmudic law for Jewish communities from Spain to Persia. Their responsa (written answers to legal questions submitted by distant communities) standardized Jewish practice across the diaspora and established Babylonian Jewry, rather than the Land of Israel, as the center of rabbinic authority for the period. Saadia Gaon (882–942), the most influential Gaon, also pioneered the application of philosophical reasoning to Jewish theology.",
      ko: "바빌로니아 수라와 품베디타 학당의 수장인 게오님은 400여 년간 스페인에서 페르시아에 이르는 유대 공동체에서 탈무드 율법의 가장 권위 있는 해석자 역할을 했다. 먼 공동체가 보내온 법적 질문에 대한 서면 답변인 레스폰사(응답서)는 디아스포라 전역의 유대 관행을 표준화했고, 이 시기 랍비 권위의 중심을 이스라엘 땅이 아닌 바빌로니아 유대 공동체로 확립했다. 가장 영향력 있는 가온이었던 사아디아 가온(882–942)은 유대 신학에 철학적 추론을 적용한 선구자이기도 했다.",
    },
    keyEvents: [
      {
        year: 589,
        label: {
          en: "Sura and Pumbedita academies formally recognized as Geonic seats",
          ko: "수라·품베디타 학당이 게오님의 공식 거점으로 인정됨",
        },
      },
      {
        year: 928,
        label: {
          en: "Saadia Gaon becomes head of the Sura academy",
          ko: "사아디아 가온이 수라 학당의 수장이 됨",
        },
      },
      {
        year: 1038,
        label: {
          en: "Death of Hai Gaon marks the close of the classical Geonic period",
          ko: "하이 가온 사망으로 고전 게오님 시대가 저문다",
        },
      },
    ],
    color: "#6a8a6a",
  },
  {
    id: "medieval-jewish-philosophy",
    name: {
      en: "Medieval Jewish Philosophy",
      ko: "중세 유대 철학",
    },
    startYear: 933,
    endYear: 1204,
    peakStart: 1000,
    peakEnd: 1200,
    summary: {
      en: "Jewish thinkers across the Islamic and Christian worlds engaged Greek and Arabic philosophy to systematize Jewish belief. Saadia Gaon's Emunot ve-Deot (933) was an early synthesis of rationalist theology; Judah Halevi's Kuzari (c. 1140) defended Jewish particularism against philosophy's universalism; and Moses Maimonides produced both the comprehensive legal code Mishneh Torah (completed 1180) and the philosophical Guide for the Perplexed (completed 1190), reconciling Aristotelian reason with Torah in a synthesis that would shape Jewish thought for centuries and provoke controversy within the tradition itself.",
      ko: "이슬람권과 기독교권의 유대 사상가들은 그리스·아랍 철학을 끌어들여 유대 신앙을 체계화했다. 사아디아 가온의 《에무노트 베데오트》(933)는 초기 합리주의 신학의 종합이었고, 유다 할레비의 《쿠자리》(약 1140)는 철학의 보편주의에 맞서 유대적 특수성을 옹호했다. 모세 마이모니데스는 방대한 법전 《미쉬네 토라》(1180년 완성)와 철학서 《방황하는 자들을 위한 안내서》(1190년 완성)를 모두 남겨 아리스토텔레스적 이성과 토라를 조화시키는 종합을 이루었고, 이는 이후 수세기 유대 사상을 형성하면서도 전통 내부에서 논쟁을 낳았다.",
    },
    keyEvents: [
      {
        year: 933,
        label: {
          en: "Saadia Gaon completes Emunot ve-Deot (Beliefs and Opinions)",
          ko: "사아디아 가온이 《에무노트 베데오트》 완성",
        },
      },
      {
        year: 1140,
        label: { en: "Judah Halevi completes the Kuzari", ko: "유다 할레비가 《쿠자리》 완성" },
      },
      {
        year: 1190,
        label: {
          en: "Maimonides completes the Guide for the Perplexed",
          ko: "마이모니데스가 《방황하는 자들을 위한 안내서》 완성",
        },
      },
    ],
    color: "#9a6a4a",
  },
  {
    id: "sephardic-golden-age-and-the-expulsion",
    name: {
      en: "The Sephardic Golden Age and the Expulsion",
      ko: "세파르디 황금기와 추방",
    },
    startYear: 950,
    endYear: 1497,
    peakStart: 1000,
    peakEnd: 1200,
    summary: {
      en: "Under Muslim rule in al-Andalus, Jewish communities experienced a period of cultural flourishing — poetry, philosophy, grammar, medicine, and science developed alongside a revival of Hebrew literature, with figures such as Samuel ha-Nagid active in both Jewish and broader intellectual life. The Reconquista's advance and growing religious pressure eroded this position; the Alhambra Decree of 1492 expelled Jews from Spain who would not convert, followed by Portugal's expulsion in 1497. Sephardic Jews resettled across the Ottoman Empire, North Africa, and later the Netherlands, carrying Judeo-Spanish (Ladino) culture into a new diaspora.",
      ko: "알안달루스의 이슬람 통치 아래 유대 공동체는 문화적 번영을 누렸다 — 시·철학·문법·의학·과학이 히브리 문학의 부흥과 함께 발전했고, 사무엘 하나기드 같은 인물들이 유대 지성계뿐 아니라 더 넓은 지적 활동에도 참여했다. 레콩키스타의 진전과 종교적 압박 증가로 이 위치는 흔들렸고, 1492년 알함브라 칙령은 개종하지 않는 유대인을 스페인에서 추방했으며 1497년 포르투갈의 추방이 뒤따랐다. 세파르디 유대인들은 오스만 제국·북아프리카, 이후 네덜란드로 재정착하며 유대-스페인어(라디노) 문화를 새로운 디아스포라로 가져갔다.",
    },
    keyEvents: [
      {
        year: 1056,
        label: {
          en: "Samuel ha-Nagid serves as vizier of Granada, exemplifying Jewish court influence",
          ko: "사무엘 하나기드가 그라나다의 재상으로 재직, 유대인의 궁정 영향력을 보여줌",
        },
      },
      {
        year: 1492,
        label: { en: "Alhambra Decree expels Jews from Spain", ko: "알함브라 칙령으로 스페인에서 유대인 추방" },
      },
      {
        year: 1497,
        label: {
          en: "Portugal forces conversion or expulsion of its Jewish population",
          ko: "포르투갈이 유대인에게 개종 또는 추방을 강요",
        },
      },
    ],
    color: "#8a5a6a",
  },
  {
    id: "ashkenazi-jewry-in-medieval-europe",
    name: {
      en: "Ashkenazi Jewry in Medieval Europe",
      ko: "중세 유럽의 아슈케나지 유대인",
    },
    startYear: 1000,
    endYear: 1500,
    peakStart: 1000,
    peakEnd: 1300,
    summary: {
      en: "Jewish communities in the Rhineland and northern France developed a distinct Ashkenazi culture and legal tradition, centered on Talmud scholarship. Rashi (1040–1105) produced commentaries on the Bible and Talmud that remain foundational study texts, and his grandsons and students (the Tosafists) extended Talmudic analysis through the 12th and 13th centuries. This period was repeatedly interrupted by violence — massacres accompanying the First Crusade (1096), blood libel accusations, and expulsions from England (1290) and France (1306, 1394) — that pushed Ashkenazi Jewry steadily eastward toward Poland-Lithuania.",
      ko: "라인란트와 북프랑스의 유대 공동체는 탈무드 연구를 중심으로 독자적인 아슈케나지 문화와 법 전통을 발전시켰다. 라시(1040–1105)는 성서와 탈무드에 대한 주석을 남겨 지금도 기본 학습 교재로 쓰이며, 그의 손자와 제자들(토사피스트)은 12~13세기에 걸쳐 탈무드 분석을 확장했다. 이 시기는 제1차 십자군(1096)을 동반한 학살, 피의 비방 사건, 영국(1290)과 프랑스(1306, 1394)로부터의 추방 같은 폭력으로 거듭 중단되었고, 이는 아슈케나지 유대인을 점차 동쪽 폴란드-리투아니아 방향으로 밀어냈다.",
    },
    keyEvents: [
      {
        year: 1096,
        label: {
          en: "First Crusade massacres devastate Rhineland Jewish communities",
          ko: "제1차 십자군의 학살로 라인란트 유대 공동체 황폐화",
        },
      },
      {
        year: 1105,
        label: {
          en: "Death of Rashi, whose commentaries become standard study texts",
          ko: "라시 사망, 그의 주석이 표준 학습 교재가 됨",
        },
      },
      {
        year: 1290,
        label: { en: "England expels its Jewish population", ko: "영국이 유대인을 추방" },
      },
    ],
    color: "#6a9a7a",
  },
  {
    id: "kabbalah-and-jewish-mysticism",
    name: {
      en: "Kabbalah and Jewish Mysticism",
      ko: "카발라와 유대 신비주의",
    },
    startYear: 1180,
    endYear: 1620,
    peakStart: 1280,
    peakEnd: 1600,
    summary: {
      en: "A mystical tradition examining the hidden structure of the divine and the soul developed alongside rabbinic legalism. The Zohar, the central text of Kabbalah, began circulating in Spain around 1280, principally through Moses de León, who presented it as an ancient work attributed to the 2nd-century sage Shimon bar Yochai — a traditional attribution modern scholarship generally treats as a medieval composition. After the Spanish expulsion, the town of Safed in the Galilee became a center of mystical renewal, where Isaac Luria (1534–1572) developed an influential new Kabbalistic system centered on cosmic exile and repair (tikkun) that would later shape Hasidic thought.",
      ko: "신성과 영혼의 숨겨진 구조를 탐구하는 신비주의 전통이 랍비 율법주의와 나란히 발전했다. 카발라의 중심 문헌인 《조하르》는 약 1280년 스페인에서 모세 데 레온을 통해 주로 유통되기 시작했으며, 그는 이를 2세기 현자 시몬 바르 요하이가 지은 고대 문헌이라고 소개했다 — 현대 학계는 이 전통적 귀속을 대체로 중세 저작으로 본다. 스페인 추방 이후 갈릴리의 작은 마을 사페드는 신비주의 부흥의 중심지가 되었고, 그곳에서 이삭 루리아(1534–1572)가 우주적 유배와 회복(티쿤)을 중심으로 한 영향력 있는 새로운 카발라 체계를 발전시켜 훗날 하시디즘 사상을 형성했다.",
    },
    keyEvents: [
      {
        year: 1280,
        label: { en: "The Zohar begins circulating in Castile", ko: "《조하르》가 카스티야에서 유통되기 시작" },
      },
      {
        year: 1570,
        label: {
          en: "Isaac Luria arrives in Safed and develops Lurianic Kabbalah",
          ko: "이삭 루리아가 사페드에 도착, 루리아 카발라 체계 발전",
        },
      },
      {
        year: 1620,
        label: {
          en: "Lurianic teachings spread across the Jewish world via students' writings",
          ko: "루리아의 가르침이 제자들의 저술을 통해 유대 세계 전역으로 확산",
        },
      },
    ],
    color: "#7a4a8a",
  },
  {
    id: "hasidism-and-eastern-european-judaism",
    name: {
      en: "Hasidism and Eastern European Judaism",
      ko: "하시디즘과 동유럽 유대교",
    },
    startYear: 1700,
    endYear: 1900,
    peakStart: 1760,
    peakEnd: 1880,
    summary: {
      en: "In the villages of Podolia and Volhynia (modern Ukraine), Israel ben Eliezer, known as the Baal Shem Tov (c. 1698–1760), taught a devotional form of Judaism emphasizing joy, prayer, and communion with God alongside rigorous textual study. His followers organized around charismatic rebbes leading dynastic courts, spreading Hasidism across Poland, Ukraine, and Hungary. The movement faced sharp opposition from the Mitnagdim ('opponents'), led by the Vilna Gaon, who defended Talmudic scholarship against what they saw as Hasidism's excesses — a division within Ashkenazi Judaism that persisted for generations.",
      ko: "오늘날 우크라이나에 해당하는 포돌리아와 볼히니아의 마을들에서 바알 셈 토브로 알려진 이스라엘 벤 엘리에제르(약 1698–1760)는 엄격한 문헌 연구와 더불어 기쁨·기도·하나님과의 교감을 강조하는 경건주의적 유대교를 가르쳤다. 그의 추종자들은 카리스마 있는 레베(지도자)가 이끄는 왕조적 궁정을 중심으로 조직되어 폴란드·우크라이나·헝가리 전역으로 하시디즘을 확산시켰다. 이 운동은 빌나 가온이 이끄는 미트나그딤('반대자들')의 거센 반발에 부딪혔는데, 이들은 하시디즘의 과잉이라고 본 것에 맞서 탈무드 학문을 옹호했다 — 이 분열은 아슈케나지 유대교 내에서 여러 세대에 걸쳐 지속되었다.",
    },
    keyEvents: [
      {
        year: 1740,
        label: {
          en: "Baal Shem Tov's teachings begin attracting a following in Podolia",
          ko: "바알 셈 토브의 가르침이 포돌리아에서 추종자를 모으기 시작",
        },
      },
      {
        year: 1772,
        label: {
          en: "Vilna Gaon issues a formal ban against the Hasidic movement",
          ko: "빌나 가온이 하시디즘 운동에 대한 공식 파문령 선포",
        },
      },
      {
        year: 1815,
        label: {
          en: "Hasidic courts (e.g. Chabad, Breslov) become established dynastic centers",
          ko: "하바드·브레슬로프 등 하시디즘 궁정이 세습 중심지로 자리잡음",
        },
      },
    ],
    color: "#9a8a4a",
  },
  {
    id: "haskalah-and-jewish-enlightenment",
    name: {
      en: "Haskalah and the Jewish Enlightenment",
      ko: "하스칼라와 유대 계몽주의",
    },
    startYear: 1750,
    endYear: 1880,
    peakStart: 1780,
    peakEnd: 1860,
    summary: {
      en: "The Jewish Enlightenment, led by figures such as Moses Mendelssohn (1729–1786), encouraged Jews to engage with secular European culture, education, and civic life while reconsidering traditional religious practice in light of reason. Mendelssohn's German translation of the Torah and his advocacy for Jewish civic emancipation in Prussia opened debates that spread across Central and Eastern Europe, raising questions about the relationship between Jewish religious identity, national belonging, and modern citizenship that would shape the religious movements of the following century.",
      ko: "모세 멘델스존(1729–1786) 등이 이끈 유대 계몽주의는 유대인들이 세속 유럽 문화·교육·시민 생활에 참여하도록 독려하면서 이성에 비추어 전통 종교 관행을 재검토하게 했다. 멘델스존의 독일어 토라 번역과 프로이센에서의 유대인 시민권 확립 옹호는 중동부 유럽 전역으로 퍼진 논쟁의 문을 열었고, 유대 종교적 정체성·민족적 소속·근대 시민권 사이의 관계에 대한 질문을 제기해 다음 세기의 종교 운동들을 형성했다.",
    },
    keyEvents: [
      {
        year: 1783,
        label: {
          en: "Mendelssohn completes his German translation of the Torah (Bi'ur)",
          ko: "멘델스존이 독일어 토라 번역(비우르) 완성",
        },
      },
      {
        year: 1812,
        label: {
          en: "Prussia grants Jews expanded civic rights amid Haskalah debates",
          ko: "프로이센이 하스칼라 논쟁 속에서 유대인에게 확대된 시민권 부여",
        },
      },
      {
        year: 1860,
        label: {
          en: "Haskalah ideas spread into the Russian Pale of Settlement",
          ko: "하스칼라 사상이 러시아 유대인 거주지역(펠)으로 확산",
        },
      },
    ],
    color: "#5a7a8a",
  },
  {
    id: "modern-denominational-movements",
    name: {
      en: "The Modern Denominational Movements",
      ko: "근대 교파 운동의 분화",
    },
    startYear: 1810,
    endYear: 1900,
    peakStart: 1840,
    peakEnd: 1890,
    summary: {
      en: "Responding to emancipation and the Haskalah, Jewish religious life diversified into distinct modern movements. Reform Judaism, beginning with the Hamburg Temple (1818), modernized liturgy and reconsidered the binding authority of traditional law. In response, figures such as Samson Raphael Hirsch articulated a Modern Orthodoxy that engaged secular society while affirming Torah law's full authority. Zacharias Frankel's 'Positive-Historical' approach, emphasizing the evolving nature of Jewish law within tradition, developed into what became Conservative Judaism, particularly in the United States.",
      ko: "해방과 하스칼라에 대응해 유대 종교 생활은 뚜렷이 구분되는 근대 운동들로 다양화되었다. 함부르크 성전(1818)에서 시작된 개혁파 유대교는 전례를 현대화하고 전통 율법의 구속력을 재검토했다. 이에 대응해 삼손 라파엘 히르슈 같은 인물들은 세속 사회에 참여하면서도 토라 율법의 완전한 권위를 긍정하는 현대 정통파를 제시했다. 자카리아스 프랑켈의 '긍정적-역사적' 접근은 전통 안에서 유대 율법의 발전적 성격을 강조했고, 이는 특히 미국에서 보수파 유대교로 발전했다.",
    },
    keyEvents: [
      {
        year: 1818,
        label: {
          en: "Hamburg Temple establishes early Reform liturgical practice",
          ko: "함부르크 성전이 초기 개혁파 전례 관행 확립",
        },
      },
      {
        year: 1851,
        label: {
          en: "Samson Raphael Hirsch articulates Modern Orthodoxy in Frankfurt",
          ko: "삼손 라파엘 히르슈가 프랑크푸르트에서 현대 정통파 사상 전개",
        },
      },
      {
        year: 1886,
        label: {
          en: "Jewish Theological Seminary founded in New York, anchoring Conservative Judaism",
          ko: "뉴욕에 유대신학교 설립, 보수파 유대교의 거점이 됨",
        },
      },
    ],
    color: "#8a7a5a",
  },
  {
    id: "zionism-and-the-return-to-the-land",
    name: {
      en: "Zionism and the Return to the Land",
      ko: "시오니즘과 땅으로의 귀환",
    },
    startYear: 1862,
    endYear: 1948,
    peakStart: 1897,
    peakEnd: 1948,
    summary: {
      en: "Responses to persistent antisemitism and nationalist currents in 19th-century Europe produced Zionism, the movement for Jewish national return to the Land of Israel. Theodor Herzl's Der Judenstaat (1896) and the First Zionist Congress (1897) organized this into an international political movement, which included both secular-nationalist and religious streams (the latter, Religious Zionism, understood settlement as advancing messianic redemption) — currents that have not always agreed on the movement's meaning or methods. Successive waves of immigration (aliyah) built Jewish communities in Ottoman and then British Mandate Palestine, culminating in the 1948 establishment of the State of Israel.",
      ko: "19세기 유럽에서 지속된 반유대주의와 민족주의 흐름에 대한 대응으로 유대 민족의 이스라엘 땅 귀환 운동인 시오니즘이 등장했다. 테오도어 헤르츨의 《유대 국가》(1896)와 제1차 시온주의자 대회(1897)는 이를 국제적 정치 운동으로 조직했는데, 여기에는 세속적 민족주의 흐름과 종교적 흐름(후자인 종교적 시오니즘은 정착을 메시아적 구원의 전진으로 이해함)이 모두 포함되었다 — 두 흐름이 운동의 의미나 방법에 대해 항상 일치한 것은 아니다. 연속된 이민 물결(알리야)은 오스만 제국, 이후 영국 위임통치령 팔레스타인에 유대 공동체를 건설했고, 1948년 이스라엘 국가 수립으로 이어졌다.",
    },
    keyEvents: [
      {
        year: 1882,
        label: {
          en: "First large-scale modern aliyah (First Aliyah) begins",
          ko: "근대 최초의 대규모 이민 물결(제1차 알리야) 시작",
        },
      },
      {
        year: 1897,
        label: { en: "First Zionist Congress convenes in Basel", ko: "바젤에서 제1차 시온주의자 대회 개최" },
      },
      {
        year: 1948,
        label: { en: "State of Israel declared", ko: "이스라엘 국가 수립 선포" },
      },
    ],
    color: "#6a6a9a",
  },
  {
    id: "holocaust-and-its-impact-on-jewish-thought",
    name: {
      en: "The Holocaust and Its Impact on Jewish Thought",
      ko: "홀로코스트와 유대 사상에 미친 영향",
    },
    startYear: 1933,
    endYear: 1948,
    peakStart: 1941,
    peakEnd: 1945,
    summary: {
      en: "Nazi Germany's systematic persecution and murder of six million Jews during the Holocaust (1933–1945) devastated European Jewish communities, including major centers of rabbinic and Hasidic life, and reshaped Jewish religious and philosophical thought in its aftermath. Thinkers such as Emil Fackenheim and Richard Rubenstein grappled with how traditional theology could be reconciled with the catastrophe, while survivor communities and religious movements worldwide absorbed its demographic and institutional consequences for generations.",
      ko: "나치 독일이 홀로코스트(1933–1945) 기간 600만 유대인을 조직적으로 박해·학살한 사건은 랍비·하시디즘 전통의 주요 중심지를 포함한 유럽 유대 공동체를 황폐화시켰고, 이후 유대 종교·철학 사상을 재형성했다. 에밀 파켄하임과 리처드 루벤스타인 같은 사상가들은 전통 신학이 이 참사와 어떻게 화해할 수 있는지 씨름했고, 전 세계 생존자 공동체와 종교 운동은 그 인구적·제도적 결과를 여러 세대에 걸쳐 감내했다.",
    },
    keyEvents: [
      {
        year: 1933,
        label: { en: "Nazi persecution of Jews begins in Germany", ko: "독일에서 나치의 유대인 박해 시작" },
      },
      {
        year: 1942,
        label: {
          en: "Mass deportations to extermination camps intensify",
          ko: "절멸수용소로의 대규모 강제이송 본격화",
        },
      },
      {
        year: 1945,
        label: {
          en: "Allied liberation ends the Holocaust; survivor communities begin rebuilding",
          ko: "연합군 해방으로 홀로코스트 종결, 생존자 공동체 재건 시작",
        },
      },
    ],
    color: "#4a4a6a",
  },
  {
    id: "contemporary-judaism-and-denominational-diversity",
    name: {
      en: "Contemporary Judaism and Denominational Diversity",
      ko: "현대 유대교와 교파적 다양성",
    },
    startYear: 1948,
    endYear: 2026,
    peakStart: 1970,
    peakEnd: 2026,
    summary: {
      en: "In the postwar decades, Jewish religious life rebuilt and diversified further, with Orthodox (including Haredi and Modern Orthodox), Conservative, Reform, and Reconstructionist movements all establishing substantial institutions in Israel and the diaspora, particularly the United States. Contemporary debates continue over religious authority, the relationship between religion and the state of Israel, denominational recognition, and how Jewish communities worldwide engage questions of identity, practice, and continuity in a pluralistic age.",
      ko: "전후 수십 년간 유대 종교 생활은 재건되며 더욱 다양해졌고, 정통파(하레디·현대 정통파 포함)·보수파·개혁파·재건파 운동 모두 이스라엘과 디아스포라(특히 미국)에서 상당한 제도적 기반을 확립했다. 종교적 권위, 종교와 이스라엘 국가의 관계, 교파 인정, 다원화 시대에 전 세계 유대 공동체가 정체성·관행·연속성 문제에 어떻게 대응할지를 둘러싼 논쟁이 오늘날까지 이어지고 있다.",
    },
    keyEvents: [
      {
        year: 1948,
        label: {
          en: "Diverse denominational movements take root in the newly founded State of Israel",
          ko: "새로 수립된 이스라엘 국가에서 다양한 교파 운동이 뿌리내림",
        },
      },
      {
        year: 1972,
        label: {
          en: "Reform movement ordains its first female rabbi in the United States",
          ko: "미국에서 개혁파 운동이 최초의 여성 랍비 안수",
        },
      },
      {
        year: 2026,
        label: {
          en: "Orthodox, Conservative, Reform, and Reconstructionist communities continue alongside ongoing debates over religious pluralism in Israel",
          ko: "정통파·보수파·개혁파·재건파 공동체가 이스라엘 내 종교 다원주의를 둘러싼 지속적 논쟁과 함께 공존",
        },
      },
    ],
    color: "#7a9a5a",
    ongoing: true,
  },
];

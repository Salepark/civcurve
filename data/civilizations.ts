export type Region =
  | "서아시아"
  | "지중해·유럽"
  | "남아시아"
  | "아메리카";

export type KeyEvent = {
  year: number;
  label: string;
};

export type Civilization = {
  id: string;
  nameKo: string;
  nameEn: string;
  region: Region;
  startYear: number;
  endYear: number;
  peakStart: number;
  peakEnd: number;
  summary: string;
  keyEvents: KeyEvent[];
  color: string;
};

// Phase 1 프로토타입 데이터 — 10개 문명.
// 연대는 대중적으로 통용되는 근사치이며, 학술적으로는 이견이 있을 수 있음.
export const civilizations: Civilization[] = [
  {
    id: "mesopotamia",
    nameKo: "메소포타미아",
    nameEn: "Mesopotamia",
    region: "서아시아",
    startYear: -3200,
    endYear: -539,
    peakStart: -1800,
    peakEnd: -1200,
    summary:
      "수메르 도시국가에서 시작해 바빌론, 아시리아로 이어진 문명권. 쐐기문자와 함무라비 법전을 남겼다.",
    keyEvents: [
      { year: -3200, label: "수메르 도시국가 형성" },
      { year: -1754, label: "함무라비 법전" },
      { year: -539, label: "페르시아에 병합" },
    ],
    color: "#6c8f74",
  },
  {
    id: "egypt",
    nameKo: "고대 이집트",
    nameEn: "Ancient Egypt",
    region: "서아시아",
    startYear: -3100,
    endYear: -30,
    peakStart: -1550,
    peakEnd: -1070,
    summary:
      "나일강을 따라 3000년 이상 지속된 문명. 통일 왕조와 피라미드, 신왕국 시기의 대외 팽창이 특징이다.",
    keyEvents: [
      { year: -3100, label: "상·하 이집트 통일" },
      { year: -2560, label: "기자 대피라미드" },
      { year: -30, label: "로마에 병합" },
    ],
    color: "#7c9868",
  },
  {
    id: "indus",
    nameKo: "인더스 문명",
    nameEn: "Indus Valley",
    region: "남아시아",
    startYear: -3300,
    endYear: -1300,
    peakStart: -2600,
    peakEnd: -1900,
    summary:
      "모헨조다로·하라파 등 계획도시로 알려진 청동기 문명. 문자가 아직 완전히 해독되지 않았다.",
    keyEvents: [
      { year: -2600, label: "모헨조다로·하라파 번성" },
      { year: -1900, label: "쇠퇴 시작" },
    ],
    color: "#a3ac6e",
  },
  {
    id: "greece",
    nameKo: "고대 그리스",
    nameEn: "Ancient Greece",
    region: "지중해·유럽",
    startYear: -800,
    endYear: -146,
    peakStart: -500,
    peakEnd: -323,
    summary:
      "폴리스 체제와 고전기 철학·민주정, 알렉산드로스의 헬레니즘 확장까지를 포괄한다.",
    keyEvents: [
      { year: -508, label: "아테네 민주정" },
      { year: -336, label: "알렉산드로스 즉위" },
      { year: -146, label: "로마에 병합" },
    ],
    color: "#5f9482",
  },
  {
    id: "rome",
    nameKo: "로마·비잔틴",
    nameEn: "Rome & Byzantium",
    region: "지중해·유럽",
    startYear: -753,
    endYear: 1453,
    peakStart: -27,
    peakEnd: 180,
    summary:
      "왕정-공화정-제정을 거쳐 서로마 멸망(476) 이후에도 비잔틴 제국으로 천년 더 존속했다.",
    keyEvents: [
      { year: -27, label: "팍스 로마나 시작" },
      { year: 476, label: "서로마 멸망" },
      { year: 1453, label: "콘스탄티노플 함락" },
    ],
    color: "#598269",
  },
  {
    id: "maya",
    nameKo: "마야",
    nameEn: "Maya",
    region: "아메리카",
    startYear: -1000,
    endYear: 900,
    peakStart: 250,
    peakEnd: 900,
    summary:
      "독자적 문자와 정교한 역법을 발전시킨 중미 문명. 고전기 이후 저지대 도시들이 급격히 쇠퇴했다.",
    keyEvents: [
      { year: 250, label: "고전기 시작" },
      { year: 900, label: "저지대 도시 붕괴" },
    ],
    color: "#8a9558",
  },
  {
    id: "gupta",
    nameKo: "굽타 왕조",
    nameEn: "Gupta Empire",
    region: "남아시아",
    startYear: 320,
    endYear: 550,
    peakStart: 320,
    peakEnd: 467,
    summary:
      "인도 고전 문화의 황금기로 불리는 시기. 수학·천문학·산스크리트 문학이 크게 발전했다.",
    keyEvents: [
      { year: 320, label: "찬드라굽타 1세 즉위" },
      { year: 550, label: "지방 왕조로 분열" },
    ],
    color: "#c9a24b",
  },
  {
    id: "abbasid",
    nameKo: "이슬람 황금기(압바스)",
    nameEn: "Abbasid Caliphate",
    region: "서아시아",
    startYear: 750,
    endYear: 1258,
    peakStart: 786,
    peakEnd: 861,
    summary:
      "바그다드를 중심으로 그리스·페르시아·인도 학문이 아랍어로 번역·종합된 학술 전성기.",
    keyEvents: [
      { year: 762, label: "바그다드 건설" },
      { year: 830, label: "지혜의 집 설립" },
      { year: 1258, label: "몽골의 바그다드 함락" },
    ],
    color: "#8fb197",
  },
  {
    id: "ottoman",
    nameKo: "오스만 제국",
    nameEn: "Ottoman Empire",
    region: "서아시아",
    startYear: 1299,
    endYear: 1922,
    peakStart: 1520,
    peakEnd: 1683,
    summary:
      "동유럽·서아시아·북아프리카에 걸친 다민족 제국. 쉴레이만 1세 시기 최대 판도에 도달했다.",
    keyEvents: [
      { year: 1453, label: "콘스탄티노플 정복" },
      { year: 1683, label: "2차 빈 공방전 패배" },
      { year: 1922, label: "제국 폐지" },
    ],
    color: "#4a7a72",
  },
  {
    id: "inca",
    nameKo: "잉카",
    nameEn: "Inca Empire",
    region: "아메리카",
    startYear: 1438,
    endYear: 1533,
    peakStart: 1438,
    peakEnd: 1527,
    summary:
      "안데스 산맥을 따라 도로망으로 연결된 제국. 스페인 정복으로 채 100년을 못 채우고 붕괴했다.",
    keyEvents: [
      { year: 1438, label: "파차쿠티 즉위, 팽창 시작" },
      { year: 1533, label: "스페인에 정복" },
    ],
    color: "#7fa88c",
  },
];

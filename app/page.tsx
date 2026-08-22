import { civilizations } from "@/data/civilizations";
import { TimelineApp } from "@/components/TimelineApp";

export default function Home() {
  return (
    <main>
      <header className="page-header">
        <p className="eyebrow mono">문명 생명곡선 · Phase 1 프로토타입</p>
        <h1>문명 생명곡선</h1>
        <p className="lede">
          가로축은 시간(BC3200~현재), 각 곡선은 문명의 탄생부터 소멸까지를
          나타냅니다. 곡선이 넓어지는 구간이 전성기입니다. 문명을 클릭하면
          상세 정보를 볼 수 있습니다.
        </p>
      </header>
      <TimelineApp civilizations={civilizations} />
    </main>
  );
}

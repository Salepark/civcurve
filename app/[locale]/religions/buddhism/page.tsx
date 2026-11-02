import { buddhismHistory } from "@/data/buddhism-history";
import { TimelineApp } from "@/components/TimelineApp";
import { DatasetNav } from "@/components/DatasetNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { LiveClock } from "@/components/LiveClock";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function BuddhismPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = dictionaries[locale];

  return (
    <main>
      <header className="page-header">
        <div className="page-header-top">
          <p className="eyebrow mono">{dict.page.buddhism.eyebrow}</p>
          <div className="header-nav-group">
            <DatasetNav locale={locale} active="buddhism" />
            <LocaleSwitch locale={locale} />
          </div>
        </div>
        <div className="title-row">
          <h1>{dict.page.buddhism.title}</h1>
          <LiveClock locale={locale} />
        </div>
        <p className="lede">{dict.page.buddhism.lede}</p>
      </header>
      <TimelineApp
        datasetKey="buddhism"
        civilizations={buddhismHistory}
        locale={locale}
        ariaLabel={locale === "en" ? "Buddhist religious and philosophical history timeline" : "불교 종교·철학사 타임라인"}
      />
    </main>
  );
}

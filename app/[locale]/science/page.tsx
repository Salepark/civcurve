import { scienceHistory } from "@/data/science-history";
import { TimelineApp } from "@/components/TimelineApp";
import { DatasetNav } from "@/components/DatasetNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { LiveClock } from "@/components/LiveClock";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function SciencePage({
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
          <p className="eyebrow mono">{dict.page.science.eyebrow}</p>
          <div className="header-nav-group">
            <DatasetNav locale={locale} active="science" />
            <LocaleSwitch locale={locale} />
          </div>
        </div>
        <div className="title-row">
          <h1>{dict.page.science.title}</h1>
          <LiveClock locale={locale} />
        </div>
        <p className="lede">{dict.page.science.lede}</p>
      </header>
      <TimelineApp
        civilizations={scienceHistory}
        locale={locale}
        ariaLabel={locale === "en" ? "Science history curve timeline" : "과학사 곡선 타임라인"}
      />
    </main>
  );
}

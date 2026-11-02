import { islamHistory } from "@/data/islam-history";
import { TimelineApp } from "@/components/TimelineApp";
import { DatasetNav } from "@/components/DatasetNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { LiveClock } from "@/components/LiveClock";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function IslamPage({
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
          <p className="eyebrow mono">{dict.page.islam.eyebrow}</p>
          <div className="header-nav-group">
            <DatasetNav locale={locale} active="islam" />
            <LocaleSwitch locale={locale} />
          </div>
        </div>
        <div className="title-row">
          <h1>{dict.page.islam.title}</h1>
          <LiveClock locale={locale} />
        </div>
        <p className="lede">{dict.page.islam.lede}</p>
      </header>
      <TimelineApp
        datasetKey="islam"
        civilizations={islamHistory}
        locale={locale}
        ariaLabel={locale === "en" ? "Islamic religious history timeline" : "이슬람 종교사 타임라인"}
      />
    </main>
  );
}

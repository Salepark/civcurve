import { faithHistory } from "@/data/faith-history";
import { TimelineApp } from "@/components/TimelineApp";
import { DatasetNav } from "@/components/DatasetNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { LiveClock } from "@/components/LiveClock";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function FaithPage({
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
          <p className="eyebrow mono">{dict.page.faith.eyebrow}</p>
          <div className="header-nav-group">
            <DatasetNav locale={locale} active="faith" />
            <LocaleSwitch locale={locale} />
          </div>
        </div>
        <div className="title-row">
          <h1>{dict.page.faith.title}</h1>
          <LiveClock locale={locale} />
        </div>
        <p className="lede">{dict.page.faith.lede}</p>
      </header>
      <TimelineApp
        civilizations={faithHistory}
        locale={locale}
        ariaLabel={locale === "en" ? "Faith history curve timeline" : "기독교 역사 곡선 타임라인"}
      />
    </main>
  );
}

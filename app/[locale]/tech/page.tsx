import { techHistory } from "@/data/tech-history";
import { TimelineApp } from "@/components/TimelineApp";
import { DatasetNav } from "@/components/DatasetNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { LiveClock } from "@/components/LiveClock";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function TechPage({
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
          <p className="eyebrow mono">{dict.page.tech.eyebrow}</p>
          <div className="header-nav-group">
            <DatasetNav locale={locale} active="tech" />
            <LocaleSwitch locale={locale} />
          </div>
        </div>
        <div className="title-row">
          <h1>{dict.page.tech.title}</h1>
          <LiveClock locale={locale} />
        </div>
        <p className="lede">{dict.page.tech.lede}</p>
      </header>
      <TimelineApp
        civilizations={techHistory}
        locale={locale}
        ariaLabel={locale === "en" ? "Technology history curve timeline" : "기술사 곡선 타임라인"}
      />
    </main>
  );
}

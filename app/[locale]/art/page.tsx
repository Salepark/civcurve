import { artHistory } from "@/data/art-history";
import { TimelineApp } from "@/components/TimelineApp";
import { DatasetNav } from "@/components/DatasetNav";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { LiveClock } from "@/components/LiveClock";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function ArtPage({
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
          <p className="eyebrow mono">{dict.page.art.eyebrow}</p>
          <div className="header-nav-group">
            <DatasetNav locale={locale} active="art" />
            <LocaleSwitch locale={locale} />
          </div>
        </div>
        <div className="title-row">
          <h1>{dict.page.art.title}</h1>
          <LiveClock locale={locale} />
        </div>
        <p className="lede">{dict.page.art.lede}</p>
      </header>
      <TimelineApp
        civilizations={artHistory}
        locale={locale}
        ariaLabel={locale === "en" ? "Art movement curve timeline" : "미술 사조 곡선 타임라인"}
      />
    </main>
  );
}

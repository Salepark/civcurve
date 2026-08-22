import { civilizations } from "@/data/civilizations";
import { TimelineApp } from "@/components/TimelineApp";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

export default async function Home({
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
          <p className="eyebrow mono">{dict.page.eyebrow}</p>
          <LocaleSwitch locale={locale} />
        </div>
        <h1>{dict.page.title}</h1>
        <p className="lede">{dict.page.lede}</p>
      </header>
      <TimelineApp civilizations={civilizations} locale={locale} />
    </main>
  );
}

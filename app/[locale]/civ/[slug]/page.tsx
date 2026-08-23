import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { civilizations } from "@/data/civilizations";
import { formatTick } from "@/lib/scale";
import { dictionaries, defaultLocale, isLocale, regionLabels, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return civilizations.map((civ) => ({ slug: civ.slug }));
}

function findCiv(slug: string) {
  return civilizations.find((c) => c.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const civ = findCiv(slug);

  if (!civ) {
    return { title: dictionaries[locale].meta.title };
  }

  const name = civ.name[locale];
  return {
    title: `${name} — ${dictionaries[locale].meta.title}`,
    description: civ.summary[locale],
    openGraph: {
      title: `${name} — ${dictionaries[locale].meta.title}`,
      description: civ.summary[locale],
    },
  };
}

export default async function CivPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = dictionaries[locale];
  const civ = findCiv(slug);

  if (!civ) {
    notFound();
  }

  const name = civ.name[locale];
  const otherLocale: Locale = locale === "en" ? "ko" : "en";
  const endLabel = civ.ongoing ? dict.detail.present : formatTick(civ.endYear, locale);
  const peakEndLabel = civ.ongoing ? dict.detail.present : formatTick(civ.peakEnd, locale);

  return (
    <main className="civ-page">
      <Link className="civ-page-back" href={`/${locale}`}>
        {dict.civPage.back}
      </Link>
      <div className="civ-page-panel" data-ongoing={civ.ongoing ?? false}>
        <span className="detail-region mono">
          {regionLabels[locale][civ.region]}
          {civ.ongoing && <span className="detail-ongoing-tag">{dict.detail.ongoing}</span>}
        </span>
        <h1>
          {name} <span className="civ-page-en-name">{civ.name[otherLocale]}</span>
        </h1>
        <p className="detail-range mono">
          {formatTick(civ.startYear, locale)} – {endLabel}
          <span className="detail-peak">
            {" "}
            · {dict.detail.peak} {formatTick(civ.peakStart, locale)}–{peakEndLabel}
          </span>
        </p>
        <p className="detail-summary">{civ.summary[locale]}</p>
        <ul className="detail-events">
          {civ.keyEvents.map((e) => (
            <li key={e.year + e.label[locale]}>
              <span className="mono event-year">{formatTick(e.year, locale)}</span>
              <span>{e.label[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

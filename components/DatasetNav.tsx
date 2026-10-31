import Link from "next/link";
import { dictionaries, type Locale } from "@/lib/i18n";

export function DatasetNav({
  locale,
  active,
}: {
  locale: Locale;
  active: "civilizations" | "faith" | "art";
}) {
  const dict = dictionaries[locale];
  const items: { key: "civilizations" | "faith" | "art"; label: string; href: string }[] = [
    { key: "civilizations", label: dict.nav.civilizations, href: `/${locale}` },
    { key: "faith", label: dict.nav.faith, href: `/${locale}/faith` },
    { key: "art", label: dict.nav.art, href: `/${locale}/art` },
  ];
  return (
    <nav className="dataset-nav locale-switch mono" aria-label="Dataset">
      {items.map((item, i) => (
        <span key={item.key}>
          {i > 0 && <span className="locale-sep">·</span>}
          {item.key === active ? (
            <span aria-current="true">{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

import Link from "next/link";
import { dictionaries, type Locale } from "@/lib/i18n";

export function DatasetNav({
  locale,
  active,
}: {
  locale: Locale;
  active: "civilizations" | "faith" | "art" | "science" | "tech" | "religions" | "literature" | "philosophy" | "islam" | "hinduism";
}) {
  const dict = dictionaries[locale];
  const items: { key: "civilizations" | "faith" | "art" | "science" | "tech" | "religions" | "literature" | "philosophy" | "islam" | "hinduism"; label: string; href: string }[] = [
    { key: "civilizations", label: dict.nav.civilizations, href: `/${locale}` },
    { key: "art", label: dict.nav.art, href: `/${locale}/art` },
    { key: "science", label: dict.nav.science, href: `/${locale}/science` },
    { key: "tech", label: dict.nav.tech, href: `/${locale}/tech` },
    { key: "philosophy", label: dict.nav.philosophy, href: `/${locale}/philosophy` },
    { key: "literature", label: dict.nav.literature, href: `/${locale}/literature` },
    { key: "religions", label: dict.nav.religions, href: `/${locale}/religions` },
    { key: "faith", label: dict.nav.faith, href: `/${locale}/faith` },
    { key: "islam", label: dict.nav.islam, href: `/${locale}/islam` },
    { key: "hinduism", label: dict.nav.hinduism, href: `/${locale}/hinduism` },
  ];
  return (
    <nav className="dataset-nav locale-switch mono" aria-label="Dataset">
      {items.map((item) => (
        <span key={item.key}>
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

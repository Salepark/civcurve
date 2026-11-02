import Link from "next/link";
import { dictionaries, type Locale } from "@/lib/i18n";
import { ReligionsGroup } from "./ReligionsGroup";

export function DatasetNav({
  locale,
  active,
}: {
  locale: Locale;
  active: "civilizations" | "faith" | "art" | "science" | "tech" | "religions" | "literature" | "philosophy" | "islam" | "hinduism" | "buddhism" | "judaism";
}) {
  const dict = dictionaries[locale];
  const items: { key: "civilizations" | "faith" | "art" | "science" | "tech" | "religions" | "literature" | "philosophy" | "islam" | "hinduism" | "buddhism" | "judaism"; label: string; href: string }[] = [
    { key: "civilizations", label: dict.nav.civilizations, href: `/${locale}` },
    { key: "art", label: dict.nav.art, href: `/${locale}/art` },
    { key: "science", label: dict.nav.science, href: `/${locale}/science` },
    { key: "tech", label: dict.nav.tech, href: `/${locale}/tech` },
    { key: "philosophy", label: dict.nav.philosophy, href: `/${locale}/philosophy` },
    { key: "literature", label: dict.nav.literature, href: `/${locale}/literature` },
  ];
  const religionsItems = ["faith", "islam", "hinduism", "buddhism", "judaism"].map((key) => ({
    key,
    label: dict.nav[key as "faith" | "islam" | "hinduism" | "buddhism" | "judaism"],
    href: `/${locale}/religions/${key}`,
  }));
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
      <ReligionsGroup
        header={{ key: "religions", label: dict.nav.religionsGroup, href: `/${locale}/religions` }}
        items={religionsItems}
        active={active}
        toggleLabel={dict.nav.religionsToggle}
      />
    </nav>
  );
}

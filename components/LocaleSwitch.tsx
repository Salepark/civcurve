import Link from "next/link";
import { locales, dictionaries, type Locale } from "@/lib/i18n";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  return (
    <nav className="locale-switch mono" aria-label="Language">
      {locales.map((l, i) => (
        <span key={l}>
          {i > 0 && <span className="locale-sep">·</span>}
          {l === locale ? (
            <span aria-current="true">{dictionaries[l].localeName}</span>
          ) : (
            <Link href={`/${l}`}>{dictionaries[l].localeName}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

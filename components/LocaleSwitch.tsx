import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { locales, dictionaries, type Locale } from "@/lib/i18n";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="switch-row">
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
    <ThemeToggle locale={locale} />
    </div>
  );
}

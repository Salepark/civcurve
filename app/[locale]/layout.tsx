import type { Metadata } from "next";
import "../globals.css";
import { locales, dictionaries, defaultLocale, isLocale } from "@/lib/i18n";

// 렌더 전에 저장된 테마를 적용해 재방문자의 깜빡임(FOUC)을 막는다. 저장값이 없으면 속성을 달지 않아 CSS가 시스템 설정을 따른다.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("civcurve:theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = dictionaries[locale];
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

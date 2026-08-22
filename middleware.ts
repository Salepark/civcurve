import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

function hasLocalePrefix(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (hasLocalePrefix(pathname)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // _next, favicon, 파일 확장자가 있는 정적 자산은 리다이렉트 대상에서 제외
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};

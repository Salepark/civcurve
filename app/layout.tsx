import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "문명 생명곡선",
  description:
    "인류 최초 문명부터 현재까지, 각 문명의 탄생·성장·전성·쇠퇴를 곡선으로 비교하는 타임라인.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

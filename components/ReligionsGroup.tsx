"use client";

import Link from "next/link";
import { useState } from "react";

type Item = { key: string; label: string; href: string };

// "종교사" 그룹: 헤더는 /religions(개관)로 이동하고, 옆 토글이 하위 딥다이브 항목을 펼치고 접는다.
// 상위 nav의 flex 흐름에 그대로 끼도록 fragment로 렌더링한다.
export function ReligionsGroup({
  header,
  items,
  active,
  toggleLabel,
}: {
  header: Item;
  items: Item[];
  active: string;
  toggleLabel: string;
}) {
  const [open, setOpen] = useState(active === header.key || items.some((item) => item.key === active));

  return (
    <>
      <span className="nav-group-header">
        {active === header.key ? (
          <span aria-current="true">{header.label}</span>
        ) : (
          <Link href={header.href}>{header.label}</Link>
        )}
        <button type="button" className="nav-group-toggle" aria-expanded={open} aria-label={toggleLabel} onClick={() => setOpen(!open)}>
          {open ? "▾" : "▸"}
        </button>
      </span>
      {open &&
        items.map((item) => (
          <span key={item.key}>
            {item.key === active ? (
              <span aria-current="true">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </span>
        ))}
    </>
  );
}

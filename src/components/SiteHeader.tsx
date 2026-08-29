"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/for-company/", label: "企業向け" },
  { href: "/for-doctors/", label: "産業医向け" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <div className="h-1.5 bg-navy" />
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="min-w-0">
          <p className="font-serif text-[1.05rem] font-semibold tracking-wide text-navy-deep sm:text-lg">
            {site.name}
          </p>
          <p className="text-[0.7rem] tracking-[0.16em] text-muted">{site.tagline}</p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm sm:flex" aria-label="主要ナビ">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-navy hover:underline hover:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-navy sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">メニュー</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-navy" />
            <span className="block h-px w-4 bg-navy" />
            <span className="block h-px w-4 bg-navy" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-4 py-3 sm:hidden"
          aria-label="モバイルナビ"
        >
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

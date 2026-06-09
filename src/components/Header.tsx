"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck, Menu, X } from "lucide-react";
import { href, type Locale, type RouteKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Brand } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV: { key: RouteKey; label: keyof Dictionary["nav"] }[] = [
  { key: "about", label: "about" },
  { key: "services", label: "services" },
  { key: "hours", label: "hours" },
  { key: "patients", label: "patients" },
  { key: "contact", label: "contact" },
];

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (key: RouteKey) => {
    const target = href(locale, key);
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-[74px] items-center justify-between">
          <Link href={href(locale, "home")} aria-label={SITE.brand}>
            <Brand locale={locale} brand={SITE.brand} doctor={SITE.doctor} />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map(({ key, label }) => (
              <Link
                key={key}
                href={href(locale, key)}
                data-active={isActive(key)}
                className={cn(
                  "nav-underline text-[15px] font-semibold transition-colors",
                  isActive(key) ? "text-primary" : "text-ink hover:text-primary",
                )}
              >
                {dict.nav[label]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-[15px] font-bold text-primary xl:flex"
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {SITE.phone}
            </a>
            <LanguageSwitcher locale={locale} className="hidden sm:inline-flex" />
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary hidden items-center gap-2 rounded-[10px] px-5 py-3 text-[15px] font-bold text-white transition-all sm:inline-flex"
            >
              <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.nav.book}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? dict.nav.close : dict.nav.menu}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-surface text-ink lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="border-t border-line bg-surface">
          <Container className="py-4">
            <div className="flex flex-col">
              {NAV.map(({ key, label }) => (
                <Link
                  key={key}
                  href={href(locale, key)}
                  className="border-b border-line py-3.5 text-[17px] font-semibold text-ink"
                >
                  {dict.nav[label]}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <LanguageSwitcher locale={locale} />
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-[15px] font-bold text-primary"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {SITE.phone}
              </a>
            </div>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary mt-4 flex items-center justify-center gap-2 rounded-[10px] px-5 py-3.5 text-[16px] font-bold text-white"
            >
              <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.nav.book}
            </a>
          </Container>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck, Menu, X } from "lucide-react";
import { href, navHref, type Locale, type RouteKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV: { key: RouteKey; label: keyof Dictionary["nav"] }[] = [
  { key: "about", label: "about" },
  { key: "services", label: "services" },
  { key: "pricing", label: "pricing" },
  { key: "hours", label: "hours" },
  { key: "contact", label: "contact" },
];

export function Header({
  locale,
  dict,
  scrolled,
  onHome,
}: {
  locale: Locale;
  dict: Dictionary;
  scrolled: boolean;
  onHome: boolean;
}) {
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
    if (key === "pricing") {
      const servicesPath = href(locale, "services");
      return pathname === servicesPath || pathname.startsWith(`${servicesPath}/`);
    }
    const target = href(locale, key);
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header
      className={cn(
        "site-header",
        onHome && "site-header--home",
        scrolled && "site-header--scrolled",
      )}
    >
      <Container>
        <nav className="site-header__nav grid min-h-[68px] grid-cols-[auto_1fr_auto] items-center gap-x-3 py-2 sm:min-h-[72px] sm:gap-x-4">
          <Link href={href(locale, "home")} className="shrink-0" aria-label={SITE.brand}>
            <Brand
              locale={locale}
              brand={SITE.brand}
              doctor={SITE.doctor}
              compact
            />
          </Link>

          <div className="hidden min-w-0 items-center justify-center lg:flex">
            <ul className="flex items-center gap-1 xl:gap-2">
              {NAV.map(({ key, label }) => (
                <li key={key}>
                  <Link
                    href={navHref(locale, key, pathname)}
                    data-active={isActive(key)}
                    className={cn(
                      "inline-flex h-10 items-center whitespace-nowrap rounded-full px-3 text-[14px] font-semibold leading-none transition-colors xl:px-3.5 xl:text-[15px]",
                      isActive(key)
                        ? "bg-blue-soft text-primary"
                        : "text-ink hover:bg-blue-soft/55 hover:text-primary",
                    )}
                  >
                    {dict.nav[label]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-2.5">
            <LanguageSwitcher locale={locale} className="hidden sm:inline-flex" />
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={dict.hero.bookingNote}
              className="cta-primary hidden h-10 items-center gap-1.5 whitespace-nowrap rounded-[10px] px-3.5 text-[14px] font-bold leading-none text-white transition-all hover:-translate-y-px sm:inline-flex xl:px-4 xl:text-[15px]"
            >
              <CalendarCheck className="h-[17px] w-[17px] shrink-0" strokeWidth={1.85} aria-hidden="true" />
              {dict.nav.book}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? dict.nav.close : dict.nav.menu}
              aria-expanded={open}
              className="glass-control inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-ink lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", open ? "block" : "hidden")}>
        <div className="site-header-menu">
          <Container className="py-4">
            <div className="flex flex-col">
              {NAV.map(({ key, label }) => (
                <Link
                  key={key}
                  href={navHref(locale, key, pathname)}
                  className={cn(
                    "border-b border-line py-3.5 text-[17px] font-semibold transition-colors",
                    isActive(key) ? "text-primary" : "text-ink hover:text-primary",
                  )}
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
              title={dict.hero.bookingNote}
              className="cta-primary mt-4 flex h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-[16px] font-bold text-white"
            >
              <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.nav.book}
            </a>
            <p className="mt-2 text-center text-[12px] text-muted">{dict.hero.bookingNote}</p>
          </Container>
        </div>
      </div>
    </header>
  );
}

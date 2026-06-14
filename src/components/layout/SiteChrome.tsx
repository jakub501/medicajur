"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isHomePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { TopBar } from "./TopBar";
import { Header } from "./Header";

const SCROLL_THRESHOLD = 12;

export function SiteChrome({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const onHome = isHomePath(pathname, locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "site-chrome",
        onHome && "site-chrome--home",
        scrolled && "site-chrome--scrolled",
      )}
    >
      <TopBar dict={dict} />
      <div className="site-chrome-bridge" aria-hidden="true" />
      <Header locale={locale} dict={dict} scrolled={scrolled} onHome={onHome} />
    </div>
  );
}

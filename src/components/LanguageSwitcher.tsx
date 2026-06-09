"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface p-0.5 text-[13px] font-bold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={switchLocalePath(pathname, l)}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
              active
                ? "bg-primary text-white"
                : "text-muted hover:text-primary",
            )}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}

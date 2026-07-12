"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "mj-cookie-consent";

export function CookieBanner({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Keeps footer content visible above cookie + sticky bar on mobile. */}
      <div aria-hidden className="h-[7.5rem] shrink-0 lg:hidden" />
      <div className="safe-bottom fixed inset-x-0 bottom-[4.75rem] z-[60] p-3 max-lg:bottom-[4.75rem] sm:p-5 lg:bottom-5">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-start gap-3">
          <span className="icon-box mt-0.5 h-9 w-9 rounded-[10px]">
            <Cookie className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
          </span>
          <p className="text-body-sm leading-relaxed text-muted">
            {dict.cookies.message}{" "}
            <Link
              href={href(locale, "cookies")}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              {dict.cookies.settingsLink}
            </Link>
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-2.5 sm:ml-auto sm:w-auto sm:flex-row sm:gap-3">
          <Button variant="secondary" size="sm" className="w-full sm:w-auto" onClick={() => decide("essential")}>
            {dict.cookies.reject}
          </Button>
          <Button size="sm" className="w-full sm:w-auto" onClick={() => decide("all")}>
            {dict.cookies.accept}
          </Button>
        </div>
      </div>
      </div>
    </>
  );
}

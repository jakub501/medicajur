"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

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
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
      <div className="mx-auto flex max-w-[1040px] flex-col gap-4 rounded-2xl border border-line bg-surface p-5 shadow-[0_20px_50px_-20px_rgba(13,70,116,0.5)] sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-blue-soft text-primary">
            <Cookie className="h-5 w-5" strokeWidth={1.85} />
          </span>
          <p className="text-[14px] leading-relaxed text-muted">
            {dict.cookies.message}{" "}
            <Link
              href={href(locale, "cookies")}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              {dict.cookies.settingsLink}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3 sm:ml-auto">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="rounded-[10px] border border-blue-line bg-surface px-4 py-2.5 text-[14px] font-bold text-primary transition-colors hover:border-primary"
          >
            {dict.cookies.reject}
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="rounded-[10px] bg-primary px-4 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-primary-deep"
          >
            {dict.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Phone, CalendarCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { ButtonAnchor } from "@/components/ui/Button";

export function StickyMobileCta({ dict }: { dict: Dictionary }) {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-[1200px] gap-3">
        <ButtonAnchor
          href={SITE.phoneHref}
          variant="secondary"
          size="md"
          className="flex-1"
        >
          <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
          {dict.common.call}
        </ButtonAnchor>
        <ButtonAnchor
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={dict.hero.bookingNote}
          size="md"
          className="flex-1"
        >
          <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
          {dict.nav.book}
        </ButtonAnchor>
      </div>
    </div>
  );
}

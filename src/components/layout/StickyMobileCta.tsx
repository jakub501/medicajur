import { Phone, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Always-visible call / book bar pinned to the bottom on mobile.
 * Hidden on lg+ where the header CTA is already visible.
 */
export function StickyMobileCta({ dict }: { dict: Dictionary }) {
  return (
    <>
      {/* Spacer keeps the fixed bar from covering footer content. */}
      <div aria-hidden className="h-[68px] lg:hidden" />
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-[1200px] gap-2.5 px-3 py-2.5">
          <a
            href={SITE.phoneHref}
            className="btn-secondary inline-flex min-h-12 flex-1 touch-manipulation items-center justify-center gap-2 rounded-[10px] text-[15px] font-bold"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
            {dict.common.call}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex min-h-12 flex-[1.3] touch-manipulation items-center justify-center gap-2 rounded-[10px] text-[15px] font-bold text-white"
          >
            <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
            {dict.common.book}
          </a>
        </div>
      </div>
    </>
  );
}

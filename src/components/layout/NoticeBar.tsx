import { Info } from "lucide-react";
import { NOTICE } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";

export function NoticeBar({ locale }: { locale: Locale }) {
  if (!NOTICE.active) return null;
  const text = NOTICE.text[locale];
  if (!text) return null;

  return (
    <div role="status" className="border-b border-amber/30 bg-[#fdf6ee]">
      <Container>
        <div className="text-body-sm flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 py-2.5 text-center font-semibold text-amber sm:gap-2.5">
          <Info className="h-[18px] w-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
          <p className="min-w-0 max-w-full text-pretty">
            {NOTICE.range && <span className="font-bold">{NOTICE.range}: </span>}
            {text}
          </p>
        </div>
      </Container>
    </div>
  );
}

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
        <div className="text-body-sm flex items-center justify-center gap-2.5 py-2.5 text-center font-semibold text-amber">
          <Info className="h-[18px] w-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
          <p>
            {NOTICE.range && <span className="font-bold">{NOTICE.range}: </span>}
            {text}
          </p>
        </div>
      </Container>
    </div>
  );
}

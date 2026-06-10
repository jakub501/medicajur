import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "../Section";

type FaqItem = { q: string; a: string };

export function Faq({
  locale,
  dict,
  items,
  showCta = false,
}: {
  locale: Locale;
  dict: Dictionary;
  items: FaqItem[];
  showCta?: boolean;
}) {
  const f = dict.faq;

  return (
    <Section id="faq" className="bg-surface py-12 sm:py-16">
      <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-[14px] border border-line bg-bg px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body-lg font-semibold text-ink">
              {item.q}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-soft text-primary transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="text-body mt-3 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>

      {showCta && (
        <Link
          href={href(locale, "patients")}
          className="text-body-sm mt-6 inline-flex min-h-11 items-center gap-1.5 font-bold text-primary transition-colors hover:text-primary-deep"
        >
          {f.cta}
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </Link>
      )}
    </Section>
  );
}

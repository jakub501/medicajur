import { ArrowRight, ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { FaqAnswer } from "@/components/ui/FaqAnswer";

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
    <Section id="faq" className="py-12 sm:py-16">
      <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} center />

      <div className="mx-auto max-w-3xl">
        <div className="faq-panel">
          <Reveal stagger className="faq-panel__list">
            {items.map((item, index) => (
              <details key={item.q} className="faq-item group">
                <summary className="faq-item__summary flex cursor-pointer list-none items-start gap-3 sm:gap-4 [&::-webkit-details-marker]:hidden">
                  <span
                    className="faq-item-index mt-0.5 shrink-0 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-item__question min-w-0 flex-1 text-body-lg font-semibold leading-snug text-ink transition-colors group-hover:text-primary group-open:text-primary">
                    {item.q}
                  </span>
                  <span className="faq-item-toggle mt-0.5 shrink-0" aria-hidden="true">
                    <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                </summary>
                <div className="faq-item-answer">
                  <FaqAnswer text={item.a} />
                </div>
              </details>
            ))}
          </Reveal>
        </div>

        {showCta && (
          <div className="mt-8 text-center">
            <ButtonLink href={href(locale, "home", "patients")} size="md">
              {f.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </ButtonLink>
          </div>
        )}
      </div>
    </Section>
  );
}

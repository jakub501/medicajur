import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

const CARD_ACCENTS = ["primary", "green", "deep", "gold", "primary", "green"] as const;

export function ServicesBento({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const s = dict.services;
  const o = s.overview;

  return (
    <Section id="services" className="pt-6 pb-12 sm:pt-8 sm:pb-16">
      <SectionHeading title={s.title} subtitle={s.subtitle} center />

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:items-stretch sm:gap-4 lg:grid-cols-3">
          {o.cards.map((item, index) => (
            <ServiceCard
              key={item.title}
              locale={locale}
              dict={dict}
              accent={CARD_ACCENTS[index]}
              {...item}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={href(locale, "services", "scope")}
            scroll
            className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-blue-line bg-surface px-5 text-body font-bold text-primary shadow-soft transition-all hover:border-primary/35 hover:bg-blue-soft/60 hover:text-primary-deep"
          >
            {s.viewAll}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function ServiceCard({
  locale,
  dict,
  title,
  text,
  icon,
  linkToPricing,
  accent,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  text: string;
  icon: string;
  linkToPricing?: boolean;
  accent: (typeof CARD_ACCENTS)[number];
}) {
  const pricingLink = dict.services.overview.pricingLink;

  return (
    <div className={cn("trust-card group flex h-full flex-col", `trust-card--${accent}`)}>
      <span className={cn("trust-ico", `trust-ico--${accent}`)}>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="trust-card__title mt-5">{title}</h3>
      <span className="trust-card__rule mt-3" aria-hidden="true" />
      <p className="mt-3 text-[0.9375rem] leading-[1.65] text-muted">{text}</p>
      <div className="flex-1" />
      {linkToPricing && (
        <Link
          href={href(locale, "services", "pricing")}
          className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
        >
          {pricingLink}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

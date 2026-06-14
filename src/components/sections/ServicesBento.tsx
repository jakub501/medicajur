import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

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
          {o.cards.map((item) => (
            <OverviewCard key={item.title} locale={locale} dict={dict} {...item} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={href(locale, "services", "scope")}
            scroll
            className="inline-flex min-h-11 items-center gap-2 text-body font-bold text-primary transition-colors hover:text-primary-deep"
          >
            {s.viewAll}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function OverviewCard({
  locale,
  dict,
  title,
  text,
  icon,
  linkToPricing,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  text: string;
  icon: string;
  linkToPricing?: boolean;
}) {
  const pricingLink = dict.services.overview.pricingLink;

  return (
    <div className="card group flex h-full items-start gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-card sm:gap-4">
      <span className="icon-box h-10 w-10 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-body font-medium leading-snug text-ink">{title}</h3>
        <p className="text-body-sm mt-1.5 leading-relaxed text-muted">{text}</p>
        {linkToPricing && (
          <Link
            href={href(locale, "services", "pricing")}
            className="mt-2 inline-flex items-center gap-1 text-body-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
          >
            {pricingLink}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}

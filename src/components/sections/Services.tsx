import Link from "next/link";
import { Activity, ArrowRight } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "../Section";
import { Icon } from "../Icon";

export function ServicesBento({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const s = dict.services;

  const cards = [
    {
      title: s.featured.title,
      text: s.featured.text,
      icon: "stethoscope",
    },
    ...s.items,
  ];

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={s.eyebrow}
        title={s.title}
        subtitle={s.subtitle}
        center
      />

      <div className="grid items-start gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>

      <div className="card mt-4 flex flex-col gap-4 sm:mt-[18px] lg:flex-row lg:items-center lg:gap-6">
        <span className="icon-box h-[3.25rem] w-[3.25rem] shrink-0">
          <Activity className="h-7 w-7" strokeWidth={1.85} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-h3">{s.poct.title}</h3>
          <p className="text-body mt-1.5 text-muted">{s.poct.text}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.poct.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[7px] bg-blue-soft px-3 py-1.5 text-body-sm font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href={href(locale, "services")}
          className="inline-flex min-h-11 items-center gap-2 text-body font-bold text-primary transition-colors hover:text-primary-deep"
        >
          {s.viewAll}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </Section>
  );
}

function ServiceCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: string;
}) {
  return (
    <div className="card group transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card">
      <span className="icon-box mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-h3 transition-colors group-hover:text-primary">{title}</h3>
      <p className="text-body mt-2 text-muted">{text}</p>
    </div>
  );
}

import Link from "next/link";
import { Stethoscope, Activity, ArrowRight } from "lucide-react";
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

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={s.eyebrow}
        title={s.title}
        subtitle={s.subtitle}
        center
      />

      <div className="grid gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-gradient-to-b from-primary to-primary-deep p-6 text-on-primary sm:p-7 lg:row-span-2">
          <span className="icon-box mb-4 bg-white/15 text-white">
            <Stethoscope className="h-7 w-7" strokeWidth={1.85} aria-hidden="true" />
          </span>
          <h3 className="text-h3 text-white">{s.featured.title}</h3>
          <p className="text-body mt-2 text-on-primary-muted">{s.featured.text}</p>
        </div>

        {s.items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}

        <div className="card md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-6">
          <span className="icon-box mb-4 h-[3.25rem] w-[3.25rem] lg:mb-0">
            <Activity className="h-7 w-7" strokeWidth={1.85} aria-hidden="true" />
          </span>
          <div className="flex-1">
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

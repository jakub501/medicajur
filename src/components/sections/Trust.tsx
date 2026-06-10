import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Icon } from "../Icon";
import { Section, SectionHeading } from "../Section";

export function Trust({ dict }: { dict: Dictionary }) {
  const t = dict.trust;

  return (
    <Section id="trust" className="py-10 sm:py-12">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} center />

      <p className="text-body-lg mx-auto -mt-4 mb-8 max-w-[36em] text-center font-serif font-semibold text-ink">
        {t.doctorLine}
      </p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <span className="text-eyebrow text-muted">{t.insurersLabel}</span>
        {SITE.insurers.map((name) => (
          <span
            key={name}
            className="inline-flex min-h-10 items-center justify-center rounded-[10px] border border-blue-line bg-blue-soft px-4 py-2 font-serif text-body font-semibold text-primary"
          >
            {name}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => (
          <div
            key={item.title}
            className="card group transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card"
          >
            <span className="icon-box mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-h3 text-[1.2rem]">{item.title}</h3>
            <p className="text-body mt-2 text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

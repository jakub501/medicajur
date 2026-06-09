import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "../Section";
import { Icon } from "../Icon";

export function Trust({ dict }: { dict: Dictionary }) {
  const t = dict.trust;

  return (
    <Section id="trust">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} center />

      <div className="grid gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => (
          <div
            key={item.title}
            className="card transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card"
          >
            <span className="icon-box mb-4">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-h3 text-[1.25rem]">{item.title}</h3>
            <p className="text-body mt-2 text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

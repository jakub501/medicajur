import { Stethoscope, Activity } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "../Section";
import { Icon } from "../Icon";

export function ServicesBento({ dict }: { dict: Dictionary }) {
  const s = dict.services;

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={s.eyebrow}
        title={s.title}
        subtitle={s.subtitle}
        center
      />

      <div className="grid gap-4 sm:gap-[18px] md:grid-cols-3">
        {/* Featured */}
        <div className="row-span-1 rounded-[18px] bg-gradient-to-b from-primary to-primary-deep p-7 text-[#eaf3fa] md:row-span-2">
          <span className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-white/15 text-white">
            <Stethoscope className="h-7 w-7" strokeWidth={1.85} />
          </span>
          <h3 className="text-[24px] text-white">{s.featured.title}</h3>
          <p className="mt-2 text-[#cfe2f0]">{s.featured.text}</p>
        </div>

        {s.items.slice(0, 2).map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}

        {/* POCT wide card */}
        <div className="rounded-[18px] border border-line bg-surface p-7 md:col-span-2 md:flex md:items-center md:gap-6">
          <span className="mb-4 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[13px] bg-blue-soft text-primary md:mb-0">
            <Activity className="h-7 w-7" strokeWidth={1.85} />
          </span>
          <div>
            <h3 className="text-[22px]">{s.poct.title}</h3>
            <p className="mt-1.5 text-[15px] text-muted">{s.poct.text}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.poct.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[7px] bg-blue-soft px-3 py-1.5 text-[13px] font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
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
    <div className="group rounded-[18px] border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card">
      <span className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-blue-soft text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-[22px] transition-colors group-hover:text-primary">{title}</h3>
      <p className="mt-2 text-[15px] text-muted">{text}</p>
    </div>
  );
}

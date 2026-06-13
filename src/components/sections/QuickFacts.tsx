import { Clock, MapPin, Phone, Zap } from "lucide-react";
import { SITE, mapsLink } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { OpenStatus } from "@/components/shared/OpenStatus";

type FactItem = {
  icon: typeof Clock;
  label: string;
  value: React.ReactNode;
};

export function QuickFacts({
  dict,
  todayHours,
  acuteHours,
}: {
  dict: Dictionary;
  todayHours: string;
  acuteHours: string | null;
}) {
  const items: FactItem[] = [
    {
      icon: Clock,
      label: dict.facts.todayLabel,
      value: (
        <>
          {todayHours}
          {acuteHours && (
            <span className="text-body-sm mt-1 flex items-center gap-1.5 font-sans font-semibold text-primary">
              <Zap className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              {acuteHours}
            </span>
          )}
        </>
      ),
    },
    {
      icon: MapPin,
      label: dict.facts.addressLabel,
      value: (
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          {SITE.address.street}, {SITE.address.city}
        </a>
      ),
    },
    {
      icon: Phone,
      label: dict.facts.phoneLabel,
      value: (
        <a href={SITE.phoneHref} className="transition-colors hover:text-primary">
          {SITE.phone}
        </a>
      ),
    },
  ];

  return (
    <Section className="py-8 sm:py-10">
      <div className="mb-4 flex justify-center sm:justify-start">
        <OpenStatus
          openLabel={dict.common.openNow}
          closedLabel={dict.common.closedNow}
        />
      </div>
      <div className="grid overflow-hidden rounded-2xl border border-line bg-line shadow-facts md:grid-cols-3 md:gap-px">
        {items.map(({ icon: IconCmp, label, value }) => (
          <div
            key={label}
            className="flex min-w-0 items-center gap-4 bg-surface px-5 py-5 sm:px-6"
          >
            <span className="icon-box">
              <IconCmp className="h-[22px] w-[22px]" strokeWidth={1.85} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <div className="text-eyebrow text-muted">{label}</div>
              <div className="mt-0.5 break-words font-serif text-body-lg font-semibold text-ink">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

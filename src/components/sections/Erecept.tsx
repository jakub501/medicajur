import { Smartphone, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";

/** Action channel for each step, paired by index with dict.erecept.steps. */
const channels = [
  { icon: Smartphone, href: SITE.bookingUrl, value: SITE.bookingName, external: true },
  { icon: Mail, href: `mailto:${SITE.emails.recipe}`, value: SITE.emails.recipe, external: false },
  { icon: Phone, href: SITE.phoneHref, value: SITE.phone, external: false },
] as const;

export function Erecept({ dict, id }: { dict: Dictionary; id?: string }) {
  const e = dict.erecept;

  return (
    <Section id={id}>
      <div className="mx-auto max-w-[42em] text-center">
        <span className="text-eyebrow text-primary">{e.eyebrow}</span>
        <h2 className="text-h2 mt-2.5">{e.title}</h2>
        <p className="text-body-lg mt-3 text-muted">{e.subtitle}</p>
      </div>

      <div className="mt-9 grid gap-4 sm:gap-[18px] md:grid-cols-3">
        {e.steps.map((step, i) => {
          const ch = channels[i];
          const Icon = ch.icon;
          return (
            <div
              key={step.title}
              className="flex flex-col rounded-[18px] border border-line bg-surface p-7"
            >
              <span className="icon-box h-[42px] w-[42px] rounded-[12px]">
                <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[20px]">{step.title}</h3>
              <p className="mt-2 flex-1 text-[15px] text-muted">{step.text}</p>
              <a
                href={ch.href}
                {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-4 inline-flex min-h-11 items-center gap-2 break-all font-bold text-primary underline-offset-4 hover:underline"
              >
                <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} aria-hidden="true" />
                {ch.value}
              </a>
            </div>
          );
        })}
      </div>

      {e.note && (
        <p className="text-caption mx-auto mt-6 max-w-[44em] text-center text-muted">{e.note}</p>
      )}
    </Section>
  );
}

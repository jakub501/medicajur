import { ArrowRight, Info, Mail, Smartphone } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

export function ExistingPatientsContent({ dict }: { dict: Dictionary }) {
  const s = dict.existingPatients;
  const e = dict.erecept;

  const bookChannels = [
    {
      icon: Smartphone,
      label: s.bookAppLabel,
      value: s.bookAppValue,
      href: SITE.bookingUrl,
      external: true,
      accent: "deep",
    },
    {
      icon: Mail,
      label: dict.common.email,
      value: SITE.emails.doctor,
      href: `mailto:${SITE.emails.doctor}`,
      external: false,
      accent: "primary",
    },
  ] as const;

  return (
    <div className="existing-book-panel p-6 sm:p-8">
      <h3 className="text-h3 text-balance">{s.bookTitle}</h3>
      <p className="text-body mt-2 max-w-[46em] leading-relaxed text-muted">{s.bookText}</p>

      <Reveal stagger className="mt-6 grid gap-3.5 sm:grid-cols-2 sm:gap-4">
        {bookChannels.map((ch) => {
          const Icon = ch.icon;

          return (
            <a
              key={ch.value}
              href={ch.href}
              {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn("contact-tile group", `contact-tile--${ch.accent}`)}
            >
              <span className={cn("trust-ico", `trust-ico--${ch.accent}`)}>
                <Icon className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="contact-tile__label">{ch.label}</span>
                <span className="contact-tile__value">{ch.value}</span>
              </span>
              <ArrowRight className="contact-tile__arrow h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </a>
          );
        })}
      </Reveal>

      {e.note && (
        <p className="text-caption mt-5 flex max-w-[44em] items-start gap-2.5 leading-relaxed text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.85} aria-hidden="true" />
          <span>{e.note}</span>
        </p>
      )}
    </div>
  );
}

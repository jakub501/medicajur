import { ArrowRight, Info, Mail, Phone, Smartphone } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

const bookChannels = [
  {
    icon: Mail,
    labelKey: "email",
    value: SITE.emails.doctor,
    href: `mailto:${SITE.emails.doctor}`,
    accent: "primary",
  },
  {
    icon: Phone,
    labelKey: "phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    accent: "green",
  },
] as const;

const ereceptChannels = [
  { icon: Smartphone, href: SITE.bookingUrl, value: SITE.bookingName, external: true, accent: "deep" },
  { icon: Mail, href: `mailto:${SITE.emails.recipe}`, value: SITE.emails.recipe, external: false, accent: "primary" },
  { icon: Phone, href: SITE.phoneHref, value: SITE.phone, external: false, accent: "green" },
] as const;

export function ExistingPatientsContent({ dict }: { dict: Dictionary }) {
  const s = dict.existingPatients;
  const e = dict.erecept;
  const labels: Record<"email" | "phone", string> = {
    email: dict.common.email,
    phone: dict.common.phone,
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Objednanie termínu — výhradne e-mail + telefón */}
      <div className="existing-book-panel p-6 sm:p-8">
        <h3 className="text-h3 text-balance">{s.bookTitle}</h3>
        <p className="text-body mt-2 max-w-[46em] leading-relaxed text-muted">{s.bookText}</p>

        <div className="mt-6 grid gap-3.5 sm:grid-cols-2 sm:gap-4">
          {bookChannels.map((ch) => {
            const Icon = ch.icon;

            return (
              <a
                key={ch.value}
                href={ch.href}
                className={cn("contact-tile group", `contact-tile--${ch.accent}`)}
              >
                <span className={cn("trust-ico", `trust-ico--${ch.accent}`)}>
                  <Icon className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="contact-tile__label">{labels[ch.labelKey]}</span>
                  <span className="contact-tile__value">{ch.value}</span>
                </span>
                <ArrowRight className="contact-tile__arrow h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>

      {/* E-recept */}
      <div>
        <h3 className="text-h3 text-balance">{e.title}</h3>
        <p className="text-body mt-2 max-w-[42em] leading-relaxed text-muted">{e.subtitle}</p>

        <div className="mt-5 grid gap-3.5 sm:grid-cols-3 sm:gap-4">
          {e.steps.map((step, i) => {
            const ch = ereceptChannels[i];
            const Icon = ch.icon;

            return (
              <div
                key={step.title}
                className={cn("trust-card group flex h-full flex-col", `trust-card--${ch.accent}`)}
              >
                <span className={cn("trust-ico", `trust-ico--${ch.accent}`)}>
                  <Icon className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />
                </span>
                <h4 className="trust-card__title mt-5 text-[1.1rem]">{step.title}</h4>
                <span className="trust-card__rule mt-3" aria-hidden="true" />
                <p className="mt-3 text-[0.9375rem] leading-[1.65] text-muted">{step.text}</p>
                <div className="flex-1" />
                <a
                  href={ch.href}
                  {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-4 inline-flex items-center gap-2 text-body-sm font-bold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
                >
                  <Icon className="h-[17px] w-[17px] shrink-0" strokeWidth={1.85} aria-hidden="true" />
                  <span className="min-w-0 break-all">{ch.value}</span>
                </a>
              </div>
            );
          })}
        </div>

        {e.note && (
          <p className="text-caption mt-5 flex max-w-[44em] items-start gap-2.5 leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.85} aria-hidden="true" />
            <span>{e.note}</span>
          </p>
        )}
      </div>
    </div>
  );
}

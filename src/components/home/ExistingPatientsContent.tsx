import { Info, Smartphone, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { BookingCard } from "@/components/home/BookingCard";

const channels = [
  { icon: Smartphone, href: SITE.bookingUrl, value: SITE.bookingName, external: true },
  { icon: Mail, href: `mailto:${SITE.emails.recipe}`, value: SITE.emails.recipe, external: false },
  { icon: Phone, href: SITE.phoneHref, value: SITE.phone, external: false },
] as const;

export function ExistingPatientsContent({ dict }: { dict: Dictionary }) {
  const p = dict.patientsPage;
  const e = dict.erecept;

  return (
    <div className="flex flex-col gap-8">
      <BookingCard title={p.bookTitle} text={p.bookText} />

      <div>
        <h3 className="text-h3 text-balance">{e.title}</h3>
        <p className="text-body mt-2 max-w-[42em] leading-relaxed text-muted">{e.subtitle}</p>

        <div className="mt-5 grid gap-3.5 sm:grid-cols-3 sm:gap-4">
          {e.steps.map((step, i) => {
            const ch = channels[i];
            const Icon = ch.icon;

            return (
              <div
                key={step.title}
                className="card flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-card sm:p-6"
              >
                <span className="icon-box mb-5 block h-10 w-10 shrink-0 sm:mb-6">
                  <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
                </span>
                <h4 className="font-serif text-body font-medium leading-snug text-ink">{step.title}</h4>
                <p className="text-body-sm mt-2 flex-1 leading-relaxed text-muted">{step.text}</p>
                <a
                  href={ch.href}
                  {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-body-sm mt-4 flex min-h-10 items-center font-bold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
                >
                  <span className="mr-3.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 break-all leading-snug">{ch.value}</span>
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

import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE, mapsLink } from "@/lib/site";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { cn } from "@/lib/cn";

const CONTACT_ACCENTS = ["primary", "green", "deep"] as const;

export function ContactPanel({
  dict,
  id,
  withMap = true,
  withEmails = false,
  className,
}: {
  dict: Dictionary;
  id?: string;
  withMap?: boolean;
  withEmails?: boolean;
  className?: string;
}) {
  return (
    <div id={id} className={cn("contact-panel-card card flex h-full flex-col shadow-soft", className)}>
      <div className="mb-5 flex items-center gap-3.5">
        <span className="hero-float-badge-icon hero-float-badge-icon--green h-10 w-10 shrink-0 rounded-[11px]">
          <MapPin className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
        </span>
        <h3 className="text-h3">{dict.contact.title}</h3>
      </div>

      <div className="flex flex-col gap-3">
        <ContactLine
          icon={<MapPin className="h-[18px] w-[18px]" strokeWidth={1.85} />}
          label={dict.common.address}
          accent={CONTACT_ACCENTS[0]}
        >
          <span className="font-serif text-body-lg font-semibold text-ink">
            {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
          </span>
          <span className="text-caption mt-1 block leading-relaxed text-muted">
            {dict.contact.addressNote}
          </span>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm mt-2.5 inline-flex min-h-10 items-center gap-1.5 rounded-[10px] border border-blue-line bg-surface px-3.5 font-bold text-primary shadow-soft transition-all hover:border-primary/35 hover:bg-blue-soft/60 hover:text-primary-deep"
          >
            <Navigation className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
            {dict.common.getDirections}
          </a>
        </ContactLine>

        <ContactLine
          icon={<Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />}
          label={dict.common.phone}
          accent={CONTACT_ACCENTS[1]}
        >
          <a
            href={SITE.phoneHref}
            className="font-serif text-body-lg font-semibold text-primary transition-colors hover:text-primary-deep"
          >
            {SITE.phone}
          </a>
          <span className="text-caption mt-1 block text-muted">
            {dict.common.callDuringHours}
          </span>
        </ContactLine>

        <ContactLine
          icon={<Mail className="h-[18px] w-[18px]" strokeWidth={1.85} />}
          label={dict.common.email}
          accent={CONTACT_ACCENTS[2]}
        >
          <a
            href={`mailto:${SITE.emails.doctor}`}
            className="font-serif text-body-lg font-semibold text-primary transition-colors hover:text-primary-deep hover:underline"
          >
            {SITE.emails.doctor}
          </a>
        </ContactLine>

        {withEmails && (
          <ContactLine
            icon={<Mail className="h-[18px] w-[18px]" strokeWidth={1.85} />}
            label={dict.contact.emailsTitle}
            accent={CONTACT_ACCENTS[2]}
          >
            <div className="flex flex-col gap-1">
              <EmailRow label={dict.contact.emailDoctor} email={SITE.emails.doctor} />
              <EmailRow label={dict.contact.emailRecipe} email={SITE.emails.recipe} />
              <EmailRow label={dict.contact.emailNurse} email={SITE.emails.nurse} />
            </div>
          </ContactLine>
        )}
      </div>

      {withMap && (
        <div className="contact-map-frame mt-5 overflow-hidden rounded-[14px]">
          <MapEmbed title={dict.contact.mapTitle} className="h-[200px] md:h-[240px]" />
        </div>
      )}
    </div>
  );
}

function ContactLine({
  icon,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  accent: (typeof CONTACT_ACCENTS)[number];
  children: React.ReactNode;
}) {
  return (
    <div className="contact-line flex items-start gap-3.5 rounded-xl border border-line/60 bg-bg/35 px-4 py-3.5 transition-colors hover:border-blue-line/70 hover:bg-bg/55">
      <span
        className={cn(
          "hero-float-badge-icon h-10 w-10 shrink-0 rounded-[11px]",
          `hero-float-badge-icon--${accent}`,
        )}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-eyebrow font-bold text-muted">{label}</div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

function EmailRow({ label, email }: { label: string; email: string }) {
  return (
    <span className="text-body-sm">
      <span className="text-muted">{label}: </span>
      <a href={`mailto:${email}`} className="font-semibold text-primary hover:underline">
        {email}
      </a>
    </span>
  );
}

import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE, mapsLink } from "@/lib/site";
import { MapEmbed } from "@/components/contact/MapEmbed";
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
    <div id={id} className={cn("hours-contact-panel flex h-full flex-col", className)}>
      <div className="mb-5 flex items-center gap-3">
        <span className="trust-ico trust-ico--green h-10 w-10 shrink-0 rounded-[13px]">
          <MapPin className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
        </span>
        <h3 className="trust-card__title">{dict.contact.title}</h3>
      </div>

      <div className="flex flex-col gap-3">
        <ContactTile
          icon={<MapPin className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />}
          label={dict.common.address}
          accent={CONTACT_ACCENTS[0]}
        >
          <span className="contact-tile__value font-serif">
            {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
          </span>
          <span className="text-body-sm mt-1 block leading-relaxed text-muted">
            {dict.contact.addressNote}
          </span>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-body-sm mt-3 inline-flex min-h-10 items-center gap-1.5 rounded-[10px] px-3.5 font-bold shadow-soft transition-all hover:-translate-y-px"
          >
            <Navigation className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
            {dict.common.getDirections}
          </a>
        </ContactTile>

        <ContactTile
          icon={<Phone className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />}
          label={dict.common.phone}
          accent={CONTACT_ACCENTS[1]}
        >
          <a
            href={SITE.phoneHref}
            className="contact-tile__value font-serif text-primary transition-colors hover:text-primary-deep"
          >
            {SITE.phone}
          </a>
        </ContactTile>

        <ContactTile
          icon={<Mail className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />}
          label={dict.common.email}
          accent={CONTACT_ACCENTS[2]}
        >
          <a
            href={`mailto:${SITE.emails.doctor}`}
            className="contact-tile__value font-serif text-primary transition-colors hover:text-primary-deep hover:underline"
          >
            {SITE.emails.doctor}
          </a>
        </ContactTile>

        {withEmails && (
          <ContactTile
            icon={<Mail className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />}
            label={dict.contact.emailsTitle}
            accent={CONTACT_ACCENTS[2]}
          >
            <div className="flex flex-col gap-1">
              <EmailRow label={dict.contact.emailDoctor} email={SITE.emails.doctor} />
              <EmailRow label={dict.contact.emailRecipe} email={SITE.emails.recipe} />
              <EmailRow label={dict.contact.emailNurse} email={SITE.emails.nurse} />
            </div>
          </ContactTile>
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

function ContactTile({
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
    <div className={cn("contact-tile group items-start", `contact-tile--${accent}`)}>
      <span className={cn("trust-ico shrink-0", `trust-ico--${accent}`)}>{icon}</span>
      <div className="min-w-0 flex-1">
        <span className="contact-tile__label">{label}</span>
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

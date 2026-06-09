import { Clock, Info, MapPin, Phone, Mail, Navigation } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE, mapsLink } from "@/lib/site";
import { Section } from "../Section";
import { HoursTable } from "../HoursTable";
import { MapEmbed } from "../MapEmbed";
import { cn } from "@/lib/cn";

export function HoursPanel({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div className={cn("card", className)}>
      <div className="mb-5 flex items-center gap-3">
        <Clock className="h-6 w-6 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <h3 className="text-h3">{dict.hoursSection.title}</h3>
      </div>
      <HoursTable dict={dict} />
      <div className="text-body-sm mt-4 flex items-start gap-2.5 rounded-xl bg-blue-soft px-4 py-3.5 text-primary-deep">
        <Info className="mt-px h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <span>{dict.hoursSection.note}</span>
      </div>
    </div>
  );
}

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
    <div id={id} className={cn("card", className)}>
      <div className="mb-5 flex items-center gap-3">
        <MapPin className="h-6 w-6 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <h3 className="text-h3">{dict.contact.title}</h3>
      </div>

      <div className="flex flex-col gap-[18px]">
        <ContactLine
          icon={<MapPin className="h-5 w-5" strokeWidth={1.85} />}
          label={dict.common.address}
        >
          <span className="font-serif text-body-lg font-semibold text-ink">
            {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
          </span>
          <span className="text-caption mt-1 block text-muted">
            {dict.contact.addressNote}
          </span>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm mt-2 inline-flex min-h-11 items-center gap-1.5 font-bold text-primary hover:underline"
          >
            <Navigation className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
            {dict.common.getDirections}
          </a>
        </ContactLine>

        <ContactLine
          icon={<Phone className="h-5 w-5" strokeWidth={1.85} />}
          label={dict.common.phone}
        >
          <a
            href={SITE.phoneHref}
            className="font-serif text-body-lg font-semibold text-primary"
          >
            {SITE.phone}
          </a>
          <span className="text-caption mt-1 block text-muted">
            {dict.common.callDuringHours}
          </span>
        </ContactLine>

        {withEmails && (
          <ContactLine
            icon={<Mail className="h-5 w-5" strokeWidth={1.85} />}
            label={dict.contact.emailsTitle}
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
        <MapEmbed
          title={dict.contact.mapTitle}
          className="mt-5 h-[200px] md:h-[240px]"
        />
      )}
    </div>
  );
}

function ContactLine({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="icon-box h-[42px] w-[42px] rounded-[11px]">{icon}</span>
      <div className="min-w-0">
        <div className="text-eyebrow text-muted">{label}</div>
        <div className="mt-0.5">{children}</div>
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

export function HoursContact({ dict }: { dict: Dictionary }) {
  return (
    <Section id="hours">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <HoursPanel dict={dict} />
        <ContactPanel dict={dict} id="kontakt" />
      </div>
    </Section>
  );
}

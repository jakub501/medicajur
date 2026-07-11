import { Building2, Globe, CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { HoursPanel } from "@/components/contact/HoursPanel";

export function ContactPage({ dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.contact;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <Section>
        <Reveal stagger className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <ContactPanel dict={dict} withMap withEmails />
          <div className="flex flex-col gap-5">
            <HoursPanel dict={dict} />

            {/* Online portal */}
            <div className="rounded-[18px] bg-gradient-to-br from-primary to-primary-deep p-6 text-[#eaf3fa] sm:p-7">
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-white/15 text-white">
                <Globe className="h-6 w-6" strokeWidth={1.85} />
              </span>
              <h3 className="mt-4 text-[22px] text-white">{c.portalTitle}</h3>
              <p className="mt-2 text-[14.5px] text-[#cfe2f0]">{c.portalText}</p>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[14.5px] font-bold text-primary transition-colors hover:bg-blue-soft"
              >
                <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {SITE.bookingName}
              </a>
            </div>

            {/* Operator */}
            <div className="flex items-start gap-3.5 rounded-[18px] border border-line bg-surface p-6">
              <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-blue-soft text-primary">
                <Building2 className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                  {c.company}
                </div>
                <div className="mt-0.5 font-serif text-[18px] font-semibold text-ink">
                  {SITE.company}
                </div>
                <div className="text-[14px] text-muted">{SITE.doctor}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

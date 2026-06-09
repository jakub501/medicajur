import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Section } from "../Section";
import { Icon } from "../Icon";
import { ButtonAnchor, ButtonLink } from "../Button";

export function NewPatients({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section id="about">
      <div className="grid overflow-hidden rounded-2xl border border-line shadow-card md:grid-cols-2">
        <div className="relative overflow-hidden bg-primary px-6 py-10 text-on-primary sm:px-10 sm:py-12">
          <span
            className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-white/[0.07]"
            aria-hidden="true"
          />
          <span className="text-eyebrow relative text-on-primary-subtle">
            {dict.patients.eyebrow}
          </span>
          <h2 className="text-h2 relative mt-2.5 text-white">{dict.patients.title}</h2>
          <p className="text-body-lg relative mt-3.5 max-w-[34em] text-on-primary-muted">
            {dict.patients.text}
          </p>
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={href(locale, "about")} variant="inverse" size="md">
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.patients.aboutCta}
            </ButtonLink>
            <ButtonLink href={href(locale, "patients")} variant="ghost" size="md">
              {dict.patients.infoCta}
            </ButtonLink>
            <ButtonAnchor href={SITE.phoneHref} variant="ghost" size="md">
              <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.patients.callCta}
            </ButtonAnchor>
          </div>
        </div>

        <div className="bg-surface px-6 py-10 sm:px-10 sm:py-12">
          <h3 className="text-eyebrow mb-6 text-muted">{dict.patients.whyTitle}</h3>
          <ul className="flex flex-col gap-[18px]">
            {dict.about.values.map((value) => (
              <li key={value.title} className="flex items-start gap-4">
                <span className="icon-box h-[38px] w-[38px] rounded-[11px]">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <span className="text-body">
                  <b className="block font-bold text-ink">{value.title}</b>
                  <span className="text-muted">{value.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

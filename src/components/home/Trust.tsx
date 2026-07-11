import { Clock, GraduationCap, Languages, Quote } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

const TRUST_CARD_ACCENTS = ["primary", "green", "deep", "gold"] as const;

/** Initials from a name, ignoring academic titles (words ending in ".") */
function nameInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part.replace(/[.,]/g, ""))
    .filter((part) => part.length > 0 && !part.endsWith("."))
    .filter((part) => !/^(MUDr|PhD|MPH|Mgr|Ing|Dr|prof|doc)$/i.test(part))
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TrustCardShell({
  title,
  icon,
  accent,
  children,
}: {
  title: string;
  icon: string;
  accent: (typeof TRUST_CARD_ACCENTS)[number];
  children: React.ReactNode;
}) {
  return (
    <div className={cn("trust-card group flex h-full flex-col", `trust-card--${accent}`)}>
      <span className={cn("trust-ico", `trust-ico--${accent}`)}>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="trust-card__title mt-6">{title}</h3>
      <span className="trust-card__rule mt-3" aria-hidden="true" />
      <div className="mt-3 flex-1">{children}</div>
    </div>
  );
}

function TrustCard({
  title,
  text,
  icon,
  accent,
}: {
  title: string;
  text: string;
  icon: string;
  accent: (typeof TRUST_CARD_ACCENTS)[number];
}) {
  return (
    <TrustCardShell title={title} icon={icon} accent={accent}>
      <p className="text-[0.9375rem] leading-[1.65] text-muted">{text}</p>
    </TrustCardShell>
  );
}

export function Trust({ dict }: { dict: Dictionary }) {
  const t = dict.trust;
  const doctorInitials = nameInitials(SITE.doctor);

  const credentials = [
    { icon: GraduationCap, label: dict.hero.badges[0]?.title },
    { icon: Clock, label: dict.hero.badges[1]?.title },
    { icon: Languages, label: dict.hero.languagesBadge },
  ].filter((c) => Boolean(c.label));

  return (
    <Section id="trust" className="py-8 sm:py-10">
      <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-8">
        <h2 className="text-h2 text-balance">{t.title}</h2>
        <span
          className="heading-rule mx-auto mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
          aria-hidden="true"
        />
      </div>

      <figure className="trust-dark-band relative mx-auto max-w-5xl px-6 py-9 sm:px-10 sm:py-10">
        <span className="trust-dark-band__sheen" aria-hidden="true" />
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-12">
          <blockquote className="relative">
            <Quote
              className="trust-dark-band__quote mb-3 h-11 w-11 sm:h-12 sm:w-12"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="text-balance font-serif text-[1.5rem] font-medium leading-[1.32] text-on-primary sm:text-[1.9rem]">
              {t.quote}
            </p>
          </blockquote>

          <figcaption className="trust-sig-sep mt-2 border-t pt-7 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <div className="flex items-center gap-3">
              <span className="trust-dark-band__avatar" aria-hidden="true">
                {doctorInitials}
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-[1.05rem] font-medium text-white">
                  {SITE.doctor}
                </span>
                <span className="mt-0.5 block text-body-sm text-on-primary-subtle">
                  {t.quoteRole}
                </span>
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {credentials.map(({ icon: CredIcon, label }) => (
                <span key={label} className="trust-cred">
                  <span className="trust-cred__icon" aria-hidden="true">
                    <CredIcon className="h-[17px] w-[17px]" strokeWidth={1.9} />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </figcaption>
        </div>
      </figure>

      <div className="mx-auto mt-4 max-w-5xl sm:mt-5">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:items-stretch sm:gap-4">
          {t.items.map((item, index) => (
            <TrustCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
              accent={TRUST_CARD_ACCENTS[index]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

import { CalendarCheck, Languages, UserPlus, Stethoscope } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "../Container";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { OpenStatus } from "../OpenStatus";
import { ButtonAnchor, ButtonLink } from "../Button";

function HeroBadge({
  icon: Icon,
  title,
  subtitle,
  className,
}: {
  icon: typeof Stethoscope;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-badge flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-float",
        className,
      )}
    >
      <span className="icon-box h-[38px] w-[38px] rounded-[10px] shadow-soft">
        <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
      </span>
      <span>
        <span className="block font-serif text-body font-semibold leading-tight text-ink">
          {title}
        </span>
        <span className="block text-caption text-muted">{subtitle}</span>
      </span>
    </div>
  );
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="shell-gradient hero-section--flush relative overflow-hidden border-b border-line/70 pb-14 sm:pb-16 lg:pb-20">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <span
        className="orb"
        style={{
          width: 480,
          height: 480,
          top: -280,
          left: -160,
          background: "rgba(46,158,107,0.12)",
        }}
        aria-hidden="true"
      />
      <span
        className="orb"
        style={{
          width: 420,
          height: 420,
          top: -140,
          right: -120,
          background: "rgba(21,99,156,0.14)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-1 flex max-w-xl animate-rise flex-col justify-center gap-5 lg:gap-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-line bg-blue-soft/80 px-3.5 py-1.5 text-eyebrow font-bold text-primary">
                <UserPlus className="h-3.5 w-3.5" strokeWidth={2.1} aria-hidden="true" />
                {dict.hero.eyebrow}
              </span>
              <OpenStatus
                openLabel={dict.common.openNow}
                closedLabel={dict.common.closedNow}
              />
            </div>

            <div>
              <p className="text-eyebrow mb-2 font-bold text-muted">{dict.common.doctorRole}</p>
              <h1 className="text-display text-balance font-medium leading-[1.12]">
                <span className="block">{dict.hero.titleLine1}</span>
                <span className="block text-h2 mt-1 font-normal text-muted">
                  {dict.hero.titleLine2Prefix}
                  <span className="text-primary">{dict.hero.titleHighlight}</span>
                </span>
              </h1>
            </div>

            <p className="text-body-lg max-w-[32em] text-pretty leading-[1.65] text-muted">
              {dict.hero.lead}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-caption font-semibold text-muted">{dict.hero.insurersLabel}</span>
              {SITE.insurers.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-caption font-bold text-primary"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ButtonAnchor
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="w-full justify-center whitespace-nowrap shadow-float"
              >
                <CalendarCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                <span>{dict.hero.primaryCta}</span>
              </ButtonAnchor>
              <ButtonLink
                href={href(locale, "patients")}
                variant="secondary"
                size="md"
                className="w-full justify-center whitespace-nowrap"
              >
                <UserPlus className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                <span>{dict.hero.secondaryCta}</span>
              </ButtonLink>
            </div>

            <p className="text-caption text-muted">{dict.hero.bookingNote}</p>
          </div>

          <div className="order-2 animate-rise [animation-delay:120ms]">
            <div className="relative mx-auto w-full max-w-[520px] md:max-w-none">
              <div className="relative rounded-[22px] p-1.5 shadow-xl shadow-primary/10 sm:p-2">
                <ImagePlaceholder
                  src={SITE.images.doctor || undefined}
                  alt={dict.hero.photoAlt}
                  label={dict.hero.photoAlt}
                  priority
                  className="h-[280px] w-full rounded-[16px] sm:h-[360px] md:h-[400px] lg:h-[460px]"
                />
              </div>

              <div className="absolute left-4 top-4 z-10 hidden flex-col gap-3 md:flex">
                <div className="animate-floaty">
                  <HeroBadge
                    icon={Stethoscope}
                    title={SITE.doctor}
                    subtitle={dict.hero.badgeDoctor}
                  />
                </div>
                <HeroBadge
                  icon={Languages}
                  title={dict.hero.badgeEnglishTitle}
                  subtitle={dict.hero.badgeEnglish}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 md:hidden">
              <HeroBadge
                icon={Stethoscope}
                title={SITE.doctor}
                subtitle={dict.hero.badgeDoctor}
              />
              <HeroBadge
                icon={Languages}
                title={dict.hero.badgeEnglishTitle}
                subtitle={dict.hero.badgeEnglish}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

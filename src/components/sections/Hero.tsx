import {
  CalendarCheck,
  GraduationCap,
  Languages,
  Phone,
  Stethoscope,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";

const HERO_BADGE_ICONS: LucideIcon[] = [GraduationCap, Stethoscope];

const HERO_BADGE_ACCENTS = ["gold", "green"] as const;

function HeroBadge({
  icon: Icon,
  title,
  subtitle,
  accent,
  compact = false,
  className,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accent: (typeof HERO_BADGE_ACCENTS)[number];
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "hero-float-badge flex items-center gap-2.5 rounded-2xl",
        compact ? "px-3 py-2.5" : "px-3.5 py-3 sm:px-4 sm:py-3.5",
        className,
      )}
    >
      <span className={cn("hero-float-badge-icon", `hero-float-badge-icon--${accent}`)}>
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block font-semibold leading-tight text-ink",
            compact ? "text-body-sm" : "text-[0.9375rem]",
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "mt-0.5 block leading-snug text-muted",
            compact ? "text-[0.75rem]" : "text-[0.78rem]",
          )}
        >
          {subtitle}
        </span>
      </span>
    </div>
  );
}

const HERO_BADGE_POSITIONS = [
  "left-0 top-[12%] -translate-x-[30%] lg:-translate-x-[36%]",
  "right-0 bottom-[12%] translate-x-[20%] lg:translate-x-[24%]",
] as const;

const HERO_BADGE_DELAYS = ["0s", "1.2s"] as const;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const badges = dict.hero.badges.map((badge, index) => ({
    ...badge,
    icon: HERO_BADGE_ICONS[index],
    accent: HERO_BADGE_ACCENTS[index],
    position: HERO_BADGE_POSITIONS[index],
    delay: HERO_BADGE_DELAYS[index],
  }));

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
            </div>

            <div>
              <h1 className="text-display text-balance font-medium leading-[1.12]">
                <span className="block">{dict.hero.titleLine1}</span>
                <span className="text-h2 mt-1 block font-normal text-muted">
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
                className="w-full justify-center px-5 shadow-float sm:col-span-2"
              >
                <CalendarCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                <span>{dict.hero.primaryCta}</span>
              </ButtonAnchor>
              <ButtonLink
                href={href(locale, "patients")}
                variant="secondary"
                size="md"
                className="w-full justify-center px-5 sm:px-6"
              >
                <UserPlus className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                <span>{dict.hero.secondaryCta}</span>
              </ButtonLink>
              <ButtonAnchor
                href={SITE.phoneHref}
                variant="secondary"
                size="md"
                className="w-full justify-center px-5 sm:px-6"
              >
                <Phone className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                <span>{dict.common.call}</span>
              </ButtonAnchor>
            </div>

            <p className="text-caption text-muted">
              {dict.hero.bookingNotePrefix}
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary-deep hover:decoration-primary/60"
              >
                {SITE.bookingName}
              </a>
            </p>
          </div>

          <div className="order-2 overflow-visible animate-rise [animation-delay:120ms]">
            <div className="relative mx-auto w-full max-w-[520px] md:max-w-none md:px-6 lg:px-8">
              <div className="hero-frame relative rounded-[22px] p-1.5 sm:p-2">
                <ImagePlaceholder
                  src={SITE.images.doctor || undefined}
                  alt={dict.hero.photoAlt}
                  label={dict.hero.photoAlt}
                  priority
                  className="h-[280px] w-full rounded-[16px] sm:h-[360px] md:h-[400px] lg:h-[460px]"
                />
              </div>

              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className={cn(
                    "pointer-events-none absolute z-10 hidden max-w-[min(220px,44%)] md:block",
                    badge.position,
                  )}
                >
                  <div className="animate-floaty-badge" style={{ animationDelay: badge.delay }}>
                    <HeroBadge
                      icon={badge.icon}
                      title={badge.title}
                      subtitle={badge.subtitle}
                      accent={badge.accent}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-line bg-blue-soft/80 px-3.5 py-1.5 text-caption font-bold text-primary">
                <Languages className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                {dict.hero.languagesBadge}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:hidden">
              {badges.map((badge) => (
                <HeroBadge
                  key={badge.title}
                  icon={badge.icon}
                  title={badge.title}
                  subtitle={badge.subtitle}
                  accent={badge.accent}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

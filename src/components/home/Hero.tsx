import {
  GraduationCap,
  Languages,
  Mail,
  Phone,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonAnchor } from "@/components/ui/Button";

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

export function Hero({ dict }: { locale: Locale; dict: Dictionary }) {
  const badges = dict.hero.badges.map((badge, index) => ({
    ...badge,
    icon: HERO_BADGE_ICONS[index],
    accent: HERO_BADGE_ACCENTS[index],
    position: HERO_BADGE_POSITIONS[index],
    delay: HERO_BADGE_DELAYS[index],
  }));

  return (
    <section className="hero-section--flush relative pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-1 flex max-w-xl animate-rise flex-col justify-center gap-6 lg:gap-7">
            <div className="flex flex-col gap-4">
              <h1 className="text-display text-balance font-medium leading-[1.1]">
                <span className="block">{dict.hero.titleLine1}</span>
                <span className="text-h2 mt-1.5 block font-normal text-muted">
                  {dict.hero.titleLine2Prefix}
                  <span className="text-primary">{dict.hero.titleHighlight}</span>
                </span>
              </h1>

              <p className="text-body-lg max-w-[33em] text-pretty leading-[1.7] text-muted">
                {dict.hero.lead}
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <ButtonAnchor
                  href={`mailto:${SITE.emails.doctor}`}
                  size="md"
                  className="w-full justify-center px-5"
                >
                  <Mail className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                  <span>{dict.hero.primaryCta}</span>
                </ButtonAnchor>
                <ButtonAnchor
                  href={SITE.phoneHref}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center px-5"
                >
                  <Phone className="h-[18px] w-[18px] shrink-0" strokeWidth={1.85} />
                  <span>{dict.common.call}</span>
                </ButtonAnchor>
              </div>
            </div>
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

import { Mail, Phone, Star } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { getGooglePlaceStats } from "@/lib/google-place-stats";
import { formatGoogleRating } from "@/lib/format-google-stats";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonAnchor } from "@/components/ui/Button";

function ProofStars({ rating }: { rating: number }) {
  const filled = Math.round(rating);

  return (
    <span className="inline-flex items-center gap-px" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-3.5 w-3.5",
            index < filled ? "fill-gold text-gold" : "fill-transparent text-gold/30",
          )}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

export async function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const stats = await getGooglePlaceStats();
  const ratingLabel = formatGoogleRating(stats.rating, locale);

  return (
    <section className="hero-section--flush relative overflow-hidden pb-14 sm:pb-16 lg:pb-20">
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-aurora__blob hero-aurora__blob--a" />
        <span className="hero-aurora__blob hero-aurora__blob--b" />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-1 flex max-w-xl flex-col justify-center gap-6 lg:gap-7">
            <div className="flex flex-col gap-4">
              <span className="fade-up d-1 inline-flex items-center gap-2 self-start rounded-full border border-blue-line bg-blue-soft/70 px-3.5 py-1.5 text-eyebrow text-primary">
                <span
                  className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brand-green"
                  aria-hidden="true"
                />
                {dict.hero.eyebrow}
              </span>

              <h1 className="fade-up d-2 text-display text-balance font-semibold leading-[1.06]">
                <span className="block">{dict.hero.titleLine1}</span>
                <span className="text-h2 mt-2 block font-normal text-muted">
                  {dict.hero.titleLine2Prefix}
                  <span className="text-gradient font-semibold">{dict.hero.titleHighlight}</span>
                </span>
              </h1>

              <p className="fade-up d-3 text-body-lg max-w-[33em] text-pretty leading-[1.7] text-muted">
                {dict.hero.lead}
              </p>
            </div>

            <div className="fade-up d-4 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <span className="proof-chip">
                <ProofStars rating={stats.rating} />
                <span>{ratingLabel}</span>
                <span className="proof-chip__muted">Google</span>
              </span>
              <span className="proof-divider" aria-hidden="true" />
              <span className="proof-chip">{dict.hero.languagesBadge}</span>
              <span className="proof-divider" aria-hidden="true" />
              <span className="proof-chip proof-chip__muted">{SITE.insurers.join(" · ")}</span>
            </div>

            <div className="fade-up d-5 flex flex-col gap-3.5">
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

          <div className="order-2 animate-rise [animation-delay:240ms]">
            <div className="relative mx-auto w-full max-w-[540px] md:max-w-none md:px-4 lg:px-6">
              <div className="hero-frame-glow" aria-hidden="true" />
              <div className="hero-frame relative rounded-[22px] p-1.5 sm:p-2">
                <div className="hero-photo h-[300px] w-full sm:h-[380px] md:h-[420px] lg:h-[480px]">
                  <div className="hero-photo-tone">
                    <ImagePlaceholder
                      src={SITE.images.doctor || undefined}
                      alt={dict.hero.photoAlt}
                      label={dict.hero.photoAlt}
                      priority
                      className="h-full w-full"
                    />
                  </div>
                  <div className="hero-photo-grade" aria-hidden="true" />
                  <div className="hero-photo-caption">
                    <span className="hero-photo-caption__dot" aria-hidden="true" />
                    <span className="hero-photo-caption__name">
                      {SITE.brand} · {SITE.address.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

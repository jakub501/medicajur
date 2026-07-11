import { ArrowUpRight, Quote, Star } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getGooglePlaceStats, type GooglePlaceStats } from "@/lib/google-place-stats";
import {
  formatGoogleRating,
  formatGoogleReviewCount,
} from "@/lib/format-google-stats";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "@/components/ui/Section";

const REVIEW_ACCENTS = ["primary", "green", "deep", "gold"] as const;

function reviewInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part.replace(/\./g, "")[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StarRow({
  rating,
  className,
  size = "md",
}: {
  rating: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const starClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      aria-label={`${formatGoogleRating(rating, "en")} / 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const fillLevel = Math.min(1, Math.max(0, rating - index));

        return (
          <span key={index} className="relative inline-flex">
            <Star
              className={cn(starClass, "fill-transparent text-gold/30")}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            {fillLevel > 0 ? (
              <Star
                className={cn(
                  starClass,
                  "absolute inset-0 fill-gold text-gold",
                )}
                strokeWidth={1.5}
                style={fillLevel < 1 ? { clipPath: `inset(0 ${100 - fillLevel * 100}% 0 0)` } : undefined}
                aria-hidden="true"
              />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function GoogleReviewsBanner({
  dict,
  locale,
  stats,
}: {
  dict: Dictionary["reviews"];
  locale: Locale;
  stats: GooglePlaceStats;
}) {
  const ratingLabel = formatGoogleRating(stats.rating, locale);
  const reviewCountLabel =
    stats.reviewCount > 0 ? formatGoogleReviewCount(stats.reviewCount, locale) : null;

  return (
    <a
      href={SITE.googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="reviews-google-banner group"
    >
      <div className="reviews-google-banner__brand">
        <span className="reviews-google-banner__icon">
          <GoogleMark className="h-5 w-5" />
        </span>
        <div>
          <p className="text-body-sm font-bold text-ink">{dict.googleBadge}</p>
          <p className="text-caption mt-0.5 text-muted">{dict.googleRatingHint}</p>
        </div>
      </div>

      <div className="reviews-google-banner__rating">
        <div className="reviews-google-banner__rating-top">
          <span className="reviews-google-banner__score">{ratingLabel}</span>
          <StarRow rating={stats.rating} />
        </div>
        {reviewCountLabel ? (
          <p className="reviews-google-banner__count">{reviewCountLabel}</p>
        ) : null}
      </div>

      <span className="reviews-google-banner__cta">
        {dict.googleCta}
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </span>
    </a>
  );
}

function ReviewCard({
  name,
  meta,
  text,
  accent,
}: {
  name: string;
  meta: string;
  text: string;
  accent: (typeof REVIEW_ACCENTS)[number];
}) {
  return (
    <article className={cn("review-card group flex h-full flex-col", `review-card--${accent}`)}>
      <Quote
        className="review-card__quote pointer-events-none"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div className="review-card__header">
        <span className={cn("review-card__avatar", `review-card__avatar--${accent}`)} aria-hidden="true">
          {reviewInitials(name)}
        </span>
        <StarRow rating={5} size="sm" className="gap-px" />
      </div>

      <blockquote className="review-card__text text-[0.95rem] flex-1 text-pretty leading-[1.6] text-muted">
        <span aria-hidden="true" className="text-[1.15em] leading-none text-primary/35">
          „
        </span>
        {text}
        <span aria-hidden="true" className="text-[1.15em] leading-none text-primary/35">
          "
        </span>
      </blockquote>

      <footer className="review-card__footer border-t border-line/70">
        <p className="font-serif text-body font-medium text-ink">{name}</p>
        {meta ? <p className="text-caption mt-1 text-muted">{meta}</p> : null}
      </footer>
    </article>
  );
}

export async function ReviewsSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const r = dict.reviews;
  const stats = await getGooglePlaceStats();

  return (
    <Section id="reviews" className="py-12 sm:py-16">
      <SectionHeading title={r.title} center />

      <div className="reviews-panel mx-auto max-w-5xl">
        <GoogleReviewsBanner dict={r} locale={locale} stats={stats} />

        <div className="reviews-grid mt-4">
          {r.items.map((item, index) => (
            <ReviewCard
              key={item.name}
              name={item.name}
              meta={item.meta}
              text={item.text}
              accent={REVIEW_ACCENTS[index % REVIEW_ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

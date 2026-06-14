import Link from "next/link";
import { ArrowRight, UserRound } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const HIGHLIGHT_ACCENTS = ["primary", "green", "deep", "gold"] as const;

export function AboutPracticeBanner({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const b = dict.aboutBanner;

  return (
    <Section id="about" className="py-12 sm:py-16">
      <div className="relative mx-auto max-w-5xl animate-rise">
        <div className="trust-quote-panel overflow-hidden">
          <div className="grid items-stretch lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
            <div className="hero-frame rounded-[24px] p-2.5 sm:p-3 lg:h-full lg:rounded-bl-[18px] lg:rounded-br-[26px] lg:rounded-tl-[18px] lg:rounded-tr-[26px] lg:p-3">
              <ImagePlaceholder
                src={SITE.images.doctor || undefined}
                alt={dict.hero.photoAlt}
                label={dict.hero.photoAlt}
                className="h-[260px] w-full rounded-[14px] sm:h-[300px] lg:h-full lg:min-h-[400px]"
              />
            </div>

            <div className="flex w-full flex-col justify-start px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6 lg:px-9 lg:pb-9 lg:pt-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-line bg-blue-soft/70 px-3.5 py-1.5 text-eyebrow font-bold text-primary">
                <UserRound className="h-3.5 w-3.5" strokeWidth={2.1} aria-hidden="true" />
                {b.eyebrow}
              </span>

              <div className="pt-6 sm:pt-7">
                <h2 className="text-h2 text-balance font-medium">{b.title}</h2>
                <p className="text-body-lg mt-3.5 font-medium text-ink sm:mt-4">{b.subtitle}</p>

                <span
                  className="mt-4 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
                  aria-hidden="true"
                />

                <p className="text-body mt-5 max-w-[52em] leading-[1.75] text-muted">{b.text}</p>

                <div className="mt-7">
                  <Link
                    href={href(locale, "about")}
                    className="group inline-flex min-h-11 items-center gap-2.5 rounded-[10px] border border-line bg-surface px-5 text-body-sm font-bold text-primary shadow-sm transition-all duration-300 hover:border-primary/25 hover:bg-blue-soft/55 hover:shadow-[0_10px_28px_-18px_rgba(13,70,116,0.35)]"
                  >
                    {b.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-line/80 bg-gradient-to-b from-bg/60 to-bg/30 px-5 py-5 sm:px-7 sm:py-6">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
              {b.highlights.map((item, index) => (
                <li
                  key={item.text}
                  className="group flex h-full flex-col items-center rounded-xl border border-line/80 bg-surface px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-[0_8px_24px_-16px_rgba(13,70,116,0.28)] sm:px-5"
                >
                  <span
                    className={cn(
                      "hero-float-badge-icon h-10 w-10 shrink-0 rounded-[11px] transition-transform duration-300 group-hover:scale-105",
                      `hero-float-badge-icon--${HIGHLIGHT_ACCENTS[index] ?? "primary"}`,
                    )}
                  >
                    <Icon name={item.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-body-sm mt-3.5 font-medium leading-snug text-ink">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const HIGHLIGHT_ACCENTS = ["primary", "green", "deep", "gold"] as const;

export function AboutDoctorBanner({ dict }: { dict: Dictionary }) {
  const b = dict.aboutBanner;

  return (
    <section className="relative py-10 sm:py-14">
      <Container>
        <div className="relative mx-auto max-w-5xl animate-rise">
          <div className="trust-quote-panel overflow-hidden">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
              <div className="hero-frame rounded-[24px] p-2.5 sm:p-3 lg:h-full lg:rounded-bl-[18px] lg:rounded-br-[26px] lg:rounded-tl-[18px] lg:rounded-tr-[26px] lg:p-3">
                <ImagePlaceholder
                  src={SITE.images.doctor || undefined}
                  alt={dict.hero.photoAlt}
                  label={dict.hero.photoAlt}
                  priority
                  className="h-[260px] w-full rounded-[14px] sm:h-[300px] lg:h-full lg:min-h-[400px]"
                />
              </div>

              <div className="flex w-full flex-col justify-start px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6 lg:px-9 lg:pb-9 lg:pt-3">
                <Eyebrow>{b.eyebrow}</Eyebrow>

                <div className="pt-6 sm:pt-7">
                  <h1 className="text-h1 mt-2.5 text-balance font-medium">{b.title}</h1>
                  <p className="text-body-lg mt-3.5 text-muted sm:mt-4">{b.subtitle}</p>

                  <span
                    className="heading-rule mt-4 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
                    aria-hidden="true"
                  />

                  <p className="text-body-lg mt-5 max-w-[52em] text-pretty leading-[1.7] text-muted">
                    {b.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-line/80 bg-bg/40 px-5 py-5 sm:px-7 sm:py-6">
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {b.highlights.map((item, index) => (
                  <li
                    key={item.text}
                    className="group flex h-full items-start gap-3.5 rounded-xl border border-line/80 bg-surface px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-[0_8px_24px_-16px_rgba(13,70,116,0.28)] sm:flex-col sm:items-center sm:px-5 sm:py-5 sm:text-center"
                  >
                    <span
                      className={cn(
                        "trust-ico shrink-0",
                        `trust-ico--${HIGHLIGHT_ACCENTS[index] ?? "primary"}`,
                      )}
                    >
                      <Icon name={item.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-body min-w-0 font-semibold leading-snug text-ink sm:mt-3.5">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

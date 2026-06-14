import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const HIGHLIGHT_ACCENTS = ["primary", "green", "deep", "gold"] as const;
const PROFILE_ACCENTS = ["primary", "green", "deep", "gold"] as const;

const PROFILE_ACCENT_BAR: Record<(typeof PROFILE_ACCENTS)[number], string> = {
  primary: "from-primary via-primary/70 to-brand-green/80",
  green: "from-brand-green via-brand-green/70 to-primary/60",
  deep: "from-primary-deep via-primary to-brand-green/70",
  gold: "from-[#c9922e] via-[#d4a84a] to-brand-green/70",
};

export function AboutPage({ dict }: { locale: Locale; dict: Dictionary }) {
  const a = dict.about;

  return (
    <>
      <section className="relative py-10 sm:py-14">
        <Container>
          <div className="relative mx-auto max-w-5xl animate-rise">
            <div className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_20px_48px_-28px_rgba(13,70,116,0.28)]">
              <div className="grid items-stretch lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
                <div className="hero-frame rounded-[24px] p-2.5 sm:p-3 lg:h-full lg:rounded-bl-[18px] lg:rounded-br-[26px] lg:rounded-tl-[18px] lg:rounded-tr-[26px] lg:p-3">
                  <ImagePlaceholder
                    src={SITE.images.doctor || undefined}
                    alt={dict.hero.photoAlt}
                    label={dict.hero.photoAlt}
                    priority
                    className="h-[280px] w-full rounded-[14px] sm:h-[320px] lg:h-full lg:min-h-[340px]"
                  />
                </div>

                <div className="flex flex-col justify-start px-6 pb-7 pt-5 text-center sm:px-8 sm:pb-9 sm:pt-6 lg:px-10 lg:pb-9 lg:pt-3 lg:text-left">
                  <span className="text-eyebrow text-primary">{a.eyebrow}</span>

                  <div className="pt-6 sm:pt-7">
                    <h1 className="text-h1 text-balance font-medium">{a.title}</h1>
                    <p className="text-body-lg mt-3.5 font-medium text-ink sm:mt-4">{a.lead}</p>
                    <span
                      className="mx-auto mt-5 block h-1 w-12 rounded-full bg-gradient-to-r from-primary to-brand-green lg:mx-0"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-line bg-gradient-to-b from-bg/80 to-bg/40 px-5 py-5 sm:px-7 sm:py-6">
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                  {a.highlights.map((item, index) => (
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
        </Container>
      </section>

      <Section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="hairline mb-8 sm:mb-10" aria-hidden="true" />

          <div className="flex flex-col gap-5 sm:gap-6">
            {a.profileCards.map((card, index) => {
              const accent = PROFILE_ACCENTS[index] ?? "primary";

              return (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-[20px] border border-line bg-bg transition-all duration-300 hover:border-blue-line hover:shadow-[0_16px_40px_-28px_rgba(13,70,116,0.35)]"
                >
                  <span
                    className={cn(
                      "absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
                      PROFILE_ACCENT_BAR[accent],
                    )}
                    aria-hidden="true"
                  />

                  <div className="p-6 sm:p-7 lg:p-8">
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] font-serif text-[0.8125rem] font-bold tabular-nums transition-transform duration-300 group-hover:scale-105",
                          `hero-float-badge-icon hero-float-badge-icon--${accent}`,
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-h3 pt-1.5 text-balance">{card.title}</h2>
                    </div>

                    {"qualifications" in card && card.qualifications && (
                      <ul className="mt-6 sm:ml-14">
                        {card.qualifications.map((item, qualIndex) => (
                          <li
                            key={item.label}
                            className={cn(
                              "relative flex gap-4 pb-6 last:pb-0",
                              qualIndex < card.qualifications!.length - 1 &&
                                "before:absolute before:bottom-0 before:left-[5px] before:top-7 before:w-px before:bg-gradient-to-b before:from-blue-line before:to-transparent",
                            )}
                          >
                            <span
                              className="relative z-[1] mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/10"
                              aria-hidden="true"
                            />
                            <div className="min-w-0 flex-1">
                              <span className="text-body-sm font-bold tracking-wide text-primary">
                                {item.label}
                              </span>
                              <p className="text-body mt-2 leading-relaxed text-muted">{item.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {"paragraphs" in card && card.paragraphs && (
                      <div className="mt-6 flex flex-col gap-4 border-l-2 border-blue-line/60 pl-5 sm:ml-14 sm:pl-6">
                        {card.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-body leading-[1.75] text-muted first:text-body-lg first:leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}

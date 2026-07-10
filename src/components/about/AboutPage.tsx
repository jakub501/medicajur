import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { AboutDoctorBanner } from "@/components/about/AboutDoctorBanner";

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
      <AboutDoctorBanner dict={dict} />

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

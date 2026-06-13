import { CalendarCheck, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CountUp } from "@/components/ui/CountUp";
import { ButtonAnchor } from "@/components/ui/Button";

export function AboutPage({ dict }: { locale: Locale; dict: Dictionary }) {
  const a = dict.about;
  const yearsOfPractice = Math.max(1, new Date().getFullYear() - 2019);
  const stats = [
    { value: yearsOfPractice, suffix: "+", label: a.stats.years },
    { value: SITE.insurers.length, suffix: "", label: a.stats.insurers },
    { value: 2, suffix: "", label: a.stats.languages },
  ];

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} lead={a.lead} />

      <Section>
        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-12">
          <div className="order-2 md:order-1">
            <div className="text-body-lg flex flex-col gap-4 leading-relaxed text-muted">
              {a.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonAnchor
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
              >
                <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.common.book}
              </ButtonAnchor>
              <ButtonAnchor href={SITE.phoneHref} variant="secondary" size="md">
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {SITE.phone}
              </ButtonAnchor>
            </div>
          </div>

          <ImagePlaceholder
            src={SITE.images.doctor || undefined}
            alt={dict.hero.photoAlt}
            label={dict.hero.photoAlt}
            className="order-1 h-[300px] w-full rounded-xl shadow-card sm:h-[360px] md:order-2 md:h-[400px]"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 sm:gap-[18px]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card"
            >
              <div className="font-serif text-[2.75rem] font-semibold leading-none text-primary">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-eyebrow mt-2 text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-line bg-bg py-12 sm:py-16">
        <Container>
          <h2 className="text-h2 mb-8 sm:mb-10">{a.careerTitle}</h2>
          <div className="flex flex-col gap-8">
            {a.bioSections.map((section) => (
              <article
                key={section.title}
                className="card border-blue-line/60 bg-surface"
              >
                <h3 className="text-h3 text-[1.25rem]">{section.title}</h3>
                <div className="text-body-lg mt-4 flex flex-col gap-3.5 leading-relaxed text-muted">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <h2 className="text-h2 mb-8">{a.valuesTitle}</h2>
          <div className="grid gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v) => (
              <div
                key={v.title}
                className="card group bg-bg transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:bg-surface hover:shadow-card"
              >
                <span className="icon-box mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-h3 text-[1.25rem]">{v.title}</h3>
                <p className="text-body mt-2 text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-2">
          <ImagePlaceholder
            src={SITE.images.facility || undefined}
            alt={a.facilityTitle}
            label={a.facilityTitle}
            className="h-[240px] w-full sm:h-[300px] md:h-[340px]"
          />
          <div className="p-6 sm:p-10">
            <h2 className="text-h2">{a.facilityTitle}</h2>
            <p className="text-body-lg mt-3 text-muted">{a.facilityText}</p>
            <p className="text-body-lg mt-4 font-serif font-semibold text-ink">
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </p>
            <p className="text-body-sm mt-1 text-muted">{dict.contact.addressNote}</p>
          </div>
        </div>
      </Section>
    </>
  );
}

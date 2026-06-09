import { CalendarCheck, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CountUp } from "@/components/CountUp";

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
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-muted">
              {a.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-5 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-primary-deep"
              >
                <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.common.book}
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-blue-line bg-surface px-5 py-3.5 text-[15px] font-bold text-primary transition-colors hover:border-primary"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {SITE.phone}
              </a>
            </div>
          </div>

          <ImagePlaceholder
            src={SITE.images.doctor || undefined}
            alt={dict.hero.photoAlt}
            label={dict.hero.photoAlt}
            className="order-1 h-[340px] w-full rounded-[18px] shadow-card lg:order-2 lg:h-[420px]"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-[18px]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[18px] border border-line bg-surface px-6 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card"
            >
              <div className="font-serif text-[44px] font-semibold leading-none text-primary">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[13px] font-bold uppercase tracking-[0.1em] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-12 sm:py-[54px]">
        <Container>
          <h2 className="mb-8 text-[30px] sm:text-[36px]">{a.valuesTitle}</h2>
          <div className="grid gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v) => (
              <div
                key={v.title}
                className="group rounded-[18px] border border-line bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:bg-surface hover:shadow-card"
              >
                <span className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-blue-soft text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-[20px]">{v.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid items-center gap-8 overflow-hidden rounded-[22px] border border-line bg-surface md:grid-cols-2">
          <ImagePlaceholder
            src={SITE.images.facility || undefined}
            alt={a.facilityTitle}
            label={a.facilityTitle}
            className="h-[260px] w-full md:h-[340px]"
          />
          <div className="p-7 sm:p-10">
            <h2 className="text-[28px] sm:text-[32px]">{a.facilityTitle}</h2>
            <p className="mt-3 text-[17px] text-muted">{a.facilityText}</p>
            <p className="mt-4 font-serif text-[18px] font-semibold text-ink">
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </p>
            <p className="mt-1 text-[14px] text-muted">{dict.contact.addressNote}</p>
          </div>
        </div>
      </Section>
    </>
  );
}

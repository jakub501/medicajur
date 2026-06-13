import { CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ServicesScopeList } from "@/components/pages/ServicesScopeList";
import { ServicesEquipmentList } from "@/components/pages/ServicesEquipmentList";
import { ButtonAnchor } from "@/components/ui/Button";

export function ServicesPage({ dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.pageTitle} lead={s.pageLead} />

      <Section>
        <ServicesScopeList dict={dict} />
      </Section>

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <ServicesEquipmentList dict={dict} />

          <div className="card mt-8 border-blue-line bg-blue-soft">
            <h3 className="text-h3">{s.poct.title}</h3>
            <p className="text-body mt-2 text-muted">{s.poct.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.poct.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[7px] bg-surface px-3 py-1.5 text-body-sm font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <ButtonAnchor
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.common.book}
            </ButtonAnchor>
            <p className="text-caption mt-3 text-muted">{dict.hero.bookingNote}</p>
          </div>
        </Container>
      </section>
    </>
  );
}

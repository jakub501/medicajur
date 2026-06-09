import { CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { ButtonAnchor } from "@/components/Button";

export function ServicesPage({ dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.pageTitle} lead={s.pageLead} />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-[18px]">
          {s.items.map((item) => (
            <div
              key={item.title}
              className="card transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card"
            >
              <span className="icon-box mb-4">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-h3">{item.title}</h3>
              <p className="text-body mt-2 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.detailGroups.map((group) => (
              <div key={group.title} className="card bg-bg">
                <h3 className="text-h3">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-body flex items-start gap-2.5 text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

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

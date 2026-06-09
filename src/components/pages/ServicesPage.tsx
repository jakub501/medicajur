import { Check, Activity, CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Insurers } from "@/components/sections/Insurers";

export function ServicesPage({ dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.pageTitle} lead={s.pageLead} />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {s.detailGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[18px] border border-line bg-surface p-7"
            >
              <h2 className="text-[22px]">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15.5px]">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-blue-soft text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-ink/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="pb-12 sm:pb-[54px]">
        <Container>
          <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-primary to-primary-deep p-8 text-[#eaf3fa] sm:p-11">
            <span className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-white/15 text-white">
              <Activity className="h-7 w-7" strokeWidth={1.85} />
            </span>
            <h2 className="mt-5 max-w-[20em] text-[28px] text-white sm:text-[32px]">
              {s.poct.title}
            </h2>
            <p className="mt-3 max-w-[44em] text-[#cfe2f0]">{s.poct.text}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {s.poct.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[8px] bg-white/15 px-3.5 py-1.5 text-[13.5px] font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-3.5 text-[15px] font-bold text-primary transition-colors hover:bg-blue-soft"
            >
              <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.common.book}
            </a>
          </div>
        </Container>
      </section>

      <Insurers dict={dict} />
    </>
  );
}

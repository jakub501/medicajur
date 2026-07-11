import { Download, FileText, CalendarCheck, Info } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/faq/Faq";
import { Erecept } from "@/components/patients/Erecept";

export function PatientsPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = dict.patientsPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      {/* Steps */}
      <Section>
        <h2 className="mb-8 text-[28px] sm:text-[32px]">{p.newTitle}</h2>
        <Reveal stagger className="grid gap-4 sm:gap-[18px] md:grid-cols-3">
          {dict.patients.steps.map((step, i) => (
            <div
              key={i}
              className="rounded-[18px] border border-line bg-surface p-7"
            >
              <span className="icon-accent icon-accent--primary flex h-[34px] w-[34px] rounded-full text-[15px] font-extrabold">
                {i + 1}
              </span>
              <h3 className="mt-4 text-[20px]">{step.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{step.text}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Booking + documents */}
      <section className="bg-surface py-12 sm:py-[54px]">
        <Container>
          <Reveal stagger className="grid gap-5 lg:grid-cols-2">
            <div className="brand-gradient-panel rounded-[18px] p-7 text-[#eaf3fa] sm:p-9">
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-white/15 text-white">
                <CalendarCheck className="h-6 w-6" strokeWidth={1.85} />
              </span>
              <h2 className="mt-5 text-[26px] text-white">{p.bookTitle}</h2>
              <p className="mt-3 text-[#cfe2f0]">{p.bookText}</p>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inverse mt-6 inline-flex items-center gap-2 rounded-[10px] px-5 py-3.5 text-[15px] font-bold transition-all hover:-translate-y-px"
              >
                <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {SITE.bookingName}
              </a>
            </div>

            <div className="rounded-[18px] border border-line bg-bg p-7 sm:p-9">
              <h2 className="text-[26px]">{p.documentsTitle}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {p.documents.map((doc) => (
                  <li key={doc}>
                    <span className="flex items-center justify-between gap-3 rounded-[12px] border border-line bg-surface px-4 py-3.5">
                      <span className="flex items-center gap-3 text-[15px] font-semibold text-ink">
                        <FileText
                          className="h-5 w-5 shrink-0 text-primary"
                          strokeWidth={1.85}
                        />
                        {doc}
                      </span>
                      <Download
                        className="h-[18px] w-[18px] shrink-0 text-muted"
                        strokeWidth={1.85}
                      />
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-[13px] text-muted">
                <Info className="h-4 w-4 shrink-0" strokeWidth={1.85} />
                {p.documentsNote}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <Erecept dict={dict} />
      </Reveal>

      <Reveal>
        <Faq locale={locale} dict={dict} items={p.faq} />
      </Reveal>
    </>
  );
}

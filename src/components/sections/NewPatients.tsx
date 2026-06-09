import { Download, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "../Container";

export function NewPatients({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="patients" className="py-12 sm:py-[54px]">
      <Container>
        <div className="grid overflow-hidden rounded-[22px] border border-line shadow-card md:grid-cols-2">
          <div className="relative overflow-hidden bg-primary px-7 py-10 text-[#eaf3fa] sm:px-11 sm:py-[50px]">
            <span
              className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-white/[0.07]"
              aria-hidden="true"
            />
            <span className="relative text-[12px] font-bold uppercase tracking-[0.16em] text-[#a8cde6]">
              {dict.patients.eyebrow}
            </span>
            <h2 className="relative mt-2.5 text-[30px] text-white sm:text-[34px]">
              {dict.patients.title}
            </h2>
            <p className="relative mt-3.5 max-w-[34em] text-[#cfe2f0]">
              {dict.patients.text}
            </p>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <a
                href={href(locale, "patients")}
                className="inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[15px] font-bold text-primary transition-colors hover:bg-blue-soft"
              >
                <Download className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.patients.downloadCta}
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-white/40 px-5 py-3 text-[15px] font-bold text-white transition-colors hover:border-white"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.patients.callCta}
              </a>
            </div>
          </div>

          <div className="bg-surface px-7 py-10 sm:px-11 sm:py-[50px]">
            <h3 className="mb-6 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
              {dict.patients.stepsTitle}
            </h3>
            <ol className="flex flex-col gap-[18px]">
              {dict.patients.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-blue-soft text-[14px] font-extrabold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-[15.5px]">
                    <b className="block font-bold text-ink">{step.title}</b>
                    <span className="text-muted">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

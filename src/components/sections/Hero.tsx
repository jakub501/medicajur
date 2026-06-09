import { CalendarCheck, UserPlus, Stethoscope, Languages } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "../Container";
import { OpenStatus } from "../OpenStatus";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-10 sm:pt-14">
      <span
        className="orb"
        style={{
          width: 420,
          height: 420,
          top: -160,
          left: -120,
          background: "rgba(46,158,107,0.1)",
        }}
        aria-hidden="true"
      />
      <span
        className="orb"
        style={{
          width: 360,
          height: 360,
          top: -120,
          right: -100,
          background: "rgba(21,99,156,0.12)",
        }}
        aria-hidden="true"
      />
      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-[50px]">
          <div className="animate-rise">
            <OpenStatus
              openLabel={dict.common.openNow}
              closedLabel={dict.common.closedNow}
            />
            <h1 className="mt-5 text-[40px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[54px]">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-[30em] text-[18px] text-muted sm:text-[18.5px]">
              {dict.hero.lead}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center gap-2 rounded-[10px] px-5 py-3.5 text-[15px] font-bold text-white transition-all"
              >
                <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.hero.primaryCta}
              </a>
              <a
                href={href(locale, "patients")}
                className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-blue-line bg-surface px-5 py-3.5 text-[15px] font-bold text-primary transition-colors hover:border-primary"
              >
                <UserPlus className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative animate-rise [animation-delay:120ms]">
            <ImagePlaceholder
              src={SITE.images.doctor || undefined}
              alt={dict.hero.photoAlt}
              label={dict.hero.photoAlt}
              priority
              className="h-[360px] w-full rounded-[18px] shadow-hero sm:h-[500px]"
            />
            <div className="animate-floaty absolute left-3 top-5 flex items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3.5 shadow-float sm:-left-6">
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-blue-soft text-primary">
                <Stethoscope className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <span>
                <span className="block font-serif text-[16px] font-semibold leading-tight">
                  {SITE.doctor}
                </span>
                <span className="block text-[12px] text-muted">
                  {dict.hero.badgeDoctor}
                </span>
              </span>
            </div>
            <div className="animate-floaty absolute bottom-6 right-3 flex items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3.5 shadow-float [animation-delay:-3s] sm:-right-5">
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-blue-soft text-primary">
                <Languages className="h-5 w-5" strokeWidth={1.85} />
              </span>
              <span>
                <span className="block font-serif text-[16px] font-semibold leading-tight">
                  English speaking
                </span>
                <span className="block text-[12px] text-muted">
                  {dict.hero.badgeEnglish}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

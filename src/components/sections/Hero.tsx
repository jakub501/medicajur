import { CalendarCheck, UserPlus, Stethoscope, Languages } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "../Container";
import { OpenStatus } from "../OpenStatus";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { ButtonAnchor, ButtonLink } from "../Button";

function DoctorBadge({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3.5 shadow-float">
      <span className="icon-box h-[38px] w-[38px] rounded-[10px]">
        <Stethoscope className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
      </span>
      <span>
        <span className="block font-serif text-body font-semibold leading-tight">
          {SITE.doctor}
        </span>
        <span className="block text-caption text-muted">{dict.hero.badgeDoctor}</span>
      </span>
    </div>
  );
}

function EnglishBadge({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-line bg-surface px-4 py-3.5 shadow-float">
      <span className="icon-box h-[38px] w-[38px] rounded-[10px]">
        <Languages className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
      </span>
      <span>
        <span className="block font-serif text-body font-semibold leading-tight">
          {dict.hero.badgeEnglishTitle}
        </span>
        <span className="block text-caption text-muted">{dict.hero.badgeEnglish}</span>
      </span>
    </div>
  );
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
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
        <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="order-1 animate-rise">
            <OpenStatus
              openLabel={dict.common.openNow}
              closedLabel={dict.common.closedNow}
            />
            <h1 className="text-display mt-5 font-medium">{dict.hero.title}</h1>
            <p className="text-body-lg mt-5 max-w-[30em] text-muted">{dict.hero.lead}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonAnchor
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
              >
                <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.hero.primaryCta}
              </ButtonAnchor>
              <ButtonLink href={href(locale, "patients")} variant="secondary" size="md">
                <UserPlus className="h-[18px] w-[18px]" strokeWidth={1.85} />
                {dict.hero.secondaryCta}
              </ButtonLink>
            </div>
            <p className="text-caption mt-3 text-muted">{dict.hero.bookingNote}</p>
          </div>

          <div className="order-2 animate-rise [animation-delay:120ms]">
            <div className="relative">
              <ImagePlaceholder
                src={SITE.images.doctor || undefined}
                alt={dict.hero.photoAlt}
                label={dict.hero.photoAlt}
                priority
                className="h-[260px] w-full rounded-xl shadow-hero sm:h-[340px] md:h-[380px] lg:h-[440px]"
              />
              <div className="animate-floaty absolute left-3 top-4 hidden md:block lg:-left-5">
                <DoctorBadge dict={dict} />
              </div>
              <div className="animate-floaty absolute bottom-4 right-3 hidden md:block lg:-right-4 [animation-delay:-3s]">
                <EnglishBadge dict={dict} />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 md:hidden">
              <DoctorBadge dict={dict} />
              <EnglishBadge dict={dict} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

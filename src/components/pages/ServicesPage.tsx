import { CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { ButtonAnchor } from "@/components/ui/Button";
import { ServicesScopeList } from "@/components/pages/ServicesScopeList";
import { ServicesEquipmentList } from "@/components/pages/ServicesEquipmentList";
import { ServicesPricingSection } from "@/components/pages/ServicesPricingSection";

export function ServicesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="py-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <ServicesScopeList locale={locale} dict={dict} />

          <div id="equipment" className="mt-10 scroll-mt-28 sm:mt-12">
            <ServicesEquipmentList locale={locale} dict={dict} />
          </div>

          <div id="pricing" className="mt-10 scroll-mt-28 sm:mt-12">
            <ServicesPricingSection dict={dict} />
          </div>

          <div className="mt-10 text-center sm:mt-12">
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
        </div>
    </Section>
  );
}

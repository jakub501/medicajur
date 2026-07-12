import { CalendarCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonAnchor } from "@/components/ui/Button";
import { ServicesScopeList } from "@/components/services/ServicesScopeList";
import { ServicesEquipmentList } from "@/components/services/ServicesEquipmentList";
import { ServicesPricingSection } from "@/components/services/ServicesPricingSection";

export function ServicesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="py-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <div id="scope" className="scroll-mt-[5.75rem]">
            <Reveal>
              <ServicesScopeList locale={locale} dict={dict} />
            </Reveal>
          </div>

          <div id="equipment" className="mt-10 scroll-mt-28 sm:mt-12">
            <Reveal>
              <ServicesEquipmentList locale={locale} dict={dict} />
            </Reveal>
          </div>

          <div id="pricing" className="mt-10 scroll-mt-28 sm:mt-12">
            <Reveal>
              <ServicesPricingSection dict={dict} />
            </Reveal>
          </div>

          <Reveal className="mt-10 text-center sm:mt-12">
            <ButtonAnchor href={SITE.bookHref} size="md">
              <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} />
              {dict.common.book}
            </ButtonAnchor>
          </Reveal>
        </div>
    </Section>
  );
}

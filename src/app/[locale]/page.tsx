import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  formatDayAcute,
  formatDayIntervals,
} from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { Trust } from "@/components/sections/Trust";
import { NewPatients } from "@/components/sections/NewPatients";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Faq } from "@/components/sections/Faq";
import { ContactHoursSection } from "@/components/sections/ContactHoursSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : "sk";
  const dict = getDictionary(loc);
  const todayDow = new Date().getDay();
  const todayHours = formatDayIntervals(todayDow, dict.common.weekendClosed);
  const acuteHours = formatDayAcute(todayDow, dict.hoursSection.acutePrefix);

  return (
    <>
      <Hero locale={loc} dict={dict} />
      <Reveal>
        <QuickFacts dict={dict} todayHours={todayHours} acuteHours={acuteHours} />
      </Reveal>
      <Reveal>
        <Trust dict={dict} />
      </Reveal>
      <Reveal>
        <NewPatients locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <ServicesBento locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <Faq locale={loc} dict={dict} items={dict.faq.items} showCta />
      </Reveal>
      <ContactHoursSection dict={dict} />
    </>
  );
}

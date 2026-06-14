import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { NewPatients } from "@/components/sections/NewPatients";
import { Erecept } from "@/components/sections/Erecept";
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

  return (
    <>
      <Hero locale={loc} dict={dict} />
      <Reveal>
        <Trust dict={dict} />
      </Reveal>
      <Reveal>
        <ServicesBento locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <NewPatients locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <Erecept dict={dict} />
      </Reveal>
      <Reveal>
        <Faq locale={loc} dict={dict} items={dict.faq.items} showCta />
      </Reveal>
      <ContactHoursSection dict={dict} />
    </>
  );
}

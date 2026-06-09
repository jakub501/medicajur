import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { NewPatients } from "@/components/sections/NewPatients";
import { ServicesBento } from "@/components/sections/Services";
import { HoursContact } from "@/components/sections/HoursContact";
import { Insurers } from "@/components/sections/Insurers";
import { Reviews } from "@/components/sections/Reviews";

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
        <QuickFacts dict={dict} />
      </Reveal>
      <Reveal>
        <NewPatients locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <ServicesBento dict={dict} />
      </Reveal>
      <Reveal>
        <HoursContact dict={dict} />
      </Reveal>
      <Reveal>
        <Insurers dict={dict} />
      </Reveal>
      <Reveal>
        <Reviews dict={dict} />
      </Reveal>
    </>
  );
}

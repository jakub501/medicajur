import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { BecomePatientSection } from "@/components/sections/BecomePatientSection";
import { ExistingPatientsSection } from "@/components/sections/ExistingPatientsSection";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { AboutPracticeBanner } from "@/components/sections/AboutPracticeBanner";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
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
        <AboutPracticeBanner locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <ReviewsSection locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <ServicesBento locale={loc} dict={dict} />
      </Reveal>
      <Reveal>
        <BecomePatientSection dict={dict} />
      </Reveal>
      <Reveal>
        <ExistingPatientsSection dict={dict} />
      </Reveal>
      <Reveal>
        <Faq locale={loc} dict={dict} items={dict.faq.items} />
      </Reveal>
      <ContactHoursSection dict={dict} />
    </>
  );
}

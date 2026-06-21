import dynamic from "next/dynamic";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { AboutPracticeBanner } from "@/components/sections/AboutPracticeBanner";
import { ServicesBento } from "@/components/sections/ServicesBento";

const ReviewsSection = dynamic(() =>
  import("@/components/sections/ReviewsSection").then((m) => ({
    default: m.ReviewsSection,
  })),
);

const BecomePatientSection = dynamic(() =>
  import("@/components/sections/BecomePatientSection").then((m) => ({
    default: m.BecomePatientSection,
  })),
);

const ExistingPatientsSection = dynamic(() =>
  import("@/components/sections/ExistingPatientsSection").then((m) => ({
    default: m.ExistingPatientsSection,
  })),
);

const Faq = dynamic(() =>
  import("@/components/sections/Faq").then((m) => ({ default: m.Faq })),
);

const ContactHoursSection = dynamic(() =>
  import("@/components/sections/ContactHoursSection").then((m) => ({
    default: m.ContactHoursSection,
  })),
);

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : "sk";
  const dict = await getDictionary(loc);

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

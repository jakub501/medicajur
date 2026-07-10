import dynamic from "next/dynamic";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { ServicesBento } from "@/components/home/ServicesBento";

const ReviewsSection = dynamic(() =>
  import("@/components/home/ReviewsSection").then((m) => ({
    default: m.ReviewsSection,
  })),
);

const BecomePatientSection = dynamic(() =>
  import("@/components/home/BecomePatientSection").then((m) => ({
    default: m.BecomePatientSection,
  })),
);

const ExistingPatientsSection = dynamic(() =>
  import("@/components/home/ExistingPatientsSection").then((m) => ({
    default: m.ExistingPatientsSection,
  })),
);

const Faq = dynamic(() =>
  import("@/components/faq/Faq").then((m) => ({ default: m.Faq })),
);

const ContactHoursSection = dynamic(() =>
  import("@/components/home/ContactHoursSection").then((m) => ({
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

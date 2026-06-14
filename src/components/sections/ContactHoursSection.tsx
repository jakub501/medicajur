import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { ContactPanel } from "@/components/shared/ContactPanel";
import { HoursPanel } from "@/components/shared/HoursPanel";

export function ContactHoursSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="hours" className="py-12 sm:py-16">
      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-5">
        <HoursPanel dict={dict} className="h-full" />
        <ContactPanel dict={dict} id="kontakt" className="h-full" />
      </div>
    </Section>
  );
}

import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { ContactPanel } from "@/components/shared/ContactPanel";
import { HoursPanel } from "@/components/shared/HoursPanel";

export function ContactHoursSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="hours">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <HoursPanel dict={dict} />
        <ContactPanel dict={dict} id="kontakt" />
      </div>
    </Section>
  );
}

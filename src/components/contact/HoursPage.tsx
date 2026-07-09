import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { HoursPanel } from "@/components/contact/HoursPanel";

export function HoursPage({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <PageHero
        eyebrow={dict.nav.hours}
        title={dict.hoursSection.title}
        lead={dict.hoursSection.pageLead}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <HoursPanel dict={dict} />
          <ContactPanel dict={dict} withMap withEmails={false} />
        </div>
      </Section>
    </>
  );
}

import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { ExistingPatientsContent } from "@/components/sections/ExistingPatientsContent";

export function ExistingPatientsSection({ dict }: { dict: Dictionary }) {
  const s = dict.existingPatients;

  return (
    <Section id="existing-patients">
      <div className="mx-auto max-w-5xl">
        <span className="text-eyebrow text-primary">{s.eyebrow}</span>
        <h2 className="text-h2 mt-2.5 text-balance">{s.title}</h2>
        <span
          className="mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
          aria-hidden="true"
        />

        <div className="mt-8">
          <ExistingPatientsContent dict={dict} />
        </div>
      </div>
    </Section>
  );
}

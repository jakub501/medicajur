import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { BecomePatientContent } from "@/components/sections/BecomePatientContent";

export function BecomePatientSection({ dict }: { dict: Dictionary }) {
  const p = dict.patientsPage;

  return (
    <Section id="patients" className="bg-gradient-to-b from-transparent via-blue-soft/20 to-transparent">
      <div className="mx-auto max-w-5xl">
        <span className="text-eyebrow text-primary">{dict.patients.eyebrow}</span>
        <h2 className="text-h2 mt-2.5 text-balance">{p.newTitle}</h2>
        <span
          className="mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
          aria-hidden="true"
        />

        <div className="mt-8">
          <BecomePatientContent dict={dict} />
        </div>
      </div>
    </Section>
  );
}

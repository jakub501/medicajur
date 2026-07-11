import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "@/components/ui/Section";
import { BecomePatientContent } from "@/components/home/BecomePatientContent";

export function BecomePatientSection({ dict }: { dict: Dictionary }) {
  return (
    <Section id="patients">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-h2 text-balance">{dict.becomePatient.title}</h2>
        <span
          className="heading-rule mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
          aria-hidden="true"
        />

        <div className="mt-8">
          <BecomePatientContent dict={dict} />
        </div>
      </div>
    </Section>
  );
}

import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Section } from "../Section";

export function Insurers({ dict }: { dict: Dictionary }) {
  return (
    <Section className="py-8 sm:py-10">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 rounded-2xl border border-line bg-surface px-5 py-6 sm:gap-x-8 sm:px-6 sm:py-7">
        <span className="text-eyebrow w-full text-center text-muted sm:w-auto">
          {dict.insurers.label}
        </span>
        {SITE.insurers.map((name) => (
          <span
            key={name}
            className="inline-flex min-h-11 min-w-[6.5rem] items-center justify-center rounded-[10px] border border-blue-line bg-blue-soft px-5 py-2.5 font-serif text-body-lg font-semibold text-primary"
          >
            {name}
          </span>
        ))}
      </div>
    </Section>
  );
}

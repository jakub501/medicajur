import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "../Container";

export function Insurers({ dict }: { dict: Dictionary }) {
  return (
    <section className="pb-2 pt-0">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-11 gap-y-4 rounded-2xl border border-line bg-surface px-6 py-7">
          <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
            {dict.insurers.label}
          </span>
          {SITE.insurers.map((name) => (
            <span
              key={name}
              className="font-serif text-[23px] font-semibold text-ink/80"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

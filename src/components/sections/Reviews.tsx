import { Star, Info } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "../Section";

export function Reviews({ dict }: { dict: Dictionary }) {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow={dict.reviews.eyebrow}
        title={dict.reviews.title}
        center
      />

      <div className="grid gap-4 sm:gap-[18px] md:grid-cols-3">
        {dict.reviews.items.map((r, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-line hover:shadow-card"
          >
            <div className="mb-3.5 flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-[18px] w-[18px] fill-current" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="font-serif text-[17.5px] leading-[1.5] text-ink">
              {"\u201E"}
              {r.text}
              {"\u201C"}
            </blockquote>
            <figcaption className="mt-4 text-[13.5px] font-bold text-muted">
              — {r.who}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-[13px] text-muted">
        <Info className="h-4 w-4 shrink-0" strokeWidth={1.85} />
        {dict.reviews.disclaimer}
      </p>
    </Section>
  );
}

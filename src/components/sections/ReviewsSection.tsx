import { Quote, Star } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "@/components/ui/Section";

function ReviewCard({
  name,
  meta,
  text,
}: {
  name: string;
  meta: string;
  text: string;
}) {
  return (
    <article className="review-card group flex h-full flex-col">
      <div className="flex items-center gap-1" aria-label="5 / 5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-gold text-gold"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ))}
      </div>
      <Quote
        className="mt-4 h-7 w-7 text-primary/[0.14]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <blockquote className="text-body mt-3 flex-1 leading-[1.72] text-muted">{text}</blockquote>
      <footer className="mt-5 border-t border-line/80 pt-4">
        <p className="font-serif text-body font-medium text-ink">{name}</p>
        <p className="text-caption mt-1 text-muted">{meta}</p>
      </footer>
    </article>
  );
}

export function ReviewsSection({ dict }: { dict: Dictionary }) {
  const r = dict.reviews;

  return (
    <Section id="reviews" className="py-12 sm:py-16">
      <SectionHeading eyebrow={r.eyebrow} title={r.title} subtitle={r.subtitle} center />

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
        {r.items.map((item) => (
          <ReviewCard key={item.name} name={item.name} meta={item.meta} text={item.text} />
        ))}
      </div>
    </Section>
  );
}

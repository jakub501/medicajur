import { Quote } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

const TRUST_CARD_ACCENTS = ["primary", "green", "deep", "gold"] as const;

function TrustCardShell({
  title,
  icon,
  accent,
  children,
}: {
  title: string;
  icon: string;
  accent: (typeof TRUST_CARD_ACCENTS)[number];
  children: React.ReactNode;
}) {
  return (
    <div className="card group flex h-full items-start gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-card sm:gap-4">
      <span
        className={cn(
          "hero-float-badge-icon h-10 w-10 shrink-0 rounded-[11px] transition-all duration-300 group-hover:scale-105",
          `hero-float-badge-icon--${accent}`,
        )}
      >
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-body font-medium leading-snug text-ink">{title}</h3>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}

function TrustCard({
  title,
  text,
  icon,
  accent,
}: {
  title: string;
  text: string;
  icon: string;
  accent: (typeof TRUST_CARD_ACCENTS)[number];
}) {
  return (
    <TrustCardShell title={title} icon={icon} accent={accent}>
      <p className="text-body-sm leading-relaxed text-muted">{text}</p>
    </TrustCardShell>
  );
}

export function Trust({ dict }: { dict: Dictionary }) {
  const t = dict.trust;

  return (
    <Section id="trust" className="py-8 sm:py-10">
      <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-7">
        <h2 className="text-h2 text-balance">{t.title}</h2>
        <span
          className="mx-auto mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
          aria-hidden="true"
        />

        <figure className="trust-quote-panel relative mt-5 px-6 py-6 text-center sm:mt-6 sm:px-9 sm:py-7">
          <Quote
            className="pointer-events-none absolute left-5 top-5 h-9 w-9 text-primary/[0.14] sm:left-6 sm:top-6 sm:h-10 sm:w-10"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <figcaption className="relative">
            <p className="font-serif text-[1.2rem] font-medium leading-tight text-ink sm:text-[1.35rem]">
              {SITE.doctor}
            </p>
            <span
              className="mx-auto mt-4 block h-px w-14 bg-gradient-to-r from-transparent via-blue-line to-transparent"
              aria-hidden="true"
            />
            <blockquote className="text-body-lg mx-auto mt-4 max-w-[34em] text-pretty font-serif leading-[1.72] text-muted">
              <span aria-hidden="true" className="text-[1.35em] leading-none text-primary/45">
                „
              </span>
              {t.quote}
              <span aria-hidden="true" className="text-[1.35em] leading-none text-primary/45">
                "
              </span>
            </blockquote>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:items-stretch sm:gap-4">
          {t.items.map((item, index) => (
            <TrustCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
              accent={TRUST_CARD_ACCENTS[index]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

import { Droplet, Dumbbell, HeartPulse, Scale, Waves, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const TRUST_CARD_ACCENTS = ["primary", "green", "deep", "gold"] as const;
const EXAM_ICONS: LucideIcon[] = [Scale, Dumbbell, HeartPulse, Waves, Droplet];

/** Initials from a name, ignoring academic titles (words ending in ".") */
function nameInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part.replace(/[.,]/g, ""))
    .filter((part) => part.length > 0 && !part.endsWith("."))
    .filter((part) => !/^(MUDr|PhD|MPH|Mgr|Ing|Dr|prof|doc)$/i.test(part))
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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
    <div className={cn("trust-card group flex h-full flex-col", `trust-card--${accent}`)}>
      <span className={cn("trust-ico", `trust-ico--${accent}`)}>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="trust-card__title mt-6">{title}</h3>
      <span className="trust-card__rule mt-3" aria-hidden="true" />
      <div className="mt-3 flex-1">{children}</div>
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
      <p className="text-[0.9375rem] leading-[1.65] text-muted">{text}</p>
    </TrustCardShell>
  );
}

export function Trust({ dict }: { dict: Dictionary }) {
  const t = dict.trust;
  const doctorInitials = nameInitials(SITE.doctor);

  return (
    <Section id="trust" className="py-10 sm:py-14">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-h2 text-balance">{t.title}</h2>
        <span
          className="heading-rule mx-auto mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
          aria-hidden="true"
        />
      </div>

      {/* Philosophy quote — a distinct card */}
      <figure className="trust-quote-card mx-auto mt-8 max-w-3xl px-7 py-9 text-center sm:mt-9 sm:px-12 sm:py-11">
        <blockquote className="mx-auto max-w-[32ch] text-balance font-serif text-[1.5rem] font-medium leading-[1.34] text-ink sm:text-[1.9rem]">
          <span aria-hidden="true" className="text-gold">„</span>
          {t.quote}
          <span aria-hidden="true" className="text-gold">"</span>
        </blockquote>

        <span
          className="mx-auto mt-7 block h-px w-16 bg-gradient-to-r from-transparent via-blue-line to-transparent"
          aria-hidden="true"
        />

        <figcaption className="mt-6 flex items-center justify-center gap-3">
          <span className="trust-quote-avatar" aria-hidden="true">
            {doctorInitials}
          </span>
          <span className="text-left leading-tight">
            <span className="block font-serif text-[1.05rem] font-medium text-ink">
              {SITE.doctor}
            </span>
            <span className="mt-0.5 block text-body-sm text-muted">{t.quoteRole}</span>
          </span>
        </figcaption>
      </figure>

      {/* Three pillars */}
      <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
        <Reveal stagger className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:items-stretch sm:gap-4">
          {t.items.map((item, index) => (
            <TrustCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
              accent={TRUST_CARD_ACCENTS[index]}
            />
          ))}
        </Reveal>
      </div>

      {/* Diagnostics band — the real intake examinations */}
      <div className="mx-auto mt-8 max-w-5xl">
        <div className="trust-dark-band relative px-6 py-8 sm:px-9 sm:py-9">
          <span className="trust-dark-band__sheen" aria-hidden="true" />

          <div className="mb-6 text-center sm:mb-7">
            <h3 className="font-serif text-[1.35rem] font-semibold text-on-primary sm:text-[1.6rem]">
              {t.examTitle}
            </h3>
            <p className="text-body-sm mx-auto mt-2 max-w-[46ch] text-on-primary-subtle">
              {t.examLead}
            </p>
          </div>

          <Reveal stagger className="trust-exam-grid">
            {t.exams.map((exam, index) => {
              const ExamIcon = EXAM_ICONS[index % EXAM_ICONS.length];

              return (
                <div key={exam.name} className="trust-exam-item">
                  <span className="trust-exam-item__ico">
                    <ExamIcon className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <span className="trust-exam-item__name">{exam.name}</span>
                  <span className="trust-exam-item__measure">{exam.measure}</span>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

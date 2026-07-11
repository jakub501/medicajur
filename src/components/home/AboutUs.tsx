import { HeartPulse, Sparkles, Users, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const PILLAR_ICONS: LucideIcon[] = [Sparkles, Users, HeartPulse];
const PILLAR_ACCENTS = ["primary", "green", "gold"] as const;

const PHOTO_SRCS = [
  SITE.images.aboutOffice,
  SITE.images.aboutWaiting,
  SITE.images.aboutReception,
];

export function AboutUs({ dict }: { dict: Dictionary }) {
  const a = dict.aboutUs;

  return (
    <Section id="o-nas" className="py-12 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <span className="text-eyebrow text-primary">{a.eyebrow}</span>
          <h2 className="text-h2 mt-2.5 text-balance">{a.title}</h2>
          <span
            className="heading-rule mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
            aria-hidden="true"
          />
          <p className="text-body-lg mt-5 text-pretty leading-[1.7] text-muted">{a.lead}</p>

          <Reveal stagger className="mt-7 flex flex-col gap-5">
            {a.pillars.map((pillar, index) => {
              const PillarIcon = PILLAR_ICONS[index];
              const accent = PILLAR_ACCENTS[index % PILLAR_ACCENTS.length];

              return (
                <div key={pillar.title} className="group flex items-start gap-4">
                  <span className={cn("trust-ico shrink-0", `trust-ico--${accent}`)}>
                    <PillarIcon className="h-6 w-6" strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[1.1rem] font-semibold leading-snug text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-[0.9375rem] leading-[1.6] text-muted">{pillar.text}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>

        <Reveal stagger className="grid grid-cols-2 gap-3 sm:gap-3.5">
          <div className="hero-frame col-span-2 rounded-[20px] p-1.5">
            <ImagePlaceholder
              src={PHOTO_SRCS[0] || undefined}
              alt={a.photos[0].label}
              label={a.photos[0].label}
              className="h-52 w-full rounded-[15px] sm:h-64"
            />
          </div>
          {a.photos.slice(1).map((photo, index) => (
            <div key={photo.label} className="hero-frame rounded-[20px] p-1.5">
              <ImagePlaceholder
                src={PHOTO_SRCS[index + 1] || undefined}
                alt={photo.label}
                label={photo.label}
                className="h-36 w-full rounded-[15px] sm:h-40"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

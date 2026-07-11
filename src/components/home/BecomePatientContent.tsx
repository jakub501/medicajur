import { Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonAnchor } from "@/components/ui/Button";

const STEP_ACCENTS = ["primary", "green", "deep"] as const;

export function BecomePatientContent({ dict }: { dict: Dictionary }) {
  const b = dict.becomePatient;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col gap-5">
        {b.steps.map((step, index) => (
          <div
            key={step.title}
            className={cn("become-step", `become-step--${STEP_ACCENTS[index % STEP_ACCENTS.length]}`)}
          >
            <div className="become-step__rail">
              <span className="become-step__num" aria-hidden="true">
                {index + 1}
              </span>
            </div>

            <div className="become-step__card">
              <h3 className="become-step__title">{step.title}</h3>
              <p className="become-step__text">{step.text}</p>

              {index === 0 && (
                <div className="become-step__actions">
                  <ButtonAnchor href={`mailto:${SITE.emails.doctor}`} size="sm" className="px-4">
                    <Mail className="h-[17px] w-[17px] shrink-0" strokeWidth={1.85} />
                    <span>{b.emailLabel}</span>
                  </ButtonAnchor>
                  <ButtonAnchor
                    href={SITE.phoneHref}
                    variant="secondary"
                    size="sm"
                    className="px-4"
                  >
                    <Phone className="h-[17px] w-[17px] shrink-0" strokeWidth={1.85} />
                    <span>{b.phoneLabel}</span>
                  </ButtonAnchor>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

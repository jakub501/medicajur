import { Download, FileText } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const STEP_META = [
  { icon: "file-text", accent: "primary" },
  { icon: "user-plus", accent: "green" },
  { icon: "shield-check", accent: "deep" },
] as const;

export function BecomePatientContent({ dict }: { dict: Dictionary }) {
  const p = dict.patientsPage;
  const steps = dict.patients.steps;

  return (
    <>
      <div className="relative">
        <div
          className="pointer-events-none absolute top-11 right-[18%] left-[18%] hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent md:block"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:items-stretch sm:gap-4">
          {steps.map((step, index) => {
            const meta = STEP_META[index] ?? STEP_META[0];

            return (
              <div
                key={step.title}
                className="card group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-3 p-5 pb-0 sm:p-6 sm:pb-0">
                  <span
                    className={cn(
                      "hero-float-badge-icon h-11 w-11 shrink-0 rounded-[12px] transition-all duration-300 group-hover:scale-105",
                      `hero-float-badge-icon--${meta.accent}`,
                    )}
                  >
                    <Icon name={meta.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg text-caption font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6 sm:pt-4">
                  <h3 className="font-serif text-body font-medium leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="text-body-sm mt-2 flex-1 leading-relaxed text-muted">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card mt-10 p-6 sm:p-8">
        <div className="flex items-start gap-3">
            <span className="icon-box h-11 w-11 shrink-0">
              <FileText className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
            </span>
            <h3 className="text-h3 pt-1">{p.documentsTitle}</h3>
        </div>

        <ul className="mt-5 flex flex-col gap-2.5">
            {p.documents.map((doc) => (
              <li key={doc}>
                <span className="group/doc flex items-center justify-between gap-3 rounded-xl border border-line bg-bg px-4 py-3.5 transition-all duration-200 hover:border-blue-line hover:bg-blue-soft/35">
                  <span className="flex min-w-0 items-center gap-3 text-body-sm font-semibold text-ink">
                    <span className="icon-box h-9 w-9 shrink-0 transition-colors group-hover/doc:bg-primary group-hover/doc:text-white">
                      <FileText className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
                    </span>
                    <span className="leading-snug">{doc}</span>
                  </span>
                  <Download
                    className="h-[18px] w-[18px] shrink-0 text-muted transition-colors group-hover/doc:text-primary"
                    strokeWidth={1.85}
                    aria-hidden="true"
                  />
                </span>
              </li>
          ))}
        </ul>
      </div>
    </>
  );
}

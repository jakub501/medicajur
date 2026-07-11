import { Clock, Info } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { HoursTable } from "@/components/contact/HoursTable";
import { cn } from "@/lib/cn";

export function HoursPanel({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div className={cn("hours-contact-panel flex h-full flex-col", className)}>
      <div className="mb-5 flex items-center gap-3">
        <span className="trust-ico trust-ico--primary h-10 w-10 shrink-0 rounded-[13px]">
          <Clock className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
        </span>
        <h3 className="trust-card__title">{dict.hoursSection.title}</h3>
      </div>

      <div className="flex-1">
        <HoursTable dict={dict} />
      </div>

      <p className="hours-contact-note text-body-sm mt-5 flex items-start gap-2.5 leading-relaxed">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <span>{dict.hoursSection.note}</span>
      </p>
    </div>
  );
}

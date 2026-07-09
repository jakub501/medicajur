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
    <div className={cn("contact-panel-card card flex h-full flex-col shadow-soft", className)}>
      <div className="mb-5 flex items-center gap-3.5">
        <span className="hero-float-badge-icon hero-float-badge-icon--primary h-10 w-10 shrink-0 rounded-[11px]">
          <Clock className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
        </span>
        <h3 className="text-h3">{dict.hoursSection.title}</h3>
      </div>

      <div className="flex-1">
        <HoursTable dict={dict} />
      </div>

      <div className="contact-panel-note text-body-sm mt-5 flex items-start gap-2.5">
        <Info className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <span>{dict.hoursSection.note}</span>
      </div>
    </div>
  );
}

import { Clock, Info } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { HoursTable } from "@/components/shared/HoursTable";
import { cn } from "@/lib/cn";

export function HoursPanel({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div className={cn("card", className)}>
      <div className="mb-5 flex items-center gap-3">
        <Clock className="h-6 w-6 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <h3 className="text-h3">{dict.hoursSection.title}</h3>
      </div>
      <HoursTable dict={dict} />
      <div className="text-body-sm mt-4 flex items-start gap-2.5 rounded-xl bg-blue-soft px-4 py-3.5 text-primary-deep">
        <Info className="mt-px h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.85} aria-hidden="true" />
        <span>{dict.hoursSection.note}</span>
      </div>
    </div>
  );
}

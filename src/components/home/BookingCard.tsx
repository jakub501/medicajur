import { CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function BookingCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="brand-gradient-panel relative overflow-hidden rounded-2xl p-6 shadow-card sm:p-8">
      <span
        className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/[0.08]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-white/[0.05]"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3">
            <span className="icon-box h-11 w-11 shrink-0 rounded-[13px] bg-white/15 text-white shadow-sm">
              <CalendarCheck className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
            </span>
            <h3 className="text-h3 pt-1 !text-white">{title}</h3>
          </div>
          <p className="text-body mt-4 max-w-[42em] leading-relaxed text-on-primary-muted lg:pl-14">
            {text}
          </p>
        </div>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inverse inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-[10px] px-5 text-body-sm font-bold shadow-sm transition-all hover:-translate-y-px hover:shadow-md lg:self-center"
        >
          <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden="true" />
          {SITE.bookingName}
        </a>
      </div>
    </div>
  );
}

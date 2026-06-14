"use client";

import { useEffect, useState } from "react";
import { SCHEDULE, fmtMinutes } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

export function HoursTable({ dict }: { dict: Dictionary }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  return (
    <div className="flex flex-col gap-1.5">
      {SCHEDULE.map((day) => {
        const isToday = today === day.dow;
        const closed = day.intervals.length === 0;
        const intervals = closed
          ? [dict.common.closed]
          : day.intervals.map(([s, e]) => `${fmtMinutes(s)} – ${fmtMinutes(e)}`);

        return (
          <div
            key={day.dow}
            className={cn(
              "hours-row relative flex flex-col gap-1 rounded-xl border px-4 py-3 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4",
              isToday
                ? "border-blue-line/80 bg-blue-soft/75 shadow-soft"
                : "border-line/60 bg-bg/35 hover:border-blue-line/50 hover:bg-bg/55",
            )}
          >
            {isToday && (
              <span
                className="grow-bar absolute left-0 top-1/2 hidden h-[58%] w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-primary to-brand-green sm:block"
                aria-hidden="true"
              />
            )}
            <span className="flex items-center gap-2 text-body font-bold text-ink">
              {dict.hoursSection.days[day.dow]}
              {isToday && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white">
                  {!closed && (
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="pulse-dot absolute inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                    </span>
                  )}
                  {dict.common.todayBadge}
                </span>
              )}
            </span>
            <div className="min-w-0 sm:text-right">
              <div
                className={cn(
                  "flex flex-wrap gap-x-3 gap-y-0.5 font-serif text-body-lg font-semibold sm:justify-end",
                  closed ? "text-muted" : "text-ink",
                )}
              >
                {intervals.map((time, i) => (
                  <span key={i}>
                    {i > 0 && (
                      <span className="mr-3 hidden text-muted/50 sm:inline" aria-hidden="true">
                        |
                      </span>
                    )}
                    {time}
                  </span>
                ))}
              </div>
              {day.acute && (
                <span className="text-body-sm mt-0.5 block font-semibold text-primary">
                  {dict.hoursSection.acutePrefix} {fmtMinutes(day.acute[0])} –{" "}
                  {fmtMinutes(day.acute[1])}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

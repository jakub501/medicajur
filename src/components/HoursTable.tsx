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
    <div className="flex flex-col gap-1">
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
              "relative flex flex-col gap-1 rounded-[10px] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
              isToday && "bg-blue-soft",
            )}
          >
            {isToday && (
              <span
                className="grow-bar absolute left-0 top-1/2 hidden h-[64%] w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-primary to-brand-green sm:block"
                aria-hidden="true"
              />
            )}
            <span className="flex items-center gap-2 text-body font-bold">
              {dict.hoursSection.days[day.dow]}
              {isToday && (
                <span className="inline-flex items-center gap-1.5 rounded-[5px] bg-primary px-1.5 py-0.5 text-[10.5px] font-extrabold uppercase tracking-[0.06em] text-white">
                  {!closed && (
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-brand-green" />
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
                      <span className="mr-3 hidden text-muted sm:inline" aria-hidden="true">
                        |
                      </span>
                    )}
                    {time}
                  </span>
                ))}
              </div>
              {day.acute && (
                <span className="text-body-sm block font-semibold text-primary">
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

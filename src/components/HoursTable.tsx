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
        const times = closed
          ? dict.common.closed
          : day.intervals
              .map(([s, e]) => `${fmtMinutes(s)} – ${fmtMinutes(e)}`)
              .join("   |   ");

        return (
          <div
            key={day.dow}
            className={cn(
              "relative flex items-center justify-between gap-4 rounded-[10px] px-4 py-3 transition-colors duration-300",
              isToday && "bg-blue-soft",
            )}
          >
            {isToday && (
              <span
                className="grow-bar absolute left-0 top-1/2 h-[64%] w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-primary to-brand-green"
                aria-hidden="true"
              />
            )}
            <span className="flex items-center gap-2 text-[15px] font-bold">
              {dict.hoursSection.days[day.dow]}
              {isToday && (
                <span className="inline-flex items-center gap-1.5 rounded-[5px] bg-primary px-1.5 py-0.5 text-[10.5px] font-extrabold uppercase tracking-[0.06em] text-white">
                  {!closed && (
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#7ee0b0]" />
                  )}
                  {dict.common.todayBadge}
                </span>
              )}
            </span>
            <span className="text-right">
              <span
                className={cn(
                  "block font-serif text-[17px] font-semibold",
                  closed ? "text-muted" : "text-ink",
                )}
              >
                {times}
              </span>
              {day.acute && (
                <span className="block text-[12px] font-semibold text-primary">
                  {dict.hoursSection.acutePrefix} {fmtMinutes(day.acute[0])} –{" "}
                  {fmtMinutes(day.acute[1])}
                </span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

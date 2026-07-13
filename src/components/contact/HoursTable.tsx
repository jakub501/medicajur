"use client";

import { useEffect, useState } from "react";
import { SCHEDULE, fmtMinutes, clinicNow } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

export function HoursTable({ dict }: { dict: Dictionary }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(clinicNow().dow);
  }, []);

  return (
    <div className="hours-contact-list">
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
              "hours-contact-row",
              closed ? "hours-contact-row--closed" : "hours-contact-row--open",
              isToday && "hours-contact-row--today",
              isToday && closed && "hours-contact-row--today-closed",
            )}
          >
            {isToday && <span className="hours-contact-row__accent" aria-hidden="true" />}

            <div className="hours-contact-row__main">
              <span className="hours-contact-row__day">
                {dict.hoursSection.days[day.dow]}
                {isToday && (
                  <span
                    className={cn(
                      "hours-contact-row__badge",
                      closed
                        ? "hours-contact-row__badge--muted"
                        : "hours-contact-row__badge--live",
                    )}
                  >
                    {!closed && (
                      <span className="hours-contact-row__pulse" aria-hidden="true">
                        <span className="pulse-dot absolute inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                      </span>
                    )}
                    {dict.common.todayBadge}
                  </span>
                )}
              </span>

              <div className="hours-contact-row__times">
                {intervals.map((time, i) => (
                  <span
                    key={i}
                    className={cn(
                      "hours-contact-row__time",
                      closed && "hours-contact-row__time--closed",
                    )}
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

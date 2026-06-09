"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { SITE, scheduleForDow, fmtMinutes } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "../Container";

export function QuickFacts({ dict }: { dict: Dictionary }) {
  const [todayLabel, setTodayLabel] = useState("—");

  useEffect(() => {
    const day = scheduleForDow(new Date().getDay());
    setTodayLabel(
      day.intervals.length === 0
        ? dict.common.weekendClosed
        : day.intervals
            .map(([s, e]) => `${fmtMinutes(s)} – ${fmtMinutes(e)}`)
            .join("  |  "),
    );
  }, [dict]);

  const items = [
    { icon: Clock, label: dict.facts.todayLabel, value: todayLabel },
    {
      icon: MapPin,
      label: dict.facts.addressLabel,
      value: `${SITE.address.street}, ${SITE.address.city}`,
    },
    { icon: Phone, label: dict.facts.phoneLabel, value: SITE.phone },
  ];

  return (
    <Container>
      <div className="grid overflow-hidden rounded-2xl border border-line bg-line shadow-[0_18px_40px_-30px_rgba(13,70,116,0.45)] sm:grid-cols-3 sm:gap-px">
        {items.map(({ icon: IconCmp, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 bg-surface px-6 py-5"
          >
            <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-blue-soft text-primary">
              <IconCmp className="h-[22px] w-[22px]" strokeWidth={1.85} />
            </span>
            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                {label}
              </div>
              <div className="mt-0.5 font-serif text-[18px] font-semibold text-ink">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

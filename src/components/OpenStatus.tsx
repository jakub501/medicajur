"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { isOpenAt } from "@/lib/site";

export function OpenStatus({
  openLabel,
  closedLabel,
  className,
}: {
  openLabel: string;
  closedLabel: string;
  className?: string;
}) {
  const [state, setState] = useState<"loading" | "open" | "closed">("loading");

  useEffect(() => {
    const update = () => setState(isOpenAt() ? "open" : "closed");
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const isOpen = state === "open";
  const label = state === "loading" ? "" : isOpen ? openLabel : closedLabel;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13.5px] font-bold shadow-soft",
        className,
      )}
      aria-live="polite"
    >
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full transition-colors",
          state === "loading" && "bg-muted/40",
          isOpen && "bg-brand-green shadow-[0_0_0_4px_rgba(46,158,107,0.16)]",
          state === "closed" && "bg-amber shadow-[0_0_0_4px_rgba(201,128,58,0.16)]",
        )}
      />
      <span className={cn(state === "loading" && "opacity-0")}>
        {label || "—"}
      </span>
    </span>
  );
}

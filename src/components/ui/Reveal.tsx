"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-triggered reveal (fade + lift) driven by IntersectionObserver, so it
 * works across all browsers. Pass `stagger` to have direct children animate in
 * sequence. Respects prefers-reduced-motion and degrades to visible without JS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  fade = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  /** Opacity-only (no lift) — use on a wrapper whose children stagger, so the
   *  outer fade and the inner lift never fight. */
  fade?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay && visible ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        stagger ? "reveal-group" : fade ? "reveal-fade" : "reveal",
        visible && "is-visible",
        className,
      )}
    >
      {children}
    </div>
  );
}

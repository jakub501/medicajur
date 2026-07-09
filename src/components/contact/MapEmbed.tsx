"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function MapEmbed({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.mapsQuery,
  )}&z=16&output=embed`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full overflow-hidden rounded-[14px] border border-line/80 bg-surface",
        className,
      )}
    >
      {shouldLoad ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-frame h-full w-full"
          style={{ border: 0 }}
        />
      ) : (
        <div
          className="flex h-full min-h-[240px] items-center justify-center bg-bg text-body-sm text-muted"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

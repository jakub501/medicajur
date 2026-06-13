import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function MapEmbed({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.mapsQuery,
  )}&z=16&output=embed`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[13px] border border-line",
        className,
      )}
    >
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-frame h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

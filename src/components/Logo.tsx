import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Brand({
  locale,
  brand,
  doctor,
  invert = false,
  compact = false,
}: {
  locale: string;
  brand: string;
  doctor: string;
  invert?: boolean;
  compact?: boolean;
}) {
  const alt = `${brand} — ${doctor}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SITE.images.logo}
      alt={alt}
      width={136}
      height={139}
      decoding="async"
      fetchPriority={compact ? "high" : "auto"}
      className={cn(
        "block shrink-0 object-contain object-left",
        compact ? "h-12 w-auto sm:h-14" : "h-[92px] w-auto sm:h-24",
        invert && "mix-blend-screen",
      )}
    />
  );
}

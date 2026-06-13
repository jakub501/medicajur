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

  if (compact) {
    return (
      <span className="font-serif text-[1.125rem] font-semibold tracking-[0.01em] text-primary sm:text-[1.2rem]">
        {SITE.brand}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SITE.images.logo}
      alt={alt}
      width={136}
      height={139}
      decoding="async"
      className={cn(
        "block shrink-0 object-contain object-left",
        "h-[92px] w-auto sm:h-24",
        invert && "mix-blend-screen",
      )}
    />
  );
}

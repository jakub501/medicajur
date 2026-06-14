import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

type BrandVariant = "image" | "lockup";

export function Brand({
  locale,
  brand,
  doctor,
  invert = false,
  variant = "image",
}: {
  locale: string;
  brand: string;
  doctor: string;
  invert?: boolean;
  variant?: BrandVariant;
}) {
  const alt = `${brand} — ${doctor}`;

  if (variant === "lockup") {
    return (
      <span className="brand-lockup">
        <span className="brand-lockup-name">{SITE.brandMark}</span>
        <span className="brand-lockup-doctor">{doctor.toUpperCase()}</span>
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

import Image from "next/image";
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
      <span className="brand-lockup-row">
        <svg
          className="brand-mark"
          viewBox="0 0 24 24"
          role="img"
          aria-label={brand}
        >
          <defs>
            <linearGradient id="brand-pin-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--color-brand-gradient-start)" />
              <stop offset="1" stopColor="var(--color-brand-gradient-end)" />
            </linearGradient>
          </defs>
          <path
            d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
            fill="url(#brand-pin-grad)"
          />
          <rect x="11.1" y="6.8" width="1.8" height="6.4" rx="0.7" fill="#fff" />
          <rect x="8.8" y="9.1" width="6.4" height="1.8" rx="0.7" fill="#fff" />
        </svg>
        <span className="brand-lockup">
          <span className="brand-lockup-name">MedicaJur</span>
          <span className="brand-lockup-doctor">{doctor.toUpperCase()}</span>
        </span>
      </span>
    );
  }

  return (
    <Image
      src={SITE.images.logo}
      alt={alt}
      width={136}
      height={139}
      priority
      className={cn(
        "block shrink-0 object-contain object-left",
        "h-[92px] w-auto sm:h-24",
        invert && "mix-blend-screen",
      )}
    />
  );
}

import Image from "next/image";
import { Stethoscope } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Swappable image slot. Pass `src` once real photos are available; until then a
 * tasteful placeholder with the intended caption is shown.
 */
export function ImagePlaceholder({
  src,
  alt,
  label,
  className,
  priority,
}: {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    if (src.endsWith(".svg")) {
      return (
        <div className={cn("relative overflow-hidden", className)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 960px) 100vw, 600px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b6aa6] via-primary to-primary-deep",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      {/* soft light sweep */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 80% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 55%)",
        }}
      />
      {/* faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* decorative rings */}
      <span
        className="orb"
        style={{
          width: 220,
          height: 220,
          right: -50,
          bottom: -60,
          background: "rgba(255,255,255,0.16)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/25 backdrop-blur-sm">
          <Stethoscope className="h-9 w-9 text-white" strokeWidth={1.6} />
        </span>
        <span className="max-w-[16em] text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85">
          {label ?? alt}
        </span>
      </div>
    </div>
  );
}

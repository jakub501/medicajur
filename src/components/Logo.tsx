import { cn } from "@/lib/cn";

/** MEDICA JUR mark — a rounded square with a stylised medical cross. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[11px] bg-primary text-white shadow-[0_6px_16px_-8px_rgba(13,70,116,0.7)]",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[58%] w-[58%]"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

export function Brand({
  locale,
  brand,
  doctor,
  invert = false,
}: {
  locale: string;
  brand: string;
  doctor: string;
  invert?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className="h-[42px] w-[42px]" />
      <div className="leading-tight">
        <div
          className={cn(
            "font-serif text-[22px] font-semibold tracking-[0.01em]",
            invert ? "text-white" : "text-ink",
          )}
        >
          {brand}
        </div>
        <div
          className={cn(
            "text-[11px] font-bold uppercase tracking-[0.12em]",
            invert ? "text-blue-line" : "text-muted",
          )}
        >
          {doctor}
        </div>
      </div>
    </div>
  );
}

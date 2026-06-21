import { cn } from "@/lib/cn";

/** Scroll-driven fade + lift (CSS-only, no client JS). */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
      className={cn("reveal-on-scroll", className)}
    >
      {children}
    </div>
  );
}

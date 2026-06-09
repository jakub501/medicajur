import { Container } from "./Container";
import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-[54px]", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-primary">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-9",
        center && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2.5 text-[32px] leading-tight sm:text-[40px]">{title}</h2>
      {center && (
        <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-primary to-brand-green" />
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-[42em] text-muted",
            center && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

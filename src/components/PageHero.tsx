import { Container } from "./Container";
import { Eyebrow } from "./Section";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-blue-soft/60 to-bg pb-10 pt-12 sm:pb-12 sm:pt-14">
      <span
        className="orb"
        style={{
          width: 340,
          height: 340,
          top: -150,
          right: -90,
          background: "rgba(21,99,156,0.1)",
        }}
        aria-hidden="true"
      />
      <Container>
        <div className="relative max-w-[44em] animate-rise">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-2.5 text-[36px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[48px]">
            {title}
          </h1>
          {lead && <p className="mt-4 text-[18px] text-muted">{lead}</p>}
        </div>
      </Container>
    </section>
  );
}

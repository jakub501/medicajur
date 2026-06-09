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
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-blue-soft/60 to-bg py-12 sm:py-16">
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
          <h1 className="text-h1 mt-2.5 font-medium">{title}</h1>
          {lead && <p className="text-body-lg mt-4 text-muted">{lead}</p>}
        </div>
      </Container>
    </section>
  );
}

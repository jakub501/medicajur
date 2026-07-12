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
    <section className="relative scroll-mt-28 py-12 sm:scroll-mt-32 sm:py-16">
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

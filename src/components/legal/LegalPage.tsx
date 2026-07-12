import type { Locale } from "@/i18n/config";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getLegalDoc } from "@/content/legal-content";

export function LegalPage({
  kind,
  locale,
}: {
  kind: "privacy" | "cookies";
  locale: Locale;
}) {
  const doc = getLegalDoc(kind, locale);

  return (
    <>
      <PageHero title={doc.title} lead={doc.updated} />
      <Section>
        <div className="mx-auto max-w-[52em]">
          {doc.intro
            ? doc.intro.split("\n\n").map((p) => (
                <p key={p} className="text-body-lg leading-relaxed text-muted [&+&]:mt-4">
                  {p}
                </p>
              ))
            : null}

          <div className="mt-8 flex flex-col gap-8">
            {doc.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="text-h3">{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-body mt-3 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul className="text-body mt-3 flex list-disc flex-col gap-1.5 pl-5 leading-relaxed text-muted marker:text-primary">
                    {sec.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {sec.closing?.map((p, i) => (
                  <p key={i} className="text-body mt-3 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

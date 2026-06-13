import type { Locale } from "@/i18n/config";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getLegalDoc } from "./legalContent";

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
          <p className="text-[17px] leading-relaxed text-muted">{doc.intro}</p>

          <div className="mt-8 flex flex-col gap-8">
            {doc.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="text-[24px]">{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 text-[16px] leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-[16px] leading-relaxed text-muted marker:text-primary">
                    {sec.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

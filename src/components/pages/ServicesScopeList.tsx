import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function ServicesScopeList({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.services.scope;
  const pricingHref = href(locale, "services", "pricing");

  return (
    <div>
      <h2 className="text-h2 text-balance">{s.title}</h2>
      <span
        className="mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
        aria-hidden="true"
      />
      {s.intro && <p className="text-body-lg mt-3 max-w-[42em] text-muted">{s.intro}</p>}

      <div className="mt-8 flex flex-col gap-8 sm:gap-10">
        {s.groups.map((group) => (
          <section key={group.title}>
            <h3 className="text-h3">{group.title}</h3>

            <ul className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:items-stretch sm:gap-4">
              {group.items.map((item) => (
                <li
                  key={item.title}
                  className="card flex h-full items-start gap-3.5 transition-colors hover:border-blue-line sm:gap-4"
                >
                  <span className="icon-box h-10 w-10 shrink-0">
                    <Check className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.linkToPricing ? (
                        <Link
                          href={pricingHref}
                          className="font-serif text-body-sm font-medium leading-snug text-ink transition-colors hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <h4 className="font-serif text-body-sm font-medium leading-snug text-ink">
                          {item.title}
                        </h4>
                      )}
                    </div>
                    <p className="text-body-sm mt-1.5 leading-relaxed text-muted">{item.text}</p>
                    {item.linkToPricing && (
                      <Link
                        href={pricingHref}
                        className="mt-2 inline-flex items-center gap-1 text-body-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
                      >
                        {dict.services.overview.pricingLink}
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "@/components/ui/Icon";

type ScopeItem = Dictionary["services"]["scope"]["groups"][number]["items"][number];

function ScopeCard({
  dict,
  item,
  pricingHref,
}: {
  dict: Dictionary;
  item: ScopeItem;
  pricingHref: string;
}) {
  const pricingLink = dict.services.overview.pricingLink;
  const icon = item.icon ?? "stethoscope";

  return (
    <li className="card group flex h-full items-start gap-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-line hover:shadow-card sm:gap-4">
      <span className="icon-box h-10 w-10 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        {item.linkToPricing ? (
          <Link
            href={pricingHref}
            className="font-serif text-body font-medium leading-snug text-ink transition-colors hover:text-primary"
          >
            {item.title}
          </Link>
        ) : (
          <h4 className="font-serif text-body font-medium leading-snug text-ink">{item.title}</h4>
        )}
        <p className="text-body-sm mt-1.5 leading-relaxed text-muted">{item.text}</p>
        {item.linkToPricing && (
          <Link
            href={pricingHref}
            className="mt-2 inline-flex items-center gap-1 text-body-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
          >
            {pricingLink}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          </Link>
        )}
      </div>
    </li>
  );
}

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

      <div className="mt-8 flex flex-col gap-8 sm:gap-10">
        {s.groups.map((group) => (
          <section key={group.title}>
            <h3 className="text-h3 text-balance">{group.title}</h3>
            <span
              className="mt-2 block h-0.5 w-8 rounded-full bg-line"
              aria-hidden="true"
            />

            <ul className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:items-stretch sm:gap-4">
              {group.items.map((item) => (
                <ScopeCard
                  key={item.title}
                  dict={dict}
                  item={item}
                  pricingHref={pricingHref}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

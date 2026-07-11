import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

type ScopeItem = Dictionary["services"]["scope"]["groups"][number]["items"][number];

const SCOPE_ACCENTS = ["primary", "green", "deep", "gold"] as const;

function ScopeCard({
  dict,
  item,
  accent,
  pricingHref,
}: {
  dict: Dictionary;
  item: ScopeItem;
  accent: (typeof SCOPE_ACCENTS)[number];
  pricingHref: string;
}) {
  const pricingLink = dict.services.overview.pricingLink;
  const icon = item.icon ?? "stethoscope";

  return (
    <li className={cn("trust-card group flex h-full flex-col", `trust-card--${accent}`)}>
      <span className={cn("trust-ico", `trust-ico--${accent}`)}>
        <Icon name={icon} className="h-6 w-6" />
      </span>

      {item.linkToPricing ? (
        <Link
          href={pricingHref}
          className="trust-card__title mt-5 text-[1.1rem] transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      ) : (
        <h4 className="trust-card__title mt-5 text-[1.1rem]">{item.title}</h4>
      )}

      <span className="trust-card__rule mt-3" aria-hidden="true" />
      <p className="mt-3 text-[0.9375rem] leading-[1.65] text-muted">{item.text}</p>

      {item.linkToPricing && (
        <>
          <div className="flex-1" />
          <Link
            href={pricingHref}
            className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
          >
            {pricingLink}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </>
      )}
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
        className="heading-rule mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
        aria-hidden="true"
      />

      <div className="mt-9 flex flex-col gap-10 sm:mt-10 sm:gap-12">
        {s.groups.map((group, groupIndex) => (
          <section key={group.title}>
            <div className="flex items-center gap-3">
              <h3 className="text-h3 text-balance">{group.title}</h3>
              <span className="h-px flex-1 bg-gradient-to-r from-blue-line to-transparent" aria-hidden="true" />
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:items-stretch sm:gap-4 lg:grid-cols-3">
              {group.items.map((item, itemIndex) => (
                <ScopeCard
                  key={item.title}
                  dict={dict}
                  item={item}
                  accent={SCOPE_ACCENTS[(groupIndex + itemIndex) % SCOPE_ACCENTS.length]}
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

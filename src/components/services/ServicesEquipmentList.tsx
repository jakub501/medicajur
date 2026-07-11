import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { equipmentHref, getEquipmentLinkSlug, hasEquipmentDetail } from "@/lib/equipment";
import { cn } from "@/lib/cn";

export function ServicesEquipmentList({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const e = dict.services.equipment;

  return (
    <div>
      <h2 className="text-h2 text-balance">{e.title}</h2>
      <span
        className="heading-rule mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
        aria-hidden="true"
      />
      {e.intro && <p className="text-body-lg mt-3 max-w-[42em] text-muted">{e.intro}</p>}

      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="hidden border-b border-line bg-bg px-4 py-3 sm:grid sm:grid-cols-[1.35fr_1fr] sm:gap-4 sm:px-5">
          <span className="text-eyebrow text-muted">{e.purposeLabel}</span>
          <span className="text-eyebrow text-muted">{e.deviceLabel}</span>
        </div>

        <ul className="divide-y divide-line">
          {e.items.map((item, index) => (
            <li
              key={`${index}-${item.purpose}`}
              className="grid gap-1.5 px-4 py-3 sm:grid-cols-[1.35fr_1fr] sm:items-center sm:gap-4 sm:px-5 sm:py-3.5"
            >
              <div>
                <p className="text-body-sm leading-relaxed text-ink">{item.purpose}</p>
                {item.purposeNote && (
                  <p className="text-body-sm mt-1 leading-relaxed text-muted">
                    ({item.purposeNote})
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {item.device ? (
                  (() => {
                    const linkSlug = getEquipmentLinkSlug(item);
                    return linkSlug && hasEquipmentDetail(dict, linkSlug) ? (
                      <Link
                        href={equipmentHref(locale, linkSlug)}
                        className="font-serif text-body-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary-deep hover:underline"
                      >
                        {item.device}
                      </Link>
                    ) : (
                      <span className="font-serif text-body-sm font-semibold text-primary">
                        {item.device}
                      </span>
                    );
                  })()
                ) : (
                  <span className="text-body-sm text-muted">—</span>
                )}
                {"comingSoon" in item && Boolean(item.comingSoon) ? (
                  <span
                    className={cn(
                      "inline-flex rounded-full border border-amber/30 bg-[#fdf6ee] px-2.5 py-0.5",
                      "text-caption font-bold uppercase tracking-wide text-amber",
                    )}
                  >
                    {dict.common.comingSoon}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

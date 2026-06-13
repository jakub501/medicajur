import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

export function ServicesEquipmentList({ dict }: { dict: Dictionary }) {
  const e = dict.services.equipment;

  return (
    <div>
      <h2 className="text-h2">{e.title}</h2>
      {e.intro && <p className="text-body-lg mt-3 max-w-[42em] text-muted">{e.intro}</p>}

      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="hidden border-b border-line bg-bg px-5 py-3.5 md:grid md:grid-cols-[1.4fr_1fr] md:gap-6">
          <span className="text-eyebrow text-muted">{e.purposeLabel}</span>
          <span className="text-eyebrow text-muted">{e.deviceLabel}</span>
        </div>

        <ul className="divide-y divide-line">
          {e.items.map((item) => (
            <li
              key={item.purpose}
              className="grid gap-2 px-5 py-4 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-6"
            >
              <p className="text-body leading-relaxed text-ink">{item.purpose}</p>
              <div className="flex flex-wrap items-center gap-2">
                {item.device ? (
                  <span className="font-serif text-body font-semibold text-primary">
                    {item.device}
                  </span>
                ) : (
                  <span className="text-body text-muted">—</span>
                )}
                {item.comingSoon && (
                  <span
                    className={cn(
                      "inline-flex rounded-full border border-amber/30 bg-[#fdf6ee] px-2.5 py-0.5",
                      "text-caption font-bold uppercase tracking-wide text-amber",
                    )}
                  >
                    {dict.common.comingSoon}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

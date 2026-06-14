import type { Dictionary } from "@/i18n/dictionaries";

export function ServicesPricingSection({ dict }: { dict: Dictionary }) {
  const p = dict.pricing;

  return (
    <div>
      <h2 className="text-h2 text-balance">{p.pageTitle}</h2>
      <span
        className="mt-2.5 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
        aria-hidden="true"
      />
      <p className="text-body-lg mt-3 max-w-[42em] text-muted">{p.pageLead}</p>

      <div className="card mt-6 border-blue-line/60 bg-blue-soft/40">
        <p className="text-body-sm leading-relaxed text-muted">{p.note}</p>
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:gap-6">
        {p.categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-h3 mb-3">{cat.title}</h3>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
              <ul className="divide-y divide-line">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 px-4 py-3.5 sm:px-5"
                  >
                    <span className="text-body-sm min-w-0 leading-relaxed text-ink">{item.name}</span>
                    <span className="text-body-sm shrink-0 whitespace-nowrap font-semibold text-primary">
                      {item.price || p.priceUnavailable}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

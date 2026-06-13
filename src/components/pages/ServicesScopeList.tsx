import { Check } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

export function ServicesScopeList({ dict }: { dict: Dictionary }) {
  const s = dict.services.scope;

  return (
    <div>
      <h2 className="text-h2">{s.title}</h2>
      {s.intro && <p className="text-body-lg mt-3 max-w-[42em] text-muted">{s.intro}</p>}

      <ul className="mt-6 flex flex-col gap-3">
        {s.items.map((item) => (
          <li
            key={item.text}
            className="card flex items-start gap-3.5 bg-bg transition-colors hover:border-blue-line"
          >
            <span className="icon-box mt-0.5 h-9 w-9 shrink-0 rounded-[10px]">
              <Check className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="text-body flex min-w-0 flex-1 flex-wrap items-center gap-2 pt-1 leading-relaxed text-ink">
              {item.text}
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
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

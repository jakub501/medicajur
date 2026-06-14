import { Phone, MapPin, Syringe } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/ui/Container";

export function TopBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="site-topbar text-body-sm text-topbar-text">
      <Container>
        <div className="site-topbar__row flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <Syringe className="h-4 w-4 shrink-0 text-on-primary-subtle" strokeWidth={1.85} aria-hidden="true" />
            <span className="truncate">{dict.topbar.note}</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={SITE.phoneHref}
              className="flex min-h-10 items-center gap-1.5 rounded-full px-2 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-on-primary-subtle" strokeWidth={1.85} aria-hidden="true" />
              {SITE.phone}
            </a>
            <span className="h-4 w-px bg-white/20" aria-hidden="true" />
            <span className="flex items-center gap-1.5 pr-1">
              <MapPin className="h-3.5 w-3.5 text-on-primary-subtle" strokeWidth={1.85} aria-hidden="true" />
              {SITE.address.street}, {SITE.address.city}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

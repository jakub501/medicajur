import { Phone, MapPin, Syringe } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "./Container";

export function TopBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="bg-primary-deep text-body-sm text-topbar-text">
      <Container>
        <div className="flex h-10 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <Syringe className="h-4 w-4 shrink-0 text-on-primary-subtle" strokeWidth={1.85} aria-hidden="true" />
            <span className="truncate">{dict.topbar.note}</span>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <a
              href={SITE.phoneHref}
              className="flex min-h-10 items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-on-primary-subtle" strokeWidth={1.85} aria-hidden="true" />
              {SITE.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-on-primary-subtle" strokeWidth={1.85} aria-hidden="true" />
              {SITE.address.street}, {SITE.address.city}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

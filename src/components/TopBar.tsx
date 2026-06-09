import { Phone, MapPin, Syringe } from "lucide-react";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "./Container";

export function TopBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="bg-primary-deep text-[13px] text-[#d5e5f1]">
      <Container>
        <div className="flex h-10 items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <Syringe className="h-4 w-4 shrink-0 text-[#90bede]" strokeWidth={1.85} />
            <span className="truncate">{dict.topbar.note}</span>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-[#90bede]" strokeWidth={1.85} />
              {SITE.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#90bede]" strokeWidth={1.85} />
              {SITE.address.street}, {SITE.address.city}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

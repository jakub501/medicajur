import Link from "next/link";
import { Phone, MapPin, CalendarCheck, Mail } from "lucide-react";
import { href, type Locale, type RouteKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "./Container";
import { Brand } from "./Logo";

const NAV: { key: RouteKey; label: keyof Dictionary["nav"] }[] = [
  { key: "about", label: "about" },
  { key: "services", label: "services" },
  { key: "hours", label: "hours" },
  { key: "patients", label: "patients" },
  { key: "contact", label: "contact" },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 bg-primary-deep pb-7 pt-14 text-[#c2d8e8]">
      <Container>
        <div className="grid gap-9 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Brand locale={locale} brand={SITE.brand} doctor={SITE.doctor} invert />
            <p className="mt-4 max-w-[30em] text-[14.5px] text-[#95b6cc]">
              {dict.footer.about}
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-white">
              {dict.footer.navTitle}
            </h4>
            {NAV.map(({ key, label }) => (
              <Link
                key={key}
                href={href(locale, key)}
                className="block py-1 text-[14.5px] text-[#95b6cc] transition-colors hover:text-white"
              >
                {dict.nav[label]}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-white">
              {dict.footer.contactTitle}
            </h4>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 py-1 text-[14.5px] text-[#95b6cc] transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={1.85} />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.emails.doctor}`}
              className="flex items-center gap-2 py-1 text-[14.5px] text-[#95b6cc] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" strokeWidth={1.85} />
              {SITE.emails.doctor}
            </a>
            <span className="flex items-start gap-2 py-1 text-[14.5px] text-[#95b6cc]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.85} />
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </span>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1 text-[14.5px] text-[#95b6cc] transition-colors hover:text-white"
            >
              <CalendarCheck className="h-4 w-4" strokeWidth={1.85} />
              {dict.common.bookOnline}
            </a>
          </div>

          <div>
            <h4 className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-white">
              {dict.footer.legalTitle}
            </h4>
            <Link
              href={href(locale, "privacy")}
              className="block py-1 text-[14.5px] text-[#95b6cc] transition-colors hover:text-white"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={href(locale, "cookies")}
              className="block py-1 text-[14.5px] text-[#95b6cc] transition-colors hover:text-white"
            >
              {dict.footer.cookies}
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-[13px] text-[#7494ac]">
          © {year} {SITE.company} — {SITE.doctor}. {dict.footer.rights}
        </div>
      </Container>
    </footer>
  );
}

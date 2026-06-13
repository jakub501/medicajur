import Link from "next/link";
import { Phone, MapPin, CalendarCheck, Mail } from "lucide-react";
import { href, type Locale, type RouteKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const NAV: { key: RouteKey; label: keyof Dictionary["nav"] }[] = [
  { key: "about", label: "about" },
  { key: "services", label: "services" },
  { key: "hours", label: "hours" },
  { key: "patients", label: "patients" },
  { key: "contact", label: "contact" },
];

const footerLink =
  "flex min-h-11 items-center py-1 text-body-sm text-footer-muted transition-colors hover:text-white";

function FooterBrand() {
  return (
    <div className="leading-tight">
      <div className="font-serif text-[22px] font-semibold tracking-[0.01em] text-white sm:text-[24px]">
        {SITE.brand}
      </div>
      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-footer-muted">
        {SITE.doctor}
      </div>
    </div>
  );
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 bg-primary-deep pb-7 pt-14 text-footer-text">
      <Container>
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <FooterBrand />
            <p className="text-body-sm mt-4 max-w-[30em] text-footer-muted">
              {dict.footer.about}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-200/80">
              {dict.footer.navTitle}
            </h3>
            {NAV.map(({ key, label }) => (
              <Link key={key} href={href(locale, key)} className={footerLink}>
                {dict.nav[label]}
              </Link>
            ))}
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-200/80">
              {dict.footer.contactTitle}
            </h3>
            <a href={SITE.phoneHref} className={footerLink}>
              <Phone className="mr-2 h-4 w-4 shrink-0" strokeWidth={1.85} aria-hidden="true" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.emails.doctor}`} className={footerLink}>
              <Mail className="mr-2 h-4 w-4 shrink-0" strokeWidth={1.85} aria-hidden="true" />
              {SITE.emails.doctor}
            </a>
            <span className={`${footerLink} items-start`}>
              <MapPin className="mr-2 mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.85} aria-hidden="true" />
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </span>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              <CalendarCheck className="mr-2 h-4 w-4 shrink-0" strokeWidth={1.85} aria-hidden="true" />
              {dict.common.bookOnline}
            </a>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-200/80">
              {dict.footer.legalTitle}
            </h3>
            <Link href={href(locale, "privacy")} className={footerLink}>
              {dict.footer.privacy}
            </Link>
            <Link href={href(locale, "cookies")} className={footerLink}>
              {dict.footer.cookies}
            </Link>
          </div>
        </div>

        <div className="text-caption mt-10 border-t border-white/10 pt-5 text-footer-subtle">
          © {year} {SITE.company} {dict.footer.rights}
        </div>
      </Container>
    </footer>
  );
}

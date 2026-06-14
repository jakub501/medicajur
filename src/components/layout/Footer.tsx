import Link from "next/link";
import { Phone, MapPin, CalendarCheck, Mail, ArrowRight } from "lucide-react";
import { href, type Locale, type RouteKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";

const NAV: { key: RouteKey; label: keyof Dictionary["nav"] }[] = [
  { key: "about", label: "about" },
  { key: "services", label: "services" },
  { key: "pricing", label: "pricing" },
  { key: "hours", label: "hours" },
  { key: "contact", label: "contact" },
];

const CONTACT_ICONS = [
  { icon: Phone, accent: "primary" as const },
  { icon: Mail, accent: "green" as const },
  { icon: MapPin, accent: "deep" as const },
  { icon: CalendarCheck, accent: "gold" as const },
];

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="footer-col-title">{children}</h3>;
}

function FooterNavLink({
  href: linkHref,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={linkHref} className="footer-nav-link group">
      <span>{children}</span>
      <ArrowRight
        className="footer-nav-chevron h-3.5 w-3.5 shrink-0"
        strokeWidth={2}
        aria-hidden="true"
      />
    </Link>
  );
}

function FooterContactItem({
  href: linkHref,
  external,
  icon: Icon,
  accent,
  children,
}: {
  href?: string;
  external?: boolean;
  icon: typeof Phone;
  accent: (typeof CONTACT_ICONS)[number]["accent"];
  children: React.ReactNode;
}) {
  const row = (
    <>
      <span
        className={cn(
          "hero-float-badge-icon h-10 w-10 shrink-0 rounded-[11px]",
          `hero-float-badge-icon--${accent}`,
        )}
        aria-hidden="true"
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.85} />
      </span>
      <span className="footer-contact-label">{children}</span>
    </>
  );

  const className = "footer-contact-card group";

  if (!linkHref) {
    return <div className={className}>{row}</div>;
  }

  if (external) {
    return (
      <a href={linkHref} target="_blank" rel="noopener noreferrer" className={className}>
        {row}
      </a>
    );
  }

  return (
    <a href={linkHref} className={className}>
      {row}
    </a>
  );
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const contactItems = [
    { href: SITE.phoneHref, label: SITE.phone, ...CONTACT_ICONS[0] },
    { href: `mailto:${SITE.emails.doctor}`, label: SITE.emails.doctor, ...CONTACT_ICONS[1] },
    {
      label: `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
      ...CONTACT_ICONS[2],
    },
    { href: SITE.bookingUrl, label: dict.common.bookOnline, external: true, ...CONTACT_ICONS[3] },
  ] as const;

  return (
    <footer className="site-footer">
      <div className="site-footer-bridge" aria-hidden="true" />

      <div className="site-footer-body">
        <div className="site-footer-backdrop" aria-hidden="true">
          <div className="site-footer-gradient" />
          <div className="site-footer-grid" />
          <span className="site-footer-orb site-footer-orb--primary" />
          <span className="site-footer-orb site-footer-orb--green" />
        </div>

        <Container className="relative">
          <div className="footer-panel-grid">
            <div className="footer-col footer-col--brand sm:col-span-2 lg:col-span-1">
              <Link href={href(locale, "home")} aria-label={SITE.brand} className="footer-brand-link">
                <Brand locale={locale} brand={SITE.brand} doctor={SITE.doctor} />
              </Link>
              <div className="footer-brand-rule" aria-hidden="true" />
              <p className="footer-brand-doctor">{SITE.doctor}</p>
              <p className="footer-about">{dict.footer.about}</p>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-book-cta"
              >
                <CalendarCheck className="h-[17px] w-[17px] shrink-0" strokeWidth={1.85} aria-hidden="true" />
                {dict.common.bookOnline}
                <ArrowRight className="h-4 w-4 shrink-0 opacity-80" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <div className="footer-col">
              <FooterColumnTitle>{dict.footer.navTitle}</FooterColumnTitle>
              <nav className="footer-nav">
                {NAV.map(({ key, label }) => (
                  <FooterNavLink
                    key={key}
                    href={
                      key === "pricing" ? href(locale, "services", "pricing") : href(locale, key)
                    }
                  >
                    {dict.nav[label]}
                  </FooterNavLink>
                ))}
              </nav>
            </div>

            <div className="footer-col">
              <FooterColumnTitle>{dict.footer.contactTitle}</FooterColumnTitle>
              <div className="footer-contact-list">
                {contactItems.map((item) => (
                  <FooterContactItem
                    key={item.label}
                    href={"href" in item ? item.href : undefined}
                    external={"external" in item ? item.external : undefined}
                    icon={item.icon}
                    accent={item.accent}
                  >
                    {item.label}
                  </FooterContactItem>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <FooterColumnTitle>{dict.footer.legalTitle}</FooterColumnTitle>
              <nav className="footer-nav">
                <FooterNavLink href={href(locale, "privacy")}>{dict.footer.privacy}</FooterNavLink>
                <FooterNavLink href={href(locale, "cookies")}>{dict.footer.cookies}</FooterNavLink>
              </nav>
            </div>
          </div>
        </Container>

        <div className="site-footer-bar">
          <Container>
            <div className="site-footer-bar-inner">
              <p className="footer-bar-copy">
                © {year} {SITE.company} {dict.footer.rights}
              </p>
              <div className="footer-bar-links">
                <Link href={href(locale, "privacy")} className="footer-bar-link">
                  {dict.footer.privacy}
                </Link>
                <span className="footer-bar-sep" aria-hidden="true" />
                <Link href={href(locale, "cookies")} className="footer-bar-link">
                  {dict.footer.cookies}
                </Link>
              </div>
              <p className="footer-bar-mark">{SITE.brand}</p>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}

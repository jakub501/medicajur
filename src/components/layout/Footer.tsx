import Link from "next/link";
import { Phone, MapPin, CalendarCheck, Mail } from "lucide-react";
import { homeNavHref, homeNavOrder, href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";
import { cn } from "@/lib/cn";

const CONTACT_ACCENTS = ["primary", "green", "deep"] as const;

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="footer-col-title">
      {children}
      <span className="footer-col-rule" aria-hidden="true" />
    </h3>
  );
}

function FooterNavLink({
  href: linkHref,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={linkHref} className="footer-nav-link">
      {children}
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
  accent: (typeof CONTACT_ACCENTS)[number];
  children: React.ReactNode;
}) {
  const content = (
    <>
      <span className={cn("footer-contact-ico", `footer-contact-ico--${accent}`)}>
        <Icon className="h-3.5 w-3.5" strokeWidth={1.85} aria-hidden="true" />
      </span>
      <span className="footer-contact-label">{children}</span>
    </>
  );

  const className = "footer-contact-row";

  if (!linkHref) {
    return <div className={className}>{content}</div>;
  }

  if (external) {
    return (
      <a href={linkHref} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <a href={linkHref} className={className}>
      {content}
    </a>
  );
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const contactItems = [
    { href: SITE.phoneHref, label: SITE.phone, icon: Phone, accent: CONTACT_ACCENTS[0] },
    {
      href: `mailto:${SITE.emails.doctor}`,
      label: SITE.emails.doctor,
      icon: Mail,
      accent: CONTACT_ACCENTS[1],
    },
    {
      label: `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
      icon: MapPin,
      accent: CONTACT_ACCENTS[2],
    },
  ] as const;

  return (
    <footer className="site-footer">
      <div className="site-footer-body">
        <Container>
          <div className="footer-inner">
            <div className="footer-panel-grid">
              <div className="footer-col footer-col--brand sm:col-span-2 lg:col-span-1">
                <Link href={href(locale, "home")} aria-label={SITE.brand} className="footer-brand-link">
                  <Brand locale={locale} brand={SITE.brand} doctor={SITE.doctor} variant="lockup" />
                </Link>
                <p className="footer-about">{dict.footer.about}</p>
                <a
                  href={SITE.bookHref}
                  className="cta-primary footer-book-cta mt-5 inline-flex min-h-10 items-center gap-2 rounded-[12px] px-4 text-body-sm font-bold text-white transition-all hover:-translate-y-px"
                >
                  <CalendarCheck className="h-4 w-4" strokeWidth={1.85} aria-hidden="true" />
                  {dict.common.bookOnline}
                </a>
              </div>

              <div className="footer-col">
                <FooterColumnTitle>{dict.footer.navTitle}</FooterColumnTitle>
                <nav className="footer-nav">
                  {homeNavOrder.map((key) => (
                    <FooterNavLink key={key} href={homeNavHref(locale, key)}>
                      {dict.nav[key]}
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

            <div className="footer-bottom">
              <p className="footer-copyright">
                © {year} {SITE.company} {dict.footer.rights}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

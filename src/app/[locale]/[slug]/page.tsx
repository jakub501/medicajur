import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locales,
  routes,
  contentRouteKeys,
  isLocale,
  resolveRouteKey,
  type Locale,
  type RouteKey,
} from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { AboutPage } from "@/components/pages/AboutPage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { PricingPage } from "@/components/pages/PricingPage";
import { HoursPage } from "@/components/pages/HoursPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { LegalPage } from "@/components/pages/LegalPage";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    contentRouteKeys.map((key) => ({ locale, slug: routes[key][locale] })),
  );
}

function pageTitle(key: RouteKey, dict: Dictionary): string {
  switch (key) {
    case "about":
      return dict.about.title;
    case "services":
      return dict.services.pageTitle;
    case "pricing":
      return dict.pricing.pageTitle;
    case "hours":
      return dict.hoursSection.title;
    case "contact":
      return dict.contact.title;
    case "privacy":
      return dict.legal.privacyTitle;
    case "cookies":
      return dict.legal.cookiesTitle;
    default:
      return dict.nav.about;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const key = resolveRouteKey(locale, slug);
  if (!key) return {};

  const dict = await getDictionary(locale);
  const otherLocale: Locale = locale === "sk" ? "en" : "sk";

  return {
    title: pageTitle(key, dict),
    alternates: {
      canonical: `/${locale}/${slug}`,
      languages: {
        [locale]: `/${locale}/${slug}`,
        [otherLocale]: `/${otherLocale}/${routes[key][otherLocale]}`,
        "x-default": `/sk/${routes[key].sk}`,
      },
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const key = resolveRouteKey(locale, slug);
  if (!key || key === "home") notFound();

  const dict = await getDictionary(locale);

  switch (key) {
    case "about":
      return <AboutPage locale={locale} dict={dict} />;
    case "services":
      return <ServicesPage locale={locale} dict={dict} />;
    case "pricing":
      return <PricingPage locale={locale} />;
    case "hours":
      return <HoursPage locale={locale} dict={dict} />;
    case "contact":
      return <ContactPage locale={locale} dict={dict} />;
    case "privacy":
      return <LegalPage kind="privacy" locale={locale} />;
    case "cookies":
      return <LegalPage kind="cookies" locale={locale} />;
    default:
      notFound();
  }
}

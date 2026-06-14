import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { findEquipmentBySlug, getEquipmentSlugs } from "@/lib/equipment";
import { EquipmentDetailPage } from "@/components/pages/EquipmentDetailPage";

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const dict = getDictionary(locale);
    const servicesSlug = routes.services[locale];

    return getEquipmentSlugs(dict).map((equipmentSlug) => ({
      locale,
      slug: servicesSlug,
      equipmentSlug,
    }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string; equipmentSlug: string }>;
}): Promise<Metadata> {
  const { locale, equipmentSlug } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const item = findEquipmentBySlug(dict, equipmentSlug);
  if (!item?.device) return {};

  const otherLocale: Locale = locale === "sk" ? "en" : "sk";
  const servicesSlug = routes.services[locale];
  const otherServicesSlug = routes.services[otherLocale];

  return {
    title: item.detail?.pageTitle ?? item.device,
    alternates: {
      canonical: `/${locale}/${servicesSlug}/${equipmentSlug}`,
      languages: {
        [locale]: `/${locale}/${servicesSlug}/${equipmentSlug}`,
        [otherLocale]: `/${otherLocale}/${otherServicesSlug}/${equipmentSlug}`,
        "x-default": `/sk/${routes.services.sk}/${equipmentSlug}`,
      },
    },
  };
}

export default async function EquipmentDetailRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string; equipmentSlug: string }>;
}) {
  const { locale, slug, equipmentSlug } = await params;
  if (!isLocale(locale)) notFound();
  if (slug !== routes.services[locale]) notFound();

  const dict = getDictionary(locale);
  const item = findEquipmentBySlug(dict, equipmentSlug);
  if (!item?.slug || !item.detail) notFound();

  return (
    <EquipmentDetailPage
      locale={locale}
      dict={dict}
      item={item as typeof item & { slug: string; detail: NonNullable<typeof item.detail> }}
    />
  );
}

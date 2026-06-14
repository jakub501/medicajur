import { routes, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export type EquipmentItem = Dictionary["services"]["equipment"]["items"][number];

export function getEquipmentItems(dict: Dictionary) {
  return dict.services.equipment.items;
}

export function findEquipmentBySlug(dict: Dictionary, slug: string) {
  const items = getEquipmentItems(dict);
  const canonical = items.find((item) => item.slug === slug && item.detail);
  if (canonical) return canonical;

  const linked = items.find((item) => item.detailSlug === slug);
  if (linked) {
    return items.find((item) => item.slug === slug && item.detail) ?? null;
  }

  return null;
}

export function equipmentHref(locale: Locale, slug: string) {
  return `/${locale}/${routes.services[locale]}/${slug}`;
}

export function getEquipmentLinkSlug(item: EquipmentItem) {
  if (item.slug && item.detail) return item.slug;
  if (item.detailSlug) return item.detailSlug;
  return null;
}

export function hasEquipmentDetail(dict: Dictionary, slug: string) {
  return findEquipmentBySlug(dict, slug) !== null;
}

export function getEquipmentSlugs(dict: Dictionary) {
  return [
    ...new Set(
      getEquipmentItems(dict)
        .filter((item) => item.slug && item.detail)
        .map((item) => item.slug as string),
    ),
  ];
}

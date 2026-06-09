export const locales = ["sk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sk";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Maps a logical page key to its localized URL slug. */
export const routes = {
  home: { sk: "", en: "" },
  about: { sk: "ambulancia", en: "about" },
  services: { sk: "sluzby", en: "services" },
  hours: { sk: "ordinacne-hodiny", en: "opening-hours" },
  patients: { sk: "pre-pacientov", en: "for-patients" },
  contact: { sk: "kontakt", en: "contact" },
  privacy: { sk: "ochrana-osobnych-udajov", en: "privacy-policy" },
  cookies: { sk: "cookies", en: "cookies" },
} as const;

export type RouteKey = keyof typeof routes;

export function href(locale: Locale, key: RouteKey, hash?: string) {
  const slug = routes[key][locale];
  const base = slug ? `/${locale}/${slug}` : `/${locale}`;
  return hash ? `${base}#${hash}` : base;
}

/** Content (non-home) route keys, in nav/sitemap order. */
export const contentRouteKeys: RouteKey[] = [
  "about",
  "services",
  "hours",
  "patients",
  "contact",
  "privacy",
  "cookies",
];

export function resolveRouteKey(locale: Locale, slug: string): RouteKey | null {
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][locale] === slug) return key;
  }
  return null;
}

/** Translate the current pathname into the equivalent path for another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const current = segments[0] as Locale;
  const rest = segments.slice(1).join("/");
  if (!rest) return `/${target}`;

  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][current] === rest) {
      const targetSlug = routes[key][target];
      return targetSlug ? `/${target}/${targetSlug}` : `/${target}`;
    }
  }
  return `/${target}/${rest}`;
}

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
  pricing: { sk: "cennik", en: "pricing" },
  hours: { sk: "ordinacne-hodiny", en: "opening-hours" },
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

/** Homepage section anchors used when navigating from the home page. */
export const homeSectionHash: Partial<Record<RouteKey, string>> = {
  about: "about",
  services: "services",
  hours: "hours",
  contact: "kontakt",
};

export function isHomePath(pathname: string, locale: Locale) {
  return pathname === `/${locale}` || pathname === `/${locale}/`;
}

export function navHref(locale: Locale, key: RouteKey, pathname: string) {
  if (key === "pricing") {
    return href(locale, "services", "pricing");
  }
  if (isHomePath(pathname, locale)) {
    const hash = homeSectionHash[key];
    if (hash) return href(locale, "home", hash);
  }
  return href(locale, key);
}

/** Content (non-home) route keys, in nav/sitemap order. */
export const contentRouteKeys: RouteKey[] = [
  "about",
  "services",
  "pricing",
  "hours",
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
  const hashIndex = pathname.indexOf("#");
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex) : "";
  const pathOnly = hashIndex >= 0 ? pathname.slice(0, hashIndex) : pathname;

  const segments = pathOnly.split("/").filter(Boolean);
  const current = segments[0] as Locale;
  const rest = segments.slice(1);
  if (!rest.length) return `/${target}${hash}`;

  if (rest[0] === routes.services[current] && rest.length > 1) {
    return `/${target}/${routes.services[target]}/${rest.slice(1).join("/")}${hash}`;
  }

  const restJoined = rest.join("/");
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][current] === restJoined) {
      const targetSlug = routes[key][target];
      return targetSlug ? `/${target}/${targetSlug}${hash}` : `/${target}${hash}`;
    }
  }
  return `/${target}/${restJoined}${hash}`;
}

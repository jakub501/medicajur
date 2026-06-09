import type { MetadataRoute } from "next";
import { locales, routes, contentRouteKeys } from "@/i18n/config";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE.baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    });
    for (const key of contentRouteKeys) {
      entries.push({
        url: `${SITE.baseUrl}/${locale}/${routes[key][locale]}`,
        lastModified: now,
        changeFrequency: key === "hours" ? "monthly" : "yearly",
        priority: key === "privacy" || key === "cookies" ? 0.3 : 0.7,
      });
    }
  }

  return entries;
}

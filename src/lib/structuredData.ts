import { SITE, SCHEDULE, fmtMinutes } from "./site";
import type { Locale } from "@/i18n/config";

const DOW_NAME = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function clinicJsonLd(locale: Locale) {
  const openingHoursSpecification = SCHEDULE.filter(
    (d) => d.intervals.length > 0,
  ).flatMap((d) =>
    d.intervals.map(([start, end]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DOW_NAME[d.dow],
      opens: fmtMinutes(start),
      closes: fmtMinutes(end),
    })),
  );

  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Physician"],
    name: SITE.company,
    alternateName: SITE.brand,
    url: `${SITE.baseUrl}/${locale}`,
    telephone: SITE.phone,
    email: SITE.emails.doctor,
    medicalSpecialty: "PrimaryCare",
    currenciesAccepted: "EUR",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification,
    availableLanguage: ["Slovak", "English"],
    founder: {
      "@type": "Physician",
      name: SITE.doctor,
    },
  };
}

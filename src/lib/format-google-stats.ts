import type { Locale } from "@/i18n/config";

export function formatGoogleRating(rating: number, locale: Locale) {
  const formatted = rating.toFixed(1);
  return locale === "sk" ? formatted.replace(".", ",") : formatted;
}

export function formatGoogleReviewCount(count: number, locale: Locale) {
  if (locale === "en") {
    return count === 1 ? "1 review" : `${count} reviews`;
  }

  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 14) return `${count} recenzií`;
  if (mod10 === 1) return `${count} recenzia`;
  if (mod10 >= 2 && mod10 <= 4) return `${count} recenzie`;
  return `${count} recenzií`;
}

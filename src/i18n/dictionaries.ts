import type { Locale } from "./config";

export type { Dictionary } from "./sk";

export async function getDictionary(locale: Locale) {
  return locale === "sk"
    ? (await import("./sk")).sk
    : (await import("./en")).en;
}

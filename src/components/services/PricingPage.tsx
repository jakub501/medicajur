import { redirect } from "next/navigation";
import { href, type Locale } from "@/i18n/config";

export function PricingPage({ locale }: { locale: Locale }): never {
  redirect(href(locale, "services", "pricing"));
}

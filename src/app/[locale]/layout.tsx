import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Newsreader, Public_Sans } from "next/font/google";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";
import { clinicJsonLd } from "@/lib/structuredData";
import { NoticeBar } from "@/components/layout/NoticeBar";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { ScrollToHash } from "@/components/layout/ScrollToHash";
import { MainShell } from "@/components/ui/MainShell";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : "sk";
  const dict = getDictionary(loc);

  const title = `${SITE.brand} — ${SITE.doctor}`;
  const description =
    loc === "sk"
      ? "Moderná všeobecná ambulancia pre dospelých vo Svätom Jure. Prevencia, diagnostika, liečba, odbery, očkovanie a POCT vyšetrenia."
      : "A modern general practice for adults in Svätý Jur. Prevention, diagnostics, treatment, blood sampling, vaccination and POCT testing.";

  return {
    metadataBase: new URL(SITE.baseUrl),
    title: {
      default: title,
      template: `%s — ${SITE.brand}`,
    },
    description,
    applicationName: SITE.brand,
    authors: [{ name: SITE.doctor }],
    alternates: {
      canonical: `/${loc}`,
      languages: {
        sk: "/sk",
        en: "/en",
        "x-default": "/sk",
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE.brand,
      title,
      description,
      url: `/${loc}`,
      locale: loc === "sk" ? "sk_SK" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords:
      loc === "sk"
        ? [
            "všeobecný lekár Svätý Jur",
            "ambulancia Svätý Jur",
            "MUDr. Pavol Trnovec",
            "MEDICA JUR",
            "lekár pre dospelých Svätý Jur",
          ]
        : [
            "general practitioner Svätý Jur",
            "English speaking doctor Slovakia",
            "MUDr. Pavol Trnovec",
            "MEDICA JUR",
          ],
    other: { language: dict.meta.htmlLang },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const jsonLd = clinicJsonLd(locale);

  return (
    <html
      lang={locale}
      className={`${newsreader.variable} ${publicSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NoticeBar locale={locale} />
        <SiteChrome locale={locale} dict={dict} />
        <ScrollToHash />
        <main className="relative z-0 flex-1">
          <MainShell>{children}</MainShell>
        </main>
        <Footer locale={locale} dict={dict} />
        <CookieBanner locale={locale} dict={dict} />
        <StickyMobileCta dict={dict} />
      </body>
    </html>
  );
}

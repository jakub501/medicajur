import type { Locale } from "@/i18n/config";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };

const PRIVACY: Record<Locale, LegalDoc> = {
  sk: {
    title: "Ochrana osobných údajov",
    updated: "Posledná aktualizácia: jún 2026",
    intro:
      "Ochrana vašich osobných údajov je pre nás dôležitá. Tento dokument vysvetľuje, aké údaje spracúvame, na aký účel a aké máte práva podľa Nariadenia (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z. o ochrane osobných údajov.",
    sections: [
      {
        heading: "Prevádzkovateľ",
        paragraphs: [
          "Prevádzkovateľom je MEDICA JUR, s.r.o., so sídlom Muškátová 2, 900 21 Svätý Jur, v zastúpení MUDr. Pavol Trnovec, PhD. Kontakt: doktor@medicajur.sk, +421 2 2073 3871.",
          "(IČO a ďalšie identifikačné údaje doplníme podľa podkladov prevádzkovateľa.)",
        ],
      },
      {
        heading: "Aké údaje spracúvame",
        paragraphs: ["Spracúvame nasledujúce kategórie osobných údajov:"],
        list: [
          "identifikačné a kontaktné údaje (meno, adresa, telefón, e-mail, rodné číslo),",
          "údaje o zdravotnom stave v rozsahu nevyhnutnom na poskytovanie zdravotnej starostlivosti,",
          "údaje zo zdravotnej dokumentácie,",
          "údaje, ktoré nám poskytnete pri komunikácii (telefón, e-mail, kontaktný formulár).",
        ],
      },
      {
        heading: "Účel a právny základ spracúvania",
        paragraphs: [
          "Osobné údaje spracúvame najmä na účely poskytovania zdravotnej starostlivosti, vedenia zdravotnej dokumentácie a plnenia zákonných povinností.",
          "Právnym základom je plnenie zákonných povinností (najmä zákon č. 576/2004 Z. z. a č. 362/2011 Z. z.), poskytnutie zdravotnej starostlivosti a v odôvodnených prípadoch váš súhlas.",
        ],
      },
      {
        heading: "Doba uchovávania",
        paragraphs: [
          "Zdravotnú dokumentáciu uchovávame po dobu stanovenú právnymi predpismi. Ostatné údaje uchovávame len po dobu nevyhnutnú na dosiahnutie účelu spracúvania.",
        ],
      },
      {
        heading: "Príjemcovia údajov",
        paragraphs: [
          "Údaje môžu byť poskytnuté zdravotným poisťovniam, orgánom verejnej moci a poskytovateľom služieb (napr. laboratóriá, IT a portál Moji lekári) v rozsahu nevyhnutnom na plnenie účelu a na základe zmluvy o spracúvaní.",
        ],
      },
      {
        heading: "Vaše práva",
        paragraphs: ["V súvislosti so spracúvaním máte právo:"],
        list: [
          "na prístup k svojim údajom,",
          "na opravu nesprávnych údajov,",
          "na vymazanie alebo obmedzenie spracúvania (ak to umožňujú právne predpisy),",
          "namietať proti spracúvaniu,",
          "na prenosnosť údajov,",
          "podať sťažnosť na Úrad na ochranu osobných údajov SR.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Vo veciach ochrany osobných údajov nás kontaktujte na doktor@medicajur.sk alebo telefonicky na +421 2 2073 3871.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: June 2026",
    intro:
      "Protecting your personal data is important to us. This document explains what data we process, for what purpose, and what rights you have under Regulation (EU) 2016/679 (GDPR) and Act No. 18/2018 Coll. on personal data protection.",
    sections: [
      {
        heading: "Controller",
        paragraphs: [
          "The controller is MEDICA JUR, s.r.o., registered at Muškátová 2, 900 21 Svätý Jur, represented by MUDr. Pavol Trnovec, PhD. Contact: doktor@medicajur.sk, +421 2 2073 3871.",
          "(Company ID and further identification details to be added from the operator's records.)",
        ],
      },
      {
        heading: "What data we process",
        paragraphs: ["We process the following categories of personal data:"],
        list: [
          "identification and contact data (name, address, phone, e-mail, birth number),",
          "health data to the extent necessary for providing healthcare,",
          "medical record data,",
          "data you provide when contacting us (phone, e-mail, contact form).",
        ],
      },
      {
        heading: "Purpose and legal basis",
        paragraphs: [
          "We process personal data mainly to provide healthcare, maintain medical records and comply with legal obligations.",
          "The legal basis is compliance with legal obligations (in particular Acts No. 576/2004 Coll. and No. 362/2011 Coll.), provision of healthcare, and, where justified, your consent.",
        ],
      },
      {
        heading: "Retention period",
        paragraphs: [
          "We keep medical records for the period required by law. Other data is kept only for as long as necessary to fulfil the purpose of processing.",
        ],
      },
      {
        heading: "Recipients of data",
        paragraphs: [
          "Data may be shared with health insurers, public authorities and service providers (e.g. laboratories, IT and the Moji lekári portal) to the extent necessary and under a data processing agreement.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["In relation to processing you have the right to:"],
        list: [
          "access your data,",
          "rectify inaccurate data,",
          "erase or restrict processing (where permitted by law),",
          "object to processing,",
          "data portability,",
          "lodge a complaint with the Slovak Data Protection Authority.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For data protection matters, contact us at doktor@medicajur.sk or by phone at +421 2 2073 3871.",
        ],
      },
    ],
  },
};

const COOKIES: Record<Locale, LegalDoc> = {
  sk: {
    title: "Zásady používania súborov cookies",
    updated: "Posledná aktualizácia: jún 2026",
    intro:
      "Táto stránka používa súbory cookies, aby fungovala správne a aby sme mohli zlepšovať jej obsah. Nižšie nájdete prehľad používaných kategórií.",
    sections: [
      {
        heading: "Čo sú cookies",
        paragraphs: [
          "Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači. Pomáhajú stránke zapamätať si vaše nastavenia a zabezpečiť jej správne fungovanie.",
        ],
      },
      {
        heading: "Nevyhnutné cookies",
        paragraphs: [
          "Sú potrebné na základné fungovanie stránky, napríklad na zapamätanie si vášho súhlasu s cookies. Tieto cookies nie je možné vypnúť.",
        ],
      },
      {
        heading: "Analytické cookies (voliteľné)",
        paragraphs: [
          "Pomáhajú nám pochopiť, ako návštevníci používajú stránku, aby sme ju mohli zlepšovať. Používame ich iba s vaším súhlasom, ktorý môžete kedykoľvek odvolať.",
        ],
      },
      {
        heading: "Správa súhlasu",
        paragraphs: [
          "Svoj súhlas môžete kedykoľvek zmeniť vymazaním cookies vo vašom prehliadači, čím sa pri ďalšej návšteve znova zobrazí lišta so súhlasom.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie policy",
    updated: "Last updated: June 2026",
    intro:
      "This website uses cookies to function correctly and to help us improve its content. Below is an overview of the categories used.",
    sections: [
      {
        heading: "What are cookies",
        paragraphs: [
          "Cookies are small text files stored in your browser. They help the website remember your settings and ensure it works correctly.",
        ],
      },
      {
        heading: "Essential cookies",
        paragraphs: [
          "These are required for the basic functioning of the site, for example to remember your cookie consent. They cannot be turned off.",
        ],
      },
      {
        heading: "Analytics cookies (optional)",
        paragraphs: [
          "These help us understand how visitors use the site so we can improve it. We only use them with your consent, which you can withdraw at any time.",
        ],
      },
      {
        heading: "Managing consent",
        paragraphs: [
          "You can change your consent at any time by clearing cookies in your browser, which will show the consent bar again on your next visit.",
        ],
      },
    ],
  },
};

export function getLegalDoc(kind: "privacy" | "cookies", locale: Locale): LegalDoc {
  return (kind === "privacy" ? PRIVACY : COOKIES)[locale];
}

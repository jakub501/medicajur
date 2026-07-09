import type { Locale } from "@/i18n/config";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };

const PRIVACY: Record<Locale, LegalDoc> = {
  sk: {
    title: "Ochrana osobných údajov",
    updated: "Posledná aktualizácia: jún 2026",
    intro:
      "Ochrana vašich osobných údajov je pre nás dôležitá. V týchto zásadách vysvetľujeme, kto spracúva vaše osobné údaje, aké údaje spracúvame, na aké účely a na akom právnom základe, komu ich môžeme poskytnúť, ako dlho ich uchovávame a aké práva máte podľa Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z. o ochrane osobných údajov.",
    sections: [
      {
        heading: "Prevádzkovateľ",
        paragraphs: [
          "Prevádzkovateľom, ktorý určuje účely a prostriedky spracúvania osobných údajov, je:",
          "MEDICA JUR, s.r.o., so sídlom Muškátová 2, 900 21 Svätý Jur, IČO: 35 925 035, zapísaná v Obchodnom registri Mestského súdu Bratislava III, v zastúpení MUDr. Pavol Trnovec, PhD.",
          "Kontakt vo veciach ochrany osobných údajov: doktor@medicajur.sk, +421 2 2073 3871.",
        ],
      },
      {
        heading: "Aké osobné údaje spracúvame",
        paragraphs: ["V súvislosti s poskytovaním zdravotnej starostlivosti a prevádzkou ambulancie spracúvame najmä tieto kategórie osobných údajov:"],
        list: [
          "identifikačné údaje (meno a priezvisko, titul, dátum narodenia, rodné číslo),",
          "kontaktné údaje (adresa trvalého pobytu, telefónne číslo, e-mailová adresa),",
          "údaje o zdravotnej poisťovni a poistnom vzťahu,",
          "osobitnú kategóriu údajov o zdraví v rozsahu nevyhnutnom na poskytovanie zdravotnej starostlivosti,",
          "údaje zo zdravotnej dokumentácie (anamnéza, diagnózy, výsledky vyšetrení, predpísané lieky, odporúčania),",
          "údaje, ktoré nám poskytnete pri komunikácii (telefonicky, e-mailom, cez kontaktný formulár alebo portál Moji lekári).",
        ],
      },
      {
        heading: "Účely a právne základy spracúvania",
        paragraphs: [
          "Vaše osobné údaje spracúvame na nasledujúce účely a na týchto právnych základoch:",
        ],
        list: [
          "poskytovanie zdravotnej starostlivosti a vedenie zdravotnej dokumentácie — plnenie zákonných povinností podľa zákona č. 576/2004 Z. z. a č. 362/2011 Z. z. a spracúvanie nevyhnutné na účely zdravotnej starostlivosti (čl. 9 ods. 2 písm. h) GDPR),",
          "vyúčtovanie a komunikácia so zdravotnými poisťovňami — plnenie zákonných povinností,",
          "vedenie účtovnej a daňovej agendy — plnenie zákonných povinností,",
          "objednávanie na vyšetrenie a komunikácia s pacientom (vrátane portálu Moji lekári) — poskytnutie zdravotnej starostlivosti, prípadne náš oprávnený záujem na efektívnej organizácii ambulancie,",
          "vybavenie podnetov a otázok zaslaných cez kontaktné údaje na webe — náš oprávnený záujem, prípadne váš súhlas.",
        ],
      },
      {
        heading: "Zdroje osobných údajov",
        paragraphs: [
          "Osobné údaje získavame predovšetkým priamo od vás. V odôvodnených prípadoch ich môžeme získať aj od iných poskytovateľov zdravotnej starostlivosti (napr. pri prevzatí zdravotnej dokumentácie), od zdravotných poisťovní alebo z verejných registrov v rozsahu povolenom právnymi predpismi.",
        ],
      },
      {
        heading: "Príjemcovia a sprostredkovatelia",
        paragraphs: [
          "Vaše osobné údaje môžu byť v nevyhnutnom rozsahu poskytnuté:",
        ],
        list: [
          "zdravotným poisťovniam (VšZP, Dôvera, Union) na účely úhrady zdravotnej starostlivosti,",
          "iným poskytovateľom zdravotnej starostlivosti, ku ktorým vás odošleme (laboratóriá, odborní lekári, ústavná starostlivosť),",
          "Národnému centru zdravotníckych informácií a orgánom verejnej moci v rozsahu stanovenom zákonom,",
          "sprostredkovateľom, ktorí pre nás zabezpečujú služby (napr. prevádzkovateľ portálu Moji lekári, IT podpora, účtovné služby) na základe zmluvy o spracúvaní osobných údajov.",
        ],
      },
      {
        heading: "Prenos do tretích krajín",
        paragraphs: [
          "Vaše osobné údaje neprenášame do tretích krajín mimo Európskeho hospodárskeho priestoru ani medzinárodným organizáciám.",
        ],
      },
      {
        heading: "Doba uchovávania",
        paragraphs: [
          "Zdravotnú dokumentáciu uchovávame po dobu stanovenú zákonom č. 576/2004 Z. z. (spravidla 20 rokov po poslednom poskytnutí zdravotnej starostlivosti, resp. inú zákonom určenú dobu). Účtovné a daňové doklady uchovávame po dobu vyžadovanú príslušnými predpismi.",
          "Ostatné osobné údaje uchovávame len po dobu nevyhnutnú na dosiahnutie účelu spracúvania, prípadne do odvolania súhlasu, ak je spracúvanie založené na súhlase.",
        ],
      },
      {
        heading: "Vaše práva",
        paragraphs: ["V súvislosti so spracúvaním vašich osobných údajov máte tieto práva:"],
        list: [
          "právo na prístup k svojim osobným údajom a na informácie o ich spracúvaní,",
          "právo na opravu nesprávnych a doplnenie neúplných údajov,",
          "právo na vymazanie alebo obmedzenie spracúvania, ak to umožňujú právne predpisy,",
          "právo namietať proti spracúvaniu založenému na oprávnenom záujme,",
          "právo na prenosnosť údajov, ak je spracúvanie založené na súhlase alebo zmluve a vykonáva sa automatizovane,",
          "právo kedykoľvek odvolať súhlas, ak je spracúvanie založené na súhlase, bez vplyvu na zákonnosť spracúvania pred jeho odvolaním,",
          "právo podať návrh na začatie konania na Úrade na ochranu osobných údajov Slovenskej republiky.",
        ],
      },
      {
        heading: "Automatizované rozhodovanie",
        paragraphs: [
          "Pri spracúvaní vašich osobných údajov nedochádza k automatizovanému rozhodovaniu vrátane profilovania, ktoré by malo právne účinky alebo by sa vás obdobne významne dotýkalo.",
        ],
      },
      {
        heading: "Súbory cookies",
        paragraphs: [
          "Naša webová stránka používa súbory cookies. Podrobnosti o ich používaní a o správe vášho súhlasu nájdete v dokumente Zásady používania súborov cookies.",
        ],
      },
      {
        heading: "Zmeny týchto zásad",
        paragraphs: [
          "Tieto zásady môžeme priebežne aktualizovať, aby zodpovedali zmenám v právnych predpisoch alebo v spôsobe spracúvania údajov. Aktuálne znenie je vždy dostupné na tejto stránke spolu s dátumom poslednej aktualizácie.",
        ],
      },
      {
        heading: "Kontakt a dozorný orgán",
        paragraphs: [
          "Vo veciach ochrany osobných údajov a uplatnenia svojich práv nás kontaktujte na doktor@medicajur.sk alebo telefonicky na +421 2 2073 3871.",
          "Dozorným orgánom je Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: June 2026",
    intro:
      "Protecting your personal data is important to us. This policy explains who processes your personal data, what data we process, for what purposes and on what legal basis, with whom we may share it, how long we retain it, and what rights you have under Regulation (EU) 2016/679 (GDPR) and Act No. 18/2018 Coll. on personal data protection.",
    sections: [
      {
        heading: "Controller",
        paragraphs: [
          "The controller determining the purposes and means of processing personal data is:",
          "MEDICA JUR, s.r.o., registered office at Muškátová 2, 900 21 Svätý Jur, Company ID (IČO): 35 925 035, registered in the Commercial Register of the Bratislava III City Court, represented by MUDr. Pavol Trnovec, PhD.",
          "Contact for data protection matters: doktor@medicajur.sk, +421 2 2073 3871.",
        ],
      },
      {
        heading: "What personal data we process",
        paragraphs: ["In connection with the provision of healthcare and the operation of the practice, we process in particular the following categories of personal data:"],
        list: [
          "identification data (first name and surname, title, date of birth, birth number),",
          "contact data (permanent address, phone number, e-mail address),",
          "health insurer and insurance relationship data,",
          "special category health data to the extent necessary for providing healthcare,",
          "medical record data (medical history, diagnoses, examination results, prescribed medication, recommendations),",
          "data you provide when contacting us (by phone, e-mail, contact form or the Moji lekári portal).",
        ],
      },
      {
        heading: "Purposes and legal bases",
        paragraphs: [
          "We process your personal data for the following purposes and on these legal bases:",
        ],
        list: [
          "providing healthcare and maintaining medical records — compliance with legal obligations under Acts No. 576/2004 Coll. and No. 362/2011 Coll. and processing necessary for healthcare purposes (Art. 9(2)(h) GDPR),",
          "billing and communication with health insurers — compliance with legal obligations,",
          "accounting and tax records — compliance with legal obligations,",
          "appointment booking and patient communication (including the Moji lekári portal) — provision of healthcare, or our legitimate interest in efficiently running the practice,",
          "handling enquiries sent via the contact details on the website — our legitimate interest, or your consent.",
        ],
      },
      {
        heading: "Sources of personal data",
        paragraphs: [
          "We obtain personal data primarily directly from you. In justified cases we may also obtain it from other healthcare providers (e.g. when taking over medical records), from health insurers or from public registers to the extent permitted by law.",
        ],
      },
      {
        heading: "Recipients and processors",
        paragraphs: [
          "Your personal data may be shared, to the necessary extent, with:",
        ],
        list: [
          "health insurers (VšZP, Dôvera, Union) for the purpose of reimbursing healthcare,",
          "other healthcare providers to whom you are referred (laboratories, specialists, inpatient care),",
          "the National Health Information Centre and public authorities to the extent required by law,",
          "processors providing services for us (e.g. the operator of the Moji lekári portal, IT support, accounting services) under a data processing agreement.",
        ],
      },
      {
        heading: "Transfers to third countries",
        paragraphs: [
          "We do not transfer your personal data to third countries outside the European Economic Area or to international organisations.",
        ],
      },
      {
        heading: "Retention period",
        paragraphs: [
          "We keep medical records for the period set by Act No. 576/2004 Coll. (generally 20 years after the last provision of healthcare, or another period set by law). Accounting and tax documents are kept for the period required by the relevant regulations.",
          "Other personal data is kept only for as long as necessary to achieve the purpose of processing, or until consent is withdrawn where processing is based on consent.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["In relation to the processing of your personal data, you have the following rights:"],
        list: [
          "the right to access your personal data and information about its processing,",
          "the right to rectify inaccurate data and complete incomplete data,",
          "the right to erasure or restriction of processing where permitted by law,",
          "the right to object to processing based on a legitimate interest,",
          "the right to data portability where processing is based on consent or a contract and carried out by automated means,",
          "the right to withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing before withdrawal,",
          "the right to lodge a complaint with the Office for Personal Data Protection of the Slovak Republic.",
        ],
      },
      {
        heading: "Automated decision-making",
        paragraphs: [
          "Your personal data is not subject to automated decision-making, including profiling, that would have legal effects or similarly significantly affect you.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "Our website uses cookies. For details on their use and on managing your consent, please see the Cookie policy.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time to reflect changes in legislation or in how we process data. The current version is always available on this page together with the date of the last update.",
        ],
      },
      {
        heading: "Contact and supervisory authority",
        paragraphs: [
          "For data protection matters and to exercise your rights, contact us at doktor@medicajur.sk or by phone at +421 2 2073 3871.",
          "The supervisory authority is the Office for Personal Data Protection of the Slovak Republic, Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk.",
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

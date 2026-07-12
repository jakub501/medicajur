import type { Locale } from "@/i18n/config";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[]; closing?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };

const PRIVACY: Record<Locale, LegalDoc> = {
  sk: {
    title: "Ochrana osobných údajov",
    updated: "Posledná aktualizácia: júl 2026",
    intro:
      "Tieto zásady sa týkajú výlučne spracúvania osobných údajov v súvislosti s používaním tejto webovej stránky. Stránka má čisto informačný charakter — neobsahuje žiadne kontaktné formuláre ani registráciu a na jej prezeranie nemusíte zadávať žiadne osobné údaje.\n\nSpracúvanie osobných údajov pacientov v rámci poskytovania zdravotnej starostlivosti sa riadi samostatnými zákonnými pravidlami, s ktorými vás podrobne oboznámime priamo pri návšteve ambulancie.",
    sections: [
      {
        heading: "Prevádzkovateľ",
        paragraphs: [
          "Prevádzkovateľom webovej stránky je:",
          "MEDICA JUR, s.r.o.",
          "Sídlo: Muškátová 2, 900 21 Svätý Jur",
          "IČO: 35 925 035",
          "V zastúpení: MUDr. Pavol Trnovec, PhD.",
          "Kontakt vo veciach ochrany osobných údajov: E-mail: doktor@medicajur.sk | Tel.: +421 2 2073 3871",
        ],
      },
      {
        heading: "Aké údaje spracúvame na tejto stránke",
        paragraphs: [
          "Prostredníctvom tejto stránky aktívne nezbierame žiadne osobné údaje. V súvislosti s jej samotnou technickou prevádzkou sa spracúvajú len:",
        ],
        list: [
          "Technické údaje potrebné na správne zobrazenie a bezpečnosť stránky (najmä IP adresa, typ prehliadača a operačného systému, čas prístupu), ktoré automaticky spracúva náš poskytovateľ hostingu v rámci serverových logov.",
          "Údaje spojené so zobrazením interaktívnej mapy Google — pri interakcii s mapou v pätičke webu môže spoločnosť Google spracovať vašu IP adresu a uložiť vo vašom zariadení súbory cookies.",
          "Verejné hodnotenie a počet recenzií ambulancie, ktoré načítavame z rozhrania Google Maps za účelom zobrazenia spokojnosti pacientov (pri samotnom zobrazení tohto údaju nespracúvame osobné údaje návštevníka).",
        ],
      },
      {
        heading: "Účely a právne základy spracúvania",
        paragraphs: [
          "Uvedené dáta spracúvame na tieto účely a výhradne na týchto právnych základoch podľa Nariadenia GDPR:",
        ],
        list: [
          "Prevádzka, správne zobrazenie a bezpečnosť webovej stránky: Náš oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR) na zabezpečení funkčnosti, ochrany pred kybernetickými útokmi a technickej stability webu.",
          "Zobrazenie polohy a orientácie cez Google Maps: Váš predchádzajúci súhlas s používaním súborov cookies a prenosom technických údajov tretej strane (čl. 6 ods. 1 písm. a) GDPR).",
          "Zobrazenie celkového hodnotenia z Google Maps: Náš oprávnený záujem na transparentnom informovaní verejnosti o kvalite našich služieb.",
        ],
      },
      {
        heading: "Súbory cookies",
        paragraphs: [
          "Stránka používa iba nevyhnutné technické cookies potrebné na jej základné fungovanie (napríklad na zapamätanie vašich preferencií súhlasu) a cookies tretích strán spojené so zobrazením máp Google. Podrobné informácie a možnosť kedykoľvek zmeniť svoje nastavenia nájdete v dokumente Zásady používania súborov cookies.",
          "Ak v budúcnosti nasadíme nástroje na analýzu návštevnosti (webovú analytiku), tieto zásady a lištu súhlasov vopred aktualizujeme.",
        ],
      },
      {
        heading: "Príjemcovia a sprostredkovatelia",
        paragraphs: [
          "Údaje spracúvané v súvislosti s prevádzkou webu môžu byť v nevyhnutnom technickom rozsahu spracúvané našimi preverenými sprostredkovateľmi:",
        ],
        list: [
          "Poskytovateľ webového hostingu a technickej správy stránky (serverová infraštruktúra).",
          "Spoločnosť Google Ireland Ltd. / Google LLC (služba Google Maps a súvisiace API rozhrania) v prípade, že udelíte súhlas s ich zobrazením.",
        ],
      },
      {
        heading: "Prenos do tretích krajín",
        paragraphs: [
          "Niektorí partneri (predovšetkým spoločnosť Google) môžu technické údaje spracúvať aj na serveroch mimo Európskeho hospodárskeho priestoru, najmä v USA. Takýto prenos je plne zabezpečený primeranými právnymi zárukami v súlade s GDPR, predovšetkým na základe rozhodnutia Európskej komisie o primeranosti (EU–US Data Privacy Framework), prípadne prostredníctvom štandardných zmluvných doložiek.",
        ],
      },
      {
        heading: "Doba uchovávania",
        paragraphs: [
          "Technické záznamy (serverové logy) uchovávame len po nevyhnutne krátku dobu (štandardne v rozsahu niekoľkých týždňov) za účelom zaistenia bezpečnosti a detekcie technických chýb. Prostredníctvom tejto webovej stránky neuchovávame dohodou žiadne ďalšie osobné ani zdravotné údaje.",
        ],
      },
      {
        heading: "Vaše práva",
        paragraphs: ["V súvislosti so spracúvaním osobných údajov máte podľa nariadenia GDPR tieto práva:"],
        list: [
          "Právo na prístup k svojim osobným údajom a na informácie o tom, ako sú spracúvané.",
          "Právo na opravu nesprávnych alebo neúplných údajov.",
          "Právo na vymazanie („právo na zabudnutie“) alebo obmedzenie spracúvania, ak sú splnené zákonné podmienky.",
          "Právo namietať proti spracúvaniu, ktoré je založené na našom oprávnenom záujme.",
          "Právo kedykoľvek odvolať svoj súhlas (napr. pri nastavení cookies), pričom odvolanie nemá vplyv na zákonnosť spracúvania pred jeho odvolaním.",
          "Právo podať sťažnosť na dozorný orgán, ak sa domnievate, že pri spracúvaní došlo k porušeniu vašich práv.",
        ],
      },
      {
        heading: "Kontakt a dozorný orgán",
        paragraphs: [
          "Ak máte akékoľvek otázky týkajúce sa ochrany vašich osobných údajov alebo si chcete uplatniť svoje práva, kontaktujte nás e-mailom na doktor@medicajur.sk alebo telefonicky na +421 2 2073 3871.",
          "Dozorným orgánom pre Slovenskú republiku je:",
          "Úrad na ochranu osobných údajov Slovenskej republiky",
          "Hraničná 12, 820 07 Bratislava",
          "Web: www.dataprotection.gov.sk",
        ],
      },
      {
        heading: "Zmeny týchto zásad",
        paragraphs: [
          "Tieto zásady ochrany osobných údajov môžeme priebežne aktualizovať, aby zodpovedali prípadným zmenám v legislatíve alebo v technickom fungovaní nášho webu. Aktuálne znenie je vždy zverejnené na tejto podstránke.",
          "Dátum poslednej aktualizácie: júl 2026",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: July 2026",
    intro:
      "This policy concerns solely the processing of personal data in connection with the use of this website. The site is purely informational — it contains no contact forms or registration, and you do not need to provide any personal data to browse it.\n\nThe processing of patients' personal data as part of providing healthcare is governed by separate legal rules, which we will explain in detail when you visit the practice.",
    sections: [
      {
        heading: "Controller",
        paragraphs: [
          "The controller of this website is:",
          "MEDICA JUR, s.r.o.",
          "Registered office: Muškátová 2, 900 21 Svätý Jur",
          "Company ID (IČO): 35 925 035",
          "Represented by: MUDr. Pavol Trnovec, PhD.",
          "Contact for data protection matters: E-mail: doktor@medicajur.sk | Tel.: +421 2 2073 3871",
        ],
      },
      {
        heading: "What data we process on this site",
        paragraphs: [
          "We do not actively collect any personal data through this website. In connection with its technical operation, only the following are processed:",
        ],
        list: [
          "Technical data required for the correct display and security of the site (in particular IP address, browser and operating system type, time of access), which our hosting provider automatically processes as part of server logs.",
          "Data related to displaying the interactive Google map — when you interact with the map in the website footer, Google may process your IP address and store cookies on your device.",
          "The practice's public rating and review count, which we load from the Google Maps interface to display patient satisfaction (when displaying this information, we do not process the visitor's personal data).",
        ],
      },
      {
        heading: "Purposes and legal bases",
        paragraphs: [
          "We process this data for the following purposes and solely on these legal bases under the GDPR:",
        ],
        list: [
          "Operating, correctly displaying and securing the website: our legitimate interest (Art. 6(1)(f) GDPR) in ensuring functionality, protection against cyberattacks and the technical stability of the site.",
          "Displaying location and orientation via Google Maps: your prior consent to the use of cookies and the transfer of technical data to a third party (Art. 6(1)(a) GDPR).",
          "Displaying the overall rating from Google Maps: our legitimate interest in transparently informing the public about the quality of our services.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "The site uses only essential technical cookies required for its basic functioning (for example to remember your consent preferences) and third-party cookies related to displaying Google Maps. For detailed information and the option to change your settings at any time, see the Cookie policy.",
          "If we deploy website analytics tools in the future, we will update this policy and the consent bar beforehand.",
        ],
      },
      {
        heading: "Recipients and processors",
        paragraphs: [
          "Data processed in connection with the operation of the website may, to the necessary technical extent, be processed by our vetted processors:",
        ],
        list: [
          "The website hosting and technical management provider (server infrastructure).",
          "Google Ireland Ltd. / Google LLC (Google Maps service and related API interfaces) if you consent to their display.",
        ],
      },
      {
        heading: "Transfers to third countries",
        paragraphs: [
          "Some partners (primarily Google) may also process technical data on servers outside the European Economic Area, mainly in the USA. Such transfers are fully safeguarded by appropriate legal measures under the GDPR, primarily on the basis of the European Commission's adequacy decision (EU–US Data Privacy Framework), or through standard contractual clauses.",
        ],
      },
      {
        heading: "Retention period",
        paragraphs: [
          "We keep technical records (server logs) only for the necessarily short period (typically a few weeks) required to ensure security and detect technical errors. Through this website, we do not store any other personal or health data by agreement.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: ["In relation to the processing of your personal data, you have the following rights under the GDPR:"],
        list: [
          "The right to access your personal data and information about how it is processed.",
          "The right to rectify inaccurate or incomplete data.",
          "The right to erasure (\"right to be forgotten\") or restriction of processing where the legal conditions are met.",
          "The right to object to processing based on our legitimate interest.",
          "The right to withdraw your consent at any time (for example when managing cookies), without affecting the lawfulness of processing before withdrawal.",
          "The right to lodge a complaint with a supervisory authority if you believe your rights have been violated in the processing.",
        ],
      },
      {
        heading: "Contact and supervisory authority",
        paragraphs: [
          "If you have any questions regarding the protection of your personal data or wish to exercise your rights, contact us by e-mail at doktor@medicajur.sk or by phone at +421 2 2073 3871.",
          "The supervisory authority for the Slovak Republic is:",
          "Office for Personal Data Protection of the Slovak Republic",
          "Hraničná 12, 820 07 Bratislava",
          "Web: www.dataprotection.gov.sk",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this privacy policy from time to time to reflect changes in legislation or in the technical operation of our website. The current version is always published on this page.",
          "Last updated: July 2026",
        ],
      },
    ],
  },
};

const COOKIES: Record<Locale, LegalDoc> = {
  sk: {
    title: "Zásady používania súborov cookies",
    updated: "Posledná aktualizácia: júl 2026",
    intro:
      "Táto webová stránka používa iba nevyhnutné súbory cookies a cookies tretích strán spojené so zobrazením interaktívnych máp Google. Nižšie nájdete prehľad používaných kategórií a informácie o tom, ako s nimi pracujeme.",
    sections: [
      {
        heading: "Čo sú cookies",
        paragraphs: [
          "Cookies sú malé textové súbory, ktoré webová stránka ukladá vo vašom prehliadači alebo zariadení pri jej návšteve. Pomáhajú stránke zapamätať si vaše preferencie, zaistiť technickú bezpečnosť a zabezpečiť jej správne a plynulé fungovanie.",
        ],
      },
      {
        heading: "1. Nevyhnutné cookies (Technické)",
        paragraphs: [
          "Tieto súbory cookies sú nevyhnutné pre základné a bezpečné fungovanie webovej stránky. Slúžia napríklad na zapamätanie si vašej voľby v lište súhlasu s cookies (či ste mapu povolili alebo odmietli) a na správne zobrazenie rozhrania na rôznych zariadeniach.",
        ],
        list: [
          "Právny základ: Na používanie nevyhnutných cookies nevyžadujeme váš súhlas podľa § 109 ods. 8 Zákona o elektronických komunikáciách, preto ich nie je možné v našom systéme vypnúť.",
        ],
      },
      {
        heading: "2. Cookies tretích strán — Google Maps",
        paragraphs: [
          "V pätičke našej stránky využívame interaktívnu mapu a zobrazenie verejných recenzií od spoločnosti Google. Pri interakcii s touto mapou môže spoločnosť Google (Google Ireland Ltd. / Google LLC) uložiť vo vašom zariadení vlastné súbory cookies, spracovať vašu IP adresu a prenášať tieto údaje na svoje servery (vrátane USA).",
        ],
        list: [
          "Právny základ: Tieto cookies a externé skripty sa načítavajú výhradne na základe vášho dobrovoľného súhlasu, ktorý udelíte v cookie lište alebo priamo pri zástupnom obrázku mapy.",
          "Čo ak nesúhlasím? Zobrazenie mapy môžete kedykoľvek odmietnuť. V takom prípade sa skripty spoločnosti Google nespustia a vy môžete naďalej bez obmedzení používať a prezerat si celý zvyšok našej webovej stránky.",
        ],
      },
      {
        heading: "3. Analytické a marketingové cookies",
        paragraphs: [
          "V súčasnosti na našom webe nepoužívame žiadne analytické nástroje (ako napr. Google Analytics) ani marketingové či sledovacie cookies (ako napr. Facebook Pixel). Návštevnosť našej stránky nesledujeme za účelom cielenia reklamy.",
          "Ak by sme sa v budúcnosti rozhodli takéto nástroje nasadiť, budú sa na webe spúšťať výlučne po udelení vášho predchádzajúceho aktívneho súhlasu a tieto zásady vopred transparentne aktualizujeme.",
        ],
      },
      {
        heading: "Správa súhlasu a nastavenia prehliadača",
        paragraphs: [
          "Svoj udelený súhlas s používaním cookies pre Google Maps môžete kedykoľvek zmeniť alebo odvolať:",
        ],
        list: [
          "Vymazaním cookies v prehliadači: Ak vo svojom webovom prehliadači vymažete históriu cookies pre našu doménu, pri ďalšej návšteve stránky sa vám lišta so súhlasom zobrazí znova a svoju voľbu môžete prehodnotiť.",
          "Nastavením prehliadača: Väčšina moderných prehliadačov vám umožňuje ukladanie súborov cookies úplne zablokovať alebo nastaviť upozornenie pred ich uložením. Upozorňujeme však, že úplné zablokovanie nevyhnutných cookies môže spôsobiť, že si stránka nezapamätá vaše nastavenia.",
        ],
        closing: ["Dátum poslednej aktualizácie: júl 2026"],
      },
    ],
  },
  en: {
    title: "Cookie policy",
    updated: "Last updated: July 2026",
    intro:
      "This website uses only essential cookies and third-party cookies related to displaying interactive Google Maps. Below is an overview of the categories used and how we work with them.",
    sections: [
      {
        heading: "What are cookies",
        paragraphs: [
          "Cookies are small text files that a website stores in your browser or device when you visit it. They help the site remember your preferences, ensure technical security and enable it to function correctly and smoothly.",
        ],
      },
      {
        heading: "1. Essential cookies (Technical)",
        paragraphs: [
          "These cookies are essential for the basic and secure functioning of the website. They are used, for example, to remember your choice in the cookie consent bar (whether you allowed or declined the map) and to display the interface correctly on different devices.",
        ],
        list: [
          "Legal basis: We do not require your consent for essential cookies under Section 109(8) of the Electronic Communications Act, so they cannot be disabled in our system.",
        ],
      },
      {
        heading: "2. Third-party cookies — Google Maps",
        paragraphs: [
          "In the footer of our site, we use an interactive map and display of public reviews from Google. When you interact with this map, Google (Google Ireland Ltd. / Google LLC) may store its own cookies on your device, process your IP address and transfer this data to its servers (including in the USA).",
        ],
        list: [
          "Legal basis: These cookies and external scripts are loaded solely on the basis of your voluntary consent, which you give in the cookie bar or directly on the map placeholder image.",
          "What if I do not consent? You can decline the map display at any time. In that case, Google's scripts will not run and you can continue to use and browse the rest of our website without restriction.",
        ],
      },
      {
        heading: "3. Analytics and marketing cookies",
        paragraphs: [
          "We currently do not use any analytics tools (such as Google Analytics) or marketing or tracking cookies (such as Facebook Pixel) on our website. We do not track visits to our site for advertising targeting purposes.",
          "If we decide to deploy such tools in the future, they will only be activated on the site after you have given your prior active consent, and we will update this policy transparently in advance.",
        ],
      },
      {
        heading: "Managing consent and browser settings",
        paragraphs: [
          "You can change or withdraw your consent to the use of cookies for Google Maps at any time:",
        ],
        list: [
          "By clearing cookies in your browser: If you clear the cookie history for our domain in your web browser, the consent bar will appear again on your next visit and you can reconsider your choice.",
          "Through browser settings: Most modern browsers allow you to completely block the storage of cookies or set a warning before they are saved. Please note, however, that completely blocking essential cookies may prevent the site from remembering your settings.",
        ],
        closing: ["Last updated: July 2026"],
      },
    ],
  },
};

export function getLegalDoc(kind: "privacy" | "cookies", locale: Locale): LegalDoc {
  return (kind === "privacy" ? PRIVACY : COOKIES)[locale];
}

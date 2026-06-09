import type { Locale } from "./config";

/* The Slovak dictionary is the canonical shape; English must match it. */

const sk = {
  meta: {
    localeLabel: "Slovensky",
    switchTo: "English",
    htmlLang: "sk",
  },
  nav: {
    about: "Ambulancia",
    services: "Služby",
    hours: "Ordinačné hodiny",
    patients: "Pre pacientov",
    contact: "Kontakt",
    book: "Objednať sa",
    menu: "Menu",
    close: "Zavrieť",
  },
  common: {
    doctorRole: "Všeobecný lekár pre dospelých",
    openNow: "Otvorené teraz",
    closedNow: "Práve zatvorené",
    weekendClosed: "Zatvorené (víkend)",
    today: "Dnes",
    todayBadge: "Dnes",
    acute: "Akútne stavy",
    closed: "Zatvorené",
    address: "Adresa",
    phone: "Telefón",
    email: "E-mail",
    callDuringHours: "Volajte počas ordinačných hodín.",
    book: "Objednať sa",
    bookOnline: "Objednať online",
    call: "Zavolať",
    backHome: "Späť na úvod",
    readMore: "Zistiť viac",
    getDirections: "Navigovať",
  },
  topbar: {
    note: "Online objednávanie liekov a vyšetrení cez portál Moji lekári",
  },
  hero: {
    title: "Moderná všeobecná ambulancia vo Svätom Jure",
    lead: "Prevencia, presná diagnostika a liečba pre dospelých — s modernými prístrojmi a dostatkom času pre každého pacienta.",
    primaryCta: "Objednať vyšetrenie / e-recept",
    secondaryCta: "Som nový pacient",
    badgeDoctor: "Všeobecný lekár · samostatne od 2019",
    badgeEnglish: "English speaking GP",
    photoAlt: "MUDr. Pavol Trnovec, PhD.",
  },
  facts: {
    todayLabel: "Dnes",
    addressLabel: "Adresa",
    phoneLabel: "Telefón",
  },
  patients: {
    eyebrow: "Prijímame nových pacientov",
    title: "Vitajte v našej ambulancii",
    text: "O administratívu sa postaráme za vás. Prechod k nám je rýchly a bez stresu — odhlásenie od predchádzajúceho lekára vybavíme my.",
    downloadCta: "Stiahnuť formuláre",
    callCta: "Zavolať",
    stepsTitle: "Ako sa stať pacientom",
    steps: [
      {
        title: "Vyplňte dohodu",
        text: "Vyplníte a podpíšete dohodu o poskytovaní zdravotnej starostlivosti.",
      },
      {
        title: "Prineste ju osobne",
        text: "Do ambulancie počas ordinačných hodín, prípadne nám dajte vedieť telefonicky.",
      },
      {
        title: "Zvyšok necháte na nás",
        text: "O odhlásenie od predchádzajúceho lekára a presun dokumentácie sa postaráme my.",
      },
    ],
  },
  services: {
    eyebrow: "Starostlivosť",
    title: "Prehľad služieb",
    subtitle: "Kompletná zdravotná starostlivosť o dospelých pacientov pod jednou strechou.",
    featured: {
      title: "Prevencia, diagnostika a liečba",
      text: "Komplexná starostlivosť o dospelých so zameraním na včasnú diagnostiku, efektívnu liečbu a dlhodobé zdravie.",
    },
    items: [
      {
        title: "Odbery krvi",
        text: "Rýchle a šetrné odbery priamo v ambulancii pre presnú diagnostiku.",
        icon: "droplet",
      },
      {
        title: "Očkovanie",
        text: "Pravidelné aj voliteľné očkovania vrátane sezónnej chrípky a cestovnej medicíny.",
        icon: "syringe",
      },
      {
        title: "Preventívne prehliadky",
        text: "Pravidelné preventívne vyšetrenia s nárokom na úhradu zo zdravotného poistenia.",
        icon: "shield-check",
      },
      {
        title: "Predoperačné vyšetrenia",
        text: "Kompletná predoperačná príprava a interné predoperačné vyšetrenie.",
        icon: "clipboard-check",
      },
    ],
    poct: {
      title: "POCT prístroje — výsledky na počkanie",
      text: "Moderné prístroje pre rýchle laboratórne výsledky priamo na mieste, bez čakania na externé laboratórium.",
      tags: ["CRP test", "FOB test", "Glukóza · HbA1c", "EKG", "INR / Quick"],
    },
    pageTitle: "Naše služby",
    pageLead:
      "Poskytujeme komplexnú všeobecnú zdravotnú starostlivosť pre dospelých — od prevencie cez diagnostiku až po liečbu a dlhodobé sledovanie.",
    detailGroups: [
      {
        title: "Prevencia a poradenstvo",
        items: [
          "Preventívne prehliadky pre dospelých",
          "Posúdenie kardiovaskulárneho rizika",
          "Poradenstvo pri chronických ochoreniach",
          "Očkovanie a cestovná medicína",
        ],
      },
      {
        title: "Diagnostika",
        items: [
          "Odbery krvi a biologického materiálu",
          "POCT vyšetrenia s výsledkom na počkanie (CRP, glukóza, INR…)",
          "EKG vyšetrenie",
          "Interpretácia laboratórnych a zobrazovacích výsledkov",
        ],
      },
      {
        title: "Liečba a sledovanie",
        items: [
          "Liečba akútnych ochorení",
          "Manažment chronických ochorení (dispenzarizácia)",
          "Predpis liekov a e-recepty",
          "Predoperačné vyšetrenia a potvrdenia",
        ],
      },
    ],
  },
  hoursSection: {
    title: "Ordinačné hodiny",
    note: "Odbery krvi prebiehajú ráno. Na odber a plánované vyšetrenia sa, prosím, objednajte vopred.",
    acutePrefix: "Akútne",
    pageLead:
      "Telefonické objednávanie podľa dostupnosti sestier. Akútne stavy ošetríme v časoch na to vyhradených a podľa stavu pacienta.",
    days: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
    daysShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
  },
  contact: {
    title: "Kontakt",
    eyebrow: "Kde nás nájdete",
    lead: "Sme v novej polyfunkčnej budove (lokalita Kačačnice) na 1. poschodí, priamo nad lekárňou Vitalita.",
    addressNote:
      "Budova Kačačnice, 1. poschodie nad lekárňou Vitalita · bezbariérový vstup (výťah) · parkovanie pri budove",
    emailsTitle: "E-mailové kontakty",
    emailDoctor: "Lekár · objednávanie",
    emailRecipe: "Žiadanky na e-recept",
    emailNurse: "Sestra",
    mapTitle: "Mapa",
    portalTitle: "Online objednávanie",
    portalText:
      "Objednávanie liekov, elektronické konzultácie a objednanie na konkrétny čas prebiehajú výhradne cez aplikáciu Moji lekári. Registrácia prebieha na základe pozvánky, ktorú vám zašle lekár na e-mail.",
    company: "Prevádzkovateľ",
  },
  insurers: {
    label: "Zmluvné poisťovne",
  },
  reviews: {
    eyebrow: "Skúsenosti pacientov",
    title: "Čo o nás hovoria",
    disclaimer: "Ukážkové referencie — pred spustením nahradíme reálnymi ohlasmi pacientov.",
    items: [
      {
        text: "Pán doktor je skutočný profesionál. Dôkladne ma vyšetril, všetko zrozumiteľne vysvetlil a liečba rýchlo zabrala.",
        who: "Ján K.",
      },
      {
        text: "Krásna, nová a čistá ambulancia. Vybavenie je moderné a sestrička veľmi šikovná. Konečne ambulancia na úrovni.",
        who: "Mária S.",
      },
      {
        text: "Úžasný ľudský prístup. Pán doktor si na pacienta nájde čas, vypočuje ho a naozaj sa snaží pomôcť.",
        who: "Peter L.",
      },
    ],
  },
  about: {
    eyebrow: "O ambulancii",
    title: "O ambulancii a lekárovi",
    lead: "MUDr. Pavol Trnovec, PhD. je všeobecný lekár pre dospelých a odborný zástupca ambulancie MEDICA JUR, s.r.o. vo Svätom Jure.",
    bio: [
      "Pochádza zo Žiliny a vyštudoval Jesseniovu lekársku fakultu Univerzity Komenského. Vo Svätom Jure samostatne ordinuje od jari 2019.",
      "Ambulancia kladie dôraz na prevenciu, presnú diagnostiku a individuálny prístup. Na každého pacienta si vyhradzujeme dostatok času a komunikujeme zrozumiteľne — aj v anglickom jazyku.",
    ],
    valuesTitle: "Na čom nám záleží",
    values: [
      {
        title: "Čas pre pacienta",
        text: "Objednávkový systém znižuje čakanie a dáva priestor na dôkladné vyšetrenie.",
        icon: "clock",
      },
      {
        title: "Moderné vybavenie",
        text: "POCT prístroje a EKG umožňujú výsledky priamo na mieste.",
        icon: "activity",
      },
      {
        title: "Prevencia na prvom mieste",
        text: "Zameriavame sa na včasný záchyt a dlhodobé zdravie.",
        icon: "shield-check",
      },
      {
        title: "English speaking GP",
        text: "Komunikujeme aj v anglickom jazyku pre zahraničných pacientov.",
        icon: "languages",
      },
    ],
    facilityTitle: "Naše priestory",
    facilityText:
      "Ambulancia sa nachádza v novej polyfunkčnej budove s bezbariérovým prístupom a parkovaním v tesnej blízkosti.",
    stats: {
      years: "Rokov samostatnej praxe",
      insurers: "Zmluvné poisťovne",
      languages: "Jazyky (SK · EN)",
    },
  },
  patientsPage: {
    eyebrow: "Pre pacientov",
    title: "Pre pacientov",
    lead: "Všetko potrebné pred návštevou na jednom mieste — registrácia, objednávanie, e-recepty aj užitočné dokumenty.",
    newTitle: "Stať sa pacientom",
    bookTitle: "Objednávanie a e-recepty",
    bookText:
      "Pre registrovaných pacientov funguje elektronické objednávanie liekov a vyšetrení cez portál Moji lekári. Registrácia prebieha pomocou pozvánky, ktorú vám zašle lekár na e-mail.",
    documentsTitle: "Dokumenty na stiahnutie",
    documentsNote: "Tlačivá doplníme podľa podkladov ambulancie.",
    documents: [
      "Dohoda o poskytovaní zdravotnej starostlivosti",
      "Súhlas so spracúvaním osobných údajov",
      "Vstupný dotazník pre nových pacientov",
    ],
    faqTitle: "Časté otázky",
    faq: [
      {
        q: "Prijímate nových pacientov?",
        a: "Áno, prijímame nových pacientov. Stačí vyplniť a podpísať dohodu o poskytovaní zdravotnej starostlivosti a priniesť ju do ambulancie počas ordinačných hodín.",
      },
      {
        q: "Ako si objednám e-recept?",
        a: "Registrovaní pacienti si objednávajú lieky a e-recepty cez portál Moji lekári. Prístup získate na základe pozvánky, ktorú vám zašle lekár na e-mail.",
      },
      {
        q: "Kedy prebiehajú odbery krvi?",
        a: "Odbery krvi sa realizujú v ranných hodinách. Na odber sa, prosím, objednajte vopred.",
      },
      {
        q: "S ktorými poisťovňami máte zmluvu?",
        a: "Máme zmluvu so všetkými zdravotnými poisťovňami pôsobiacimi na Slovensku — VšZP, Dôvera a Union.",
      },
    ],
  },
  footer: {
    about:
      "MUDr. Pavol Trnovec, PhD. — ambulancia všeobecného lekára pre dospelých vo Svätom Jure. Komplexná starostlivosť s dôrazom na prevenciu.",
    navTitle: "Navigácia",
    contactTitle: "Kontakt",
    legalTitle: "Právne informácie",
    rights: "Všetky práva vyhradené.",
    privacy: "Ochrana osobných údajov",
    cookies: "Cookies",
  },
  legal: {
    privacyTitle: "Ochrana osobných údajov",
    privacyUpdated: "Posledná aktualizácia",
    cookiesTitle: "Zásady používania súborov cookies",
  },
  cookies: {
    message:
      "Používame nevyhnutné cookies pre fungovanie stránky. Voliteľné analytické cookies použijeme len s vaším súhlasom.",
    accept: "Prijať všetko",
    reject: "Iba nevyhnutné",
    settingsLink: "Viac o cookies",
  },
  notFound: {
    title: "Stránka sa nenašla",
    text: "Ľutujeme, požadovaná stránka neexistuje alebo bola presunutá.",
  },
};

export type Dictionary = typeof sk;

const en: Dictionary = {
  meta: {
    localeLabel: "English",
    switchTo: "Slovensky",
    htmlLang: "en",
  },
  nav: {
    about: "Practice",
    services: "Services",
    hours: "Opening hours",
    patients: "For patients",
    contact: "Contact",
    book: "Book now",
    menu: "Menu",
    close: "Close",
  },
  common: {
    doctorRole: "General practitioner for adults",
    openNow: "Open now",
    closedNow: "Currently closed",
    weekendClosed: "Closed (weekend)",
    today: "Today",
    todayBadge: "Today",
    acute: "Acute care",
    closed: "Closed",
    address: "Address",
    phone: "Phone",
    email: "E-mail",
    callDuringHours: "Please call during opening hours.",
    book: "Book now",
    bookOnline: "Book online",
    call: "Call us",
    backHome: "Back to home",
    readMore: "Learn more",
    getDirections: "Get directions",
  },
  topbar: {
    note: "Online prescriptions & appointments via the Moji lekári portal",
  },
  hero: {
    title: "A modern general practice in Svätý Jur",
    lead: "Prevention, accurate diagnostics and treatment for adults — with modern equipment and enough time for every patient.",
    primaryCta: "Book a visit / e-prescription",
    secondaryCta: "I'm a new patient",
    badgeDoctor: "General practitioner · since 2019",
    badgeEnglish: "English speaking GP",
    photoAlt: "MUDr. Pavol Trnovec, PhD.",
  },
  facts: {
    todayLabel: "Today",
    addressLabel: "Address",
    phoneLabel: "Phone",
  },
  patients: {
    eyebrow: "Accepting new patients",
    title: "Welcome to our practice",
    text: "We handle the paperwork for you. Switching to us is quick and stress-free — we'll de-register you from your previous doctor.",
    downloadCta: "Download forms",
    callCta: "Call us",
    stepsTitle: "How to become a patient",
    steps: [
      {
        title: "Complete the agreement",
        text: "Fill in and sign the agreement on the provision of healthcare.",
      },
      {
        title: "Bring it in person",
        text: "To the practice during opening hours, or let us know by phone.",
      },
      {
        title: "Leave the rest to us",
        text: "We take care of de-registering you from your previous doctor and transferring your records.",
      },
    ],
  },
  services: {
    eyebrow: "Care",
    title: "Our services",
    subtitle: "Complete healthcare for adult patients under one roof.",
    featured: {
      title: "Prevention, diagnostics and treatment",
      text: "Comprehensive care for adults focused on early diagnosis, effective treatment and long-term health.",
    },
    items: [
      {
        title: "Blood sampling",
        text: "Fast and gentle blood draws right in the practice for accurate diagnostics.",
        icon: "droplet",
      },
      {
        title: "Vaccination",
        text: "Routine and optional vaccinations, including seasonal flu and travel medicine.",
        icon: "syringe",
      },
      {
        title: "Preventive check-ups",
        text: "Regular preventive examinations covered by public health insurance.",
        icon: "shield-check",
      },
      {
        title: "Pre-operative exams",
        text: "Complete pre-operative preparation and internal pre-surgery assessment.",
        icon: "clipboard-check",
      },
    ],
    poct: {
      title: "POCT devices — results while you wait",
      text: "Modern devices for fast laboratory results on the spot, with no waiting for an external lab.",
      tags: ["CRP test", "FOB test", "Glucose · HbA1c", "ECG", "INR / Quick"],
    },
    pageTitle: "Our services",
    pageLead:
      "We provide comprehensive general healthcare for adults — from prevention and diagnostics to treatment and long-term follow-up.",
    detailGroups: [
      {
        title: "Prevention & counselling",
        items: [
          "Preventive check-ups for adults",
          "Cardiovascular risk assessment",
          "Guidance for chronic conditions",
          "Vaccination and travel medicine",
        ],
      },
      {
        title: "Diagnostics",
        items: [
          "Blood and biological sample collection",
          "POCT tests with results while you wait (CRP, glucose, INR…)",
          "ECG examination",
          "Interpretation of lab and imaging results",
        ],
      },
      {
        title: "Treatment & follow-up",
        items: [
          "Treatment of acute illnesses",
          "Management of chronic conditions",
          "Prescriptions and e-prescriptions",
          "Pre-operative exams and certificates",
        ],
      },
    ],
  },
  hoursSection: {
    title: "Opening hours",
    note: "Blood draws take place in the morning. Please book in advance for sampling and planned exams.",
    acutePrefix: "Acute",
    pageLead:
      "Phone bookings subject to nurse availability. Acute cases are seen in the dedicated time slots and according to the patient's condition.",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  contact: {
    title: "Contact",
    eyebrow: "Where to find us",
    lead: "We are in a new multi-functional building (Kačačnice area) on the 1st floor, directly above the Vitalita pharmacy.",
    addressNote:
      "Kačačnice building, 1st floor above the Vitalita pharmacy · step-free access (lift) · parking by the building",
    emailsTitle: "E-mail contacts",
    emailDoctor: "Doctor · appointments",
    emailRecipe: "E-prescription requests",
    emailNurse: "Nurse",
    mapTitle: "Map",
    portalTitle: "Online booking",
    portalText:
      "Prescription orders, electronic consultations and booking specific time slots are handled exclusively via the Moji lekári app. Registration is by invitation sent to your e-mail by the doctor.",
    company: "Operator",
  },
  insurers: {
    label: "Contracted insurers",
  },
  reviews: {
    eyebrow: "Patient experience",
    title: "What patients say",
    disclaimer: "Sample testimonials — to be replaced with real patient feedback before launch.",
    items: [
      {
        text: "The doctor is a true professional. He examined me thoroughly, explained everything clearly and the treatment worked quickly.",
        who: "Ján K.",
      },
      {
        text: "A beautiful, new and clean practice. The equipment is modern and the nurse very skilled. Finally a practice at this level.",
        who: "Mária S.",
      },
      {
        text: "A wonderful, human approach. The doctor takes time for the patient, listens and genuinely tries to help.",
        who: "Peter L.",
      },
    ],
  },
  about: {
    eyebrow: "About the practice",
    title: "About the practice & doctor",
    lead: "MUDr. Pavol Trnovec, PhD. is a general practitioner for adults and the professional representative of the MEDICA JUR, s.r.o. practice in Svätý Jur.",
    bio: [
      "He comes from Žilina and graduated from the Jessenius Faculty of Medicine of Comenius University. He has been running his own practice in Svätý Jur since spring 2019.",
      "The practice emphasises prevention, accurate diagnostics and an individual approach. We set aside enough time for every patient and communicate clearly — including in English.",
    ],
    valuesTitle: "What we care about",
    values: [
      {
        title: "Time for the patient",
        text: "An appointment system reduces waiting and allows for a thorough examination.",
        icon: "clock",
      },
      {
        title: "Modern equipment",
        text: "POCT devices and ECG provide results right on the spot.",
        icon: "activity",
      },
      {
        title: "Prevention first",
        text: "We focus on early detection and long-term health.",
        icon: "shield-check",
      },
      {
        title: "English speaking GP",
        text: "We also communicate in English for international patients.",
        icon: "languages",
      },
    ],
    facilityTitle: "Our premises",
    facilityText:
      "The practice is located in a new multi-functional building with step-free access and parking nearby.",
    stats: {
      years: "Years in independent practice",
      insurers: "Contracted insurers",
      languages: "Languages (SK · EN)",
    },
  },
  patientsPage: {
    eyebrow: "For patients",
    title: "For patients",
    lead: "Everything you need before your visit in one place — registration, booking, e-prescriptions and useful documents.",
    newTitle: "Becoming a patient",
    bookTitle: "Booking & e-prescriptions",
    bookText:
      "Registered patients can order medication and exams electronically via the Moji lekári portal. Registration is by invitation sent to your e-mail by the doctor.",
    documentsTitle: "Documents to download",
    documentsNote: "Forms will be added based on the practice's templates.",
    documents: [
      "Healthcare provision agreement",
      "Consent to the processing of personal data",
      "Intake questionnaire for new patients",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Are you accepting new patients?",
        a: "Yes, we accept new patients. Simply complete and sign the healthcare provision agreement and bring it to the practice during opening hours.",
      },
      {
        q: "How do I order an e-prescription?",
        a: "Registered patients order medication and e-prescriptions via the Moji lekári portal. Access is granted by an invitation the doctor sends to your e-mail.",
      },
      {
        q: "When are blood draws done?",
        a: "Blood draws take place in the morning. Please book in advance for sampling.",
      },
      {
        q: "Which insurers do you have contracts with?",
        a: "We have contracts with all health insurers operating in Slovakia — VšZP, Dôvera and Union.",
      },
    ],
  },
  footer: {
    about:
      "MUDr. Pavol Trnovec, PhD. — a general practice for adults in Svätý Jur. Comprehensive care with an emphasis on prevention.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    cookies: "Cookies",
  },
  legal: {
    privacyTitle: "Privacy policy",
    privacyUpdated: "Last updated",
    cookiesTitle: "Cookie policy",
  },
  cookies: {
    message:
      "We use essential cookies to make the site work. Optional analytics cookies are used only with your consent.",
    accept: "Accept all",
    reject: "Essential only",
    settingsLink: "More about cookies",
  },
  notFound: {
    title: "Page not found",
    text: "Sorry, the requested page does not exist or has been moved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { sk, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

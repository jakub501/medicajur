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
    hours: "Hodiny",
    patients: "Pacienti",
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
    eyebrow: "Prijímame nových pacientov",
    titleLine1: "MUDr. Pavol Trnovec, PhD.",
    titleLine2Prefix: "Ambulancia všeobecného lekára ",
    titleHighlight: "vo Svätom Jure",
    lead: "Komplexná starostlivosť o dospelých — od prevencie a POCT diagnostiky na počkanie až po liečbu chronických ochorení. Objednávkový systém a dostatok času na každého pacienta.",
    insurersLabel: "Zmluvné poisťovne:",
    primaryCta: "Objednať sa",
    secondaryCta: "Som nový pacient",
    badgeDoctor: "Všeobecný lekár · samostatne od 2019",
    badgeEnglishTitle: "Anglicky hovoriaci lekár",
    badgeEnglish: "English speaking GP",
    bookingNote: "Objednávanie prebieha cez portál Moji lekári",
    photoAlt: "MUDr. Pavol Trnovec, PhD.",
  },
  facts: {
    todayLabel: "Dnes",
    acuteLabel: "Akútne dnes",
    addressLabel: "Adresa",
    phoneLabel: "Telefón",
  },
  patients: {
    eyebrow: "Prijímame nových pacientov",
    title: "Vitajte v našej ambulancii",
    text: "O administratívu sa postaráme za vás. Prechod k nám je rýchly a bez stresu — odhlásenie od predchádzajúceho lekára vybavíme my.",
    aboutCta: "O ambulancii",
    infoCta: "Informácie pre nových pacientov",
    callCta: "Zavolať",
    story:
      "Vyštudoval Jesseniovu lekársku fakultu UK, pochádza zo Žiliny a vo Svätom Jure samostatne ordinuje od jari 2019. Ku každému pacientovi pristupuje osobne — s dôrazom na čas, prevenciu a zrozumiteľné vysvetlenie diagnózy aj liečby.",
    doctorTitle: "Váš lekár",
    whyItems: [
      {
        title: "Čas pre pacienta",
        text: "Objednávkový systém znižuje čakanie a dáva priestor na dôkladné vyšetrenie.",
        icon: "clock",
      },
      {
        title: "Prevencia na prvom mieste",
        text: "Zameriavame sa na včasný záchyt ochorení a dlhodobé zdravie pacienta.",
        icon: "shield-check",
      },
      {
        title: "7+ rokov samostatnej praxe",
        text: "MUDr. Pavol Trnovec, PhD. vedie ambulanciu vo Svätom Jure od roku 2019.",
        icon: "stethoscope",
      },
    ],
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
    viewAll: "Všetky služby",
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
  trust: {
    eyebrow: "Dôvera",
    title: "Prečo si vybrať našu ambulanciu",
    subtitle: "Stabilná prax, zmluvy so všetkými poisťovňami a vybavenie, ktoré šetrí váš čas.",
    doctorLine: "MUDr. Pavol Trnovec, PhD. — všeobecný lekár pre dospelých od roku 2019",
    insurersLabel: "Zmluvné poisťovne",
    items: [
      {
        title: "7+ rokov praxe",
        text: "MUDr. Pavol Trnovec, PhD. samostatne ordinuje vo Svätom Jure od roku 2019.",
        icon: "stethoscope",
      },
      {
        title: "Všetky poisťovne",
        text: "Zmluvy so VšZP, Dôverou aj Union — bez obmedzenia výberu lekára.",
        icon: "shield-check",
      },
      {
        title: "Výsledky na počkanie",
        text: "POCT prístroje a EKG priamo v ambulancii — bez čakania na laboratórium.",
        icon: "activity",
      },
      {
        title: "SK · EN",
        text: "Komunikujeme zrozumiteľne aj v anglickom jazyku pre zahraničných pacientov.",
        icon: "languages",
      },
    ],
  },
  about: {
    eyebrow: "O ambulancii",
    title: "O ambulancii a lekárovi",
    lead: "MUDr. Pavol Trnovec, PhD. je všeobecný lekár pre dospelých a odborný zástupca ambulancie MEDICA JUR, s.r.o. vo Svätom Jure.",
    bio: [
      "MUDr. Pavol Trnovec, PhD. vyštudoval Jesseniovu lekársku fakultu Univerzity Komenského. Pochádza zo Žiliny a vo Svätom Jure vedie ambulanciu všeobecného lekára pre dospelých od jari 2019.",
      "Ambulancia stavia na prevencii, presnej diagnostike a individuálnom prístupe. Na vyšetrenie si vyhradzujeme dostatok času — výsledok vysvetlíme zrozumiteľne, aj v anglickom jazyku.",
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
        text: "Ambulancia je vybavená prístrojmi pre rýchlu diagnostiku priamo na mieste.",
        icon: "activity",
      },
      {
        title: "Prevencia na prvom mieste",
        text: "Zameriavame sa na včasný záchyt a dlhodobé zdravie.",
        icon: "shield-check",
      },
      {
        title: "Individuálny prístup",
        text: "Ku každému pacientovi pristupujeme osobne a s dostatkom času na vysvetlenie.",
        icon: "clipboard-check",
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
  faq: {
    eyebrow: "Otázky pacientov",
    title: "Časté otázky",
    subtitle: "Odpovede na to, čo pacienti najčastejšie riešia pred návštevou alebo pri prvom kontakte.",
    cta: "Viac informácií pre nových pacientov",
    items: [
      {
        q: "Ako sa objednať na vyšetrenie?",
        a: "Registrovaní pacienti sa objednávajú cez portál Moji lekári. Noví pacienti nás môžu kontaktovať telefonicky počas ordinačných hodín alebo prísť osobne s podpísanou dohodou o poskytovaní zdravotnej starostlivosti.",
      },
      {
        q: "Prijímate nových pacientov?",
        a: "Áno. Stačí vyplniť a podpísať dohodu o poskytovaní zdravotnej starostlivosti a priniesť ju do ambulancie počas ordinačných hodín. O odhlásenie od predchádzajúceho lekára sa postaráme my.",
      },
      {
        q: "Čo priniesť na prvú návštevu?",
        a: "Občiansky preukaz, preukaz zdravotného poistenia, podpísanú dohodu o poskytovaní zdravotnej starostlivosti a zoznam užívaných liekov. Ak máte zdravotnú dokumentáciu od predchádzajúceho lekára, prineste ju tiež.",
      },
      {
        q: "Ako si objednám e-recept?",
        a: "Registrovaní pacienti objednávajú lieky a e-recepty výhradne cez portál Moji lekári. Prístup získate na základe pozvánky, ktorú vám zašle lekár na e-mail po registrácii.",
      },
      {
        q: "Kedy prísť s akútnym stavom?",
        a: "Akútne stavy ošetrujeme v časoch na to vyhradených — pozrite si dnešný čas akútnej ordinačnej služby v tabuľke hodín. Pri vážnych príznakoch volajte 155.",
      },
      {
        q: "Kde zaparkujem pri ambulancii?",
        a: "Parkovanie je možné pri polyfunkčnej budove Kačačnice na Muškátovej 2. Vstup do ambulancie je na 1. poschodí nad lekárňou Vitalita, s bezbariérovým prístupom cez výťah.",
      },
      {
        q: "S ktorými poisťovňami máte zmluvu?",
        a: "Máme zmluvu so všetkými zdravotnými poisťovňami pôsobiacimi na Slovensku — VšZP, Dôvera a Union.",
      },
    ],
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
    hours: "Hours",
    patients: "Patients",
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
    eyebrow: "Accepting new patients",
    titleLine1: "MUDr. Pavol Trnovec, PhD.",
    titleLine2Prefix: "General practice ",
    titleHighlight: "in Svätý Jur",
    lead: "Comprehensive care for adults — from prevention and on-site POCT diagnostics to chronic disease management. An appointment system and enough time for every patient.",
    insurersLabel: "Contracted insurers:",
    primaryCta: "Book now",
    secondaryCta: "I'm a new patient",
    badgeDoctor: "General practitioner · since 2019",
    badgeEnglishTitle: "English speaking doctor",
    badgeEnglish: "English speaking GP",
    bookingNote: "Booking is handled via the My Doctors portal",
    photoAlt: "MUDr. Pavol Trnovec, PhD.",
  },
  facts: {
    todayLabel: "Today",
    acuteLabel: "Acute today",
    addressLabel: "Address",
    phoneLabel: "Phone",
  },
  patients: {
    eyebrow: "Accepting new patients",
    title: "Welcome to our practice",
    text: "We handle the paperwork for you. Switching to us is quick and stress-free — we'll de-register you from your previous doctor.",
    aboutCta: "About the practice",
    infoCta: "Info for new patients",
    callCta: "Call us",
    story:
      "He graduated from the Jessenius Faculty of Medicine, comes from Žilina and has been running his own practice in Svätý Jur since spring 2019. He takes a personal approach — with an emphasis on time, prevention and clear explanations of diagnosis and treatment.",
    doctorTitle: "Your doctor",
    whyItems: [
      {
        title: "Time for the patient",
        text: "An appointment system reduces waiting and allows for a thorough examination.",
        icon: "clock",
      },
      {
        title: "Prevention first",
        text: "We focus on early detection of illness and long-term patient health.",
        icon: "shield-check",
      },
      {
        title: "7+ years of independent practice",
        text: "MUDr. Pavol Trnovec, PhD. has been leading the practice in Svätý Jur since 2019.",
        icon: "stethoscope",
      },
    ],
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
    viewAll: "All services",
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
  trust: {
    eyebrow: "Trust",
    title: "Why choose our practice",
    subtitle: "Established practice, contracts with all insurers and equipment that saves your time.",
    doctorLine: "MUDr. Pavol Trnovec, PhD. — general practitioner for adults since 2019",
    insurersLabel: "Contracted insurers",
    items: [
      {
        title: "7+ years of practice",
        text: "MUDr. Pavol Trnovec, PhD. has been running his own practice in Svätý Jur since 2019.",
        icon: "stethoscope",
      },
      {
        title: "All insurers",
        text: "Contracts with VšZP, Dôvera and Union — no restriction on choosing your GP.",
        icon: "shield-check",
      },
      {
        title: "Results while you wait",
        text: "POCT devices and ECG on site — no waiting for an external laboratory.",
        icon: "activity",
      },
      {
        title: "SK · EN",
        text: "We communicate clearly in English for international patients.",
        icon: "languages",
      },
    ],
  },
  about: {
    eyebrow: "About the practice",
    title: "About the practice & doctor",
    lead: "MUDr. Pavol Trnovec, PhD. is a general practitioner for adults and the professional representative of the MEDICA JUR, s.r.o. practice in Svätý Jur.",
    bio: [
      "MUDr. Pavol Trnovec, PhD. graduated from the Jessenius Faculty of Medicine of Comenius University. He comes from Žilina and has been leading the general practice for adults in Svätý Jur since spring 2019.",
      "The practice focuses on prevention, accurate diagnostics and an individual approach. We set aside enough time for every examination — and explain results clearly, including in English.",
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
        text: "The practice is equipped for rapid on-site diagnostics.",
        icon: "activity",
      },
      {
        title: "Prevention first",
        text: "We focus on early detection and long-term health.",
        icon: "shield-check",
      },
      {
        title: "Individual approach",
        text: "We treat every patient personally, with enough time to explain everything clearly.",
        icon: "clipboard-check",
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
  faq: {
    eyebrow: "Patient questions",
    title: "Frequently asked questions",
    subtitle: "Answers to what patients most often need to know before a visit or first contact.",
    cta: "More information for new patients",
    items: [
      {
        q: "How do I book an appointment?",
        a: "Registered patients book via the Moji lekári portal. New patients can contact us by phone during opening hours or visit in person with a signed healthcare provision agreement.",
      },
      {
        q: "Are you accepting new patients?",
        a: "Yes. Simply complete and sign the healthcare provision agreement and bring it to the practice during opening hours. We take care of de-registering you from your previous doctor.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "ID card, health insurance card, signed healthcare provision agreement and a list of medications you take. If you have medical records from your previous doctor, bring those too.",
      },
      {
        q: "How do I order an e-prescription?",
        a: "Registered patients order medication and e-prescriptions exclusively via the Moji lekári portal. Access is granted by an invitation the doctor sends to your e-mail after registration.",
      },
      {
        q: "When should I come with an acute condition?",
        a: "We see acute cases during dedicated time slots — check today's acute hours in the schedule. For serious symptoms, call 155.",
      },
      {
        q: "Where can I park near the practice?",
        a: "Parking is available at the Kačačnice building at Muškátová 2. The practice is on the 1st floor above the Vitalita pharmacy, with step-free access via a lift.",
      },
      {
        q: "Which insurers do you have contracts with?",
        a: "We have contracts with all health insurers operating in Slovakia — VšZP, Dôvera and Union.",
      },
    ],
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

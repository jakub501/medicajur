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
    comingSoon: "Už čoskoro",
  },
  topbar: {
    note: "Online objednávanie liekov a vyšetrení cez portál Moji lekári",
  },
  hero: {
    eyebrow: "Prijímame nových pacientov",
    titleLine1: "MUDr. Pavol Trnovec, PhD.",
    titleLine2Prefix: "Ambulancia všeobecného lekára ",
    titleHighlight: "vo Svätom Jure",
    lead: "Prevencia, POCT diagnostika na počkanie a liečba chronických ochorení. Objednávkový systém a komunikácia aj v angličtine.",
    insurersLabel: "Zmluvné poisťovne:",
    languagesBadge: "SK · EN",
    primaryCta: "Objednať sa",
    secondaryCta: "Som nový pacient",
    badges: [
      {
        title: "Summa cum laude · PhD.",
        subtitle: "Jesseniova lekárska fakulta UK",
      },
      {
        title: "7+ rokov praxe",
        subtitle: "Samostatná ambulancia od 2019",
      },
    ],
    bookingNote: "Objednávanie prebieha cez portál Moji lekári",
    bookingNotePrefix: "Objednávanie prebieha cez portál ",
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
      "Absolvent Jesseniovej lekárskej fakulty UK v Martine (Summa cum laude) a držiteľ titulu PhD. Vo Svätom Jure vedie ambulanciu od jari 2019 — s dôrazom na čas, prevenciu a zrozumiteľnú komunikáciu, aj v anglickom jazyku.",
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
      text: "Kompletný rozsah služieb všeobecného lekára — vrátane POCT diagnostiky na počkanie, e-receptov a English speaking GP.",
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
      text: "Ambulancia je vybavená modernými diagnostickými prístrojmi — od EKG a ABI testu cez CRP, hemoglobín a iFOBT až po 24-hodinový tlakový holter.",
      tags: [
        "EKG Schiller AT 2 Plus",
        "ABI BOSO",
        "Holter BOSO TM2430",
        "CRP · Hb · iFOBT",
        "Glukomer Accu Check",
      ],
    },
    viewAll: "Všetky služby",
    pageTitle: "Naše služby",
    pageLead:
      "Komplexná všeobecná starostlivosť o dospelých — od prevencie a POCT diagnostiky na počkanie až po e-recepty, konziliárne návrhy a výkony podľa cenníka.",
    scope: {
      title: "Rozsah poskytovaných služieb",
      intro:
        "Ambulancia poskytuje kompletnú zdravotnú starostlivosť v pôsobnosti všeobecného lekára pre dospelých pacientov.",
      items: [
        { text: "Prevencia, diagnostika a liečba ochorení v pôsobnosti všeobecného lekára" },
        { text: "Vypracovanie návrhov na konziliárne vyšetrenia" },
        { text: "Preventívne vyšetrenia a očkovanie" },
        { text: "Predoperačné vyšetrenia" },
        {
          text: "Odbery krvi a diagnostika prostredníctvom POCT prístrojov — prístrojové vybavenie",
        },
        { text: "Odborné zdravotné poradenstvo a konzultácie" },
        { text: "Ambulantná starostlivosť" },
        { text: "Vydávanie potvrdení podľa platných zákonov" },
        { text: "E-recept, e-lab, e-žiadanka" },
        { text: "Objednávanie", comingSoon: true },
        { text: "English speaking GP" },
        { text: "Výkony na žiadosť pacienta podľa platného cenníka" },
      ],
    },
    equipment: {
      title: "Prístrojové vybavenie",
      intro:
        "Diagnostické prístroje priamo v ambulancii umožňujú rýchle vyšetrenie a výsledok na počkanie — bez zbytočného čakania na externé laboratórium.",
      purposeLabel: "Vyšetrenie / účel",
      deviceLabel: "Prístroj",
      items: [
        {
          purpose: "Odhalí ochorenia srdca",
          device: "EKG Schiller AT 2 Plus",
        },
        {
          purpose:
            "Jednominútový test, ktorý zistí, či nemáte zúžené tepny na dolných končatinách — môže vám zachrániť život (ABI)",
          device: "ABI BOSO ABI system -100",
        },
        {
          purpose: "Tlak krvi pod 24-hodinovou kontrolou",
          device: "Tlakový holter BOSO TM2430",
        },
        {
          purpose: "Antibiotiká iba keď ich skutočne treba",
          device: "QuickRead go Orion — kvantitatívne vyšetrenie CRP",
        },
        {
          purpose: "Odhalí chudokrvnosť — anémiu",
          device: "QuickRead go Orion — vyšetrenie hladiny hemoglobínu",
        },
        {
          purpose: "Odhalí skryté, okultné krvácanie — stolica na okultné krvácanie",
          device: "QuickRead go Orion — kvantitatívne vyšetrenie iFOBT",
        },
        {
          purpose: "Meranie sýtenia vašej krvi kyslíkom",
          device: "Pulzný oxymeter",
        },
        {
          purpose: "Vyšetrenie zvukovodu, ušného bubienka — zápal, ušný maz",
          device: "Otoskop KaWe Germany",
        },
        {
          purpose: "Orientačné vyšetrenie hladiny cukru v krvi",
          device: "Glukomer Accu Check",
        },
        { purpose: "Vyšetrenie moču" },
        { purpose: "INR", comingSoon: true },
        { purpose: "Orientačné vyšetrenie zraku, sluchu" },
      ],
    },
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
      "MUDr. Pavol Trnovec, PhD. vyštudoval Jesseniovu lekársku fakultu Univerzity Komenského v Martine s vyznamenaním Summa cum laude. Pochádza zo Žiliny a vo Svätom Jure vedie ambulanciu všeobecného lekára pre dospelých od jari 2019.",
      "Okrem klinickej praxe má bohaté skúsenosti z farmaceutického priemyslu, medzinárodného výskumu a verejného zdravotníctva. Ambulancia stavia na prevencii, presnej diagnostike a zrozumiteľnej komunikácii — aj v anglickom jazyku.",
    ],
    careerTitle: "Vzdelanie a profesionálna dráha",
    bioSections: [
      {
        title: "Vzdelanie",
        paragraphs: [
          "Študoval na Jesseniovej lekárskej fakulte Univerzity Komenského v Martine. Štúdium ukončil s vyznamenaním „Summa cum laude“.",
          "V roku 2018 ukončil treťostupňové vysokoškolské štúdium na Slovenskej zdravotníckej univerzite, fakulte verejného zdravotníctva obhajobou práce „Liek v rukách lekára: vybrané a právne aspekty kategorizačného procesu v SR“ a bol mu udelený titul Doctor Philosophiae (PhD.).",
        ],
      },
      {
        title: "Lekárska a profesionálna prax",
        paragraphs: [
          "Po skončení vysokoškolského štúdia pracoval na internom oddelení NsP Trstená ako sekundárny lekár a vo farmaceutických spoločnostiach Eli Lilly a GSK na pozíciách farmaceutického zástupcu, výskumného pracovníka, medicínskeho riaditeľa, riaditeľa pre endokrinológiu, onkológiu a ženské zdravie, korporátnych záležitostí a ako generálny riaditeľ na Slovensku, v Rakúsku a USA.",
        ],
      },
      {
        title: "Medzinárodné pôsobenie",
        paragraphs: [
          "V zahraničí pracoval 3 roky najprv ako koordinátor klinického výskumu nového inzulínu, prvého analógu ľudského inzulínu vo Viedni, Rakúsko pre krajiny: Slovenská republika, Slovinsko, Rumunsko, Bulharsko, Ruská federácia a Turecko.",
          "Neskôr pracoval v centrále spoločnosti Eli Lilly v Indianapolise, štát Indiana, USA vo výskume a marketingu v onkológii — rakovina pľúc, močového mechúra a ochoreniach centrálneho nervového systému — schizofrénia.",
        ],
      },
      {
        title: "Verejný sektor a ocenenia",
        paragraphs: [
          "Počas práce vo farmaceutickom priemysle bol vyše 5 rokov členom predsedníctva, podpredsedom či prezidentom asociácie spoločností SAFS, LAWG. Bol tiež zvolený do výboru BRITCHAM – britskej obchodnej komory.",
          "Za spoločnosti, ktoré reprezentoval, obdržal viaceré ocenenia v oblasti filantropie a dobrovoľníctva: Top firemný filantrop a VIA BONA. Spolupracoval s n.o. Plamienok a Druhý krok, n.o.",
        ],
      },
      {
        title: "Ambulancia vo Svätom Jure",
        paragraphs: [
          "Od jari 2019 vedie ambulanciu všeobecného lekára pre dospelých vo Svätom Jure. Kladie dôraz na prevenciu, presnú diagnostiku s využitím moderného prístrojového vybavenia a individuálny prístup ku každému pacientovi.",
        ],
      },
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
    comingSoon: "Coming soon",
  },
  topbar: {
    note: "Online prescriptions & appointments via the Moji lekári portal",
  },
  hero: {
    eyebrow: "Accepting new patients",
    titleLine1: "MUDr. Pavol Trnovec, PhD.",
    titleLine2Prefix: "General practice ",
    titleHighlight: "in Svätý Jur",
    lead: "Prevention, on-site POCT diagnostics and chronic disease management. An appointment system and communication in English.",
    insurersLabel: "Contracted insurers:",
    languagesBadge: "SK · EN",
    primaryCta: "Book now",
    secondaryCta: "I'm a new patient",
    badges: [
      {
        title: "Summa cum laude · PhD.",
        subtitle: "Jessenius Faculty of Medicine, UK",
      },
      {
        title: "7+ years of practice",
        subtitle: "Independent practice since 2019",
      },
    ],
    bookingNote: "Booking is handled via the My Doctors portal",
    bookingNotePrefix: "Booking is handled via the ",
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
      "Graduate of the Jessenius Faculty of Medicine in Martin (Summa cum laude) and holder of a PhD degree. He has been leading the practice in Svätý Jur since spring 2019 — with an emphasis on time, prevention and clear communication, including in English.",
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
      text: "Full scope of general practice services — including on-site POCT diagnostics, e-prescriptions and English speaking GP.",
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
      text: "The practice is equipped with modern diagnostic devices — from ECG and ABI testing to CRP, haemoglobin and iFOBT, plus 24-hour blood pressure holter monitoring.",
      tags: [
        "EKG Schiller AT 2 Plus",
        "ABI BOSO",
        "Holter BOSO TM2430",
        "CRP · Hb · iFOBT",
        "Accu Check glucose meter",
      ],
    },
    viewAll: "All services",
    pageTitle: "Our services",
    pageLead:
      "Comprehensive general care for adults — from prevention and on-site POCT diagnostics to e-prescriptions, referral proposals and fee-based services.",
    scope: {
      title: "Scope of services",
      intro:
        "The practice provides complete healthcare within the scope of a general practitioner for adult patients.",
      items: [
        { text: "Prevention, diagnostics and treatment of conditions within the scope of general practice" },
        { text: "Preparation of referral proposals for specialist examinations" },
        { text: "Preventive check-ups and vaccination" },
        { text: "Pre-operative examinations" },
        { text: "Blood sampling and diagnostics using POCT devices — on-site equipment" },
        { text: "Professional health counselling and consultations" },
        { text: "Outpatient care" },
        { text: "Issuing certificates in accordance with applicable laws" },
        { text: "E-prescription, e-lab, e-referral" },
        { text: "Online booking", comingSoon: true },
        { text: "English speaking GP" },
        { text: "Services on patient request according to the valid price list" },
      ],
    },
    equipment: {
      title: "Medical equipment",
      intro:
        "Diagnostic devices on site enable rapid testing and results while you wait — without unnecessary delays for an external laboratory.",
      purposeLabel: "Examination / purpose",
      deviceLabel: "Device",
      items: [
        {
          purpose: "Detects heart conditions",
          device: "EKG Schiller AT 2 Plus",
        },
        {
          purpose:
            "One-minute test that detects narrowed arteries in the lower limbs — it can save your life (ABI)",
          device: "ABI BOSO ABI system -100",
        },
        {
          purpose: "Blood pressure under 24-hour monitoring",
          device: "BOSO TM2430 blood pressure holter",
        },
        {
          purpose: "Antibiotics only when truly needed",
          device: "QuickRead go Orion — quantitative CRP testing",
        },
        {
          purpose: "Detects anaemia",
          device: "QuickRead go Orion — haemoglobin level testing",
        },
        {
          purpose: "Detects hidden occult bleeding — stool test",
          device: "QuickRead go Orion — quantitative iFOBT testing",
        },
        {
          purpose: "Measures blood oxygen saturation",
          device: "Pulse oximeter",
        },
        {
          purpose: "Ear canal and eardrum examination — inflammation, earwax",
          device: "KaWe Germany otoscope",
        },
        {
          purpose: "Screening blood glucose test",
          device: "Accu Check glucose meter",
        },
        { purpose: "Urine testing" },
        { purpose: "INR", comingSoon: true },
        { purpose: "Screening vision and hearing tests" },
      ],
    },
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
      "MUDr. Pavol Trnovec, PhD. graduated from the Jessenius Faculty of Medicine of Comenius University in Martin with Summa cum laude honours. He comes from Žilina and has been leading the general practice for adults in Svätý Jur since spring 2019.",
      "Beyond clinical practice, he has extensive experience in the pharmaceutical industry, international research and public health. The practice focuses on prevention, accurate diagnostics and clear communication — including in English.",
    ],
    careerTitle: "Education and professional career",
    bioSections: [
      {
        title: "Education",
        paragraphs: [
          "He studied at the Jessenius Faculty of Medicine of Comenius University in Martin, graduating with Summa cum laude honours.",
          "In 2018 he completed his doctoral studies at the Faculty of Public Health of the Slovak Medical University, defending the thesis \"The drug in the doctor's hands: selected legal aspects of the categorisation process in the Slovak Republic\", and was awarded the degree Doctor Philosophiae (PhD).",
        ],
      },
      {
        title: "Medical and professional experience",
        paragraphs: [
          "After completing his university studies, he worked at the internal medicine department of Trstená Hospital as a secondary physician and at pharmaceutical companies Eli Lilly and GSK in roles including pharmaceutical representative, research associate, medical director, director for endocrinology, oncology and women's health, corporate affairs and general manager in Slovakia, Austria and the USA.",
        ],
      },
      {
        title: "International experience",
        paragraphs: [
          "Abroad, he spent 3 years first as coordinator of clinical research into a new insulin — the first human insulin analogue — in Vienna, Austria, covering Slovakia, Slovenia, Romania, Bulgaria, the Russian Federation and Turkey.",
          "He later worked at Eli Lilly headquarters in Indianapolis, Indiana, USA in research and marketing in oncology — lung and bladder cancer — and central nervous system disorders, including schizophrenia.",
        ],
      },
      {
        title: "Public sector and awards",
        paragraphs: [
          "During his career in the pharmaceutical industry, he served for over 5 years on the board, as vice-chairman or president of the SAFS and LAWG association of companies. He was also elected to the board of BRITCHAM — the British Chamber of Commerce.",
          "On behalf of the companies he represented, he received several awards for philanthropy and volunteering: Top Corporate Philanthropist and VIA BONA. He collaborated with NGOs Plamienok and Druhý krok.",
        ],
      },
      {
        title: "Practice in Svätý Jur",
        paragraphs: [
          "Since spring 2019 he has been leading a general practice for adults in Svätý Jur, with an emphasis on prevention, accurate diagnostics using modern equipment and an individual approach to every patient.",
        ],
      },
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

import { pricingCategoriesSk } from "@/content/pricing-categories";

/* The Slovak dictionary is the canonical shape; English must match it. */

const sk = {
  meta: {
    localeLabel: "Slovensky",
    switchTo: "English",
    htmlLang: "sk",
  },
  nav: {
    about: "Ambulancia",
    aboutDoctor: "O lekárovi",
    services: "Služby",
    newPatient: "Nový pacient",
    existingPatients: "Pre pacientov",
    pricing: "Cenník",
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
    eyebrow: "Všeobecná ambulancia · Svätý Jur",
    titleLine1: "Celostná a funkčná medicína pre dlhší a zdravší život",
    titleLine2Prefix: "MedicaJur – pre ",
    titleHighlight: "Vaše zdravie",
    lead: "Medicína, ktorá nelieči len príznaky, ale rieši ich príčiny. Prevencia a moderná diagnostika pre viac rokov v plnom zdraví.",
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
    photoAlt: "Ambulancia MEDICA JUR vo Svätom Jure",
  },
  becomePatient: {
    title: "Staňte sa našim pacientom",
    steps: [
      {
        title: "Objednajte sa",
        text: "Do našej ambulancie cez e-mail alebo telefón.",
      },
      {
        title: "Príďte na vstupný rozhovor",
        text: "Porozprávame sa, spoznáte našu ambulanciu a zistím Vaše potreby.",
      },
    ],
    emailLabel: "Napísať e-mail",
    phoneLabel: "Zavolať",
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
    text: "O administratívu sa postaráme za vás. Prechod k nám je rýchly a bez stresu. Odhlásenie od predchádzajúceho lekára vybavíme my.",
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
    subtitle: "Kompletná starostlivosť o dospelých pod jednou strechou.",
    overview: {
      cards: [
        {
          title: "Prevencia, diagnostika a liečba",
          text: "Vyšetrenie, liečba a odborné poradenstvo u všeobecného lekára.",
          icon: "stethoscope",
        },
        {
          title: "Preventívne vyšetrenia a očkovanie",
          text: "Prehliadky hradené poisťovňou a očkovanie vrátane chrípky a cestovnej medicíny.",
          icon: "syringe",
        },
        {
          title: "Predoperačné vyšetrenia",
          text: "Predoperačná príprava a interné vyšetrenie pred zákrokom.",
          icon: "clipboard-check",
        },
        {
          title: "Odbery krvi a POCT diagnostika",
          text: "Odbery a rýchla diagnostika na počkanie priamo v ambulancii.",
          icon: "activity",
        },
        {
          title: "E-recept a digitálne služby",
          text: "E-recept, e-lab a e-žiadanka. Vypracovanie návrhov na konziliárne vyšetrenia.",
          icon: "pill",
        },
        {
          title: "Potvrdenia a výkony na žiadosť",
          text: "Potvrdenia a výkony na žiadosť podľa platného cenníka.",
          icon: "file-text",
          linkToPricing: true,
        },
      ],
      pricingLink: "Cenník výkonov",
    },
    poct: {
      title: "POCT prístroje — výsledky na počkanie",
      text: "Ambulancia je vybavená modernými diagnostickými prístrojmi — od EKG a ABI testu cez CRP, hemoglobín a iFOBT až po 24-hodinový tlakový holter.",
      tags: [
        "EKG Schiller AT 2 Plus",
        "ABI BOSO",
        "Holter BOSO TM2430",
        "CRP · Hb · iFOBT",
        "Glukomer Accu-Chek",
      ],
    },
    viewAll: "Podrobný výpis služieb",
    pageTitle: "Naše služby",
    pageLead:
      "Komplexná všeobecná starostlivosť o dospelých — od prevencie a POCT diagnostiky na počkanie až po e-recepty, konziliárne návrhy a výkony podľa cenníka.",
    scope: {
      title: "Rozsah poskytovaných služieb",
      groups: [
        {
          title: "Komplexná zdravotná starostlivosť",
          items: [
            {
              icon: "stethoscope",
              title: "Všeobecná ambulantná starostlivosť",
              text: "Komplexná starostlivosť v pôsobnosti všeobecného lekára — od vyšetrenia a liečby akútnych aj chronických ochorení až po odborné poradenstvo.",
            },
            {
              icon: "syringe",
              title: "Preventívne prehliadky a očkovanie",
              text: "Pravidelné preventívne prehliadky hradené poisťovňou vrátane povinných a odporúčaných očkovaní.",
            },
            {
              icon: "clipboard-check",
              title: "Predoperačné vyšetrenia",
              text: "Kompletná predoperačná príprava a interné vyšetrenie pred plánovaným operačným zákrokom.",
            },
            {
              icon: "shield-check",
              title: "Odborné poradenstvo",
              text: "Konzultácie zdravotného stavu a vypracovanie odporúčaní na vyšetrenia u lekárov – špecialistov.",
            },
          ],
        },
        {
          title: "Moderná diagnostika a odbery",
          items: [
            {
              icon: "activity",
              title: "Odbery krvi a biologického materiálu",
              text: "Odbery priamo v ambulancii a rýchla diagnostika na počkanie pomocou moderného prístrojového vybavenia.",
            },
          ],
        },
        {
          title: "Administratíva a e-Služby",
          items: [
            {
              icon: "pill",
              title: "Elektronické zdravotníctvo (e-Health)",
              text: "E-recept, e-lab a e-žiadanka — elektronická komunikácia s laboratóriami a špecialistami.",
            },
            {
              icon: "file-text",
              title: "Potvrdenia a posudky",
              text: "Vydávanie lekárskych potvrdení podľa platnej legislatívy — vodičské preukazy, zbrojné pasy, zamestnanie a ďalšie.",
            },
            {
              icon: "file-text",
              title: "Výkony na žiadosť pacienta",
              text: "Služby nehradené zo zdravotného poistenia podľa platného cenníka ambulancie.",
              linkToPricing: true,
            },
          ],
        },
        {
          title: "Komfort pre pacienta",
          items: [
            {
              icon: "clock",
              title: "Online objednávanie na termín",
              text: "Objednávka termínu prostredníctvom online portálu Moji lekári.",
            },
            {
              icon: "languages",
              title: "English speaking GP",
              text: "Komplexné vyšetrenie a komunikácia s lekárom plne v anglickom jazyku.",
            },
          ],
        },
      ],
    },
    equipment: {
      title: "Prístrojové vybavenie",
      intro:
        "Diagnostické prístroje priamo v ambulancii umožňujú rýchle vyšetrenie bez zbytočného čakania na externé laboratórium.",
      purposeLabel: "Vyšetrenie / účel",
      deviceLabel: "Prístroj",
      backToList: "Späť na prístrojové vybavenie",
      items: [
        {
          slug: "ekg-schiller-at-2-plus",
          purpose: "Odhalenie ochorení srdca (EKG)",
          device: "EKG Schiller AT 2 Plus",
          detail: {
            image: "/images/equipment/ekg-schiller-at-2-plus.png",
            imageAlt: "Elektrokardiograf Schiller AT 2 Plus",
            paragraphs: [
              "Schiller AT 2 Plus je špičkový elektrokardiograf od renomovaného švajčiarskeho výrobcu, ktorý slúži na presné zaznamenávanie elektrickej aktivity vášho srdca. Tento moderný prístroj je kľúčový pri preventívnych prehliadkach, predoperačných vyšetreniach alebo pri diagnostike ťažkostí, ako je búšenie srdca a bolesť na hrudníku.",
              "Vďaka pokročilému softvéru dokáže lekárovi poskytnúť okamžitú analýzu, ktorá pomáha včas odhaliť poruchy rytmu, nedokrvenie ciev či znaky prekonaného infarktu. Samotné vyšetrenie je pre pacienta úplne bezbolestné, bezpečné a nevyžaduje si žiadne ihly ani nepríjemné zákroky.",
              "Počas procedúry pohodlne ležíte na lôžku, zatiaľ čo vám sestrička na hrudník a končatiny priloží snímacie elektródy s vodivým gélom. Samotné meranie trvá len niekoľko sekúnd, počas ktorých integrovaná tlačiareň okamžite vygeneruje detailný výsledok priamo v ambulancii. Lekár s vami namerané hodnoty skonzultuje ihneď po ukončení testu, pričom celý proces vrátane prípravy nezaberie viac ako 10 minút.",
            ],
          },
        },
        {
          slug: "abi-boso-abi-system-100",
          purpose: "Rýchly test na zúženie tepien na dolných končatinách",
          purposeNote: "Môže zachrániť život pred infarktom či porážkou",
          device: "ABI BOSO ABI system -100",
          detail: {
            image: "/images/equipment/abi-boso-abi-system-100.png",
            imageAlt: "Manžeta systému ABI BOSO ABI system-100",
            paragraphs: [
              "ABI BOSO ABI system-100 je vysoko presný diagnostický prístroj určený na rýchle a bezbolestné meranie členkovo-ramenného indexu. Tento systém umožňuje lekárovi súčasne zmerať krvný tlak na všetkých štyroch končatinách pacienta v priebehu jedinej minúty.",
              "Hlavným cieľom tohto vyšetrenia je včasné odhalenie periférnej arteriálnej choroby, ktorá spôsobuje nebezpečné zúženie tepien na dolných končatinách. Keďže toto ochorenie úzko súvisí s celkovým kôrnatením ciev, včasná diagnostika môže pacientovi doslova zachrániť život pred infarktom alebo cievnou mozgovou príhodou.",
              "Samotný test je pre pacienta maximálne komfortný, neinvazívny a prebieha v ležiacej polohe pomocou štyroch automatických manžiet. Pokročilá technológia eliminuje chyby spôsobené kolísaním tlaku a okamžite vyhodnocuje presné výsledky, ktoré sú ihneď k dispozícii.",
              "Vyšetrenie predstavuje neoceniteľnú súčasť modernej prevencie najmä pre fajčiarov, diabetikov alebo ľudí s vysokým krvným tlakom a cholesterolom.",
            ],
          },
        },
        {
          slug: "boso-tm2430-holter",
          purpose: "24-hodinové sledovanie krvného tlaku",
          device: "Tlakový holter BOSO TM2430",
          detail: {
            image: "/images/equipment/boso-tm2430-holter.png",
            imageAlt: "Tlakový holter BOSO TM2430",
            paragraphs: [
              "Tlakový holter BOSO TM2430 je kompaktný prenosný prístroj určený na kontinuálne 24-hodinové monitorovanie krvného tlaku pacienta v jeho prirodzenom domácom prostredí. Počas celého dňa aj noci zariadenie v pravidelných intervaloch automaticky nafukuje manžetu na ramene a podrobne zaznamenáva každú nameranú hodnotu.",
              "Toto vyšetrenie je kľúčové pre odhalenie takzvanej skrytej hypertenzie alebo naopak fenoménu bieleho plášťa, kedy má pacient vysoký tlak iba v strese v lekárskej ambulancii. Lekár vďaka celodennému záznamu získa komplexný prehľad o kolísaní vášho tlaku, čo umožňuje mimoriadne presné nastavenie alebo úpravu liečby.",
              "Prístroj je navrhnutý tak, aby bol ľahký, tichý a čo najmenej obmedzoval pacienta pri bežných denných činnostiach či počas spánku. Samotné meranie prebieha úplne bezpečne a neinvazívne, pričom pacient si počas dňa vedie iba stručný denník svojich aktivít.",
              "Výsledná podrobná analýza z tohto prístroja spoľahlivo pomáha chrániť kardiovaskulárny systém pred rizikami spojenými s neliečeným vysokým tlakom.",
            ],
          },
        },
        {
          slug: "quickread-go-orion",
          purpose: "Rozlíšenie bakteriálnej a vírusovej infekcie (CRP)",
          purposeNote: "Určuje, či sú potrebné antibiotiká",
          device: "QuickRead go Orion: kvantitatívne vyšetrenie CRP",
          detail: {
            pageTitle: "QuickRead go Orion",
            pagePurpose: "POCT diagnostika z kvapky krvi",
            image: "/images/equipment/quickread-go-orion.png",
            imageAlt: "QuickRead go Orion",
            paragraphs: [
              "Prístroj QuickRead go Orion predstavuje špičkový a kompaktný diagnostický systém priamo v ambulancii, ktorý slúži na rýchle a vysoko presné meranie kľúčových zdravotných parametrov z jedinej kvapky krvi. Tento všestranný pomocník umožňuje lekárovi v priebehu niekoľkých minút vykonať kvantitatívne vyšetrenie CRP, vďaka čomu dokáže okamžite rozlíšiť bakteriálnu infekciu od vírusovej a správne rozhodnúť o nasadení antibiotík.",
              "Okrem toho zariadenie slúži na presné meranie hladiny hemoglobínu, čo pomáha včas odhaliť chudokrvnosť a rýchlo začať riešiť pretrvávajúcu únavu či slabosť pacienta. Svoju dôležitú úlohu zohráva aj v onkologickej prevencii, kde prostredníctvom vysoko citlivého iFOBT testu dokáže odhaliť voľným okom neviditeľné, skryté krvácanie v stolici.",
              "Všetky tieto analýzy prebiehajú digitálne, maximálne šetrne a s vysokou laboratórnou presnosťou priamo pred vašimi očami. Pre pacienta to znamená obrovský komfort, pretože nemusí zažívať stres z odberu krvi zo žily ani dni čakať na výsledky z externého laboratória.",
              "Vďaka okamžitej dostupnosti nameraných hodnôt môže lekár stanoviť cielenú liečbu alebo preventívne opatrenia ihneď počas vašej jedinej návštevy v ambulancii.",
            ],
          },
        },
        {
          purpose: "Diagnostika chudokrvnosti (anémie)",
          device: "QuickRead go Orion: vyšetrenie hladiny hemoglobínu",
          detailSlug: "quickread-go-orion",
        },
        {
          purpose: "Odhalenie skrytého krvácania v stolici",
          purposeNote: "Prevencia rakoviny hrubého čreva",
          device: "QuickRead go Orion: kvantitatívne vyšetrenie iFOBT",
          detailSlug: "quickread-go-orion",
        },
        {
          slug: "pulse-oximeter",
          purpose: "Meranie sýtosti krvi kyslíkom (oxygenácia)",
          device: "Pulzný oxymeter",
          detail: {
            image: "/images/equipment/pulse-oxymeter.png",
            imageAlt: "Pulzný oxymeter",
            paragraphs: [
              "Pulzný oxymeter je malý, neinvazívny medicínsky prístroj, ktorý slúži na okamžité meranie sýtosti krvi kyslíkom a súčasne aj tepovej frekvencie. Vyšetrenie prebieha veľmi jednoducho, kedy sa prístroj vo forme šetrného štipca iba zľahka nasadí na konček prsta pacienta.",
              "Zariadenie funguje na princípe prechodu svetelných lúčov cez tkanivo, takže pokožku nijako neporušuje a nespôsobuje žiadnu bolesť. Pre lekára je táto hodnota oxygenácie kriticky dôležitá pri posudzovaní funkcie pľúc a celkového stavu dýchacieho systému pacienta.",
              "Meranie sa pravidelne využíva u ľudí s respiračnými ochoreniami, pri astme, zápaloch pľúc alebo pri kontrole pacientov s chronickými ťažkosťami. Výsledok sa v priebehu niekoľkých sekúnd zobrazí na jasnom digitálnom displeji, čo umožňuje bleskovú reakciu v prípade nedostatočného okysličenia.",
              "Pacient tak získa okamžitú spätnú väzbu o stave svojho dýchania bez potreby akéhokoľvek odberu krvi.",
            ],
          },
        },
        {
          slug: "otoscope-kawe",
          purpose: "Vyšetrenie zvukovodu a ušného bubienka",
          purposeNote: "Odhalenie zápalu alebo ušného mazu",
          device: "Otoskop KaWe Germany",
          detail: {
            image: "/images/equipment/otoscope-kawe.png",
            imageAlt: "Otoskop KaWe Germany",
            paragraphs: [
              "Otoskop od renomovaného nemeckého výrobcu KaWe je profesionálny optický prístroj určený na detailné vyšetrenie vonkajšieho zvukovodu a ušného bubienka. Tento prístroj kombinuje intenzívne svetlo s integrovanou zväčšovacou lupou, čo lekárovi umožňuje dokonale vidieť anatomické štruktúry vo vnútri ucha.",
              "Vyšetrenie je kľúčové pri diagnostike bolestivých zápalov zvukovodu, stredného ucha alebo pri hľadaní mechanických prekážok. Lekár dokáže pomocou neho rýchlo zistiť, či je príčinou zhoršeného sluchu alebo tlaku v uchu nahromadený ušný maz.",
              "Samotný zákrok je pre pacienta úplne bezbolestný, bezpečný a lekár pri ňom používa jednorazové, hygienické ušné lieviky. Počas prehliadky pacient iba pokojne sedí s mierne naklonenou hlavou, zatiaľ čo lekár jemne zavedie hrot prístroja do ucha.",
              "Celý proces trvá sotva minútu a poskytuje okamžitý obraz o stave ucha, na základe ktorého sa hneď určí správna liečba.",
            ],
          },
        },
        {
          slug: "accu-chek",
          purpose: "Rýchle meranie hladiny cukru v krvi",
          device: "Glukomer Accu-Chek",
          detail: {
            image: "/images/equipment/accu-chek.png",
            imageAlt: "Glukomer Accu-Chek",
            paragraphs: [
              "Glukomer Accu-Chek je vysoko spoľahlivý vreckový prístroj určený na rýchle a presné meranie hladiny cukru v krvi priamo v ambulancii. Toto orientačné vyšetrenie glykémie je dôležitou súčasťou každej preventívnej prehliadky a slúži na včasný záchyt začínajúcej cukrovky.",
              "Prístroj zohráva nezastupiteľnú úlohu aj pri pravidelnej kontrole pacientov, ktorí sa už na diabetes liečia a potrebujú poznať aktuálny stav. Celé meranie je otázkou niekoľkých sekúnd a vyžaduje si iba nepatrnú mikrokvapku krvi získanú šetrným vpichom do bruška prsta.",
              "Moderná technológia prístroja zaručuje minimálnu bolestivosť pri odbere a zaisťuje vysokú presnosť merania porovnateľnú s veľkými laboratóriami. Výsledná hodnota sa okamžite zobrazí na digitálnom displeji, takže lekár môže s pacientom hneď skonzultovať stravovacie návyky alebo upraviť liečbu.",
              "Vďaka tomuto prístroju má pacient okamžitý prehľad o svojom metabolizme sacharidov bez nutnosti zdĺhavého čakania.",
            ],
          },
        },
        {
          slug: "laura-smart",
          purpose: "Vyšetrenie moču",
          purposeNote: "Odhalenie infekcií močových ciest a ochorení obličiek",
          device: "Močový analyzátor Laura Smart",
          detail: {
            image: "/images/equipment/laura-smart.png",
            imageAlt: "Močový analyzátor Laura Smart",
            paragraphs: [
              "Močový analyzátor Laura Smart je moderný stolný prístroj, ktorý v ambulancii zabezpečuje objektívne a vysoko presné vyšetrenie vzorky moču. Toto zariadenie nahrádza staršie vizuálne hodnotenie diagnostických prúžkov a eliminuje akúkoľvek subjektívnu chybu pri čítaní výsledkov.",
              "Prístroj slúži na rýchle odhalenie infekcií močových ciest, začínajúcich ochorení obličiek alebo prítomnosti nežiaducej krvi a bielkovín v moči. Pomocou pokročilej optickej technológie dokáže v priebehu jednej minúty presne zanalyzovať dôležité chemické parametre odovzdanej vzorky.",
              "Pre pacienta vyšetrenie nepredstavuje žiadnu záťaž, stačí iba poskytnúť vzorku moču priamo v priestoroch ambulancie. Výsledky sú vytlačené na papierovom lístku takmer okamžite, čo lekárovi umožňuje nasadiť cielenú liečbu, napríklad antibiotiká pri zápale, bez odkladu.",
              "Tento sofistikovaný skríning výrazne zvyšuje štandard preventívnej starostlivosti a urýchľuje diagnostický proces.",
            ],
          },
        },
        {
          slug: "coaguchek-pro-ii",
          purpose: "INR",
          purposeNote: "Rýchla kontrola zrážanlivosti krvi z prsta pre bezpečnú liečbu",
          device: "CoaguChek Pro II",
          detail: {
            image: "/images/equipment/coaguchek-pro-ii.png",
            imageAlt: "CoaguChek Pro II",
            paragraphs: [
              "CoaguChek Pro II je špičkový profesionálny systém určený na rýchlu a vysoko presnú kontrolu zrážanlivosti krvi prostredníctvom merania hodnôt INR. Tento prístroj je absolútne kľúčový pre pacientov, ktorí dlhodobo užívajú lieky na riedenie krvi a potrebujú pravidelnú kontrolu bezpečnosti liečby.",
              "Vďaka tejto technológii už pacient nemusí podstupovať nepríjemný odber krvi zo žily na ruke a čakať na výsledky do druhého dňa. Na analýzu totiž stačí jediná kvapka krvi získaná jemným a takmer bezbolestným pichnutím do bruška prsta pacienta.",
              "Prístroj spracuje vzorku pomocou špeciálneho testovacieho prúžku a presný výsledok zobrazí na displeji už do jednej minúty. Lekár tak môže priamo na mieste overiť, či nehrozí riziko krvácania alebo naopak vzniku nebezpečných krvných zrazenín.",
              "Okamžitá informácia umožňuje okamžite a bezpečne upraviť dávkovanie liekov, čo pacientovi prináša obrovský komfort a maximálne bezpečie.",
            ],
          },
        },
        {
          slug: "vision-hearing-screening",
          purpose: "Orientačné vyšetrenie zraku a sluchu",
          purposeNote: "Základný skríning pre preventívne prehliadky a vodičské preukazy",
          device: "Snellenova zraková tabuľa a skríningový audiometer",
          detail: {
            pageTitle: "Snellenova zraková tabuľa a skríningový audiometer",
            images: [
              {
                src: "/images/equipment/snellen-chart.png",
                alt: "Snellenova zraková tabuľa",
              },
              {
                src: "/images/equipment/screening-audiometer.png",
                alt: "Skríningový audiometer",
              },
            ],
            paragraphs: [
              "Kombinácia Snellenovej zrakovej tabule a skríningového audiometra predstavuje kompletné vybavenie pre základné orientačné vyšetrenie zraku a sluchu pacienta. Snellenova tabuľa so znakmi rôznych veľkostí slúži na rýchle overenie ostrosti zraku a odhalenie prípadnej potreby dioptrií či korekcie.",
              "Skríningový audiometer zasa prostredníctvom slúchadiel testuje schopnosť pacienta správne vnímať zvuky a tóny o rôznych frekvenciách a hlasitostiach. Tieto vyšetrenia sú povinnou a dôležitou súčasťou preventívnych prehliadok a posúdenia zdravotnej spôsobilosti, napríklad na vodičský preukaz.",
              "Celý proces prebieha v pokoji, je úplne neinvazívny, bezbolestný a pre pacienta nenáročný. Lekár dokáže vďaka týmto pomôckam včas zachytiť prirodzené oslabovanie zmyslov, ktoré prichádza s vekom alebo v dôsledku hlučného prostredia.",
              "Výsledky sú známe ihneď po vykonaní testov a v prípade potreby lekár pacientovi odporučí detailnejšie vyšetrenie u očného či krčného špecialistu.",
            ],
          },
        },
      ],
    },
  },
  pricing: {
    eyebrow: "Cenník",
    pageTitle: "Cenník výkonov",
    pageLeadTitle: "Služby nad rámec zdravotného poistenia",
    pageLead:
      "Všetky bežné liečebné a diagnostické úkony indikované lekárom sú pre našich poistených pacientov bezplatné. Spoplatnené sú len administratívne služby a vyšetrenia realizované na osobnú žiadosť pacienta (samoplatcu).",
    priceUnavailable: "podľa cenníka",
    categories: pricingCategoriesSk.map((category) => ({
      title: category.title,
      items: category.items.map((item) => ({ name: item.name, price: item.price })),
    })),
  },
  existingPatients: {
    title: "Registrovaní pacienti",
    bookTitle: "Objednanie termínu",
    bookText:
      "Termín u nás dohodneme výhradne e-mailom alebo telefonicky — ozvite sa a nájdeme čas, ktorý vám vyhovuje.",
  },
  erecept: {
    eyebrow: "Recepty a lieky",
    title: "Ako si vyžiadať e-recept",
    subtitle: "Recept na chronické lieky vybavíte na diaľku.",
    steps: [
      {
        title: "Cez aplikáciu Moji lekári",
        text: "Najrýchlejšie. Liek si vyžiadate priamo v aplikácii.",
      },
      {
        title: "E-mailom",
        text: "Napíšte meno, dátum narodenia a liek. Vystavíme ho elektronicky.",
      },
      {
        title: "Telefonicky",
        text: "Zavolajte počas ordinačných hodín — podľa dostupnosti sestier.",
      },
    ],
    note: "E-recept príde elektronicky do ktorejkoľvek lekárne. Pri výbere stačí nadiktovať rodné číslo. Lieky predpisujeme registrovaným pacientom.",
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
    title: "Prečo si vybrať našu ambulanciu",
    quote: "Nejde mi len o to, aby ste žili dlhšie, ale aby ste tie roky prežili v plnom zdraví.",
    quoteRole: "MEDICA JUR · Svätý Jur",
    items: [
      {
        title: "Celostný prístup",
        text: "Riešime príčiny, nie iba symptómy",
        icon: "stethoscope",
      },
      {
        title: "Moderná diagnostika",
        text: "Meriame to, čo bežná prehliadka nezachytí",
        icon: "activity",
      },
      {
        title: "Prevencia civilizačných ochorení",
        text: "Kardiovaskulárne, metabolické, neurodegeneratívne",
        icon: "shield-check",
      },
    ],
    examTitle: "Čo o Vás zistíme pri vstupnom vyšetrení",
    examLead: "Za jednu návštevu získate komplexný obraz o svojom zdraví — na počkanie.",
    exams: [
      { name: "InBody 970", measure: "Zloženie tela — svaly, tuk aj voda" },
      { name: "MaxGrip", measure: "Sila stisku ruky a svalová kondícia" },
      { name: "MaxPulse", measure: "Pulzová vlna a pružnosť ciev" },
      { name: "ABI", measure: "Členkovo-ramenný index a záchyt aterosklerózy" },
      { name: "Krvný obraz a biochémia", measure: "Kompletný laboratórny profil" },
    ],
  },
  aboutUs: {
    eyebrow: "O nás",
    title: "Ambulancia pre celý Váš život",
    lead: "V MEDICA JUR sprevádzame pacientov každou etapou dospelého života — od mladých dospelých až po seniorov. Ťažiskom je prevencia, ktorá rozhoduje o tom, koľko rokov prežijete v plnej sile.",
    pillars: [
      {
        title: "Mladým naplno využiť potenciál",
        text: "Budujeme pevné základy zdravia, aby mladí dospelí žili s energiou a naplnili svoj potenciál.",
      },
      {
        title: "Seniorom život v najlepšom zdraví",
        text: "Pomáhame seniorom zostať aktívni, sebestační a prežiť roky navyše v čo najlepšom zdraví.",
      },
      {
        title: "Prevencia srdca a pohybu",
        text: "Zameriavame sa na kardiovaskulárnu a muskuloskeletálnu prevenciu — dva piliere dlhého a kvalitného života.",
      },
    ],
    photos: [
      { label: "Ordinácia" },
      { label: "Čakáreň" },
      { label: "Recepcia" },
    ],
  },
  about: {
    eyebrow: "O lekárovi",
    title: "MUDr. Pavol Trnovec, PhD.",
    lead: "Všeobecný lekár pre dospelých vo Svätom Jure",
    profileCards: [
      {
        title: "Vzdelanie a kvalifikácia",
        qualifications: [
          {
            label: "MUDr.",
            text: "Štúdium na Jesseniovej lekárskej fakulte UK v Martine ukončil s najvyšším vyznamenaním „Summa cum laude“.",
          },
          {
            label: "PhD.",
            text: "V roku 2018 úspešne obhájil doktorandskú prácu na Fakulte verejného zdravotníctva SZU so zameraním na právne aspekty kategorizácie liekov na Slovensku.",
          },
          {
            label: "Atestácia",
            text: "V rovnakom roku úspešne zložil špecializačnú skúšku z odboru všeobecné lekárstvo pre dospelých a vrátil sa k priamej klinickej praxi.",
          },
        ],
      },
      {
        title: "Profesionálna a medicínska prax",
        paragraphs: [
          "Svoje prvé klinické skúsenosti získal na záchrannej službe, oddelení ARO a neskôr ako sekundárny lekár na internom oddelení v NsP Trstená.",
          "Následne pôsobil viac ako dve desaťročia na najvyšších pozíciách vo farmaceutickom priemysle (Eli Lilly, GSK). Viedol klinický výskum nového inzulínu vo Viedni a neskôr pracoval priamo v centrále v Indianapolise (USA), kde zodpovedal za globálne stratégie pre nové liečivá v oblasti onkológie a neurológie. Po rokoch v biznise sa z vlastného presvedčenia rozhodol vrátiť k tomu, čo ho napĺňa najviac – k priamej práci s pacientom v ambulancii.",
        ],
      },
      {
        title: "Filozofia liečby a prístup k pacientovi",
        paragraphs: [
          "Znalosť farmaceutického prostredia z najvyšších poschodí mu dáva jedinečný pohľad na súčasnú medicínu. Vo svojej ambulancii bojuje proti trendu nadmerného predpisovania liekov, ktoré pacientom často neprinášajú adekvátnu hodnotu. Zakladá si na tom, aby pacient dostal len tú liečbu, ktorú skutočne potrebuje a ktorej prínos je vedecky podložený. Medicínu vníma nielen cez laboratórne výsledky, ale aj cez dôležitosť ľudského rozhovoru, vzájomnej dôvery a úcty v komunite.",
        ],
      },
      {
        title: "Ocenenia, etika a filantropia",
        paragraphs: [
          "Počas svojho manažérskeho pôsobenia aktívne presadzoval etický prístup v podnikaní. Zastával funkciu šéfa Slovenskej asociácie farmaceutických spoločností (SAFS) a bol členom výboru Britskej obchodnej komory. Spoločnosti pod jeho vedením získali prestížne ocenenia Top firemný filantrop a Via Bona. Dlhodobo a aktívne spolupracoval s neziskovými organizáciami Plamienok a Druhý krok, ktoré pomáhajú deťom a ľuďom v ťažkých životných situáciách.",
        ],
      },
    ],
    facilityTitle: "Naše priestory",
    facilityText:
      "Ambulancia sa nachádza v novej polyfunkčnej budove s bezbariérovým prístupom a parkovaním v tesnej blízkosti.",
    highlights: [
      { icon: "stethoscope", text: "Všeobecný lekár pre dospelých" },
      { icon: "globe", text: "Titul PhD. a medzinárodná prax z USA a Rakúska" },
      { icon: "pill", text: "Cielená liečba bez zbytočných liekov" },
      { icon: "languages", text: "English-speaking GP" },
    ],
  },
  aboutBanner: {
    eyebrow: "O lekárovi",
    title: "MUDr. Pavol Trnovec, PhD.",
    subtitle: "Všeobecný lekár pre dospelých",
    text: "Lekár, ktorý vymenil úspešnú kariéru vo vrcholovom manažmente medzinárodných farmaceutických spoločností za priamu pomoc pacientom. Svoje dlhoročné skúsenosti z klinického výskumu v USA a Rakúsku dnes pretavuje do poctivej medicíny vo vlastnej ambulancii. Jeho prioritou je presná diagnostika, otvorená komunikácia a racionálna liečba, pri ktorej je na prvom mieste človek, nie zbytočné množstvo liekov.",
    highlights: [
      { icon: "stethoscope", text: "Všeobecný lekár pre dospelých" },
      { icon: "globe", text: "Titul PhD. a medzinárodná prax z USA a Rakúska" },
      { icon: "pill", text: "Cielená liečba bez zbytočných liekov" },
      { icon: "languages", text: "English-speaking GP" },
    ],
    cta: "Viac o lekárovi",
  },
  reviews: {
    eyebrow: "Recenzie pacientov",
    title: "Čo hovoria naši pacienti",
    subtitle: "Skutočné hodnotenia od našich pacientov.",
    subtitleWithStats: "{rating} · {count} na Google Maps",
    googleBadge: "Google Maps",
    googleRatingHint: "Overené hodnotenia pacientov",
    googleCta: "Všetky recenzie na Google Maps",
    googleCtaNote: "Prečítajte si aj ďalšie hodnotenia priamo v profile ambulancie.",
    items: [
      {
        name: "Jozef P.",
        meta: "",
        text: "U pána doktora Trnovca som zažil šok – 21. storočie v medicíne a v prístupe k pacientovi! Podrobné vstupné testy s výkladom, odporúčania, ochota pomôcť a nenútiť okamžite nejaké medikamenty či pilulky. Bonus je skutočne veľmi príjemné prostredie ambulancie. Odporúčam!",
      },
      {
        name: "Katarína K.",
        meta: "",
        text: "Všetko pekne vysvetlí a konečne som mala pocit, že sa niekto zaujíma o môj zdravotný stav. Podľa mňa je veľmi dôležité zaujímať sa o svoje zdravie skôr, než dôjde k nejakej chorobe. Presne dnes som našla lekára, ktorý sa zaujíma aj o zdravého pacienta a nie len vypisuje lieky, keď je už neskoro. Ďakujem!",
      },
      {
        name: "Dominika K.",
        meta: "",
        text: "Empatický, priamy, profesionálny prístup k pacientovi. Po dlhej dobe preventívka, akú si zaslúži každý pacient na SR. Nemám čo vytknúť, odporúčam. Aj s tým ročným poplatkom sa určite oplatí mať lekára, ktorý vás nevyšetrí medzi dverami, ale skutočne vypočuje a vyšetrí.",
      },
      {
        name: "Adam V.",
        meta: "",
        text: "Top doctor! Professional approach and excellent communication.",
      },
    ],
  },
  faq: {
    eyebrow: "Otázky pacientov",
    title: "Časté otázky",
    subtitle: "Odpovede na to, čo pacienti najčastejšie riešia pred návštevou alebo pri prvom kontakte.",
    cta: "Viac informácií pre nových pacientov",
    items: [
      {
        q: "Prijímate nových pacientov?",
        a: "Áno, aktuálne prijímame nových pacientov. Pre registráciu stačí vyplniť a podpísať Dohodu o poskytovaní zdravotnej starostlivosti a priniesť ju k nám do ambulancie alebo vám ju vydáme priamo v ambulancii. O kompletné odhlásenie od vášho predchádzajúceho všeobecného lekára a prenos dokumentácie sa kompletne postaráme my.",
      },
      {
        q: "Ako sa môžem objednať na vyšetrenie?",
        a: "Registrovaní pacienti: Na presný čas sa pohodlne objednávate online prostredníctvom pacientskeho portálu Moji lekári.\n\nNoví (neregistrovaní) pacienti: Kontaktujte nás, prosím, telefonicky, prostredníctvom e-mailu počas ordinačných hodín alebo nás navštívte osobne priamo v ambulancii.",
      },
      {
        q: "Ako si môžem požiadať o e-recept na lieky?",
        a: "Registrovaní pacienti si predpis dlhodobo užívaných liekov vyžadujú výhradne elektronicky cez portál Moji lekári. Tento systém zrýchľuje vybavovanie a necháva lekárovi viac času na pacientov v ambulancii. Prístup do portálu získate automaticky formou e-mailovej pozvánky po vašej registrácii u nás.",
      },
      {
        q: "Čo si mám priniesť na prvú návštevu?",
        a: "Prineste si občiansky preukaz, preukaz zdravotného poistenia a zoznam všetkých aktuálne užívaných liekov (vrátane voľnopredajných).\n\nAk máte k dispozícii papierovú zdravotnú dokumentáciu alebo posledné lekárske správy od špecialistov, vezmite ich so sebou.\n\nOdporúčame taktiež priniesť podpísanú dohodu o registrácii; v prípade potreby ju možno spísať rovno v ambulancii.",
      },
      {
        q: "Ako postupovať v prípade akútneho ochorenia?",
        a: "Akútne stavy (napr. náhle vysoké horúčky, silné bolesti, akútne infekcie) ošetrujeme bez objednania vo vyhradených hodinách na začiatku ordinačnej doby – presný čas nájdete v tabuľke ordinačných hodín.\n\nV prípade náhleho ohrozenia života (podozrenie na infarkt, cievnu príhodu, ťažká dýchavičnosť) nečakajte a okamžite volajte záchrannú službu na čísle 155 alebo 112.",
      },
      {
        q: "S ktorými zdravotnými poisťovňami máte zmluvu?",
        a: "Sme zmluvným partnerom všetkých zdravotných poisťovní na Slovensku. Poistenci VšZP, Dôvera aj Union majú u nás štandardnú zdravotnú starostlivosť a preventívne prehliadky plne hradené.",
      },
      {
        q: "Platí sa u vás za vyšetrenia na moderných prístrojoch?",
        a: "Ak máte zdravotné ťažkosti a vyšetrenie indikuje lekár, neplatíte nič. Všetky diagnostické úkony potrebné na určenie správnej liečby sú pre našich kapitovaných pacientov plne hradené z verejného zdravotného poistenia.\n\nNaším štandardom je však poskytovať nadštandardnú preventívnu starostlivosť a maximálny komfort, čo si vyžaduje investície do špičkových technológií a personálneho zabezpečenia. Preto poskytujeme ročné predplatné balíky služieb, vďaka ktorým dokážeme zabezpečiť hĺbkovú prevenciu a moderný manažment zdravia na najvyššej úrovni:\n\n• Prehľadný klientsky servis: Súčasťou ročného predplatného sú nezdravotnícke služby ako recepcia, call centrum, komfortné SMS a e-mailové notifikácie či plný prístup do pacientskeho portálu Moji lekári na 12 mesiacov.\n\n• Prémiová prevencia a Health Coaching: V rámci predplateného balíka (programy ZDRAVIE za 50 € alebo ZDRAVIE+ za 100 €) získavate pravidelnú preventívnu diagnostiku nad rámec bežného poistenia. Tá zahŕňa detailnú analýzu zloženia tela (prístrojmi TANITA alebo InBODY 970), meranie priechodnosti tepien (ABI), analýzu cievneho a metabolického veku (Maxpulse, MESI EKG) a odborné zdravotné poradenstvo (health coaching).\n\nSpoplatnené sú len vyšetrenia vykonané výhradne na vašu vlastnú žiadosť mimo týchto balíkov (napr. zo zvedavosti) alebo úkony pre potreby zamestnávateľa a administratívy podľa platného cenníka.",
      },
      {
        q: "Ako sa k vám dostanem a kde môžem zaparkovať?",
        a: "Ambulancia sa nachádza v polyfunkčnej budove Kačačnice na Muškátovej ulici 2 vo Svätom Jure. Pohodlne zaparkovať môžete priamo pri budove. Vstup do ambulancie nájdete na 1. poschodí (priamo nad lekárňou Vitalita) a prístup je plne bezbariérový vďaka dostupnému výťahu.",
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
        a: "Áno, aktuálne prijímame nových pacientov. Pre registráciu stačí vyplniť a podpísať Dohodu o poskytovaní zdravotnej starostlivosti a priniesť ju k nám do ambulancie alebo vám ju vydáme priamo v ambulancii. O kompletné odhlásenie od vášho predchádzajúceho všeobecného lekára a prenos dokumentácie sa kompletne postaráme my.",
      },
      {
        q: "Ako sa môžem objednať na vyšetrenie?",
        a: "Registrovaní pacienti: Na presný čas sa pohodlne objednávate online prostredníctvom pacientskeho portálu Moji lekári.\n\nNoví (neregistrovaní) pacienti: Kontaktujte nás, prosím, telefonicky, prostredníctvom e-mailu počas ordinačných hodín alebo nás navštívte osobne priamo v ambulancii.",
      },
      {
        q: "Ako si môžem požiadať o e-recept na lieky?",
        a: "Registrovaní pacienti si predpis dlhodobo užívaných liekov vyžadujú výhradne elektronicky cez portál Moji lekári. Tento systém zrýchľuje vybavovanie a necháva lekárovi viac času na pacientov v ambulancii. Prístup do portálu získate automaticky formou e-mailovej pozvánky po vašej registrácii u nás.",
      },
      {
        q: "Čo si mám priniesť na prvú návštevu?",
        a: "Prineste si občiansky preukaz, preukaz zdravotného poistenia a zoznam všetkých aktuálne užívaných liekov (vrátane voľnopredajných).\n\nAk máte k dispozícii papierovú zdravotnú dokumentáciu alebo posledné lekárske správy od špecialistov, vezmite ich so sebou.\n\nOdporúčame taktiež priniesť podpísanú dohodu o registrácii; v prípade potreby ju možno spísať rovno v ambulancii.",
      },
      {
        q: "Ako postupovať v prípade akútneho ochorenia?",
        a: "Akútne stavy (napr. náhle vysoké horúčky, silné bolesti, akútne infekcie) ošetrujeme bez objednania vo vyhradených hodinách na začiatku ordinačnej doby – presný čas nájdete v tabuľke ordinačných hodín.\n\nV prípade náhleho ohrozenia života (podozrenie na infarkt, cievnu príhodu, ťažká dýchavičnosť) nečakajte a okamžite volajte záchrannú službu na čísle 155 alebo 112.",
      },
      {
        q: "S ktorými zdravotnými poisťovňami máte zmluvu?",
        a: "Sme zmluvným partnerom všetkých zdravotných poisťovní na Slovensku. Poistenci VšZP, Dôvera aj Union majú u nás štandardnú zdravotnú starostlivosť a preventívne prehliadky plne hradené.",
      },
      {
        q: "Platí sa u vás za vyšetrenia na moderných prístrojoch?",
        a: "Ak máte zdravotné ťažkosti a vyšetrenie indikuje lekár, neplatíte nič. Všetky diagnostické úkony potrebné na určenie správnej liečby sú pre našich kapitovaných pacientov plne hradené z verejného zdravotného poistenia.\n\nNaším štandardom je však poskytovať nadštandardnú preventívnu starostlivosť a maximálny komfort, čo si vyžaduje investície do špičkových technológií a personálneho zabezpečenia. Preto poskytujeme ročné predplatné balíky služieb, vďaka ktorým dokážeme zabezpečiť hĺbkovú prevenciu a moderný manažment zdravia na najvyššej úrovni:\n\n• Prehľadný klientsky servis: Súčasťou ročného predplatného sú nezdravotnícke služby ako recepcia, call centrum, komfortné SMS a e-mailové notifikácie či plný prístup do pacientskeho portálu Moji lekári na 12 mesiacov.\n\n• Prémiová prevencia a Health Coaching: V rámci predplateného balíka (programy ZDRAVIE za 50 € alebo ZDRAVIE+ za 100 €) získavate pravidelnú preventívnu diagnostiku nad rámec bežného poistenia. Tá zahŕňa detailnú analýzu zloženia tela (prístrojmi TANITA alebo InBODY 970), meranie priechodnosti tepien (ABI), analýzu cievneho a metabolického veku (Maxpulse, MESI EKG) a odborné zdravotné poradenstvo (health coaching).\n\nSpoplatnené sú len vyšetrenia vykonané výhradne na vašu vlastnú žiadosť mimo týchto balíkov (napr. zo zvedavosti) alebo úkony pre potreby zamestnávateľa a administratívy podľa platného cenníka.",
      },
      {
        q: "Ako sa k vám dostanem a kde môžem zaparkovať?",
        a: "Ambulancia sa nachádza v polyfunkčnej budove Kačačnice na Muškátovej ulici 2 vo Svätom Jure. Pohodlne zaparkovať môžete priamo pri budove. Vstup do ambulancie nájdete na 1. poschodí (priamo nad lekárňou Vitalita) a prístup je plne bezbariérový vďaka dostupnému výťahu.",
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
export { sk };

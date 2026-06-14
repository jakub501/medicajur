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
    overview: {
      cards: [
        {
          title: "Prevencia, diagnostika a liečba",
          text: "Komplexná ambulantná starostlivosť v pôsobnosti všeobecného lekára . Od vyšetrenia a liečby až po odborné zdravotné poradenstvo.",
          icon: "stethoscope",
        },
        {
          title: "Preventívne vyšetrenia a očkovanie",
          text: "Pravidelné preventívne prehliadky hradené poisťovňou aj očkovanie vrátane sezónnej chrípky a cestovnej medicíny.",
          icon: "syringe",
        },
        {
          title: "Predoperačné vyšetrenia",
          text: "Kompletná predoperačná príprava a interné vyšetrenie pred plánovaným operačným zákrokom.",
          icon: "clipboard-check",
        },
        {
          title: "Odbery krvi a POCT diagnostika",
          text: "Odbery priamo v ambulancii a rýchla diagnostika na počkanie pomocou moderného prístrojového vybavenia.",
          icon: "activity",
        },
        {
          title: "E-recept a digitálne služby",
          text: "E-recept, e-lab a e-žiadanka. Vypracovanie návrhov na konziliárne vyšetrenia.",
          icon: "pill",
        },
        {
          title: "Potvrdenia a výkony na žiadosť",
          text: "Vydávanie potvrdení podľa platných zákonov. Výkony na žiadosť pacienta podľa platného cenníka.",
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
        "Glukomer Accu Check",
      ],
    },
    viewAll: "Podrobný výpis služieb",
    pageTitle: "Naše služby",
    pageLead:
      "Komplexná všeobecná starostlivosť o dospelých — od prevencie a POCT diagnostiky na počkanie až po e-recepty, konziliárne návrhy a výkony podľa cenníka.",
    scope: {
      title: "Rozsah poskytovaných služieb",
      intro:
        "Ambulancia poskytuje kompletnú zdravotnú starostlivosť v pôsobnosti všeobecného lekára pre dospelých pacientov.",
      groups: [
        {
          title: "Komplexná zdravotná starostlivosť",
          items: [
            {
              title: "Všeobecná ambulantná starostlivosť",
              text: "Prevencia, diagnostika a liečba akútnych aj chronických ochorení dospelých.",
            },
            {
              title: "Preventívne prehliadky a očkovanie",
              text: "Pravidelná prevencia a povinné či odporúčané očkovania.",
            },
            {
              title: "Predoperačné vyšetrenia",
              text: "Kompletná interná príprava pred plánovanými lekárskymi zákrokmi.",
            },
            {
              title: "Odborné poradenstvo",
              text: "Konzultácie zdravotného stavu a vypracovanie odporúčaní na vyšetrenia k lekárom – špecialistom.",
            },
          ],
        },
        {
          title: "Moderná diagnostika a odbery",
          items: [
            {
              title: "Odbery krvi a biologického materiálu",
              text: "Rýchla laboratórna diagnostika priamo v ambulancii (výsledky z prístrojov už do niekoľkých minút).",
            },
          ],
        },
        {
          title: "Administratíva a e-Služby",
          items: [
            {
              title: "Elektronické zdravotníctvo (e-Health)",
              text: "Vystavovanie e-receptov, elektronických žiadaniek a spracovanie e-laboratórnych výsledkov.",
            },
            {
              title: "Potvrdenia a posudky",
              text: "Vydávanie lekárskych potvrdení v súlade s platnou legislatívou (vodičské preukazy, zbrojné pasy, zamestnanie a pod.).",
            },
            {
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
              title: "Online objednávanie na termín",
              text: "Prostredníctvom online portálu Moji lekári",
            },
            {
              title: "English speaking GP",
              text: "Comprehensive medical examinations and consultations available fully in English.",
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
          device: "Glukomer Accu Check",
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
    pageLead:
      "Výkony nehradené z verejného zdravotného poistenia — poskytujeme ich na žiadosť pacienta podľa platného cenníka ambulancie.",
    note: "Výkony hradené zdravotnou poisťovňou pacient neplatí. Nižšie uvedené položky sú výkony na žiadosť pacienta (samoplatca). Ceny doplníme podľa aktuálneho cenníka ambulancie.",
    priceUnavailable: "podľa cenníka",
    categories: [
      {
        title: "Potvrdenia a administratívne úkony",
        items: [
          { name: "Vyšetrenie a potvrdenie pre vodičský preukaz", price: "" },
          { name: "Vyšetrenie a potvrdenie pre zbrojný preukaz", price: "" },
          { name: "Potvrdenie o zdravotnom stave na žiadosť pacienta", price: "" },
          { name: "Potvrdenie pre šport / športovú činnosť", price: "" },
          { name: "Potvrdenie pre zamestnávateľa / brigádu na žiadosť", price: "" },
          { name: "Výpis zo zdravotnej dokumentácie na žiadosť", price: "" },
          { name: "Administratívny úkon (vyplnenie tlačiva, formulára)", price: "" },
        ],
      },
      {
        title: "Vyšetrenia na žiadosť pacienta",
        items: [
          { name: "Predoperačné vyšetrenie na žiadosť (samoplatca)", price: "" },
          { name: "Komplexné preventívne vyšetrenie nad rámec poistenia", price: "" },
          { name: "Vyšetrenie pre komerčné poistenie", price: "" },
        ],
      },
      {
        title: "Výkony a diagnostika na počkanie (POCT)",
        items: [
          { name: "EKG na žiadosť pacienta", price: "" },
          { name: "ABI — vyšetrenie tepien dolných končatín", price: "" },
          { name: "CRP — kvantitatívne vyšetrenie", price: "" },
          { name: "Stanovenie hladiny hemoglobínu", price: "" },
          { name: "iFOBT — stolica na okultné krvácanie", price: "" },
          { name: "Aplikácia injekcie na žiadosť pacienta", price: "" },
        ],
      },
    ],
  },
  erecept: {
    eyebrow: "Recepty a lieky",
    title: "Ako si vyžiadať e-recept",
    subtitle:
      "Recept na vaše chronické lieky vybavíte na diaľku — vyberte si spôsob, ktorý vám vyhovuje.",
    steps: [
      {
        title: "Cez aplikáciu Moji lekári",
        text: "Najrýchlejšie a kedykoľvek. Registrovaní pacienti si liek vyžiadajú priamo v aplikácii.",
      },
      {
        title: "E-mailom",
        text: "Napíšte nám meno, dátum narodenia a názov lieku. Recept vystavíme elektronicky.",
      },
      {
        title: "Telefonicky",
        text: "Zavolajte počas ordinačných hodín — podľa dostupnosti sestier.",
      },
    ],
    note: "E-recept príde elektronicky do ktorejkoľvek lekárne — pri výbere stačí nadiktovať rodné číslo. Lieky predpisujeme registrovaným pacientom.",
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
    quote:
      "Zameriavam sa na prevenciu, aby ste mohli žiť spokojne. Ale ak bude treba, som otvorený poskytnúť Vám špičkovú liečbu.",
    items: [
      {
        title: "Komplexná pomoc",
        text: "Od prevencie až po liečbu. Väčšinu vecí vybavíte priamo u nás, bez zbytočného posielania inde.",
        icon: "clipboard-check",
      },
      {
        title: "Všetky poisťovne",
        text: "Bez doplatkov za výber lekára. Spolupracujeme so všetkými zdravotnými poisťovňami.",
        icon: "shield-check",
      },
      {
        title: "Prijímame nových pacientov",
        text: "Prechod k nám je jednoduchý. Odhlásenie aj presun dokumentácie vybavíme za Vás.",
        icon: "user-plus",
      },
      {
        title: "English-speaking doctor",
        text: "Examinations and explanations are also available in English. You can discuss your health comfortably.",
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
    pricing: "Pricing",
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
    overview: {
      cards: [
        {
          title: "Prevention, diagnostics and treatment",
          text: "Comprehensive outpatient care within general practice — from examination and treatment to professional health counselling.",
          icon: "stethoscope",
        },
        {
          title: "Preventive check-ups and vaccination",
          text: "Regular preventive examinations covered by insurance, plus vaccination including seasonal flu and travel medicine.",
          icon: "syringe",
        },
        {
          title: "Pre-operative examinations",
          text: "Complete pre-operative preparation and internal assessment before a planned surgical procedure.",
          icon: "clipboard-check",
        },
        {
          title: "Blood sampling and POCT diagnostics",
          text: "Blood draws in the practice and rapid on-site diagnostics using modern medical equipment.",
          icon: "activity",
        },
        {
          title: "E-prescription and digital services",
          text: "E-prescription, e-lab and e-referral. Preparation of referral proposals for specialist examinations.",
          icon: "pill",
        },
        {
          title: "Certificates and services on request",
          text: "Issuing certificates in accordance with applicable laws. Services on patient request according to the valid price list.",
          icon: "file-text",
          linkToPricing: true,
        },
      ],
      pricingLink: "Price list",
    },
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
    viewAll: "Detailed service listing",
    pageTitle: "Our services",
    pageLead:
      "Comprehensive general care for adults — from prevention and on-site POCT diagnostics to e-prescriptions, referral proposals and fee-based services.",
    scope: {
      title: "Scope of services",
      intro:
        "The practice provides complete healthcare within the scope of a general practitioner for adult patients.",
      groups: [
        {
          title: "Comprehensive healthcare",
          items: [
            {
              title: "General outpatient care",
              text: "Prevention, diagnostics and treatment of acute and chronic conditions in adults.",
            },
            {
              title: "Preventive check-ups and vaccination",
              text: "Regular prevention and mandatory or recommended vaccinations.",
            },
            {
              title: "Pre-operative examinations",
              text: "Complete internal preparation before planned medical procedures.",
            },
            {
              title: "Professional counselling",
              text: "Health consultations and preparation of referral recommendations for specialist examinations.",
            },
          ],
        },
        {
          title: "Modern diagnostics and sampling",
          items: [
            {
              title: "Blood and biological material sampling",
              text: "Rapid laboratory diagnostics in the practice (device results within minutes).",
            },
          ],
        },
        {
          title: "Administration and e-Services",
          items: [
            {
              title: "Electronic healthcare (e-Health)",
              text: "E-prescriptions, electronic referrals and processing of e-laboratory results.",
            },
            {
              title: "Certificates and assessments",
              text: "Issuing medical certificates in accordance with applicable legislation (driving licences, firearms permits, employment and more).",
            },
            {
              title: "Services on patient request",
              text: "Services not covered by health insurance according to the practice price list.",
              linkToPricing: true,
            },
          ],
        },
        {
          title: "Patient comfort",
          items: [
            {
              title: "Online appointment booking",
              text: "Coming soon.",
            },
            {
              title: "English speaking GP",
              text: "Full examination and communication available in English.",
            },
          ],
        },
      ],
    },
    equipment: {
      title: "Medical equipment",
      intro:
        "Diagnostic devices on site enable rapid testing and results while you wait — without unnecessary delays for an external laboratory.",
      purposeLabel: "Examination / purpose",
      deviceLabel: "Device",
      backToList: "Back to medical equipment",
      items: [
        {
          slug: "ekg-schiller-at-2-plus",
          purpose: "Detects heart conditions (ECG)",
          device: "EKG Schiller AT 2 Plus",
          detail: {
            image: "/images/equipment/ekg-schiller-at-2-plus.png",
            imageAlt: "Schiller AT 2 Plus electrocardiograph",
            paragraphs: [
              "The Schiller AT 2 Plus is a premium electrocardiograph from the renowned Swiss manufacturer, designed to accurately record your heart's electrical activity. This modern device is essential for preventive check-ups, pre-operative assessments and diagnosing symptoms such as palpitations and chest pain.",
              "Thanks to advanced software, it provides the doctor with immediate analysis that helps detect rhythm disorders, poor blood supply and signs of a previous heart attack in good time. The examination itself is completely painless, safe and requires no needles or uncomfortable procedures.",
              "During the procedure you lie comfortably on the examination couch while a nurse attaches recording electrodes with conductive gel to your chest and limbs. The measurement itself takes only a few seconds, during which the integrated printer immediately produces a detailed result right in the practice. The doctor will discuss the recorded values with you as soon as the test is complete — the entire process including preparation takes no more than 10 minutes.",
            ],
          },
        },
        {
          slug: "abi-boso-abi-system-100",
          purpose: "Quick test for narrowed arteries in the lower limbs",
          purposeNote: "Can save your life before a heart attack or stroke",
          device: "ABI BOSO ABI system -100",
          detail: {
            image: "/images/equipment/abi-boso-abi-system-100.png",
            imageAlt: "ABI BOSO ABI system-100 cuff",
            paragraphs: [
              "The ABI BOSO ABI system-100 is a highly accurate diagnostic device designed for rapid, painless measurement of the ankle-brachial index. This system allows the doctor to measure blood pressure on all four limbs simultaneously in the space of a single minute.",
              "The main aim of this examination is early detection of peripheral arterial disease, which causes dangerous narrowing of the arteries in the lower limbs. Because this condition is closely linked to general hardening of the arteries, early diagnosis can literally save a patient's life from a heart attack or stroke.",
              "The test itself is maximally comfortable and non-invasive for the patient, and takes place lying down using four automatic cuffs. Advanced technology eliminates errors caused by blood pressure fluctuations and immediately evaluates precise results that are available straight away.",
              "The examination is an invaluable part of modern prevention, especially for smokers, people with diabetes or those with high blood pressure and cholesterol.",
            ],
          },
        },
        {
          slug: "boso-tm2430-holter",
          purpose: "Blood pressure under 24-hour monitoring",
          device: "BOSO TM2430 blood pressure holter",
          detail: {
            image: "/images/equipment/boso-tm2430-holter.png",
            imageAlt: "BOSO TM2430 blood pressure holter",
            paragraphs: [
              "The BOSO TM2430 blood pressure holter is a compact portable device designed for continuous 24-hour monitoring of a patient's blood pressure in their natural home environment. Throughout the day and night, the device automatically inflates the arm cuff at regular intervals and records every measured value in detail.",
              "This examination is key to detecting so-called masked hypertension or, conversely, white-coat syndrome, where a patient has high blood pressure only under stress in the doctor's office. Thanks to the full-day record, the doctor gains a comprehensive overview of how your blood pressure fluctuates, enabling exceptionally precise adjustment of treatment.",
              "The device is designed to be lightweight, quiet and as unobtrusive as possible during everyday activities and sleep. The measurement itself is completely safe and non-invasive, and the patient only keeps a brief diary of their activities during the day.",
              "The detailed analysis from this device reliably helps protect the cardiovascular system from risks associated with untreated high blood pressure.",
            ],
          },
        },
        {
          slug: "quickread-go-orion",
          purpose: "Distinguishing bacterial and viral infection (CRP)",
          purposeNote: "Determines whether antibiotics are needed",
          device: "QuickRead go Orion — quantitative CRP testing",
          detail: {
            pageTitle: "QuickRead go Orion",
            pagePurpose: "POCT diagnostics from a single drop of blood",
            image: "/images/equipment/quickread-go-orion.png",
            imageAlt: "QuickRead go Orion",
            paragraphs: [
              "The QuickRead go Orion is a state-of-the-art, compact diagnostic system in the practice, designed for rapid and highly accurate measurement of key health parameters from a single drop of blood. This versatile assistant allows the doctor to perform quantitative CRP testing within minutes, immediately distinguishing bacterial from viral infection and making the right decision about antibiotics.",
              "The device also measures haemoglobin levels precisely, helping to detect anaemia early and quickly address persistent fatigue or weakness. It plays an important role in cancer prevention too, where a highly sensitive iFOBT test can reveal invisible, hidden bleeding in the stool.",
              "All these analyses are carried out digitally, with maximum gentleness and high laboratory accuracy right before your eyes. For the patient this means great comfort, as there is no stress from venous blood sampling or days of waiting for results from an external laboratory.",
              "Thanks to the immediate availability of measured values, the doctor can set targeted treatment or preventive measures during your single visit to the practice.",
            ],
          },
        },
        {
          purpose: "Detects anaemia",
          device: "QuickRead go Orion — haemoglobin level testing",
          detailSlug: "quickread-go-orion",
        },
        {
          purpose: "Detection of hidden bleeding in stool",
          purposeNote: "Colorectal cancer prevention",
          device: "QuickRead go Orion — quantitative iFOBT testing",
          detailSlug: "quickread-go-orion",
        },
        {
          slug: "pulse-oximeter",
          purpose: "Measures blood oxygen saturation",
          device: "Pulse oximeter",
          detail: {
            image: "/images/equipment/pulse-oxymeter.png",
            imageAlt: "Pulse oximeter",
            paragraphs: [
              "A pulse oximeter is a small, non-invasive medical device for immediate measurement of blood oxygen saturation and heart rate at the same time. The examination is very simple — the device is gently clipped onto the tip of the patient's finger.",
              "The device works on the principle of light passing through tissue, so it does not damage the skin and causes no pain. For the doctor, this oxygenation value is critically important when assessing lung function and the overall state of the patient's respiratory system.",
              "The measurement is regularly used for people with respiratory conditions, asthma, pneumonia or when monitoring patients with chronic difficulties. The result appears on a clear digital display within seconds, allowing an immediate response in case of insufficient oxygenation.",
              "The patient thus receives instant feedback on their breathing without any need for blood sampling.",
            ],
          },
        },
        {
          slug: "otoscope-kawe",
          purpose: "Ear canal and eardrum examination",
          purposeNote: "Detects inflammation or earwax",
          device: "KaWe Germany otoscope",
          detail: {
            image: "/images/equipment/otoscope-kawe.png",
            imageAlt: "KaWe Germany otoscope",
            paragraphs: [
              "The otoscope from renowned German manufacturer KaWe is a professional optical instrument for detailed examination of the outer ear canal and eardrum. It combines intense light with an integrated magnifying lens, allowing the doctor to see anatomical structures inside the ear perfectly.",
              "The examination is key for diagnosing painful inflammation of the ear canal or middle ear, or for finding mechanical obstructions. The doctor can quickly determine whether accumulated earwax is the cause of reduced hearing or pressure in the ear.",
              "The procedure itself is completely painless and safe for the patient, and the doctor uses disposable, hygienic ear specula. During the examination the patient simply sits calmly with their head slightly tilted while the doctor gently inserts the tip of the instrument into the ear.",
              "The whole process takes barely a minute and provides an immediate picture of the ear's condition, on the basis of which the right treatment is determined straight away.",
            ],
          },
        },
        {
          slug: "accu-chek",
          purpose: "Screening blood glucose test",
          device: "Accu Check glucose meter",
          detail: {
            image: "/images/equipment/accu-chek.png",
            imageAlt: "Accu-Chek glucose meter",
            paragraphs: [
              "The Accu-Chek glucose meter is a highly reliable pocket device for rapid and accurate measurement of blood sugar levels directly in the practice. This screening glycaemia test is an important part of every preventive check-up and helps catch diabetes at an early stage.",
              "The device also plays an irreplaceable role in regular monitoring of patients already being treated for diabetes who need to know their current status. The entire measurement takes just a few seconds and requires only a tiny drop of blood obtained by a gentle finger-prick.",
              "Modern technology ensures minimal discomfort during sampling and high measurement accuracy comparable to large laboratories. The result appears immediately on the digital display, so the doctor can discuss dietary habits or adjust treatment with the patient right away.",
              "Thanks to this device, the patient has an immediate overview of their carbohydrate metabolism without lengthy waiting.",
            ],
          },
        },
        {
          slug: "laura-smart",
          purpose: "Urine testing",
          purposeNote: "Detection of urinary tract infections and kidney disease",
          device: "Laura Smart urine analyzer",
          detail: {
            image: "/images/equipment/laura-smart.png",
            imageAlt: "Laura Smart urine analyzer",
            paragraphs: [
              "The Laura Smart urine analyzer is a modern benchtop device that provides objective and highly accurate urine sample testing in the practice. It replaces older visual assessment of diagnostic strips and eliminates any subjective error when reading results.",
              "The device is used for rapid detection of urinary tract infections, early kidney disease or the presence of unwanted blood and protein in the urine. Using advanced optical technology, it can precisely analyse important chemical parameters of the submitted sample within one minute.",
              "For the patient the examination involves no burden — it is enough to provide a urine sample directly at the practice. Results are printed on a paper slip almost immediately, allowing the doctor to start targeted treatment, such as antibiotics for inflammation, without delay.",
              "This sophisticated screening significantly raises the standard of preventive care and speeds up the diagnostic process.",
            ],
          },
        },
        {
          slug: "coaguchek-pro-ii",
          purpose: "INR",
          purposeNote: "Rapid finger-prick coagulation monitoring for safe treatment",
          device: "CoaguChek Pro II",
          detail: {
            image: "/images/equipment/coaguchek-pro-ii.png",
            imageAlt: "CoaguChek Pro II",
            paragraphs: [
              "CoaguChek Pro II is a state-of-the-art professional system for rapid and highly accurate monitoring of blood coagulation through INR measurement. This device is absolutely essential for patients on long-term blood-thinning medication who need regular checks on the safety of their treatment.",
              "Thanks to this technology, the patient no longer has to undergo an unpleasant venous blood draw and wait until the next day for results. A single drop of blood from a gentle, almost painless finger-prick is enough for the analysis.",
              "The device processes the sample using a special test strip and displays the precise result on screen within one minute. The doctor can verify on the spot whether there is a risk of bleeding or, conversely, dangerous blood clots.",
              "Immediate information allows safe adjustment of medication dosing right away, bringing the patient great comfort and maximum safety.",
            ],
          },
        },
        {
          slug: "vision-hearing-screening",
          purpose: "Screening vision and hearing examination",
          purposeNote: "Basic screening for preventive check-ups and driving licences",
          device: "Snellen eye chart and screening audiometer",
          detail: {
            pageTitle: "Snellen eye chart and screening audiometer",
            images: [
              {
                src: "/images/equipment/snellen-chart.png",
                alt: "Snellen eye chart",
              },
              {
                src: "/images/equipment/screening-audiometer.png",
                alt: "Screening audiometer",
              },
            ],
            paragraphs: [
              "The combination of a Snellen eye chart and screening audiometer provides complete equipment for basic screening examination of a patient's vision and hearing. The Snellen chart with characters of different sizes is used for rapid verification of visual acuity and detection of a possible need for glasses or correction.",
              "The screening audiometer, through headphones, tests the patient's ability to perceive sounds and tones at different frequencies and volumes. These examinations are a mandatory and important part of preventive check-ups and fitness assessments, for example for a driving licence.",
              "The whole process takes place calmly, is completely non-invasive, painless and undemanding for the patient. Thanks to these tools, the doctor can catch natural weakening of the senses that comes with age or from a noisy environment in good time.",
              "Results are known immediately after the tests, and if needed the doctor will recommend a more detailed examination with an eye or ENT specialist.",
            ],
          },
        },
      ],
    },
  },
  pricing: {
    eyebrow: "Pricing",
    pageTitle: "Price list",
    pageLead:
      "Services not covered by public health insurance — provided at the patient's request according to the practice's current price list.",
    note: "Services covered by health insurance are free of charge for the patient. The items below are services provided at the patient's request (self-pay). Prices will be completed according to the practice's current price list.",
    priceUnavailable: "on request",
    categories: [
      {
        title: "Certificates and administrative tasks",
        items: [
          { name: "Examination and certificate for a driving licence", price: "" },
          { name: "Examination and certificate for a firearms licence", price: "" },
          { name: "Health status certificate at the patient's request", price: "" },
          { name: "Certificate for sport / physical activity", price: "" },
          { name: "Certificate for an employer / part-time work on request", price: "" },
          { name: "Extract from medical records on request", price: "" },
          { name: "Administrative task (completing a form)", price: "" },
        ],
      },
      {
        title: "Examinations at the patient's request",
        items: [
          { name: "Pre-operative examination on request (self-pay)", price: "" },
          { name: "Comprehensive preventive examination beyond insurance cover", price: "" },
          { name: "Examination for commercial insurance", price: "" },
        ],
      },
      {
        title: "On-site procedures and diagnostics (POCT)",
        items: [
          { name: "ECG at the patient's request", price: "" },
          { name: "ABI — examination of lower-limb arteries", price: "" },
          { name: "CRP — quantitative test", price: "" },
          { name: "Haemoglobin level measurement", price: "" },
          { name: "iFOBT — faecal occult blood test", price: "" },
          { name: "Injection administered at the patient's request", price: "" },
        ],
      },
    ],
  },
  erecept: {
    eyebrow: "Prescriptions & medication",
    title: "How to request an e-prescription",
    subtitle:
      "You can request a repeat prescription remotely — choose the option that suits you best.",
    steps: [
      {
        title: "Via the Moji lekári app",
        text: "Fastest and available anytime. Registered patients request the medication directly in the app.",
      },
      {
        title: "By e-mail",
        text: "Send us your name, date of birth and the medication name. We'll issue the e-prescription electronically.",
      },
      {
        title: "By phone",
        text: "Call during opening hours — subject to nurse availability.",
      },
    ],
    note: "The e-prescription is sent electronically to any pharmacy — just give your ID number when collecting. Prescriptions are issued to registered patients.",
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
    title: "Why choose our practice",
    quote:
      "I focus on prevention so you can live with peace of mind. But when needed, I am ready to provide you with excellent treatment.",
    items: [
      {
        title: "Comprehensive care",
        text: "From prevention to treatment — most of what you need is handled here, without unnecessary referrals elsewhere.",
        icon: "clipboard-check",
      },
      {
        title: "All insurers",
        text: "No extra charge for choosing your GP. We work with all health insurers in Slovakia.",
        icon: "shield-check",
      },
      {
        title: "Accepting new patients",
        text: "We handle the switch for you — de-registration and record transfer included.",
        icon: "user-plus",
      },
      {
        title: "English speaking doctor",
        text: "Examinations and explanations also available in English. You can discuss your health comfortably.",
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

import type { Dictionary } from "./sk";
import { pricingCategoriesSk } from "@/content/pricing-categories";

const en: Dictionary = {
  meta: {
    localeLabel: "English",
    switchTo: "Slovensky",
    htmlLang: "en",
  },
  nav: {
    about: "Practice",
    aboutDoctor: "About the doctor",
    services: "Services",
    newPatient: "New patient",
    existingPatients: "Existing patients",
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
    eyebrow: "General practice · Svätý Jur",
    titleLine1: "Holistic and functional medicine for a longer, healthier life",
    titleLine2Prefix: "MedicaJur – for ",
    titleHighlight: "your health",
    lead: "Medicine that treats causes, not just symptoms. Prevention and modern diagnostics for more years in full health.",
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
    photoAlt: "MEDICA JUR practice in Svätý Jur",
  },
  becomePatient: {
    title: "Become our patient",
    steps: [
      {
        title: "Book an appointment",
        text: "At our practice via e-mail or phone.",
      },
      {
        title: "Come for an intro visit",
        text: "We'll talk, you'll get to know our practice and I'll learn about your needs.",
      },
    ],
    emailLabel: "Send an e-mail",
    phoneLabel: "Call us",
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
    doctorTitle: "About doctor",
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
    subtitle: "Complete care for adults under one roof.",
    overview: {
      cards: [
        {
          title: "Prevention, diagnostics and treatment",
          text: "Examination, treatment and professional counselling with a GP.",
          icon: "stethoscope",
        },
        {
          title: "Preventive check-ups and vaccination",
          text: "Check-ups covered by insurance, plus vaccination including flu and travel medicine.",
          icon: "syringe",
        },
        {
          title: "Pre-operative examinations",
          text: "Pre-operative preparation and internal assessment before a procedure.",
          icon: "clipboard-check",
        },
        {
          title: "Blood sampling and POCT diagnostics",
          text: "Blood draws and rapid on-site diagnostics while you wait.",
          icon: "activity",
        },
        {
          title: "E-prescription and digital services",
          text: "E-prescription, e-lab and e-referral. Preparation of referral proposals for specialist examinations.",
          icon: "pill",
        },
        {
          title: "Certificates and services on request",
          text: "Certificates and services on request per the valid price list.",
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
      groups: [
        {
          title: "Comprehensive healthcare",
          items: [
            {
              icon: "stethoscope",
              title: "General outpatient care",
              text: "Comprehensive care within the scope of a GP — from examination and treatment of acute and chronic conditions to professional counselling.",
            },
            {
              icon: "syringe",
              title: "Preventive check-ups and vaccination",
              text: "Regular preventive check-ups covered by insurance, including mandatory and recommended vaccinations.",
            },
            {
              icon: "clipboard-check",
              title: "Pre-operative examinations",
              text: "Complete pre-operative preparation and internal assessment before a planned surgical procedure.",
            },
            {
              icon: "shield-check",
              title: "Professional counselling",
              text: "Health consultations and preparation of referral recommendations for specialist examinations.",
            },
          ],
        },
        {
          title: "Modern diagnostics and sampling",
          items: [
            {
              icon: "activity",
              title: "Blood and biological material sampling",
              text: "On-site sampling and rapid point-of-care diagnostics using modern medical equipment.",
            },
          ],
        },
        {
          title: "Administration and e-Services",
          items: [
            {
              icon: "pill",
              title: "Electronic healthcare (e-Health)",
              text: "E-prescriptions, e-lab and e-referrals — electronic communication with laboratories and specialists.",
            },
            {
              icon: "file-text",
              title: "Certificates and assessments",
              text: "Medical certificates in accordance with applicable legislation — driving licences, firearms permits, employment and more.",
            },
            {
              icon: "file-text",
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
              icon: "clock",
              title: "Online appointment booking",
              text: "Book appointments through the Moji lekári online portal.",
            },
            {
              icon: "languages",
              title: "English speaking GP",
              text: "Full examination and communication with the doctor in English.",
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
    pageLeadTitle: "Services beyond health insurance",
    pageLead:
      "All routine treatment and diagnostic procedures indicated by the doctor are free of charge for our insured patients. Only administrative services and examinations provided at the patient's personal request (self-pay) are charged.",
    priceUnavailable: "on request",
    categories: pricingCategoriesSk.map((category) => ({
      title: category.title,
      items: category.items.map((item) => ({ name: item.name, price: item.price })),
    })),
  },
  existingPatients: {
    title: "Registered patients",
    bookTitle: "Appointment booking and e-prescription",
    bookText:
      "All communication with your doctor is handled through the Moji lekári app — from booking an appointment to requesting a prescription.",
    bookAppLabel: "App",
    bookAppValue: "Moji lekári",
  },
  erecept: {
    eyebrow: "Prescriptions & medication",
    title: "How to request an e-prescription",
    subtitle: "Request a repeat prescription remotely.",
    steps: [
      {
        title: "Via the Moji lekári app",
        text: "Fastest. Request your medication directly in the app.",
      },
      {
        title: "By e-mail",
        text: "Send your name, date of birth and medication. We'll issue it electronically.",
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
    quote: "It's not just about living longer — it's about living those years in full health.",
    quoteRole: "MEDICA JUR · Svätý Jur",
    items: [
      {
        title: "Holistic approach",
        text: "We address causes, not just symptoms",
        icon: "stethoscope",
      },
      {
        title: "Modern diagnostics",
        text: "We measure what a routine checkup misses",
        icon: "activity",
      },
      {
        title: "Prevention of lifestyle diseases",
        text: "Cardiovascular, metabolic, neurodegenerative",
        icon: "shield-check",
      },
    ],
    examTitle: "What we learn at your intake examination",
    examLead: "One visit gives you a complete picture of your health — while you wait.",
    exams: [
      { name: "InBody 970", measure: "Body composition — muscle, fat and water" },
      { name: "MaxGrip", measure: "Grip strength and muscle condition" },
      { name: "MaxPulse", measure: "Pulse wave and arterial elasticity" },
      { name: "ABI", measure: "Ankle-brachial index and atherosclerosis screening" },
      { name: "Blood count & biochemistry", measure: "Complete laboratory profile" },
    ],
  },
  aboutUs: {
    eyebrow: "About us",
    title: "Care for every stage of your life",
    lead: "At MEDICA JUR we accompany patients through every stage of adult life — from young adults to seniors. Prevention is at the core, deciding how many years you live in full strength.",
    pillars: [
      {
        title: "Helping the young reach their potential",
        text: "We build strong health foundations so young adults live with energy and fulfil their potential.",
      },
      {
        title: "Seniors living in the best health",
        text: "We help seniors stay active, independent and enjoy extra years in the best possible health.",
      },
      {
        title: "Prevention for heart and movement",
        text: "We focus on cardiovascular and musculoskeletal prevention — two pillars of a long, high-quality life.",
      },
    ],
    photos: [
      { label: "Consulting room" },
      { label: "Waiting room" },
      { label: "Reception" },
    ],
  },
  about: {
    eyebrow: "About doctor",
    title: "MUDr. Pavol Trnovec, PhD.",
    lead: "General practitioner for adults in Svätý Jur",
    profileCards: [
      {
        title: "Education and qualifications",
        qualifications: [
          {
            label: "MD",
            text: "He graduated from the Jessenius Faculty of Medicine of Comenius University in Martin with the highest honours, Summa cum laude.",
          },
          {
            label: "PhD",
            text: "In 2018 he successfully defended his doctoral thesis at the Faculty of Public Health of the Slovak Medical University, focusing on the legal aspects of drug categorisation in Slovakia.",
          },
          {
            label: "Board certification",
            text: "In the same year he passed his specialist examination in general practice for adults and returned to direct clinical work.",
          },
        ],
      },
      {
        title: "Professional and medical experience",
        paragraphs: [
          "He gained his first clinical experience in emergency services, the ICU and later as a secondary physician on the internal medicine ward at Trstená Hospital.",
          "He then spent more than two decades in senior roles in the pharmaceutical industry (Eli Lilly, GSK). He led clinical research into a new insulin in Vienna and later worked at headquarters in Indianapolis (USA), where he was responsible for global strategies for new medicines in oncology and neurology. After years in business, he chose of his own conviction to return to what fulfils him most — direct work with patients in his practice.",
        ],
      },
      {
        title: "Treatment philosophy and approach to patients",
        paragraphs: [
          "His knowledge of the pharmaceutical environment at the highest level gives him a unique perspective on modern medicine. In his practice he pushes back against the trend of excessive prescribing of medicines that often bring patients inadequate value. He believes patients should receive only the treatment they truly need and whose benefit is scientifically supported. He sees medicine not only through laboratory results, but also through the importance of human conversation, mutual trust and respect in the community.",
        ],
      },
      {
        title: "Awards, ethics and philanthropy",
        paragraphs: [
          "During his management career he actively promoted an ethical approach to business. He served as head of the Slovak Association of Pharmaceutical Companies (SAFS) and was a board member of the British Chamber of Commerce. Companies under his leadership received prestigious Top Corporate Philanthropist and Via Bona awards. He has long worked actively with NGOs Plamienok and Druhý krok, which help children and people in difficult life situations.",
        ],
      },
    ],
    facilityTitle: "Our premises",
    facilityText:
      "The practice is located in a new multi-functional building with step-free access and parking nearby.",
    highlights: [
      { icon: "stethoscope", text: "General practitioner for adults" },
      { icon: "globe", text: "PhD degree and international practice in the USA and Austria" },
      { icon: "pill", text: "Targeted treatment without unnecessary medication" },
      { icon: "languages", text: "English-speaking GP" },
    ],
  },
  aboutBanner: {
    eyebrow: "About doctor",
    title: "MUDr. Pavol Trnovec, PhD.",
    subtitle: "General practitioner for adults",
    text: "A doctor who left a successful career in senior management at international pharmaceutical companies to help patients directly. He now channels his many years of experience from clinical research in the USA and Austria into honest, hands-on medicine in his own practice. His priority is accurate diagnosis, open communication and rational treatment that puts the person first — not unnecessary medication.",
    highlights: [
      { icon: "stethoscope", text: "General practitioner for adults" },
      { icon: "globe", text: "PhD degree and international practice in the USA and Austria" },
      { icon: "pill", text: "Targeted treatment without unnecessary medication" },
      { icon: "languages", text: "English-speaking GP" },
    ],
    cta: "More about the doctor",
  },
  reviews: {
    eyebrow: "Patient reviews",
    title: "What our patients say",
    subtitle: "Real feedback from our patients.",
    subtitleWithStats: "{rating} · {count} on Google Maps",
    googleBadge: "Google Maps",
    googleRatingHint: "Verified patient ratings",
    googleCta: "All reviews on Google Maps",
    googleCtaNote: "Read more ratings directly on our practice profile.",
    items: [
      {
        name: "Jozef P.",
        meta: "",
        text: "My visit with Dr Trnovec was a revelation — 21st-century medicine and patient care! Detailed initial tests with clear explanations, practical recommendations, and a willingness to help without pushing medication right away. The practice environment is genuinely pleasant too. Highly recommended!",
      },
      {
        name: "Katarína K.",
        meta: "",
        text: "Everything is explained clearly and I finally felt that someone cares about my health. I believe it is important to look after your health before illness sets in. Today I found a doctor who cares about healthy patients too — not just prescribing medication when it is already too late. Thank you!",
      },
      {
        name: "Dominika K.",
        meta: "",
        text: "An empathetic, direct and professional approach. After a long time, preventive care as every patient in Slovakia deserves. Nothing to fault — I recommend him. Even with the annual fee, it is worth having a doctor who does not examine you in the doorway but truly listens and assesses you.",
      },
      {
        name: "Adam V.",
        meta: "",
        text: "Top doctor! Professional approach and excellent communication.",
      },
    ],
  },
  faq: {
    eyebrow: "Patient questions",
    title: "Frequently asked questions",
    subtitle: "Answers to what patients most often need to know before a visit or first contact.",
    cta: "More information for new patients",
    items: [
      {
        q: "Are you accepting new patients?",
        a: "Yes, we are currently accepting new patients. To register, simply complete and sign the Healthcare Provision Agreement and bring it to our practice, or we can provide it for you on site. We will fully take care of de-registering you from your previous GP and transferring your medical records.",
      },
      {
        q: "How can I book an appointment?",
        a: "Registered patients: Book a specific time slot conveniently online via the Moji lekári patient portal.\n\nNew (unregistered) patients: Please contact us by phone or e-mail during opening hours, or visit us in person at the practice.",
      },
      {
        q: "How can I request an e-prescription for medication?",
        a: "Registered patients request prescriptions for long-term medication exclusively online via the Moji lekári portal. This system speeds up processing and gives the doctor more time for patients in the practice. You receive portal access automatically by e-mail invitation after registering with us.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "Bring your ID card, health insurance card and a list of all medications you currently take (including over-the-counter products).\n\nIf you have paper medical records or recent specialist reports, bring those as well.\n\nWe also recommend bringing a signed registration agreement; if needed, it can be completed at the practice.",
      },
      {
        q: "What should I do in case of acute illness?",
        a: "We treat acute conditions (e.g. sudden high fever, severe pain, acute infections) without an appointment during dedicated hours at the start of the surgery day — see the opening hours table for exact times.\n\nIn case of life-threatening emergency (suspected heart attack, stroke, severe shortness of breath), do not wait — call emergency services on 155 or 112 immediately.",
      },
      {
        q: "Which health insurers do you have contracts with?",
        a: "We are a contracted partner of all health insurers in Slovakia. Patients with VšZP, Dôvera and Union have standard healthcare and preventive check-ups fully covered.",
      },
      {
        q: "Do I pay for tests on modern devices?",
        a: "If you have health problems and the doctor indicates the test, you pay nothing. All diagnostic procedures needed to determine the right treatment are fully covered by public health insurance for our capitated patients.\n\nHowever, our standard is to provide above-standard preventive care and maximum comfort, which requires investment in cutting-edge technology and staffing. We therefore offer annual service subscription packages that enable in-depth prevention and modern health management at the highest level:\n\n• Clear client service: The annual subscription includes non-medical services such as reception, call centre, convenient SMS and e-mail notifications, and full access to the Moji lekári patient portal for 12 months.\n\n• Premium prevention and health coaching: With a prepaid package (ZDRAVIE at €50 or ZDRAVIE+ at €100), you receive regular preventive diagnostics beyond standard insurance coverage. This includes detailed body composition analysis (TANITA or InBODY 970), arterial flow measurement (ABI), vascular and metabolic age analysis (Maxpulse, MESI ECG) and professional health coaching.\n\nOnly tests performed solely at your own request outside these packages (e.g. out of curiosity) or procedures for employer and administrative purposes are charged according to the valid price list.",
      },
      {
        q: "How do I get to you and where can I park?",
        a: "The practice is located in the Kačačnice mixed-use building at Muškátová 2 in Svätý Jur. You can park conveniently right by the building. The practice entrance is on the 1st floor (directly above the Vitalita pharmacy) with full step-free access via a lift.",
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
        a: "Yes, we are currently accepting new patients. To register, simply complete and sign the Healthcare Provision Agreement and bring it to our practice, or we can provide it for you on site. We will fully take care of de-registering you from your previous GP and transferring your medical records.",
      },
      {
        q: "How can I book an appointment?",
        a: "Registered patients: Book a specific time slot conveniently online via the Moji lekári patient portal.\n\nNew (unregistered) patients: Please contact us by phone or e-mail during opening hours, or visit us in person at the practice.",
      },
      {
        q: "How can I request an e-prescription for medication?",
        a: "Registered patients request prescriptions for long-term medication exclusively online via the Moji lekári portal. This system speeds up processing and gives the doctor more time for patients in the practice. You receive portal access automatically by e-mail invitation after registering with us.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "Bring your ID card, health insurance card and a list of all medications you currently take (including over-the-counter products).\n\nIf you have paper medical records or recent specialist reports, bring those as well.\n\nWe also recommend bringing a signed registration agreement; if needed, it can be completed at the practice.",
      },
      {
        q: "What should I do in case of acute illness?",
        a: "We treat acute conditions (e.g. sudden high fever, severe pain, acute infections) without an appointment during dedicated hours at the start of the surgery day — see the opening hours table for exact times.\n\nIn case of life-threatening emergency (suspected heart attack, stroke, severe shortness of breath), do not wait — call emergency services on 155 or 112 immediately.",
      },
      {
        q: "Which health insurers do you have contracts with?",
        a: "We are a contracted partner of all health insurers in Slovakia. Patients with VšZP, Dôvera and Union have standard healthcare and preventive check-ups fully covered.",
      },
      {
        q: "Do I pay for tests on modern devices?",
        a: "If you have health problems and the doctor indicates the test, you pay nothing. All diagnostic procedures needed to determine the right treatment are fully covered by public health insurance for our capitated patients.\n\nHowever, our standard is to provide above-standard preventive care and maximum comfort, which requires investment in cutting-edge technology and staffing. We therefore offer annual service subscription packages that enable in-depth prevention and modern health management at the highest level:\n\n• Clear client service: The annual subscription includes non-medical services such as reception, call centre, convenient SMS and e-mail notifications, and full access to the Moji lekári patient portal for 12 months.\n\n• Premium prevention and health coaching: With a prepaid package (ZDRAVIE at €50 or ZDRAVIE+ at €100), you receive regular preventive diagnostics beyond standard insurance coverage. This includes detailed body composition analysis (TANITA or InBODY 970), arterial flow measurement (ABI), vascular and metabolic age analysis (Maxpulse, MESI ECG) and professional health coaching.\n\nOnly tests performed solely at your own request outside these packages (e.g. out of curiosity) or procedures for employer and administrative purposes are charged according to the valid price list.",
      },
      {
        q: "How do I get to you and where can I park?",
        a: "The practice is located in the Kačačnice mixed-use building at Muškátová 2 in Svätý Jur. You can park conveniently right by the building. The practice entrance is on the 1st floor (directly above the Vitalita pharmacy) with full step-free access via a lift.",
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

export { en };

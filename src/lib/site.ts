/**
 * Single source of truth for clinic contact details, hours and external links.
 * Update values here and they propagate across the whole site + structured data.
 */

const DOCTOR_EMAIL = "doktor@medicajur.sk";

export const SITE = {
  company: "MEDICA JUR, s.r.o.",
  brand: "MEDICA JUR",
  brandMark: "MedicaJur",
  doctor: "MUDr. Pavol Trnovec, PhD.",
  phone: "+421 2 2073 3871",
  phoneHref: "tel:+421220733871",
  emails: {
    doctor: DOCTOR_EMAIL,
    recipe: "recept@medicajur.sk",
    nurse: "sestra@medicajur.sk",
    office: "ambulancia@medicajur.sk",
  },
  address: {
    street: "Muškátová 2",
    city: "Svätý Jur",
    zip: "900 21",
    country: "Slovensko",
  },
  // Geo-coordinates for Muškátová 2, Svätý Jur (approx., used for map + JSON-LD)
  geo: { lat: 48.2536, lng: 17.2156 },
  mapsQuery: "Muškátová 2, 900 21 Svätý Jur",
  /** Google Place ID for live rating + review count (Places API). */
  googlePlaceId: "ChIJvVfamLORbEcRA0Ucz-2y3_I",
  googleReviewsUrl:
    "https://www.google.com/maps/place/MUDr.+Pavol+Trnovec,+PhD.+MedicaJur,s.r.o./@48.2543703,17.2202747,17z/data=!4m8!3m7!1s0x476c91b398da57bd:0xf2dfb2edcf1c4503!8m2!3d48.2543703!4d17.2202747!9m1!1b1!16s%2Fg%2F11bzx348pt!18m1!1e1",
  /** Used when GOOGLE_PLACES_API_KEY is not set or the API request fails. */
  googleReviewsFallback: {
    rating: 5.0,
    reviewCount: 0,
  },
  /** Primary "Objednať sa" CTA — opens mail to the doctor. */
  bookHref: `mailto:${DOCTOR_EMAIL}`,
  /** Moji lekári patient portal (e-prescriptions, registered patients). */
  bookingUrl: "https://lekar.digital/",
  bookingName: "Moji lekári",
  officialUrl: "https://www.medicajur.sk",
  domain: "medicajur.sk",
  // Public base URL used for canonical/OG/sitemap. Override in production.
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.medicajur.sk",
  insurers: ["VšZP", "Dôvera", "Union"],
  /**
   * Real photos: drop files into `public/images/` and set the paths below.
   * While a value is an empty string, a tasteful placeholder is shown instead.
   */
  images: {
    doctor: "/images/doctor.png",
    logo: "/images/logo.png",
    facility: "/images/facility.svg", // replace with "/images/ambulancia.jpg" when available
    // "O nás" practice photos — leave empty to show a placeholder; set the path
    // once real photos are ready, e.g. "/images/ambulancia-ordinacia.jpg".
    aboutOffice: "",
    aboutWaiting: "",
    aboutReception: "",
  },
} as const;

/**
 * Site-wide notice bar (holidays, substitute doctor, changed hours…).
 * Set `active: true` to show it at the very top of every page.
 * Edit the texts per language; leave a language empty to skip it there.
 */
export const NOTICE = {
  // No notice is currently planned. To show one (holidays, substitute doctor,
  // changed hours…): set `active: true` and fill in `range` + `text` below.
  active: false,
  /** Optional date range shown in bold before the message, e.g. "7. – 18. 7. 2026". */
  range: "",
  text: {
    sk: "",
    en: "",
  },
} as const;

/**
 * Opening hours. `intervals` are minutes-from-midnight ranges used for the
 * live open/closed indicator. `acute` is shown as a sub-line.
 */
export type DaySchedule = {
  /** 0 = Sunday … 6 = Saturday (matches Date.getDay()) */
  dow: number;
  intervals: [number, number][];
  acute: [number, number] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

export const SCHEDULE: DaySchedule[] = [
  { dow: 1, intervals: [[hm(7), hm(15)]], acute: null },
  { dow: 2, intervals: [[hm(11), hm(18)]], acute: null },
  { dow: 3, intervals: [[hm(7), hm(15)]], acute: null },
  { dow: 4, intervals: [[hm(11), hm(18)]], acute: null },
  { dow: 5, intervals: [[hm(7), hm(12)]], acute: null },
  { dow: 6, intervals: [], acute: null },
  { dow: 0, intervals: [], acute: null },
];

const pad = (n: number) => String(n).padStart(2, "0");
export const fmtMinutes = (mins: number) => `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;

/** The clinic's fixed timezone — the "open now" logic must not depend on the
 *  visitor's device clock or locale. */
export const CLINIC_TIMEZONE = "Europe/Bratislava";

const DOW_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/**
 * Current day-of-week (0 = Sunday, matching Date.getDay()) and minutes-from-
 * midnight in the clinic's timezone, regardless of where the visitor is.
 */
export function clinicNow(date = new Date()): { dow: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CLINIC_TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  let dow = 0;
  let hour = 0;
  let minute = 0;
  for (const part of parts) {
    if (part.type === "weekday") dow = DOW_INDEX[part.value] ?? 0;
    else if (part.type === "hour") hour = parseInt(part.value, 10) % 24;
    else if (part.type === "minute") minute = parseInt(part.value, 10);
  }

  return { dow, minutes: hour * 60 + minute };
}

export const scheduleForDow = (dow: number) =>
  SCHEDULE.find((d) => d.dow === dow) ?? SCHEDULE[SCHEDULE.length - 1];

export function isOpenAt(date = new Date()) {
  const { dow, minutes } = clinicNow(date);
  const day = scheduleForDow(dow);
  return day.intervals.some(([start, end]) => minutes >= start && minutes < end);
}

export function formatDayIntervals(dow: number, closedLabel: string) {
  const day = scheduleForDow(dow);
  if (day.intervals.length === 0) return closedLabel;
  return day.intervals
    .map(([s, e]) => `${fmtMinutes(s)} – ${fmtMinutes(e)}`)
    .join("  |  ");
}

export function formatDayAcute(dow: number, acutePrefix: string) {
  const day = scheduleForDow(dow);
  if (!day.acute) return null;
  const [s, e] = day.acute;
  return `${acutePrefix}: ${fmtMinutes(s)} – ${fmtMinutes(e)}`;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapsQuery,
)}`;

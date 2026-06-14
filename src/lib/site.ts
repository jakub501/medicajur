/**
 * Single source of truth for clinic contact details, hours and external links.
 * Update values here and they propagate across the whole site + structured data.
 */

export const SITE = {
  company: "MEDICA JUR, s.r.o.",
  brand: "MEDICA JUR",
  brandMark: "MedicaJur",
  doctor: "MUDr. Pavol Trnovec, PhD.",
  phone: "+421 2 2073 3871",
  phoneHref: "tel:+421220733871",
  emails: {
    doctor: "doktor@medicajur.sk",
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
  },
} as const;

/**
 * Site-wide notice bar (holidays, substitute doctor, changed hours…).
 * Set `active: true` to show it at the very top of every page.
 * Edit the texts per language; leave a language empty to skip it there.
 */
export const NOTICE = {
  active: false,
  /** Optional date range shown in bold before the message, e.g. "7. – 18. 7. 2026". */
  range: "21. – 25. 7. 2026",
  text: {
    sk: "Čerpáme dovolenku, ambulancia je zatvorená. Zastupuje MUDr. … v …. V akútnych prípadoch volajte 155.",
    en: "The practice is closed for holidays. Substitute: Dr. … at …. In acute cases call 155.",
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
  { dow: 1, intervals: [[hm(7), hm(12)], [hm(12, 30), hm(15)]], acute: [hm(8), hm(9)] },
  { dow: 2, intervals: [[hm(12), hm(17, 30)]], acute: [hm(12), hm(13)] },
  { dow: 3, intervals: [[hm(7), hm(12)], [hm(12, 30), hm(15)]], acute: [hm(8), hm(9)] },
  { dow: 4, intervals: [[hm(12), hm(17, 30)]], acute: [hm(12), hm(13)] },
  { dow: 5, intervals: [[hm(7), hm(12)], [hm(12, 30), hm(14)]], acute: [hm(8), hm(9)] },
  { dow: 6, intervals: [], acute: null },
  { dow: 0, intervals: [], acute: null },
];

const pad = (n: number) => String(n).padStart(2, "0");
export const fmtMinutes = (mins: number) => `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;

export const scheduleForDow = (dow: number) =>
  SCHEDULE.find((d) => d.dow === dow) ?? SCHEDULE[SCHEDULE.length - 1];

export function isOpenAt(date = new Date()) {
  const day = scheduleForDow(date.getDay());
  const now = date.getHours() * 60 + date.getMinutes();
  return day.intervals.some(([start, end]) => now >= start && now < end);
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

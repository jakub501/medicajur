const STICKY_HEADER_GAP = 28;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getStickyHeaderHeight() {
  return document.querySelector<HTMLElement>(".site-chrome")?.offsetHeight ?? 126;
}

function scrollToY(top: number, smooth: boolean) {
  const y = Math.max(0, top);
  const behavior = smooth && !prefersReducedMotion() ? "smooth" : "auto";

  window.scrollTo({ top: y, left: 0, behavior });

  if (behavior === "auto") {
    document.documentElement.scrollTop = y;
    document.body.scrollTop = y;
  }
}

export function scrollToSection(
  el: HTMLElement,
  options?: { offset?: number; smooth?: boolean },
) {
  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    (options?.offset ?? getStickyHeaderHeight() + STICKY_HEADER_GAP);

  scrollToY(top, options?.smooth ?? false);
}

export function scrollToSectionById(id: string, options?: { offset?: number; smooth?: boolean }) {
  const el = document.getElementById(id);
  if (el) scrollToSection(el, options);
}

export function scrollToTop(smooth = false) {
  scrollToY(0, smooth);
}

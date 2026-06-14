"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const STICKY_HEADER_GAP = 28;

function getStickyHeaderHeight() {
  return document.querySelector<HTMLElement>(".site-chrome")?.offsetHeight ?? 126;
}

function getScrollOffset(el: HTMLElement) {
  const margin = getComputedStyle(el).scrollMarginTop;
  const parsed = Number.parseFloat(margin);
  return Number.isFinite(parsed) ? parsed : 0;
}

function scrollToY(top: number) {
  const y = Math.max(0, top);
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y;
}

function scrollToTop() {
  scrollToY(0);
}

function scrollToElement(el: HTMLElement, offset?: number) {
  const top =
    el.getBoundingClientRect().top + window.scrollY - (offset ?? getStickyHeaderHeight() + STICKY_HEADER_GAP);
  scrollToY(top);
}

function isServicesIndex(pathname: string) {
  return pathname.endsWith("/sluzby") || pathname.endsWith("/services");
}

function scrollToServicesScope() {
  const scope = document.getElementById("scope");
  if (!scope) {
    scrollToTop();
    return;
  }

  const heading = scope.querySelector("h2");
  scrollToElement((heading as HTMLElement | null) ?? scope);
}

function scrollOnNavigate(pathname: string) {
  const hash = window.location.hash.slice(1);

  if (hash === "scope" || (!hash && isServicesIndex(pathname))) {
    scrollToServicesScope();
    return;
  }

  if (hash) {
    const el = document.getElementById(hash);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - getScrollOffset(el);
      scrollToY(top);
      return;
    }
  }

  scrollToTop();
}

export function ScrollToHash() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    scrollOnNavigate(pathname);
  }, [pathname]);

  useLayoutEffect(() => {
    const onHashChange = () => scrollOnNavigate(pathname);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}

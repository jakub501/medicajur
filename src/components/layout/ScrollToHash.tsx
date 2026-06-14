"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection, scrollToSectionById, scrollToTop } from "@/lib/scroll-to-section";

function isServicesIndex(pathname: string) {
  return pathname.endsWith("/sluzby") || pathname.endsWith("/services");
}

function scrollToServicesScope(smooth: boolean) {
  const scope = document.getElementById("scope");
  if (!scope) {
    scrollToTop(smooth);
    return;
  }

  const heading = scope.querySelector("h2");
  scrollToSection((heading as HTMLElement | null) ?? scope, { smooth });
}

function scrollOnNavigate(pathname: string, smooth: boolean) {
  const hash = window.location.hash.slice(1);

  if (hash === "scope" || (!hash && isServicesIndex(pathname))) {
    scrollToServicesScope(smooth);
    return;
  }

  if (hash) {
    scrollToSectionById(hash, { smooth });
    return;
  }

  scrollToTop(smooth);
}

export function ScrollToHash() {
  const pathname = usePathname();
  const isFirstNavigation = useRef(true);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const smooth = !isFirstNavigation.current && Boolean(window.location.hash.slice(1));
    isFirstNavigation.current = false;

    const run = () => scrollOnNavigate(pathname, smooth);
    if (smooth) {
      requestAnimationFrame(run);
    } else {
      run();
    }
  }, [pathname]);

  useLayoutEffect(() => {
    const onHashChange = () => {
      requestAnimationFrame(() => scrollOnNavigate(pathname, true));
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}

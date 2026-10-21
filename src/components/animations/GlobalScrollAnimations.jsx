"use client";

import { useEffect } from "react";

/** Global, dependency-free reveal effects for existing Next.js pages. */
export default function GlobalScrollAnimations() {
  useEffect(() => {
    const selector = "main section, main article, main > div > section";
    const seen = new WeakSet();
    let observer;
    let mutationObserver;
    let scheduled = false;

    function scan() {
      scheduled = false;
      document.querySelectorAll(selector).forEach((element) => {
        if (seen.has(element) || element.closest("header, nav, footer, [data-no-scroll-animation]")) return;
        seen.add(element);
        element.classList.add("sw-global-reveal");
        observer.observe(element);
      });
    }

    function scheduleScan() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(scan);
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.remove("sw-global-visible");
          // Reflow resets the animation so it can play when scrolling back.
          void el.offsetWidth;
          el.classList.add("sw-global-visible");
        } else {
          el.classList.remove("sw-global-visible");
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

    scan();
    mutationObserver = new MutationObserver(scheduleScan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.querySelectorAll(".sw-global-reveal").forEach((el) => {
        el.classList.remove("sw-global-reveal", "sw-global-visible");
      });
    };
  }, []);

  return null;
}

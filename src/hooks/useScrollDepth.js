import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackScrollDepth } from "../lib/analytics";

const MILESTONES = [25, 50, 75, 100];

/**
 * Rastreia marcos de profundidade de scroll (25/50/75/100 %).
 * Dispara `scroll_depth` no GA4 uma única vez por marco, por página.
 * Redefine os marcos automaticamente ao navegar para outra rota.
 *
 * @example
 * export function MinhaPage() {
 *   useScrollDepth();
 *   return <main>...</main>;
 * }
 */
export function useScrollDepth() {
  const { pathname } = useLocation();
  const fired = useRef(new Set());

  useEffect(() => {
    fired.current = new Set();

    function handleScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;

      const pct = Math.round((scrolled / total) * 100);

      for (const milestone of MILESTONES) {
        if (pct >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone);
          trackScrollDepth(milestone, pathname);
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
}

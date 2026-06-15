import { useEffect, useRef, useState } from "react";
import { trackSectionView } from "../lib/analytics";

/**
 * Anima a entrada dos filhos via fade+slide quando entram no viewport.
 *
 * @param {string} [sectionName]  - quando fornecido, dispara `section_view` no GA4
 *                                  na primeira vez que a seção entra no viewport
 * @param {object} [trackParams]  - params extras do evento GA4 (release_name, etc.)
 */
export function FadeInSection({ children, sectionName, trackParams = {} }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  const tracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (sectionName && !tracked.current) {
              tracked.current = true;
              trackSectionView(sectionName, trackParams);
            }
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [sectionName, trackParams]);

  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

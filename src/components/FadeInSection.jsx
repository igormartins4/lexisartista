// --- Componente de Animação de Scroll ---

import { useEffect, useRef, useState } from "react";

export function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

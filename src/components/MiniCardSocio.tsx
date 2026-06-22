import { useEffect, useRef } from "react";
import { IcEstrela } from "@/components/icons";

// Mini-cartão dourado de sócio. O "120 pontos" é ilustrativo (marketing);
// o dado real vive no portal da MistureraCheck.
export function MiniCardSocio() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("shine");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="mini-card" ref={ref}>
      <div className="mc-topo">
        <span className="mc-marca">Misturêra</span>
        <span className="mc-rotulo">
          <IcEstrela />
          SÓCIO
        </span>
      </div>
      <div>
        <div className="mc-num">
          120<small>pontos</small>
        </div>
        <p className="mc-val">= R$ 12,00 em descontos</p>
      </div>
    </div>
  );
}

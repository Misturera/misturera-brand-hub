import { useEffect, type RefObject } from "react";

/* Hero vivo — somente na home. Parallax por camadas [data-depth] reagindo a
   inclinação (deviceorientation), scroll e mouse, com lerp suave (~0.06) e um
   flutuar contínuo leve. Título afina o peso (wght) conforme o scroll.
   prefers-reduced-motion desliga tudo (hero fica estático). Limpa listeners e
   o rAF no unmount. Sem libs externas. */
export function useHeroVivo(
  containerRef: RefObject<HTMLElement>,
  tituloRef: RefObject<HTMLElement>,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;

    const layers = Array.from(
      container.querySelectorAll<HTMLElement>("[data-depth]"),
    );
    if (!layers.length) return;

    const titulo = tituloRef.current;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      sy = 0;
    const t0 = performance.now();
    let raf = 0;

    const onMouse = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      tx = Math.max(-1, Math.min(1, e.gamma / 28));
      ty = Math.max(-1, Math.min(1, (e.beta - 40) / 28));
    };
    const onScroll = () => {
      sy = window.scrollY;
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("deviceorientation", onOrient, true);
    window.addEventListener("scroll", onScroll, { passive: true });

    const frame = (now: number) => {
      const t = (now - t0) / 1000;
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const ix = Math.sin(t * 0.55) * 0.35;
      const iy = Math.cos(t * 0.42) * 0.3;
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depth || "1") || 1;
        const mx = (cx + ix) * d * 9;
        const my = (cy + iy) * d * 9 - sy * d * 0.04;
        l.style.transform = `translate3d(${mx.toFixed(2)}px,${my.toFixed(2)}px,0)`;
      });
      if (titulo) {
        const p = Math.max(0, Math.min(1, sy / 420));
        titulo.style.fontVariationSettings = `'wght' ${(500 - 150 * p).toFixed(0)}, 'opsz' 144`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", onOrient, true);
      window.removeEventListener("scroll", onScroll);
    };
  }, [containerRef, tituloRef]);
}

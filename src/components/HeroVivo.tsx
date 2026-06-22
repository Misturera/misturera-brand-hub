import { useRef } from "react";
import { Link } from "react-router-dom";
import heroFoto from "@/assets/gelatos-cubas.jpg";
import { useHeroVivo } from "@/hooks/useHeroVivo";
import { IcEstrela, IcWpp, IcCheck, IcFolha } from "@/components/icons";
import { WPP_GERAL } from "@/data/site";

export function HeroVivo() {
  const containerRef = useRef<HTMLElement>(null);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  useHeroVivo(containerRef, tituloRef);

  return (
    <section className="phero hero-vivo" id="topo" ref={containerRef}>
      <div className="orb a" data-depth="1.3" />
      <div className="orb b" data-depth="1.0" />
      <div className="hero-in">
        <div className="texto">
          <p className="eyebrow">
            <IcEstrela />
            <span>Sabor de verdade</span>
          </p>
          <h1 ref={tituloRef}>
            Misture do
            <br />
            seu <em>jeito.</em>
          </h1>
          <p className="hsub">
            Gelato e açaí self-service com produção própria, sabor de verdade e uma experiência feita
            para surpreender.
          </p>
          <div className="hero-bts">
            <Link className="btn btn-gold" to="/unidades">
              Ver unidades
            </Link>
            <Link className="btn btn-ghost" to={WPP_GERAL}>
              <IcWpp />
              Falar no WhatsApp
            </Link>
          </div>
          <div className="selos">
            <span>
              <IcCheck />
              Produção própria
            </span>
            <span>
              <IcCheck />
              100% artesanal
            </span>
            <span>
              <IcCheck />
              Pague pelo peso
            </span>
          </div>
        </div>
        <div className="palco">
          <div className="acento leaf" data-depth="2.1">
            <IcFolha />
          </div>
          <div className="acento spark" data-depth="2.6">
            <IcEstrela />
          </div>
          <div className="acento dot" data-depth="1.8" />
          <div className="acento ring" data-depth="1.5" />
          <div className="foto" data-depth="0.5">
            <img src={heroFoto} alt="Vitrine de gelatos artesanais" />
          </div>
        </div>
      </div>
    </section>
  );
}

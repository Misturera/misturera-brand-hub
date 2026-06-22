import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  titulo: ReactNode;
  texto?: string;
  mini?: string;
  bg?: string;
}

// Hero das subpáginas: degradê verde + brilho dourado + grão (via CSS .phero).
export function PageHero({ eyebrow, titulo, texto, mini, bg }: PageHeroProps) {
  return (
    <section className="phero">
      {bg && (
        <>
          <img className="phero-bg" src={bg} alt="" aria-hidden="true" />
          <div className="phero-shade" />
        </>
      )}
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{titulo}</h1>
        {texto && <p>{texto}</p>}
        {mini && <p className="mini">{mini}</p>}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

interface FaixaProps {
  variante?: "verde" | "musgo";
  eyebrow?: string;
  titulo: string;
  texto?: string;
  children?: ReactNode; // botões de ação
}

export function Faixa({ variante = "verde", eyebrow, titulo, texto, children }: FaixaProps) {
  return (
    <section className={`faixa ${variante}`}>
      <div className="wrap">
        {eyebrow && <p className="eyebrow-d">{eyebrow}</p>}
        <h2>{titulo}</h2>
        {texto && <p>{texto}</p>}
        {children && <div className="acoes">{children}</div>}
      </div>
    </section>
  );
}

import type { Sabor } from "@/data/sabores";
import { IcEstrela, IcFolha } from "@/components/icons";

export function SaborCard({ sabor, descricao = true }: { sabor: Sabor; descricao?: boolean }) {
  return (
    <div className="sabor" data-cat={sabor.categoria}>
      <div className="sabor-foto">
        <img src={sabor.foto} alt={sabor.nome} loading="lazy" />
        {sabor.destaque && (
          <span className="badge badge-d">
            <IcEstrela />
            Destaque
          </span>
        )}
        {sabor.vegano && (
          <span className="badge badge-v">
            <IcFolha />
            Vegano
          </span>
        )}
      </div>
      <div className="sabor-corpo">
        <span className="sabor-cat">{sabor.categoria}</span>
        <h3>{sabor.nome}</h3>
        {descricao && sabor.descricao && <p>{sabor.descricao}</p>}
      </div>
    </div>
  );
}

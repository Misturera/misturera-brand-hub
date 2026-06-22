import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SaborCard } from "@/components/SaborCard";
import { sabores, CATEGORIAS, CARDAPIO_ATUALIZADO_EM, type Categoria } from "@/data/sabores";

export default function Sabores() {
  const [filtro, setFiltro] = useState<"Todos" | Categoria>("Todos");
  const lista = filtro === "Todos" ? sabores : sabores.filter((s) => s.categoria === filtro);

  return (
    <Layout>
      <PageHero
        eyebrow="Nossos sabores"
        titulo="Descubra seu favorito"
        texto="Todos artesanais, todos com produção própria."
        mini={`Cardápio atualizado em ${CARDAPIO_ATUALIZADO_EM}`}
      />

      <section className="sec">
        <div className="wrap">
          <div className="filtros">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                className={`chip${filtro === c ? " on" : ""}`}
                onClick={() => setFiltro(c)}
                aria-pressed={filtro === c}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="sabores">
            {lista.map((s) => (
              <SaborCard key={s.nome} sabor={s} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

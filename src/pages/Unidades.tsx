import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Faixa } from "@/components/Faixa";
import { UnidadeCard } from "@/components/UnidadeCard";
import { lojas } from "@/data/lojas";

export default function Unidades() {
  return (
    <Layout>
      <PageHero
        eyebrow="Nossas unidades"
        titulo="Encontre a Misturêra mais perto de você"
        texto="Cada unidade oferece a mesma experiência premium com produção própria."
      />

      <section className="sec">
        <div className="wrap">
          <div className={`unidades${lojas.length > 2 ? " tres" : ""}`}>
            {lojas.map((l) => (
              <UnidadeCard key={l.id} loja={l} />
            ))}
          </div>
        </div>
      </section>

      <Faixa
        variante="musgo"
        eyebrow="Clube Misturêra"
        titulo="Cada visita vale pontos"
        texto="Acumule pontos a cada compra e troque por desconto direto no caixa."
      >
        <Link className="btn btn-gold" to="/clube">
          Conheça o Clube
        </Link>
      </Faixa>
    </Layout>
  );
}

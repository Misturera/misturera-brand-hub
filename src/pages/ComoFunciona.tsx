import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Faixa } from "@/components/Faixa";
import { Link } from "react-router-dom";
import bgComo from "@/assets/unidade-xerem-balcao.jpg";
import { IcCopo, IcCasquinha, IcSparkles, IcBalanca, IcCoracao } from "@/components/icons";

const passos = [
  { n: "01", Icone: IcCopo, titulo: "Escolha seu copo", texto: "Temos tamanhos variados para você montar a porção ideal. Escolha o que combina com sua fome e vontade." },
  { n: "02", Icone: IcCasquinha, titulo: "Sirva os sabores", texto: "Passe pelas cubas e sirva os gelatos e açaís que mais te atraírem. Todos artesanais, todos frescos." },
  { n: "03", Icone: IcSparkles, titulo: "Monte combinações", texto: "Misture sabores do seu jeito. Não existe combinação errada — existe a que te faz feliz." },
  { n: "04", Icone: IcBalanca, titulo: "Pese no final", texto: "Leve seu copo ao caixa e pague pelo peso. Simples, justo e transparente. Sem surpresas." },
  { n: "05", Icone: IcCoracao, titulo: "Aproveite a experiência", texto: "Sente-se em um ambiente acolhedor, compartilhe com quem você gosta e curta cada colherada." },
];

const dicas = [
  "Experimente combinar gelato com sorbet para um contraste incrível de texturas.",
  "Comece pelo sabor mais suave e vá aumentando a intensidade.",
  "Açaí com gelato de pistache? Parece ousado, mas funciona muito bem.",
  "Use copos menores para experimentar mais sabores sem exagerar na quantidade.",
];

export default function ComoFunciona() {
  return (
    <Layout>
      <PageHero
        eyebrow="Como funciona"
        titulo="Self-service descomplicado"
        texto="Você escolhe, você monta, você aproveita."
        bg={bgComo}
      />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Passo a passo</p>
            <h2>Simples, intuitivo e do seu jeito</h2>
          </div>
          <div style={{ maxWidth: 840, margin: "0 auto" }}>
            {passos.map(({ n, Icone, titulo, texto }) => (
              <div className="passo-row" key={n}>
                <span className="num">{n}</span>
                <div className="ico">
                  <Icone />
                </div>
                <div>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Dicas de quem entende</p>
            <h2>Aproveite ao máximo</h2>
          </div>
          <div className="dicas">
            {dicas.map((d, i) => (
              <div className="dica" key={i}>
                <b>{i + 1}</b>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faixa titulo="Monte a sua agora" texto="Escolha a unidade mais perto e venha experimentar.">
        <Link className="btn btn-gold" to="/unidades">
          Ver unidades
        </Link>
        <Link className="btn btn-ghost" to="/sabores">
          Ver sabores
        </Link>
      </Faixa>
    </Layout>
  );
}

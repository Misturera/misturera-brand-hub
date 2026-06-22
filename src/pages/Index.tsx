import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroVivo } from "@/components/HeroVivo";
import { Faixa } from "@/components/Faixa";
import { SaborCard } from "@/components/SaborCard";
import { UnidadeCard } from "@/components/UnidadeCard";
import { MiniCardSocio } from "@/components/MiniCardSocio";
import { IcCopo, IcCasquinha, IcSparkles, IcBalanca, IcCoracao, IcSeta } from "@/components/icons";
import { saboresDestaque } from "@/data/sabores";
import { lojas } from "@/data/lojas";
import interior from "@/assets/unidade-santa-cruz-interior.jpg";

const passos = [
  { n: "01", Icone: IcCopo, titulo: "Escolha seu copo", texto: "Selecione o tamanho ideal para você." },
  { n: "02", Icone: IcCasquinha, titulo: "Sirva os sabores", texto: "Gelatos e açaís artesanais à vontade." },
  { n: "03", Icone: IcSparkles, titulo: "Monte combinações", texto: "Misture sabores do seu jeito." },
  { n: "04", Icone: IcBalanca, titulo: "Pese no final", texto: "Pague apenas pelo que consumir." },
  { n: "05", Icone: IcCoracao, titulo: "Aproveite", texto: "Uma experiência feita para você." },
];

export default function Index() {
  return (
    <Layout>
      <HeroVivo />

      {/* Quem somos — resumo */}
      <section className="sec">
        <div className="wrap">
          <div className="dois">
            <div className="dois-txt">
              <p className="eyebrow-d">Quem somos</p>
              <h2>Sabor de verdade, sem excessos</h2>
              <p className="sub">Produção própria. Sabor artesanal. Experiência premium.</p>
              <p>
                A Misturêra é uma gelateria e açaíteria self-service com produção própria, criada para
                oferecer sabor de verdade, liberdade de escolha e uma experiência premium sem excessos.
              </p>
              <p>
                Unimos produto artesanal, ambiente acolhedor e cuidado real em cada detalhe para
                transformar momentos simples em experiências memoráveis.
              </p>
              <Link className="btn btn-linha" to="/quem-somos">
                Conheça nossa história
              </Link>
            </div>
            <div className="dois-foto">
              <img src={interior} alt="Interior acolhedor da Misturêra" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona — 5 passos */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Self-service descomplicado</p>
            <h2>Como funciona</h2>
            <p>Você no controle da sua experiência, do copo ao sabor.</p>
          </div>
          <div className="passos5">
            {passos.map(({ n, Icone, titulo, texto }) => (
              <div className="passo" key={n}>
                <span className="passo-n">{n}</span>
                <div className="passo-ico">
                  <Icone />
                </div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabores em destaque */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Sabores em destaque</p>
            <h2>Gelatos, sorbets e açaís artesanais</h2>
            <p>Uma seleção que muda ao longo da semana — sempre tem novidade na vitrine.</p>
          </div>
          <div className="sabores">
            {saboresDestaque.map((s) => (
              <SaborCard key={s.nome} sabor={s} descricao={false} />
            ))}
          </div>
          <div className="sabores-cta">
            <Link className="btn btn-linha" to="/sabores">
              Ver todos os sabores <IcSeta />
            </Link>
          </div>
        </div>
      </section>

      {/* Clube */}
      <section className="sec">
        <div className="wrap">
          <div className="clube-card">
            <div className="clube-txt">
              <p className="eyebrow-d">Clube Misturêra</p>
              <h2>Cada visita vale pontos</h2>
              <p>
                Junte pontos a cada compra e troque por desconto direto no caixa. Sem cartão físico —
                é só o seu CPF.
              </p>
              <Link className="btn btn-gold" to="/clube">
                Conheça o Clube <IcSeta />
              </Link>
            </div>
            <MiniCardSocio />
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Nossas unidades</p>
            <h2>Encontre a Misturêra mais perto de você</h2>
            <p>Unidades em Duque de Caxias e Magé, no Rio de Janeiro.</p>
          </div>
          <div className={`unidades${lojas.length > 2 ? " tres" : ""}`}>
            {lojas.map((l) => (
              <UnidadeCard key={l.id} loja={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Nossa história — resumo */}
      <section className="sec alt">
        <div className="wrap">
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div className="sec-head" style={{ marginBottom: 22 }}>
              <p className="eyebrow-d">Nossa história</p>
              <h2>Uma marca que cresce com propósito</h2>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "var(--tinta-suave)",
                lineHeight: 1.7,
                maxWidth: "58ch",
                margin: "0 auto 24px",
              }}
            >
              A Misturêra nasceu em dezembro de 2024 e enfrentou cedo seu maior desafio: a perda do
              fornecedor principal. Foi o ponto de virada que trouxe a produção própria e o gelato
              artesanal que definem a marca hoje.
            </p>
            <Link className="btn btn-linha" to="/nossa-historia">
              Leia a história completa <IcSeta />
            </Link>
          </div>
        </div>
      </section>

      <Faixa
        titulo="Venha viver a experiência Misturêra"
        texto="Gelato artesanal, açaí de verdade e a liberdade de montar sua combinação perfeita."
      >
        <Link className="btn btn-gold" to="/unidades">
          Encontrar uma unidade
        </Link>
        <Link className="btn btn-ghost" to="/sabores">
          Explorar sabores
        </Link>
      </Faixa>
    </Layout>
  );
}

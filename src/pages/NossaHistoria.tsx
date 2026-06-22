import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Faixa } from "@/components/Faixa";
import { timeline } from "@/data/timeline";
import equipe from "@/assets/unidade-xerem-equipe.jpg";

export default function NossaHistoria() {
  return (
    <Layout>
      <PageHero
        eyebrow="Nossa história"
        titulo="Cada sabor carrega uma trajetória"
        texto="Conheça como a Misturêra nasceu e para onde estamos caminhando."
      />

      <section className="sec">
        <div className="wrap">
          <div className="dois">
            <div className="dois-foto">
              <img src={equipe} alt="Equipe Misturêra" loading="lazy" />
            </div>
            <div className="dois-txt">
              <p className="eyebrow-d">Do sonho ao sabor</p>
              <h2>Construída no desafio</h2>
              <p>
                A Misturêra nasceu em dezembro de 2024, a partir da vontade de empreender e de trazer
                para a região um modelo de self-service acessível e atrativo.
              </p>
              <p>
                Em março de 2025, a primeira unidade abriu. Quinze dias depois, veio o primeiro grande
                desafio: a perda do fornecedor principal. O que poderia ser o fim virou o ponto de
                virada.
              </p>
              <p>
                Começou ali uma fase de estudo, reconstrução e paixão pelo gelato artesanal. Com
                produção própria e mais verdade no produto, a marca se consolidou e conquistou seus
                primeiros clientes fiéis.
              </p>
              <p>
                Em fevereiro de 2026, a segunda unidade ganhou vida. Desde então, seguimos crescendo
                com a mesma essência: sabor, experiência e verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Nossa trajetória</p>
            <h2>Os marcos que constroem a Misturêra</h2>
          </div>
          <div className="tl">
            {timeline.map((m, i) => (
              <div className="tl-item" key={m.data}>
                <div className="tl-col">
                  <div className="tl-dot">
                    <span>{m.data}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="tl-line" />}
                </div>
                <div className="tl-body">
                  <h3>{m.titulo}</h3>
                  <p>{m.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faixa
        titulo="Construindo o futuro"
        texto="Cada unidade nova carrega a mesma essência da primeira. Cada sabor novo é desenvolvido com o mesmo rigor. Nosso futuro é feito com a base do nosso início: produção própria, qualidade sem concessão e experiência pensada para pessoas de verdade."
      />
    </Layout>
  );
}

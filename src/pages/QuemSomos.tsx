import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Faixa } from "@/components/Faixa";
import {
  IcFolha,
  IcCoracao,
  IcEscudo,
  IcPessoas,
  IcSparkles,
  IcMedalha,
} from "@/components/icons";
import { valores, type IconeValor } from "@/data/valores";
import fundador from "@/assets/fundador-gelatiere.jpg";

const iconesValor: Record<IconeValor, (p: { className?: string }) => JSX.Element> = {
  folha: IcFolha,
  coracao: IcCoracao,
  escudo: IcEscudo,
  pessoas: IcPessoas,
  sparkles: IcSparkles,
  medalha: IcMedalha,
};

export default function QuemSomos() {
  return (
    <Layout>
      <PageHero
        eyebrow="Quem nós somos"
        titulo="Mais do que uma gelateria"
        texto="Somos uma marca que acredita que sabor, qualidade e experiência andam juntos."
      />

      <section className="sec">
        <div className="wrap">
          <div className="dois">
            <div className="dois-foto">
              <img src={fundador} alt="Fundador da Misturêra — produção artesanal própria" loading="lazy" />
            </div>
            <div className="dois-txt">
              <p className="eyebrow-d">Nosso propósito</p>
              <h2>Sabor de verdade, sem excessos</h2>
              <p>
                A Misturêra é uma gelateria e açaíteria self-service com produção própria, criada para
                oferecer sabor de verdade, liberdade de escolha e uma experiência premium sem excessos.
              </p>
              <p>
                Nossa marca nasceu da vontade de empreender, evoluiu no desafio e se fortaleceu na
                prática. Hoje, unimos produto artesanal, ambiente acolhedor e cuidado real em cada
                detalhe para transformar momentos simples em experiências memoráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">O que nos move</p>
            <h2>Nossos pilares de marca</h2>
            <p>Guiam cada decisão, do sabor ao atendimento.</p>
          </div>
          <div className="cards3">
            {valores.map((v) => {
              const Icone = iconesValor[v.icone];
              return (
                <div className="card-v" key={v.titulo}>
                  <div className="ico">
                    <Icone />
                  </div>
                  <h3>{v.titulo}</h3>
                  <p>{v.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Faixa
        titulo="Artesanal com padrão profissional"
        texto="Não escolhemos entre ser artesanal ou profissional — somos os dois. Nossa produção é feita com as mãos, mas com processos que garantem consistência, segurança e sabor impecável em cada porção. Do fornecedor ao freezer, tudo é planejado. Do freezer à sua colher, tudo é cuidado."
      />
    </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";

const timeline = [
  { year: "2021", title: "O início", desc: "A ideia de criar uma gelateria artesanal self-service nasce da paixão por gelato e pela vontade de oferecer algo genuíno." },
  { year: "2022", title: "Primeira unidade", desc: "A primeira Misturêra abre suas portas. Produção própria desde o primeiro dia, com receitas desenvolvidas do zero." },
  { year: "2023", title: "Consolidação", desc: "Conquistamos nossos primeiros clientes fiéis. O boca a boca comprova: sabor de verdade faz diferença." },
  { year: "2024", title: "Expansão", desc: "A segunda unidade ganha vida. A marca cresce mantendo o padrão artesanal que nos trouxe até aqui." },
  { year: "Futuro", title: "O que vem por aí", desc: "Novos sabores, novas unidades e a mesma essência: gelato artesanal com experiência premium e acessível." },
];

export default function NossaHistoria() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Nossa história
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Cada sabor carrega um pedaço dessa trajetória. Conheça como a Misturêra nasceu e para onde estamos caminhando.
            </p>
          </div>
        </div>
      </section>

      {/* Texto principal */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground font-sans text-sm">Foto institucional — fundação</span>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Do sonho ao sabor
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                A Misturêra nasceu de uma convicção simples: gelato artesanal de verdade
                pode ser acessível. Não aceitamos a ideia de que qualidade precisa ser
                exclusiva ou distante. Queríamos criar um lugar onde qualquer pessoa
                pudesse experimentar sabores feitos com cuidado real.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Desde o primeiro dia, toda a produção é nossa. Cada receita é desenvolvida,
                testada e aprimorada até chegar ao ponto certo. Não terceirizamos sabor.
                Não abrimos mão de ingredientes de qualidade. Esse é o DNA da marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <SectionHeading
            title="Nossa trajetória"
            subtitle="Os marcos que constroem a Misturêra a cada dia."
          />
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-sans text-xs font-bold">{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visão futura */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Construindo o futuro
          </h2>
          <p className="font-sans text-primary-foreground/70 text-lg leading-relaxed">
            A Misturêra é uma marca em crescimento. Cada unidade nova carrega a mesma
            essência da primeira. Cada sabor novo é desenvolvido com o mesmo rigor.
            Nosso futuro é feito com a mesma base do nosso início: produção própria,
            qualidade sem concessão e experiência pensada para pessoas de verdade.
          </p>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import equipeImg from "@/assets/unidade-xerem-equipe.jpg";

const timeline = [
  { year: "Dez 2024", title: "O início", desc: "A Misturêra nasce da vontade de empreender e da oportunidade de trazer para a região um modelo de açaí self-service acessível, ainda inexistente por aqui." },
  { year: "Mar 2025", title: "Primeira unidade", desc: "A primeira unidade abre as portas com produtos de terceiros e já demonstra força, com vendas acima da média logo nos primeiros dias." },
  { year: "Abr 2025", title: "A virada", desc: "Quinze dias após a abertura, a operação perde seu fornecedor principal. O que parecia ser o fim se torna o ponto de virada da marca." },
  { year: "Jul 2025", title: "A volta por cima", desc: "Em busca de uma solução, começa uma imersão profunda em cursos, estudos e mentorias. É nesse processo que nasce a paixão pelo gelato artesanal e pela produção própria." },
  { year: "Ago 2025", title: "Consolidação", desc: "Com mais identidade e verdade no produto, a Misturêra conquista seus primeiros clientes fiéis e confirma, no boca a boca, que sabor de verdade faz diferença." },
  { year: "Fev 2026", title: "Expansão", desc: "A segunda unidade ganha vida. A marca cresce mantendo a essência artesanal e a experiência que a tornaram especial." },
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
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={equipeImg} alt="Equipe Misturêra — feito por nós, pra você" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Do sonho ao sabor
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                A Misturêra nasceu em dezembro de 2024, a partir da vontade de empreender e da oportunidade de trazer para a região um modelo de self-service acessível e atrativo.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Em março de 2025, a primeira unidade abriu as portas. Quinze dias depois, a marca enfrentou seu primeiro grande desafio: a perda do fornecedor principal. O que poderia ter sido o fim se tornou o ponto de virada.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Foi nesse momento que começou uma nova fase de estudo, reconstrução e paixão pelo gelato artesanal. Com produção própria, mais identidade e mais verdade no que entregava, a Misturêra se consolidou e conquistou seus primeiros clientes fiéis.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Em fevereiro de 2026, a segunda unidade ganhou vida. Desde então, a marca segue crescendo com a mesma essência: sabor, experiência e verdade em tudo o que faz.
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
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-sans text-[10px] font-bold leading-tight text-center">{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>
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

import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, ShieldCheck, Users, Sparkles, Award } from "lucide-react";

const values = [
  { icon: Leaf, title: "Produção Própria", desc: "Desenvolvemos nossos sabores com ingredientes selecionados e processos artesanais controlados." },
  { icon: Heart, title: "Paixão pelo Sabor", desc: "Cada receita é criada com dedicação para oferecer o melhor gelato e açaí da região." },
  { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Padrão rigoroso em cada etapa, da seleção dos insumos até o momento que chega a você." },
  { icon: Users, title: "Experiência Humanizada", desc: "Atendimento acolhedor, ambiente cuidado e atenção aos detalhes que fazem a diferença." },
  { icon: Sparkles, title: "Inovação Constante", desc: "Novos sabores, combinações e experiências para surpreender a cada visita." },
  { icon: Award, title: "Padrão Premium", desc: "Artesanal com excelência. Cada detalhe reflete nosso compromisso com o melhor." },
];

export default function QuemSomos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Quem nós somos
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Mais do que uma gelateria. Somos uma marca que acredita que sabor, qualidade e experiência andam juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground font-sans text-sm">Foto institucional</span>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nosso propósito
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                A Misturêra existe para democratizar o acesso ao gelato artesanal de verdade.
                Acreditamos que ingredientes de qualidade, produção cuidadosa e um ambiente
                bem pensado podem transformar um simples sorvete em uma experiência memorável.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Nosso modelo self-service coloca você no controle: escolha seus sabores,
                monte suas combinações e descubra novas possibilidades a cada visita.
                Aqui, não existe o certo ou errado — existe o que te faz feliz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <SectionHeading
            title="O que nos move"
            subtitle="Nossos pilares de marca guiam cada decisão, do sabor ao atendimento."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="border-0 shadow-sm bg-warm-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Artesanal com padrão profissional
          </h2>
          <p className="font-sans text-primary-foreground/70 text-lg leading-relaxed mb-4">
            Não escolhemos entre ser artesanal ou profissional. Somos os dois.
            Nossa produção é feita com as mãos, mas com processos que garantem
            consistência, segurança e sabor impecável em cada porção servida.
          </p>
          <p className="font-sans text-primary-foreground/70 text-lg leading-relaxed">
            Do fornecedor ao freezer, tudo é planejado. Do freezer à sua colher,
            tudo é cuidado. Esse é o nosso padrão Misturêra.
          </p>
        </div>
      </section>
    </Layout>
  );
}

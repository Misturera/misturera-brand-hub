import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { CupSoda, IceCream, Sparkles, Scale, Heart } from "lucide-react";
import toppingsImg from "@/assets/unidade-xerem-toppings.jpg";

const steps = [
  {
    icon: CupSoda,
    title: "Escolha seu copo",
    desc: "Temos tamanhos variados para você montar a porção ideal. Escolha o que combina com sua fome e vontade.",
  },
  {
    icon: IceCream,
    title: "Sirva os sabores",
    desc: "Passe pelas cubas e sirva os gelatos e açaís que mais te atraírem. Todos artesanais, todos frescos.",
  },
  {
    icon: Sparkles,
    title: "Monte combinações",
    desc: "Misture sabores do seu jeito. Não existe combinação errada — existe a que te faz feliz. Experimente sem medo.",
  },
  {
    icon: Scale,
    title: "Pese no final",
    desc: "Leve seu copo ao caixa e pague pelo peso. Simples, justo e transparente. Sem surpresas.",
  },
  {
    icon: Heart,
    title: "Aproveite a experiência",
    desc: "Sente-se em um ambiente acolhedor, compartilhe com quem você gosta e curta cada colherada.",
  },
];

const tips = [
  "Experimente combinar gelato com sorbet para um contraste incrível de texturas.",
  "Comece pelo sabor mais suave e vá aumentando a intensidade.",
  "Açaí com gelato de pistache? Parece ousado, mas funciona muito bem.",
  "Use copos menores para experimentar mais sabores sem exagerar na quantidade.",
];

export default function ComoFunciona() {
  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Como funciona
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Self-service descomplicado. Você escolhe, você monta, você aproveita.
            </p>
          </div>
        </div>
      </section>

      {/* Passos */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionHeading
            title="Passo a passo"
            subtitle="Simples, intuitivo e pensado para a sua melhor experiência."
          />
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, i) => (
              <Card key={i} className="border-0 shadow-sm bg-warm-white overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-3xl font-serif font-bold text-primary/20">{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <SectionHeading
            title="Dicas de quem entende"
            subtitle="Aproveite sua experiência ao máximo com estas sugestões."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, i) => (
              <div key={i} className="bg-warm-white rounded-lg p-6 flex items-start gap-4">
                <span className="text-2xl font-serif font-bold text-primary/30">{i + 1}</span>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

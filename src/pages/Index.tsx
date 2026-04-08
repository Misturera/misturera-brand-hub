import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle, MapPin, Clock, Star, ArrowRight,
  CupSoda, IceCream, Scale, Sparkles, Heart
} from "lucide-react";
import fachadaSantaCruz from "@/assets/unidade-santa-cruz-fachada.jpg";
import interiorSantaCruz from "@/assets/unidade-santa-cruz-interior.jpg";
import gelatosImg from "@/assets/gelatos-cubas.jpg";
import xeremToppings from "@/assets/unidade-xerem-toppings.jpg";
import xeremEquipe from "@/assets/unidade-xerem-equipe.jpg";

const WHATSAPP_NUMBER = "5521976114309";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a Misturêra.";

const howItWorksSteps = [
  { icon: CupSoda, title: "Escolha seu copo", desc: "Selecione o tamanho ideal para você" },
  { icon: IceCream, title: "Sirva os sabores", desc: "Escolha entre nossos gelatos e açaís artesanais" },
  { icon: Sparkles, title: "Monte combinações", desc: "Misture sabores do seu jeito" },
  { icon: Scale, title: "Pese no final", desc: "Pague apenas pelo que consumir" },
  { icon: Heart, title: "Aproveite", desc: "Uma experiência única feita para você" },
];

const featuredFlavors = [
  { name: "Pistache", category: "Gelato", featured: true },
  { name: "Chocolate Belga", category: "Gelato", featured: true },
  { name: "Açaí com Morango", category: "Açaí", featured: false },
  { name: "Sorbet de Morango", category: "Sorbet", featured: false },
  { name: "Baunilha com Caramelo Salgado", category: "Gelato", featured: true },
  { name: "Sorbet de Maracujá com Manga", category: "Sorbet", featured: false },
];

const units = [
  {
    name: "Misturêra Santa Cruz da Serra",
    address: "R. Rio Grande do Norte, Nº 8 - Loja B, Santa Cruz da Serra, Duque de Caxias – RJ, 25260-030",
    hours: "Seg-Qui: 13h às 22h · Sex-Dom: 13h às 23h",
    whatsapp: WHATSAPP_NUMBER,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=R.%20Rio%20Grande%20do%20Norte%2C%208%20-%20Loja%20B%2C%20Santa%20Cruz%20da%20Serra%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025260-030",
  },
  {
    name: "Misturêra Xerém",
    address: "R. Pastor Manoel Avelino de Souza, Nº 15, Mantiquira, Duque de Caxias – RJ, 25250-406",
    hours: "Seg-Qui: 13h às 22h · Sex-Dom: 13h às 23h",
    whatsapp: WHATSAPP_NUMBER,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=R.%20Pastor%20Manoel%20Avelino%20de%20Souza%2C%2015%2C%20Mantiquira%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025250-406",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90" />
        <div className="container relative py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Misturêra
            </h1>
            <p className="font-sans text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
              Gelato e açaí self-service com produção própria, sabor de verdade e uma experiência feita para surpreender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/unidades">
                <Button size="lg" className="bg-warm-white text-primary hover:bg-warm-white/90 font-sans text-base px-8 w-full sm:w-auto">
                  Ver unidades
                </Button>
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans text-base px-8 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Quem somos"
                subtitle="Produção própria. Sabor artesanal. Experiência premium."
                className="text-left mb-6 md:mb-8"
              />
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                A Misturêra é uma gelateria e açaíteria self-service com produção própria, criada para oferecer sabor de verdade, liberdade de escolha e uma experiência premium sem excessos.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                Nossa marca nasceu da vontade de empreender, evoluiu no desafio e se fortaleceu na prática. Hoje, unimos produto artesanal, ambiente acolhedor e cuidado real em cada detalhe para transformar momentos simples em experiências memoráveis.
              </p>
              <Link to="/quem-somos">
                <Button variant="outline" className="font-sans">
                  Conheça nossa história
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={interiorSantaCruz} alt="Interior da Misturêra — ambiente acolhedor com plantas e iluminação natural" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <SectionHeading
            title="Como funciona"
            subtitle="Self-service descomplicado. Você no controle da sua experiência."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/50 text-xs font-sans font-medium uppercase tracking-wider">
                  Passo {i + 1}
                </span>
                <h3 className="font-serif text-lg font-semibold text-primary-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-primary-foreground/60 text-sm font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabores em Destaque */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionHeading
            title="Sabores em destaque"
            subtitle="Descubra nossos gelatos, sorbets e açaís artesanais."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFlavors.map((flavor, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
                <div className="bg-muted aspect-square flex items-center justify-center relative">
                  <span className="text-muted-foreground font-sans text-sm">Foto do sabor</span>
                  {flavor.featured && (
                    <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-sans font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Destaque
                    </span>
                  )}
                </div>
                <CardContent className="p-5">
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                    {flavor.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-1">{flavor.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/sabores">
              <Button variant="outline" className="font-sans">
                Ver todos os sabores
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nossas Unidades */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <SectionHeading
            title="Nossas unidades"
            subtitle="Encontre a Misturêra mais perto de você."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {units.map((unit, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-sm bg-warm-white">
                <img
                  src={i === 0 ? fachadaSantaCruz : gelatosImg}
                  alt={unit.name}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{unit.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{unit.hours}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <a href={unit.mapUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full font-sans">
                        <MapPin className="w-4 h-4 mr-1" /> Como chegar
                      </Button>
                    </a>
                    <a href={`https://wa.me/${unit.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full font-sans bg-secondary hover:bg-secondary/90">
                        <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                      </Button>
                    </a>
                    <Link to="/avalie" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full font-sans">
                        <Star className="w-4 h-4 mr-1" /> Avaliar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História - Resumo */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Nossa história"
              subtitle="Do sonho de criar algo único à realidade de uma marca que cresce com propósito."
            />
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              A Misturêra nasceu em dezembro de 2024, a partir da vontade de empreender e da oportunidade de trazer para a região um modelo de self-service acessível e atrativo. Hoje, cada unidade carrega essa essência — e cada sabor conta um pedaço dessa trajetória.
            </p>
            <Link to="/nossa-historia">
              <Button variant="outline" className="font-sans">
                Leia a história completa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Avalie sua Experiência CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <SectionHeading
            title="Avalie sua experiência"
            subtitle="Sua opinião nos ajuda a melhorar cada detalhe."
            light
          />
          <Link to="/avalie">
            <Button size="lg" className="bg-warm-white text-primary hover:bg-warm-white/90 font-sans text-base px-10">
              Avaliar uma unidade
              <Star className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Venha viver a experiência Misturêra
          </h2>
          <p className="font-sans text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Gelato artesanal, açaí de verdade e a liberdade de montar sua combinação perfeita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/unidades">
              <Button size="lg" className="bg-warm-white text-primary hover:bg-warm-white/90 font-sans text-base px-8 w-full sm:w-auto">
                Encontrar uma unidade
              </Button>
            </Link>
            <Link to="/sabores">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans text-base px-8 w-full sm:w-auto">
                Explorar sabores
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

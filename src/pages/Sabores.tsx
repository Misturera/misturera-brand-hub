import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Leaf } from "lucide-react";
import gelatosImg from "@/assets/gelatos-cubas.jpg";
import imgPistache from "@/assets/sabores/pistache.jpg";
import imgChocolateBelga from "@/assets/sabores/chocolate-belga.jpg";
import imgAcaiMorango from "@/assets/sabores/acai-morango.jpg";
import imgSorbetMorango from "@/assets/sabores/sorbet-morango.jpg";
import imgBaunilhaCaramelo from "@/assets/sabores/baunilha-caramelo.jpg";
import imgSorbetMaracuja from "@/assets/sabores/sorbet-maracuja-manga.jpg";
import imgCheesecake from "@/assets/sabores/cheesecake-frutas-vermelhas.jpg";
import imgLeiteNinho from "@/assets/sabores/leite-ninho.jpg";
import imgOreo from "@/assets/sabores/oreo.jpg";
import imgDoceDeLeite from "@/assets/sabores/doce-de-leite.jpg";
import imgPacoca from "@/assets/sabores/pacoca.jpg";
import imgSorbetFrutasVermelhas from "@/assets/sabores/sorbet-frutas-vermelhas.jpg";
import imgCafeComLeite from "@/assets/sabores/cafe-com-leite.jpg";
import imgSnickers from "@/assets/sabores/snickers.jpg";
import imgRafaello from "@/assets/sabores/rafaello.jpg";
import imgPrestigio from "@/assets/sabores/prestigio.jpg";
import imgChocomenta from "@/assets/sabores/chocomenta.jpg";
import imgBanoffee from "@/assets/sabores/banoffee.jpg";
import imgUvaFrutasVermelhas from "@/assets/sabores/uva-frutas-vermelhas.jpg";
import imgAcaiBanana from "@/assets/sabores/acai-banana.jpg";
import imgAcaiMaracuja from "@/assets/sabores/acai-maracuja.jpg";
import imgAcaiGuarana from "@/assets/sabores/acai-guarana.jpg";

const flavorImages: Record<string, string> = {
  "Pistache": imgPistache,
  "Chocolate Belga": imgChocolateBelga,
  "Açaí com Morango": imgAcaiMorango,
  "Sorbet de Morango": imgSorbetMorango,
  "Baunilha com Caramelo Salgado": imgBaunilhaCaramelo,
  "Sorbet de Maracujá com Manga": imgSorbetMaracuja,
  "Cheesecake de Frutas Vermelhas": imgCheesecake,
  "Leite Ninho": imgLeiteNinho,
  "Oreo": imgOreo,
  "Doce de Leite Mineiro": imgDoceDeLeite,
  "Paçoca": imgPacoca,
  "Sorbet de Frutas Vermelhas": imgSorbetFrutasVermelhas,
  "Café com Leite": imgCafeComLeite,
  "Snickers": imgSnickers,
  "Rafaello": imgRafaello,
  "Prestígio": imgPrestigio,
  "Chocomenta": imgChocomenta,
  "Banoffee": imgBanoffee,
  "Uva com Frutas Vermelhas": imgUvaFrutasVermelhas,
  "Açaí com Banana": imgAcaiBanana,
  "Açaí com Maracujá": imgAcaiMaracuja,
  "Açaí com Guaraná": imgAcaiGuarana,
};

const categories = ["Todos", "Gelato", "Açaí", "Sorbet"];

const flavors = [
  // Gelatos
  { name: "Leite Ninho", category: "Gelato", desc: "Cremosidade do leite em pó que todo mundo ama.", featured: false, vegan: false },
  { name: "Oreo", category: "Gelato", desc: "Pedaços de biscoito Oreo em gelato cremoso.", featured: false, vegan: false },
  { name: "Cheesecake de Frutas Vermelhas", category: "Gelato", desc: "Inspirado no clássico cheesecake, com frutas vermelhas de verdade.", featured: true, vegan: false },
  { name: "Pistache", category: "Gelato", desc: "Pistache torrado, cremosidade intensa e aroma marcante.", featured: true, vegan: false },
  { name: "Chocolate Belga", category: "Gelato", desc: "Cacau nobre com amargor elegante e textura aveludada.", featured: true, vegan: false },
  { name: "Paçoca", category: "Gelato", desc: "Amendoim torrado com textura cremosa e toque brasileiro.", featured: false, vegan: false },
  { name: "Snickers", category: "Gelato", desc: "Caramelo, amendoim e chocolate em harmonia perfeita.", featured: false, vegan: false },
  { name: "Rafaello", category: "Gelato", desc: "Coco ralado, amêndoas e leite condensado.", featured: false, vegan: false },
  { name: "Prestígio", category: "Gelato", desc: "Chocolate com coco, um clássico irresistível.", featured: false, vegan: false },
  { name: "Chocomenta", category: "Gelato", desc: "Chocolate intenso com toque refrescante de menta.", featured: false, vegan: false },
  { name: "Doce de Leite Mineiro", category: "Gelato", desc: "Receita artesanal, caramelizado no ponto certo.", featured: false, vegan: false },
  { name: "Baunilha com Caramelo Salgado", category: "Gelato", desc: "Fava natural com caramelo salgado artesanal.", featured: true, vegan: false },
  { name: "Banoffee", category: "Gelato", desc: "Banana, doce de leite e biscoito em perfeita harmonia.", featured: false, vegan: false },
  { name: "Uva com Frutas Vermelhas", category: "Gelato", desc: "Mix frutado com acidez equilibrada.", featured: false, vegan: false },
  { name: "Café com Leite", category: "Gelato", desc: "Café torrado com a suavidade do leite.", featured: false, vegan: false },

  // Açaís
  { name: "Açaí com Morango", category: "Açaí", desc: "Polpa pura com morango. Sem leite, sem gordura, vegano.", featured: true, vegan: true },
  { name: "Açaí com Banana", category: "Açaí", desc: "Polpa pura com banana. Sem leite, sem gordura, vegano.", featured: false, vegan: true },
  { name: "Açaí com Maracujá", category: "Açaí", desc: "Polpa pura com maracujá. Sem leite, sem gordura, vegano.", featured: false, vegan: true },
  { name: "Açaí com Guaraná", category: "Açaí", desc: "Clássico brasileiro com toque energético. Sem leite, sem gordura, vegano.", featured: false, vegan: true },

  // Sorbets
  { name: "Sorbet de Morango", category: "Sorbet", desc: "Frescor do morango puro. Sem leite, sem gordura, vegano.", featured: false, vegan: true },
  { name: "Sorbet de Maracujá com Manga", category: "Sorbet", desc: "Acidez tropical com doçura da manga. Sem leite, sem gordura, vegano.", featured: true, vegan: true },
  { name: "Sorbet de Frutas Vermelhas", category: "Sorbet", desc: "Mix de framboesa, amora e mirtilo. Sem leite, sem gordura, vegano.", featured: false, vegan: true },
];

export default function Sabores() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? flavors
    : flavors.filter((f) => f.category === activeCategory);

  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Nossos sabores
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Todos artesanais, todos com produção própria. Descubra seu favorito.
            </p>
            <p className="font-sans text-sm text-primary-foreground/50 mt-3">
              Cardápio atualizado em 08/04/2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Filtro */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="font-sans"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((flavor, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
                <div className="aspect-square overflow-hidden relative">
                  <img src={flavorImages[flavor.name] || gelatosImg} alt={flavor.name} className="w-full h-full object-cover" loading="lazy" />
                  {flavor.featured && (
                    <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-sans font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Destaque
                    </span>
                  )}
                  {flavor.vegan && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-sans font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Leaf className="w-3 h-3" /> Vegano
                    </span>
                  )}
                </div>
                <CardContent className="p-5">
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-muted-foreground">
                    {flavor.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-2">{flavor.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{flavor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

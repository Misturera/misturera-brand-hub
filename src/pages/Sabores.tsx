import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const categories = ["Todos", "Gelato", "Sorbet", "Açaí", "Edição Especial"];

const flavors = [
  { name: "Pistache Siciliano", category: "Gelato", desc: "Pistache italiano torrado, cremosidade intensa e aroma marcante.", featured: true },
  { name: "Chocolate Belga 70%", category: "Gelato", desc: "Cacau nobre com amargor elegante e textura aveludada.", featured: true },
  { name: "Baunilha de Madagascar", category: "Gelato", desc: "Fava natural, sabor puro e delicado.", featured: false },
  { name: "Doce de Leite Artesanal", category: "Gelato", desc: "Receita própria, caramelizado no ponto certo.", featured: false },
  { name: "Morango com Manjericão", category: "Sorbet", desc: "Frescor do morango com toque herbáceo surpreendente.", featured: true },
  { name: "Maracujá com Gengibre", category: "Sorbet", desc: "Acidez tropical com leve picância aromática.", featured: false },
  { name: "Limão Siciliano", category: "Sorbet", desc: "Refrescante, cítrico e levemente adocicado.", featured: false },
  { name: "Açaí Tradicional", category: "Açaí", desc: "Polpa pura do Pará, cremoso e encorpado.", featured: true },
  { name: "Açaí com Guaraná", category: "Açaí", desc: "Clássico brasileiro com toque energético.", featured: false },
  { name: "Tiramisù", category: "Edição Especial", desc: "Gelato inspirado no clássico italiano. Café, mascarpone e cacau.", featured: true },
  { name: "Paçoca Cremosa", category: "Edição Especial", desc: "Amendoim torrado com textura cremosa e toque brasileiro.", featured: false },
  { name: "Frutas Vermelhas", category: "Gelato", desc: "Mix de framboesa, amora e mirtilo com acidez equilibrada.", featured: false },
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

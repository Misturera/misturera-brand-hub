import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const units = [
  { id: "centro", name: "Misturêra Centro" },
  { id: "jardins", name: "Misturêra Jardins" },
];

const criteria = [
  { key: "atendimento", label: "Atendimento" },
  { key: "limpeza", label: "Limpeza" },
  { key: "organizacao", label: "Organização" },
  { key: "ambiente", label: "Ambiente" },
  { key: "qualidade", label: "Qualidade dos produtos" },
  { key: "experiencia", label: "Experiência geral" },
];

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="p-0.5 transition-colors"
          aria-label={`${star} estrelas`}
        >
          <Star
            className={`w-6 h-6 ${star <= value ? "text-amber-500 fill-amber-500" : "text-border"}`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Avalie() {
  const { toast } = useToast();
  const [selectedUnit, setSelectedUnit] = useState("");
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedUnit) {
      toast({ title: "Selecione uma unidade", variant: "destructive" });
      return;
    }

    const missingRatings = criteria.filter((c) => !ratings[c.key]);
    if (missingRatings.length > 0) {
      toast({ title: "Avalie todos os critérios", variant: "destructive" });
      return;
    }

    toast({ title: "Obrigado pela sua avaliação!", description: "Sua opinião é muito importante para nós." });
    setSelectedUnit("");
    setRatings({});
    setComment("");
  };

  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Avalie sua experiência
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Sua opinião nos ajuda a melhorar cada detalhe. Conte como foi sua visita.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Seleção de unidade */}
            <div>
              <SectionHeading title="Qual unidade você visitou?" className="mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {units.map((unit) => (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setSelectedUnit(unit.id)}
                    className={`p-4 rounded-lg border-2 font-sans text-sm font-medium transition-all ${
                      selectedUnit === unit.id
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border bg-warm-white text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {unit.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Critérios */}
            {selectedUnit && (
              <div className="space-y-5 animate-fade-in">
                <SectionHeading title="Como foi sua experiência?" className="mb-6" />
                {criteria.map((c) => (
                  <div key={c.key} className="flex items-center justify-between bg-warm-white rounded-lg p-4">
                    <span className="font-sans text-sm font-medium text-foreground">{c.label}</span>
                    <StarRating
                      value={ratings[c.key] || 0}
                      onChange={(v) => setRatings((prev) => ({ ...prev, [c.key]: v }))}
                    />
                  </div>
                ))}

                {/* Comentário */}
                <div>
                  <label className="font-sans text-sm font-medium text-foreground block mb-2">
                    Deixe um comentário (opcional)
                  </label>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Conte mais sobre sua experiência..."
                    className="bg-warm-white font-sans"
                    maxLength={500}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-sans text-base">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar avaliação
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}

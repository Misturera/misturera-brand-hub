import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5521976114309";

const contactCategories = [
  { id: "duvida", label: "Dúvida", emoji: "❓" },
  { id: "sugestao", label: "Sugestão", emoji: "💡" },
  { id: "reclamacao", label: "Reclamação", emoji: "📝" },
  { id: "elogio", label: "Elogio", emoji: "💚" },
];

export default function Contato() {
  const { toast } = useToast();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de falar com o Gelatiere da Misturêra.")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !name.trim() || !message.trim()) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    toast({ title: "Mensagem enviada!", description: "Retornaremos o mais breve possível." });
    setCategory("");
    setName("");
    setMessage("");
  };

  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Fale com o Gelatiere
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Tem algo para nos contar? Queremos ouvir você. Por trás de cada sabor existe alguém que se importa de verdade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* WhatsApp CTA */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Fale direto no WhatsApp
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Precisa de uma resposta rápida? Nosso canal de WhatsApp é o jeito mais direto
                de falar com a gente. Estamos prontos para ouvir, ajudar e conversar.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto font-sans text-base bg-secondary hover:bg-secondary/90">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </a>

              <div className="mt-10 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Por que falar com a gente?
                </h3>
                <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                  <li>• Sugestão de sabor? Queremos ouvir.</li>
                  <li>• Algo não saiu como esperado? Vamos resolver.</li>
                  <li>• Quer elogiar? Fazemos questão de agradecer.</li>
                  <li>• Dúvida sobre horário, localização ou cardápio? É só perguntar.</li>
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ou envie uma mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-sans text-sm font-medium text-foreground block mb-2">
                    Tipo de contato
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {contactCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`p-3 rounded-lg border-2 font-sans text-sm font-medium transition-all flex items-center gap-2 ${
                          category === cat.id
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-border bg-warm-white text-muted-foreground hover:border-primary/30"
                        }`}
                      >
                        <span>{cat.emoji}</span>
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-sans text-sm font-medium text-foreground block mb-2">
                    Seu nome
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="bg-warm-white font-sans"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="font-sans text-sm font-medium text-foreground block mb-2">
                    Sua mensagem
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva aqui..."
                    className="bg-warm-white font-sans min-h-[120px]"
                    maxLength={1000}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-sans text-base">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

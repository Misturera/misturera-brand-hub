import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Sparkles, Gift, ArrowRight, UserPlus, Loader2 } from "lucide-react";

const MISTURERACHECK_SUPABASE_URL = "https://fshbdwquqwtbedjchuyb.supabase.co";
const MISTURERACHECK_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaGJkd3F1cXd0YmVkamNodXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MzQwNDAsImV4cCI6MjA5MTAxMDA0MH0.XC3cC6H3JBkFPN1Fyep6mbA3I-kum7gsJHYkLUJgpGA";

function maskCpf(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

const steps = [
  {
    icon: ShoppingCart,
    title: "Compre",
    desc: "A cada R$ 1,00 você ganha 1 ponto.",
  },
  {
    icon: Sparkles,
    title: "Acumule",
    desc: "Pontos válidos por 60 dias, renováveis a cada compra.",
  },
  {
    icon: Gift,
    title: "Resgate",
    desc: "10 pontos = R$ 1,00 de desconto.",
  },
];

const benefits = [
  "Descontos exclusivos para membros",
  "Ofertas e lançamentos em primeira mão",
  "Ranking dos melhores clientes",
  "Avalie sua experiência e ganhe pontos bônus",
];

export default function ClubePage() {
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    const cpfLimpo = cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      setError("CPF inválido.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${MISTURERACHECK_SUPABASE_URL}/rest/v1/customers?cpf=eq.${cpfLimpo}&select=token`,
        {
          headers: {
            apikey: MISTURERACHECK_ANON_KEY,
            Authorization: `Bearer ${MISTURERACHECK_ANON_KEY}`,
          },
        },
      );
      const data = await response.json();
      if (Array.isArray(data) && data[0]?.token) {
        window.location.href = `https://mistureracheck.com/cliente/${data[0].token}`;
      } else {
        setError("CPF não encontrado. Cadastre-se em uma de nossas unidades ou pelo link abaixo.");
      }
    } catch {
      setError("Não foi possível consultar agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/40 mb-6 border border-[#C9A84C]/40">
            <Star className="w-10 h-10 text-[#C9A84C] fill-[#C9A84C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Clube Misturêra</h1>
          <p className="font-sans text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Acumule pontos a cada compra e troque por descontos.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <SectionHeading title="Como funciona" subtitle="Três passos simples para aproveitar." />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-border/60">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary mb-5">
                    <Icon className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{title}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acessar pontos */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-2xl">
          <SectionHeading
            title="Acessar meus pontos"
            subtitle="Digite seu CPF para consultar seu saldo e histórico."
          />
          <Card className="border-border/60">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="cpf" className="font-sans text-foreground mb-2 block">
                    Digite seu CPF
                  </Label>
                  <Input
                    id="cpf"
                    inputMode="numeric"
                    placeholder="___.___.___-__"
                    value={cpf}
                    onChange={(e) => setCpf(maskCpf(e.target.value))}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="bg-background"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Consultando...
                    </>
                  ) : (
                    <>
                      Ver meus pontos <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                {error && (
                  <p className="font-sans text-sm text-destructive text-center" role="alert">
                    {error}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cadastro rápido */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ainda não é cliente?
          </h2>
          <p className="font-sans text-muted-foreground mb-8">
            Cadastre-se rapidamente e comece a acumular pontos hoje mesmo.
          </p>
          <a
            href="https://mistureracheck.com/pdv/cliente/cadastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#C9A84C] hover:bg-[#b8993f] text-primary font-sans"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Cadastre-se aqui
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl">
          <SectionHeading
            light
            title="Benefícios do Clube"
            subtitle="Tudo o que você ganha ao fazer parte."
          />
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 bg-secondary/30 border border-[#C9A84C]/30 rounded-lg p-5"
              >
                <Star className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C] mt-0.5 shrink-0" />
                <span className="font-sans text-primary-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

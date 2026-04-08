import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, MessageCircle, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "5521970344545";

const units = [
  {
    name: "Misturêra Santa Cruz da Serra",
    address: "Rua Rio Grande do Norte, nº 8, Santa Cruz da Serra, Duque de Caxias – RJ",
    reference: "Ao lado do Subway, no retorno em frente ao Dom.",
    phone: "(21) 97034-4545",
    whatsapp: WHATSAPP_NUMBER,
    mapUrl: "https://maps.google.com/?q=Rua+Rio+Grande+do+Norte+8+Santa+Cruz+da+Serra+Duque+de+Caxias+RJ",
    hours: {
      "Segunda a Quinta": "13h às 22h",
      "Sexta, Sábado e Domingo": "13h às 23h",
    },
  },
  {
    name: "Misturêra Xerém",
    address: "Rua Pastor Manoel Avelino de Souza, nº 15, Mantiqueira, Xerém, Duque de Caxias – RJ",
    reference: "Ao lado dos Correios, logo no início da Praça da Mantiqueira.",
    phone: "(21) 97034-4545",
    whatsapp: WHATSAPP_NUMBER,
    mapUrl: "https://maps.google.com/?q=Rua+Pastor+Manoel+Avelino+de+Souza+15+Xerém+Duque+de+Caxias+RJ",
    hours: {
      "Segunda a Quinta": "13h às 22h",
      "Sexta, Sábado e Domingo": "13h às 23h",
    },
  },
];

export default function Unidades() {
  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Nossas unidades
            </h1>
            <p className="font-sans text-lg text-primary-foreground/70 leading-relaxed">
              Encontre a Misturêra mais perto de você. Cada unidade oferece a mesma experiência premium com produção própria.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {units.map((unit, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-md bg-warm-white">
                <div className="bg-muted aspect-video flex items-center justify-center">
                  <span className="text-muted-foreground font-sans text-sm">Foto da unidade</span>
                </div>
                <CardContent className="p-6 md:p-8 space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-foreground">{unit.name}</h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-sm text-muted-foreground">{unit.address}</span>
                        <p className="font-sans text-xs text-muted-foreground/70 mt-0.5">Ref.: {unit.reference}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-muted-foreground">{unit.phone}</span>
                    </div>
                  </div>

                  {/* Horários */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-foreground" />
                      <span className="font-sans text-sm font-semibold text-foreground">Horário de funcionamento</span>
                    </div>
                    <div className="space-y-1.5">
                      {Object.entries(unit.hours).map(([day, time]) => (
                        <div key={day} className="flex justify-between font-sans text-sm">
                          <span className="text-muted-foreground">{day}</span>
                          <span className="text-foreground font-medium">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <a href={unit.mapUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full font-sans">
                        <MapPin className="w-4 h-4 mr-1.5" /> Como chegar
                      </Button>
                    </a>
                    <a href={`https://wa.me/${unit.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full font-sans bg-secondary hover:bg-secondary/90">
                        <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
                      </Button>
                    </a>
                    <Link to="/avalie">
                      <Button variant="outline" className="w-full font-sans">
                        <Star className="w-4 h-4 mr-1.5" /> Avaliar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

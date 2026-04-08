import { Link } from "react-router-dom";
import { MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "5500000000000";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Misturêra</h3>
            <p className="text-primary-foreground/70 text-sm font-sans leading-relaxed">
              Gelato e açaí self-service com produção própria. Sabor de verdade e experiência feita para surpreender.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Navegação</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Quem Somos", path: "/quem-somos" },
                { label: "Nossa História", path: "/nossa-historia" },
                { label: "Unidades", path: "/unidades" },
                { label: "Sabores", path: "/sabores" },
                { label: "Como Funciona", path: "/como-funciona" },
                { label: "Avalie", path: "/avalie" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-sans transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Unidades */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Unidades</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/60 shrink-0" />
                <div>
                  <p className="text-sm font-sans font-medium">Misturêra Centro</p>
                  <p className="text-xs font-sans text-primary-foreground/60">Rua das Flores, 123 — Centro</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/60 shrink-0" />
                <div>
                  <p className="text-sm font-sans font-medium">Misturêra Jardins</p>
                  <p className="text-xs font-sans text-primary-foreground/60">Av. das Palmeiras, 456 — Jardins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm font-sans text-primary-foreground/70">Seg-Dom: 12h às 22h</span>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-sans">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/misturera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-sans">@misturera</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-primary-foreground/50">
            © {new Date().getFullYear()} Misturêra. Todos os direitos reservados.
          </p>
          <Link to="/privacidade" className="text-xs font-sans text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

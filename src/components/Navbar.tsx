import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal-branco.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Quem Somos", path: "/quem-somos" },
  { label: "Nossa História", path: "/nossa-historia" },
  { label: "Unidades", path: "/unidades" },
  { label: "Sabores", path: "/sabores" },
  { label: "Como Funciona", path: "/como-funciona" },
  { label: "Avalie", path: "/avalie" },
  { label: "Contato", path: "/contato" },
];

const WHATSAPP_NUMBER = "5521970344545";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a Misturêra.";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logoHorizontal} alt="Misturêra" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-sans transition-colors rounded-md ${
                location.pathname === link.path
                  ? "text-primary-foreground bg-secondary"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="ml-3 bg-green-600 hover:bg-green-700 text-primary-foreground font-sans">
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-secondary pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-sans rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-foreground bg-secondary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 px-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-primary-foreground font-sans">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

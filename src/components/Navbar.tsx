import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal-branco.png";
import { IcMenu, IcWpp } from "@/components/icons";
import { WPP_GERAL } from "@/data/site";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Quem somos", to: "/quem-somos" },
  { label: "Nossa história", to: "/nossa-historia" },
  { label: "Sabores", to: "/sabores" },
  { label: "Como funciona", to: "/como-funciona" },
  { label: "Unidades", to: "/unidades" },
  { label: "Avalie", to: "/avalie" },
  { label: "Clube", to: "/clube" },
  { label: "Contato", to: "/contato" },
];

export function Navbar() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="wrap header-in">
        <Link to="/" className="logo-link" aria-label="Misturêra">
          <img className="logo-img" src={logoHorizontal} alt="Misturêra" />
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? "ativa" : ""}>
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-wpp btn-sm" to={WPP_GERAL}>
            WhatsApp
          </Link>
        </nav>

        <button
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <IcMenu />
        </button>
      </div>

      <div className={`mob-menu${aberto ? " aberto" : ""}`}>
        <div className="wrap">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={pathname === l.to ? "ativa" : ""}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link className="btn btn-wpp" to={WPP_GERAL} onClick={() => setAberto(false)}>
            <IcWpp />
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}

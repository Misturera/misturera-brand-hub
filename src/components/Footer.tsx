import { Link } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal-branco.png";
import { IcPin, IcRelogio, IcWpp, IcInstagram } from "@/components/icons";
import { lojas, HORARIO_DETALHADO } from "@/data/lojas";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, urlWpp } from "@/data/site";

const navLinks = [
  { label: "Quem somos", to: "/quem-somos" },
  { label: "Nossa história", to: "/nossa-historia" },
  { label: "Sabores", to: "/sabores" },
  { label: "Como funciona", to: "/como-funciona" },
  { label: "Unidades", to: "/unidades" },
  { label: "Avalie", to: "/avalie" },
  { label: "Clube", to: "/clube" },
];

function enderecoCurto(endereco: string) {
  return endereco.split(",").slice(0, 2).join(",").trim();
}

export function Footer() {
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="rodape-in">
          <div>
            <Link to="/" className="logo-link" aria-label="Misturêra">
              <img className="logo-img" src={logoHorizontal} alt="Misturêra" style={{ height: 32 }} />
            </Link>
            <p className="rodape-sobre">
              Gelato e açaí self-service com produção própria. Sabor de verdade e experiência feita
              para surpreender.
            </p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Unidades</h4>
            <ul>
              {lojas.map((loja) => (
                <li key={loja.id} className="ritem">
                  <IcPin />
                  <span>
                    <b>{loja.nome}</b>
                    {enderecoCurto(loja.endereco)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li className="ritem">
                <IcRelogio />
                <span>
                  {HORARIO_DETALHADO.map((h, i) => (
                    <span key={i} style={{ display: "block" }}>
                      {h.dias === "Segunda a Quinta" ? "Seg–Qui" : "Sex–Dom"}: {h.horas}
                    </span>
                  ))}
                </span>
              </li>
              {lojas
                .filter((l) => l.whatsapp)
                .map((loja) => (
                  <li key={loja.id}>
                    <a href={urlWpp(loja.whatsapp)!} target="_blank" rel="noopener noreferrer" className="ritem">
                      <IcWpp />
                      <span>
                        {loja.telefoneExibicao} · {loja.nome}
                      </span>
                    </a>
                  </li>
                ))}
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="ritem">
                  <IcInstagram />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rodape-base">
          <span>© {new Date().getFullYear()} Misturêra. Todos os direitos reservados.</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  );
}

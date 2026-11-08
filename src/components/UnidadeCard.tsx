import { Link } from "react-router-dom";
import type { Loja } from "@/data/lojas";
import { HORARIO_DETALHADO } from "@/data/lojas";
import { urlWpp } from "@/data/site";
import { IcPin, IcTelefone, IcRelogio, IcWpp, IcEstrela } from "@/components/icons";

export function UnidadeCard({ loja }: { loja: Loja }) {
  const wpp = urlWpp(loja.whatsapp);
  return (
    <div className="unidade">
      <div className="unidade-foto">
        <img src={loja.foto} alt={loja.nome} loading="lazy" />
      </div>
      <div className="unidade-corpo">
        {loja.emBreve && (
          <span style={{ display: "inline-block", background: "var(--dourado)", color: "var(--verde-900)", fontWeight: 600, fontSize: 12, padding: "4px 10px", borderRadius: 999, marginBottom: 8 }}>
            {loja.emBreve}
          </span>
        )}
        <h3>{loja.nome}</h3>

        <div className="ulinha">
          <IcPin />
          <span>
            {loja.endereco}
            {loja.referencia && <span className="uref">Ref.: {loja.referencia}</span>}
          </span>
        </div>

        <div className="ulinha">
          <IcTelefone />
          {wpp ? (
            <a href={wpp} target="_blank" rel="noopener noreferrer">
              {loja.telefoneExibicao}
            </a>
          ) : (
            <span>{loja.emBreve ? "A definir" : "WhatsApp em breve"}</span>
          )}
        </div>

        <div className="uhoras">
          <div className="uhoras-t">
            <IcRelogio />
            Horário de funcionamento
          </div>
          {loja.emBreve ? (
            <div className="uhoras-row"><span>A definir</span></div>
          ) : HORARIO_DETALHADO.map((h, i) => (
            <div className="uhoras-row" key={i}>
              <span>{h.dias}</span>
              <span>{h.horas}</span>
            </div>
          ))}
        </div>

        <div className="uacoes">
          <a className="btn btn-linha btn-sm" href={loja.mapa} target="_blank" rel="noopener noreferrer">
            <IcPin />
            Como chegar
          </a>
          {wpp && (
            <a className="btn btn-wpp btn-sm" href={wpp} target="_blank" rel="noopener noreferrer">
              <IcWpp />
              WhatsApp
            </a>
          )}
          {!loja.emBreve && (
            <Link className="btn btn-linha btn-sm" to="/avalie">
              <IcEstrela />
              Avaliar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

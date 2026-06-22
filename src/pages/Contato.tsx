import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Toast } from "@/components/Toast";
import { IcPin, IcTelefone, IcRelogio, IcWpp } from "@/components/icons";
import { lojas, HORARIO_RESUMO } from "@/data/lojas";
import { urlWpp } from "@/data/site";

const assuntos = [
  { id: "duvida", label: "❓ Dúvida" },
  { id: "sugestao", label: "💡 Sugestão" },
  { id: "reclamacao", label: "📝 Reclamação" },
  { id: "elogio", label: "💚 Elogio" },
];

export default function Contato() {
  const [assunto, setAssunto] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState(false);

  const enviar = () => {
    // TODO(backend): integrar envio da mensagem. Sem backend definido no
    // escopo "apresentação". Payload: { assunto, nome, msg }
    setToast(true);
    setTimeout(() => setToast(false), 2800);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Fale com o Gelatiere"
        titulo="Queremos ouvir você"
        texto="Por trás de cada sabor existe alguém que se importa de verdade."
      />

      <section className="sec" id="lojas">
        <div className="wrap">
          <div className="contato-grid">
            <div>
              <div className="sec-head esq" style={{ marginBottom: 22 }}>
                <p className="eyebrow-d">WhatsApp das lojas</p>
                <h2 style={{ fontSize: 26 }}>Fale direto com a unidade</h2>
              </div>
              <div className="lojas">
                {lojas.map((l) => {
                  const wpp = urlWpp(l.whatsapp);
                  return (
                    <div className="loja" key={l.id}>
                      <h3>{l.nomeCompleto}</h3>
                      <div className="ulinha">
                        <IcPin />
                        <span>{l.endereco}</span>
                      </div>
                      <div className="ulinha">
                        <IcTelefone />
                        {wpp ? (
                          <a href={wpp} target="_blank" rel="noopener noreferrer">
                            {l.telefoneExibicao}
                          </a>
                        ) : (
                          <span>WhatsApp em breve</span>
                        )}
                      </div>
                      <div className="ulinha">
                        <IcRelogio />
                        <span>{HORARIO_RESUMO}</span>
                      </div>
                      <div className="uacoes">
                        {wpp && (
                          <a className="btn btn-wpp btn-sm" href={wpp} target="_blank" rel="noopener noreferrer">
                            <IcWpp />
                            Chamar no WhatsApp
                          </a>
                        )}
                        <a className="btn btn-linha btn-sm" href={l.mapa} target="_blank" rel="noopener noreferrer">
                          <IcPin />
                          Como chegar
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="porque">
                <h3>Por que falar com a gente?</h3>
                <ul>
                  <li>Sugestão de sabor? Queremos ouvir.</li>
                  <li>Algo não saiu como esperado? Vamos resolver.</li>
                  <li>Quer elogiar? Fazemos questão de agradecer.</li>
                  <li>Dúvida sobre horário, localização ou cardápio? É só perguntar.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="sec-head esq" style={{ marginBottom: 22 }}>
                <p className="eyebrow-d">Ou envie uma mensagem</p>
                <h2 style={{ fontSize: 26 }}>Deixe seu recado</h2>
              </div>
              <div className="form-card">
                <div className="grupo">
                  <label className="campo-label">Assunto</label>
                  <div className="opcoes">
                    {assuntos.map((a) => (
                      <button
                        key={a.id}
                        className={`opcao${assunto === a.id ? " on" : ""}`}
                        onClick={() => setAssunto(a.id)}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grupo">
                  <label className="campo-label" htmlFor="c-nome">
                    Seu nome
                  </label>
                  <input
                    className="campo"
                    id="c-nome"
                    placeholder="Como podemos te chamar?"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="grupo">
                  <label className="campo-label" htmlFor="c-msg">
                    Sua mensagem
                  </label>
                  <textarea
                    className="campo"
                    id="c-msg"
                    placeholder="Escreva aqui..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <button className="btn btn-verde btn-cheio" onClick={enviar}>
                  Enviar mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast mensagem="Mensagem registrada! Em breve entraremos em contato." visivel={toast} />
    </Layout>
  );
}

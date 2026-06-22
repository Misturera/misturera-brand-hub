import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { IcEstrela, IcCheck } from "@/components/icons";
import { lojas } from "@/data/lojas";

const criterios = [
  { id: "atendimento", label: "Atendimento" },
  { id: "limpeza", label: "Limpeza" },
  { id: "organizacao", label: "Organização" },
  { id: "ambiente", label: "Ambiente" },
  { id: "qualidade", label: "Qualidade dos produtos" },
  { id: "experiencia", label: "Experiência geral" },
];

export default function Avalie() {
  const [unidade, setUnidade] = useState<string | null>(null);
  const [notas, setNotas] = useState<Record<string, number>>({});
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  const setNota = (crit: string, n: number) => setNotas((p) => ({ ...p, [crit]: n }));

  const enviar = () => {
    // TODO(backend): persistir a avaliação. Nenhuma tabela definida no escopo
    // "apresentação"; integrar quando o backend estiver disponível.
    // Payload pronto: { unidade, notas, comentario }
    setEnviado(true);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Avalie sua experiência"
        titulo="Sua opinião nos ajuda a melhorar"
        texto="Conte como foi sua visita — cada detalhe importa."
      />

      <section className="sec">
        <div className="wrap">
          <div className="form-card">
            {enviado ? (
              <div className="ok-box">
                <IcCheck />
                <h3>Avaliação enviada!</h3>
                <p>Obrigado por compartilhar sua experiência com a gente.</p>
              </div>
            ) : (
              <>
                <p className="campo-label">Qual unidade você visitou?</p>
                <div className="opcoes" style={{ marginBottom: 22 }}>
                  {lojas.map((l) => (
                    <button
                      key={l.id}
                      className={`opcao${unidade === l.id ? " on" : ""}`}
                      onClick={() => setUnidade(l.id)}
                    >
                      {l.nome}
                    </button>
                  ))}
                </div>

                {unidade && (
                  <div>
                    <p className="campo-label">Como foi sua experiência?</p>
                    {criterios.map((c) => (
                      <div className="criterio" key={c.id}>
                        <span>{c.label}</span>
                        <div className="estrelas">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <button
                              key={n}
                              className={`estrela${(notas[c.id] || 0) >= n ? " on" : ""}`}
                              aria-label={`${n} ${n === 1 ? "estrela" : "estrelas"}`}
                              onClick={() => setNota(c.id, n)}
                            >
                              <IcEstrela />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="grupo" style={{ marginTop: 16 }}>
                      <label className="campo-label" htmlFor="aval-com">
                        Comentário (opcional)
                      </label>
                      <textarea
                        className="campo"
                        id="aval-com"
                        placeholder="Conte mais sobre sua experiência..."
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                      />
                    </div>

                    <button className="btn btn-verde btn-cheio" onClick={enviar}>
                      Enviar avaliação
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

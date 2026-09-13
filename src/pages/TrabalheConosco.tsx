import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { IcCheck } from "@/components/icons";
import { supabase } from "@/integrations/supabase/client";
import {
  UNIDADES_VAGA,
  VAGAS,
  TURNOS,
  TRANSPORTES,
  INICIOS,
  TEXTO_LGPD,
  CURRICULO_TIPOS,
  CURRICULO_MAX_BYTES,
} from "@/data/recrutamento";

function maskWpp(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{1,2})/, "($1");
  if (d.length <= 7) return d.replace(/(\d{2})(\d+)/, "($1) $2");
  return d.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
}

type Erros = Record<string, string>;

export default function TrabalheConosco() {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bairroCidade, setBairroCidade] = useState("");
  const [unidade, setUnidade] = useState("");
  const [vaga, setVaga] = useState("");

  const [fds, setFds] = useState<boolean | null>(null);
  const [turnos, setTurnos] = useState<string[]>([]);
  const [transporte, setTransporte] = useState("");
  const [inicio, setInicio] = useState("");

  const [experiencia, setExperiencia] = useState<boolean | null>(null);
  const [ultimoTrabalho, setUltimoTrabalho] = useState("");

  const [motivacao, setMotivacao] = useState("");
  const [situacao, setSituacao] = useState("");
  const [rotina, setRotina] = useState("");

  const [curriculo, setCurriculo] = useState<File | null>(null);
  const [consentimento, setConsentimento] = useState(false);

  const [erros, setErros] = useState<Erros>({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erroGeral, setErroGeral] = useState<string | null>(null);

  const toggleTurno = (t: string) =>
    setTurnos((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const validar = (): Erros => {
    const e: Erros = {};
    if (!nome.trim()) e.nome = "Informe seu nome completo.";
    if (!nascimento) e.nascimento = "Informe sua data de nascimento.";
    if (whatsapp.replace(/\D/g, "").length !== 11)
      e.whatsapp = "Informe um WhatsApp válido com DDD.";
    if (!bairroCidade.trim()) e.bairroCidade = "Informe seu bairro e cidade.";
    if (!unidade) e.unidade = "Escolha a unidade de interesse.";
    if (!vaga) e.vaga = "Escolha a vaga de interesse.";
    if (fds === null) e.fds = "Responda sobre fins de semana e feriados.";
    if (turnos.length === 0) e.turnos = "Selecione ao menos um turno.";
    if (!transporte) e.transporte = "Informe como chegaria até a unidade.";
    if (!inicio) e.inicio = "Informe quando pode começar.";
    if (experiencia === null) e.experiencia = "Responda sobre sua experiência.";
    if (!motivacao.trim()) e.motivacao = "Esta resposta é obrigatória.";
    if (!situacao.trim()) e.situacao = "Esta resposta é obrigatória.";
    if (!rotina.trim()) e.rotina = "Esta resposta é obrigatória.";
    if (curriculo) {
      if (!CURRICULO_TIPOS.includes(curriculo.type))
        e.curriculo = "Envie um arquivo PDF, JPG ou PNG.";
      else if (curriculo.size > CURRICULO_MAX_BYTES)
        e.curriculo = "O arquivo deve ter no máximo 5MB.";
    }
    if (!consentimento) e.consentimento = "É necessário autorizar o uso dos dados.";
    return e;
  };

  const enviar = async () => {
    if (enviando) return;
    setErroGeral(null);
    const e = validar();
    setErros(e);
    if (Object.keys(e).length > 0) return;

    setEnviando(true);
    try {
      let curriculoUrl: string | null = null;
      if (curriculo) {
        const ext = curriculo.name.split(".").pop()?.toLowerCase() || "pdf";
        const caminho = `${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("curriculos")
          .upload(caminho, curriculo, { contentType: curriculo.type });
        if (upErr) throw upErr;
        curriculoUrl = caminho;
      }

      const candidatoId = crypto.randomUUID();
      const { error } = await supabase.from("candidatos").insert({
        id: candidatoId,
        nome_completo: nome.trim(),
        data_nascimento: nascimento,
        whatsapp: whatsapp.replace(/\D/g, ""),
        bairro_cidade: bairroCidade.trim(),
        unidade_interesse: unidade,
        vaga_interesse: vaga,
        trabalha_fim_de_semana: fds as boolean,
        turnos,
        transporte,
        disponibilidade_inicio: inicio,
        tem_experiencia: experiencia as boolean,
        ultimo_trabalho: ultimoTrabalho.trim() || null,
        motivacao: motivacao.trim(),
        situacao_cliente: situacao.trim(),
        perfil_rotina: rotina.trim(),
        curriculo_url: curriculoUrl,
        consentimento_lgpd: true,
        status: "novo",
      });
      if (error) throw error;

      // Avisa o sistema de RH na hora (não bloqueia a confirmação ao candidato)
      supabase.functions
        .invoke("notificar-rh", { body: { id: candidatoId } })
        .catch(() => undefined);

      setEnviado(true);

    } catch {
      setErroGeral("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setEnviando(false);
    }
  };

  const Erro = ({ campo }: { campo: string }) =>
    erros[campo] ? <p className="erro-campo">{erros[campo]}</p> : null;

  return (
    <Layout>
      <PageHero
        eyebrow="Trabalhe conosco"
        titulo="Faça parte do time Misturêra"
        texto="Preencha o formulário abaixo. Se o seu perfil combinar com a gente, entramos em contato."
      />

      <section className="sec">
        <div className="wrap">
          <div className="form-card">
            {enviado ? (
              <div className="ok-box">
                <IcCheck />
                <h3>Recebemos sua candidatura!</h3>
                <p>Se o seu perfil avançar, entraremos em contato pelo WhatsApp.</p>
              </div>
            ) : (
              <>
                <h2 className="bloco-titulo">Seus dados</h2>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-nome">Nome completo</label>
                  <input className="campo" id="r-nome" value={nome} placeholder="Seu nome completo"
                    onChange={(ev) => setNome(ev.target.value)} maxLength={120} />
                  <Erro campo="nome" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-nasc">Data de nascimento</label>
                  <input className="campo" id="r-nasc" type="date" value={nascimento}
                    onChange={(ev) => setNascimento(ev.target.value)} />
                  <Erro campo="nascimento" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-wpp">WhatsApp</label>
                  <input className="campo" id="r-wpp" inputMode="numeric" placeholder="(21) 90000-0000"
                    value={whatsapp} onChange={(ev) => setWhatsapp(maskWpp(ev.target.value))} />
                  <Erro campo="whatsapp" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-local">Bairro e cidade onde mora</label>
                  <input className="campo" id="r-local" placeholder="Ex.: Xerém, Duque de Caxias"
                    value={bairroCidade} onChange={(ev) => setBairroCidade(ev.target.value)} maxLength={120} />
                  <Erro campo="bairroCidade" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-unid">Unidade de interesse</label>
                  <select className="campo" id="r-unid" value={unidade} onChange={(ev) => setUnidade(ev.target.value)}>
                    <option value="">Selecione</option>
                    {UNIDADES_VAGA.map((u) => <option key={u} value={u}>{u}</option>)}
                  </select>
                  <Erro campo="unidade" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-vaga">Vaga de interesse</label>
                  <select className="campo" id="r-vaga" value={vaga} onChange={(ev) => setVaga(ev.target.value)}>
                    <option value="">Selecione</option>
                    {VAGAS.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <Erro campo="vaga" />
                </div>

                <h2 className="bloco-titulo">Disponibilidade</h2>

                <div className="grupo">
                  <p className="campo-label">Pode trabalhar fins de semana e feriados?</p>
                  <div className="opcoes">
                    <button type="button" className={`opcao${fds === true ? " on" : ""}`} onClick={() => setFds(true)}>Sim</button>
                    <button type="button" className={`opcao${fds === false ? " on" : ""}`} onClick={() => setFds(false)}>Não</button>
                  </div>
                  <Erro campo="fds" />
                </div>

                <div className="grupo">
                  <p className="campo-label">Turnos disponíveis</p>
                  <div className="opcoes">
                    {TURNOS.map((t) => (
                      <button type="button" key={t} className={`opcao${turnos.includes(t) ? " on" : ""}`}
                        aria-pressed={turnos.includes(t)} onClick={() => toggleTurno(t)}>{t}</button>
                    ))}
                  </div>
                  <Erro campo="turnos" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-transp">Como chegaria até a unidade?</label>
                  <select className="campo" id="r-transp" value={transporte} onChange={(ev) => setTransporte(ev.target.value)}>
                    <option value="">Selecione</option>
                    {TRANSPORTES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <Erro campo="transporte" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-inicio">Quando pode começar?</label>
                  <select className="campo" id="r-inicio" value={inicio} onChange={(ev) => setInicio(ev.target.value)}>
                    <option value="">Selecione</option>
                    {INICIOS.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                  <Erro campo="inicio" />
                </div>

                <h2 className="bloco-titulo">Experiência</h2>

                <div className="grupo">
                  <p className="campo-label">Já trabalhou com atendimento ao público ou alimentação?</p>
                  <div className="opcoes">
                    <button type="button" className={`opcao${experiencia === true ? " on" : ""}`} onClick={() => setExperiencia(true)}>Sim</button>
                    <button type="button" className={`opcao${experiencia === false ? " on" : ""}`} onClick={() => setExperiencia(false)}>Não</button>
                  </div>
                  <Erro campo="experiencia" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-ult">Último trabalho: função, local e tempo (opcional)</label>
                  <textarea className="campo" id="r-ult" maxLength={300} value={ultimoTrabalho}
                    onChange={(ev) => setUltimoTrabalho(ev.target.value)} placeholder="Ex.: Atendente na padaria X, por 1 ano" />
                  <p className="contador">{ultimoTrabalho.length}/300</p>
                </div>

                <h2 className="bloco-titulo">Sobre você</h2>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-mot">Por que você quer trabalhar na Misturêra?</label>
                  <textarea className="campo" id="r-mot" maxLength={400} value={motivacao}
                    onChange={(ev) => setMotivacao(ev.target.value)} />
                  <p className="contador">{motivacao.length}/400</p>
                  <Erro campo="motivacao" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-sit">Um cliente chega irritado reclamando do pedido. O que você faz?</label>
                  <textarea className="campo" id="r-sit" maxLength={400} value={situacao}
                    onChange={(ev) => setSituacao(ev.target.value)} />
                  <p className="contador">{situacao.length}/400</p>
                  <Erro campo="situacao" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-rot">Você prefere uma rotina bem definida ou resolver imprevistos? Por quê?</label>
                  <textarea className="campo" id="r-rot" maxLength={400} value={rotina}
                    onChange={(ev) => setRotina(ev.target.value)} />
                  <p className="contador">{rotina.length}/400</p>
                  <Erro campo="rotina" />
                </div>

                <div className="grupo">
                  <label className="campo-label" htmlFor="r-cv">Currículo (opcional — PDF, JPG ou PNG, até 5MB)</label>
                  <input className="campo" id="r-cv" type="file" accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(ev) => setCurriculo(ev.target.files?.[0] ?? null)} />
                  <Erro campo="curriculo" />
                </div>

                <label className="lgpd">
                  <input type="checkbox" checked={consentimento} onChange={(ev) => setConsentimento(ev.target.checked)} />
                  <span>{TEXTO_LGPD}</span>
                </label>
                <Erro campo="consentimento" />

                {erroGeral && <p className="erro-campo" role="alert">{erroGeral}</p>}

                <button className="btn btn-verde btn-cheio" onClick={enviar} disabled={enviando} style={{ marginTop: 16 }}>
                  {enviando ? "Enviando..." : "Enviar candidatura"}
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

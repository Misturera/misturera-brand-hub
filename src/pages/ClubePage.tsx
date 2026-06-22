import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { MiniCardSocio } from "@/components/MiniCardSocio";
import { IcCopo, IcSparkles, IcEstrela } from "@/components/icons";
import { passosClube, beneficiosClube, MISTURERACHECK_CADASTRO_URL } from "@/data/clube";

/* Integração preservada com a MistureraCheck:
   - Consulta por CPF no Supabase da MistureraCheck (customers?cpf=eq.{cpf}&select=token)
   - Redireciona para https://mistureracheck.com/cliente/{token}
   - Cadastro externo em mistureracheck.com/pdv/cliente/cadastro
   NÃO alterar endpoints/domínios. */
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

const iconesPasso = { compre: IcCopo, acumule: IcSparkles, resgate: IcEstrela } as const;

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
      <PageHero
        eyebrow="Clube Misturêra"
        titulo="Cada visita vale pontos"
        texto="Acumule pontos a cada compra e troque por descontos."
      />

      {/* Como funciona — 3 passos */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Como funciona</p>
            <h2>Três passos simples</h2>
          </div>
          <div className="clube-passos">
            {passosClube.map((p) => {
              const Icone = iconesPasso[p.icone];
              return (
                <div className="card-v" style={{ textAlign: "center" }} key={p.titulo}>
                  <div className="ico" style={{ margin: "0 auto" }}>
                    <Icone />
                  </div>
                  <h3 style={{ marginTop: 14 }}>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acessar pontos por CPF + mini-cartão */}
      <section className="sec alt">
        <div className="wrap">
          <div className="clube-card">
            <div className="clube-txt">
              <p className="eyebrow-d">Acessar meus pontos</p>
              <h2>Consulte seu saldo pelo CPF</h2>
              <p>
                Digite seu CPF para ver seu saldo e histórico. Você é levado ao seu cartão na
                MistureraCheck.
              </p>
              <div style={{ marginTop: 20, maxWidth: 360, display: "flex", gap: 10 }}>
                <input
                  className="campo"
                  inputMode="numeric"
                  maxLength={14}
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => setCpf(maskCpf(e.target.value))}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  aria-label="CPF"
                  style={{
                    background: "rgba(245,230,200,.08)",
                    border: "1px solid rgba(245,230,200,.22)",
                    color: "var(--creme)",
                  }}
                />
                <button className="btn btn-gold" onClick={handleSearch} disabled={loading}>
                  {loading ? "..." : "Ver"}
                </button>
              </div>
              {error && (
                <p style={{ fontSize: 13, color: "#F4B0A6", marginTop: 12 }} role="alert">
                  {error}
                </p>
              )}
              <p style={{ fontSize: 13, color: "rgba(245,230,200,.55)", marginTop: 14 }}>
                Ainda não é cliente?{" "}
                <a
                  href={MISTURERACHECK_CADASTRO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--dourado-claro)", borderBottom: "1px solid var(--linha-ouro)" }}
                >
                  Cadastre-se aqui
                </a>
              </p>
            </div>
            <MiniCardSocio />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow-d">Benefícios do Clube</p>
            <h2>Tudo o que você ganha</h2>
          </div>
          <ul className="benef">
            {beneficiosClube.map((b) => (
              <li key={b}>
                <IcEstrela />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

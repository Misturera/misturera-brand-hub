import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { IcSeta } from "@/components/icons";

const NotFound = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Erro 404"
        titulo="Esta página saiu para tomar um gelato"
        texto="O endereço que você tentou acessar não existe ou foi movido."
      />
      <section className="sec">
        <div className="wrap" style={{ textAlign: "center", paddingBottom: 40 }}>
          <Link className="btn btn-gold" to="/">
            Voltar para o início <IcSeta />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;

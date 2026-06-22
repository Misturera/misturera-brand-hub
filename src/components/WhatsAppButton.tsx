import { Link } from "react-router-dom";
import { IcWppFab } from "@/components/icons";
import { WPP_GERAL } from "@/data/site";

// CTA geral → leva à escolha de loja (não chuta um número "principal").
export function WhatsAppButton() {
  return (
    <Link className="wpp-fab" to={WPP_GERAL} aria-label="Falar no WhatsApp">
      <IcWppFab />
    </Link>
  );
}

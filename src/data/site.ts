// Constantes globais do site. Não espalhar números/links pelo JSX.

export const INSTAGRAM_HANDLE = "@misturera.gelato";
export const INSTAGRAM_URL = "https://www.instagram.com/misturera.gelato/";

// Mensagem padrão sugerida para abrir conversas de WhatsApp.
export const MENSAGEM_WPP = "Olá! Gostaria de saber mais sobre a Misturêra.";

// CTAs gerais de WhatsApp (topo, hero, FAB) levam à escolha de loja.
// Não chutar um número "principal" — o antigo 5521976114309 foi descontinuado.
export const WPP_GERAL = "/contato#lojas";

// Monta a URL de WhatsApp de uma loja a partir do número (só dígitos, com DDI).
export function urlWpp(numero?: string): string | null {
  if (!numero) return null;
  return `https://wa.me/${numero}?text=${encodeURIComponent(MENSAGEM_WPP)}`;
}

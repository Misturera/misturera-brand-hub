import unidadeSantaCruz from "@/assets/unidade-santa-cruz-fachada.jpg";
import unidadeXerem from "@/assets/unidade-xerem-interior.jpg";
import unidadeGenerica from "@/assets/gelatos-cubas.jpg";

export interface HorarioRow {
  dias: string;
  horas: string;
}

export interface Loja {
  id: string;            // usado em avaliações e âncoras
  nome: string;          // nome curto
  nomeCompleto: string;  // "Misturêra ..."
  endereco: string;
  referencia: string;
  whatsapp?: string;     // só dígitos com DDI; ausente = sem WhatsApp ainda
  telefoneExibicao?: string;
  mapa: string;
  foto: string;
  emBreve?: string;     // ex.: "Inauguração em dezembro" — loja ainda não aberta
}

// Horário comum a todas as unidades.
export const HORARIO_DETALHADO: HorarioRow[] = [
  { dias: "Segunda a Quinta", horas: "13h às 22h" },
  { dias: "Sexta, Sábado e Domingo", horas: "13h às 23h" },
];
export const HORARIO_RESUMO = "Seg–Qui: 13h às 22h · Sex–Dom: 13h às 23h";

export const lojas: Loja[] = [
  {
    id: "santa-cruz",
    nome: "Santa Cruz da Serra",
    nomeCompleto: "Misturêra Santa Cruz da Serra",
    endereco:
      "R. Rio Grande do Norte, Nº 8 — Loja B, Santa Cruz da Serra, Duque de Caxias – RJ, 25260-030",
    referencia: "Ao lado do Subway, no retorno em frente ao Dom.",
    whatsapp: "5521975923985",
    telefoneExibicao: "(21) 97592-3985",
    mapa: "https://www.google.com/maps/search/?api=1&query=R.%20Rio%20Grande%20do%20Norte%2C%208%20-%20Loja%20B%2C%20Santa%20Cruz%20da%20Serra%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025260-030",
    foto: unidadeSantaCruz,
  },
  {
    id: "xerem",
    nome: "Xerém",
    nomeCompleto: "Misturêra Xerém",
    endereco:
      "R. Pastor Manoel Avelino de Souza, Nº 15, Mantiquira, Duque de Caxias – RJ, 25250-406",
    referencia: "Ao lado dos Correios, logo no início da Praça da Mantiqueira.",
    whatsapp: "5521975991559",
    telefoneExibicao: "(21) 97599-1559",
    mapa: "https://maps.app.goo.gl/77oygDvBKPhdGSTV6",
    foto: unidadeXerem,
  },
  {
    id: "piabeta",
    nome: "Piabetá",
    nomeCompleto: "Misturêra Piabetá",
    endereco:
      "R. Arthur Rodrigues Loivos, Nº 300, Piabetá, Magé – RJ, 25931-834",
    referencia: "Próximo ao Galetão de Piabetá.",
    whatsapp: "5521978923835",
    telefoneExibicao: "(21) 97892-3835",
    mapa: "https://maps.app.goo.gl/4yL7QyTVtX4Rif8EA",
    foto: unidadeGenerica,
  },
  {
    id: "vila-sao-luis",
    nome: "Vila São Luís",
    nomeCompleto: "Misturêra Vila São Luís",
    endereco: "Av. Brasil, Nº 241, Vila São Luís, Duque de Caxias – RJ, 25065-171",
    referencia: "",
    mapa: "https://www.google.com/maps/search/?api=1&query=Av.%20Brasil%2C%20241%2C%20Vila%20S%C3%A3o%20Lu%C3%ADs%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025065-171",
    foto: unidadeGenerica, // provisória até chegar a foto da loja
    emBreve: "Inauguração em dezembro",
  },
];

export const lojasAbertas = lojas.filter((l) => !l.emBreve);

export const lojasPorId = Object.fromEntries(lojas.map((l) => [l.id, l]));

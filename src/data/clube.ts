// Conteúdo de marketing do Clube. A integração real (consulta de pontos,
// cadastro) vive na MistureraCheck — ver ClubePage.tsx.

export type IconePasso = "compre" | "acumule" | "resgate";

export interface PassoClube {
  icone: IconePasso;
  titulo: string;
  texto: string;
}

export const passosClube: PassoClube[] = [
  { icone: "compre", titulo: "Compre", texto: "A cada R$ 1,00 você ganha 1 ponto." },
  { icone: "acumule", titulo: "Acumule", texto: "Pontos válidos por 60 dias, renováveis a cada compra." },
  { icone: "resgate", titulo: "Resgate", texto: "10 pontos = R$ 1,00 de desconto." },
];

export const beneficiosClube: string[] = [
  "Descontos exclusivos para membros",
  "Ofertas e lançamentos em primeira mão",
  "Ranking dos melhores clientes",
  "Avalie sua experiência e ganhe pontos bônus",
];

// Endpoints da MistureraCheck (portal do sócio vive em mistureracheck.com).
export const MISTURERACHECK_CADASTRO_URL =
  "https://mistureracheck.com/pdv/cliente/cadastro";

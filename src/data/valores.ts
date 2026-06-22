export type IconeValor =
  | "folha"
  | "coracao"
  | "escudo"
  | "pessoas"
  | "sparkles"
  | "medalha";

export interface Valor {
  icone: IconeValor;
  titulo: string;
  texto: string;
}

export const valores: Valor[] = [
  { icone: "folha", titulo: "Produção Própria", texto: "Desenvolvemos nossos sabores com ingredientes selecionados e processos artesanais controlados." },
  { icone: "coracao", titulo: "Paixão pelo Sabor", texto: "Cada receita é criada com dedicação para oferecer o melhor gelato e açaí da região." },
  { icone: "escudo", titulo: "Qualidade Garantida", texto: "Padrão rigoroso em cada etapa, da seleção dos insumos até o momento que chega a você." },
  { icone: "pessoas", titulo: "Experiência Humanizada", texto: "Atendimento acolhedor, ambiente cuidado e atenção aos detalhes que fazem a diferença." },
  { icone: "sparkles", titulo: "Inovação Constante", texto: "Novos sabores, combinações e experiências para surpreender a cada visita." },
  { icone: "medalha", titulo: "Padrão Premium", texto: "Artesanal com excelência. Cada detalhe reflete nosso compromisso com o melhor." },
];

// Opções do formulário de recrutamento (Trabalhe conosco).

export const UNIDADES_VAGA = [
  "Santa Cruz da Serra",
  "Xerém",
  "Piabetá",
  "Fábrica",
] as const;

export const VAGAS = [
  "Atendente",
  "Produção/Fábrica",
  "Gerente de loja",
  "Outra",
] as const;

export const TURNOS = ["Manhã", "Tarde", "Noite", "Integral"] as const;

export const TRANSPORTES = [
  "A pé",
  "Bicicleta",
  "Ônibus",
  "Moto ou carro próprio",
] as const;

export const INICIOS = [
  "Imediatamente",
  "Em até 15 dias",
  "Mais de 15 dias",
] as const;

export const TEXTO_LGPD =
  "Autorizo o uso dos meus dados exclusivamente para este processo seletivo e permanência no banco de talentos da Misturêra por até 12 meses.";

export const CURRICULO_TIPOS = ["application/pdf", "image/jpeg", "image/png"];
export const CURRICULO_MAX_BYTES = 5 * 1024 * 1024;

import leiteNinho from "@/assets/sabores/leite-ninho.jpg";
import oreo from "@/assets/sabores/oreo.jpg";
import cheesecake from "@/assets/sabores/cheesecake-frutas-vermelhas.jpg";
import pistache from "@/assets/sabores/pistache.jpg";
import chocolateBelga from "@/assets/sabores/chocolate-belga.jpg";
import pacoca from "@/assets/sabores/pacoca.jpg";
import snickers from "@/assets/sabores/snickers.jpg";
import rafaello from "@/assets/sabores/rafaello.jpg";
import prestigio from "@/assets/sabores/prestigio.jpg";
import chocomenta from "@/assets/sabores/chocomenta.jpg";
import doceDeLeite from "@/assets/sabores/doce-de-leite.jpg";
import baunilhaCaramelo from "@/assets/sabores/baunilha-caramelo.jpg";
import banoffee from "@/assets/sabores/banoffee.jpg";
import uvaFrutasVermelhas from "@/assets/sabores/uva-frutas-vermelhas.jpg";
import cafeComLeite from "@/assets/sabores/cafe-com-leite.jpg";
import acaiMorango from "@/assets/sabores/acai-morango.jpg";
import acaiBanana from "@/assets/sabores/acai-banana.jpg";
import acaiMaracuja from "@/assets/sabores/acai-maracuja.jpg";
import acaiGuarana from "@/assets/sabores/acai-guarana.jpg";
import sorbetMorango from "@/assets/sabores/sorbet-morango.jpg";
import sorbetMaracujaManga from "@/assets/sabores/sorbet-maracuja-manga.jpg";
import sorbetFrutasVermelhas from "@/assets/sabores/sorbet-frutas-vermelhas.jpg";

export type Categoria = "Gelato" | "Açaí" | "Sorbet";
export const CATEGORIAS: ("Todos" | Categoria)[] = ["Todos", "Gelato", "Açaí", "Sorbet"];

export const CARDAPIO_ATUALIZADO_EM = "08/04/2026";

export interface Sabor {
  nome: string;
  categoria: Categoria;
  descricao: string;
  foto: string;
  destaque?: boolean;
  vegano?: boolean;
}

export const sabores: Sabor[] = [
  // ---- Gelato (15) ----
  { nome: "Leite Ninho", categoria: "Gelato", foto: leiteNinho, descricao: "Cremosidade do leite em pó que todo mundo ama." },
  { nome: "Oreo", categoria: "Gelato", foto: oreo, descricao: "Pedaços de biscoito Oreo em gelato cremoso." },
  { nome: "Cheesecake de Frutas Vermelhas", categoria: "Gelato", foto: cheesecake, descricao: "Inspirado no clássico cheesecake, com frutas vermelhas de verdade.", destaque: true },
  { nome: "Pistache", categoria: "Gelato", foto: pistache, descricao: "Pistache torrado, cremosidade intensa e aroma marcante.", destaque: true },
  { nome: "Chocolate Belga", categoria: "Gelato", foto: chocolateBelga, descricao: "Cacau nobre com amargor elegante e textura aveludada.", destaque: true },
  { nome: "Paçoca", categoria: "Gelato", foto: pacoca, descricao: "Amendoim torrado com textura cremosa e toque brasileiro." },
  { nome: "Snickers", categoria: "Gelato", foto: snickers, descricao: "Caramelo, amendoim e chocolate em harmonia perfeita." },
  { nome: "Rafaello", categoria: "Gelato", foto: rafaello, descricao: "Coco ralado, amêndoas e leite condensado." },
  { nome: "Prestígio", categoria: "Gelato", foto: prestigio, descricao: "Chocolate com coco, um clássico irresistível." },
  { nome: "Chocomenta", categoria: "Gelato", foto: chocomenta, descricao: "Chocolate intenso com toque refrescante de menta." },
  { nome: "Doce de Leite Mineiro", categoria: "Gelato", foto: doceDeLeite, descricao: "Receita artesanal, caramelizado no ponto certo." },
  { nome: "Baunilha com Caramelo Salgado", categoria: "Gelato", foto: baunilhaCaramelo, descricao: "Fava natural com caramelo salgado artesanal.", destaque: true },
  { nome: "Banoffee", categoria: "Gelato", foto: banoffee, descricao: "Banana, doce de leite e biscoito em perfeita harmonia." },
  { nome: "Uva com Frutas Vermelhas", categoria: "Gelato", foto: uvaFrutasVermelhas, descricao: "Mix frutado com acidez equilibrada." },
  { nome: "Café com Leite", categoria: "Gelato", foto: cafeComLeite, descricao: "Café torrado com a suavidade do leite." },

  // ---- Açaí (4) — vegano ----
  { nome: "Açaí com Morango", categoria: "Açaí", foto: acaiMorango, descricao: "Polpa pura com morango. Sem leite, sem gordura, vegano.", destaque: true, vegano: true },
  { nome: "Açaí com Banana", categoria: "Açaí", foto: acaiBanana, descricao: "Polpa pura com banana. Sem leite, sem gordura, vegano.", vegano: true },
  { nome: "Açaí com Maracujá", categoria: "Açaí", foto: acaiMaracuja, descricao: "Polpa pura com maracujá. Sem leite, sem gordura, vegano.", vegano: true },
  { nome: "Açaí com Guaraná", categoria: "Açaí", foto: acaiGuarana, descricao: "Clássico brasileiro com toque energético. Sem leite, sem gordura, vegano.", vegano: true },

  // ---- Sorbet (3) — vegano ----
  { nome: "Sorbet de Morango", categoria: "Sorbet", foto: sorbetMorango, descricao: "Frescor do morango puro. Sem leite, sem gordura, vegano.", vegano: true },
  { nome: "Sorbet de Maracujá com Manga", categoria: "Sorbet", foto: sorbetMaracujaManga, descricao: "Acidez tropical com doçura da manga. Sem leite, sem gordura, vegano.", destaque: true, vegano: true },
  { nome: "Sorbet de Frutas Vermelhas", categoria: "Sorbet", foto: sorbetFrutasVermelhas, descricao: "Mix de framboesa, amora e mirtilo. Sem leite, sem gordura, vegano.", vegano: true },
];

// Seleção em destaque para a home (6 itens).
export const saboresDestaque: Sabor[] = sabores.filter((s) => s.destaque).slice(0, 6);

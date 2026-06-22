# Misturêra — Site público (brand-hub)

Site institucional da Misturêra (gelato e açaí self-service). Vite + React + TypeScript
(template `vite_react_shadcn_ts`), com integração Supabase. Projeto Lovable.

## Escopo deste trabalho: APRESENTAÇÃO

Esta refatoração é **apenas de apresentação**. Não criar/alterar migrations, tabelas,
RLS ou Edge Functions. Reaproveitar queries/clients existentes. Não trocar domínios nem
endpoints. As recomendações de segurança estão em `ISSUES-SEGURANCA.md` (PR separado).

## Sistema visual (tokens)

Fonte de verdade visual: protótipos HTML aprovados. O CSS foi portado para `src/index.css`
(classes utilitárias `.btn`, `.phero`, `.sec`, `.sabor`, `.unidade`, `.clube-card`, etc.).
Tokens (CSS vars no `:root` de `src/index.css`):

- `--verde #1E3D2F` (primária), `--verde-900 #15311F` (heros/faixas/rodapé), `--musgo #35574D`
- `--dourado #C9A84C` (acento), `--dourado-claro #E6CE8C`, `--dourado-escuro #A8893A`
- `--creme #F5E6C8`, `--marfim #F7F2E8` (fundo claro), `--branco #FFFFFF`
- `--tinta #22372C` (texto), `--tinta-suave #75826F`

Tipografia: **Fraunces** (display, variável — eixos wght/opsz) + **Outfit** (corpo),
carregadas no `index.html`. `tailwind.config.ts`: `font-serif`=Fraunces, `font-sans`=Outfit.

### Regra de contraste (obrigatória)
Texto sobre dourado é **sempre** verde-900 (`--verde-900`), nunca branco/creme.
Ver `.btn-gold`, `.badge-d`, `.mini-card`.

### Padrão de heros
- Home (`/`): **hero vivo** (`HeroVivo` + `useHeroVivo`) — ver seção abaixo.
- Subpáginas: `PageHero` (`.phero`) — degradê `linear-gradient(165deg, verde, verde-900)`
  + brilho dourado radial no topo + grão sutil. Texto creme, eyebrow dourado.
- Seções do corpo alternam `.sec` (marfim) e `.sec.alt` (branco), com **fundo explícito**.
- Ícones: `src/components/icons.tsx`. Outline usa `stroke="currentColor"`, sólidos
  `fill="currentColor"` — nenhum ícone fica invisível por falta de stroke/fill.

## Correção de tema claro (importante)
O app é **travado em claro**. Em `src/index.css`: `html`/`body` com `background:#F7F2E8` e
`color-scheme: only light`; cada seção clara pinta o fundo explicitamente (`.sec`, `.sec.alt`).
`<meta name="color-scheme" content="light">` no `index.html`. Sem isso, o modo escuro do
aparelho pintava o corpo de cinza. **Não** reintroduzir o bloco `.dark`.

## Hero vivo (somente na home)
`src/hooks/useHeroVivo.ts` + `src/components/HeroVivo.tsx`. Parallax por camadas
`[data-depth]` reagindo a inclinação (`deviceorientation`), scroll e mouse, com lerp ~0.06
e um flutuar contínuo leve; o `<h1>` (Fraunces variável) afina o peso no scroll
(wght 500→350 em ~420px). `prefers-reduced-motion` desliga tudo (estático). Sem libs.
O efeito roda **apenas** na home (escopo ao container via ref; listeners limpos no unmount).

## Integração do Clube (NÃO quebrar)
`src/pages/ClubePage.tsx` é acoplado à **MistureraCheck**. Preservar exatamente:
- Consulta por CPF: `customers?cpf=eq.{cpf}&select=token` no Supabase da MistureraCheck →
  redirect `https://mistureracheck.com/cliente/{token}`.
- Cadastro: `https://mistureracheck.com/pdv/cliente/cadastro` (link externo).
- O "120 pontos" do mini-cartão (`MiniCardSocio`) é ilustrativo (marketing); dado real
  só no portal.

## Dados canônicos
Centralizados em `src/data/` — não espalhar números/telefones/links pelo JSX:
- `lojas.ts` — 3 unidades (Santa Cruz, Xerém, Piabetá). WhatsApp por loja; Piabetá ainda
  **sem** número (botão desabilitado até haver número real) e usa foto genérica.
- `sabores.ts` — 22 sabores (15 Gelato, 4 Açaí, 3 Sorbet), selos Destaque/Vegano.
- `valores.ts`, `timeline.ts`, `clube.ts`, `site.ts` (Instagram, mensagem WhatsApp padrão,
  `WPP_GERAL` = `/contato#lojas`).

Regras de WhatsApp: número antigo `5521976114309` **removido**. CTAs gerais (topo, hero, FAB)
→ `/contato#lojas`. Cards de loja usam o número da própria unidade. Instagram: `@misturera.gelato`.

## Rotas
`/`, `/quem-somos`, `/nossa-historia`, `/sabores`, `/como-funciona`, `/unidades`,
`/avalie`, `/clube`, `/contato`, `*` (404). `ScrollManager` rola ao topo a cada rota e
até a âncora `#lojas` quando presente.

## Comandos
- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run lint` — eslint



# Site Oficial da Misturêra — Plano de Implementação

## Visão Geral
Site institucional premium para a Misturêra, gelateria e açaíteria self-service. Identidade visual elegante com paleta verde floresta + off-white cremoso. Mobile-first, com painel administrativo completo via Lovable Cloud.

---

## Identidade Visual
- **Verde Floresta Profundo** (#1F3A34) — hero, cabeçalhos, rodapé
- **Verde Musgo** (#35574D) — botões secundários, detalhes
- **Off-white Cremoso** (#F5F1E8) — fundo principal
- **Bege Areia** (#E7DDCC) — cards, divisões
- **Branco Quente** (#FCFBF7) — textos sobre fundo escuro
- Tipografia limpa e hierárquica, ícones minimalistas, espaçamento generoso

---

## Páginas Públicas

### 1. Home
- **Hero** com imagem placeholder de alto impacto, título "Misturêra", subtítulo sobre gelato self-service, botões "Ver unidades" e "Falar no WhatsApp"
- **Quem somos** — bloco resumido institucional com foto
- **Como funciona** — 5 etapas visuais com ícones (escolha o copo → sirva → combine → pese → aproveite)
- **Sabores em destaque** — grid de cards com foto, nome, categoria e selo especial
- **Nossas unidades** — cards com foto, endereço, horário, botões mapa/WhatsApp/avaliar
- **Nossa história** — resumo com link para página completa
- **Avalie sua experiência** — CTA para página de avaliação
- **CTA final** — bloco de fechamento com chamadas para ação

### 2. Quem Nós Somos
- Blocos modulares: propósito, proposta de valor, diferenciais, produção própria, qualidade, atendimento
- Imagens trocáveis, textos editáveis via admin

### 3. Nossa História
- Foto de abertura, texto principal, linha do tempo com marcos da marca
- Destaque para produção própria e visão futura

### 4. Nossas Unidades
- Lista de 2-3 unidades com: foto, endereço, horário por dia, telefone/WhatsApp
- Botões "Como chegar" (link direto Google Maps) e "Avaliar esta unidade"
- Galeria de fotos opcional por unidade

### 5. Cardápio / Sabores
- Grid visual por categorias (gelato, sorbet, açaí, edição especial, sabor da estação)
- Cards com foto, nome, descrição curta, selo de destaque
- Filtro por categoria

### 6. Como Funciona
- Página dedicada com passos numerados, ícones e fotos placeholder
- Layout didático e leve

### 7. Avalie sua Unidade
- Seleção de unidade → formulário com notas (1-5 estrelas) para: atendimento, limpeza, organização, ambiente, qualidade, experiência geral
- Campo de comentário opcional
- Interface limpa e mobile-friendly

### 8. Fale com o Gelatiere
- Texto institucional curto
- Categorias: dúvidas, sugestões, reclamações, elogios
- Botão WhatsApp em destaque com mensagem pré-configurada
- Formulário de contato opcional

---

## Componentes Globais
- **Navbar** — logo, links das páginas, botão WhatsApp fixo, menu hambúrguer mobile
- **Botão WhatsApp flutuante** — sempre visível no mobile
- **Rodapé** — logo, frase institucional, links rápidos, unidades, horários, redes sociais, política de privacidade

---

## Backend (Lovable Cloud)

### Tabelas do Banco de Dados
- **units** — nome, foto, endereço, horário (JSON por dia), telefone, whatsapp, mapa_url, ativa, ordem
- **flavors** — nome, foto, descrição, categoria, destaque, ativo, ordem
- **reviews** — unit_id, notas (atendimento, limpeza, etc.), comentário, created_at
- **site_content** — chave/valor para textos editáveis (hero, quem somos, história, etc.)
- **site_settings** — logo, favicon, whatsapp principal, redes sociais, rodapé, meta descriptions
- **contacts** — categoria, nome, mensagem, created_at

### Autenticação
- Login com email/senha para administradores

### Storage
- Bucket para imagens (unidades, sabores, banners, institucional)

---

## Painel Administrativo (/admin)

Dashboard protegido por autenticação com seções:
- **Conteúdo** — editar textos de todas as páginas (hero, quem somos, história, como funciona)
- **Unidades** — CRUD completo, ativar/desativar, reordenar, horários por dia
- **Sabores** — CRUD completo, categorizar, destacar, ordenar, upload de foto
- **Avaliações** — visualizar por unidade, filtrar por nota, ler comentários
- **Configurações** — logo, WhatsApp, redes sociais, rodapé, SEO (meta titles/descriptions por página)

---

## Performance e SEO
- Imagens otimizadas com lazy loading
- Títulos e meta descriptions por página
- Estrutura semântica (h1, h2, h3 corretos)
- URLs amigáveis (/quem-somos, /unidades, /sabores, etc.)
- Alt text em todas as imagens


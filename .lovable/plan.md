# Página de Recrutamento — Trabalhe na Misturêra

Página pública com formulário de candidatura, currículo opcional e envio para o banco de dados.
Sem painel administrativo, login ou outras páginas nesta etapa.

## Rota e navegação

- Nova rota `/trabalhe-conosco` com a página `TrabalheConosco`.
- Item "Trabalhe conosco" no menu (desktop e mobile), após "Contato".
- Visual igual ao restante do site: `Layout` + `PageHero` (verde/dourado) e o card de formulário
  já existente (`.form-card`, `.campo`, `.opcao`, `.ok-box`).

## Formulário (4 blocos)

**Bloco 1 — Seus dados**
Nome completo, data de nascimento, WhatsApp com máscara `(XX) XXXXX-XXXX`, bairro e cidade,
unidade de interesse (Santa Cruz da Serra, Xerém, Piabetá, Fábrica) e vaga de interesse
(Atendente, Produção/Fábrica, Gerente de loja, Outra). Todos obrigatórios.

**Bloco 2 — Disponibilidade**
Fins de semana e feriados (Sim/Não), turnos disponíveis (Manhã, Tarde, Noite, Integral — ao menos
um), como chegaria (A pé, Bicicleta, Ônibus, Moto ou carro próprio) e quando pode começar
(Imediatamente, Em até 15 dias, Mais de 15 dias).

**Bloco 3 — Experiência**
Já trabalhou com atendimento ao público ou alimentação (Sim/Não) e último trabalho — função, local
e tempo (opcional, até 300 caracteres).

**Bloco 4 — Sobre você** (obrigatórias, até 400 caracteres cada, com contador)
1. Por que quer trabalhar na Misturêra?
2. Um cliente chega irritado reclamando do pedido. O que você faz?
3. Prefere rotina bem definida ou resolver imprevistos? Por quê?

**Currículo** — upload opcional, rotulado como opcional: PDF, JPG ou PNG, até 5 MB.

**LGPD** — checkbox obrigatório antes do botão: "Autorizo o uso dos meus dados exclusivamente para
este processo seletivo e permanência no banco de talentos da Misturêra por até 12 meses."

## Envio

- Validação de todos os obrigatórios e do formato do WhatsApp (11 dígitos), com mensagens de erro
  por campo.
- Botão desabilitado enquanto envia (bloqueia duplo clique).
- Currículo enviado antes do registro; se o upload falhar, o envio é interrompido com aviso.
- Após sucesso, o formulário é substituído pela confirmação: "Recebemos sua candidatura! Se o seu
  perfil avançar, entraremos em contato pelo WhatsApp."

## Detalhes técnicos

**Tabela `candidatos`** (Lovable Cloud): nome_completo, data_nascimento, whatsapp, bairro_cidade,
unidade_interesse, vaga_interesse, trabalha_fim_de_semana, turnos (array de texto), transporte,
disponibilidade_inicio, tem_experiencia, ultimo_trabalho, motivacao, situacao_cliente,
perfil_rotina, curriculo_url, consentimento_lgpd, status (padrão `novo`), created_at/updated_at.

**Acesso:** RLS ativa. Política de inserção pública (anon + authenticated) para o formulário; nenhuma
política de leitura pública — ninguém consegue listar candidaturas pelo site. A leitura ficará para o
painel de RH, em etapa futura. GRANT de inserção para anon/authenticated e ALL para service_role.

**Storage:** bucket `curriculos` privado, com política que permite apenas envio (upload) público e
nenhuma leitura anônima; o caminho do arquivo é salvo em `curriculo_url`.

**Arquivos:** `src/pages/TrabalheConosco.tsx` (nova), `src/data/recrutamento.ts` (opções dos selects),
`src/App.tsx` (rota) e `src/components/Navbar.tsx` (item de menu). Nenhuma outra página é alterada.

# Issues de Segurança & LGPD (fora do escopo "apresentação")

Estas recomendações tocam backend/RLS/segredos e **não** foram implementadas na
repaginação visual. Devem virar PR(s) separado(s). Registradas aqui conforme a seção 8
do briefing.

## 1. Enumeração CPF → token → portal (risco principal)
`ClubePage` consulta `customers?cpf=eq.{cpf}&select=token` (Supabase da MistureraCheck) e
redireciona para `mistureracheck.com/cliente/{token}`. Qualquer pessoa que digite um CPF
chega ao portal do cliente correspondente. Recomendações:
- **Segundo fator** antes de exibir dados do sócio (data de nascimento, PIN ou código por
  WhatsApp).
- Mover a busca para uma **Edge Function server-side** que valida e aplica rate limiting,
  em vez da consulta pública direta à tabela.

## 2. RLS da tabela `customers`
A role anônima não deveria conseguir mapear livremente CPF → token. Revisar as policies de
RLS para restringir esse acesso. (A anon key ser pública é normal no Supabase; a proteção é
a RLS — o problema é a combinação CPF→token→portal.)

## 3. Rate limiting
Aplicar rate limiting na consulta por CPF (idealmente na Edge Function da recomendação 1).

## 4. Validação de CPF no servidor
Validar dígito verificador do CPF no servidor, além da validação no client.

## 5. LGPD
- Registrar consentimento com **timestamp + versão do texto** no cadastro.
- Ter **aviso de privacidade** claro e acessível.

## 6. Segredos: `.env` versionado
O arquivo `.env` está **versionado** no repositório (contém `VITE_SUPABASE_PROJECT_ID`,
`VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_URL`) e **não** está no `.gitignore`.
Embora a `publishable/anon key` do Supabase seja pública por design (a proteção é a RLS),
o ideal é:
- Adicionar `.env` ao `.gitignore`.
- **Combinar antes de mexer no histórico.** Se decidir remover do versionamento, rotacionar
  as chaves e limpar o histórico (`git filter-repo`/BFG) de forma coordenada — não foi feito
  aqui para não reescrever histórico sem alinhamento.

> Observação: a `ANON_KEY` da MistureraCheck também está hardcoded em `ClubePage.tsx` (já
> estava antes desta refatoração). Mesmo raciocínio: anon key é pública, mas a consulta
> CPF→token deveria ser protegida server-side (itens 1–3).

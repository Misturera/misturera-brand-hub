# API de Triagem — Candidatos (Trabalhe conosco)

Endpoint base:

```
https://ohndxirghofoqdepjllt.supabase.co/functions/v1/rh-candidatos
```

Autenticação: header `x-api-key: <RH_API_KEY>` (ou `Authorization: Bearer <RH_API_KEY>`).
A chave `RH_API_KEY` está guardada como secret no backend deste projeto — copie-a para o
projeto de RH e nunca a exponha no front-end (use apenas em server/edge function do RH).

## Rotas

### Listar candidatos
`GET /rh-candidatos`

Filtros (query string, todos opcionais):
- `status` — `novo`, `em_analise`, `entrevista`, `aprovado`, `reprovado`, `banco_talentos`
- `unidade` — Santa Cruz da Serra | Xerém | Piabetá | Fábrica
- `vaga` — Atendente | Produção/Fábrica | Gerente de loja | Outra
- `desde` — data ISO (ex.: `2026-08-01`)
- `busca` — nome, WhatsApp ou bairro/cidade
- `limit` (padrão 50, máx. 200), `offset`

Resposta: `{ total, limit, offset, candidatos: [...] }` — ordenado do mais recente para o mais antigo,
com todos os campos do formulário (dados, disponibilidade, experiência e as 3 respostas de triagem).

### Detalhe
`GET /rh-candidatos/{id}` → `{ candidato: {...} }`

### Currículo (arquivo privado)
`GET /rh-candidatos/{id}/curriculo` → `{ url, expira_em_segundos: 600 }`
Link temporário de 10 minutos para o PDF/imagem no armazenamento privado.

### Atualizar status da triagem
`PATCH /rh-candidatos/{id}` com corpo `{ "status": "entrevista" }` → `{ candidato: {...} }`

## Exemplo

```bash
curl -H "x-api-key: $RH_API_KEY" \
  "https://ohndxirghofoqdepjllt.supabase.co/functions/v1/rh-candidatos?status=novo&unidade=Xer%C3%A9m&limit=20"
```

## Aviso imediato (webhook) — candidato entra no funil na hora

Quando alguém envia o formulário de "Trabalhe conosco", este projeto dispara um POST
para o endpoint do sistema de RH (secret `RH_WEBHOOK_URL`), com header `x-api-key: <RH_API_KEY>`.

Corpo enviado:

```json
{
  "evento": "candidatura.criada",
  "etapa_funil": "novo",
  "candidato": { "id": "uuid", "nome_completo": "...", "whatsapp": "...", "unidade_interesse": "...", "vaga_interesse": "...", "turnos": ["Manhã"], "motivacao": "...", "situacao_cliente": "...", "perfil_rotina": "...", "curriculo_url": "arquivo.pdf", "status": "novo", "created_at": "..." }
}
```

O RH deve responder 2xx. Se o webhook não estiver configurado ou falhar, o candidato
continua salvo e disponível via `GET /rh-candidatos?status=novo`.

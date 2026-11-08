# Unidade Vila São Luís + unidade de interesse no recrutamento

## 1. Nova unidade: Vila São Luís
- Endereço: Av. Brasil, Nº 241, Vila São Luís, Duque de Caxias – RJ, 25065-171.
- Selo "Inauguração em dezembro" no cartão da loja.
- Telefone/WhatsApp: "A definir" (botões de WhatsApp ficam escondidos, como era com Piabetá).
- Horário: "A definir" só para esta loja (as outras seguem com o horário atual).
- Botão "Como chegar" abrindo o Google Maps nesse endereço.
- Foto principal: a foto enviada. **Nesta mensagem não chegou foto da loja** (só um print do formulário). Até você anexar, uso uma foto provisória da marca e troco assim que receber.
- Aparece automaticamente em Unidades, Contato, rodapé e na home onde as lojas são listadas. Na página Avalie fica fora até a inauguração (não dá para avaliar loja fechada).

## 2. Trabalhe conosco: unidade de interesse de volta
- Volta o campo "Unidade de interesse", **obrigatório**.
- Agora com escolha de **mais de uma loja** (botões que marcam/desmarcam, mesmo visual dos "Sim/Não"): Santa Cruz da Serra, Xerém, Piabetá, Vila São Luís, Fábrica.
- Erro "Escolha ao menos uma unidade." se nenhuma for marcada.
- Vaga de interesse continua escondida.

## 3. Envio ao funil do RH (Pixel Perfect Snapshot)
- As lojas escolhidas vão juntas no envio (ex.: "Unidades de interesse: Xerém, Vila São Luís") nas informações da triagem.
- Vila São Luís passa a existir na lista de unidades que o site envia.
- Importante: a triagem automática "unidade mais próxima pelo CEP" é feita lá no outro sistema. Para a Vila São Luís entrar nesse cálculo e nos filtros de lá, ela precisa ser cadastrada também no Pixel Perfect Snapshot — daqui eu não consigo alterar aquele projeto. No fim te passo um texto pronto para colar no chat de lá.

## Detalhes técnicos
- `src/data/lojas.ts`: nova loja `vila-sao-luis` com campos opcionais novos `horarioAte?`/`aDefinir` e `selo?: "Inauguração em dezembro"`; `UnidadeCard` mostra "A definir" no telefone e no horário quando aplicável, e o selo (`.badge-d`, texto verde-900 sobre dourado).
- `Avalie.tsx` filtra lojas com selo de inauguração.
- `src/data/recrutamento.ts`: `UNIDADES_VAGA` ganha "Vila São Luís".
- `TrabalheConosco.tsx`: estado `unidades: string[]`, validação obrigatória, grava `unidade_interesse` como texto "A, B" (coluna existente, sem migração).
- `notificar-rh`: inclui as unidades em `observacoes` e manda campo `unidade_interesse`; redeploy da função.
- Teste: enviar candidatura com 2 lojas, conferir no banco e retorno 200 do RH, depois apagar o registro de teste.

# WhatsApp da unidade Piabetá

Adicionar o número (21) 97892-3835 à unidade Piabetá. Como os dados das lojas ficam
centralizados em `src/data/lojas.ts` e todas as telas leem de lá, a alteração é em um
único arquivo — nenhuma outra página ou componente muda.

## Onde o número aparece automaticamente

Hoje Piabetá está com `whatsapp: undefined`, então o site mostra "WhatsApp em breve"
e esconde os botões. Ao preencher o número em `lojas.ts`, estes pontos passam a
exibi-lo sem nenhum ajuste extra:

- **Card da unidade** (`UnidadeCard`, usado em `/unidades`): telefone clicável e botão
  "WhatsApp" verde, hoje ocultos para Piabetá.
- **Página de Contato** (`/contato#lojas`): número clicável e botão "Chamar no WhatsApp"
  no cartão de Piabetá, hoje ocultos.
- **Rodapé de todas as páginas** (`Footer`): Piabetá entra na lista de WhatsApps das
  lojas na seção "Contato".

## Alteração única

Em `src/data/lojas.ts`, na loja `piabeta`:
- `whatsapp: "5521978923835"`
- `telefoneExibicao: "(21) 97892-3835"`
- Remover o comentário "WhatsApp ainda não disponível".

## Verificação

Conferir no preview que o card de Piabetá em `/unidades` e em `/contato` mostra o
botão de WhatsApp abrindo `wa.me/5521978923835` e que o rodapé lista o novo número.

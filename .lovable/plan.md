## Diagnóstico

- A cor está sendo aplicada no lugar certo: `src/index.css` é importado por `src/main.tsx`, e o Tailwind usa os tokens de `tailwind.config.ts` como `bg-primary`, `text-primary`, `bg-forest` etc.
- O problema principal é que o valor atual do token não equivale a `#1E3D2F`:
  - Atual no código: `hsl(153 50% 11%)`
  - Resultado real: aproximadamente `#0E2A1D`
  - Correto para `#1E3D2F`: `hsl(153 34% 18%)`
  - OKLCH equivalente: `oklch(33.12% 0.0450 163.09)`
- Na home, a percepção do verde também é mascarada por sobreposições:
  - Hero usa imagem com `opacity-20`.
  - Hero usa gradiente `from-primary via-primary/95 to-secondary/90`, misturando o verde principal com o verde secundário.
  - Navbar usa `bg-primary/95`, não `bg-primary` sólido.

## Plano de alteração

1. **Corrigir o token principal para o valor exato**
   - Trocar todos os tokens que representam o verde-floresta principal de `153 50% 11%` para `153 34% 18%` em `src/index.css`.
   - Aplicar isso em `--primary`, `--foreground`, `--card-foreground`, `--popover-foreground`, `--accent-foreground`, `--ring`, `--forest`, `--sidebar-background` e equivalentes relacionados ao verde principal.
   - Atualizar apenas comentários incorretos que dizem `#1E3D2F` mas apontam para HSL errado.

2. **Fazer varredura global final**
   - Procurar `#1F3A34`, `#1E3D2F`, `153 50% 11%`, `153 34% 18%`, `oklch(` e variações em todo o projeto.
   - Se aparecer `#1F3A34`, substituir por `#1E3D2F`.
   - Se aparecer OKLCH do verde antigo, substituir por `oklch(33.12% 0.0450 163.09)`.
   - Não alterar dourado, verde musgo, off-white, areia, botões de WhatsApp ou qualquer outra cor.

3. **Resolver a diferença visual na prática**
   - Manter o verde principal exato nos fundos que devem ser verdes.
   - Na home, ajustar apenas os elementos que mascaram o verde principal:
     - Navbar: usar `bg-primary` em vez de `bg-primary/95`, se a intenção for cor sólida.
     - Hero: trocar o gradiente misturado com `secondary` por uma sobreposição baseada no próprio `primary`, preservando a imagem de fundo, mas sem mudar para outro verde.
   - Isso evita que o site pareça com outro tom mesmo com o token correto.

4. **Validar visualmente**
   - Abrir a prévia na home e conferir navbar, hero e seções `bg-primary`.
   - Confirmar que o verde carregado corresponde ao padrão intenso solicitado e que não houve mudança em outras cores/estilos fora das interferências do verde principal.
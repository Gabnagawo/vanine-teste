# DESIGN.md — Site Dra. Vanine Lima

## North Star

**The Family Almanac.** O site se comporta como um almanaque de referência ao qual a família
volta sempre — não como uma landing page de marketing. Isso se traduz em: títulos serifados
com peso editorial, categorias/tópicos numerados-organizados como entradas de um livro de
consulta, e tom informativo/acolhedor em vez de persuasivo.

## Cores

| Nome | Token Tailwind | Hex | Papel |
|---|---|---|---|
| Sage Green | `sage` | `#8AA796` | Acento primário — CTAs preenchidos, ícones |
| Sage Green Deep | `sage-dark` | `#6f8c7d` | Hover/tap do acento primário, texto sobre tint sage |
| Sage Green Tint | `sage-light` | `#DCEAE3` | Fundo suave (~12%) em cards com acento sage |
| Heirloom Lilac | `lilac` | `#9E8AAD` | Acento secundário |
| Heirloom Lilac Deep | `lilac-dark` | `#83718f` | Hover/tap do acento secundário, texto sobre tint lilás |
| Heirloom Lilac Tint | `lilac-light` | `#E7E0EC` | Fundo suave (~12%) em cards com acento lilás |
| Grey | `grey` | `#EDECEA` | Fundo de seção alternada |
| Off-white | `offwhite` | `#F9F7F6` | Fundo padrão da página |
| Ink | `ink` | `#2C2B29` | Texto principal |
| Ink Soft | `inksoft` | `#5C5A56` | Texto secundário/descrição |

Fonte única das cores: `src/theme/colors.js`, importado tanto pelo `tailwind.config.js`
quanto pelos componentes que precisam do valor bruto (Motion, `stroke` de SVG).

## Tipografia

- **Source Serif 4** — peso 400 apenas. Reservado exclusivamente para H1 (hero) e H2 (título
  de seção). Nunca em corpo de texto, botão, label ou UI.
- **Inter** — todo o resto: corpo, botões, labels, navegação.

## Espaçamento e raios

- Raio padrão de card: **16px** (`rounded-2xl`) — cards de modalidade, accordion items.
- Raio do card de destaque (hero/foto): **24px** (`rounded-3xl`) — Accent Card.
- Raio customizado do Accordion Item: **18px** (`rounded-[18px]`) — ver componente abaixo.
- Botões: sempre `rounded-full` (pill).

## Movimento

- Curva compartilhada: `cubic-bezier(0.23, 1, 0.32, 1)` — usada em qualquer transição de cor,
  rotação de ícone ou expansão de altura no projeto.
- Não existe spring direcional em uso hoje (o componente que usava uma spring exclusiva,
  `stiffness: 260 / damping: 32`, foi removido do projeto junto com a seção Orientações). Se
  esse padrão voltar, ele deve permanecer exclusivo do componente que o motivou — não deve
  vazar para outros elementos.

## Regras nomeadas

- **One-Accent-Per-Card** — sage e lilás nunca se misturam dentro do mesmo componente.
- **No-Full-Saturation-Fill** — a cor do acento em força total (`sage`/`lilac` puro) só
  aparece em texto, ícone ou badge. Cards e painéis sempre usam o tint (~12%,
  `sage-light`/`lilac-light`).
- **Serif-Is-Rare** — Source Serif 4 só em H1/H2, peso 400, nunca bold/semibold.
- **Flat-By-Design** — zero `box-shadow` em todo o projeto. Profundidade vem só de tint de
  cor e espaço em branco.

## Componentes

### Primary Button
Fundo `sage`, texto branco, `rounded-full`, sem sombra. `whileHover`/`whileTap` transicionam
para `sage-dark`, 0.25s, easing padrão (não a curva customizada do projeto).

### Secondary/Ghost Button
Fundo `lilac-light`, texto `lilac-dark`, `rounded-full`. `whileHover`/`whileTap` transicionam
para `lilac-dark` sólido com texto branco, 0.25s.

### Modality Card (Agendamento)
Fundo branco, `rounded-2xl`, sem borda, sem sombra. Marcador: bolinha lilás antes do título.

### Accent Card (Hero — bio da médica)
Fundo `lilac-light`, `rounded-3xl`, sem sombra, sem borda. Layout foto + texto responsivo
(empilhado no mobile, lado a lado no desktop). É o único lugar do site com corpo de texto
colorido (usa `lilac-dark` no texto) — reforça a regra One-Accent-Per-Card ao ser o único
"momento de destaque" da página.

### Accordion Item (Observações)
Clique único revela o conteúdo (não é "um aberto por vez" — cada card abre/fecha
independente). Raio customizado de **18px**, borda hairline (6% preto) que vira `sage` sólida
quando o card está aberto. Ícone "+" gira 45° na abertura, mesma curva compartilhada do
projeto. Primeira frase de cada parágrafo em negrito quando o conteúdo tem múltiplos
parágrafos (padrão usado no texto oficial "Nosso canal de comunicação").

---

*Este arquivo foi reconstruído a partir do histórico de decisões registrado em conversa —
o arquivo original gerado por `/impeccable document` foi perdido numa troca de máquina/pasta.
Se encontrar o `DESIGN.md` ou o sidecar `.impeccable/design.json` originais em algum backup,
priorize o conteúdo deles sobre este.*

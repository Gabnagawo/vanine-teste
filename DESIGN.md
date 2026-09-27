# DESIGN.md: site Dra. Vanine Lima

## Regra zero: o texto é dela

Todo texto do site (títulos, parágrafos, botões, rótulos, mensagens do WhatsApp, título da aba,
descrições de compartilhamento e textos alternativos das imagens) é o texto oficial e não muda
por decisão de design. O design mexe em cor, tipo, espaço, ordem visual dos blocos e movimento.

## North Star

**O Almanaque da Família.** O site se comporta como um livro de consulta ao qual a família
volta sempre. A foto da Dra. Vanine confirma a ideia: ela está na estante de livros do
consultório, segurando um livro chamado *mãe recém-nascida*. O site inteiro fica na cor clara do
site original, com a foto num quadro de cantos arredondados.

**Foco: celular.** Cada decisão começa em 375 px de largura.

## Ordem dos blocos

1. **Topo** (claro, a cor do site original). No celular, centralizado e nesta ordem: logo, selo
   da clínica, título em duas linhas ("Cuidado pediátrico" / "em todas as fases da vida"), foto e
   os dois botões. No desktop, a foto fica à esquerda e o texto com os botões à direita. Os dois
   botões aparecem na primeira tela em qualquer celular (testado de 320 × 568 a 412 × 915).
2. **Sobre a Dra. Vanine** (lilás claro): retrato e a bio. Veio para depois dos botões para o
   botão caber na primeira tela.
3. **Marque sua consulta** (cinza): horários, horário alternativo, os cinco tipos de consulta e as
   notas de confirmação e cancelamento.
4. **Observações**: os dois itens abrem e fecham com `<details>`, sem JavaScript.
5. **Rodapé** (claro, a cor do site original, separado por um fio): identificação, endereço (que
   abre o mapa), WhatsApp e Instagram.

No celular, uma barra fixa repete o botão "Agendar consulta" depois que o botão do topo sai da
tela, e some enquanto os cartões com os botões de agendar estão à vista.

## Cores

Amostradas da foto (a parede verde) e do logo (sálvia e lilás). Fonte única: `src/style.css`,
no bloco `:root`.

| Token | Hex | Papel | Contraste |
|---|---|---|---|
| `--forest` | `#24392F` | A parede do consultório. Só aparece enquanto a foto carrega | |
| `--accent` | `#3F6152` | Botão principal sobre fundo claro | branco por cima 6,9:1 |
| `--accent-muted` | `#DCEAE3` | Botões dos cartões, fundo do quadro de horários | tinta 11,5:1 |
| `--sage-deep` | `#4A6B5B` | Ícones e a linha do tempo | 4,8:1 sobre sálvia clara |
| `--lilac-text` | `#6A577A` | Lilás do logo escurecido, para texto | 5,4:1 sobre `--lilac-tint` |
| `--lilac-tint` | `#EEE9F1` | Fundo da bio | |
| `--lilac-soft` | `#E4DCEA` | Botão "Ver dúvidas frequentes", horário alternativo, fios do texto do WhatsApp | lilás texto 4,8:1 |
| `--canvas` | `#F9F7F6` | Fundo da página | |
| `--panel` | `#FDFBF8` | Cartões (nunca branco puro) | |
| `--grey` | `#EFEDE9` | Seção de agendamento | |
| `--text` / `--text-2` | `#2C2B29` / `#5C5A56` | Texto principal e secundário | 13,2:1 e 6,4:1 |

Sálvia `#8AA796` e lilás `#9E8AAD` puros ficam no logo e em bordas. Nunca atrás de texto nem
como cor de texto: nas duas formas eles não passam no contraste mínimo.

## Tipografia

- **Source Serif 4**, peso 400 e itálico: H1, H2 e a primeira frase de "Nosso canal de
  comunicação".
- **Inter** 400, 500 e 600: todo o resto.

## Regras nomeadas

- **Um-Acento-Por-Cartão:** sálvia e lilás nunca se misturam no mesmo componente. A consulta de
  urgência usa o lilás; as outras, o sálvia.
- **Sem-Saturação-Cheia:** sálvia e lilás puros só em detalhes. Cartões usam o tom claro.
- **Plano-Por-Desenho:** zero sombra projetada. Profundidade vem de cor, tom e espaço.
- **Vizinhas-Diferentes:** duas seções seguidas nunca usam o mesmo molde de layout.

## Detalhes com assinatura

- **A foto do consultório:** no topo, num quadro de cantos arredondados, respirando bem devagar
  enquanto está na tela.
- **A linha do tempo do bebê:** "Periodicidade das consultas do bebê" é desenhada como uma linha
  do tempo. Ao abrir, a linha se traça de cima para baixo e as fases acendem em sequência.
- **Os combinados do WhatsApp:** cada combinado ganha um fio lilás à esquerda, e a primeira frase
  vira abertura em serifa.

## Movimento

- Curva padrão: `cubic-bezier(0.23, 1, 0.32, 1)`. Entradas: `cubic-bezier(0.16, 1, 0.3, 1)`.
- O topo entra suave no carregamento. Os blocos entram uma vez, quando chegam à tela (só com
  JavaScript; sem ele, tudo já aparece).
- Só `transform` e `opacity` são animados.
- Movimento reduzido: tudo aparece no estado final e nada se mexe, inclusive quando a preferência
  muda com a página aberta.
- Aba escondida ou topo fora da tela: as animações em loop pausam.

## Arquivos

- `index.html`: todo o conteúdo e o texto do site.
- `src/style.css`: tokens e estilos, do celular para cima.
- `src/main.js`: acabamento opcional (entradas, barra fixa, pausas). O site funciona sem ele.
- `public/`: imagens em WebP no tamanho de uso, favicon e imagem de compartilhamento.

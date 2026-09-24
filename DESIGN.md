# DESIGN.md: site Dra. Vanine Lima

## North Star

**O Almanaque da Família.** O site se comporta como um livro de consulta ao qual a família
volta sempre, e não como uma landing page de marketing. A foto da Dra. Vanine confirma a ideia:
ela está na estante de livros do consultório, segurando um livro chamado *mãe recém-nascida*.
Títulos serifados com peso editorial, fases e passos numerados como entradas de um livro, e tom
informativo e acolhedor em vez de persuasivo.

**Foco: celular.** Quase todo visitante chega pelo Instagram, no celular. Cada decisão abaixo
começa em 375 px de largura.

## Uma ação

Todo botão leva ao mesmo lugar: o WhatsApp da Clínica Santa Lourdes, com a mensagem já escrita
para a consulta certa. O rótulo é sempre **Agendar pelo WhatsApp**, porque diz exatamente o que
acontece no toque.

- O botão do topo aparece na primeira tela em qualquer celular (testado de 320 × 568 a 412 × 915).
- No celular, uma barra fixa com o mesmo botão aparece depois que o botão do topo sai da tela, e
  some onde já existe um botão à vista (o cartão da fase, a chamada final e o rodapé).

## Elemento assinatura: a linha do cuidado

A seção "Em que fase está seu filho?" é uma linha do tempo da gestação à adolescência. O pai ou a
mãe escolhe a fase e vê a consulta certa, quando voltar e o botão com a mensagem pronta. É o
momento interativo do site.

- Feita com botões de rádio nativos e CSS (`:has`). Funciona sem JavaScript e com o teclado
  (setas para trocar a fase).
- Navegadores sem `:has` mostram todas as fases em lista, completas.
- A linha verde avança até a fase escolhida; o ponto escolhido tem um halo que respira devagar.

## Cores

Amostradas da foto (a parede verde e a estante) e do logo (sálvia e lilás). Fonte única:
`src/style.css`, no bloco `:root`.

| Token | Hex | Papel | Contraste |
|---|---|---|---|
| `--forest` | `#24392F` | A parede do consultório. Topo, chamada final e rodapé | papel por cima 11,6:1 |
| `--accent` | `#3F6152` | Botão sobre fundo claro | branco por cima 6,9:1 |
| `--accent-hover` | `#2E4A3E` | Hover do botão | branco 9,7:1 |
| `--accent-muted` | `#DCEAE3` | Botão sobre o verde, fundos suaves | tinta 11,5:1 |
| `--sage-deep` | `#4A6B5B` | Ícones e numerais | 4,8:1 sobre sálvia clara |
| `--lilac-text` | `#6A577A` | Lilás do logo escurecido, para texto | 5,4:1 sobre `--lilac-tint` |
| `--lilac-tint` | `#EEE9F1` | Fundo da seção Sobre e do cartão de urgência | |
| `--canvas` | `#F9F7F6` | Fundo da página | |
| `--panel` | `#FDFBF8` | Cartões (nunca branco puro) | |
| `--grey` | `#EFEDE9` | Seções alternadas | |
| `--text` / `--text-2` | `#2C2B29` / `#5C5A56` | Texto principal e secundário | 13,2:1 e 6,4:1 |

Sálvia `#8AA796` e lilás `#9E8AAD` puros ficam no logo e em detalhes. Nunca atrás de texto nem
como cor de texto: nas duas formas eles não passam no contraste mínimo.

## Tipografia

- **Source Serif 4**, peso 400 e itálico: H1, H2 e os numerais dos passos (numerais antigos).
- **Inter** 400, 500 e 600: todo o resto.

Duas famílias, só os pesos em uso.

## Regras nomeadas

- **Uma-Ação:** todo botão é "Agendar pelo WhatsApp". Links de texto cuidam do resto.
- **Um-Acento-Por-Cartão:** sálvia e lilás nunca se misturam no mesmo componente.
- **Sem-Saturação-Cheia:** sálvia e lilás puros só em detalhes. Cartões usam o tom claro.
- **Serifa-É-Rara:** Source Serif 4 só em H1, H2 e numerais, peso 400.
- **Plano-Por-Desenho:** zero `box-shadow`. Profundidade vem de cor, tom e espaço.
- **Vizinhas-Diferentes:** duas seções seguidas nunca usam o mesmo molde de layout.

## Movimento

- Curva padrão: `cubic-bezier(0.23, 1, 0.32, 1)`. Entradas: `cubic-bezier(0.16, 1, 0.3, 1)`.
- O topo entra suave no carregamento; a foto assenta devagar.
- Os blocos entram uma vez, em sequência de 90 ms, quando chegam à tela (só com JavaScript;
  sem ele, tudo já aparece).
- Só `transform` e `opacity` são animados.
- Movimento reduzido ligado: tudo aparece no estado final e nada se mexe, inclusive quando a
  preferência muda com a página aberta.
- Aba escondida ou seção fora da tela: as animações em loop pausam.

## Componentes

- **Botão principal:** pill, `--accent` com texto branco; sobre o verde, `--accent-muted` com
  texto escuro. Altura mínima 52 px.
- **Cartão da fase:** `--panel`, borda fina, raio 18 px.
- **Dúvidas:** `<details>` nativos, raio 18 px, borda fina que vira sálvia quando aberta, ícone "+"
  que gira 45°. Cada um abre e fecha sozinho.
- **Alvos de toque:** 44 px no mínimo em tudo que se toca.

## Arquivos

- `index.html`: todo o conteúdo e o texto do site.
- `src/style.css`: tokens e estilos, do celular para cima.
- `src/main.js`: acabamento opcional (entradas, barra fixa, pausa das animações). O site funciona
  sem ele.
- `public/`: imagens em WebP no tamanho de uso, favicon e imagem de compartilhamento.

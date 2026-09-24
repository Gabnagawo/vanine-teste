# Site Dra. Vanine Lima

Página única em HTML, CSS e um pouco de JavaScript, feita primeiro para o celular.
O Vite só serve o site localmente e gera a pasta de publicação.

## Rodar localmente

```
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar a versão de publicação

```
npm run build
```

A pasta `dist/` é o site pronto. O `wrangler.toml` já aponta o Cloudflare Pages para ela
(projeto `dravaninelima`).

## Onde mudar cada coisa

- **Textos e consultas:** `index.html`. Cada tipo de consulta é um `<li class="mod">`, e as
  observações são os dois `<details class="acc">`.
- **Cores e estilos:** `src/style.css`. As cores ficam no bloco `:root`, no topo.
- **Regras de design:** `DESIGN.md`.

## WhatsApp

Os botões de cada consulta, o horário alternativo e o rodapé usam o WhatsApp da Clínica Santa
Lourdes: `+55 92 98423-5695` (`5592984235695` nos links `wa.me`). Cada link de consulta já leva
a mensagem pronta no parâmetro `text`. O botão "Agendar consulta" do topo leva até a seção
"Marque sua consulta".
Se o número mudar, troque em todos os `wa.me/5592984235695` do `index.html`.

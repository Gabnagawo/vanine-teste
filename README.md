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

- **Textos, consultas e dúvidas:** `index.html`. Cada fase da linha do cuidado é um
  `<article class="panel">`.
- **Cores e estilos:** `src/style.css`. As cores ficam no bloco `:root`, no topo.
- **Regras de design:** `DESIGN.md`.

## WhatsApp

Todos os botões usam o WhatsApp da Clínica Santa Lourdes: `+55 92 98423-5695`
(`5592984235695` nos links `wa.me`). Cada link já leva a mensagem pronta no parâmetro `text`.
Se o número mudar, troque em todos os `wa.me/5592984235695` do `index.html`.

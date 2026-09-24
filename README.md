# Site Dra. Vanine Lima, React + Tailwind

## Rodar localmente

```
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar build de produção (pasta `dist/`, pronta pra deploy)

```
npm run build
```

Arraste a pasta `dist/` no Netlify Drop (app.netlify.com/drop), ou conecte esse repositório
direto no Netlify/Vercel apontando o comando de build para `npm run build` e a pasta de
publicação para `dist`.

## Estrutura

- `src/components/TabbedPanel.jsx` fiel ao `vertical-tabs.tsx` que você mandou: lista
  numerada com barra de progresso no item ativo, legenda que abre com fade+height sob o
  título ativo, e painel que desliza no eixo Y com spring ao trocar de item. A diferença é
  que o painel mostra um ícone + cor da categoria (não uma foto: evitamos fotos de
  crianças de banco de imagens num site médico), e abaixo do painel entra o conteúdo
  completo da categoria (nosso texto é bem mais longo que a legenda curta do original).
  Usado em:
  - `Faq.jsx` (seção "Perguntas e orientações")
  - `Categorias.jsx` (seção "Categorias", incluindo o calendário de vacinação aninhado
    dentro do item "Vacinação", que ainda usa `AnimatedAccordion.jsx` pra as 3 faixas
    etárias)
- `src/components/Hero.jsx`, `Agendamento.jsx`, `Footer.jsx`, `Header.jsx`: demais seções
- Ícones: `lucide-react` (substitui o Hugeicons do prompt original, como o próprio prompt
  sugere como alternativa)
- Cores, tipografia e espaçamento seguem os tokens da identidade visual da Dra. Vanine
  (verde-sálvia `#8AA796`, lilás `#9E8AAD`), configurados em `tailwind.config.js`.

## Números de WhatsApp

- Clínica Santa Lourdes (agendamento, encaixe, rodapé): `+55 92 98423-5695`

Está como constante no topo de `Agendamento.jsx`. Troque ali se mudar.

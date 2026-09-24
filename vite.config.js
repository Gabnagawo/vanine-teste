import { defineConfig } from 'vite'

// Site estático: index.html + src/style.css + src/main.js.
// `npm run build` gera a pasta dist/, publicada no Cloudflare Pages (wrangler.toml).
export default defineConfig({
  build: {
    target: 'es2019',
  },
})

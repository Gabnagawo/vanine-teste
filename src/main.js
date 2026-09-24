// Tudo aqui é acabamento. A página é completa sem este arquivo:
// a escolha da fase funciona só com CSS e todo o texto está no HTML.

const io = (cb, opts) => ('IntersectionObserver' in window ? new IntersectionObserver(cb, opts) : null)

// Entradas suaves: cada bloco aparece uma vez, quando entra na tela.
const reveals = document.querySelectorAll('[data-reveal]')
const revealer = io(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      e.target.classList.add('in')
      revealer.unobserve(e.target)
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
)
if (revealer) reveals.forEach((el) => revealer.observe(el))
else reveals.forEach((el) => el.classList.add('in'))

// Barra fixa do celular: aparece depois que o botão do topo sai da tela
// e some onde já existe um botão melhor à vista (o cartão da fase, a
// chamada final e o rodapé).
const bar = document.getElementById('bar')
const heroCta = document.getElementById('hero-cta')
const covers = ['.panels', '#final', '#rodape'].map((s) => document.querySelector(s)).filter(Boolean)
let heroGone = false
const covering = new Set()
const syncBar = () => bar.classList.toggle('show', heroGone && covering.size === 0)
const barWatcher = io((entries) => {
  for (const e of entries) {
    if (e.target === heroCta) heroGone = !e.isIntersecting && e.boundingClientRect.top < 0
    else if (e.isIntersecting) covering.add(e.target)
    else covering.delete(e.target)
  }
  syncBar()
})
if (barWatcher && bar && heroCta) {
  barWatcher.observe(heroCta)
  covers.forEach((el) => barWatcher.observe(el))
} else if (bar) {
  bar.classList.add('show')
}

// O halo da fase escolhida só respira quando a seção está na tela.
const fases = document.getElementById('consultas')
const fasesWatcher = io((entries) => {
  for (const e of entries) fases.classList.toggle('on', e.isIntersecting)
})
if (fasesWatcher && fases) fasesWatcher.observe(fases)

// Aba escondida: pausa toda animação.
document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('paused', document.hidden)
})

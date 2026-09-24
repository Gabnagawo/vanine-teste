import { MotionConfig } from 'motion/react'
import { Hero } from './components/Hero'
import { Agendamento } from './components/Agendamento'
import { Observacoes } from './components/Observacoes'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-offwhite text-ink">
        <main>
          <Hero />
          <Agendamento />
          <Observacoes />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

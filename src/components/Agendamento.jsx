import { motion } from 'motion/react'
import { colors } from '../theme/colors'
import { Section, SectionHead } from './Section'

const CLINICA_WHATSAPP = '5592984235695'

function waLink(text) {
  return `https://wa.me/${CLINICA_WHATSAPP}?text=${encodeURIComponent(text)}`
}

const MODALIDADES = [
  {
    title: 'Consulta de pré-natal',
    description:
      'Encontro ainda durante a gestação para organizar a chegada do bebê, com orientações que trazem segurança e previsibilidade.',
    cta: 'Agendar pré-natal',
    message: 'Olá, gostaria de agendar uma consulta pré-natal com a Dra. Vanine',
  },
  {
    title: 'Consulta de rotina (puericultura)',
    description:
      'Acompanhamento do crescimento, vacinas, suplementação e desenvolvimento da criança ou adolescente.',
    cta: 'Agendar rotina',
    message: 'Olá, gostaria de agendar uma consulta de rotina (puericultura) com a Dra. Vanine',
  },
  {
    title: 'Consultas para adolescentes',
    description:
      'Acompanhamento voltado à fase da adolescência, com espaço para conversar sobre saúde física, emocional e as mudanças do corpo.',
    cta: 'Agendar consulta para adolescente',
    message: 'Olá, gostaria de agendar uma consulta para adolescente com a Dra. Vanine',
  },
  {
    title: 'Consulta de introdução alimentar',
    description:
      'Orientação sobre o início da alimentação complementar do bebê, a partir dos 6 meses, com segurança e no ritmo certo para cada criança.',
    cta: 'Agendar introdução alimentar',
    message: 'Olá, gostaria de agendar uma consulta de introdução alimentar com a Dra. Vanine',
  },
  {
    title: 'Consulta de urgência',
    description:
      'Em caso de febre, tosse, diarreia e outras doenças comuns da infância, para que você não precise recorrer ao PS.',
    cta: 'Agendar urgência',
    message: 'Olá, gostaria de agendar uma consulta de urgência com a Dra. Vanine',
  },
]

export function Agendamento() {
  return (
    <Section id="agendamento" alt>
      <SectionHead
        title="Marque sua consulta"
        description="Todas as consultas acontecem com horário marcado."
      />

      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="mb-4 flex items-start gap-3.5 rounded-2xl bg-sage-light p-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-sage">
              <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 10H21" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <div>
              <strong className="mb-0.5 block text-[14px] text-ink">Horários fixos de atendimento</strong>
              <span className="text-[13px] text-inksoft">
                Segunda, quarta e sexta à tarde · <span className="whitespace-nowrap">Sábado pela manhã</span>
              </span>
            </div>
          </div>

          <motion.a
            href={waLink('Olá, gostaria de consultar a possibilidade de um horário alternativo com a Clínica Santa Lourdes')}
            initial={false}
            style={{ backgroundColor: colors.lilac.light, color: colors.lilac.dark }}
            whileHover={{ backgroundColor: colors.lilac.dark, color: colors.white }}
            whileTap={{ scale: 0.97, backgroundColor: colors.lilac.dark, color: colors.white }}
            transition={{ duration: 0.25 }}
            className="mb-6 block rounded-2xl px-5 py-4 text-[13px] font-medium lg:mb-8"
          >
            Você precisa de um horário alternativo? Consulte a possibilidade com a Clínica Santa Lourdes.
          </motion.a>

          <ul className="hidden space-y-2 text-[13px] text-inksoft lg:block">
            <li className="relative pl-[18px] before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage">
              Confirmação enviada por WhatsApp, com lembrete 24h antes
            </li>
            <li className="relative pl-[18px] before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage">
              Cancelamento ou reagendamento mediante validação da Clínica
            </li>
          </ul>
        </div>

        <div className="lg:col-span-8">
          {MODALIDADES.map((m) => (
            <div key={m.title} className="mb-3.5 rounded-2xl bg-white p-5 lg:p-6">
              <h3 className="mb-1.5 flex items-center gap-2 text-[17px] font-medium text-ink">
                <span className="h-2 w-2 shrink-0 rounded-full bg-lilac" />
                {m.title}
              </h3>
              <p className="mb-3.5 text-[14px] text-inksoft">{m.description}</p>
              <motion.a
                href={waLink(m.message)}
                initial={false}
                style={{ backgroundColor: colors.sage.light, color: colors.ink }}
                whileHover={{ backgroundColor: colors.sage.dark, color: colors.white }}
                whileTap={{ scale: 0.97, backgroundColor: colors.sage.dark, color: colors.white }}
                transition={{ duration: 0.25 }}
                className="inline-block rounded-full px-6 py-3 text-[14px] font-medium focus-visible:outline-sage-dark"
              >
                {m.cta}
              </motion.a>
            </div>
          ))}

          <ul className="mt-5 space-y-1.5 text-[13px] text-inksoft lg:hidden">
            <li className="relative pl-[18px] before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage">
              Confirmação enviada por WhatsApp, com lembrete 24h antes
            </li>
            <li className="relative pl-[18px] before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage">
              Cancelamento ou reagendamento mediante validação da Clínica
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

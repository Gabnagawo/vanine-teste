import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, CalendarClock, Plus } from 'lucide-react'
import { Section, SectionHead } from './Section'

const EASE = [0.23, 1, 0.32, 1]

// Cada card declara um único acento; ícone e borda derivam dele (One-Accent-Per-Card).
const ACCENTS = {
  sage: {
    iconBg: 'bg-sage-light',
    icon: 'text-sage-dark',
    openBorder: 'border-sage',
    focus: 'focus-visible:outline-sage-dark',
  },
  lilac: {
    iconBg: 'bg-lilac-light',
    icon: 'text-lilac-dark',
    openBorder: 'border-lilac',
    focus: 'focus-visible:outline-lilac-dark',
  },
}

function Sub({ title, children }) {
  return (
    <div className="mb-5">
      <strong className="mb-1 block font-semibold text-ink">{title}</strong>
      <div>{children}</div>
    </div>
  )
}

const ITEMS = [
  {
    id: 'uso-whatsapp',
    title: 'Nosso canal de comunicação',
    icon: MessageCircle,
    accent: 'lilac',
    draft: false,
    content: (
      <>
        <p className="mb-5">
          <strong className="font-semibold text-ink">
            Cuidar também é saber como e quando se comunicar.
          </strong>
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            O contato pelo celular é uma extensão do cuidado e existe para trazer mais segurança e
            proximidade às famílias.
          </strong>{' '}
          Para que essa comunicação seja acolhedora, respeitosa e segura, alguns combinados são
          importantes.
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            O celular é indicado para dúvidas breves relacionadas às orientações da consulta,
            evolução da criança ou tratamentos prescritos.
          </strong>
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            Nem sempre será possível responder imediatamente.
          </strong>{' '}
          Durante os atendimentos, nossa atenção está inteiramente dedicada às crianças e famílias
          que estão em consulta. Sua mensagem será respondida assim que houver disponibilidade para
          fazê-lo com o cuidado necessário.
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            O WhatsApp não é um canal de urgência ou emergência.
          </strong>{' '}
          Diante de sintomas importantes ou de qualquer situação que gere preocupação quanto à
          segurança da criança, me informe do que está acontecendo, mas procure um serviço de pronto
          atendimento.
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            Algumas dúvidas precisam de consulta.
          </strong>{' '}
          Fotos, vídeos e mensagens podem auxiliar, mas não substituem uma avaliação médica. Novos
          sintomas, ou sintomas de vários dias, necessitam de exame clínico presencial. É mais
          seguro.
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            Após enviar sua mensagem, aguarde nosso retorno.
          </strong>{' '}
          Não é necessário repeti-la ou realizar ligações sucessivas.
        </p>

        <p className="mb-5">
          <strong className="font-semibold text-ink">
            Estar disponível não significa estar conectado o tempo todo.
          </strong>{' '}
          Essas orientações são para que possamos cuidar de cada criança com atenção, zelo e
          segurança.
        </p>
      </>
    ),
  },
  {
    id: 'periodicidade',
    title: 'Periodicidade das consultas do bebê',
    icon: CalendarClock,
    accent: 'lilac',
    draft: false,
    content: (
      <>
        <p className="mb-5">
          Os primeiros meses de vida são marcados por importantes mudanças e descobertas. Este
          cronograma foi elaborado para proporcionar previsibilidade e segurança à família, com
          acompanhamento individualizado conforme as necessidades de cada bebê.
        </p>

        <Sub title="Primeiro mês de vida">
          1ª consulta: entre 5 e 7 dias de vida
          <br />
          Reavaliação: por volta de 15 dias de vida (principalmente para acompanhamento do peso)
          <br />
          2ª consulta: entre 30 e 40 dias de vida, de acordo com a necessidade de cada família
        </Sub>

        <Sub title="Do 2º ao 6º mês">
          Consultas mensais, para acompanhamento de crescimento e desenvolvimento, vacinação,
          alimentação, sono, marcos do desenvolvimento e prevenção de doenças e acidentes:
          <br />
          2 meses · 3 meses · 4 meses · 5 meses · 6 meses
        </Sub>

        <Sub title="Após os 6 meses">
          A partir dessa fase, as consultas podem ser bimestrais, conforme a necessidade de cada
          criança. O acompanhamento inclui introdução alimentar, desenvolvimento motor e
          cognitivo, linguagem, comportamento e hábitos saudáveis:
          <br />
          8 meses · 10 meses · 12 meses
        </Sub>

        <Sub title="A partir de 1 ano">Consultas trimestrais.</Sub>

        <Sub title="A partir de 2 anos">Consultas semestrais.</Sub>
      </>
    ),
  },
]

function ObservationCard({ item }) {
  const [open, setOpen] = useState(false)
  const Icon = item.icon
  const accent = ACCENTS[item.accent]
  const panelId = `${item.id}-panel`

  return (
    <div
      className={`overflow-hidden rounded-[18px] border bg-white transition-colors duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
        open ? accent.openBorder : 'border-ink/[0.06]'
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center gap-3.5 p-5 text-left transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:-outline-offset-2 active:bg-offwhite lg:p-6 ${accent.focus}`}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accent.iconBg}`}
        >
          <Icon className={`h-5 w-5 ${accent.icon}`} strokeWidth={1.75} />
        </span>
        <span className="flex-1 text-[15px] font-semibold text-ink">{item.title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0"
        >
          <Plus className="h-4 w-4 text-inksoft" strokeWidth={2} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: EASE },
                opacity: { duration: 0.2, delay: 0.08, ease: EASE },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.22, ease: EASE },
                opacity: { duration: 0.12, ease: EASE },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ transform: 'translateY(-6px)' }}
              animate={{ transform: 'translateY(0px)' }}
              exit={{ transform: 'translateY(-6px)' }}
              transition={{ duration: 0.3, ease: EASE }}
              className="px-5 pb-6 pt-1 lg:pl-[76px] lg:pr-6"
            >
              <div className="max-w-[62ch] text-pretty text-[15px] leading-[1.65] text-inksoft [&>*:last-child]:mb-0">
                {item.content}
              </div>
              {item.draft && (
                <span className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-wide text-inksoft/50">
                  Rascunho — aguardando texto oficial
                </span>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Observacoes() {
  return (
    <Section id="observacoes">
      <SectionHead title="Observações" description="Toque pra ver a resposta." />

      <div className="flex flex-col gap-3">
        {ITEMS.map((item) => (
          <ObservationCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  )
}
